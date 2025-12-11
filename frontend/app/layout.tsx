"use client";
import { useEffect, useState } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import 'aos/dist/aos.css'; // Importa o CSS global para as animações
import AOS from 'aos';

// Configuração das fontes
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// ID do Google Tag Manager
const GTM_ID = "GTM-T78N97M8";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [gtmLoaded, setGtmLoaded] = useState(false);

  useEffect(() => {
    // Inicializa o AOS com as configurações desejadas
    AOS.init({
      duration: 1000,
      offset: 120,
      easing: "ease-in-out",
      delay: 100,
      once: true,
    });

    // Carrega o GTM dinamicamente APÓS a página estar interativa
    const loadGTM = () => {
      if (!gtmLoaded) {
        const script = document.createElement("script");
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
        document.head.appendChild(script);
        setGtmLoaded(true);
      }
    };

    // Atraso para carregar o GTM após a interação do usuário (melhor para PageSpeed)
    window.addEventListener("scroll", loadGTM, { once: true });
    window.addEventListener("mousemove", loadGTM, { once: true });
    window.addEventListener("touchstart", loadGTM, { once: true });

    return () => {
      window.removeEventListener("scroll", loadGTM);
      window.removeEventListener("mousemove", loadGTM);
      window.removeEventListener("touchstart", loadGTM);
    };
  }, [gtmLoaded]);

  return (
    <html lang="pt-BR">
      <head></head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}