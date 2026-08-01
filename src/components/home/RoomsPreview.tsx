import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { rooms, formatPrice } from '@/content/rooms'
import { Button } from '@/components/common/Button'
import { Reveal } from '@/components/common/Reveal'
import { useBookingModal } from '@/contexts/BookingModalContext'
import { twMerge } from '@/utils/cn'

export function RoomsPreview() {
  const [active, setActive] = useState(0)
  const room = rooms[active]
  const { openBooking } = useBookingModal()

  return (
    <section className="overflow-hidden bg-section-sage py-12 md:py-16">
      <div className="container-page">
        <Reveal className="mb-8 flex flex-col justify-between gap-4 md:mb-10 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-3">Accommodations</p>
            <h2 className="max-w-md text-3xl leading-[1.05] md:text-4xl lg:text-5xl">
              Rooms that invite stillness
            </h2>
          </div>
          <Link
            to="/rooms"
            className="text-[11px] font-semibold uppercase tracking-[0.22em] text-night transition-colors hover:text-brand"
          >
            View all →
          </Link>
        </Reveal>

        {/* Room type tabs */}
        <div
          className="mb-4 flex gap-2 overflow-x-auto pb-1"
          style={{ scrollbarWidth: 'none' }}
          role="tablist"
          aria-label="Room types"
        >
          {rooms.map((item, index) => {
            const selected = index === active
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(index)}
                className={twMerge(
                  'shrink-0 rounded-full border px-4 py-2.5 text-left transition-all duration-300',
                  selected
                    ? 'border-brand bg-brand text-paper'
                    : 'border-line bg-paper text-night hover:border-brand/40',
                )}
              >
                <span className="block text-[10px] uppercase tracking-[0.16em] opacity-70">
                  0{index + 1} · {formatPrice(item.price)}
                </span>
                <span className="mt-0.5 block text-sm font-medium">{item.name}</span>
              </button>
            )
          })}
        </div>

        {/* Featured visual */}
        <Reveal delay={0.05}>
          <div className="relative aspect-[16/11] overflow-hidden md:aspect-[21/11] lg:aspect-[2.2/1]">
            <AnimatePresence mode="wait">
              <motion.div
                key={room.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <img
                  src={room.image}
                  alt={room.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/85 via-brand-deep/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-5 p-5 sm:flex-row sm:items-end sm:justify-between md:p-8">
                  <div className="max-w-lg">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-brand-soft">
                      {room.sizeSqft} sqft · {room.beds} bed · From {formatPrice(room.price)}
                    </p>
                    <h3 className="mt-2 font-display text-3xl text-paper md:text-4xl">
                      {room.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-paper/75">
                      {room.shortDescription}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      to={`/rooms/${room.slug}`}
                      variant="light"
                      className="rounded-full px-6 py-3"
                    >
                      Explore
                    </Button>
                    <Button onClick={openBooking} className="rounded-full px-6 py-3">
                      Book
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
