"use client";

import React, { useEffect, useState } from "react";

// Componentes da landing page Fitoterapia
import StickyBar from "@/app/components/fitoterapia/StickyBar";
import Hero from "@/app/components/fitoterapia/Hero";
import CredibilityBar from "@/app/components/fitoterapia/CredibilityBar";
import ProblemSection from "@/app/components/fitoterapia/ProblemSection";
import RevealSection from "@/app/components/fitoterapia/RevealSection";
import AuthorSection from "@/app/components/fitoterapia/AuthorSection";
import ProductPresentation from "@/app/components/fitoterapia/ProductPresentation";
import ContentDetails from "@/app/components/fitoterapia/ContentDetails";
import InstitutionalProof from "@/app/components/fitoterapia/InstitutionalProof";
import TargetAudience from "@/app/components/fitoterapia/TargetAudience";
import InsightSection from "@/app/components/fitoterapia/InsightSection";
import ValueComparison from "@/app/components/fitoterapia/ValueComparison";
import OfferSection from "@/app/components/fitoterapia/OfferSection";
import GuaranteeSection from "@/app/components/fitoterapia/GuaranteeSection";
import FAQSection from "@/app/components/fitoterapia/FAQSection";
import UrgencyCTA from "@/app/components/fitoterapia/UrgencyCTA";
import AuthorNote from "@/app/components/fitoterapia/AuthorNote";
import FinalCTA from "@/app/components/fitoterapia/FinalCTA";
import FooterFito from "@/app/components/fitoterapia/FooterFito";
import StickyCTAFito from "@/app/components/fitoterapia/StickyCTAFito";
import LGPDFito from "@/app/components/fitoterapia/LGPDFito";

import { useTracking } from "@/app/hooks/useTracking";

// ── Configuração do produto ──────────────────────────────────
const PRODUCT_NAME = "Fitoterapia Essencial";
const PRODUCT_ID = "fitoterapia-essencial";
const PRODUCT_PRICE = 37.0;

const HOTMART_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_HOTMART_FITOTERAPIA_URL ||
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
export default function FitoterapiaLandingPage() {
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

      {/* Seção 2 — Barra de credibilidade */}
      <CredibilityBar />

      {/* Seção 3 — O problema (agitação) */}
      <ProblemSection />

      {/* Seção 4 — A grande revelação */}
      <RevealSection />

      {/* Seção 5 — Quem escreveu (autoridade) */}
      <AuthorSection />

      {/* Seção 6 — Apresentação do produto */}
      <ProductPresentation onButtonClick={goToCheckout} />

      {/* Seção 7 — O que está dentro */}
      <ContentDetails />

      {/* Seção 8B — Validação institucional (SUS) */}
      <InstitutionalProof />

      {/* Seção 9 — Para quem é / não é */}
      <TargetAudience />

      {/* Seção 10 — Insight transformador (chá sem tampa) */}
      <InsightSection onButtonClick={goToCheckout} />

      {/* Seção 11 — Comparativo de valor */}
      <ValueComparison />

      {/* Seção 12 — A oferta */}
      <OfferSection onButtonClick={goToCheckout} />

      {/* Seção 13 — Garantia */}
      <GuaranteeSection />

      {/* Seção 14 — FAQ */}
      <FAQSection />

      {/* Seção 15 — Segundo CTA + urgência */}
      <UrgencyCTA onButtonClick={goToCheckout} />

      {/* Seção 16 — Nota final do autor */}
      <AuthorNote />

      {/* Seção 17 — CTA final + rodapé */}
      <FinalCTA onButtonClick={goToCheckout} />
      <FooterFito />

      {/* Floating CTA mobile */}
      <StickyCTAFito isVisible={showStickyCTA} onButtonClick={goToCheckout} />

      {/* LGPD */}
      <LGPDFito />
    </div>
  );
}
