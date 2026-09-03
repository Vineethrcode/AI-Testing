import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import pdfParse from 'pdf-parse/lib/pdf-parse.js';
import mammoth from 'mammoth';
import { parse as parseCsv } from 'csv-parse/sync';
import { LocalIndex } from 'vectra';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, 'data');
const index = new LocalIndex(path.join(dataDir, 'vector-index'));
const metadataPath = path.join(dataDir, 'documents.json');
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 20 * 1024 * 1024 } });
const app = express();
const port = Number(process.env.PORT || 3001);
const allowedExtensions = new Set(['.pdf', '.docx', '.txt', '.csv', '.json', '.md']);
const ollamaUrl = (process.env.OLLAMA_BASE_URL || 'http://localhost:11434').replace(/\/$/, '');
const embeddingModel = process.env.OLLAMA_EMBEDDING_MODEL || 'nomic-embed-text';
const chatModel = process.env.OLLAMA_CHAT_MODEL || 'gemma3:4b';
const embeddingDimensions = Number(process.env.OLLAMA_EMBEDDING_DIMENSIONS || 768);

app.use(cors());
app.use(express.json());

async function readDocuments() { try { return JSON.parse(await fs.readFile(metadataPath, 'utf8')); } catch { return []; } }
async function writeDocuments(documents) { await fs.mkdir(dataDir, { recursive: true }); await fs.writeFile(metadataPath, JSON.stringify(documents, null, 2)); }
async function extractText(file) {
  const extension = path.extname(file.originalname).toLowerCase();
  if (extension === '.pdf') { const parsed = await pdfParse(file.buffer); return { text: parsed.text, pages: parsed.numpages }; }
  if (extension === '.docx') return { text: (await mammoth.extractRawText({ buffer: file.buffer })).value };
  if (extension === '.csv') return { text: parseCsv(file.buffer.toString('utf8'), { columns: true, skip_empty_lines: true, relax_column_count: true }).map((row) => JSON.stringify(row)).join('\n') };
  if (extension === '.json') return { text: JSON.stringify(JSON.parse(file.buffer.toString('utf8')), null, 2) };
  return { text: file.buffer.toString('utf8') };
}
function cleanText(text) { return text.replace(/\r/g, '').replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim(); }
function chunkText(text, size = 900, overlap = 140) {
  const normalized = text.replace(/\r/g, '').trim();
  if (!normalized) return [];

  const caseStarts = [...normalized.matchAll(/Test Case ID:\s*\d+/g)].map((match) => match.index);
  if (caseStarts.length === 0) {
    const chunks = [];
    let start = 0;
    while (start < normalized.length) {
      let end = Math.min(start + size, normalized.length);
      if (end < normalized.length) {
        const boundary = normalized.lastIndexOf('\n', end);
        if (boundary > start + size * .55) end = boundary;
      }
      const value = normalized.slice(start, end).trim();
      if (value) chunks.push(value);
      if (end >= normalized.length) break;
      start = Math.max(end - overlap, start + 1);
    }
    return chunks;
  }

  const chunks = [];

  for (let i = 0; i < caseStarts.length; i += 1) {
    const start = caseStarts[i];
    const end = i + 1 < caseStarts.length ? caseStarts[i + 1] : normalized.length;
    const block = normalized.slice(start, end).trim();
    if (!block) continue;

    if (block.length <= size) {
      chunks.push(block);
      continue;
    }

    let chunkStart = 0;
    while (chunkStart < block.length) {
      let chunkEnd = Math.min(chunkStart + size, block.length);
      if (chunkEnd < block.length) {
        const paragraphBoundary = block.lastIndexOf('\n\n', chunkEnd);
        const lineBoundary = block.lastIndexOf('\n', chunkEnd);
        const safeBoundary = Math.max(paragraphBoundary, lineBoundary);
        if (safeBoundary > chunkStart + Math.floor(size * 0.55)) chunkEnd = safeBoundary;
      }

      const chunk = block.slice(chunkStart, chunkEnd).trim();
      if (chunk) chunks.push(chunk);
      if (chunkEnd >= block.length) break;
      chunkStart = Math.max(chunkEnd - overlap, chunkStart + 1);
    }
  }

  return chunks.length ? chunks : [normalized];
}
async function ollamaRequest(endpoint, body) {
  const response = await fetch(`${ollamaUrl}${endpoint}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  if (!response.ok) throw new Error(`Ollama request failed (${response.status}). Is Ollama running with the required model pulled?`);
  return response.json();
}
async function embed(values) {
  const response = await ollamaRequest('/api/embed', { model: embeddingModel, input: values });
  return response.embeddings;
}
async function ensureIndex() { await fs.mkdir(dataDir, { recursive: true }); if (!(await index.isIndexCreated())) await index.createIndex({ version: 1, dimensions: embeddingDimensions }); }
async function retrieve(question, topK) {
  await ensureIndex();
  const [queryVector] = await embed([question]);
  const initialResults = await index.queryItems(queryVector, topK);

  console.log('DEBUG retrieve question:', question);
  console.log('DEBUG retrieve initialResults.length:', initialResults.length);
  for (const [index, result] of initialResults.entries()) {
    const metadata = result?.item?.metadata || {};
    console.log('DEBUG initialResults item', index, {
      documentName: metadata.documentName,
      chunkId: metadata.chunkId,
      score: result?.score,
      text: metadata.text,
    });
  }

  const statusIntent = /failed|issues?|problematic|not\s+pass|not\s+passed/i.test(String(question || '')) && /test\s+case|test\s+cases|tests?/i.test(String(question || ''));
  if (statusIntent) {
    const allIndexedItems = await index.listItems();
    const validCaseIds = new Set();
    const sourceByCaseId = new Map();

    for (const item of allIndexedItems) {
      const documentName = String(item?.metadata?.documentName || '');
      if (!/test_cases\.md$/i.test(documentName)) continue;
      const text = String(item?.metadata?.text || '');
      const caseIdMatch = text.match(/Test Case ID:\s*(\d+)/i);
      if (!caseIdMatch) continue;
      const caseId = String(caseIdMatch[1]).trim();
      validCaseIds.add(caseId);
      if (!sourceByCaseId.has(caseId)) sourceByCaseId.set(caseId, item);
    }

    console.log('DEBUG valid Test Case IDs found in test_cases.md:', validCaseIds.size);

    const statusMatches = [];
    const matchedIds = new Set();
    for (const item of allIndexedItems) {
      const text = String(item?.metadata?.text || '');
      const caseIdMatch = text.match(/Test Case ID:\s*(\d+)/i);
      const caseId = caseIdMatch ? String(caseIdMatch[1]).trim() : '';
      if (!caseId || !validCaseIds.has(caseId)) continue;

      const statusMatch = text.match(/Status\s*:\s*([^\r\n]+)/i);
      const statusValue = statusMatch ? statusMatch[1].trim() : '';
      if (!statusValue || /^Pass$/i.test(statusValue)) continue;

      matchedIds.add(caseId);
      statusMatches.push({ item, caseId, statusValue, documentName: String(item?.metadata?.documentName || '') });
    }

    console.log('DEBUG matched IDs for broad status query:', [...matchedIds]);
    statusMatches.forEach((match) => {
      console.log('DEBUG matched status record:', {
        documentName: match.documentName,
        caseId: match.caseId,
        statusValue: match.statusValue,
      });
    });

    const orderedResults = [];
    const seen = new Set();

    for (const caseId of [...matchedIds]) {
      const sourceItem = sourceByCaseId.get(caseId);
      if (sourceItem) {
        const metadata = sourceItem?.metadata || {};
        const key = metadata.id || `${metadata.documentName || 'unknown'}-${metadata.chunkId ?? 'chunk'}-${metadata.text || ''}`;
        if (!seen.has(key)) {
          seen.add(key);
          orderedResults.push({ item: sourceItem, score: 0 });
        }
      }

      for (const match of statusMatches) {
        if (match.caseId !== caseId) continue;
        const metadata = match.item?.metadata || {};
        const key = metadata.id || `${metadata.documentName || 'unknown'}-${metadata.chunkId ?? 'chunk'}-${metadata.text || ''}`;
        if (seen.has(key)) continue;
        seen.add(key);
        orderedResults.push({ item: match.item, score: 0 });
      }
    }

    const sources = orderedResults.map((result) => {
      const metadata = result?.item?.metadata || {};
      return {
        id: metadata.id,
        documentName: metadata.documentName,
        page: metadata.page,
        text: metadata.text,
        score: 0,
        chunkId: metadata.chunkId,
      };
    });

    return { sources, grounded: sources.length > 0 };
  }

  const extractedIds = new Set();
  for (const match of question.matchAll(/Test Case ID:\s*(\d+)/gi)) {
    extractedIds.add(String(match[1]).trim());
  }
  for (const result of initialResults) {
    const text = String(result?.item?.metadata?.text || '');
    for (const match of text.matchAll(/Test Case ID:\s*(\d+)/gi)) {
      extractedIds.add(String(match[1]).trim());
    }
  }

  const exactResults = [];
  const allIndexedItems = await index.listItems();
  for (const testCaseId of extractedIds) {
    const exactPattern = new RegExp(`Test Case ID:\\s*${testCaseId}(?!\\d)`, 'i');
    for (const item of allIndexedItems) {
      const text = String(item?.metadata?.text || '');
      if (exactPattern.test(text)) {
        exactResults.push({ item, score: 0 });
      }
    }
  }

  const dedupedResults = [];
  const seen = new Set();
  for (const result of [...initialResults, ...exactResults]) {
    const metadata = result?.item?.metadata || {};
    const key = metadata.id || `${metadata.documentName || 'unknown'}-${metadata.chunkId ?? 'chunk'}-${metadata.text || ''}`;
    if (seen.has(key)) continue;
    seen.add(key);
    dedupedResults.push(result);
  }

  const sources = dedupedResults.map((result) => {
    const metadata = result?.item?.metadata || {};
    const rawScore = Number.isFinite(result?.score) ? Number(result.score) : 1;
    return {
      id: metadata.id,
      documentName: metadata.documentName,
      page: metadata.page,
      text: metadata.text,
      score: Math.max(0, Math.min(1, 1 - rawScore)),
      chunkId: metadata.chunkId,
    };
  });

  return { sources, grounded: sources.length > 0 && sources.some((source) => source.score >= 0.16) };
}
async function generateAnswer(question, sources, grounded) {
  const fallback = 'The available documents do not contain enough information to answer this confidently.';
  if (!grounded) return fallback;
  const context = sources.map((source, i) => `[Source ${i + 1}: ${source.documentName}${source.page ? `, page ${source.page}` : ''}]\n${source.text}`).join('\n\n');
  const completion = await ollamaRequest('/api/chat', { model: chatModel, stream: false, options: { temperature: 0.1 }, messages: [{ role: 'system', content: 'You answer questions using only the supplied QA document context. Be concise and precise. If the context does not support an answer, say exactly that there is not enough information. Never invent details. Mention source names when useful.' }, { role: 'user', content: `Context:\n${context}\n\nQuestion: ${question}` }] });
  return completion.message?.content || fallback;
}
function sendEvent(response, event, data) { response.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`); }

