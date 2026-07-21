import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CategorySection from './components/CategorySection';
import CnpjFormatter from './components/CnpjFormatter';
import AddEditModal from './components/AddEditModal';
import { DEFAULT_CATEGORIES, DEFAULT_LINKS } from './data/defaultLinks';
import { Search, Star, Layers, Grid } from 'lucide-react';

const STORAGE_KEY = 'central_certidoes_links_v2';
const THEME_KEY = 'central_certidoes_theme';
const COLS_KEY = 'central_certidoes_layout_cols';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(THEME_KEY) || 'light';
  });

  const [layoutCols, setLayoutCols] = useState(() => {
    return localStorage.getItem(COLS_KEY) || '3';
  });

  const [linksData, setLinksData] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return DEFAULT_LINKS;
      }
    }
    return DEFAULT_LINKS;
  });

  const [search, setSearch] = useState('');
  const [onlyFavs, setOnlyFavs] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingLink, setEditingLink] = useState(null);

  // Sync Theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  // Sync Layout Columns
  useEffect(() => {
    localStorage.setItem(COLS_KEY, layoutCols);
  }, [layoutCols]);

  // Sync Links
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(linksData));
  }, [linksData]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleToggleFav = (linkId) => {
    setLinksData(prev => {
      const updated = { ...prev };
      Object.keys(updated).forEach(catKey => {
        updated[catKey] = updated[catKey].map(item => 
          item.id === linkId ? { ...item, fav: !item.fav } : item
        );
      });
      return updated;
    });
  };

  const handleDelete = (linkId) => {
    if (!window.confirm('Tem certeza que deseja remover este link?')) return;

    setLinksData(prev => {
      const updated = { ...prev };
      Object.keys(updated).forEach(catKey => {
        updated[catKey] = updated[catKey].filter(item => item.id !== linkId);
      });
      return updated;
    });
  };

  const handleOpenAdd = () => {
    setEditingLink(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (link) => {
    let foundCategory = 'fiscal';
    Object.keys(linksData).forEach(catKey => {
      if (linksData[catKey].some(item => item.id === link.id)) {
        foundCategory = catKey;
      }
    });

    setEditingLink({ ...link, categoryId: foundCategory });
    setIsModalOpen(true);
  };

  const handleSaveLink = (linkItem) => {
    const { categoryId, ...cleanItem } = linkItem;

    setLinksData(prev => {
      const updated = { ...prev };

      if (editingLink) {
        Object.keys(updated).forEach(catKey => {
          updated[catKey] = updated[catKey].filter(item => item.id !== cleanItem.id);
        });
      }

      if (!updated[categoryId]) {
        updated[categoryId] = [];
      }

      updated[categoryId] = [cleanItem, ...updated[categoryId]];
      return updated;
    });
  };

  const handleResetLinks = () => {
    if (window.confirm('Deseja restaurar a lista original de certidões? Suas edições personalizadas serão restauradas.')) {
      setLinksData(DEFAULT_LINKS);
    }
  };

  const getFilteredLinksForCategory = (catId) => {
    const list = linksData[catId] || [];
    return list.filter(item => {
      const matchesSearch = 
        item.nome.toLowerCase().includes(search.toLowerCase()) ||
        item.url.toLowerCase().includes(search.toLowerCase()) ||
        (item.tag && item.tag.toLowerCase().includes(search.toLowerCase()));

      const matchesFav = onlyFavs ? item.fav : true;
      return matchesSearch && matchesFav;
    });
  };

  const totalFilteredCount = DEFAULT_CATEGORIES.reduce((acc, cat) => {
    if (selectedCategory !== 'all' && selectedCategory !== cat.id) return acc;
    return acc + getFilteredLinksForCategory(cat.id).length;
  }, 0);

  const columnsClass = `grid-cols-${layoutCols}`;

  return (
    <div className="app-main">
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenAddModal={handleOpenAdd}
        onResetLinks={handleResetLinks}
      />

      <main className="app-container">
        {/* Toolbar & Layout Control */}
        <div className="toolbar-section">
          <div className="toolbar-row">
            <div className="search-box">
              <Search className="search-icon" size={18} />
              <input
                type="text"
                className="search-input"
                placeholder="Buscar certidão ou link (ex: Receita, TST, Jucesp)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="filter-group">
              <button
                className={`filter-btn ${onlyFavs ? 'active' : ''}`}
                onClick={() => setOnlyFavs(!onlyFavs)}
              >
                <Star size={16} fill={onlyFavs ? 'currentColor' : 'none'} />
                <span>Favoritos</span>
              </button>

              <button
                className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('all')}
              >
                <Layers size={16} />
                <span>Todas Categorias</span>
              </button>
            </div>
          </div>

          {/* Layout Column Options Control */}
          <div className="toolbar-row" style={{ justifyContent: 'flex-end' }}>
            <div className="layout-selector">
              <span className="layout-label">
                <Grid size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                Por linha:
              </span>
              {['auto', '1', '2', '3', '4', '5'].map((num) => (
                <button
                  key={num}
                  className={`col-btn ${layoutCols === num ? 'active' : ''}`}
                  onClick={() => setLayoutCols(num)}
                  title={num === 'auto' ? 'Ajuste Automático Responsivo' : `${num} colunas por linha`}
                >
                  {num === 'auto' ? 'Auto' : num}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Categories rendering */}
        {totalFilteredCount === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">🔍</div>
            <h3>Nenhum registro encontrado</h3>
            <p>Tente alterar os termos da sua pesquisa ou os filtros ativos.</p>
          </div>
        ) : (
          DEFAULT_CATEGORIES.map(category => {
            if (selectedCategory !== 'all' && selectedCategory !== category.id) return null;

            const links = getFilteredLinksForCategory(category.id);
            return (
              <CategorySection
                key={category.id}
                category={category}
                links={links}
                columnsClass={columnsClass}
                onToggleFav={handleToggleFav}
                onEdit={handleOpenEdit}
                onDelete={handleDelete}
              />
            );
          })
        )}

        <CnpjFormatter />
      </main>

      <AddEditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveLink}
        editingLink={editingLink}
        categories={DEFAULT_CATEGORIES}
      />
    </div>
  );
}
