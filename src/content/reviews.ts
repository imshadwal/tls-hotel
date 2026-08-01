export type GoogleReviewItem = {
  name: string
  rating: number
  quote: string
  source: string
  relativeTime?: string
  profilePhotoUrl?: string
}

export const googleReviewsConfig = {
  eyebrow: 'Google reviews',
  title: 'What guests say on Google',
  description:
    'Honest feedback from people who’ve stayed at The Lavish Stay — read more anytime on Google.',
  placeName: 'The Lavish Stay',
  /** Used by Places lookup when Place ID is not set */
  placeQuery: 'The Lavish Stay Pandeypur Khajuri Varanasi',
  /**
   * Optional hard-coded Place ID (recommended).
   * Set VITE_GOOGLE_PLACE_ID in .env to override.
   */
  placeId: 'ChIJRaeBJmQtjjkRKULXerbn75s',
  url: 'https://www.google.com/travel/search?q=the%20lavish%20stay&g2lb=4965990%2C72471280%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72880339%2C72882230%2C73064764%2C121529350%2C121620239%2C121738283%2C121762713&hl=en-IN&gl=in&cs=1&ssta=1&ts=CAEaRwopEicyJTB4Mzk4ZTJkNjQyNjgxYTc0NToweDliZWZlN2I2N2FkNzQyMjkSGhIUCgcI6g8QCBgTEgcI6g8QCBgUGAEyAhAA&qs=CAEyFENnc0lxWVRkMXVmMi1mZWJBUkFCOAJCCQkpQtd6tufvm0IJCSlC13q25--b&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwiQqd_Igf-VAxUAAAAAHQAAAAAQAw',
  mapsUrl: 'https://maps.app.goo.gl/9X1NBsXnt5iCkV7RA',
  /**
   * Static Google-reviews snapshot used whenever live Places data is unavailable
   * (missing/invalid API key, quota, network, Places API errors, empty response).
   * Keep these curated quotes so the homepage section never goes blank.
   */
  fallbackRating: 4.6,
  fallbackTotal: 310,
  fallbackReviews: [
    {
      name: 'nitish shukla',
      rating: 5,
      quote:
        'We had a wonderful stay at The Lavish Stay. From the moment we arrived, the staff were welcoming and attentive, making check-in smooth and efficient. Our room was immaculate, spacious, and beautifully appointed with comfortable bedding and thoughtful amenities.',
      source: 'Google',
      relativeTime: '2 months ago',
    },
    {
      name: 'Anjali Sarkar',
      rating: 5,
      quote:
        'I recently booked a stay at your property and wanted to share some feedback. On the positive side, our stay was very comfortable, and your staff is wonderful. The receptionist was exceptionally friendly and helpful, and we truly enjoyed the homely breakfast service.',
      source: 'Google',
      relativeTime: 'a month ago',
    },
    {
      name: 'Hanshika Maurya',
      rating: 5,
      quote:
        'Our overall experience with The Lavish Stay was very good. We stayed here for 10 days, and throughout our stay, the staff and management were extremely helpful, polite, and cooperative. The hospitality was excellent, and we had a comfortable stay.',
      source: 'Google',
      relativeTime: 'a month ago',
    },
    {
      name: 'SIDHI CHOUDHARY',
      rating: 5,
      quote:
        'I had a wonderful experience during my 10-day stay. The staff was incredibly kind, helpful, and always ready to assist whenever needed. Their warm hospitality made my stay comfortable and enjoyable.',
      source: 'Google',
      relativeTime: 'a month ago',
    },
  ] satisfies GoogleReviewItem[],
} as const

/** @deprecated use googleReviewsConfig */
export const googleReviews = {
  ...googleReviewsConfig,
  rating: googleReviewsConfig.fallbackRating,
  reviewCountLabel: 'Guest reviews',
  reviews: googleReviewsConfig.fallbackReviews,
}
