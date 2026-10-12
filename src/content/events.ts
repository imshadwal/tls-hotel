import { whatsappLink } from '@/utils/whatsapp'

export const devDeepawali = {
  eyebrow: 'event by TLS Hotels',
  title: 'Dev Deepawali on the Ganges',
  date: 'Tuesday, 24 November 2026',
  dateShort: '24 Nov 2026',
  lead: 'Varanasi’s most spectacular night, seen from the sacred waters of the Ganges.',
  body: 'Illuminated ghats, a laser show, and fireworks from a boat on the river.',
  cta: 'Explore Boat Booking',
  path: '/dev-deepawali',
  image: '/images/events/dev-deepawali.jpg',
  imageAlt:
    'Dev Deepawali on the Ganges in Varanasi, with illuminated ghats, a riverside temple, and boats gathered on the water at night',
} as const

export const devDeepawaliPage = {
  seoTitle: 'Dev Deepawali Boat Booking on the Ganges',
  seoDescription:
    'Book a shared Dev Deepawali boat on the Ganges with The Lavish Stay on 24 November 2026. Motor boat ₹3,000 or Maharaja Bajra ₹9,000 per person, 3 hours, boarding at Namo Ghat / Raj Ghat.',
  label: 'A Special Experience by The Lavish Stay',
  heroDescription:
    'Witness the divine glow of Varanasi’s illuminated ghats during Dev Deepawali. Pass all 84 ghats, catch the laser light and sound show and the fireworks, and see the city from the sacred waters of the Ganges.',
  generalEnquiry: whatsappLink('Hey I want to Book a Boat For Dev Deepawali'),
}

/** Applies to both boats on Dev Deepawali night. */
export const boatRide = {
  duration: '3 hours',
  boardingPoint: 'Namo Ghat / Raj Ghat',
  reportBy: '3 PM on the day',
  route: [
    { label: 'The riverfront', value: 'A full pass of all 84 ghats' },
    { label: 'Chet Singh Ghat', value: 'Laser light and sound show' },
    { label: 'Lalita Ghat', value: 'Fireworks opposite the ghat' },
  ],
  note: 'Ganga Aarti is not included. Payment: 50% advance to book, and the remaining 50% 3 days before the event.',
} as const

export type Boat = {
  id: string
  name: string
  shortName: string
  category: string
  price: number
  priceUnit: string
  boardingPoint: string
  rideType: string
  features: string[]
  experience: string
  image: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
  bookLabel: string
  whatsapp: string
  /** Leave undefined until confirmed — unconfirmed details are never shown as facts. */
  capacity?: string
  duration?: string
}

export const boats: Boat[] = [
  {
    id: 'motor-boat',
    name: 'Shared Motor Boat',
    shortName: 'Motor Boat',
    category: 'Shared motor boat',
    price: 3000,
    priceUnit: 'person',
    boardingPoint: boatRide.boardingPoint,
    rideType: 'Shared · per person',
    features: ['All 84 ghats', 'Life jacket for everyone', 'Guide on board'],
    experience: 'A shared seat on the motor boat for the Dev Deepawali river evening.',
    image: '/images/events/motor-boat.jpg',
    imageAlt: 'Festively lit motor boat with guests on the Ganges at dusk in Varanasi',
    imageWidth: 1024,
    imageHeight: 682,
    bookLabel: 'Book Motor Boat',
    whatsapp: whatsappLink('Hey I want to Book Motor Boat For Dev Deepawali'),
    duration: boatRide.duration,
  },
  {
    id: 'bajra-boat',
    name: 'Shared Maharaja (Bajra) Boat',
    shortName: 'Bajra Boat',
    category: 'Shared double-decker Bajra',
    price: 9000,
    priceUnit: 'person',
    boardingPoint: boatRide.boardingPoint,
    rideType: 'Shared · per person',
    features: ['All 84 ghats', 'Life jacket for everyone', 'Guide on board'],
    experience: 'Also called the Maharaja boat. Double-decker seating on the Ganga for Dev Deepawali night.',
    image: '/images/events/bajra-boat.jpg',
    imageAlt: 'Traditional two-deck Maharaja Bajra boat with lanterns, moored on the Ganges at sunset',
    imageWidth: 765,
    imageHeight: 1024,
    bookLabel: 'Book Bajra Boat',
    whatsapp: whatsappLink('Hey I want to Book Bajra Boat For Dev Deepawali'),
    duration: boatRide.duration,
  },
]