app.get('/api/health', (_request, response) => response.json({ ok: true, provider: 'ollama', ollamaUrl, embeddingModel, chatModel }));
app.get('/api/documents', async (_request, response) => response.json(await readDocuments()));
app.post('/api/documents', upload.array('documents', 20), async (request, response) => {
  try {
    if (!request.files?.length) return response.status(400).json({ error: 'Choose at least one supported document.' });
    await ensureIndex(); const documents = await readDocuments(); const summaries = [];
    for (const file of request.files) {
      const extension = path.extname(file.originalname).toLowerCase(); if (!allowedExtensions.has(extension)) continue;
      const extracted = await extractText(file); const text = cleanText(extracted.text); if (!text) continue;
      const id = crypto.randomUUID(); const chunks = chunkText(text);
      console.log('DEBUG index document name:', file.originalname);
      console.log('DEBUG index chunk count:', chunks.length);
      chunks.slice(0, 10).forEach((chunk, index) => {
        console.log('DEBUG index chunk', index + 1, {
          length: chunk.length,
          text: chunk,
        });
      });
      const vectors = await embed(chunks); const timestamp = new Date().toISOString();
      for (let i = 0; i < chunks.length; i += 1) {
        const chunkText = chunks[i];
        const testCaseIdMatch = chunkText.match(/Test Case ID:\s*(\d+)/i);
        const testCaseId = testCaseIdMatch ? String(testCaseIdMatch[1]).trim() : null;
        console.log('DEBUG index chunk metadata:', {
          documentName: file.originalname,
          chunkId: i,
          testCaseId,
        });
        await index.upsertItem({ vector: vectors[i], metadata: { id: `${id}-${i}`, documentId: id, documentName: file.originalname, documentType: extension.slice(1), chunkId: i, page: extracted.pages ? Math.min(extracted.pages, Math.floor(i / Math.max(1, chunks.length / extracted.pages)) + 1) : null, testCaseId, text: chunkText, ingestedAt: timestamp } });
      }
      const summary = { id, name: file.originalname, type: extension.slice(1).toUpperCase(), chunks: chunks.length, ingestedAt: timestamp }; documents.unshift(summary); summaries.push(summary);
    }
    await writeDocuments(documents); response.json({ documents, ingested: summaries });
  } catch (error) { console.error(error); response.status(500).json({ error: error.message || 'Ingestion failed.' }); }
});
app.post('/api/ask', async (request, response) => {
  try {
    const question = String(request.body.question || '').trim(); if (!question) return response.status(400).json({ error: 'Ask a question first.' });
    const { sources, grounded } = await retrieve(question, Number(request.body.topK || process.env.TOP_K || 5));
    const answer = await generateAnswer(question, sources, grounded);
    response.json({ answer, grounded, sources, query: question });
  } catch (error) { console.error(error); response.status(500).json({ error: error.message || 'Question failed.' }); }
});
app.post('/api/ask/stream', async (request, response) => {
  response.setHeader('Content-Type', 'text/event-stream'); response.setHeader('Cache-Control', 'no-cache'); response.setHeader('Connection', 'keep-alive');
  try {
    const question = String(request.body.question || '').trim(); if (!question) return response.end();
    sendEvent(response, 'retrieving', { message: 'Searching indexed QA sources.' });
    const { sources, grounded } = await retrieve(question, Number(request.body.topK || process.env.TOP_K || 5));
    sendEvent(response, 'retrieved', { count: sources.length, grounded });
    if (grounded) sendEvent(response, 'generating', { model: chatModel });
    const answer = await generateAnswer(question, sources, grounded);
    sendEvent(response, 'complete', { answer, grounded, sources, query: question });
    response.end();
  } catch (error) { console.error(error); sendEvent(response, 'error', { error: error.message || 'Question failed.' }); response.end(); }
});

app.listen(port, () => console.log(`Tracebase API listening on http://localhost:${port}`));
