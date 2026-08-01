import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Button } from '@/components/common/Button'
import { SITE } from '@/constants/site'

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page not found – {SITE.name}</title>
        <meta name="description" content="The page you requested could not be found." />
        <meta name="robots" content="noindex,follow" />
      </Helmet>
      <section className="flex min-h-[75vh] items-center justify-center bg-section-linen px-5 text-center">
        <div>
          <p className="font-display text-8xl text-brand">404</p>
          <h1 className="mt-4 text-4xl md:text-5xl">Page not found</h1>
          <p className="mx-auto mt-4 max-w-md text-mute">
            The page you’re looking for doesn’t exist or has moved.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button to="/" className="rounded-full">
              Back Home
            </Button>
            <Button to="/rooms" variant="ghost" className="rounded-full">
              View Rooms
            </Button>
          </div>
          <p className="mt-6 text-sm text-mute">
            Or{' '}
            <Link to="/contact" className="text-brand hover:text-brand-deep">
              contact us
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
