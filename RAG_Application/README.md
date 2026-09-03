# Tracebase

Phase 1 QA Knowledge RAG application for ingesting QA documents and asking grounded questions over retrieved context.

## Setup

1. Install Node.js 18+.
2. Run `npm install`.
3. Copy `.env.example` to `.env`.
4. Install Ollama, then pull the local models: `ollama pull nomic-embed-text` and `ollama pull gemma3:4b`.
5. Run `npm run dev`.
6. Open `http://localhost:5173`.

The RAG pipeline uses Ollama locally for both embeddings and chat generation. No external API key is required.

## Architecture

The React client owns upload, question, and source presentation. The Express API owns parsing, cleaning, overlap chunking, embeddings, retrieval, and LLM prompting. Vectra persists vectors and metadata in `server/data/vector-index`; document summaries live in `server/data/documents.json`. Ollama's `OLLAMA_EMBEDDING_MODEL` is used for both document chunks and queries.

Supported formats: PDF, DOCX, TXT, CSV, JSON. Metadata includes document name/type, chunk ID, page estimate for PDFs, and ingestion timestamp. Retrieval depth is configurable from the UI.

## Phase 1 limitations

- PDF page numbers are estimated from chunk position because the basic PDF parser exposes page count, not per-text-page boundaries.
- Ollama must be running locally and both configured models must be available before ingestion or question answering.
- There is no authentication, document deletion, access control, OCR, streaming, or advanced QA analysis yet.
- The local index is single-process filesystem storage and is intended for a local/team prototype.
