export type TabKey = 'home' | 'food' | 'places' | 'favorites' | 'wishes'

export type WishStatus = '想要' | '安排中' | '已完成'

export type WishType = '想吃' | '想去' | '想买' | '想体验'

export interface HeroContent {
  eyebrow: string
  title: string
  subtitle: string
  imageUrl: string
  thumbnailUrl: string
  imageAlt: string
}

export interface CategoryEntry {
  key: Exclude<TabKey, 'home'>
  title: string
  subtitle: string
  imageUrl: string
  thumbnailUrl: string
  imageAlt: string
  accent: string
}

export interface BaseVisualItem {
  id: string
  title: string
  category: string
  description: string
  tags: string[]
  note: string
  imageUrl: string
  thumbnailUrl: string
  imageAlt: string
}

export type FoodItem = BaseVisualItem

export type PlaceItem = BaseVisualItem

export interface FavoriteItem extends BaseVisualItem {
  brand: string
}

export interface WishItem {
  id: string
  title: string
  type: WishType
  status: WishStatus
  imageUrl: string
  thumbnailUrl: string
  imageAlt: string
  description: string
  reason: string
  note: string
  tags: string[]
}

export interface LoveSentence {
  id: string
  text: string
}

export interface AnniversaryConfig {
  month: number
  day: number
  label: string
}

export interface MeimeiData {
  hero: HeroContent
  categories: CategoryEntry[]
  food: FoodItem[]
  places: PlaceItem[]
  favorites: FavoriteItem[]
  wishes: WishItem[]
  loveSentences: LoveSentence[]
  anniversary: AnniversaryConfig
}
