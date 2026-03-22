"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import LGPD from "@/app/components/panificacao/LGPD";
import FloatingNavBar from "@/app/components/panificacao/FloatingNavBar";
import { useTracking } from "@/app/hooks/useTracking";

const Hero = dynamic(() => import("@/app/components/panificacao/Hero"));
const PainSection = dynamic(() => import("@/app/components/panificacao/PainSection"));
const AuthoritySection = dynamic(() => import("@/app/components/panificacao/AuthoritySection"));
const TransformationSection = dynamic(() => import("@/app/components/panificacao/TransformationSection"));
const RecipeShowcase = dynamic(() => import("@/app/components/panificacao/RecipeShowcase"));
const CourseContent = dynamic(() => import("@/app/components/panificacao/CourseContent"));
const TagsSystem = dynamic(() => import("@/app/components/panificacao/TagsSystem"));
const BonusSection = dynamic(() => import("@/app/components/panificacao/BonusSection"));
const SocialProofSection = dynamic(() => import("@/app/components/panificacao/SocialProofSection"));
const CTASection = dynamic(() => import("@/app/components/panificacao/CTASection"));
const FAQ = dynamic(() => import("@/app/components/panificacao/FAQ"));
const Guarantee = dynamic(() => import("@/app/components/panificacao/Guarantee"));
const FinalCTA = dynamic(() => import("@/app/components/panificacao/FinalCTA"));
const Footer = dynamic(() => import("@/app/components/panificacao/Footer"));

const PanificacaoPage: React.FC = () => {
  const { trackViewContent } = useTracking();

  useEffect(() => {
    trackViewContent(
      "Pão Sem Culpa — Panificação Funcional",
      "pao-sem-culpa",
      37.0
    );
  });

  const handleButtonClick = () => {
    window.location.href = "/cadastro_panificacao";
  };

  const handleLoginClick = () => {
    window.location.href = "https://seu-link-de-login.com";
  };

  return (
    <div className="overflow-x-hidden">
      <FloatingNavBar
        onLoginClick={handleLoginClick}
        handleButtonClick={handleButtonClick}
      />
      <LGPD />
      <Hero onButtonClick={handleButtonClick} />
      <PainSection />
      <AuthoritySection />
      <TransformationSection onButtonClick={handleButtonClick} />
      <RecipeShowcase />
      <CTASection onButtonClick={handleButtonClick} />
      <CourseContent />
      <TagsSystem />
      <BonusSection />
      <SocialProofSection />
      <FAQ />
      <Guarantee />
      <FinalCTA onButtonClick={handleButtonClick} />
      <Footer />
    </div>
  );
};

export default PanificacaoPage;
