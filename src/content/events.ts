import { whatsappLink } from '@/utils/whatsapp'

export const devDeepawali = {
  eyebrow: 'event by TLS Hotels',
  title: 'Dev Deepawali on the Ganges',
  lead: 'Varanasi’s most spectacular night, seen from the sacred waters of the Ganges.',
  body: 'Illuminated ghats, Ganga Aarti, and a memorable boat journey.',
  cta: 'Explore Boat Booking',
  path: '/dev-deepawali',
  image: '/images/events/dev-deepawali.jpg',
  imageAlt:
    'Dev Deepawali on the Ganges in Varanasi, with illuminated ghats, a riverside temple, and boats gathered on the water at night',
} as const

export const devDeepawaliPage = {
  seoTitle: 'Dev Deepawali Boat Booking on the Ganges',
  seoDescription:
    'Book a Dev Deepawali boat ride on the Ganges with The Lavish Stay. Motor Boat ₹3,000 or Maharaja Bajra Boat ₹9,000 per ride, boarding at Rajghat. Enquire on WhatsApp.',
  label: 'A Special Experience by The Lavish Stay',
  heroDescription:
    'Witness the divine glow of Varanasi’s illuminated ghats during Dev Deepawali. Experience the spectacular Ganga Aarti, thousands of glowing diyas, and the timeless beauty of the city from the sacred waters of the Ganges.',
  generalEnquiry: whatsappLink('Hey I want to Book a Boat For Dev Deepawali'),
}

export type Boat = {
  id: string
  name: string
  shortName: string
  category: string
  price: number
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
    name: 'Motor Boat',
    shortName: 'Motor Boat',
    category: 'Motor boat',
    price: 3000,
    boardingPoint: 'Rajghat',
    rideType: 'Per ride',
    features: ['Safe ride', 'Experienced crew'],
    experience: 'Open, festively lit motor boat on the river',
    image: '/images/events/motor-boat.jpg',
    imageAlt: 'Festively lit motor boat with guests on the Ganges at dusk in Varanasi',
    imageWidth: 1024,
    imageHeight: 682,
    bookLabel: 'Book Motor Boat',
    whatsapp: whatsappLink('Hey I want to Book Motor Boat For Dev Deepawali'),
  },
  {
    id: 'bajra-boat',
    name: 'Maharaja (Bajra) Boat',
    shortName: 'Bajra Boat',
    category: 'Traditional Maharaja (Bajra) boat',
    price: 9000,
    boardingPoint: 'Rajghat',
    rideType: 'Per ride',
    features: ['Safe ride', 'Experienced crew'],
    experience: 'Traditional two-deck Bajra with a canopied upper deck',
    image: '/images/events/bajra-boat.jpg',
    imageAlt: 'Traditional two-deck Maharaja Bajra boat with lanterns, moored on the Ganges at sunset',
    imageWidth: 765,
    imageHeight: 1024,
    bookLabel: 'Book Bajra Boat',
    whatsapp: whatsappLink('Hey I want to Book Bajra Boat For Dev Deepawali'),
  },
]

export const experienceHighlights = [
  {
    title: 'The illuminated ghats',
    description: 'See Varanasi’s riverfront glow with lamps and lights along the ghats.',
  },
  {
    title: 'Ganga Aarti from the river',
    description: 'Watch the magnificent evening Aarti from the water rather than the crowded steps.',
  },
  {
    title: 'A festival boat journey',
    description: 'Board at Rajghat and spend Dev Deepawali night out on the sacred Ganges.',
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
    description: 'Pick the Motor Boat or the Maharaja (Bajra) Boat.',
  },
  {
    title: 'Message us on WhatsApp',
    description: 'Tap the booking button — your message is ready to send.',
  },
  {
    title: 'Confirm with our team',
    description:
      'We confirm availability, timing, passenger capacity, and booking details with you. Your boat is reserved once we confirm.',
  },
]

export const eventFaqs = [
  {
    question: 'Where is the boat boarding point?',
    answer: 'Both boats board at Rajghat, Varanasi.',
  },
  {
    question: 'What is the price of each boat?',
    answer: 'The Motor Boat is ₹3,000 per ride and the Maharaja (Bajra) Boat is ₹9,000 per ride.',
  },
  {
    question: 'Is the price per person or per boat?',
    answer:
      'Prices are listed per ride. Message us on WhatsApp and our team will explain exactly what one ride includes before you book.',
  },
  {
    question: 'How many passengers can each boat accommodate?',
    answer:
      'Passenger capacity is being finalised for Dev Deepawali. Ask our team on WhatsApp for the capacity of the boat you’re interested in.',
  },
  {
    question: 'How long is the boat ride?',
    answer:
      'Ride timing on Dev Deepawali night is confirmed directly with each booking. Message us on WhatsApp for the current duration.',
  },
  {
    question: 'How do I book my boat?',
    answer:
      'Tap “Book Motor Boat” or “Book Bajra Boat”. WhatsApp opens with your message ready — send it and our team will reply to arrange your booking.',
  },
  {
    question: 'How can I confirm availability?',
    answer:
      'Your WhatsApp message is a booking request. Our team checks availability and confirms your reservation with you on WhatsApp.',
  },
  {
    question: 'What happens if the weather or river conditions affect the ride?',
    answer:
      'River and weather conditions on the night can affect boat operations. Ask our team on WhatsApp how changes are handled for your booking.',
  },
]

export function formatInr(amount: number) {
  return `₹${amount.toLocaleString('en-IN')}`
}
