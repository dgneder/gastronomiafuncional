"use client";

import Image from "next/image";
import React from "react";
import { FaShieldAlt, FaArrowRight, FaCheckCircle, FaSeedling } from "react-icons/fa";

interface HeroProps {
  onButtonClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onButtonClick }) => {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-white to-[#F2F8ED] overflow-hidden"
    >
      {/* Decoração de fundo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#2E7D32]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#1B5E20]/5 rounded-full blur-3xl" />
        <div className="absolute top-20 right-10 text-[#2E7D32]/10 text-8xl select-none hidden lg:block">
          🌿
        </div>
      </div>

      <div className="relative z-10 px-4 pt-12 pb-8 lg:pt-20 lg:pb-16 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
            {/* ── Coluna esquerda: Texto + CTA ── */}
            <div className="lg:w-3/5 text-center lg:text-left">
              {/* Micro-headline com Badge de Autoridade */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1B5E20] rounded-full mb-6 shadow-sm">
                <FaSeedling className="text-white text-xs" />
                <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-widest">
                  Escrito por um Doutor em Genética de Plantas
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-[2.85rem] font-extrabold text-gray-900 leading-[1.1] mb-6">
                30 Plantas Medicinais na Sua Varanda —{" "}
                <span className="text-[#2E7D32]">O Guia Científico</span> do
                Plantio à Colheita
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Fichas completas de cultivo. Calendários por região do Brasil. 4
                métodos de secagem. Tudo em{" "}
                <strong>
                  150+ páginas escritas por quem estuda plantas há mais de 20
                  anos
                </strong>
                .
              </p>

              {/* Provas de Valor Escaneáveis */}
              <div className="grid grid-cols-2 gap-3 mb-8 max-w-md mx-auto lg:mx-0">
                {[
                  "30 Fichas Completas de Cultivo",
                  "150+ Páginas de Ciência",
                  "Calendários por Região",
                  "Acesso Imediato em PDF",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-700 font-medium"
                  >
                    <FaCheckCircle className="text-[#2E7D32] flex-shrink-0" />{" "}
                    {item}
                  </div>
                ))}
              </div>

              {/* Card de Preço + CTA */}
              <div className="bg-white rounded-2xl p-6 shadow-2xl border-2 border-[#2E7D32]/10 mb-6 lg:mb-0 max-w-md mx-auto lg:mx-0 relative">
                {/* Tag de Desconto */}
                <div className="absolute -top-4 right-6 bg-[#F9A825] text-[#1B5E20] text-[10px] font-black px-3 py-1 rounded-full shadow-md uppercase">
                  Oferta de Lançamento
                </div>

                <div className="flex items-baseline justify-center lg:justify-start gap-2 mb-4">
                  <span className="text-gray-400 line-through text-base">
                    R$97
                  </span>
                  <span className="text-4xl font-black text-[#1B5E20]">
                    R$34,90
                  </span>
                  <span className="text-[#2E7D32] text-sm font-bold ml-2">
                    Pagamento Único
                  </span>
                </div>

                <button
                  onClick={onButtonClick}
                  className="w-full py-5 px-6 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] hover:brightness-110 text-white font-black text-xl rounded-xl shadow-[0_10px_20px_rgba(27,94,32,0.3)] transform hover:scale-[1.01] transition-all duration-200 flex flex-col items-center justify-center group"
                >
                  <div className="flex items-center gap-2">
                    <span>QUERO MEU GUIA AGORA</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
                  </div>
                  <span className="text-[10px] opacity-80 font-normal uppercase mt-1 tracking-tighter">
                    Download imediato e seguro
                  </span>
                </button>

                <div className="flex items-center justify-center gap-4 mt-4">
                  <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
                    <FaShieldAlt className="text-[#2E7D32]" />
                    Garantia de 7 Dias
                  </div>
                  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  <div className="text-[11px] text-gray-500 font-semibold uppercase">
                    PDF de Alta Qualidade
                  </div>
                </div>
              </div>
            </div>

            {/* ── Coluna direita: Mockup ── */}
            <div className="lg:w-2/5 mt-10 lg:mt-0 relative">
              <div className="relative max-w-[320px] sm:max-w-sm mx-auto group">
                {/* Brilho atrás do livro */}
                <div className="absolute inset-0 bg-[#2E7D32]/20 rounded-full blur-[80px] group-hover:bg-[#2E7D32]/30 transition-all" />

                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-4 border-white transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/horta-medicinal/mockup01.jpeg"
                    alt="E-book Horta Medicinal em Casa — Guia Científico de 30 Plantas"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Badge Flutuante */}
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 border border-[#2E7D32]/20 flex flex-col items-center">
                  <span className="text-[#1B5E20] font-black text-xl leading-none">
                    30
                  </span>
                  <span className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">
                    Plantas Medicinais
                  </span>
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
