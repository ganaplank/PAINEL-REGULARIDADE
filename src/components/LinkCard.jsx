import React, { useState } from 'react';
import { Star, ExternalLink, Edit2, Trash2, GripVertical } from 'lucide-react';

export default function LinkCard({ link, categoryId, onToggleFav, onEdit, onDelete, onDragStart, onDragOver, onDrop }) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e) => {
    setIsDragging(true);
    e.dataTransfer.setData('text/plain', JSON.stringify({ linkId: link.id, sourceCatId: categoryId }));
    if (onDragStart) onDragStart(e, link, categoryId);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div 
      className={`link-card-component ${isDragging ? 'is-dragging' : ''}`}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={(e) => { e.preventDefault(); if (onDragOver) onDragOver(e); }}
      onDrop={(e) => { if (onDrop) onDrop(e, link, categoryId); }}
    >
      <div className="card-top">
        <div className="card-left-group">
          <div className="drag-handle-card" title="Clique e arraste para reordenar este link">
            <GripVertical size={14} />
          </div>
          <div>
            <h3 className="card-title" onClick={() => onEdit(link)} title="Clique para editar este link">
              {link.nome}
            </h3>
            {link.tag && <span className="card-tag">{link.tag}</span>}
          </div>
        </div>

        <button 
          className={`fav-btn ${link.fav ? 'is-fav' : ''}`} 
          onClick={(e) => { e.stopPropagation(); onToggleFav(link.id); }}
          title={link.fav ? 'Remover dos Favoritos' : 'Marcar como Favorito'}
        >
          <Star size={16} />
        </button>
      </div>

      <div className="card-footer" onClick={(e) => e.stopPropagation()}>
        <a 
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-access"
          title="Acessar site em nova aba"
        >
          <span>Acessar</span>
          <ExternalLink size={13} />
        </a>

        <button 
          className="card-icon-action" 
          onClick={() => onEdit(link)} 
          title="Editar Link"
        >
          <Edit2 size={13} />
        </button>

        <button 
          className="card-icon-action danger" 
          onClick={() => onDelete(link.id)} 
          title="Excluir Link"
        >
          <Trash2 size={13} />
        </button>
      </div>
    </div>
  );
}
