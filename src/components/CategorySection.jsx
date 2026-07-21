import React, { useState } from 'react';
import { Building2, HardHat, Scale, FileText, GripVertical } from 'lucide-react';
import LinkCard from './LinkCard';

const ICON_MAP = {
  Building2: Building2,
  HardHat: HardHat,
  Scale: Scale,
  FileText: FileText
};

export default function CategorySection({ 
  category, 
  links, 
  columnsClass, 
  onToggleFav, 
  onEdit, 
  onDelete,
  onCategoryDragStart,
  onCategoryDrop,
  onCardDrop
}) {
  const [isDraggingCategory, setIsDraggingCategory] = useState(false);
  const IconComponent = ICON_MAP[category.icon] || FileText;

  if (links.length === 0) return null;

  const handleCatDragStart = (e) => {
    setIsDraggingCategory(true);
    e.dataTransfer.setData('category-id', category.id);
    if (onCategoryDragStart) onCategoryDragStart(e, category.id);
  };

  const handleCatDragEnd = () => {
    setIsDraggingCategory(false);
  };

  const handleCatDrop = (e) => {
    e.preventDefault();
    const draggedCatId = e.dataTransfer.getData('category-id');
    if (draggedCatId && onCategoryDrop) {
      onCategoryDrop(draggedCatId, category.id);
      return;
    }

    // Handle card dropped into category container
    const rawData = e.dataTransfer.getData('text/plain');
    if (rawData && onCardDrop) {
      try {
        const { linkId, sourceCatId } = JSON.parse(rawData);
        onCardDrop(linkId, sourceCatId, category.id);
      } catch (err) {
        // ignore
      }
    }
  };

  return (
    <section 
      className={`category-block ${isDraggingCategory ? 'is-dragging' : ''}`}
      style={{
        '--cat-accent': category.color,
        '--cat-bg-tint': category.bgTint,
        '--cat-border': category.borderColor,
        '--cat-header-bg': category.headerBg,
        '--cat-badge-bg': category.badgeBg
      }}
      draggable
      onDragStart={handleCatDragStart}
      onDragEnd={handleCatDragEnd}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleCatDrop}
    >
      <div className="category-header">
        <div className="category-title-wrap">
          <div className="drag-handle-cat" title="Arraste o cartão-mãe para mover esta seção de lugar">
            <GripVertical size={18} />
          </div>
          <div className="category-icon-box">
            <IconComponent size={18} />
          </div>
          <h2 className="category-title">{category.name}</h2>
        </div>

        <span className="category-count-badge">
          {links.length} {links.length === 1 ? 'item' : 'itens'}
        </span>
      </div>

      <div className={`cards-grid ${columnsClass}`}>
        {links.map((link) => (
          <LinkCard
            key={link.id}
            link={link}
            categoryId={category.id}
            onToggleFav={onToggleFav}
            onEdit={onEdit}
            onDelete={onDelete}
            onDrop={(e, targetLink) => {
              e.stopPropagation();
              const rawData = e.dataTransfer.getData('text/plain');
              if (rawData && onCardDrop) {
                try {
                  const { linkId, sourceCatId } = JSON.parse(rawData);
                  onCardDrop(linkId, sourceCatId, category.id, targetLink.id);
                } catch (err) {
                  // ignore
                }
              }
            }}
          />
        ))}
      </div>
    </section>
  );
}
