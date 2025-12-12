// src/app/hooks/useTracking.ts
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

  const trackAddToCart = async (
    contentName: string,
    contentId?: string,
    value?: number
  ) => {
    const eventId = uuidv4()
    const url = window.location.href

    if (window.fbq) {
      // @ts-ignore
      window.fbq('track', 'AddToCart', {
        content_name: contentName,
        content_ids: contentId ? [contentId] : [],
        content_type: 'product',
        value: value,
        currency: 'BRL'
      }, { eventID: eventId })
    }

    try {
      await fetch(`${API_URL}/api/tracking/addtocart`, {
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
      console.error('CAPI AddToCart error:', error)
    }
  }

  const trackLead = async (
    email?: string,
    phone?: string
  ) => {
    const eventId = uuidv4()
    const url = window.location.href

    if (window.fbq) {
      // @ts-ignore
      window.fbq('track', 'Lead', {}, { eventID: eventId })
    }

    try {
      await fetch(`${API_URL}/api/tracking/lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_id: eventId,
          page_url: url,
          email: email,
          phone: phone,
          fbc: getCookie('_fbc'),
          fbp: getCookie('_fbp'),
        })
      })
    } catch (error) {
      console.error('CAPI Lead error:', error)
    }
  }

  const trackPurchase = async (
    contentId: string,
    value: number
  ) => {
    const eventId = uuidv4()
    const url = window.location.href

    if (window.fbq) {
      // @ts-ignore
      window.fbq('track', 'Purchase', {
        content_ids: [contentId],
        content_type: 'product',
        value: value,
        currency: 'BRL'
      }, { eventID: eventId })
    }

    try {
      await fetch(`${API_URL}/api/tracking/purchase`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_id: eventId,
          page_url: url,
          content_id: contentId,
          value: value,
          fbc: getCookie('_fbc'),
          fbp: getCookie('_fbp'),
        })
      })
    } catch (error) {
      console.error('CAPI Purchase error:', error)
    }
  }

  return { trackViewContent, trackAddToCart, trackLead, trackPurchase }
}