import React, { useEffect, useRef, useState } from 'react';
import { BookOpen, Check, ChevronDown, FileText, FolderOpen, LoaderCircle, MessageSquare, Paperclip, Send, Upload, X } from 'lucide-react';

const API = 'http://localhost:3001/api';

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function Result({ entry }) {
  return <article className="conversation-item">
    <div className="user-question"><span className="eyebrow">YOUR QUESTION</span><p>{entry.question}</p></div>
    <div className="result"><div className={`confidence ${entry.grounded ? '' : 'warning'}`}>{entry.grounded ? 'GROUNDED RESPONSE' : 'INSUFFICIENT CONTEXT'}</div><p className="answer-copy">{entry.answer}</p><div className="sources-heading"><span>SOURCES USED</span><span>{entry.sources.length} retrieved</span></div><div className="sources">{entry.sources.map((source) => <article className="source" key={source.id}><div className="source-meta"><FileText size={14} /><strong>{source.documentName}</strong>{source.page ? <span>Page {source.page}</span> : null}<span className="score">{Math.round(source.score * 100)}%</span></div><p>{source.text}</p></article>)}</div></div>
  </article>;
}

function App() {
  const inputRef = useRef(null);
  const [documents, setDocuments] = useState([]);
  const [files, setFiles] = useState([]);
  const [question, setQuestion] = useState('');
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ingesting, setIngesting] = useState(false);
  const [error, setError] = useState('');
  const [topK, setTopK] = useState(5);
  const [executionState, setExecutionState] = useState('idle');

  useEffect(() => {
    fetch(`${API}/documents`).then((response) => response.json()).then(setDocuments).catch(() => {});
  }, []);

  const addFiles = (event) => {
    const selected = Array.from(event.target.files || []);
    setFiles((current) => [...current, ...selected.filter((file) => !current.some((item) => item.name === file.name && item.size === file.size))]);
    event.target.value = '';
  };

  const ingest = async () => {
    if (!files.length) return;
    setIngesting(true); setError('');
    const form = new FormData();
    files.forEach((file) => form.append('documents', file));
    try {
      const response = await fetch(`${API}/documents`, { method: 'POST', body: form });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Ingestion failed');
      setDocuments(data.documents); setFiles([]);
    } catch (err) { setError(err.message); } finally { setIngesting(false); }
  };

  const ask = async (event) => {
    event.preventDefault();
    const currentQuestion = question.trim();
    if (!currentQuestion || loading) return;
    setLoading(true); setError(''); setExecutionState('retrieving');
    try {
      const response = await fetch(`${API}/ask/stream`, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'text/event-stream' }, body: JSON.stringify({ question: currentQuestion, topK }) });
      if (!response.ok || !response.body) throw new Error('Could not connect to the retrieval service');
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let completed = false;
      const handleEvent = (message) => {
        const lines = message.split('\n');
        const eventName = lines.find((line) => line.startsWith('event:'))?.slice(6).trim();
        const payload = lines.find((line) => line.startsWith('data:'))?.slice(5).trim();
        if (!eventName || !payload) return;
        const data = JSON.parse(payload);
        if (eventName === 'retrieving') setExecutionState('retrieving');
        if (eventName === 'retrieved') setExecutionState(data.grounded ? 'retrieved' : 'complete');
        if (eventName === 'generating') setExecutionState('generating');
        if (eventName === 'complete') { completed = true; setExecutionState('complete'); setConversation((current) => [...current, { question: currentQuestion, ...data }]); setQuestion(''); }
        if (eventName === 'error') throw new Error(data.error);
      };
      while (true) {
        const { value, done } = await reader.read();
        buffer += decoder.decode(value || new Uint8Array(), { stream: !done });
        const messages = buffer.split('\n\n');
        buffer = messages.pop() || '';
        messages.filter(Boolean).forEach(handleEvent);
        if (done) break;
      }
      if (!completed) throw new Error('The retrieval service ended before returning an answer');
    } catch (err) { setError(err.message); setExecutionState('error'); } finally { setLoading(false); }
  };

  const handleQuestionKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      event.currentTarget.form?.requestSubmit();
    }
  };

  return <main className="app-shell">
    <header className="topbar">
      <div className="brand"><div className="brand-mark"><BookOpen size={18} /></div><div><strong>TRACEBASE</strong><span>QA knowledge retrieval</span></div></div>
      <div className="status"><span className="status-dot" /> Local workspace <ChevronDown size={14} /></div>
    </header>

    <section className="intro"><div className="eyebrow">PHASE 01 / KNOWLEDGE BASE</div><h1>Ask your testing<br /><em>knowledge base.</em></h1><p>Grounded answers from the requirements, suites, reports, and scripts your team already trusts.</p></section>

    <section className="workspace">
      <aside className="library-panel">
        <div className="panel-heading"><div><span className="eyebrow">YOUR LIBRARY</span><h2>Documents <small>{documents.length}</small></h2></div><button className="icon-button" title="Choose files" onClick={() => inputRef.current?.click()}><Upload size={17} /></button></div>
        <input ref={inputRef} type="file" hidden multiple accept=".pdf,.docx,.txt,.csv,.json,.md" onChange={addFiles} />
        <button className="dropzone" onClick={() => inputRef.current?.click()}><Paperclip size={20} /><strong>Drop files here</strong><span>PDF, DOCX, TXT, CSV, JSON, MD</span></button>
        {files.length > 0 && <div className="pending"><div className="pending-title">READY TO INGEST <span>{files.length}</span></div>{files.map((file) => <div className="file-row" key={`${file.name}-${file.size}`}><FileText size={16} /><div><strong>{file.name}</strong><span>{formatBytes(file.size)}</span></div><button title="Remove file" onClick={() => setFiles((current) => current.filter((item) => item !== file))}><X size={15} /></button></div>)}<button className="ingest-button" onClick={ingest} disabled={ingesting}>{ingesting ? <LoaderCircle className="spin" size={16} /> : <Check size={16} />}{ingesting ? 'Indexing documents...' : 'Index documents'}</button></div>}
        <div className="indexed-list"><div className="pending-title">INDEXED SOURCES</div>{documents.length === 0 ? <div className="empty-library"><FolderOpen size={20} /><span>Your indexed sources<br />will appear here.</span></div> : documents.map((document) => <div className="indexed-file" key={document.id}><FileText size={16} /><div><strong>{document.name}</strong><span>{document.chunks} chunks · {document.type}</span></div></div>)}</div>
        <div className="library-footer"><span>RETRIEVAL DEPTH</span><select value={topK} onChange={(event) => setTopK(Number(event.target.value))}><option value="3">3 chunks</option><option value="5">5 chunks</option><option value="8">8 chunks</option></select></div>
      </aside>

      <section className={`answer-panel execution-${executionState}`}><div className="answer-header"><div><span className="eyebrow">RETRIEVAL CONSOLE</span><h2>Knowledge answer</h2></div><div className="context-pill"><span className="status-dot" /> Context grounded</div></div>
        <div className="execution-strip" aria-live="polite"><span className={executionState === 'retrieving' ? 'active' : executionState === 'retrieved' || executionState === 'generating' || executionState === 'complete' ? 'done' : ''}><i />Retrieving</span><b>→</b><span className={executionState === 'generating' ? 'active' : executionState === 'complete' ? 'done' : ''}><i />Generating answer</span><b>→</b><span className={executionState === 'complete' ? 'done' : ''}><i />Complete</span></div>
        <div className="answer-body">{conversation.length > 0 ? <div className="conversation">{conversation.map((entry) => <Result entry={entry} key={`${entry.query}-${entry.sources[0]?.id || entry.answer}`} />)}{loading && <div className="loading-state"><LoaderCircle className="spin" size={28} /><p>Searching your sources...</p></div>}</div> : loading ? <div className="loading-state"><LoaderCircle className="spin" size={28} /><p>Searching your sources...</p></div> : <div className="empty-answer"><div className="empty-icon"><MessageSquare size={24} /></div><h3>What do you want to find?</h3><p>Ask about a requirement, test scenario, known bug, or anything inside your indexed QA sources.</p><div className="suggestions"><button onClick={() => setQuestion('What are the highest priority acceptance criteria?')}>Acceptance criteria <span>↗</span></button><button onClick={() => setQuestion('Which areas are covered by regression testing?')}>Regression coverage <span>↗</span></button></div></div>}</div>
        <form className="question-form" onSubmit={ask}><textarea value={question} onChange={(event) => setQuestion(event.target.value)} onKeyDown={handleQuestionKeyDown} placeholder="Ask a question about your QA knowledge base..." rows="2" /><button className="send-button" title="Ask question" disabled={loading || !question.trim()}><Send size={18} /></button></form>
        {error && <div className="error"><X size={15} />{error}</div>}
      </section>
    </section>
    <footer><span>TRACEBASE / QA KNOWLEDGE SYSTEM</span><span>Phase 01 · Retrieval and grounded answers</span></footer>
  </main>;
}

export default App;
