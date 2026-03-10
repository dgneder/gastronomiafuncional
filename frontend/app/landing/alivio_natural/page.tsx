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
const PRODUCT_PRICE = 47.0;

const HOTMART_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_HOTMART_ALIVIO_NATURAL_URL ||
  "https://pay.hotmart.com/G104654378V?off=5ocyj5jr&checkoutMode=10";

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

  const scrollToOffer = () => {
    const el = document.getElementById("oferta");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goToCheckout = () => {
    tracking?.trackInitiateCheckout?.(PRODUCT_NAME, PRODUCT_ID, PRODUCT_PRICE);
    window.location.href = buildCheckoutUrl(HOTMART_CHECKOUT_URL);
  };

  return (
    <div className="bg-white overflow-x-hidden">
      <StickyBar onButtonClick={scrollToOffer} />
      <Hero onButtonClick={goToCheckout} />
      <CredibilityBar />
      <ProblemSection />
      <DataSection />
      <BridgeSection onButtonClick={goToCheckout} />
      <AuthorSection />
      <ContentDetails />
      <PlantsSection />
      <ProtocolsSection onButtonClick={goToCheckout} />
      <BonusSection />
      <TargetAudience />
      <ValueComparison onButtonClick={goToCheckout} />
      <OfferSection onButtonClick={goToCheckout} />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTA onButtonClick={goToCheckout} />
      <FooterAlivio />
      <StickyCTAAlivio isVisible={showStickyCTA} onButtonClick={goToCheckout} />
      <LGPDAlivio />
    </div>
  );
}