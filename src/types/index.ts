export type Room = {
  id: string
  slug: string
  name: string
  price: number
  beds: number
  sizeSqft: number
  parking: string
  image: string
  gallery: string[]
  shortDescription: string
  description: string
  amenities: string[]
  inventory: number
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  image: string
  content: string[]
}

export type Facility = {
  title: string
  description: string
  icon: 'pickup' | 'parking' | 'roomService' | 'wifi' | 'breakfast'
}

export type NavItem = {
  label: string
  path: string
}
