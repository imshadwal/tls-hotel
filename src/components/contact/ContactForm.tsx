import { useState, type ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/common/Button'
import { SITE } from '@/constants/site'
import { submitContactForm } from '@/services/contactForm'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(8, 'Please enter a valid phone number'),
  subject: z.string().min(2, 'Please enter a subject'),
  message: z.string().min(10, 'Please enter a message of at least 10 characters'),
})

type FormValues = z.infer<typeof schema>

const fieldClass =
  'mt-1.5 w-full border border-line bg-paper px-4 py-3.5 text-sm text-night outline-none transition-colors placeholder:text-mute/60 focus:border-brand focus:ring-2 focus:ring-brand/20'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (values: FormValues) => {
    setStatus('idle')
    setErrorMessage('')
    try {
      await submitContactForm(values)
      setStatus('success')
      reset()
    } catch (err) {
      setStatus('error')
      setErrorMessage(
        err instanceof Error
          ? err.message
          : `Unable to send. Please email ${SITE.email} directly.`,
      )
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-start gap-5 py-4" role="status">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand">Sent</p>
        <h3 className="font-display text-3xl text-night">Thank you</h3>
        <p className="max-w-sm text-base leading-relaxed text-mute">
          Your message is on its way to our team. We’ll reply soon — usually within one business
          day.
        </p>
        <Button type="button" variant="ghost" className="rounded-full" onClick={() => setStatus('idle')}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Your name" error={errors.name?.message}>
          <input {...register('name')} className={fieldClass} placeholder="Full name" autoComplete="name" />
        </Field>
        <Field label="Your email" error={errors.email?.message}>
          <input
            {...register('email')}
            type="email"
            className={fieldClass}
            placeholder="name@email.com"
            autoComplete="email"
          />
        </Field>
        <Field label="Phone number" error={errors.phone?.message}>
          <input
            {...register('phone')}
            type="tel"
            className={fieldClass}
            placeholder="+91 …"
            autoComplete="tel"
          />
        </Field>
        <Field label="Subject" error={errors.subject?.message}>
          <input
            {...register('subject')}
            className={fieldClass}
            placeholder="Booking query, dates, request…"
          />
        </Field>
      </div>
      <Field label="Message" error={errors.message?.message}>
        <textarea
          {...register('message')}
          rows={6}
          className={`${fieldClass} resize-y`}
          placeholder="Tell us how we can help"
        />
      </Field>
      <Button type="submit" className="min-w-44 rounded-full" disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : 'Send Message'}
      </Button>
      {status === 'error' ? (
        <p className="text-sm text-red-700" role="alert">
          {errorMessage}{' '}
          <a href={`mailto:${SITE.email}`} className="underline hover:text-night">
            {SITE.email}
          </a>
        </p>
      ) : null}
    </form>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: ReactNode
}) {
  return (
    <label className="block">
      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-mute">
        {label} <span className="text-brand">*</span>
      </span>
      {children}
      {error ? <span className="mt-1 block text-sm text-red-700">{error}</span> : null}
    </label>
  )
}
