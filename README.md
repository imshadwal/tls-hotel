# TLS Hotels / The Lavish Stay

Immersive React experience for [tlshotels.com](https://tlshotels.com/) — **TLS brand identity retained**, UI fully reimagined.

## Brand

- Colors: `#576348` / `#9AAC85` olive system
- Type: Gilda Display + Barlow
- Logo: original TLS mark

## Experience highlights

- Floating navigation + sticky booking bar
- Cinematic parallax hero with live booking widget
- Interactive room showcase
- Animated amenities, testimonial carousel, horizontal gallery marquee
- Timeline story, destination highlights, full-bleed CTAs
- Scroll reveals with reduced-motion support

## Stack

React 19 · Vite · TypeScript · Tailwind v4 · Framer Motion · React Router · RHF + Zod · Helmet · IPMS247 booking

```bash
npm install
npm run dev
```

## Live Google reviews

Reviews load dynamically from **Places API (New)**:

1. Enable **Places API (New)** in Google Cloud (legacy PlacesService does not work for new projects).
2. Copy `.env.example` → `.env` and set `VITE_GOOGLE_MAPS_API_KEY` (and optionally `VITE_GOOGLE_PLACE_ID`).
3. Restart the dev server.

Without a key — or if the Places request fails/times out — the section keeps curated static fallback reviews (see `src/content/reviews.ts`) and still links out to Google.