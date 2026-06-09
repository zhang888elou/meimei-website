import { useState } from 'react'

import { BottomNav } from './components/BottomNav'
import { FavoritesPage } from './pages/FavoritesPage'
import { FoodPage } from './pages/FoodPage'
import { HomePage } from './pages/HomePage'
import { PlacesPage } from './pages/PlacesPage'
import { WishesPage } from './pages/WishesPage'
import type { TabKey } from './types'

function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('home')

  const renderPage = () => {
    if (activeTab === 'food') {
      return <FoodPage />
    }

    if (activeTab === 'places') {
      return <PlacesPage />
    }

    if (activeTab === 'favorites') {
      return <FavoritesPage />
    }

    if (activeTab === 'wishes') {
      return <WishesPage />
    }

    return <HomePage onNavigate={setActiveTab} />
  }

  return (
    <div className="app-shell">
      {renderPage()}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}

export default App
