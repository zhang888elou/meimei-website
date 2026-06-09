import { WishCard } from '../components/WishCard'
import { meimeiData } from '../data/meimeiData'

export function WishesPage() {
  return (
    <main className="page">
      <section className="page-intro page-intro--wishes">
        <p className="module-label">Gift List</p>
        <h1>咩咩愿望清单</h1>
        <p>想吃、想去、想买、想体验，每一个都认真排队等实现。</p>
      </section>

      <div className="wish-list">
        {meimeiData.wishes.map((wish) => (
          <WishCard key={wish.id} wish={wish} />
        ))}
      </div>
    </main>
  )
}