export const experienceHighlights = [
  {
    title: 'All 84 ghats, lit up',
    description: 'A full pass of Varanasi’s riverfront as the ghats glow with diyas and lights.',
  },
  {
    title: 'Laser show and fireworks',
    description:
      'The laser light and sound show at Chet Singh Ghat, and fireworks opposite Lalita Ghat.',
  },
  {
    title: 'Three hours on the river',
    description: 'Board at Namo Ghat / Raj Ghat and spend Dev Deepawali night out on the Ganges.',
  },
]

export type EventPhoto = {
  src: string
  alt: string
  caption: string
  width: number
  height: number
}

export const eventGallery: EventPhoto[] = [
  {
    src: '/images/events/dev-deepawali.jpg',
    alt: 'Illuminated ghats and boats on the Ganges during Dev Deepawali in Varanasi',
    caption: 'Illuminated ghats on Dev Deepawali',
    width: 1200,
    height: 675,
  },
  {
    src: '/images/events/motor-boat.jpg',
    alt: 'Festively lit motor boat with guests on the Ganges at dusk',
    caption: 'Boats on the Ganges',
    width: 1024,
    height: 682,
  },
  {
    src: '/images/events/bajra-boat.jpg',
    alt: 'Traditional Maharaja Bajra boat moored on the Ganges at sunset',
    caption: 'Traditional Bajra boat',
    width: 765,
    height: 1024,
  },
]

export const bookingSteps = [
  {
    title: 'Choose your boat',
    description: 'Pick a seat on the shared Motor Boat or the Maharaja (Bajra) Boat.',
  },
  {
    title: 'Message us on WhatsApp',
    description: 'Tap the booking button — your message is ready to send.',
  },
  {
    title: 'Confirm with our team',
    description:
      'We confirm availability and seats with you. Pay 50% in advance to book, and the remaining 50% 3 days before the event.',
  },
]

export const eventFaqs = [
  {
    question: 'When is Dev Deepawali 2026?',
    answer: 'Tuesday, 24 November 2026 — Kartik Purnima.',
  },
  {
    question: 'Where is the boat boarding point?',
    answer:
      'Both boats board at Namo Ghat / Raj Ghat. Report by 3 PM on the day — a seat is not held after 3 PM.',
  },
  {
    question: 'Is the price per person or per boat?',
    answer:
      'Per person, on a shared boat. The Motor Boat is ₹3,000 per person and the Maharaja (Bajra) Boat is ₹9,000 per person.',
  },
  {
    question: 'How long is the boat ride?',
    answer:
      'About 3 hours, with a full pass of all 84 ghats, the laser light and sound show at Chet Singh Ghat, and fireworks opposite Lalita Ghat.',
  },
  {
    question: 'Is Ganga Aarti included?',
    answer: 'No. Ganga Aarti is not part of the boat tour.',
  },
  {
    question: 'When do I pay, and can I cancel?',
    answer:
      '50% in advance to confirm your booking, and the remaining 50% 3 days before the event. All boat bookings are non-refundable, and changes depend on availability and may cost extra.',
  },
  {
    question: 'Are there washrooms on the boat?',
    answer: 'No. There are no washrooms on any boat during this event.',
  },
  {
    question: 'What safety measures are on board?',
    answer:
      'Every boat has a guide, a volunteer, and an instructor, and every guest gets a life jacket. Please tell us about any health concern before booking.',
  },
  {
    question: 'Can I book a hotel stay with the boat?',
    answer:
      'Yes. Our Stay & Sail package pairs 3 nights at The Lavish Stay, with breakfast and dinner, with your seats on the river.',
  },
]

export function formatInr(amount: number) {
  return `₹${amount.toLocaleString('en-IN')}`
}

/* Stay & Sail package */

