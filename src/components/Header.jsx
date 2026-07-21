import React from 'react';
import { Scale, Moon, Sun, Plus, RefreshCw } from 'lucide-react';

export default function Header({ theme, toggleTheme, onOpenAddModal, onResetLinks }) {
  return (
    <header className="header-sticky">
      <div className="header-content">
        <div className="logo-group">
          <div className="logo-badge">
            <Scale size={22} />
          </div>
          <div>
            <h1 className="brand-title">
              Central de Regularidade
            </h1>
            <p className="brand-subtitle">Plataforma Corporativa de Certidões e Cadastros</p>
          </div>
        </div>

        <div className="header-actions">
          <button 
            className="btn-icon" 
            onClick={toggleTheme} 
            title={theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}
            aria-label="Alternar tema"
          >
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <button 
            className="btn-icon" 
            onClick={onResetLinks} 
            title="Restaurar Links Padrão"
            aria-label="Restaurar links padrão"
          >
            <RefreshCw size={18} />
          </button>

          <button className="btn-primary" onClick={onOpenAddModal}>
            <Plus size={18} />
            <span>Novo Link</span>
          </button>
        </div>
      </div>
    </header>
  );
}
