"use client";

import Image from "next/image";
import React from "react";
import { FaArrowRight, FaClock, FaHeartbeat, FaSeedling } from "react-icons/fa";

interface HeroProps {
  onButtonClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onButtonClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center"
      style={{
        background: "linear-gradient(135deg, #F5E6CC 0%, #FAF3E8 30%, #FFF8F0 60%, #F5E6CC 100%)",
      }}
    >
      {/* Decorative grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Top decorative bar */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, #D4A04A, #C4622D, #D4A04A)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 w-full">
        <div className="lg:flex lg:items-center lg:gap-16">
          {/* Left content */}
          <div className="lg:w-1/2 space-y-8" data-aos="fade-right">
            {/* Pre-title badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-700/20 bg-white/60 backdrop-blur-sm">
              <FaSeedling className="text-amber-700 text-sm" />
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-800">
                Coleção Gastronomia Funcional
              </span>
            </div>

            {/* Headline Otimizada: Desejo + Mecanismo + Objeção */}
            <h1 className="text-4xl lg:text-[3.4rem] font-extrabold leading-[1.1] text-stone-800">
              Abandone o medo do glúten com pães caseiros de{" "}
              <span
                className="relative inline-block"
                style={{ color: "#6B3A2A" }}
              >
                textura real
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8C50 3 100 2 150 5C200 8 250 4 298 7" stroke="#D4A04A" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>{" "}
              em 10 minutos.
            </h1>

            {/* Subheadline Otimizada: Autoridade + Foco Metabólico */}
            <p className="text-lg lg:text-xl text-stone-600 leading-relaxed max-w-xl">
              Recupere o prazer do café da manhã com um método desenvolvido por um Doutor em Genética. Receitas que controlam a glicemia e combatem a inflamação, fundamentadas na bioquímica dos alimentos.
            </p>

            {/* Mini proof points Otimizados para Meta Ads (Evita claims médicos, foca em benefícios reais) */}
            <div className="flex flex-wrap gap-4 text-sm font-medium text-stone-600">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-stone-100">
                <FaClock className="text-amber-700" />
                <span>Preparo em 10 min</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-stone-100">
                <FaHeartbeat className="text-amber-700" />
                <span>Seguro p/ Diabéticos (Baixo IG)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-stone-100">
                <FaSeedling className="text-amber-700" />
                <span>0% Glúten / 0% Lactose</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onButtonClick}
                className="group relative px-10 py-5 text-lg font-bold text-white rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #6B3A2A, #8B5A3C)",
                }}
              >
                <span className="flex items-center gap-3">
                  Quero Fazer Pão Funcional Hoje
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <p className="text-sm text-stone-500 mt-3 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Acesso imediato · Garantia de 7 dias
              </p>
            </div>
          </div>

          {/* Right - Hero image */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center" data-aos="fade-left">
            <div className="relative w-full flex justify-center">
              <div
                className="absolute -inset-4 rounded-3xl opacity-20 max-w-sm w-full"
                style={{
                  background: "linear-gradient(135deg, #D4A04A, transparent, #C4622D)",
                }}
              />
              <div className="relative w-full max-w-sm aspect-9/16 bg-stone-200 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
                <Image
                  src="/panificacao/hero.jpeg"
                  alt="Pães funcionais artesanais recém-saídos do forno"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 sm:left-4 lg:-left-8 bg-white rounded-xl shadow-xl px-5 py-3 flex items-center gap-3 border border-amber-100 z-20">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl" style={{ backgroundColor: "#F5E6CC" }}>
                  🍞
                </div>
                <div>
                  <p className="text-xs text-stone-500">Receitas a partir de</p>
                  <p className="text-lg font-bold" style={{ color: "#6B3A2A" }}>10 minutos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;