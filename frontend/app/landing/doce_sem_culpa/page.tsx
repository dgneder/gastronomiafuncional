"use client";

/**
 * DOCE SEM CULPA — Landing Page v5
 * Rota: app/landing/doce_sem_culpa/page.tsx
 *
 * 25 seções · 537+ receitas · R$47
 * Pilares científicos no Hero · 4 VideoSections · VideoWall · FoodGallery
 */

import React, { useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { useTracking } from "@/app/hooks/useTracking";

// ── Above the fold (eager) ──
import LGPD from "@/app/components/doce_sem_culpa/LGPD";
import FloatingNavBar from "@/app/components/doce_sem_culpa/FloatingNavBar";
import LaunchBanner from "@/app/components/doce_sem_culpa/LaunchBanner";
import Hero from "@/app/components/doce_sem_culpa/Hero";

// ── Below the fold (lazy) ──
const PainSection = dynamic(() => import("@/app/components/doce_sem_culpa/PainSection"));
const ScienceTransition = dynamic(() => import("@/app/components/doce_sem_culpa/ScienceTransition"));
const FoodGallery = dynamic(() => import("@/app/components/doce_sem_culpa/FoodGallery"));
const RecipeShowcase = dynamic(() => import("@/app/components/doce_sem_culpa/RecipeShowcase"));
const RecipeTemplate = dynamic(() => import("@/app/components/doce_sem_culpa/RecipeTemplate"));
const CourseContent = dynamic(() => import("@/app/components/doce_sem_culpa/CourseContent"));
const TagsSystem = dynamic(() => import("@/app/components/doce_sem_culpa/TagsSystem"));
const BonusArchives = dynamic(() => import("@/app/components/doce_sem_culpa/BonusArchives"));
const AuthoritySection = dynamic(() => import("@/app/components/doce_sem_culpa/AuthoritySection"));
const TransformationSection = dynamic(() => import("@/app/components/doce_sem_culpa/TransformationSection"));
const DiffTable = dynamic(() => import("@/app/components/doce_sem_culpa/DiffTable"));
const BusinessSection = dynamic(() => import("@/app/components/doce_sem_culpa/BusinessSection"));
const CTASection = dynamic(() => import("@/app/components/doce_sem_culpa/CTASection"));
const BonusSection = dynamic(() => import("@/app/components/doce_sem_culpa/BonusSection"));
const SocialProofSection = dynamic(() => import("@/app/components/doce_sem_culpa/SocialProofSection"));
const FAQ = dynamic(() => import("@/app/components/doce_sem_culpa/FAQ"));
const Guarantee = dynamic(() => import("@/app/components/doce_sem_culpa/Guarantee"));
const FinalCTA = dynamic(() => import("@/app/components/doce_sem_culpa/FinalCTA"));
const Footer = dynamic(() => import("@/app/components/doce_sem_culpa/Footer"));

// ── Video components (ssr: false) ──
const VideoSection = dynamic(() => import("@/app/components/doce_sem_culpa/VideoSection"), { ssr: false });
const VideoWall = dynamic(() => import("@/app/components/doce_sem_culpa/VideoWall"), { ssr: false });

// ── Config ──
export const DSC = {
  price: 47,
  oldPrice: 97,
  ob1Price: 14.9,
  ob2Price: 14.9,
  totalRecipes: 537,
  productName: "Doce Sem Culpa — Coleção Completa",
  productId: "doce-sem-culpa",
};

const HOTMART_CHECKOUT_URL = process.env.NEXT_PUBLIC_HOTMART_DOCE_SEM_CULPA_URL || "https://pay.hotmart.com/SEU_LINK_AQUI?checkoutMode=10";

// ── MiniVideoStrip (inline — used 4× in page flow) ──
interface MiniVideoStripProps {
  alt: string;
  caption: string;
  dark?: boolean;
}

function MiniVideoStrip({ alt, caption, dark = false }: MiniVideoStripProps) {
  return (
    <section className={`py-5 ${dark ? "bg-gray-950" : "bg-stone-100"}`}>
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div
          className={`relative overflow-hidden rounded-2xl border ${
            dark ? "border-stone-700 bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900" : "border-rose-100 bg-gradient-to-r from-rose-50 via-white to-rose-50"
          }`}
          style={{ aspectRatio: "21/5" }}
        >
          {/* Substituir por: <video src="/sobremesas/videos/xxx.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" /> */}
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="text-center">
              <p className={`text-xs hidden sm:block ${dark ? "text-stone-500" : "text-stone-400"}`}>{alt}</p>
              <p
                className={`text-sm font-bold mt-1 ${dark ? "text-amber-400" : "text-gray-800"}`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {caption}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Page Component ──
const DoceSemCulpaPage: React.FC = () => {
  const { trackViewContent, trackAddToCart, trackInitiateCheckout } = useTracking() as {
    trackViewContent?: (name: string, id: string, value: number) => void;
    trackAddToCart?: (name: string, id: string, value: number) => void;
    trackInitiateCheckout?: (name: string, id: string, value: number) => void;
  };

  useEffect(() => {
    trackViewContent?.(DSC.productName, DSC.productId, DSC.price);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleButtonClick = useCallback(() => {
    trackAddToCart?.(DSC.productName, DSC.productId, DSC.price);
    trackInitiateCheckout?.(DSC.productName, DSC.productId, DSC.price);
    window.location.href = HOTMART_CHECKOUT_URL;
  }, [trackAddToCart, trackInitiateCheckout]);

  const handleLoginClick = useCallback(() => {
    window.location.href = "https://gastronomia-funcional.memberkit.com.br/";
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Elementos fixos */}
      <FloatingNavBar onLoginClick={handleLoginClick} handleButtonClick={handleButtonClick} />
      <LGPD />

      {/* Topo */}
      <LaunchBanner />
      <Hero onButtonClick={handleButtonClick} />

      {/* Dor + ciência */}
      <PainSection />
      <ScienceTransition />

      <MiniVideoStrip
        alt="Vídeo 5s: colher afundando em mousse cremosa, textura aerada, câmera lenta"
        caption="Mousse de Chocolate 70% · IG 25 · 15 minutos"
      />

      {/* Prova visual 1 */}
      <VideoSection
        variant="split-right"
        tag="Receita do Volume 2"
        headline="Mousse de chocolate com IG 25. Pronta em 15 minutos."
        subtext="Cacau 70%, aquafaba, açúcar de coco. 5 ingredientes. Ninguém percebe que é funcional. Todo mundo pede a receita."
        videoSrc="/sobremesas/videos/video_01.webm"
        poster="/sobremesas/gallery/mousse.jpg"
        caption="Mousse de Chocolate 70% · SG · SL · SA · IG 25"
        stat={{ value: "15 min", label: "do zero à sobremesa" }}
        ctaLabel="Quero o sistema completo por R$47"
        onCtaClick={handleButtonClick}
      />

      <FoodGallery />
      <VideoWall
        title="Veja como ficam as sobremesas na prática"
        subtitle="Textura, cremosidade e acabamento — todas funcionais e com ciência."
      />

      <MiniVideoStrip
        alt="Vídeo 5s: mãos enrolando brigadeiro, textura lisa brilhante"
        caption="Brigadeiro Funcional · Custo R$0,80 · Margem 84%"
        dark
      />

      {/* Prova visual 2 + autoridade */}
      <VideoSection
        variant="split-left"
        tag="Ciência Aplicada · Volume 2"
        headline="Cremosidade sem lactose. A ciência explica por quê."
        subtext="A gordura do caju e do abacate forma uma rede emulsificada que imita a textura do creme de leite. Por isso nossas receitas funcionam — e as genéricas ficam aguadas."
        videoSrc="/sobremesas/videos/video_02.webm"
        poster="/sobremesas/gallery/cheesecake.jpg"
        caption="Proteínas + gorduras funcionais + temperatura = textura perfeita"
      />

      <AuthoritySection />
      <TransformationSection onButtonClick={handleButtonClick} />

      {/* Produto */}
      <RecipeShowcase />
      <RecipeTemplate />

      <MiniVideoStrip
        alt="Vídeo 5s: picolé arco-íris desmoldado — 3 camadas coloridas"
        caption="Picolé Arco-Íris · 3 Frutas · Zero Adoçante"
      />

      <CourseContent />
      <TagsSystem />
      <BonusArchives />

      {/* Prova visual 3 — cinematic trufas */}
      <VideoSection
        variant="cinematic"
        tag="Volume 3 — Trufas & Docinhos"
        headline="Da trufa rápida ao bombom artesanal de 3 camadas."
        subtext="O mesmo volume que ensina trufa em 20 minutos também te leva ao nível profissional. Você escolhe o ritmo. A ciência é a mesma."
        videoSrc="/sobremesas/videos/video_03.webm"
        poster="/sobremesas/gallery/trufa.jpg"
        caption="Trufa Belga Funcional — Cacau 70% · LC · SG · Para Vender"
        ctaLabel="Quero o sistema completo por R$47"
        onCtaClick={handleButtonClick}
      />

      {/* Diferenciação + negócio */}
      <DiffTable />
      <BusinessSection />

      <MiniVideoStrip
        alt="Vídeo 5s: nice cream no processador — bananas → creme cacau"
        caption="Nice Cream · 2 Ingredientes · 5 Minutos"
        dark
      />

      {/* Oferta */}
      <CTASection onButtonClick={handleButtonClick} />
      <BonusSection />
      <SocialProofSection />

      {/* Prova visual 4 — emocional */}
      <VideoSection
        variant="highlight"
        tag="O resultado final"
        headline="A mesa de sobremesas que você vai ter."
        subtext="Não é só receita. É autonomia, prazer e saúde coexistindo. Sobre servir para a família sem medo."
        videoSrc="/sobremesas/videos/video_04.webm"
        poster="/sobremesas/gallery/mesa.jpg"
        caption="Mesa funcional completa — mousse, trufas, bolo, sorvete"
        ctaLabel="Quero essa mesa por R$47"
        onCtaClick={handleButtonClick}
      />

      {/* Fechamento */}
      <FAQ />
      <Guarantee />
      <FinalCTA onButtonClick={handleButtonClick} />
      <Footer />
    </div>
  );
};

export default DoceSemCulpaPage;
