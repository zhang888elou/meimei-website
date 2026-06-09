import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  tone?: 'rose' | 'gold' | 'lavender' | 'pearl'
}

export function Badge({ children, tone = 'rose' }: BadgeProps) {
  return <span className={`badge badge--${tone}`}>{children}</span>
}
