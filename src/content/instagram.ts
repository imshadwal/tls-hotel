export const tlsInstagram = {
  handle: '@tlshotels',
  url: 'https://www.instagram.com/tlshotels',
  followers: '670+',
  eyebrow: 'On Instagram',
  title: '@tlshotels',
  description:
    'A quieter look at The Lavish Stay — rooms, stays, and Varanasi moments. Tap any frame to open on Instagram.',
} as const

export const tlsInstagramPosts = [
  {
    shortcode: 'DbQ_C4APHBI',
    image: '/images/instagram/tls/DbQ_C4APHBI.jpg',
    caption: 'Coming to explore Varanasi? Book your stay with us.',
  },
  {
    shortcode: 'DbQ-MguPmnS',
    image: '/images/instagram/tls/DbQ-MguPmnS.jpg',
    caption: 'Quiet corners and warm hospitality at The Lavish Stay.',
  },
  {
    shortcode: 'DZzdfT-v0Fu',
    image: '/images/instagram/tls/DZzdfT-v0Fu.jpg',
    caption: 'Boutique stays in Varanasi — aesthetic and Pinterest-worthy.',
  },
  {
    shortcode: 'DZzcfE9vJWz',
    image: '/images/instagram/tls/DZzcfE9vJWz.jpg',
    caption: 'Varanasi and a stay at The Lavish Stay is a bliss.',
  },
  {
    shortcode: 'DY96JVNvfkg',
    image: '/images/instagram/tls/DY96JVNvfkg.jpg',
    caption: 'A peaceful stay in the heart of Kashi.',
  },
  {
    shortcode: 'DY8VjqED6Zm',
    image: '/images/instagram/tls/DY8VjqED6Zm.jpg',
    caption: 'Welcome to The Lavish Stay.',
  },
] as const

export function instagramPostUrl(shortcode: string) {
  return `https://www.instagram.com/p/${shortcode}/`
}
