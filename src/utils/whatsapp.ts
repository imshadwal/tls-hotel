export const BOAT_WHATSAPP_NUMBER = '919651326669'

export function whatsappLink(message: string, number: string = BOAT_WHATSAPP_NUMBER) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
