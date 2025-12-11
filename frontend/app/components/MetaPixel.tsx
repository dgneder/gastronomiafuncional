"use client";

import Script from "next/script";

const PIXEL_ID = "537560855757532";

export function MetaPixel() {
  return (
    <>
      {/* Script base + init do Pixel */}
      <Script
        id="fb-pixel-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s){
              if(f.fbq) return; 
              n = f.fbq = function(){
                n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
              };
              if(!f._fbq) f._fbq = n;
              n.push = n; n.loaded = !0; n.version = '2.0';
              n.queue = [];
              t = b.createElement(e); t.async = !0;
              t.src = 'https://connect.facebook.net/en_US/fbevents.js';
              s = b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t, s);
            }(window, document, 'script');
            fbq('init', '${PIXEL_ID}');
          `,
        }}
      />

      {/* PageView explícito, separado */}
      <Script
        id="fb-pixel-pageview"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            fbq('track', 'PageView');
          `,
        }}
      />

      {/* Fallback sem JS */}
      <noscript>
        <img
          alt="fb-pixel"
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}

