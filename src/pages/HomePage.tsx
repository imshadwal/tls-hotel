import { SeoHead } from '@/components/common/SeoHead'
import { HeroBanner } from '@/components/home/HeroBanner'
import { AboutPreview } from '@/components/home/AboutPreview'
import { StayHighlights } from '@/components/home/StayHighlights'
import { RoomsPreview } from '@/components/home/RoomsPreview'
import { DiningPreview } from '@/components/home/DiningPreview'
import { GoogleReviewsSection } from '@/components/home/GoogleReviewsSection'
import { HomeInstagramSection } from '@/components/home/HomeInstagramSection'
import { AttractionsSection } from '@/components/home/AttractionsSection'
import { MapContactPreview } from '@/components/home/MapContactPreview'
import { CtaSection } from '@/components/common/CtaSection'

export function HomePage() {
  return (
    <>
      <SeoHead
        path="/"
        description="Boutique hotel in Pandeypur, Varanasi — AC rooms, free parking, Bella Cucina café, and easy access to Kashi Vishwanath Temple and Varanasi Junction. Book The Lavish Stay."
      />
      <HeroBanner />
      <AboutPreview />
      <StayHighlights />
      <RoomsPreview />
      <DiningPreview />
      <GoogleReviewsSection />
      <HomeInstagramSection />
      <AttractionsSection />
      <MapContactPreview />
      <CtaSection title="Stay at TLS. Explore Varanasi." />
    </>
  )
}
