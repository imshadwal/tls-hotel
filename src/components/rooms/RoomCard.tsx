import { Link } from 'react-router-dom'
import { FaBed, FaExpand } from 'react-icons/fa6'
import type { Room } from '@/types'
import { formatPrice } from '@/content/rooms'
import { Button } from '@/components/common/Button'

type RoomCardProps = {
  room: Room
  index?: number
}

export function RoomCard({ room, index = 0 }: RoomCardProps) {
  return (
    <article className="group">
      <Link to={`/rooms/${room.slug}`} className="relative block overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="aspect-[5/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-deep/85 to-transparent p-5">
          <p className="text-[11px] uppercase tracking-[0.2em] text-brand-soft">
            From {formatPrice(room.price)} / night
          </p>
        </div>
      </Link>
      <div className="pt-6">
        <div className="mb-3 flex items-baseline justify-between gap-3">
          <h3 className="text-3xl">
            <Link to={`/rooms/${room.slug}`} className="hover:text-brand">
              {room.name}
            </Link>
          </h3>
          <span className="text-[11px] uppercase tracking-[0.18em] text-mute">0{index + 1}</span>
        </div>
        <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-mute">{room.shortDescription}</p>
        <ul className="mb-6 flex flex-wrap gap-5 text-xs uppercase tracking-[0.14em] text-mute">
          <li className="inline-flex items-center gap-2">
            <FaBed className="text-brand" aria-hidden="true" />
            {room.beds} Bed
          </li>
          <li className="inline-flex items-center gap-2">
            <FaExpand className="text-brand" aria-hidden="true" />
            {room.sizeSqft} sqft
          </li>
        </ul>
        <Button to={`/rooms/${room.slug}`} variant="ghost" className="rounded-full">
          View Room
        </Button>
      </div>
    </article>
  )
}
