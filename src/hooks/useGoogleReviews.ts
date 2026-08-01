import { useEffect, useState } from 'react'
import { googleReviewsConfig, type GoogleReviewItem } from '@/content/reviews'
import {
  fetchGooglePlaceReviews,
  getGoogleMapsApiKey,
  getGooglePlaceId,
} from '@/services/googlePlaces'

type GoogleReviewsState = {
  status: 'loading' | 'live' | 'fallback' | 'error'
  rating: number
  total: number | null
  reviews: GoogleReviewItem[]
  placeName: string
  source: 'google' | 'fallback'
}

const FETCH_TIMEOUT_MS = 15_000

/** Curated static reviews — always available if the Maps/Places API key fails. */
export function getStaticReviewsFallback(
  status: 'fallback' | 'error' = 'fallback',
): GoogleReviewsState {
  return {
    status,
    rating: googleReviewsConfig.fallbackRating,
    total: googleReviewsConfig.fallbackTotal,
    reviews: googleReviewsConfig.fallbackReviews.map((review) => ({ ...review })),
    placeName: googleReviewsConfig.placeName,
    source: 'fallback',
  }
}

export function useGoogleReviews() {
  const [state, setState] = useState<GoogleReviewsState>({
    ...getStaticReviewsFallback(),
    status: 'loading',
  })

  useEffect(() => {
    const apiKey = getGoogleMapsApiKey()?.trim()
    if (!apiKey) {
      setState(getStaticReviewsFallback('fallback'))
      return
    }

    let cancelled = false
    let timeoutId = 0

    async function load() {
      try {
        const fetchPromise = fetchGooglePlaceReviews({
          apiKey: apiKey!,
          placeId: getGooglePlaceId() || googleReviewsConfig.placeId || undefined,
          query: googleReviewsConfig.placeQuery,
        })

        const data = await Promise.race([
          fetchPromise,
          new Promise<never>((_, reject) => {
            timeoutId = window.setTimeout(
              () => reject(new Error('Google reviews request timed out')),
              FETCH_TIMEOUT_MS,
            )
          }),
        ])

        window.clearTimeout(timeoutId)
        if (cancelled) return

        const reviews: GoogleReviewItem[] = data.reviews.map((review) => ({
          name: review.name,
          rating: review.rating,
          quote: review.quote,
          source: 'Google',
          relativeTime: review.relativeTime,
          profilePhotoUrl: review.profilePhotoUrl,
        }))

        if (!reviews.length) {
          // Score is live, but Google returned no review text — keep static quotes
          setState({
            ...getStaticReviewsFallback('fallback'),
            rating: data.rating || googleReviewsConfig.fallbackRating,
            total: data.userRatingsTotal || googleReviewsConfig.fallbackTotal,
          })
          return
        }

        setState({
          status: 'live',
          rating: data.rating || googleReviewsConfig.fallbackRating,
          total: data.userRatingsTotal || googleReviewsConfig.fallbackTotal,
          reviews,
          placeName: data.name,
          source: 'google',
        })
      } catch (error) {
        window.clearTimeout(timeoutId)
        console.warn('Google reviews unavailable, using static fallback', error)
        if (!cancelled) setState(getStaticReviewsFallback('error'))
      }
    }

    void load()
    return () => {
      cancelled = true
      window.clearTimeout(timeoutId)
    }
  }, [])

  return state
}
