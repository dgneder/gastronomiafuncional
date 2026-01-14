"use client";

import React, { useEffect } from "react";

import FloatingNavBar from "@/app/components/sobremesas_premium/FloatingNavBar";
import Hero from "@/app/components/sobremesas_premium/Hero";

import TrendsSection from "@/app/components/sobremesas_premium/TrendsSection";
import FunctionalTags from "@/app/components/sobremesas_premium/FunctionalTags";

import VideoSectionOne from "@/app/components/sobremesas_premium/VideoSectionOne";
import VideoSectionTwo from "@/app/components/sobremesas_premium/VideoSectionTwo";
import VideoSectionThree from "@/app/components/sobremesas_premium/VideoSectionThree";
import VideoSectionFour from "@/app/components/sobremesas_premium/VideoSectionFour";

import DessertBenefits from "@/app/components/sobremesas_premium/DessertBenefits";
import SocialProofSection from "@/app/components/sobremesas_premium/SocialProofSection";

import CourseContent from "@/app/components/sobremesas_premium/CourseContent";
import Benefits from "@/app/components/sobremesas_premium/Benefits";
import Guarantee from "@/app/components/sobremesas_premium/Guarantee";
import FAQ from "@/app/components/sobremesas_premium/FAQ";
import Testimonials from "@/app/components/sobremesas_premium/Testimonials";

import FinalCTA from "@/app/components/sobremesas_premium/FinalCTA";
import CTASection from "@/app/components/sobremesas_premium/CTASection";

import Footer from "@/app/components/sobremesas_premium/Footer";
import LGPD from "@/app/components/sobremesas_premium/LGPD";

import { useTracking } from "@/app/hooks/useTracking";

const MEMBERKIT_URL = "https://gastronomia-funcional.memberkit.com.br/";

const YAMPI_CHECKOUT_BASE_URL =
  process.env.NEXT_PUBLIC_YAMPI_CHECKOUT_URL ||
  "https://seguro.gastronomiafuncional.online/r/5Z58H25DEY";

function buildCheckoutUrl(baseUrl: string) {
  const currentParams = new URLSearchParams(window.location.search);
  const url = new URL(baseUrl);

  currentParams.forEach((value, key) => {
    if (!url.searchParams.has(key)) url.searchParams.set(key, value);
  });

  return url.toString();
}

export default function SobremesasPremiumLandingPage() {
  const tracking = useTracking() as any;

  useEffect(() => {
    tracking?.trackViewContent?.(
      "Guia de Sobremesas Funcionais - Premium",
      "guia-sobremesas-premium",
      37.0
    );
  }, [tracking]);

  const handleLoginClick = () => {
    window.location.href = MEMBERKIT_URL;
  };

  // 🔗 Todos os CTAs espalhados na landing chamam isso (ancoragem)
  const scrollToCTA = () => {
    const el = document.getElementById("cta");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // 🛒 Só o botão do CTASection chama isso (checkout)
  const goToCheckout = () => {
    tracking?.trackInitiateCheckout?.(
      "Guia de Sobremesas Funcionais - Premium",
      "guia-sobremesas-premium",
      37.0
    );
    window.location.href = buildCheckoutUrl(YAMPI_CHECKOUT_BASE_URL);
  };

  return (
    <div className="bg-white">
      <FloatingNavBar
        logoSrc=""
        onLoginClick={handleLoginClick}
        handleButtonClick={scrollToCTA}
      />

      <main>
        {/* 1) HERO */}
        <Hero
          title="Guia de Sobremesas Funcionais"
          subtitle="Sobremesas que nutrem e encantam — sem abrir mão do sabor."
          buttonText="Quero Começar Agora"
          onButtonClick={scrollToCTA}
        />

        {/* 2) CONTEXTO / AQUECIMENTO */}
        <TrendsSection />
        <FunctionalTags />

        {/* 3) VÍDEOS */}
        <VideoSectionOne />
        <VideoSectionTwo />
        <VideoSectionThree />
        <VideoSectionFour />

        {/* 4) BENEFÍCIOS + PROVA SOCIAL */}
        <DessertBenefits />
        <SocialProofSection onButtonClick={scrollToCTA} />

        {/* 5) CONTEÚDO / GARANTIA / FAQ */}
        <CourseContent />
        <Benefits />
        <Guarantee />
        <FAQ />

        {/* 6) DEPOIMENTOS (✅ agora com onButtonClick) */}
        <Testimonials onButtonClick={scrollToCTA} />

        {/* 7) CTA FINAL (ancora) */}
        <FinalCTA
          buttonText="Quero Garantir com Desconto"
          onButtonClick={scrollToCTA}
        />

        {/* 8) SEÇÃO #CTA (checkout Yampi) */}
        <CTASection onButtonClick={goToCheckout} />

        {/* 9) RODAPÉ */}
        <Footer />
      </main>

      <LGPD />
    </div>
  );
}
