import { SITE } from '@/constants/site'

type SeoProps = {
  title?: string
  description?: string
  path?: string
  image?: string
  type?: 'website' | 'article'
}

export function buildSeo({
  title,
  description = SITE.description,
  path = '/',
  image = '/images/hero/hero-1.webp',
  type = 'website',
}: SeoProps = {}) {
  const fullTitle = title
    ? `${title} – ${SITE.name}`
    : `${SITE.name} | ${SITE.shortName} — Varanasi`
  const url = `${SITE.url}${path === '/' ? '' : path}`
  const imageUrl = image.startsWith('http') ? image : `${SITE.url}${image}`

  return {
    title: fullTitle,
    description,
    url,
    imageUrl,
    type,
  }
}

export const hotelJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Hotel',
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  image: `${SITE.url}/images/brand/logo.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'S-8/227-AKHAJURI VARANASI, Khajuri',
    addressLocality: 'Varanasi',
    addressRegion: 'Uttar Pradesh',
    postalCode: '221002',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.3484306,
    longitude: 82.9929872,
  },
  sameAs: [SITE.social.facebook, SITE.social.instagram, SITE.social.bellaInstagram],
  priceRange: '₹₹',
}
