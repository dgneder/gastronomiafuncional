"use client";

import React, { useEffect, useState } from "react";

// Componentes da landing page Imunidade
import StickyBar from "@/app/components/imunidade/StickyBar";
import Hero from "@/app/components/imunidade/Hero";
import CredibilityBar from "@/app/components/imunidade/CredibilityBar";
import ProblemSection from "@/app/components/imunidade/ProblemSection";
import RevealSection from "@/app/components/imunidade/RevealSection";
import AuthorSection from "@/app/components/imunidade/AuthorSection";
import ProductPresentation from "@/app/components/imunidade/ProductPresentation";
import ContentDetails from "@/app/components/imunidade/ContentDetails";
import InstitutionalProof from "@/app/components/imunidade/InstitutionalProof";
import TargetAudience from "@/app/components/imunidade/TargetAudience";
import InsightSection from "@/app/components/imunidade/InsightSection";
import ValueComparison from "@/app/components/imunidade/ValueComparison";
import OfferSection from "@/app/components/imunidade/OfferSection";
import GuaranteeSection from "@/app/components/imunidade/GuaranteeSection";
import FAQSection from "@/app/components/imunidade/FAQSection";
import UrgencyCTA from "@/app/components/imunidade/UrgencyCTA";
import AuthorNote from "@/app/components/imunidade/AuthorNote";
import FinalCTA from "@/app/components/imunidade/FinalCTA";
import FooterImunidade from "@/app/components/imunidade/FooterImunidade";
import StickyCTAImunidade from "@/app/components/imunidade/StickyCTAImunidade";
import LGPDImunidade from "@/app/components/imunidade/LGPDImunidade";

import { useTracking } from "@/app/hooks/useTracking";

// ── Configuração do produto ──────────────────────────────────
const PRODUCT_NAME = "Imunidade com Plantas Medicinais";
const PRODUCT_ID = "imunidade-plantas-medicinais";
const PRODUCT_PRICE = 27.0;

const HOTMART_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_HOTMART_IMUNIDADE_URL ||
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
export default function ImunidadeLandingPage() {
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

      {/* Seção 8 — Validação institucional */}
      <InstitutionalProof />

      {/* Seção 9 — Para quem é / não é */}
      <TargetAudience />

      {/* Seção 10 — Insight transformador (alho 10 minutos) */}
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

      {/* Seção 16 — Nota pessoal do autor */}
      <AuthorNote />

      {/* Seção 17 — CTA final + rodapé */}
      <FinalCTA onButtonClick={goToCheckout} />
      <FooterImunidade />

      {/* Floating CTA mobile */}
      <StickyCTAImunidade isVisible={showStickyCTA} onButtonClick={goToCheckout} />

      {/* LGPD */}
      <LGPDImunidade />
    </div>
  );
}
