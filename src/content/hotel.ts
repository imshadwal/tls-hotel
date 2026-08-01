import type { Facility } from '@/types'

export const aboutIntro = {
  eyebrow: 'Hotel in Varanasi',
  title: 'Quiet comfort in Pandeypur',
  subtitle:
    'A boutique hotel in Varanasi for travelers who want calm rooms, free parking, and an easy base near the ghats and temples.',
  body: `The Lavish Stay is a modern hotel in Pandeypur, Varanasi with air-conditioned rooms, private bathrooms, fibre Wi‑Fi, and free on-site parking. Guests stay about 4.5 km from Varanasi Junction and 5.4 km from Kashi Vishwanath Temple — close enough for darshan and day trips, quiet enough for a restful night. Breakfast and Bella Cucina café on site keep mornings simple.`,
}

export const aboutPage = {
  body: `Looking for a hotel in Varanasi that balances comfort with location? The Lavish Stay in Pandeypur offers contemporary AC rooms, attentive service, and free parking — a practical choice for pilgrims, families, and business travelers. After exploring the city’s sacred ghats and lanes, return to a calm stay with Wi‑Fi, breakfast options, and Bella Cucina café downstairs. Kashi Vishwanath Temple is about 5.4 km away; Varanasi Junction is roughly 4.5 km, so arrivals by train stay straightforward.`,
  since:
    'Open since 2023, The Lavish Stay has become a trusted boutique hotel in Pandeypur for guests who want a quieter stay while exploring Varanasi.',
}

export const facilities: Facility[] = [
  {
    title: 'Pick Up & Drop',
    description:
      'Seamless pickup and drop services for a hassle-free arrival and departure experience.',
    icon: 'pickup',
  },
  {
    title: 'Parking Space',
    description: 'Convenient on-site parking with ample space for motorcycles and cars.',
    icon: 'parking',
  },
  {
    title: 'Room Service',
    description: 'Thoughtful in-room service with timely delivery whenever you need it.',
    icon: 'roomService',
  },
  {
    title: 'Fibre Internet',
    description: 'Fast, reliable connectivity for seamless browsing, calls, and streaming.',
    icon: 'wifi',
  },
  {
    title: 'Breakfast',
    description: 'A delightful breakfast selection to start your day with energy and ease.',
    icon: 'breakfast',
  },
]

export const stats = [
  { label: 'Property', value: 1, suffix: '' },
  { label: 'Guests Hosted', value: 5000, suffix: '+' },
  { label: 'Rooms', value: 30, suffix: '+' },
  { label: 'Years', value: 1, suffix: '+' },
  { label: 'Satisfaction', value: 98, suffix: '%' },
]

export const nearbyAttractions = [
  {
    title: 'Kashi Vishwanath Temple',
    distance: '5.4 km',
    description: 'One of Hinduism’s most sacred temples — a defining pilgrimage of Varanasi.',
  },
  {
    title: 'Varanasi Junction',
    distance: '4.5 km',
    description: 'Easy rail connectivity for arrivals and onward journeys across India.',
  },
  {
    title: 'Dashashwamedh Ghat',
    distance: '≈ 5.5 km',
    description: 'The city’s most vibrant ghat, known for the evening Ganga Aarti.',
  },
  {
    title: 'Assi Ghat',
    distance: '≈ 7 km',
    description: 'A calmer riverside stretch, loved for sunrise and a gentler pace.',
  },
]

export type GalleryItem = {
  src: string
  alt: string
  category: 'Rooms' | 'Interiors' | 'Dining' | 'Lifestyle'
}

export const galleryImages: GalleryItem[] = [
  { src: '/images/gallery/tls/tls-03.webp', alt: 'Twin guest room with ensuite', category: 'Rooms' },
  { src: '/images/gallery/tls/tls-08.webp', alt: 'Corridor seating with palms', category: 'Lifestyle' },
  { src: '/images/gallery/tls/tls-10.webp', alt: 'Bella Cucina café façade', category: 'Dining' },
  { src: '/images/gallery/tls/tls-04.webp', alt: 'Evening walkway and chandelier', category: 'Lifestyle' },
  { src: '/images/gallery/tls/tls-06.webp', alt: 'Lounge chairs by the balcony', category: 'Lifestyle' },
  { src: '/images/gallery/tls/tls-02.webp', alt: 'Modern bathroom vanity', category: 'Rooms' },
  { src: '/images/gallery/tls/tls-09.webp', alt: 'Bella Cucina burger and shake', category: 'Dining' },
  { src: '/images/gallery/tls/tls-01.webp', alt: 'Dessert welcome at Bella Cucina', category: 'Dining' },
  { src: '/images/gallery/tls/tls-05.webp', alt: 'Warm corridor wall lighting', category: 'Interiors' },
  { src: '/images/gallery/tls/tls-07.webp', alt: 'Intimate seating nook', category: 'Lifestyle' },
  { src: '/images/gallery/tls/tls-11.webp', alt: 'Styled décor corner', category: 'Interiors' },
  { src: '/images/rooms/minimalist.webp', alt: 'Minimalist Room', category: 'Rooms' },
  { src: '/images/rooms/villa.webp', alt: 'Villa Room', category: 'Rooms' },
  { src: '/images/rooms/club.webp', alt: 'Club Room', category: 'Rooms' },
]
