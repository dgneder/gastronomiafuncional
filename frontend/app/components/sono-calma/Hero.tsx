"use client";

import Image from "next/image";
import React from "react";
import { FaShieldAlt, FaArrowRight, FaCheckCircle, FaStar } from "react-icons/fa";

interface HeroProps {
  onButtonClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onButtonClick }) => {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-[#0a1628] via-[#132238] to-[#1a3049] overflow-hidden"
    >
      {/* Estrelas decorativas de fundo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-8 left-[10%] w-1 h-1 bg-white/30 rounded-full animate-pulse" />
        <div className="absolute top-20 left-[25%] w-0.5 h-0.5 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-12 right-[15%] w-1 h-1 bg-white/25 rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-32 right-[30%] w-0.5 h-0.5 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-6 right-[45%] w-0.5 h-0.5 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#4A7C29]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#2D5016]/10 rounded-full blur-3xl" />
        {/* Lua sutil */}
        <div className="absolute top-10 right-8 w-16 h-16 bg-[#B8860B]/15 rounded-full blur-xl hidden lg:block" />
      </div>

      <div className="relative z-10 px-4 pt-12 pb-10 lg:pt-20 lg:pb-16 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
            {/* ── Coluna esquerda: Texto + CTA ── */}
            <div className="lg:w-3/5 text-center lg:text-left">

              {/* Badge de credibilidade */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full mb-6">
                <FaStar className="text-[#B8860B] text-xs" />
                <span className="text-[10px] sm:text-xs font-bold text-white/90 uppercase tracking-widest">
                  Baseado em estudos clínicos publicados
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-[2.85rem] font-extrabold text-white leading-[1.1] mb-6">
                Você Não Precisa de{" "}
                <span className="text-[#B8860B]">
                  Mais Uma Noite em Claro
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg text-white/70 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                12 plantas medicinais com evidência científica + 5 protocolos prontos
                para reduzir ansiedade e dormir melhor — sem dependência química,
                sem efeitos colaterais
              </p>

              {/* Mini provas sociais */}
              <div className="grid grid-cols-2 gap-3 mb-8 max-w-md mx-auto lg:mx-0">
                {[
                  "12 plantas com estudos clínicos",
                  "5 protocolos passo a passo",
                  "78 páginas de conteúdo",
                  "Guia de preparação completo"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white/80 font-medium">
                    <FaCheckCircle className="text-[#4A7C29] flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>

              {/* Card de Preço + CTA */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/10 mb-6 lg:mb-0 max-w-md mx-auto lg:mx-0 relative">
                {/* Tag de Desconto */}
                <div className="absolute -top-4 right-6 bg-[#B8860B] text-white text-[10px] font-black px-3 py-1 rounded-full shadow-md uppercase">
                  Oferta de Lançamento
                </div>

                <div className="flex items-baseline justify-center lg:justify-start gap-2 mb-4">
                  <span className="text-white/40 line-through text-base">R$97</span>
                  <span className="text-4xl font-black text-white">R$37</span>
                  <span className="text-[#B8860B] text-sm font-bold ml-2">Pagamento Único</span>
                </div>

                <button
                  onClick={onButtonClick}
                  className="w-full py-5 px-6 bg-gradient-to-r from-[#4A7C29] to-[#2D5016] hover:brightness-110 text-white font-black text-xl rounded-xl shadow-[0_10px_20px_rgba(45,80,22,0.4)] transform hover:scale-[1.01] transition-all duration-200 flex flex-col items-center justify-center group"
                >
                  <div className="flex items-center gap-2">
                    <span>QUERO DORMIR MELHOR HOJE</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
                  </div>
                  <span className="text-[10px] opacity-80 font-normal uppercase mt-1 tracking-tighter">
                    Acesso imediato • Garantia de 7 dias
                  </span>
                </button>

                <div className="flex items-center justify-center gap-4 mt-4">
                  <div className="flex items-center gap-1.5 text-[11px] text-white/50">
                    <FaShieldAlt className="text-[#4A7C29]" />
                    Garantia Incondicional
                  </div>
                  <div className="w-1 h-1 bg-white/20 rounded-full" />
                  <div className="text-[11px] text-white/50 font-semibold uppercase">
                    PDF de Alta Qualidade
                  </div>
                </div>
              </div>
            </div>

            {/* ── Coluna direita: Mockup ── */}
            <div className="lg:w-2/5 mt-10 lg:mt-0 relative">
              <div className="relative max-w-[320px] sm:max-w-sm mx-auto group">
                {/* Brilho atrás do mockup */}
                <div className="absolute inset-0 bg-[#4A7C29]/20 rounded-full blur-[80px] group-hover:bg-[#4A7C29]/30 transition-all" />

                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border-4 border-white/20 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                  {/* TODO: Substituir por mockup real do e-book */}
                  <Image
                    src="/sono-calma/mockup.jpeg"
                    alt="E-book Sono e Calma com Plantas Medicinais — Guia Científico"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Badge Flutuante */}
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 border border-[#4A7C29]/20 flex flex-col items-center">
                  <span className="text-[#2D5016] font-black text-xl leading-none">78</span>
                  <span className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">
                    Páginas de Ciência
                  </span>
                </div>

                {/* Badge de Protocolos */}
                <div className="absolute -top-3 -right-3 bg-[#B8860B] text-white rounded-2xl shadow-xl p-3 flex flex-col items-center">
                  <span className="font-black text-lg leading-none">5</span>
                  <span className="text-[9px] uppercase font-bold tracking-tighter">
                    Protocolos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transição suave para a próxima seção */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;
