import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { StickyBookingBar } from '@/components/booking/StickyBookingBar'
import { BookingModal } from '@/components/booking/BookingModal'
import { BookingModalProvider } from '@/contexts/BookingModalContext'

export function MainLayout() {
  return (
    <BookingModalProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="min-h-[100svh] flex-1">
          <Outlet />
        </main>
        <Footer />
        <StickyBookingBar />
        <BookingModal />
        <ScrollRestoration />
        <Analytics />
        <SpeedInsights />
      </div>
    </BookingModalProvider>
  )
}
