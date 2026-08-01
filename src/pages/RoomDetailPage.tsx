import { Link, useParams } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa6'
import { SeoHead } from '@/components/common/SeoHead'
import { PageHero } from '@/components/common/PageHero'
import { Button } from '@/components/common/Button'
import { RoomCard } from '@/components/rooms/RoomCard'
import { formatPrice, getRoomBySlug, rooms } from '@/content/rooms'
import { useBookingModal } from '@/contexts/BookingModalContext'
import { NotFoundPage } from '@/pages/NotFoundPage'

export function RoomDetailPage() {
  const { slug } = useParams()
  const room = slug ? getRoomBySlug(slug) : undefined
  const { openBooking } = useBookingModal()

  if (!room) return <NotFoundPage />

  const related = rooms.filter((item) => item.id !== room.id)

  return (
    <>
      <SeoHead
        title={room.name}
        description={room.shortDescription}
        path={`/rooms/${room.slug}`}
        image={room.image}
      />
      <PageHero
        title={room.name}
        subtitle={`From ${formatPrice(room.price)} / night`}
        image={room.image}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Rooms', path: '/rooms' },
          { label: room.name },
        ]}
      />
      <section className="section-pad">
        <div className="container-page grid gap-14 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              {room.gallery.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt={room.name}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              ))}
            </div>
            <h2 className="mt-12 text-3xl md:text-4xl">The experience</h2>
            <p className="mt-5 leading-relaxed text-stone">{room.description}</p>
            <h3 className="mt-10 text-2xl">Amenities</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {room.amenities.map((amenity) => (
                <li key={amenity} className="inline-flex items-center gap-3 text-charcoal">
                  <FaCheck className="text-gold" aria-hidden="true" />
                  {amenity}
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit border border-line bg-mist p-8">
            <p className="text-[11px] uppercase tracking-[0.22em] text-stone">From</p>
            <p className="mt-2 font-display text-5xl text-charcoal">
              {formatPrice(room.price)}
              <span className="text-lg text-stone"> /night</span>
            </p>
            <p className="mt-5 text-sm leading-relaxed text-stone">{room.shortDescription}</p>
            <dl className="mt-8 space-y-4 border-t border-line pt-6 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-stone">Occupancy</dt>
                <dd>{room.beds} bed</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-stone">Size</dt>
                <dd>{room.sizeSqft} sqft</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-stone">Parking</dt>
                <dd>{room.parking}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-stone">Inventory</dt>
                <dd>{room.inventory} rooms</dd>
              </div>
            </dl>
            <Button onClick={openBooking} className="mt-8 w-full rounded-full">
              Book This Room
            </Button>
            <Link to="/contact" className="mt-4 block text-center text-sm text-stone hover:text-gold">
              Need help choosing?
            </Link>
          </aside>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="container-page">
          <h2 className="mb-10 text-3xl md:text-4xl">Similar rooms</h2>
          <div className="grid gap-10 lg:grid-cols-2">
            {related.map((item, index) => (
              <RoomCard key={item.id} room={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
