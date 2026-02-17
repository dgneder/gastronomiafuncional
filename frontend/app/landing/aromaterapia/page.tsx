"use client";

import React, { useEffect, useState } from "react";

// Componentes da landing page Aromaterapia
import StickyBar from "@/app/components/aromaterapia/StickyBar";
import Hero from "@/app/components/aromaterapia/Hero";
import CredibilityBar from "@/app/components/aromaterapia/CredibilityBar";
import ProblemSection from "@/app/components/aromaterapia/ProblemSection";
import DilemmaSection from "@/app/components/aromaterapia/DilemmaSection";
import ProductPresentation from "@/app/components/aromaterapia/ProductPresentation";
import ContentPreview from "@/app/components/aromaterapia/ContentPreview";
import BlendsSection from "@/app/components/aromaterapia/BlendsSection";
import AuthorSection from "@/app/components/aromaterapia/AuthorSection";
import TargetAudience from "@/app/components/aromaterapia/TargetAudience";
import ValueBullets from "@/app/components/aromaterapia/ValueBullets";
import SocialProof from "@/app/components/aromaterapia/SocialProof";
import ValueComparison from "@/app/components/aromaterapia/ValueComparison";
import PriceAnchoring from "@/app/components/aromaterapia/PriceAnchoring";
import OfferSection from "@/app/components/aromaterapia/OfferSection";
import GuaranteeSection from "@/app/components/aromaterapia/GuaranteeSection";
import FAQSection from "@/app/components/aromaterapia/FAQSection";
import FinalCTA from "@/app/components/aromaterapia/FinalCTA";
import FooterAroma from "@/app/components/aromaterapia/FooterAroma";
import StickyCTAAroma from "@/app/components/aromaterapia/StickyCTAAroma";
import LGPDAroma from "@/app/components/aromaterapia/LGPDAroma";
import ExitIntentPopup from "@/app/components/aromaterapia/ExitIntentPopup";

import { useTracking } from "@/app/hooks/useTracking";

// ── Configuração do produto ──────────────────────────────────
const PRODUCT_NAME = "Aromaterapia Essencial";
const PRODUCT_ID = "aromaterapia-essencial";
const PRODUCT_PRICE = 37.0;

const HOTMART_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_HOTMART_AROMATERAPIA_URL ||
  "https://pay.hotmart.com/SEU_PRODUTO_ID";

// ── Helpers ──────────────────────────────────────────────────
function buildCheckoutUrl(baseUrl: string): string {
  if (typeof window === "undefined") return baseUrl;

  const currentParams = new URLSearchParams(window.location.search);
  const url = new URL(baseUrl);

  // Propaga UTMs e parâmetros de tracking para o checkout
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
export default function AromaterapiaLandingPage() {
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

      {/* Seção 3 — O problema (pattern interrupt) */}
      <ProblemSection />

      {/* Seção 4 — O dilema do mercado */}
      <DilemmaSection />

      {/* Seção 5 — Apresentação do produto */}
      <ProductPresentation onButtonClick={goToCheckout} />

      {/* Seção 6 — Preview do conteúdo */}
      <ContentPreview />

      {/* Seção 7 — Os 12 blends */}
      <BlendsSection onButtonClick={goToCheckout} />

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
      <FooterAroma />

      {/* Floating CTA mobile */}
      <StickyCTAAroma isVisible={showStickyCTA} onButtonClick={goToCheckout} />

      {/* LGPD */}
      <LGPDAroma />

      {/* Exit Intent Popup (desktop) */}
      <ExitIntentPopup onButtonClick={goToCheckout} />
    </div>
  );
}
