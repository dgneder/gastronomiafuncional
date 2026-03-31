"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import LGPD from "@/app/components/panificacao/LGPD";
import FloatingNavBar from "@/app/components/panificacao/FloatingNavBar";
import CountdownBanner from "@/app/components/panificacao/CountdownBanner";
import { useTracking } from "@/app/hooks/useTracking";

const Hero               = dynamic(() => import("@/app/components/panificacao/Hero"));
const PainSection        = dynamic(() => import("@/app/components/panificacao/PainSection"));
const AuthoritySection   = dynamic(() => import("@/app/components/panificacao/AuthoritySection"));
const TransformationSection = dynamic(() => import("@/app/components/panificacao/TransformationSection"));
const RecipeShowcase     = dynamic(() => import("@/app/components/panificacao/RecipeShowcase"));
const CTASection         = dynamic(() => import("@/app/components/panificacao/CTASection"));
const CourseContent      = dynamic(() => import("@/app/components/panificacao/CourseContent"));
const TagsSystem         = dynamic(() => import("@/app/components/panificacao/TagsSystem"));
const BonusSection       = dynamic(() => import("@/app/components/panificacao/BonusSection"));
const SocialProofSection = dynamic(() => import("@/app/components/panificacao/SocialProofSection"));
const FAQ                = dynamic(() => import("@/app/components/panificacao/FAQ"));
const Guarantee          = dynamic(() => import("@/app/components/panificacao/Guarantee"));
const FinalCTA           = dynamic(() => import("@/app/components/panificacao/FinalCTA"));
const Footer             = dynamic(() => import("@/app/components/panificacao/Footer"));

const VideoSection = dynamic(() => import("@/app/components/panificacao/VideoSection"), { ssr: false });
const FoodGallery  = dynamic(() => import("@/app/components/panificacao/FoodGallery"),  { ssr: false });

const PanificacaoPage: React.FC = () => {
  const { trackViewContent } = useTracking();

  useEffect(() => {
    trackViewContent("Pão Sem Culpa — Panificação Funcional", "pao-sem-culpa", 47.0);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleButtonClick = () => { window.location.href = "/cadastro_panificacao"; };
  const handleLoginClick  = () => { window.location.href = "https://seu-link-de-login.com"; };

  return (
    <div className="overflow-x-hidden">
      <FloatingNavBar onLoginClick={handleLoginClick} handleButtonClick={handleButtonClick} />
      <CountdownBanner />
      <LGPD />

      <Hero onButtonClick={handleButtonClick} />

      {/* VIDEO 1 — prova visual imediata logo após o Hero */}
      <VideoSection
        variant="split-right"
        tag="Receita 01 do guia"
        headline="Pronto em 10 minutos. Na sua frigideira. Agora."
        subtext="O pão de frigideira é a porta de entrada do guia. Sem fermentação, sem forno, sem equipamento especial. Só farinha funcional, psyllium e 10 minutos de vida real."
        videoSrc="/panificacao/videos/video_01.webm"
        poster="/panificacao/gallery/video_01.png"
        caption="Receita 01 — Pão de Frigideira Clássico · SG · DIA · RENAL"
        stat={{ value: "10 min", label: "do zero ao pão" }}
        ctaLabel="Quero fazer esse pão hoje"
        onCtaClick={handleButtonClick}
      />

      <PainSection />
      <AuthoritySection />
      <TransformationSection onButtonClick={handleButtonClick} />

      {/* VIDEO 2 — quebra objeção de complexidade após o before/after */}
      <VideoSection
        variant="split-left"
        tag="Bioquímica dos Alimentos Aplicada"
        headline="Elasticidade sem glúten. A ciência explica por quê."
        subtext="O psyllium forma uma rede de fibras solúveis que imita exatamente o que o glúten faz. É por isso que nossas receitas funcionam — e por isso que as da internet resultam em tijolo."
        videoSrc="/panificacao/videos/video_02.webm"
        poster="/panificacao/gallery/forma.jpg"
        caption="Psyllium + farinha de arroz + hidratação correta = massa elástica sem glúten"
      />

      <RecipeShowcase />
      <FoodGallery />
      

      {/* CTA principal — visitante já viu tudo antes de decidir */}
      <CTASection onButtonClick={handleButtonClick} />

      <CourseContent />
      <TagsSystem />

      {/* VIDEO 3 — eleva percepção de valor antes dos bônus, variante imersiva */}
      <VideoSection
        variant="cinematic"
        tag="Módulo C — Pães Artesanais"
        headline="Do pão rápido ao sourdough de 48 horas."
        subtext="O mesmo guia que te ensina a fazer pão em 10 minutos também te leva ao nível de padeiro artesanal. Você escolhe o ritmo. A ciência é a mesma."
        videoSrc="/panificacao/videos/video_10.webm"
        poster="/panificacao/gallery/sourdough.jpg"
        caption="Sourdough funcional — Receita 12 · Fermentação natural 48h · SG · LC"
        ctaLabel="Quero os dois extremos por R$47"
        onCtaClick={handleButtonClick}
      />

      <BonusSection />
      <SocialProofSection />

      {/* VIDEO 4 — âncora emocional pré-fechamento, antes do FAQ */}
      <VideoSection
        variant="highlight"
        tag="O resultado final"
        headline="A mesa que você vai ter."
        subtext="Não é só sobre pão. É sobre autonomia na cozinha, sobre comer bem com restrição alimentar, sobre ter prazer em cada refeição sem abrir mão da saúde."
        videoSrc="/panificacao/videos/video_11.webm"
        poster="/panificacao/gallery/sanduiche.jpg"
        caption="Mesa funcional — pão, pasta, geleia, bebida. Tudo no ecossistema."
        ctaLabel="Quero essa mesa por R$47"
        onCtaClick={handleButtonClick}
      />

      <FAQ />
      <Guarantee />
      <FinalCTA onButtonClick={handleButtonClick} />
      <Footer />
    </div>
  );
};

export default PanificacaoPage;
