export const bellaCucina = {
  name: 'Bella Cucina',
  tagline: 'A cafe by The Lavish Stay',
  eyebrow: 'On-site café',
  title: 'Bella Cucina',
  description:
    'The aesthetic café in Varanasi — pizza, pasta, coffee, and desserts in a calm, beautifully themed space at The Lavish Stay.',
  body: `Bella Cucina is our on-site café in Pandeypur — known for cozy décor, changing themes, and a menu that travels from creamy pastas and pizzas to specialty coffee and desserts. Guests love the inviting ambience, books and games for lingering afternoons, and a warmly pet-friendly vibe (hello, Charlie). Whether you start the morning with breakfast or unwind after the ghats, Bella is where the stay finds its flavour.`,
  image: '/images/dining/bella-food.webp',
  /** Used on Dining page hero / homepage dining preview */
  heroImage: '/images/dining/bella-facade.webp',
  phone: '+916394958290',
  phoneDisplay: '+91 63949 58290',
  hours: {
    weekdays: '9:00 AM – 9:00 PM',
    weekend: '9:00 AM – 10:00 PM',
  },
  address: 'S-8/227-A, Sudhakar Road, Khajuri Colony, Pandeypur, Varanasi',
  mapUrl: 'https://maps.app.goo.gl/1ACRizkb1spppRq48',
  menuUrl: 'https://dinein.petpooja.com/orders/category/t15m4gonuc/C1',
  instagramUrl: 'https://www.instagram.com/bellacucina.vns/',
  instagramHandle: '@bellacucina.vns',
  followers: '2.8K+',
  highlights: [
    'Pizza · Pasta · Coffee · Desserts',
    'Indian, Italian, Chinese & European favourites',
    'Breakfast, brunch, lunch & dinner',
    'Pet-friendly · Free parking · Family welcome',
    'Books, games & themed décor',
  ],
  signatures: [
    {
      title: 'Pasta & Pizza',
      description: 'Creamy white sauce pastas, wood-fired style pizzas, and comforting café classics.',
    },
    {
      title: 'Coffee & Desserts',
      description: 'Specialty coffees and sweet finishes — made for long conversations and easy afternoons.',
    },
    {
      title: 'Themes & Atmosphere',
      description: 'Changing décor themes, soft lighting, and a calm corner of Pandeypur to settle into.',
    },
  ],
} as const

/** Instagram posts — thumbnails stored locally; click opens the live Instagram post. */
export const bellaInstagramPosts = [
  {
    shortcode: 'Dbd_mxET4Ui',
    image: '/images/dining/Dbd_mxET4Ui.jpg',
    caption: "Girls' Day — coffee, great food, and your favourite people.",
  },
  {
    shortcode: 'DbVzRWqov2g',
    image: '/images/dining/DbVzRWqov2g.jpg',
    caption: "Fasting doesn't mean pressing pause on your café dates.",
  },
  {
    shortcode: 'DbQmSDqzPUX',
    image: '/images/dining/DbQmSDqzPUX.jpg',
    caption: "The café you'll keep coming back to.",
  },
  {
    shortcode: 'DbLcRBxzWL1',
    image: '/images/dining/DbLcRBxzWL1.jpg',
    caption: 'New look. New flavors. Even better deals.',
  },
  {
    shortcode: 'DbH3LsJM0so',
    image: '/images/dining/DbH3LsJM0so.jpg',
    caption: 'Beautiful décor, changing themes, delicious food.',
  },
  {
    shortcode: 'DbDvOV1T4V_',
    image: '/images/dining/DbDvOV1T4V_.jpg',
    caption: 'Our new theme is here.',
  },
] as const

export function bellaPostUrl(shortcode: string) {
  return `https://www.instagram.com/p/${shortcode}/`
}
