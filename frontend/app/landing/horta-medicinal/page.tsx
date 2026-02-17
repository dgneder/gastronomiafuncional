"use client";

import React, { useEffect, useState } from "react";

// Componentes da landing page Horta Medicinal
import StickyBar from "@/app/components/horta-medicinal/StickyBar";
import Hero from "@/app/components/horta-medicinal/Hero";
import CredibilityBar from "@/app/components/horta-medicinal/CredibilityBar";
import ProblemSection from "@/app/components/horta-medicinal/ProblemSection";
import DilemmaSection from "@/app/components/horta-medicinal/DilemmaSection";
import ProductPresentation from "@/app/components/horta-medicinal/ProductPresentation";
import ContentPreview from "@/app/components/horta-medicinal/ContentPreview";
import PlantsGrid from "@/app/components/horta-medicinal/PlantsGrid";
import AuthorSection from "@/app/components/horta-medicinal/AuthorSection";
import TargetAudience from "@/app/components/horta-medicinal/TargetAudience";
import ValueBullets from "@/app/components/horta-medicinal/ValueBullets";
import SocialProof from "@/app/components/horta-medicinal/SocialProof";
import ValueComparison from "@/app/components/horta-medicinal/ValueComparison";
import PriceAnchoring from "@/app/components/horta-medicinal/PriceAnchoring";
import OfferSection from "@/app/components/horta-medicinal/OfferSection";
import GuaranteeSection from "@/app/components/horta-medicinal/GuaranteeSection";
import FAQSection from "@/app/components/horta-medicinal/FAQSection";
import FinalCTA from "@/app/components/horta-medicinal/FinalCTA";
import FooterHorta from "@/app/components/horta-medicinal/FooterHorta";
import StickyCTAHorta from "@/app/components/horta-medicinal/StickyCTAHorta";
import LGPDHorta from "@/app/components/horta-medicinal/LGPDHorta";
import ExitIntentPopup from "@/app/components/horta-medicinal/ExitIntentPopup";

import { useTracking } from "@/app/hooks/useTracking";

// ── Configuração do produto ──────────────────────────────────
const PRODUCT_NAME = "Horta Medicinal em Casa";
const PRODUCT_ID = "horta-medicinal-em-casa";
const PRODUCT_PRICE = 34.9;

const HOTMART_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_HOTMART_HORTA_MEDICINAL_URL ||
  "https://pay.hotmart.com/SEU_PRODUTO_ID";

// ── Helpers ──────────────────────────────────────────────────
function buildCheckoutUrl(baseUrl: string): string {
  if (typeof window === "undefined") return baseUrl;

  const currentParams = new URLSearchParams(window.location.search);
  const url = new URL(baseUrl);

  const trackingParams = [
    "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term",
    "src", "sck", "off", "ref",
  ];

  currentParams.forEach((value, key) => {
    if (trackingParams.includes(key) && !url.searchParams.has(key)) {
      url.searchParams.set(key, value);
    }
  });

  return url.toString();
}

// ── Componente principal ─────────────────────────────────────
export default function HortaMedicinalLandingPage() {
  const tracking = useTracking() as {
    trackViewContent?: (name: string, id: string, value: number) => void;
    trackInitiateCheckout?: (name: string, id: string, value: number) => void;
  };

  const [showStickyCTA, setShowStickyCTA] = useState(false);

  // ViewContent ao carregar
  useEffect(() => {
    tracking?.trackViewContent?.(PRODUCT_NAME, PRODUCT_ID, PRODUCT_PRICE);
  }, [tracking]);

  // Controle do StickyCTA mobile
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowStickyCTA(heroBottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll suave para a seção de oferta
  const scrollToOffer = () => {
    const el = document.getElementById("oferta");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Redireciona para o checkout Hotmart
  const goToCheckout = () => {
    tracking?.trackInitiateCheckout?.(PRODUCT_NAME, PRODUCT_ID, PRODUCT_PRICE);
    window.location.href = buildCheckoutUrl(HOTMART_CHECKOUT_URL);
  };

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Seção 0 — Barra superior fixa */}
      <StickyBar onButtonClick={scrollToOffer} />

      {/* Seção 1 — Hero */}
      <Hero onButtonClick={goToCheckout} />

      {/* Seção 2 — Barra de credenciais */}
      <CredibilityBar />

      {/* Seção 3 — O problema */}
      <ProblemSection />

      {/* Seção 4 — O dilema do mercado */}
      <DilemmaSection />

      {/* Seção 5 — Apresentação do produto */}
      <ProductPresentation onButtonClick={goToCheckout} />

      {/* Seção 6 — Preview do conteúdo */}
      <ContentPreview />

      {/* Seção 7 — As 30 plantas */}
      <PlantsGrid onButtonClick={scrollToOffer} />

      {/* Seção 8 — Quem escreveu (autoridade) */}
      <AuthorSection />

      {/* Seção 9 — Para quem é / não é */}
      <TargetAudience />

      {/* Seção 10 — Bullets de valor */}
      <ValueBullets onButtonClick={goToCheckout} />

      {/* Seção 11 — Prova social e dados */}
      <SocialProof />

      {/* Seção 12 — Comparação com alternativas */}
      <ValueComparison />

      {/* Seção 13 — Ancoragem de preço */}
      <PriceAnchoring />

      {/* Seção 14 — A oferta */}
      <OfferSection onButtonClick={goToCheckout} />

      {/* Seção 15 — Garantia */}
      <GuaranteeSection />

      {/* Seção 16 — FAQ */}
      <FAQSection />

      {/* Seção 17 — CTA final */}
      <FinalCTA onButtonClick={goToCheckout} />

      {/* Seção 18 — Rodapé */}
      <FooterHorta />

      {/* Floating CTA mobile */}
      <StickyCTAHorta isVisible={showStickyCTA} onButtonClick={goToCheckout} />

      {/* LGPD */}
      <LGPDHorta />

      {/* Exit Intent Popup (desktop) */}
      <ExitIntentPopup onButtonClick={goToCheckout} />
    </div>
  );
}
