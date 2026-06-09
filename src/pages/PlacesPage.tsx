import { PolaroidCard } from '../components/PolaroidCard'
import { meimeiData } from '../data/meimeiData'

export function PlacesPage() {
  const [featuredPlace, ...otherPlaces] = meimeiData.places

  return (
    <main className="page">
      <section className="page-intro page-intro--places">
        <p className="module-label">Dream Trips</p>
        <h1>想和咩咩一起去</h1>
        <p>把雪景、欧洲、海边和花店街区都贴进旅行相册里。</p>
      </section>

      {featuredPlace ? (
        <section className="featured-place" aria-label="本页精选地点">
          <PolaroidCard item={featuredPlace} variant="wide" tilt="none" />
        </section>
      ) : null}

      <div className="places-grid">
        {otherPlaces.map((item, index) => (
          <PolaroidCard key={item.id} item={item} tilt={index % 2 === 0 ? 'right' : 'left'} />
        ))}
      </div>
    </main>
  )
}
