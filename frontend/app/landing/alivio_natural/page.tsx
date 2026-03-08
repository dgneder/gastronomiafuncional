"use client";

import React, { useEffect, useState } from "react";

// Componentes da landing page Alívio Natural
import StickyBar from "@/app/components/alivio_natural/StickyBar";
import Hero from "@/app/components/alivio_natural/Hero";
import CredibilityBar from "@/app/components/alivio_natural/CredibilityBar";
import ProblemSection from "@/app/components/alivio_natural/ProblemSection";
import DataSection from "@/app/components/alivio_natural/DataSection";
import BridgeSection from "@/app/components/alivio_natural/BridgeSection";
import AuthorSection from "@/app/components/alivio_natural/AuthorSection";
import ContentDetails from "@/app/components/alivio_natural/ContentDetails";
import PlantsSection from "@/app/components/alivio_natural/PlantsSection";
import ProtocolsSection from "@/app/components/alivio_natural/ProtocolsSection";
import BonusSection from "@/app/components/alivio_natural/BonusSection";
import TargetAudience from "@/app/components/alivio_natural/TargetAudience";
import ValueComparison from "@/app/components/alivio_natural/ValueComparison";
import OfferSection from "@/app/components/alivio_natural/OfferSection";
import GuaranteeSection from "@/app/components/alivio_natural/GuaranteeSection";
import FAQSection from "@/app/components/alivio_natural/FAQSection";
import FinalCTA from "@/app/components/alivio_natural/FinalCTA";
import FooterAlivio from "@/app/components/alivio_natural/FooterAlivio";
import StickyCTAAlivio from "@/app/components/alivio_natural/StickyCTAAlivio";
import LGPDAlivio from "@/app/components/alivio_natural/LGPDAlivio";

import { useTracking } from "@/app/hooks/useTracking";

// ── Configuração do produto ──────────────────────────────────
const PRODUCT_NAME = "Alívio Natural";
const PRODUCT_ID = "alivio-natural";
const PRODUCT_PRICE = 27.0;

const HOTMART_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_HOTMART_ALIVIO_NATURAL_URL ||
  "https://pay.hotmart.com/G104654378V?off=7c84p65k&checkoutMode=10";

// ── UTM propagation ──────────────────────────────────────────
function buildCheckoutUrl(baseUrl: string): string {
  if (typeof window === "undefined") return baseUrl;

  const currentParams = new URLSearchParams(window.location.search);
  const url = new URL(baseUrl);

  const trackingParams = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "src",
    "sck",
    "off",
    "ref",
  ];

  currentParams.forEach((value, key) => {
    if (trackingParams.includes(key) && !url.searchParams.has(key)) {
      url.searchParams.set(key, value);
    }
  });

  return url.toString();
}

// ── Componente principal ─────────────────────────────────────
export default function AlivioNaturalLandingPage() {
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

  // Redireciona para o checkout Hotmart com UTMs propagados
  const goToCheckout = () => {
    tracking?.trackInitiateCheckout?.(PRODUCT_NAME, PRODUCT_ID, PRODUCT_PRICE);
    window.location.href = buildCheckoutUrl(HOTMART_CHECKOUT_URL);
  };

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Seção 0 — Barra superior fixa */}
      <StickyBar onButtonClick={scrollToOffer} />

      {/* Seção 1 — Hero com VSL */}
      <Hero onButtonClick={goToCheckout} />

      {/* Seção 2 — Barra de credibilidade */}
      <CredibilityBar />

      {/* Seção 3 — Agitação do problema */}
      <ProblemSection />

      {/* Seção 4 — Dados epidemiológicos */}
      <DataSection />

      {/* Seção 5 — Ponte para a solução */}
      <BridgeSection onButtonClick={goToCheckout} />

      {/* Seção 6 — Autoridade do autor */}
      <AuthorSection />

      {/* Seção 7 — O que está dentro (accordion) */}
      <ContentDetails />

      {/* Seção 8 — Grid das 15 plantas */}
      <PlantsSection />

      {/* Seção 9 — 6 protocolos prontos */}
      <ProtocolsSection onButtonClick={goToCheckout} />

      {/* Seção 10 — 2 guias bônus */}
      <BonusSection />

      {/* Seção 11 — Para quem é / não é */}
      <TargetAudience />

      {/* Seção 12 — Comparativo de valor */}
      <ValueComparison onButtonClick={goToCheckout} />

      {/* Seção 13 — A oferta (com order bump) */}
      <OfferSection onButtonClick={goToCheckout} />

      {/* Seção 14 — Garantia */}
      <GuaranteeSection />

      {/* Seção 15 — FAQ */}
      <FAQSection />

      {/* Seção 16 — CTA final + nota do autor */}
      <FinalCTA onButtonClick={goToCheckout} />

      {/* Rodapé */}
      <FooterAlivio />

      {/* Floating CTA mobile */}
      <StickyCTAAlivio isVisible={showStickyCTA} onButtonClick={goToCheckout} />

      {/* LGPD */}
      <LGPDAlivio />
    </div>
  );
}
