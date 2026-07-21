import React, { useState, useEffect } from 'react';
import { X, Save } from 'lucide-react';

export default function AddEditModal({ isOpen, onClose, onSave, editingLink, categories }) {
  const [category, setCategory] = useState('fiscal');
  const [nome, setNome] = useState('');
  const [url, setUrl] = useState('');
  const [tag, setTag] = useState('');

  useEffect(() => {
    if (editingLink) {
      setCategory(editingLink.categoryId || 'fiscal');
      setNome(editingLink.nome || '');
      setUrl(editingLink.url || '');
      setTag(editingLink.tag || '');
    } else {
      setCategory('fiscal');
      setNome('');
      setUrl('');
      setTag('');
    }
  }, [editingLink, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome.trim() || !url.trim()) return;

    onSave({
      id: editingLink ? editingLink.id : Date.now().toString(),
      categoryId: category,
      nome: nome.trim(),
      url: url.trim(),
      tag: tag.trim() || 'Geral',
      fav: editingLink ? editingLink.fav : false
    });

    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{editingLink ? 'Editar Link' : 'Adicionar Novo Link'}</h2>
          <button className="btn-icon" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Categoria</label>
            <select 
              className="form-control" 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Nome do Serviço / Órgão</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Ex: Receita Federal - CNPJ"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">URL / Endereço Web</label>
            <input 
              type="url" 
              className="form-control" 
              placeholder="https://..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Tag / Rótulo Curto (Opcional)</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Ex: Federal, SP, FGTS"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '24px' }}>
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn-primary">
              <Save size={16} />
              <span>Salvar Link</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
