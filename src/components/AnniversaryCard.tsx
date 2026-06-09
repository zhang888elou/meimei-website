import type { AnniversaryConfig } from '../types'

interface AnniversaryCardProps {
  anniversary: AnniversaryConfig
}

function getDaysUntilNextAnniversary({ month, day }: AnniversaryConfig): number {
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  let nextAnniversary = new Date(now.getFullYear(), month - 1, day)

  if (nextAnniversary < today) {
    nextAnniversary = new Date(now.getFullYear() + 1, month - 1, day)
  }

  const millisecondsPerDay = 24 * 60 * 60 * 1000
  return Math.round((nextAnniversary.getTime() - today.getTime()) / millisecondsPerDay)
}

export function AnniversaryCard({ anniversary }: AnniversaryCardProps) {
  const daysLeft = getDaysUntilNextAnniversary(anniversary)
  const progress = Math.max(4, Math.min(100, Math.round(((366 - daysLeft) / 366) * 100)))

  return (
    <section className="anniversary-card" aria-labelledby="anniversary-title">
      <p className="module-label" id="anniversary-title">
        {anniversary.label}
      </p>
      <div className="anniversary-card__line">
        <span>距离下一个 {anniversary.month} 月 {anniversary.day} 日</span>
        <strong>还有 {daysLeft} 天</strong>
      </div>
      <div className="anniversary-card__track" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>
      <p>慢慢靠近下一个认真庆祝咩咩的日子。</p>
    </section>
  )
}
