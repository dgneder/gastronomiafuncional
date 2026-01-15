"use client";

import React, { useEffect, useState } from "react";

// Componentes base (já existentes)
import HeroOptimized from "@/app/components/sobremesas_premium/HeroOptimized";
import CTASectionOptimized from "@/app/components/sobremesas_premium/CTASectionOptimized";
import BenefitsCompact from "@/app/components/sobremesas_premium/BenefitsCompact";
import TestimonialsCarousel from "@/app/components/sobremesas_premium/TestimonialsCarousel";
import FAQOptimized from "@/app/components/sobremesas_premium/FAQOptimized";
import FinalCTAOptimized from "@/app/components/sobremesas_premium/FinalCTAOptimized";
import GuaranteeCompact from "@/app/components/sobremesas_premium/GuaranteeCompact";
import StickyCTA from "@/app/components/sobremesas_premium/StickyCTA";
import FooterSimple from "@/app/components/sobremesas_premium/FooterSimple";
import LGPD from "@/app/components/sobremesas_premium/LGPD";

// NOVOS componentes
import MicroSocialProof from "@/app/components/sobremesas_premium/MicroSocialProof";
import FoodGallery from "@/app/components/sobremesas_premium/FoodGallery";
import VideoWall from "@/app/components/sobremesas_premium/VideoWall";
import IncludedSection from "@/app/components/sobremesas_premium/IncludedSection";
import ExitIntentBonusPopup from "@/app/components/sobremesas_premium/ExitIntentBonusPopup";

import { useTracking } from "@/app/hooks/useTracking";

const MEMBERKIT_URL = "https://gastronomia-funcional.memberkit.com.br/";

const YAMPI_CHECKOUT_BASE_URL =
  process.env.NEXT_PUBLIC_YAMPI_CHECKOUT_URL ||
  "https://seguro.gastronomiafuncional.online/r/5Z58H25DEY";

function buildCheckoutUrl(baseUrl: string): string {
  if (typeof window === "undefined") return baseUrl;

  const currentParams = new URLSearchParams(window.location.search);
  const url = new URL(baseUrl);

  currentParams.forEach((value, key) => {
    if (!url.searchParams.has(key)) url.searchParams.set(key, value);
  });

  return url.toString();
}

