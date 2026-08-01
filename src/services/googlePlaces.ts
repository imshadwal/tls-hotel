export function getGoogleMapsApiKey() {
  return import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined
}

export function getGooglePlaceId() {
  const fromEnv = (import.meta.env.VITE_GOOGLE_PLACE_ID as string | undefined)?.trim()
  return fromEnv || undefined
}

export type PlaceReviewsResult = {
  placeId: string
  name: string
  rating: number
  userRatingsTotal: number
  reviews: Array<{
    name: string
    rating: number
    quote: string
    relativeTime?: string
    profilePhotoUrl?: string
  }>
}

type PlacesNewTextSearchResponse = {
  places?: Array<{
    id?: string
    displayName?: { text?: string }
    rating?: number
    userRatingCount?: number
  }>
}

type PlacesNewDetailsResponse = {
  id?: string
  displayName?: { text?: string }
  rating?: number
  userRatingCount?: number
  reviews?: Array<{
    rating?: number
    relativePublishTimeDescription?: string
    text?: { text?: string }
    originalText?: { text?: string }
    authorAttribution?: {
      displayName?: string
      photoUri?: string
    }
  }>
  error?: { message?: string; status?: string }
}

/**
 * In Vite dev/preview, call through the local proxy to avoid browser blocks.
 * In production builds, call Places API (New) directly (CORS-enabled).
 */
function placesApiBase() {
  if (import.meta.env.DEV) return '/api/places/v1'
  return 'https://places.googleapis.com/v1'
}

async function placesNewFetch<T>(
  path: string,
  apiKey: string,
  init?: RequestInit & { fieldMask: string },
): Promise<T> {
  const { fieldMask, headers: initHeaders, ...rest } = init ?? { fieldMask: '' }
  const method = (rest.method ?? 'GET').toUpperCase()

  const headers = new Headers(initHeaders)
  headers.set('X-Goog-Api-Key', apiKey)
  headers.set('X-Goog-FieldMask', fieldMask)
  if (method !== 'GET' && method !== 'HEAD' && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json')
  }

  const response = await fetch(`${placesApiBase()}/${path}`, {
    ...rest,
    method,
    headers,
  })

  const data = (await response.json()) as T & { error?: { message?: string; status?: string } }

  if (!response.ok || data.error) {
    throw new Error(data.error?.message || `Places API request failed (${response.status})`)
  }

  return data
}

async function resolvePlaceId(options: {
  apiKey: string
  placeId?: string
  query: string
}): Promise<string> {
  if (options.placeId?.trim()) return options.placeId.trim()

  const data = await placesNewFetch<PlacesNewTextSearchResponse>(
    'places:searchText',
    options.apiKey,
    {
      method: 'POST',
      fieldMask: 'places.id,places.displayName',
      body: JSON.stringify({
        textQuery: options.query,
        maxResultCount: 1,
      }),
    },
  )

  const placeId = data.places?.[0]?.id
  if (!placeId) {
    throw new Error('Place lookup returned no results')
  }

  return placeId
}

function mapReviewQuote(review: NonNullable<PlacesNewDetailsResponse['reviews']>[number]) {
  return (review.text?.text || review.originalText?.text || '')
    .replace(/^[\s\-—–]+/, '')
    .trim()
}

/**
 * Live Google reviews via Places API (New).
 * Legacy PlacesService is blocked for new Cloud projects and would hang forever.
 */
export async function fetchGooglePlaceReviews(options: {
  apiKey: string
  placeId?: string
  query: string
}): Promise<PlaceReviewsResult> {
  const placeId = await resolvePlaceId(options)

  const details = await placesNewFetch<PlacesNewDetailsResponse>(
    `places/${placeId}`,
    options.apiKey,
    {
      method: 'GET',
      fieldMask: 'id,displayName,rating,userRatingCount,reviews',
    },
  )

  return {
    placeId: details.id || placeId,
    name: details.displayName?.text || 'The Lavish Stay',
    rating: details.rating ?? 0,
    userRatingsTotal: details.userRatingCount ?? 0,
    reviews: (details.reviews ?? [])
      .map((review) => ({
        name: review.authorAttribution?.displayName || 'Google user',
        rating: review.rating ?? 5,
        quote: mapReviewQuote(review),
        relativeTime: review.relativePublishTimeDescription,
        profilePhotoUrl: review.authorAttribution?.photoUri,
      }))
      .filter((review) => review.quote.length > 0)
      .slice(0, 6),
  }
}
