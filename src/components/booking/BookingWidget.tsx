import { useMemo, useState } from 'react'
import { BOOKING_ENGINE } from '@/constants/site'
import {
  addDays,
  defaultStayDates,
  formatDateParts,
  nightsBetween,
  toIpmsDate,
  BOOKING_DATE_FORMAT,
} from '@/utils/booking'
import { useBookingModal } from '@/contexts/BookingModalContext'
import { twMerge } from '@/utils/cn'

type BookingWidgetProps = {
  className?: string
  /** compact = sticky bar; panel = modal / drawer */
  variant?: 'compact' | 'panel'
}

export function BookingWidget({ className = '', variant = 'panel' }: BookingWidgetProps) {
  const defaults = useMemo(() => defaultStayDates(), [])
  const [checkIn, setCheckIn] = useState(defaults.checkIn)
  const [checkOut, setCheckOut] = useState(defaults.checkOut)
  const [adults, setAdults] = useState(1)
  const [rooms, setRooms] = useState(1)
  const { openBooking } = useBookingModal()
  const nights = nightsBetween(checkIn, checkOut)
  const compact = variant === 'compact'
  const panel = variant === 'panel'
  const canSubmit = nights >= 1 && adults >= 1 && rooms >= 1

  function onCheckInChange(value: string) {
    setCheckIn(value)
    if (!value) return
    if (!checkOut || checkOut <= value) {
      setCheckOut(addDays(value, 1))
    }
  }

  function onCheckOutChange(value: string) {
    if (!value) return
    if (checkIn && value <= checkIn) {
      setCheckOut(addDays(checkIn, 1))
      return
    }
    setCheckOut(value)
  }

  return (
    <div className={twMerge('pointer-events-auto relative z-20', className)}>
      <form
        name="_resBBBox"
        method="post"
        action={BOOKING_ENGINE.actionUrl}
        target="_blank"
        className={twMerge(
          'flex items-stretch gap-2',
          compact && 'flex-nowrap items-center gap-2 md:gap-3',
          panel && 'flex-col gap-4',
        )}
      >
        <div
          className={twMerge(
            panel && 'grid gap-3 sm:grid-cols-2 sm:gap-4',
            compact && 'flex min-w-0 flex-1 items-center gap-1.5 sm:gap-2',
          )}
        >
          <DateField
            label="Check in"
            value={checkIn}
            min={defaults.checkIn}
            onChange={onCheckInChange}
            tone={compact ? 'onDark' : 'light'}
            compact={compact}
            className={compact ? 'min-w-0 flex-1' : undefined}
          />

          {compact ? (
            <span className="hidden shrink-0 text-paper/35 sm:inline" aria-hidden="true">
              —
            </span>
          ) : null}

          <DateField
            label="Check out"
            value={checkOut}
            min={checkIn ? addDays(checkIn, 1) : defaults.checkIn}
            onChange={onCheckOutChange}
            tone={compact ? 'onDark' : 'light'}
            compact={compact}
            className={compact ? 'min-w-0 flex-1' : undefined}
          />
        </div>

        {/* Guests / rooms: modal always; sticky dock from md up */}
        <div
          className={twMerge(
            panel && 'grid gap-3 sm:grid-cols-2 sm:gap-4',
            compact && 'hidden md:flex md:w-auto md:shrink-0 md:gap-2',
          )}
        >
          <StepperField
            label="Guests"
            value={adults}
            min={1}
            max={8}
            onChange={setAdults}
            tone={compact ? 'onDark' : 'light'}
            className={compact ? 'w-[5.25rem]' : undefined}
          />
          <StepperField
            label="Rooms"
            value={rooms}
            min={1}
            max={5}
            onChange={setRooms}
            tone={compact ? 'onDark' : 'light'}
            className={compact ? 'w-[5.25rem]' : undefined}
          />
        </div>

        <div
          className={twMerge(
            'flex items-center gap-2',
            compact && 'shrink-0',
            panel && 'mt-1 flex-col sm:flex-row sm:justify-between',
          )}
        >
          <p
            className={twMerge(
              'whitespace-nowrap tabular-nums text-[10px] uppercase tracking-[0.18em]',
              compact ? 'hidden text-brand-soft xl:block' : 'text-mute',
            )}
            aria-live="polite"
          >
            {nights} {nights === 1 ? 'night' : 'nights'} · {adults}{' '}
            {adults === 1 ? 'guest' : 'guests'}
          </p>

          {compact ? (
            <>
              <button
                type="button"
                onClick={openBooking}
                className="inline-flex h-11 shrink-0 items-center justify-center rounded-xl border border-paper/25 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-paper md:hidden"
              >
                Details
              </button>
              <button
                type="submit"
                disabled={!canSubmit}
                className="inline-flex h-11 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-paper px-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-deep transition-all hover:bg-white disabled:cursor-not-allowed disabled:opacity-50 sm:px-5 md:h-12"
              >
                Book
              </button>
            </>
          ) : (
            <button
              type="submit"
              disabled={!canSubmit}
              className="inline-flex h-13 w-full cursor-pointer items-center justify-center rounded-full bg-brand px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-paper transition-all duration-300 hover:bg-brand-deep disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
            >
              Continue to book
            </button>
          )}
        </div>

        <input type="hidden" name="eZ_chkin" value={toIpmsDate(checkIn)} />
        <input type="hidden" name="eZ_chkout" value={toIpmsDate(checkOut)} />
        <input type="hidden" name="eZ_Nights" value={String(Math.max(1, nights))} />
        <input type="hidden" name="eZ_adult" value={String(adults)} />
        <input type="hidden" name="eZ_child" value="0" />
        <input type="hidden" name="eZ_room" value={String(rooms)} />
        <input type="hidden" name="calformat" value={BOOKING_DATE_FORMAT} />
        <input type="hidden" name="hidBodyLanguage" value="en" />
        <input type="hidden" name="ArDt" value={toIpmsDate(checkIn)} />
      </form>
    </div>
  )
}

