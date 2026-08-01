import { SeoHead } from '@/components/common/SeoHead'
import { HeroBanner } from '@/components/home/HeroBanner'
import { AboutPreview } from '@/components/home/AboutPreview'
import { RoomsPreview } from '@/components/home/RoomsPreview'
import { DiningPreview } from '@/components/home/DiningPreview'
import { GoogleReviewsSection } from '@/components/home/GoogleReviewsSection'
import { HomeInstagramSection } from '@/components/home/HomeInstagramSection'
import { GalleryPreview } from '@/components/home/GalleryPreview'
import { AttractionsSection } from '@/components/home/AttractionsSection'
import { MapContactPreview } from '@/components/home/MapContactPreview'
import { CtaSection } from '@/components/common/CtaSection'

export function HomePage() {
  return (
    <>
      <SeoHead path="/" />
      <HeroBanner />
      <AboutPreview />
      <RoomsPreview />
      <DiningPreview />
      <GoogleReviewsSection />
      <HomeInstagramSection />
      <GalleryPreview />
      <AttractionsSection />
      <MapContactPreview />
      <CtaSection />
    </>
  )
}
