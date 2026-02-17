"use client";

import React, { useEffect, useState } from "react";

// Componentes da landing page Sono e Calma
import StickyBar from "@/app/components/sono-calma/StickyBar";
import Hero from "@/app/components/sono-calma/Hero";
import CredibilityBar from "@/app/components/sono-calma/CredibilityBar";
import ProblemSection from "@/app/components/sono-calma/ProblemSection";
import RootCauseSection from "@/app/components/sono-calma/RootCauseSection";
import ProductPresentation from "@/app/components/sono-calma/ProductPresentation";
import ContentPreview from "@/app/components/sono-calma/ContentPreview";
import PlantsGrid from "@/app/components/sono-calma/PlantsGrid";
import ProtocolsSection from "@/app/components/sono-calma/ProtocolsSection";
import AuthorSection from "@/app/components/sono-calma/AuthorSection";
import TargetAudience from "@/app/components/sono-calma/TargetAudience";
import ValueBullets from "@/app/components/sono-calma/ValueBullets";
import SocialProof from "@/app/components/sono-calma/SocialProof";
import ValueComparison from "@/app/components/sono-calma/ValueComparison";
import PriceAnchoring from "@/app/components/sono-calma/PriceAnchoring";
import OfferSection from "@/app/components/sono-calma/OfferSection";
import GuaranteeSection from "@/app/components/sono-calma/GuaranteeSection";
import FAQSection from "@/app/components/sono-calma/FAQSection";
import FinalCTA from "@/app/components/sono-calma/FinalCTA";
import FooterSono from "@/app/components/sono-calma/FooterSono";
import StickyCTASono from "@/app/components/sono-calma/StickyCTASono";
import LGPDSono from "@/app/components/sono-calma/LGPDSono";
import ExitIntentPopup from "@/app/components/sono-calma/ExitIntentPopup";

import { useTracking } from "@/app/hooks/useTracking";

// ── Configuração do produto ──────────────────────────────────
const PRODUCT_NAME = "Sono e Calma com Plantas Medicinais";
const PRODUCT_ID = "sono-calma-plantas-medicinais";
const PRODUCT_PRICE = 37.0;

const HOTMART_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_HOTMART_SONO_CALMA_URL ||
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
export default function SonoCalmLandingPage() {
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

      {/* Seção 1 — Hero / Above the Fold */}
      <Hero onButtonClick={goToCheckout} />

      {/* Seção 2 — Barra de credenciais */}
      <CredibilityBar />

      {/* Seção 3 — O Problema (Pattern Interrupt) */}
      <ProblemSection />

      {/* Seção 4 — A Raiz do Problema */}
      <RootCauseSection />

      {/* Seção 5 — Apresentação do Produto */}
      <ProductPresentation onButtonClick={goToCheckout} />

      {/* Seção 6 — Preview do Conteúdo */}
      <ContentPreview />

      {/* Seção 7 — As 12 Plantas */}
      <PlantsGrid />

      {/* Seção 8 — Os 5 Protocolos */}
      <ProtocolsSection onButtonClick={goToCheckout} />

      {/* Seção 9 — Quem Escreveu (Autoridade) */}
      <AuthorSection />

      {/* Seção 10 — Para Quem É / Não É */}
      <TargetAudience />

      {/* Seção 11 — Bullets de Valor */}
      <ValueBullets onButtonClick={goToCheckout} />

      {/* Seção 12 — Prova Social e Dados */}
      <SocialProof />

      {/* Seção 13 — Comparação de Valor */}
      <ValueComparison />

      {/* Seção 14 — Ancoragem de Preço */}
      <PriceAnchoring />

      {/* Seção 15 — A Oferta */}
      <OfferSection onButtonClick={goToCheckout} />

      {/* Seção 16 — Garantia */}
      <GuaranteeSection />

      {/* Seção 17 — FAQ */}
      <FAQSection />

      {/* Seção 18 — CTA Final */}
      <FinalCTA onButtonClick={goToCheckout} />

      {/* Seção 19 — Rodapé */}
      <FooterSono />

      {/* Floating CTA mobile */}
      <StickyCTASono isVisible={showStickyCTA} onButtonClick={goToCheckout} />

      {/* LGPD */}
      <LGPDSono />

      {/* Exit Intent Popup (desktop) */}
      <ExitIntentPopup onButtonClick={goToCheckout} />
    </div>
  );
}
