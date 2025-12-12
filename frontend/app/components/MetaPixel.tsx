/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/MetaPixel.tsx
'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID
const API_URL = process.env.NEXT_PUBLIC_API_URL

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
  return match ? match[2] : null
}

async function sendPageView(url: string, eventId: string) {
  try {
    await fetch(`${API_URL}/api/tracking/pageview`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event_id: eventId,
        page_url: url,
        fbc: getCookie('_fbc'),
        fbp: getCookie('_fbp'),
      })
    })
  } catch (error) {
    console.error('CAPI PageView error:', error)
  }
}

function PageViewTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = `${window.location.origin}${pathname}${searchParams.toString() ? '?' + searchParams.toString() : ''}`
    const eventId = uuidv4()
    
    // 1. Pixel (navegador)
    if (window.fbq) {
      window.fbq('track', 'PageView', {}, { eventID: eventId })
    }
    
    // 2. CAPI (servidor)
    sendPageView(url, eventId)
    
  }, [pathname, searchParams])

  return null
}

export default function MetaPixel() {
  return (
    <>
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbp=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${FB_PIXEL_ID}');
        `}
      </Script>
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
    </>
  )
};