import type { ReactNode } from 'react'

interface SparkleWrapperProps {
  children: ReactNode
  className?: string
}

export function SparkleWrapper({ children, className = '' }: SparkleWrapperProps) {
  return (
    <div className={`sparkle-wrapper ${className}`.trim()}>
      <span className="sparkle sparkle--top-left" aria-hidden="true" />
      <span className="sparkle sparkle--top-right" aria-hidden="true" />
      <span className="sparkle sparkle--bottom-left" aria-hidden="true" />
      <span className="sparkle sparkle--bottom-right" aria-hidden="true" />
      {children}
    </div>
  )
}
