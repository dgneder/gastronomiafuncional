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
        <MetaPixel />
        
        {children}

        {/* GTM (server-friendly) */}
        <GoogleTagManager gtmId={GTM_ID} />
      </body>
    </html>
  );
}