function StepperField({
  label,
  value,
  min,
  max,
  onChange,
  className,
  tone = 'light',
}: {
  label: string
  value: number
  min: number
  max: number
  onChange: (value: number) => void
  className?: string
  tone?: 'light' | 'onDark'
}) {
  const onDark = tone === 'onDark'

  return (
    <div className={twMerge('min-w-0', className)}>
      {!onDark ? (
        <span className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.22em] text-mute">
          {label}
        </span>
      ) : null}
      <div
        className={twMerge(
          'flex items-center justify-between gap-1',
          onDark
            ? 'h-11 rounded-xl border border-paper/20 bg-paper/10 px-1 md:h-12'
            : 'h-14 rounded-xl border border-line bg-fog px-2',
        )}
      >
        <button
          type="button"
          aria-label={`Decrease ${label.toLowerCase()}`}
          disabled={value <= min}
          onClick={() => onChange(Math.max(min, value - 1))}
          className={twMerge(
            'inline-flex h-8 w-8 items-center justify-center rounded-lg text-lg leading-none transition-colors disabled:opacity-35',
            onDark ? 'text-paper hover:bg-paper/10' : 'text-night hover:bg-paper',
          )}
        >
          −
        </button>
        <div className="min-w-0 text-center">
          {onDark ? (
            <span className="block text-[9px] uppercase tracking-[0.12em] text-paper/55">{label}</span>
          ) : null}
          <span
            className={twMerge(
              'block tabular-nums font-medium',
              onDark ? 'text-sm text-paper' : 'text-base text-night',
            )}
          >
            {value}
          </span>
        </div>
        <button
          type="button"
          aria-label={`Increase ${label.toLowerCase()}`}
          disabled={value >= max}
          onClick={() => onChange(Math.min(max, value + 1))}
          className={twMerge(
            'inline-flex h-8 w-8 items-center justify-center rounded-lg text-lg leading-none transition-colors disabled:opacity-35',
            onDark ? 'text-paper hover:bg-paper/10' : 'text-night hover:bg-paper',
          )}
        >
          +
        </button>
      </div>
    </div>
  )
}

function DateField({
  label,
  value,
  min,
  onChange,
  className,
  tone = 'light',
  compact = false,
}: {
  label: string
  value: string
  min?: string
  onChange: (value: string) => void
  className?: string
  tone?: 'light' | 'onDark'
  compact?: boolean
}) {
  const parts = formatDateParts(value)
  const onDark = tone === 'onDark'

  return (
    <label className={twMerge('group relative block min-w-0 cursor-pointer', className)}>
      {!onDark ? (
        <span className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.22em] text-mute">
          {label}
        </span>
      ) : null}

      <span
        className={twMerge(
          'relative flex items-center overflow-hidden transition-colors duration-300',
          onDark
            ? twMerge(
                'rounded-xl border border-paper/20 bg-paper/10 group-hover:border-paper/40 group-hover:bg-paper/15 group-focus-within:border-brand-soft/70',
                compact ? 'h-11 gap-1.5 px-2 sm:px-2.5' : 'h-12 gap-2.5 px-3',
              )
            : 'h-14 gap-3 rounded-xl border border-line bg-fog px-3.5 group-hover:border-brand/35 group-focus-within:border-brand/50 group-focus-within:ring-2 group-focus-within:ring-brand/25',
        )}
      >
        <span className="flex min-w-0 flex-1 items-baseline gap-1.5 sm:gap-2">
          <span
            className={twMerge(
              'font-display leading-none tracking-tight',
              onDark
                ? compact
                  ? 'text-[1.25rem] text-paper sm:text-[1.4rem]'
                  : 'text-[1.55rem] text-paper'
                : 'text-[1.85rem] text-night',
            )}
          >
            {parts.day}
          </span>
          <span className="min-w-0 leading-tight">
            <span
              className={twMerge(
                'block font-medium',
                onDark ? 'text-xs text-paper sm:text-sm' : 'text-sm text-night',
              )}
            >
              {parts.month}
            </span>
            <span
              className={twMerge(
                'block',
                onDark
                  ? 'text-[9px] uppercase tracking-[0.1em] text-paper/55 sm:text-[10px]'
                  : 'text-[11px] text-mute',
              )}
            >
              {onDark ? label : `${parts.weekday} · ${parts.year}`}
            </span>
          </span>
        </span>
        <CalendarIcon
          className={twMerge(
            'shrink-0 transition-colors',
            compact && 'hidden sm:block',
            onDark ? 'text-brand-soft group-hover:text-paper' : 'text-mute group-hover:text-brand',
          )}
        />

        <input
          type="date"
          value={value}
          min={min}
          required
          onChange={(e) => onChange(e.target.value)}
          onClick={(e) => {
            const el = e.currentTarget
            try {
              if (typeof el.showPicker === 'function') void el.showPicker()
            } catch {
              /* native gesture still opens picker */
            }
          }}
          aria-label={label}
          className="booking-date-input absolute inset-0 z-10 h-full w-full cursor-pointer opacity-[0.02]"
        />
      </span>
    </label>
  )
}

function CalendarIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={twMerge('h-4 w-4', className)}
    >
      <rect x="2.5" y="4" width="15" height="13.5" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2.5 8.5h15" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6.5 2.5v3M13.5 2.5v3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
