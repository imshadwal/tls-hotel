import { SITE } from '@/constants/site'

export type ContactPayload = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

/** Builds the Gmail subject, e.g. "1 Booking Query — Room availability" */
export function bookingQuerySubject(userSubject: string) {
  const trimmed = userSubject.trim()
  return trimmed ? `1 Booking Query — ${trimmed}` : '1 Booking Query'
}

/**
 * Sends the contact form to SITE.email via FormSubmit (no backend required).
 * First delivery asks the inbox to confirm once; after that messages arrive as normal email.
 */
export async function submitContactForm(values: ContactPayload): Promise<void> {
  const endpoint = `https://formsubmit.co/ajax/${SITE.email}`

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: values.name,
      email: values.email,
      phone: values.phone,
      subject: values.subject,
      message: values.message,
      _subject: bookingQuerySubject(values.subject),
      _template: 'table',
      _replyto: values.email,
      _captcha: 'false',
    }),
  })

  if (!response.ok) {
    throw new Error('Unable to send your message right now. Please try again or email us directly.')
  }

  const data = (await response.json().catch(() => null)) as { success?: string | boolean } | null
  if (data && data.success === false) {
    throw new Error('Unable to send your message right now. Please try again or email us directly.')
  }
}
