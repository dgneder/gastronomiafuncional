"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import LGPD from "@/app/components/trufas/LGPD";
import FloatingNavBar from "@/app/components/trufas/FloatingNavBar";
import FunctionalTags from "@/app/components/trufas/FunctionalTags";
import { useTracking } from "@/app/hooks/useTracking";

const Hero = dynamic(() => import("@/app/components/trufas/Hero"));
const Benefits = dynamic(() => import("@/app/components/trufas/Benefits"));
const CourseContent = dynamic(() => import("@/app/components/trufas/CourseContent"));
const Testimonials = dynamic(() => import("@/app/components/trufas/Testimonials"));
const Guarantee = dynamic(() => import("@/app/components/trufas/Guarantee"));
const FAQ = dynamic(() => import("@/app/components/trufas/FAQ"));
const FinalCTA = dynamic(() => import("@/app/components/trufas/FinalCTA"));
const Footer = dynamic(() => import("@/app/components/trufas/Footer"));
const TrendsSection = dynamic(() => import("@/app/components/trufas/TrendsSection"));
const TrufaBenefits = dynamic(() => import("@/app/components/trufas/TrufaBenefits"));
const CTASection = dynamic(() => import("@/app/components/trufas/CTASection"));
const SocialProofSection = dynamic(() => import("@/app/components/trufas/SocialProofSection"));
const VideoSectionOne = dynamic(() => import("@/app/components/trufas/VideoSectionOne"));
const VideoSectionTwo = dynamic(() => import("@/app/components/trufas/VideoSectionTwo"));
const VideoSectionThree = dynamic(() => import("@/app/components/trufas/VideoSectionThree"));
const VideoSectionFour = dynamic(() => import("@/app/components/trufas/VideoSectionFour"));

const TrufasPage: React.FC = () => {
  const { trackViewContent } = useTracking();

  useEffect(() => {
    trackViewContent(
      "Guia de Trufas e Docinhos Funcionais",
      "guia-trufas-funcionais",
      47.00
    );
  }, []);

  const handleButtonClick = () => {
    window.location.href = "/cadastro_trufas";
  };

  const handleLoginClick = () => {
    window.location.href = "https://seu-link-de-login.com";
  };

  return (
    <div>
      <FloatingNavBar
        onLoginClick={handleLoginClick}
        handleButtonClick={handleButtonClick}
        logoSrc=""
      />
      <LGPD />
      <Hero
        title="Trufas e Docinhos Funcionais: Sabor Gourmet com Benefícios Reais!"
        subtitle="100 receitas irresistíveis que unem chocolate, saúde e sofisticação — perfeitas para quem quer se cuidar sem abrir mão do prazer."
        buttonText="Quero Minhas Trufas Funcionais Agora!"
        onButtonClick={handleButtonClick}
      />
      <TrendsSection />
      <VideoSectionOne />
      <TrufaBenefits />
      <VideoSectionTwo />
      <Benefits />
      <FunctionalTags />
      <CTASection />
      <CourseContent />
      <VideoSectionThree />
      <SocialProofSection />
      <Testimonials />
      <FAQ />
      <FinalCTA
        buttonText="Quero Garantir Meu Acesso por R$47"
        onButtonClick={handleButtonClick}
      />
      <VideoSectionFour />
      <Guarantee />
      <Footer />
    </div>
  );
};

export default TrufasPage;