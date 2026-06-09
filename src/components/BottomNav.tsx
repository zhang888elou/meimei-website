import type { TabKey } from '../types'

interface BottomNavItem {
  key: TabKey
  label: string
  icon: string
}

interface BottomNavProps {
  activeTab: TabKey
  onTabChange: (tab: TabKey) => void
}

const navItems: BottomNavItem[] = [
  { key: 'home', label: '花园', icon: '♕' },
  { key: 'food', label: '爱吃', icon: '♡' },
  { key: 'places', label: '想去', icon: '⌂' },
  { key: 'favorites', label: '喜欢', icon: '✧' },
  { key: 'wishes', label: '愿望', icon: '♔' },
]

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="bottom-nav" aria-label="咩咩网站页面导航">
      {navItems.map((item) => (
        <button
          key={item.key}
          type="button"
          className={`bottom-nav__item${activeTab === item.key ? ' is-active' : ''}`}
          aria-current={activeTab === item.key ? 'page' : undefined}
          onClick={() => onTabChange(item.key)}
        >
          <span className="bottom-nav__icon" aria-hidden="true">
            {item.icon}
          </span>
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  )
}
