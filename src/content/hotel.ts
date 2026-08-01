import type { Facility } from '@/types'

export const aboutIntro = {
  eyebrow: 'Welcome',
  title: 'Quiet comfort between the city’s sacred rhythm',
  subtitle: 'A contemporary stay in Pandeypur, crafted for rest and discovery.',
  body: `The Lavish Stay in Varanasi is a modern hotel located in Pandeypur, offering air-conditioned rooms and private bathrooms with easy access to key landmarks — Varanasi Junction Railway Station (about 4.5 km) and Kashi Vishwanath Temple (around 5.4 km). Free parking and attentive service make it a calm base for travelers seeking comfort and accessibility.`,
}

export const aboutPage = {
  body: `Experience modern comfort in the heart of ancient Varanasi at The Lavish Stay. Nestled in Pandeypur, this contemporary hotel offers a perfect blend of convenience and comfort. Unwind in air-conditioned rooms with private bathrooms, ensuring a relaxing retreat after exploring the city’s spiritual wonders. Just a short journey from iconic landmarks, The Lavish Stay puts you at the center of Varanasi’s rich culture. The famous Kashi Vishwanath Temple is a mere 5.4 km away, while Varanasi Junction Railway Station is approximately 4.5 km from the hotel — making arrivals and departures effortless.`,
  since:
    'Since opening in 2023, The Lavish Stay is known for its outstanding service and comfort, making it a top choice for travelers in Varanasi.',
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
  { src: '/images/gallery/tls/tls-03.jpg', alt: 'Twin guest room with ensuite', category: 'Rooms' },
  { src: '/images/gallery/tls/tls-08.jpg', alt: 'Corridor seating with palms', category: 'Lifestyle' },
  { src: '/images/gallery/tls/tls-10.jpg', alt: 'Bella Cucina café façade', category: 'Dining' },
  { src: '/images/gallery/tls/tls-04.jpg', alt: 'Evening walkway and chandelier', category: 'Lifestyle' },
  { src: '/images/gallery/tls/tls-06.jpg', alt: 'Lounge chairs by the balcony', category: 'Lifestyle' },
  { src: '/images/gallery/tls/tls-02.jpg', alt: 'Modern bathroom vanity', category: 'Rooms' },
  { src: '/images/gallery/tls/tls-09.jpg', alt: 'Bella Cucina burger and shake', category: 'Dining' },
  { src: '/images/gallery/tls/tls-01.jpg', alt: 'Dessert welcome at Bella Cucina', category: 'Dining' },
  { src: '/images/gallery/tls/tls-05.jpg', alt: 'Warm corridor wall lighting', category: 'Interiors' },
  { src: '/images/gallery/tls/tls-07.jpg', alt: 'Intimate seating nook', category: 'Lifestyle' },
  { src: '/images/gallery/tls/tls-11.jpg', alt: 'Styled décor corner', category: 'Interiors' },
  { src: '/images/rooms/minimalist.png', alt: 'Minimalist Room', category: 'Rooms' },
  { src: '/images/rooms/villa.png', alt: 'Villa Room', category: 'Rooms' },
  { src: '/images/rooms/club.png', alt: 'Club Room', category: 'Rooms' },
]
