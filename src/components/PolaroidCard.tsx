import { Badge } from './Badge'
import type { BaseVisualItem, FavoriteItem } from '../types'

interface PolaroidCardProps {
  item: BaseVisualItem | FavoriteItem
  variant?: 'default' | 'showcase' | 'wide'
  tilt?: 'left' | 'right' | 'none'
}

function hasBrand(item: BaseVisualItem | FavoriteItem): item is FavoriteItem {
  return 'brand' in item
}

export function PolaroidCard({ item, variant = 'default', tilt = 'none' }: PolaroidCardProps) {
  return (
    <article className={`polaroid polaroid--${variant} polaroid--tilt-${tilt}`}>
      <div className="polaroid__image-frame">
        <img className="polaroid__image" src={item.imageUrl} alt={item.imageAlt} loading="lazy" />
        <span className="polaroid__tape" aria-hidden="true" />
      </div>
      <div className="polaroid__content">
        <div className="polaroid__meta">
          <Badge tone={variant === 'showcase' ? 'gold' : 'rose'}>{item.category}</Badge>
          {hasBrand(item) ? <span className="polaroid__brand">{item.brand}</span> : null}
        </div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p className="polaroid__note">{item.note}</p>
        <div className="tag-row" aria-label={`${item.title} 标签`}>
          {item.tags.map((tag) => (
            <Badge key={tag} tone="pearl">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  )
}
