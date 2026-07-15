import { useState } from 'react'

import { AnniversaryCard } from '../components/AnniversaryCard'
import { Badge } from '../components/Badge'
import { CategoryCard } from '../components/CategoryCard'
import { LoveNote } from '../components/LoveNote'
import { PolaroidCard } from '../components/PolaroidCard'
import { SparkleWrapper } from '../components/SparkleWrapper'
import { WishCard } from '../components/WishCard'
import { meimeiData } from '../data/meimeiData'
import type { TabKey } from '../types'

interface HomePageProps {
  onNavigate: (tab: TabKey) => void
}

export function HomePage({ onNavigate }: HomePageProps) {
  const recentRecords = [
    meimeiData.food[8],
    meimeiData.places[2],
    meimeiData.favorites[0],
    meimeiData.food[12],
  ].filter(Boolean)

  const surprisePool = [
    meimeiData.food[7]?.title,
    meimeiData.places[0]?.title,
    meimeiData.favorites[9]?.title,
    meimeiData.loveSentences[2]?.text,
  ].filter((item): item is string => Boolean(item))

  const [surprise, setSurprise] = useState<string>(surprisePool[0] ?? '')

  const pickSurprise = () => {
    const nextIndex = Math.floor(Math.random() * surprisePool.length)
    setSurprise(surprisePool[nextIndex] ?? '')
  }

  return (
    <main className="page page--home">
      <SparkleWrapper className="garden-hero">
        <img
          className="garden-hero__image"
          src={meimeiData.hero.thumbnailUrl}
          alt={meimeiData.hero.imageAlt}
          loading="eager"
          decoding="async"
        />
        <div className="garden-hero__content">
          <p>{meimeiData.hero.eyebrow}</p>
          <h1>{meimeiData.hero.title}</h1>
          <span>Only For You</span>
          <strong>{meimeiData.hero.subtitle}</strong>
        </div>
      </SparkleWrapper>

      <LoveNote loveSentences={meimeiData.loveSentences} />
      <AnniversaryCard anniversary={meimeiData.anniversary} />

      <section className="section-block" aria-labelledby="category-title">
        <div className="ornament-heading">
          <span aria-hidden="true" />
          <h2 id="category-title">咩咩的小花园入口</h2>
          <span aria-hidden="true" />
        </div>
        <div className="category-grid">
          {meimeiData.categories.map((category) => (
            <CategoryCard key={category.key} category={category} onSelect={onNavigate} />
          ))}
        </div>
      </section>

      <section className="section-block" aria-labelledby="recent-title">
        <div className="ornament-heading">
          <span aria-hidden="true" />
          <h2 id="recent-title">我们的美好瞬间</h2>
          <span aria-hidden="true" />
        </div>
        <div className="memory-collage">
          {recentRecords.map((item, index) => (
            <PolaroidCard
              key={item.id}
              item={item}
              tilt={index % 2 === 0 ? 'left' : 'right'}
              imageLoading={index < 2 ? 'eager' : 'lazy'}
            />
          ))}
        </div>
      </section>

      <section className="section-block" aria-labelledby="wish-summary-title">
        <div className="section-title-row">
          <div>
            <p className="module-label">Gift List</p>
            <h2 id="wish-summary-title">愿望清单摘要</h2>
          </div>
          <button className="text-link-button" type="button" onClick={() => onNavigate('wishes')}>
            查看全部
          </button>
        </div>
        <div className="home-wish-list">
          {meimeiData.wishes.slice(0, 2).map((wish) => (
            <WishCard key={wish.id} wish={wish} imageLoading="lazy" />
          ))}
        </div>
      </section>

      <section className="surprise-note" aria-labelledby="surprise-title">
        <div>
          <Badge tone="gold">今日小惊喜</Badge>
          <h2 id="surprise-title">今天可以先安排</h2>
          <p>{surprise}</p>
        </div>
        <button type="button" onClick={pickSurprise}>
          换一个
        </button>
      </section>
    </main>
  )
}
