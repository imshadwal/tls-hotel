import { FaBed, FaExpand } from 'react-icons/fa6'
import {
  FaCarSide,
  FaParking,
  FaConciergeBell,
  FaWifi,
  FaCoffee,
} from 'react-icons/fa'
import { useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { SeoHead } from '@/components/common/SeoHead'
import { PageHero } from '@/components/common/PageHero'
import { Button } from '@/components/common/Button'
import { Reveal } from '@/components/common/Reveal'
import { rooms, formatPrice } from '@/content/rooms'
import { facilities } from '@/content/hotel'
import { CtaSection } from '@/components/common/CtaSection'
import { useBookingModal } from '@/contexts/BookingModalContext'
import { twMerge } from '@/utils/cn'
import type { Facility } from '@/types'

const facilityIcons: Record<Facility['icon'], ReactNode> = {
  pickup: <FaCarSide />,
  parking: <FaParking />,
  roomService: <FaConciergeBell />,
  wifi: <FaWifi />,
  breakfast: <FaCoffee />,
}

function useAmenitiesHashScroll() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash !== '#amenities') return

    const scrollToAmenities = () => {
      const el = document.getElementById('amenities')
      if (!el) return
      const navOffset = 96
      const top = el.getBoundingClientRect().top + window.scrollY - navOffset
      window.scrollTo({ top, behavior: 'smooth' })
    }

    const id = window.setTimeout(scrollToAmenities, 80)
    return () => window.clearTimeout(id)
  }, [hash])
}

export function RoomsPage() {
  const { openBooking } = useBookingModal()
  useAmenitiesHashScroll()

  return (
    <>
      <SeoHead
        title="Rooms"
        description="Explore Minimalist, Villa, and Club rooms at The Lavish Stay, Varanasi — with parking, Wi‑Fi, breakfast, and more."
        path="/rooms"
        image="/images/rooms/club.webp"
      />
      <PageHero
        title="Rooms"
        subtitle="Choose the pace of your stay — intimate, spacious, or indulgent."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Rooms' },
        ]}
        image="/images/rooms/club.webp"
      />

      <section className="overflow-hidden bg-section-linen py-16 md:py-20">
        <div className="container-page">
          <Reveal className="mb-10 max-w-xl">
            <p className="eyebrow mb-4">Accommodations</p>
            <h2 className="text-4xl md:text-5xl">Three ways to rest</h2>
            <p className="mt-5 max-w-[28rem] text-base leading-[1.75] text-mute">
              Each room is air-conditioned and thoughtfully equipped for a comfortable Varanasi
              stay.
            </p>
          </Reveal>

          <Reveal className="mb-14 grid grid-cols-3 gap-px overflow-hidden border border-line bg-line sm:mb-16">
            {rooms.map((room) => (
              <a
                key={room.id}
                href={`#room-${room.slug}`}
                className="bg-paper px-3 py-4 text-center transition-colors hover:bg-fog sm:px-5 sm:py-5"
              >
                <p className="font-display text-lg text-night sm:text-xl">{room.name.replace(' Room', '')}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-mute sm:text-[11px]">
                  From {formatPrice(room.price)}
                </p>
                <p className="mt-2 hidden text-xs text-mute sm:block">
                  {room.beds} bed · {room.sizeSqft} sqft
                </p>
              </a>
            ))}
          </Reveal>

          <div className="space-y-20 md:space-y-28">
            {rooms.map((room, index) => {
              const reverse = index % 2 === 1
              return (
                <Reveal key={room.id} delay={0.04 * index}>
                  <article
                    id={`room-${room.slug}`}
                    className="scroll-mt-28 grid items-center gap-8 lg:grid-cols-12 lg:gap-14"
                  >
                    <div
                      className={twMerge(
                        'overflow-hidden lg:col-span-7',
                        reverse && 'lg:order-2',
                      )}
                    >
                      <img
                        src={room.image}
                        alt={room.name}
                        className="aspect-[5/4] w-full object-cover md:aspect-[16/11]"
                        loading="lazy"
                      />
                    </div>
                    <div className={twMerge('lg:col-span-5', reverse && 'lg:order-1')}>
                      <p className="text-[11px] uppercase tracking-[0.22em] text-brand">
                        0{index + 1}
                      </p>
                      <h3 className="mt-3 text-3xl md:text-4xl lg:text-5xl">{room.name}</h3>
                      <p className="mt-3 font-display text-2xl text-brand md:text-3xl">
                        From {formatPrice(room.price)}
                        <span className="ml-2 text-sm font-sans font-normal uppercase tracking-[0.14em] text-mute">
                          / night
                        </span>
                      </p>
                      <p className="mt-5 max-w-sm text-base leading-[1.75] text-mute">
                        {room.shortDescription}
                      </p>
                      <ul className="mt-6 flex flex-wrap gap-5 text-xs uppercase tracking-[0.14em] text-mute">
                        <li className="inline-flex items-center gap-2">
                          <FaBed className="text-brand" aria-hidden="true" />
                          {room.beds} Bed
                        </li>
                        <li className="inline-flex items-center gap-2">
                          <FaExpand className="text-brand" aria-hidden="true" />
                          {room.sizeSqft} sqft
                        </li>
                      </ul>
                      <div className="mt-8">
                        <Button to={`/rooms/${room.slug}`} className="rounded-full">
                          Explore Room
                        </Button>
                      </div>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section id="amenities" className="scroll-mt-24 overflow-hidden bg-section-sage py-16 md:py-20">
        <div className="container-page">
          <Reveal className="mb-10 max-w-xl">
            <p className="eyebrow mb-4">Included with your stay</p>
            <h2 className="text-3xl md:text-4xl">Hotel amenities</h2>
            <p className="mt-4 max-w-md text-base leading-[1.75] text-mute">
              Everyday comforts that keep arrivals, rest, and mornings effortless.
            </p>
          </Reveal>

          <ul className="divide-y divide-line/80 border-y border-line/80">
            {facilities.map((facility, index) => (
              <Reveal key={facility.title} delay={0.03 * index}>
                <li className="flex items-start gap-5 py-5 md:items-center md:gap-8 md:py-6">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-paper text-brand">
                    <span aria-hidden="true">{facilityIcons[facility.icon]}</span>
                  </span>
                  <div className="min-w-0 flex-1 md:grid md:grid-cols-12 md:items-center md:gap-6">
                    <h3 className="text-lg md:col-span-4 md:text-xl">{facility.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-mute md:col-span-8 md:mt-0 md:text-base">
                      {facility.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>

          <div className="mt-10">
            <Button onClick={openBooking} className="rounded-full">
              Book your stay
            </Button>
          </div>
        </div>
      </section>

      <CtaSection title="Find your room" />
    </>
  )
}
