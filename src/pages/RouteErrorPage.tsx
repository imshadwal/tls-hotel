import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom'
import { Button } from '@/components/common/Button'

export function RouteErrorPage() {
  const error = useRouteError()
  const status = isRouteErrorResponse(error) ? error.status : 500
  const message = isRouteErrorResponse(error)
    ? error.statusText || 'Something went wrong'
    : error instanceof Error
      ? error.message
      : 'Unexpected application error'

  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-section-linen px-5 text-center">
      <div className="max-w-lg">
        <p className="font-display text-7xl text-brand md:text-8xl">{status}</p>
        <h1 className="mt-4 text-3xl text-night md:text-4xl">Something went wrong</h1>
        <p className="mx-auto mt-4 text-mute">{message}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button to="/" className="rounded-full">
            Back Home
          </Button>
          <Button to="/contact" variant="ghost" className="rounded-full">
            Contact us
          </Button>
        </div>
        <p className="mt-6 text-sm text-mute">
          Or try{' '}
          <Link to="/rooms" className="text-brand hover:text-brand-deep">
            viewing rooms
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
