import { FaWhatsapp, FaMapMarkerAlt, FaCheck } from 'react-icons/fa'
import { formatInr, type Boat } from '@/content/events'
import { Reveal } from '@/components/common/Reveal'

type BoatCardProps = {
  boat: Boat
  delay?: number
}

export function BoatCard({ boat, delay = 0 }: BoatCardProps) {
  return (
    <Reveal delay={delay} className="h-full">
      <article
        aria-labelledby={`${boat.id}-name`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_18px_50px_rgba(20,23,20,0.07)] transition-[border-color,transform,box-shadow] duration-500 hover:-translate-y-1 hover:border-gilt/60 hover:shadow-[0_28px_70px_rgba(20,23,20,0.14)] motion-reduce:hover:translate-y-0"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={boat.image}
            alt={boat.imageAlt}
            width={boat.imageWidth}
            height={boat.imageHeight}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:group-hover:scale-100"
          />
          <p className="absolute bottom-4 left-4 rounded-full bg-paper/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-night backdrop-blur-md">
            {boat.rideType}
          </p>
        </div>

        <div className="flex flex-1 flex-col p-6 md:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
            <h3 id={`${boat.id}-name`} className="text-2xl text-night md:text-3xl">
              {boat.name}
            </h3>
            <p className="font-display text-3xl text-gilt-deep">
              {formatInr(boat.price)}
              <span className="ml-1.5 font-sans text-xs uppercase tracking-[0.16em] text-mute">
                / ride
              </span>
            </p>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-mute">{boat.experience}</p>

          <dl className="mt-6 grid gap-3 border-t border-line pt-6 text-sm">
            <div className="flex items-center gap-3">
              <dt className="sr-only">Boarding point</dt>
              <FaMapMarkerAlt className="shrink-0 text-gilt-deep" aria-hidden="true" />
              <dd className="text-mute">
                Boarding at <span className="text-night">{boat.boardingPoint}</span>
              </dd>
            </div>
            {boat.capacity ? (
              <div className="flex items-center gap-3">
                <dt className="text-mute">Capacity</dt>
                <dd className="text-night">{boat.capacity}</dd>
              </div>
            ) : null}
            {boat.duration ? (
              <div className="flex items-center gap-3">
                <dt className="text-mute">Duration</dt>
                <dd className="text-night">{boat.duration}</dd>
              </div>
            ) : null}
          </dl>

          <ul className="mt-4 flex flex-wrap gap-2">
            {boat.features.map((feature) => (
              <li
                key={feature}
                className="inline-flex items-center gap-2 rounded-full bg-fog px-3.5 py-1.5 text-xs text-night"
              >
                <FaCheck className="text-[10px] text-brand" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-8">
            <a
              href={boat.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gilt px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-night transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#d8bb84] motion-reduce:hover:translate-y-0"
            >
              <FaWhatsapp className="text-base" aria-hidden="true" />
              {boat.bookLabel}
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  )
}
