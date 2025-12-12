"use client";

import React from "react";
import dynamic from "next/dynamic";

import LGPD from "@/app/components/sobremesas/LGPD";
import FloatingNavBar from "@/app/components/sobremesas/FloatingNavBar";
import FunctionalTags from "@/app/components/sobremesas/FunctionalTags";

// dynamic imports
const Hero = dynamic(() => import("@/app/components/sobremesas/Hero"));
const Benefits = dynamic(() => import("@/app/components/sobremesas/Benefits"));
const CourseContent = dynamic(() =>
  import("@/app/components/sobremesas/CourseContent")
);
const Testimonials = dynamic(() =>
  import("@/app/components/sobremesas/Testimonials")
);
const Guarantee = dynamic(() =>
  import("@/app/components/sobremesas/Guarantee")
);
const FAQ = dynamic(() => import("@/app/components/sobremesas/FAQ"));
const FinalCTA = dynamic(() =>
  import("@/app/components/sobremesas/FinalCTA")
);
const Footer = dynamic(() => import("@/app/components/sobremesas/Footer"));
const TrendsSection = dynamic(() =>
  import("@/app/components/sobremesas/TrendsSection")
);
const DessertBenefits = dynamic(() =>
  import("@/app/components/sobremesas/DessertBenefits")
);
const CTASection = dynamic(() =>
  import("@/app/components/sobremesas/CTASection")
);
const SocialProofSection = dynamic(() =>
  import("@/app/components/sobremesas/SocialProofSection")
);
const VideoSectionOne = dynamic(() =>
  import("@/app/components/sobremesas/VideoSectionOne")
);
const VideoSectionTwo = dynamic(() =>
  import("@/app/components/sobremesas/VideoSectionTwo")
);
const VideoSectionThree = dynamic(() =>
  import("@/app/components/sobremesas/VideoSectionThree")
);
const VideoSectionFour = dynamic(() =>
  import("@/app/components/sobremesas/VideoSectionFour")
);

const SobremesasPage: React.FC = () => {
  const handleButtonClick = () => {
    window.location.href = "/cadastro_sobremesas";
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
        title="Descubra Sobremesas Funcionais que Nutrem, Encantam e Surpreendem!"
        subtitle="Aprenda receitas práticas, deliciosas e saudáveis que cuidam do seu corpo, mente e paladar — perfeitas para o dia a dia sem abrir mão do sabor."
        buttonText="Quero Minhas Sobremesas Saudáveis Agora!"
        onButtonClick={handleButtonClick}
      />

      <TrendsSection />
      <VideoSectionOne />
      <DessertBenefits />
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
        buttonText="Quero Garantir Meu Acesso por R$37"
        onButtonClick={handleButtonClick}
      />
      <VideoSectionFour />
      <Guarantee />
      <Footer />
    </div>
  );
};

export default SobremesasPage;