export const staySail = {
  title: 'Dev Deepawali Stay & Sail',
  shortTitle: 'Stay & Sail',
  tagline: 'A festival stay and a river evening, together.',
  path: '/dev-deepawali/stay-and-sail',
  linkLabel: 'View Full Package Tour',
  brochure: '/brochures/dev-deepawali-2026-stay-and-sail.pdf',
  brochureFileName: 'Dev-Deepawali-2026-Stay-and-Sail-The-Lavish-Stay.pdf',
  seoTitle: 'Dev Deepawali 2026 Stay & Sail Package in Varanasi',
  seoDescription:
    'Dev Deepawali 2026 Stay & Sail by The Lavish Stay: 3 nights with breakfast and dinner from ₹21,000 for two, plus shared boat seats on the Ganges from ₹3,000 per person. 24 November 2026, Varanasi.',
  evening: {
    title: 'Dev Deepawali 2026',
    subtitle: 'Tuesday, 24 November · Kartik Purnima',
    body: 'Join us on a magical boat ride as over a million diyas light up the ghats of Varanasi, celebrating the divine descent of the gods on Kartik Purnima. Witness grand processions, floating lamps, and the spiritual glow of the Ganga like never before. A once-in-a-lifetime evening on the sacred river awaits.',
    whyBoatTitle: 'Why a boat',
    whyBoat:
      'Millions of visitors come for Dev Deepawali, tourists and local crowds together. The best view of the festival is only possible from the river, and boats are few against that crowd. Book a place on the boat rather than become part of the crowd.',
  },
  stay: {
    title: 'A festival of lights. A stay to remember.',
    summary: '3 nights · 4 days · breakfast and dinner',
    eyebrow: 'Where comfort meets culture',
    body: 'Celebrate the divine beauty of Dev Deepawali in Varanasi with a comfortable and memorable stay at The Lavish Stay. Rates are for two adults, taxes included.',
    inclusions: [
      '3 nights accommodation',
      'Daily breakfast',
      'Daily dinner',
      'Stay for 2 adults',
      'Applicable taxes included',
    ],
    note: 'For families, groups, and couples. Rooms on these dates are limited. Room photographs are representative.',
  },
  enquiry: whatsappLink('Hey I want to Book the Dev Deepawali Stay & Sail package'),
} as const

export type PackageRoom = {
  id: string
  name: string
  price: number
  image: string
  imageAlt: string
  whatsapp: string
}

export const packageRooms: PackageRoom[] = [
  {
    id: 'standard',
    name: 'Standard Room',
    price: 21000,
    image: '/images/rooms/minimalist.webp',
    imageAlt: 'Standard room at The Lavish Stay, Varanasi',
    whatsapp: whatsappLink('Hey I want to Book the Standard Room for Dev Deepawali Stay & Sail'),
  },
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    price: 27000,
    image: '/images/rooms/villa.webp',
    imageAlt: 'Deluxe room at The Lavish Stay, Varanasi',
    whatsapp: whatsappLink('Hey I want to Book the Deluxe Room for Dev Deepawali Stay & Sail'),
  },
  {
    id: 'premium',
    name: 'Premium Room',
    price: 33000,
    image: '/images/rooms/club.webp',
    imageAlt: 'Premium room at The Lavish Stay, Varanasi',
    whatsapp: whatsappLink('Hey I want to Book the Premium Room for Dev Deepawali Stay & Sail'),
  },
]

export const roomRateTerms = 'for 3 nights / 4 days · double occupancy · taxes included'

export const whyChooseUs = {
  river: [
    'We have hosted this Varanasi boat tour for the last three years.',
    'Easy passage to board the boat.',
    'No traffic at our boarding point.',
    'One guide, one volunteer, and one instructor on every boat.',
    'A life jacket for every person.',
    'A short walk from the boarding point.',
  ],
  hotel: [
    'Rooms, breakfast, and dinner under one Dev Deepawali booking at The Lavish Stay.',
    'Three room categories, taxes included, for two adults.',
    'The hotel is in Pandeypur, with a direct line for the festive dates.',
  ],
}

export const packageTerms: Array<{ title: string; items: string[] }> = [
  {
    title: 'Payment terms',
    items: ['50% advance to confirm the booking.', '50% 3 days prior to the event.'],
  },
  {
    title: 'Boat booking',
    items: [
      'All boat-tour bookings are non-refundable.',
      'Changes depend on availability and may cost extra.',
      'Last reporting time is 3 PM. A seat is not held after 3 PM.',
    ],
  },
  {
    title: 'Stay booking',
    items: [
      'Room rates are for 3 nights / 4 days, double occupancy, with breakfast and dinner, taxes included.',
      'Rooms are limited. A stay is confirmed only after payment and written confirmation from The Lavish Stay.',
      'Room photographs are representative.',
    ],
  },
  {
    title: 'On the water',
    items: [
      'There are no washrooms on any boat during this event.',
      'The boat operator follows local and government rules. Guests follow safety, crowd, and advisory instructions issued that day.',
      'Guests must be fit to be on the boat and must tell us of any health concern before booking.',
      'Respect fellow guests, the crew, local authorities, and the river. Misconduct can end the booking with no refund.',
      'The boat operator is not responsible for loss, theft, or damage to personal belongings. Guests are on the boat at their own risk.',
    ],
  },
  {
    title: 'Law',
    items: [
      'The operator is not liable for natural events, public disturbance, medical emergency, government restriction, or other force majeure, and those events do not create a refund.',
      'Planned shows can change. The operator is not responsible for a change or cancellation in those activities.',
      'Disputes are governed by the laws of India and the courts in Varanasi. Booking means these terms are accepted.',
    ],
  },
]
