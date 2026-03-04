"use client";

import React from "react";
import Image from "next/image";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaArrowRight,
  FaFlask,
} from "react-icons/fa";

interface HeroProps {
  onButtonClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onButtonClick }) => {
  return (
    <section
      id="hero"
      className="relative bg-linear-to-b from-[#1E2A10] via-[#2D3B1A] to-[#3A5020] overflow-hidden pt-14"
    >
      {/* Decoração de fundo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#D97706]/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#4A7C29]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#B8860B]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 px-4 pt-10 pb-12 lg:pt-16 lg:pb-20 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">

            {/* ── Coluna esquerda: Texto + CTA ── */}
            <div className="lg:w-[58%] text-center lg:text-left">

              {/* Badge de autoridade */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D97706]/20 border border-[#D97706]/40 rounded-full mb-5">
                <FaFlask className="text-[#D4A520] text-xs" />
                <span className="text-[10px] sm:text-xs font-bold text-[#D4A520] uppercase tracking-widest">
                  Escrito por um Doutor em Genética de Plantas
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-5xl font-extrabold text-white leading-[1.12] mb-5">
                As{" "}
                <span className="text-[#D4A520] italic font-bold">
                  15 Plantas Medicinais
                </span>{" "}
                que a ciência comprovou para o manejo natural de{" "}
                <span className="text-[#A3D977]">dores e inflamação</span>
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg text-white/80 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Dosagens exatas, protocolos prontos e preparações seguras —
                organizados por um pesquisador com doutorado em genética vegetal
                e 20 anos de experiência acadêmica.
              </p>

              {/* Features grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-8 max-w-md mx-auto lg:mx-0">
                {[
                  "15 fichas científicas completas",
                  "6 protocolos prontos",
                  "80+ páginas de conteúdo",
                  "Guia de interações incluído",
                  "Receitas tópicas bônus",
                  "Acesso vitalício imediato",
                ].map((feat) => (
                  <div
                    key={feat}
                    className="flex items-center gap-2 text-sm text-white/90"
                  >
                    <FaCheckCircle className="text-[#A3D977] shrink-0 text-xs" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Card de preço + CTA */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5 max-w-md mx-auto lg:mx-0">
                <div className="flex items-baseline gap-2 justify-center lg:justify-start mb-4">
                  <span className="text-white/40 line-through text-base">R$67</span>
                  <span className="text-4xl font-black text-[#D4A520]">R$27</span>
                  <span className="text-white/60 text-sm ml-1">pagamento único</span>
                </div>

                <button
                  onClick={onButtonClick}
                  className="w-full py-4 px-6 bg-linear-to-r from-[#D97706] to-[#B45309] hover:brightness-110 text-white font-black text-lg rounded-xl shadow-[0_8px_24px_rgba(217,119,6,0.4)] transform hover:scale-[1.02] transition-all duration-200 flex flex-col items-center"
                >
                  <div className="flex items-center gap-2">
                    <span>QUERO MEU ALÍVIO NATURAL</span>
                    <FaArrowRight className="text-sm" />
                  </div>
                  <span className="text-[10px] font-normal opacity-80 mt-0.5 uppercase tracking-wide">
                    Download imediato • Acesso vitalício
                  </span>
                </button>

                <div className="flex items-center justify-center gap-4 mt-3">
                  <div className="flex items-center gap-1.5 text-[11px] text-white/50">
                    <FaShieldAlt className="text-[#A3D977]" />
                    Garantia de 7 dias
                  </div>
                  <div className="w-1 h-1 bg-white/20 rounded-full" />
                  <div className="text-[11px] text-white/50">Pagamento seguro</div>
                </div>
              </div>
            </div>

            {/* ── Coluna direita: Capa do e-book ── */}
            <div className="lg:w-[42%] mt-10 lg:mt-0">
              <div className="relative max-w-sm mx-auto">

                {/* Glow atrás */}
                <div className="absolute inset-0 bg-[#D97706]/20 rounded-3xl blur-[60px]" />

                {/* Imagem da capa — overflow-hidden corta o watermark do rodapé */}
                <div
                  className="relative rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/10"
                  style={{ paddingBottom: "0" }}
                >
                  <div
                    className="relative w-full overflow-hidden rounded-2xl"
                    style={{ height: "420px" }}
                  >
                    <Image
                      src="/alivio_natural/mockup.png"
                      alt="E-book Alívio Natural — Plantas Medicinais para Dores e Inflamação"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                </div>

                {/* Badge de páginas */}
                <div className="absolute -bottom-4 -right-4 bg-[#D97706] text-white rounded-2xl shadow-xl p-3 text-center">
                  <p className="font-black text-xl leading-none">80+</p>
                  <p className="text-[9px] uppercase font-bold tracking-tighter opacity-90">
                    Páginas
                  </p>
                </div>

                {/* Badge de plantas */}
                <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-3 text-center">
                  <p className="font-black text-xl leading-none text-[#2D5016]">15</p>
                  <p className="text-[9px] uppercase font-bold tracking-tighter text-gray-500">
                    Plantas
                  </p>
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