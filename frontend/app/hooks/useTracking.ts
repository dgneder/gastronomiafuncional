import { v4 as uuidv4 } from 'uuid'

const API_URL = process.env.NEXT_PUBLIC_API_URL

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
  return match ? match[2] : null
}

export function useTracking() {

  const trackViewContent = async (
    contentName: string,
    contentId?: string,
    value?: number
  ) => {
    const eventId = uuidv4()
    const url = window.location.href

    // 1. Pixel (navegador)
    if (window.fbq) {
      // @ts-ignore
      window.fbq('track', 'ViewContent', {
        content_name: contentName,
        content_ids: contentId ? [contentId] : [],
        content_type: 'product',
        value: value,
        currency: 'BRL'
      }, { eventID: eventId })
    }

    // 2. CAPI (servidor)
    try {
      await fetch(`${API_URL}/api/tracking/viewcontent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_id: eventId,
          page_url: url,
          content_name: contentName,
          content_id: contentId,
          value: value,
          fbc: getCookie('_fbc'),
          fbp: getCookie('_fbp'),
        })
      })
    } catch (error) {
      console.error('CAPI ViewContent error:', error)
    }
  }

  return { trackViewContent }
}