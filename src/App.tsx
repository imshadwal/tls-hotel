import { lazy, Suspense, type ReactNode } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import { HomePage } from '@/pages/HomePage'
import { RouteErrorPage } from '@/pages/RouteErrorPage'

const AboutPage = lazy(() =>
  import('@/pages/AboutPage').then((m) => ({ default: m.AboutPage })),
)
const RoomsPage = lazy(() =>
  import('@/pages/RoomsPage').then((m) => ({ default: m.RoomsPage })),
)
const RoomDetailPage = lazy(() =>
  import('@/pages/RoomDetailPage').then((m) => ({ default: m.RoomDetailPage })),
)
const ContactPage = lazy(() =>
  import('@/pages/ContactPage').then((m) => ({ default: m.ContactPage })),
)
const BlogPage = lazy(() =>
  import('@/pages/BlogPage').then((m) => ({ default: m.BlogPage })),
)
const BlogDetailPage = lazy(() =>
  import('@/pages/BlogDetailPage').then((m) => ({ default: m.BlogDetailPage })),
)
const GalleryPage = lazy(() =>
  import('@/pages/GalleryPage').then((m) => ({ default: m.GalleryPage })),
)
const DiningPage = lazy(() =>
  import('@/pages/DiningPage').then((m) => ({ default: m.DiningPage })),
)
const PrivacyPage = lazy(() =>
  import('@/pages/LegalPages').then((m) => ({ default: m.PrivacyPage })),
)
const TermsPage = lazy(() =>
  import('@/pages/LegalPages').then((m) => ({ default: m.TermsPage })),
)
const NotFoundPage = lazy(() =>
  import('@/pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })),
)

function PageLoader() {
  return (
    <div
      className="min-h-[100svh] bg-brand-deep"
      aria-busy="true"
      aria-label="Loading page"
    />
  )
}

function Suspend({ children }: { children: ReactNode }) {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <RouteErrorPage />,
    children: [
      { index: true, element: <HomePage />, errorElement: <RouteErrorPage /> },
      { path: 'about', element: <Suspend><AboutPage /></Suspend>, errorElement: <RouteErrorPage /> },
      { path: 'rooms', element: <Suspend><RoomsPage /></Suspend>, errorElement: <RouteErrorPage /> },
      {
        path: 'rooms/:slug',
        element: <Suspend><RoomDetailPage /></Suspend>,
        errorElement: <RouteErrorPage />,
      },
      { path: 'dining', element: <Suspend><DiningPage /></Suspend>, errorElement: <RouteErrorPage /> },
      { path: 'gallery', element: <Suspend><GalleryPage /></Suspend>, errorElement: <RouteErrorPage /> },
      { path: 'contact', element: <Suspend><ContactPage /></Suspend>, errorElement: <RouteErrorPage /> },
      { path: 'blog', element: <Suspend><BlogPage /></Suspend>, errorElement: <RouteErrorPage /> },
      {
        path: 'blog/:slug',
        element: <Suspend><BlogDetailPage /></Suspend>,
        errorElement: <RouteErrorPage />,
      },
      { path: 'privacy', element: <Suspend><PrivacyPage /></Suspend>, errorElement: <RouteErrorPage /> },
      { path: 'terms', element: <Suspend><TermsPage /></Suspend>, errorElement: <RouteErrorPage /> },
      { path: 'restaurant', element: <Navigate to="/dining" replace /> },
      { path: 'amenities', element: <Navigate to="/rooms#amenities" replace /> },
      { path: 'fitness', element: <Navigate to="/rooms#amenities" replace /> },
      { path: '*', element: <Suspend><NotFoundPage /></Suspend> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
