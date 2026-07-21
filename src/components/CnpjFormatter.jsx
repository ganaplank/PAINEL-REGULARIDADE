import React, { useState } from 'react';
import { FileCode, FileCheck, Copy, Trash2, Check } from 'lucide-react';

export default function CnpjFormatter() {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  const formatCnpjs = (inputText) => {
    if (!inputText) return '';
    // Substitui sequências de 14 dígitos não formatados pelo padrão 00.000.000/0000-00
    return inputText.replace(/\b(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})\b/g, '$1.$2.$3/$4-$5');
  };

  const handleFormat = () => {
    const formatted = formatCnpjs(text);
    setText(formatted);
  };

  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setText('');
  };

  return (
    <section className="cnpj-panel">
      <div className="cnpj-header">
        <div className="cnpj-title">
          <FileCode size={20} className="text-primary" />
          <span>Bloco Rápido & Formatação de CNPJ</span>
        </div>
      </div>

      <textarea
        className="cnpj-textarea"
        placeholder="Cole os números de CNPJ aqui (ex: 12345678000199) e clique em 'Formatar CNPJs'..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="cnpj-actions">
        <button className="btn-primary" onClick={handleFormat}>
          <FileCheck size={16} />
          <span>Formatar CNPJs</span>
        </button>

        <button className="btn-secondary" onClick={handleCopy} disabled={!text}>
          {copied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
          <span>{copied ? 'Copiado!' : 'Copiar Texto'}</span>
        </button>

        <button className="btn-secondary" onClick={handleClear} disabled={!text}>
          <Trash2 size={16} />
          <span>Limpar</span>
        </button>
      </div>
    </section>
  );
}
