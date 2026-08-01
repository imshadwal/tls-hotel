/** IPMS247 / eZee booking form helpers */

export const BOOKING_DATE_FORMAT = 'dd-mm-yy' as const

export function toIsoDate(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

/** IPMS CalDtFormat `dd-mm-yy` → DD-MM-YYYY */
export function toIpmsDate(iso: string): string {
  const [y, m, d] = iso.split('-')
  return `${d}-${m}-${y}`
}

export function parseIso(iso: string): Date {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d)
}

export function addDays(iso: string, days: number): string {
  const date = parseIso(iso)
  date.setDate(date.getDate() + days)
  return toIsoDate(date)
}

export function nightsBetween(checkIn: string, checkOut: string): number {
  const start = parseIso(checkIn).getTime()
  const end = parseIso(checkOut).getTime()
  return Math.max(0, Math.round((end - start) / 86_400_000))
}

export function formatDisplayDate(iso: string): string {
  return parseIso(iso).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export function formatDateParts(iso: string) {
  const date = parseIso(iso)
  return {
    weekday: date.toLocaleDateString('en-IN', { weekday: 'short' }),
    day: date.toLocaleDateString('en-IN', { day: '2-digit' }),
    month: date.toLocaleDateString('en-IN', { month: 'short' }),
    year: date.toLocaleDateString('en-IN', { year: 'numeric' }),
  }
}

export function defaultStayDates() {
  const today = toIsoDate(new Date())
  return {
    checkIn: today,
    checkOut: addDays(today, 1),
  }
}
