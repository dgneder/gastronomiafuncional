import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { AosInit } from "./components/AosInit";
import MetaPixel from "./components/MetaPixel";

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

const GTM_ID = "GTM-NRQ2GVRZ";
const META_PIXEL_ID = "537560855757532";

export const metadata: Metadata = {
  title: "Gastronomia Funcional",
  description: "Receitas funcionais para uma vida saudável",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* AOS (client) */}
        <AosInit />

        {/* Meta Pixel (client) */}
        <MetaPixel pixelId={META_PIXEL_ID} />

        {/* fallback no-script do pixel */}
        <noscript>
          <img
            alt="fb-pixel"
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>

        {children}

        {/* GTM (server-friendly) */}
        <GoogleTagManager gtmId={GTM_ID} />
      </body>
    </html>
  );
}
