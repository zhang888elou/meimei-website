import { PolaroidCard } from '../components/PolaroidCard'
import { meimeiData } from '../data/meimeiData'
import type { FoodItem } from '../types'

function groupByCategory(items: FoodItem[]) {
  const groups = new Map<string, FoodItem[]>()

  items.forEach((item) => {
    groups.set(item.category, [...(groups.get(item.category) ?? []), item])
  })

  return Array.from(groups.entries())
}

export function FoodPage() {
  const priorityFoodIds = new Set(meimeiData.food.slice(0, 4).map((item) => item.id))

  return (
    <main className="page">
      <section className="page-intro page-intro--food">
        <p className="module-label">Pretty Meals</p>
        <h1>咩咩爱吃收藏册</h1>
        <p>甜品、漂亮饭、主食和仪式感餐厅，都先替咩咩收好。</p>
      </section>

      {groupByCategory(meimeiData.food).map(([category, items]) => (
        <section className="collection-section" key={category} aria-labelledby={`food-${category}`}>
          <div className="section-title-row">
            <div>
              <p className="module-label">Food</p>
              <h2 id={`food-${category}`}>{category}</h2>
            </div>
            <span>{items.length} 个收藏</span>
          </div>
          <div className="masonry-grid">
            {items.map((item, index) => (
              <PolaroidCard
                key={item.id}
                item={item}
                tilt={index % 2 === 0 ? 'left' : 'right'}
                imageLoading={priorityFoodIds.has(item.id) ? 'eager' : 'lazy'}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}
