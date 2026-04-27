"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import LGPD from "@/app/components/doce_sem_culpa/LGPD";
import FloatingNavBar from "@/app/components/doce_sem_culpa/FloatingNavBar";
import { useTracking } from "@/app/hooks/useTracking";

const Hero                  = dynamic(() => import("@/app/components/doce_sem_culpa/Hero"));
const PleasureSection       = dynamic(() => import("@/app/components/doce_sem_culpa/PleasureSection"));
const PainSection           = dynamic(() => import("@/app/components/doce_sem_culpa/PainSection"));
const AuthoritySection      = dynamic(() => import("@/app/components/doce_sem_culpa/AuthoritySection"));
const TransformationSection = dynamic(() => import("@/app/components/doce_sem_culpa/TransformationSection"));
const RecipeShowcase        = dynamic(() => import("@/app/components/doce_sem_culpa/RecipeShowcase"));
const CTASection            = dynamic(() => import("@/app/components/doce_sem_culpa/CTASection"));
const CourseContent         = dynamic(() => import("@/app/components/doce_sem_culpa/CourseContent"));
const TagsSystem            = dynamic(() => import("@/app/components/doce_sem_culpa/TagsSystem"));
const TrendsSection         = dynamic(() => import("@/app/components/doce_sem_culpa/TrendsSection"));
const BonusSection          = dynamic(() => import("@/app/components/doce_sem_culpa/BonusSection"));
const SocialProofSection    = dynamic(() => import("@/app/components/doce_sem_culpa/SocialProofSection"));
const Testimonials          = dynamic(() => import("@/app/components/doce_sem_culpa/Testimonials"));
const FAQ                   = dynamic(() => import("@/app/components/doce_sem_culpa/FAQ"));
const Guarantee             = dynamic(() => import("@/app/components/doce_sem_culpa/Guarantee"));
const FinalCTA              = dynamic(() => import("@/app/components/doce_sem_culpa/FinalCTA"));
const Footer                = dynamic(() => import("@/app/components/doce_sem_culpa/Footer"));

const VideoSection = dynamic(() => import("@/app/components/doce_sem_culpa/VideoSection"), { ssr: false });
const FoodGallery  = dynamic(() => import("@/app/components/doce_sem_culpa/FoodGallery"),  { ssr: false });
const VideoWall    = dynamic(() => import("@/app/components/doce_sem_culpa/VideoWall"),    { ssr: false });

// CTA → página intermediária (captura lead → Sellflux → Hotmart R$67)
const CHECKOUT_URL = "/cadastro_doce_sem_culpa";

const DoceSemCulpaPage: React.FC = () => {
  const { trackViewContent, trackAddToCart } = useTracking();

  useEffect(() => {
    trackViewContent("Kit Doce Sem Culpa — Sobremesas Funcionais", "kit-doce-sem-culpa", 67.0);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleButtonClick = async () => {
    try {
      await trackAddToCart("Kit Doce Sem Culpa — Sobremesas Funcionais", "kit-doce-sem-culpa", 67.0);
    } catch {
      // Não bloqueia o redirect se o pixel falhar
    }
    window.location.href = CHECKOUT_URL;
  };

  const handleLoginClick = () => {
    window.location.href = "https://seu-link-de-login.com";
  };

  return (
    <div className="overflow-x-hidden">
      <FloatingNavBar onLoginClick={handleLoginClick} handleButtonClick={handleButtonClick} />
      <LGPD />

      <Hero onButtonClick={handleButtonClick} />

      <VideoSection
        variant="split-right"
        tag="Receita que abre o guia"
        headline="Mousse de chocolate 70% em 5 minutos. Sem açúcar. Com epicatequina real."
        subtext="A receita 001 do guia é a prova de que sobremesa funcional não é sobre abrir mão. É sobre escolher ingredientes que atuam no seu corpo enquanto satisfazem o paladar — e ter a ciência por trás de cada escolha."
        videoSrc="/doce-sem-culpa/videos/video_01.webm"
        poster="/doce-sem-culpa/gallery/mousse_chocolate.png"
        caption="Receita 001 — Mousse de Chocolate 70% com Aquafaba · SG · SL · DIA"
        stat={{ value: "5 min", label: "do zero à colher" }}
        ctaLabel="Quero fazer essa sobremesa hoje"
        onCtaClick={handleButtonClick}
      />

      <PleasureSection />
      <PainSection />
      <AuthoritySection />
      <TransformationSection onButtonClick={handleButtonClick} />

      <VideoSection
        variant="split-left"
        tag="Ciência dos Bioativos"
        headline="Por que a epicatequina do cacau ajuda o coração — e por que ela está na sua mousse."
        subtext="Cada receita foi formulada com um bioativo-chave calibrado. Não é 'sem açúcar' aleatório. É composto por composto, com referência científica. A indústria te vende promessa. Nós te damos mecanismo."
        videoSrc="/doce-sem-culpa/videos/video_02.webm"
        poster="/doce-sem-culpa/gallery/cacau_ciencia.png"
        caption="Cacau 70% + chocolate amargo + aquafaba = epicatequina biodisponível"
      />

      <RecipeShowcase />
      <FoodGallery />
      <CTASection onButtonClick={handleButtonClick} />
      <CourseContent />
      <TagsSystem />
      <TrendsSection />

      <VideoSection
        variant="cinematic"
        tag="Módulo Premium — Trufas & Docinhos"
        headline="Do brigadeiro funcional ao doce de leite keto."
        subtext="Das 252 receitas do ebook às 100 do Trufas & Docinhos, às 150+ diagramadas na plataforma. Uma biblioteca que você consulta pela vida inteira — organizada por objetivo de saúde, restrição alimentar e complexidade."
        videoSrc="/doce-sem-culpa/videos/video_10.webm"
        poster="/doce-sem-culpa/gallery/trufas.jpg"
        caption="Trufa de Colágeno com Frutas Vermelhas — Módulo 6 (Beleza) · Trufas & Docinhos"
        ctaLabel="Quero a biblioteca completa por R$67"
        onCtaClick={handleButtonClick}
      />

      <BonusSection />
      <SocialProofSection />
      <Testimonials />

      <VideoWall />

      <VideoSection
        variant="highlight"
        tag="A mesa que vai nascer"
        headline="Não é sobre sobremesa. É sobre você não abrir mão do prazer à mesa."
        subtext="A vida fica diferente quando doce vira aliado, não inimigo. Quando a família pode comer junta. Quando o diabético, a mãe, a pessoa em dieta, todos se sentam e dividem. É disso que o Kit trata."
        videoSrc="/doce-sem-culpa/videos/video_11.webm"
        poster="/doce-sem-culpa/gallery/mesa_completa.png"
        caption="Mesa funcional — mousse, trufas, flan, picolé. Tudo num kit só."
        ctaLabel="Quero essa mesa por R$67"
        onCtaClick={handleButtonClick}
      />

      <FAQ />
      <Guarantee />
      <FinalCTA onButtonClick={handleButtonClick} />
      <Footer />
    </div>
  );
};

export default DoceSemCulpaPage;
