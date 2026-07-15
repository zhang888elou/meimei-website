import type { CategoryEntry } from '../types'

interface CategoryCardProps {
  category: CategoryEntry
  onSelect: (key: CategoryEntry['key']) => void
}

export function CategoryCard({ category, onSelect }: CategoryCardProps) {
  return (
    <button
      type="button"
      className={`category-card category-card--${category.accent}`}
      onClick={() => onSelect(category.key)}
    >
      <img className="category-card__image" src={category.thumbnailUrl} alt={category.imageAlt} loading="eager" />
      <span className="category-card__glow" aria-hidden="true" />
      <span className="category-card__title">{category.title}</span>
      <span className="category-card__subtitle">{category.subtitle}</span>
    </button>
  )
}
