import type { Room } from '@/types'

export const rooms: Room[] = [
  {
    id: 'minimalist',
    slug: 'minimalist',
    name: 'Minimalist Room',
    price: 3500,
    beds: 1,
    sizeSqft: 175,
    parking: 'Motorcycle, Car',
    image: '/images/rooms/minimalist.webp',
    gallery: [
      '/images/rooms/minimalist.webp',
      '/images/gallery/IMG_1179.jpg',
      '/images/gallery/IMG_1184.jpg',
    ],
    shortDescription:
      'Our cozy Minimalist Room is perfect for those seeking a peaceful retreat. It comes with all the basic amenities you need for a comfortable stay.',
    description:
      'Discover the essence of comfort and simplicity in our Minimalist Rooms. Designed for those who appreciate understated elegance, these cozy rooms offer a King Size Bed, air conditioning, and a modern TV. With all the essential amenities provided, these rooms are perfect for a straightforward yet comfortable stay. Priced at ₹3,500 per night, we offer 5 of these rooms, each crafted to deliver a clean and pleasant environment.',
    amenities: [
      'Air Conditioner',
      'Big TV',
      'Wifi',
      'Door Key',
      'Tissue Box',
      'Free Parking',
    ],
    inventory: 5,
  },
  {
    id: 'villa',
    slug: 'villa-room',
    name: 'Villa Room',
    price: 4500,
    beds: 1,
    sizeSqft: 225,
    parking: 'Motorcycle, Car',
    image: '/images/rooms/villa.webp',
    gallery: [
      '/images/rooms/villa.webp',
      '/images/gallery/IMG_1197.jpg',
      '/images/gallery/IMG_1198.jpg',
    ],
    shortDescription:
      'If you’re looking for more space, our Villa Room is an excellent choice. With a bigger size and all the amenities.',
    description:
      'Enhance your stay with the added space and features of our Villa Rooms. These spacious retreats are equipped with all the amenities found in our Minimalist Rooms, including a King Size Bed, air conditioning, and a TV. Additionally, each Villa Room comes with a convenient Kitchenette section, allowing you to prepare your own meals and snacks. We have 10 Villa Rooms available, offering a blend of comfort and practicality.',
    amenities: [
      'Air Conditioner',
      'Big TV',
      'Wifi',
      'Door Key',
      'Tissue Box',
      'Free Parking',
      'Kitchenette',
    ],
    inventory: 10,
  },
  {
    id: 'club',
    slug: 'club-room',
    name: 'Club Room',
    price: 5500,
    beds: 1,
    sizeSqft: 300,
    parking: 'Motorcycle, Car',
    image: '/images/rooms/club.webp',
    gallery: [
      '/images/rooms/club.webp',
      '/images/gallery/DSC08984.jpg',
      '/images/gallery/DSC08986.jpg',
    ],
    shortDescription:
      'For the ultimate luxurious experience, our Club Room is the way to go. Featuring a spacious room, all amenities, and a relaxing bathtub in the washroom.',
    description:
      'Experience the pinnacle of luxury with our Club Rooms. These expansive and elegant rooms include all the features of our Villa Rooms, such as a King Size Bed, air conditioning, and a Kitchenette section. However, the Club Rooms take it a step further with premium amenities and a luxurious bathtub in the washroom for a relaxing and indulgent experience. Priced at ₹5,500 per night, our 5 Club Rooms provide the ultimate in comfort.',
    amenities: [
      'Air Conditioner',
      'Big TV',
      'Wifi',
      'Door Key',
      'Tissue Box',
      'Free Parking',
      'Kitchenette',
      'Bathtub',
    ],
    inventory: 5,
  },
]

export function getRoomBySlug(slug: string) {
  return rooms.find((room) => room.slug === slug)
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price)
}
