"use client";

import Script from "next/script";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
    metaTrack?: (event: string, params?: Record<string, any>) => void;
  }
}

export default function MetaPixel({ pixelId }: { pixelId: string }) {
  return (
    <>
      <Script id="meta-pixel-base" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s){
            if(f.fbq) return;
            n = f.fbq = function(){
              n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if(!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e); t.async = !0;
            t.src = 'https://connect.facebook.net/en_US/fbevents.js';
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s);
          }(window, document, 'script');

          fbq('init', '${pixelId}');
          fbq('track', 'PageView');

          // helper simples e seguro
          window.metaTrack = function(event, params){
            try {
              if (typeof window.fbq === 'function') {
                window.fbq('track', event, params || {});
              }
            } catch (e) {}
          };
        `}
      </Script>
    </>
  );
}
