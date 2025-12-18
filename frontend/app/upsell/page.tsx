"use client";
import React, { useEffect } from "react";
import { useTracking } from "@/app/hooks/useTracking";

// Componentes Exclusivos do Upsell
import UpsellHero from "@/app/components/sobremesas/UpsellHero";
import SimpleFooter from "@/app/components/sobremesas/SimpleFooter";
import HotmartUpsellWidget from "@/app/components/HotmartUpsellWidget";

// Componentes Reaproveitados (Conteúdo Rico)
import Benefits from "@/app/components/sobremesas/Benefits";
import CourseContent from "@/app/components/sobremesas/CourseContent";
import Testimonials from "@/app/components/sobremesas/Testimonials";
import Guarantee from "@/app/components/sobremesas/Guarantee";
import DessertBenefits from "@/app/components/sobremesas/DessertBenefits";
import VideoSectionTwo from "@/app/components/sobremesas/VideoSectionTwo";
import SocialProofSection from "@/app/components/sobremesas/SocialProofSection";

const UpsellPage: React.FC = () => {
  const { trackViewContent } = useTracking();

  useEffect(() => {
    // Rastreia que a pessoa viu a oferta de Upsell
    trackViewContent(
      "Oferta Upsell - Sobremesas",
      "upsell-sobremesas-funcionais",
      37.00
    );
  }, []);

  return (
    <div className="bg-white">
      {/* 1. Hero Focado na Oferta (Sem Menu) */}
      <UpsellHero />

      {/* 2. Conteúdo Visual (Vídeo + Benefícios) */}
      <VideoSectionTwo />
      <DessertBenefits />

      {/* 3. Reforço de Autoridade (Opcional, mas bom) */}
      <SocialProofSection />

      {/* 4. O que ela vai levar (Conteúdo) */}
      <CourseContent />

      {/* 5. Prova Social */}
      <Testimonials />

      {/* 6. Garantia */}
      <Guarantee />

      {/* 7. CTA Final (Widget de 1 Clique Repetido) */}
      <section className="py-16 bg-pink-50 text-center px-4">
        <h2 className="text-2xl font-bold text-pink-700 mb-4">
          Última chance de adicionar ao seu pedido
        </h2>
        <p className="text-gray-600 mb-6">
          Se você fechar essa página, perderá o desconto de R$ 60,00 para sempre.
        </p>
        <HotmartUpsellWidget />
      </section>

      {/* 8. Rodapé Limpo (Sem links de saída) */}
      <SimpleFooter />
    </div>
  );
};

export default UpsellPage;