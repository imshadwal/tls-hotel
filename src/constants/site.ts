export const SITE = {
  name: 'The Lavish Stay',
  shortName: 'TLS Hotels',
  tagline: 'Explore! Discover! Live!',
  description:
    'The Lavish Stay is a boutique hotel in Pandeypur, Varanasi with AC rooms, free parking, on-site café Bella Cucina, and easy access to Kashi Vishwanath Temple and Varanasi Junction.',
  url: 'https://tlshotels.com',
  phone: '+919695326669',
  phoneDisplay: '+91 96953 26669',
  email: 'tlshotels@gmail.com',
  address:
    'S-8/227-A, Khajuri, Varanasi, Varanasi-221002, Uttar Pradesh',
  mapUrl: 'https://maps.app.goo.gl/9X1NBsXnt5iCkV7RA',
  social: {
    facebook: 'https://www.facebook.com/tlshotels',
    instagram: 'https://www.instagram.com/tlshotels',
    bellaInstagram: 'https://www.instagram.com/bellacucina.vns/',
  },
  bookingUrl: 'https://live.ipms247.com/booking/book-rooms-thelavishstay',
  openedYear: 2023,
} as const

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Rooms', path: '/rooms' },
  { label: 'Dining', path: '/dining' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
] as const

/** Pages not in the primary nav row — shown under “Other” in the menu */
export const NAV_OTHER_LINKS = [
  { label: 'Journal', path: '/blog' },
  { label: 'Privacy', path: '/privacy' },
  { label: 'Terms', path: '/terms' },
] as const

/** Primary hotel pages — mirrors the main journey */
export const FOOTER_EXPLORE = [
  { label: 'Rooms', path: '/rooms' },
  { label: 'Dining', path: '/dining' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
] as const

/** Pages not in the main nav */
export const FOOTER_OTHER = [
  { label: 'About', path: '/about' },
  { label: 'Journal', path: '/blog' },
  { label: 'Privacy', path: '/privacy' },
  { label: 'Terms', path: '/terms' },
] as const

/** @deprecated use FOOTER_EXPLORE / FOOTER_OTHER */
export const FOOTER_LINKS = [
  ...FOOTER_EXPLORE,
  ...FOOTER_OTHER,
] as const

export const BOOKING_ENGINE = {
  actionUrl: 'https://live.ipms247.com/booking/book-rooms-thelavishstay',
} as const
