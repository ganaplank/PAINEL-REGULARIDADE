import React from 'react';
import { Star, ExternalLink, Edit2, Trash2 } from 'lucide-react';

export default function LinkCard({ link, categoryColor, onToggleFav, onEdit, onDelete }) {
  return (
    <div className="link-card-component" style={{ '--card-accent': categoryColor }}>
      <div>
        <div className="card-top">
          <div>
            <h3 className="card-title">{link.nome}</h3>
            {link.tag && <span className="card-tag">{link.tag}</span>}
          </div>
          <button 
            className={`fav-btn ${link.fav ? 'is-fav' : ''}`} 
            onClick={() => onToggleFav(link.id)}
            title={link.fav ? 'Remover dos Favoritos' : 'Marcar como Favorito'}
          >
            <Star size={18} />
          </button>
        </div>
      </div>

      <div className="card-footer">
        <a 
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-access"
        >
          <span>Acessar Site</span>
          <ExternalLink size={15} />
        </a>

        <button 
          className="card-icon-action" 
          onClick={() => onEdit(link)} 
          title="Editar Link"
        >
          <Edit2 size={15} />
        </button>

        <button 
          className="card-icon-action danger" 
          onClick={() => onDelete(link.id)} 
          title="Excluir Link"
        >
          <Trash2 size={15} />
        </button>
      </div>
    </div>
  );
}
