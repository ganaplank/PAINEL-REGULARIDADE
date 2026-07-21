import React from 'react';
import { Building2, HardHat, Scale, FileText } from 'lucide-react';
import LinkCard from './LinkCard';

const ICON_MAP = {
  Building2: Building2,
  HardHat: HardHat,
  Scale: Scale,
  FileText: FileText
};

export default function CategorySection({ category, links, columnsClass, onToggleFav, onEdit, onDelete }) {
  const IconComponent = ICON_MAP[category.icon] || FileText;

  if (links.length === 0) return null;

  return (
    <section 
      className="category-block"
      style={{
        '--cat-accent': category.color,
        '--cat-bg-tint': category.bgTint,
        '--cat-border': category.borderColor
      }}
    >
      <div className="category-header">
        <div className="category-title-wrap">
          <div className="category-icon-box">
            <IconComponent size={20} />
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
            categoryColor={category.color}
            onToggleFav={onToggleFav}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </section>
  );
}
