import { PolaroidCard } from '../components/PolaroidCard'
import { meimeiData } from '../data/meimeiData'
import type { FavoriteItem } from '../types'

function groupByCategory(items: FavoriteItem[]) {
  const groups = new Map<string, FavoriteItem[]>()

  items.forEach((item) => {
    groups.set(item.category, [...(groups.get(item.category) ?? []), item])
  })

  return Array.from(groups.entries())
}

export function FavoritesPage() {
  return (
    <main className="page">
      <section className="page-intro page-intro--favorites">
        <p className="module-label">Jewelry Box</p>
        <h1>咩咩喜欢的橱窗</h1>
        <p>包包、香水、首饰、小裙子和小玩具，都像礼物一样摆好。</p>
      </section>

      {groupByCategory(meimeiData.favorites).map(([category, items]) => (
        <section className="collection-section" key={category} aria-labelledby={`favorite-${category}`}>
          <div className="section-title-row">
            <div>
              <p className="module-label">Showcase</p>
              <h2 id={`favorite-${category}`}>{category}</h2>
            </div>
            <span>{items.length} 件</span>
          </div>
          <div className="showcase-grid">
            {items.map((item, index) => (
              <PolaroidCard
                key={item.id}
                item={item}
                variant="showcase"
                tilt={index % 3 === 0 ? 'left' : index % 3 === 1 ? 'right' : 'none'}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}
