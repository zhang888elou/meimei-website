import { Badge } from './Badge'
import type { WishItem } from '../types'

interface WishCardProps {
  wish: WishItem
  imageLoading?: 'eager' | 'lazy'
}

const statusTone: Record<WishItem['status'], 'rose' | 'gold' | 'lavender'> = {
  想要: 'rose',
  安排中: 'gold',
  已完成: 'lavender',
}

export function WishCard({ wish, imageLoading = 'lazy' }: WishCardProps) {
  return (
    <article className="wish-card">
      <div className="wish-card__image-wrap">
        <img
          className="wish-card__image"
          src={wish.thumbnailUrl}
          alt={wish.imageAlt}
          loading={imageLoading}
          decoding="async"
        />
        <span className="wish-card__ribbon" aria-hidden="true" />
      </div>
      <div className="wish-card__body">
        <div className="wish-card__badges">
          <Badge tone="lavender">{wish.type}</Badge>
          <Badge tone={statusTone[wish.status]}>{wish.status}</Badge>
        </div>
        <h3>{wish.title}</h3>
        <p>{wish.description}</p>
        <div className="wish-card__reason">
          <span>为什么咩咩会喜欢</span>
          <p>{wish.reason}</p>
        </div>
        <p className="wish-card__note">{wish.note}</p>
        <div className="tag-row" aria-label={`${wish.title} 标签`}>
          {wish.tags.map((tag) => (
            <Badge key={tag} tone="pearl">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  )
}
