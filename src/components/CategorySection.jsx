import React from 'react';
import { Building2, HardHat, Scale, FileText } from 'lucide-react';
import LinkCard from './LinkCard';

const ICON_MAP = {
  Building2: Building2,
  HardHat: HardHat,
  Scale: Scale,
  FileText: FileText
};

export default function CategorySection({ category, links, onToggleFav, onEdit, onDelete }) {
  const IconComponent = ICON_MAP[category.icon] || FileText;

  if (links.length === 0) return null;

  return (
    <section className="category-block">
      <div className="category-header">
        <div 
          className="category-badge" 
          style={{ backgroundColor: category.badgeBg, color: category.color }}
        >
          {links.length} {links.length === 1 ? 'link' : 'links'}
        </div>
        <h2 className="category-title">
          <IconComponent size={22} color={category.color} />
          <span>{category.name}</span>
        </h2>
      </div>

      <div className="cards-grid">
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