export default function SobremesasPremiumLandingPage() {
  const tracking = useTracking() as {
    trackViewContent?: (name: string, id: string, value: number) => void;
    trackInitiateCheckout?: (name: string, id: string, value: number) => void;
    trackLead?: (name: string, id: string, value: number) => void;
  };

  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    tracking?.trackViewContent?.(
      "Guia de Sobremesas Funcionais - Premium",
      "guia-sobremesas-premium",
      37.0
    );
  }, [tracking]);

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

  const handleLoginClick = () => {
    window.location.href = MEMBERKIT_URL;
  };

  const scrollToCTA = () => {
    const el = document.getElementById("cta");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goToCheckout = () => {
    tracking?.trackInitiateCheckout?.(
      "Guia de Sobremesas Funcionais - Premium",
      "guia-sobremesas-premium",
      37.0
    );
    window.location.href = buildCheckoutUrl(YAMPI_CHECKOUT_BASE_URL);
  };

  // Exit popup: “bônus válido” (sem WhatsApp/manual)
  const onAcceptBonus = () => {
    tracking?.trackLead?.("Bônus Exit Popup", "exit-bonus", 0);
    scrollToCTA();
  };

  // ✅ Copy mais funcional (sem “público frio”, sem “porn food”)
  const galleryItems = [
    {
      src: "/sobremesas/sobremesa-relax.png",
      alt: "Sobremesas funcionais irresistíveis",
      label: "Sabor + saúde",
      meta: "textura • brilho • funcional",
    },
    {
      src: "/sobremesas/sobremesa-imunidade.png",
      alt: "Sobremesa cremosa funcional",
      label: "Cremosa e equilibrada",
      meta: "sem açúcar refinado",
    },
    {
      src: "/sobremesas/sobremesa-pele-intestino.png",
      alt: "Sobremesa com camadas",
      label: "Camadas perfeitas",
      meta: "rápida e fácil",
    },
    {
      src: "/sobremesas/sobremesa-familia-02.png",
      alt: "Sobremesa com calda",
      label: "Doce sem culpa",
      meta: "opções de menor carga glicêmica*",
    },
    {
      src: "/sobremesas/sobremesa-energia-02.png",
      alt: "Sobremesa funcional sofisticada",
      label: "Cara de confeitaria",
      meta: "feito em casa",
    },
  ];

  // ✅ Copy mais funcional (sem “visual que vende”, etc.)
  const videos = [
    {
      mp4: "/videos/sobremesas-video-01-opt.mp4",
      webm: "/videos/sobremesas-video-01-opt.webm",
      poster: "/imagens/sobremesas-poster.jpg",
      title: "Cremosa e deliciosa",
      subtitle: "versão funcional",
    },
    {
      mp4: "/videos/sobremesas-video-02-opt.mp4",
      webm: "/videos/sobremesas-video-02-opt.webm",
      poster: "/imagens/sobremesas-poster-02.jpg",
      title: "Camadas perfeitas",
      subtitle: "rápida de fazer",
    },
    {
      mp4: "/videos/sobremesas-video-03-opt.mp4",
      webm: "/videos/sobremesas-video-03-opt.webm",
      poster: "/imagens/sobremesas-poster-03.jpg",
      title: "Calda e corte",
      subtitle: "equilíbrio e prazer",
    },
    {
      mp4: "/videos/sobremesas-video-04-opt.mp4",
      webm: "/videos/sobremesas-video-04-opt.webm",
      poster: "/imagens/sobremesas-poster-01.jpg",
      title: "Finalização linda",
      subtitle: "cara de confeitaria",
    },
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Exit popup (tempo + exit intent + voltar ao topo) */}
      <ExitIntentBonusPopup
        delayMs={55000}
        topReturnThresholdPx={260}
        onAccept={onAcceptBonus}
        onGoToCheckout={goToCheckout}
        bonusLabel="BÔNUS VÁLIDO HOJE"
        bonusText="Pack extra + checklist + cardápio 7 dias (acesso imediato)"
      />

      {/* HERO (CTA acima da dobra mobile) */}
      <HeroOptimized
        onButtonClick={goToCheckout}
        onLoginClick={handleLoginClick}
      />

      {/* PROVA RÁPIDA (sem “ao vivo” fake) */}
      <MicroSocialProof />

      {/* GALERIA (agora com copy mais funcional) */}
      <FoodGallery
        title="Antes de ler qualquer coisa… olha isso 😅"
        subtitle="Sobremesas lindas e gostosas — com ingredientes saudáveis e sem açúcar refinado."
        items={galleryItems}
      />

      <VideoWall
        title="Veja como ficam as sobremesas na prática"
        subtitle="Textura, camadas e finalização — todas saudáveis e funcionais."
        videos={videos}
      />

      {/* O QUE VEM + ACESSO */}
      <IncludedSection
        onButtonClick={goToCheckout}
        price="R$37"
        highlight="+150 receitas ilustradas"
        smallNote="PDF pra ver na área de membros + download • acesso imediato • garantia 7 dias"
      />

      {/* CTA principal */}
      <CTASectionOptimized onButtonClick={goToCheckout} />

      {/* Benefícios funcionais */}
      <BenefitsCompact />

      {/* Prova social */}
      <TestimonialsCarousel onButtonClick={scrollToCTA} />

      {/* Objeções */}
      <FAQOptimized />

      {/* CTA final + garantia */}
      <FinalCTAOptimized onButtonClick={goToCheckout} />
      <GuaranteeCompact />

      <FooterSimple />

      {/* Floating */}
      <StickyCTA isVisible={showStickyCTA} onButtonClick={goToCheckout} />
      <LGPD />
    </div>
  );
}
