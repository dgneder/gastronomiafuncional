"use client";

import React from "react";
import {
  FaShieldAlt,
  FaArrowRight,
  FaCheckCircle,
  FaMicroscope,
  FaLock,
} from "react-icons/fa";

interface HeroProps {
  onButtonClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onButtonClick }) => {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-[#FBF7EF] to-white overflow-hidden"
    >
      {/* Decoração de fundo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#4A7C29]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#2D5016]/5 rounded-full blur-3xl" />
        <div className="absolute top-20 right-10 text-[#4A7C29]/8 text-8xl select-none hidden lg:block">
          🌿
        </div>
      </div>

      <div className="relative z-10 px-4 pt-12 pb-8 lg:pt-20 lg:pb-16 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
            {/* ── Coluna esquerda: Texto + CTA ── */}
            <div className="lg:w-3/5 text-center lg:text-left">
              {/* Badge de formato */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D5016] rounded-full mb-6 shadow-sm">
                <FaMicroscope className="text-white text-xs" />
                <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-widest">
                  📘 E-book digital — Acesso imediato
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-[2.85rem] font-extrabold text-gray-900 leading-[1.1] mb-6">
                As 15 Plantas que a Ciência Confirma para{" "}
                <span className="text-[#4A7C29]">
                  Fortalecer sua Imunidade
                </span>{" "}
                — Com Dosagens Reais e Protocolos Prontos
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                O guia que um doutor em genética de plantas escreveu para sua
                própria família usar.{" "}
                <strong>15 plantas com evidência real</strong>, 5 protocolos
                hora a hora, dosagens precisas e lista de compras. Sem
                misticismo, sem promessas vazias.
              </p>

              {/* Micro-benefícios */}
              <div className="space-y-3 mb-8 max-w-lg mx-auto lg:mx-0 text-left">
                {[
                  "15 plantas organizadas por mecanismo de ação (imunoestimulante, anti-inflamatório, antimicrobiano, respiratório)",
                  "5 protocolos prontos com horários, dosagens e lista de compras com preços",
                  "Fichas detalhadas com contraindicações, interações medicamentosas e nível de evidência",
                  "Protocolo especial para famílias com crianças (dosagens pediátricas seguras)",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-gray-700"
                  >
                    <FaCheckCircle className="text-[#4A7C29] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Card de Preço + CTA */}
              <div className="bg-white rounded-2xl p-6 shadow-2xl border-2 border-[#4A7C29]/10 mb-6 lg:mb-0 max-w-md mx-auto lg:mx-0 relative">
                <div className="absolute -top-4 right-6 bg-[#D97706] text-white text-[10px] font-black px-3 py-1 rounded-full shadow-md uppercase">
                  Oferta Especial
                </div>

                <div className="flex items-baseline justify-center lg:justify-start gap-2 mb-4">
                  <span className="text-gray-400 line-through text-base">
                    R$97
                  </span>
                  <span className="text-4xl font-black text-[#2D5016]">
                    R$27
                  </span>
                  <span className="text-[#4A7C29] text-sm font-bold ml-2">
                    Pagamento Único
                  </span>
                </div>

                <button
                  onClick={onButtonClick}
                  className="w-full py-5 px-6 bg-gradient-to-r from-[#4A7C29] to-[#2D5016] hover:brightness-110 text-white font-black text-lg sm:text-xl rounded-xl shadow-[0_10px_20px_rgba(45,80,22,0.3)] transform hover:scale-[1.01] transition-all duration-200 flex flex-col items-center justify-center group"
                >
                  <div className="flex items-center gap-2">
                    <span>QUERO FORTALECER MINHA IMUNIDADE</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
                  </div>
                  <span className="text-[10px] opacity-80 font-normal uppercase mt-1 tracking-tighter">
                    Acesso imediato · R$ 27,00 · Garantia de 7 dias
                  </span>
                </button>

                <div className="flex items-center justify-center gap-4 mt-4">
                  <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
                    <FaLock className="text-[#4A7C29]" />
                    Pagamento seguro
                  </div>
                  <div className="w-1 h-1 bg-gray-300 rounded-full" />
                  <div className="text-[11px] text-gray-500">
                    Cartão, Pix ou boleto
                  </div>
                  <div className="w-1 h-1 bg-gray-300 rounded-full" />
                  <div className="text-[11px] text-gray-500">
                    Acesso instantâneo
                  </div>
                </div>
              </div>
            </div>

            {/* ── Coluna direita: Mockup ── */}
            <div className="lg:w-2/5 mt-10 lg:mt-0 relative">
              <div className="relative max-w-[320px] sm:max-w-sm mx-auto group">
                <div className="absolute inset-0 bg-[#4A7C29]/20 rounded-full blur-[80px] group-hover:bg-[#4A7C29]/30 transition-all" />

                {/* Placeholder visual para mockup do e-book */}
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-4 border-white transform lg:rotate-2 hover:rotate-0 transition-transform duration-500 bg-gradient-to-br from-[#2D5016] via-[#3a6b1e] to-[#4A7C29] flex flex-col items-center justify-center p-8">
                  <div className="text-6xl mb-4">🛡️</div>
                  <h3 className="text-white text-xl sm:text-2xl font-black text-center leading-tight mb-2">
                    Imunidade com Plantas Medicinais
                  </h3>
                  <p className="text-white/70 text-xs text-center">
                    O Guia Científico para Fortalecer suas Defesas Naturais
                  </p>
                  <div className="mt-4 border-t border-white/20 pt-4 w-full text-center">
                    <p className="text-[#A3E635] text-xs font-bold uppercase tracking-widest">
                      Dr. Diogo Gonçalves Neder
                    </p>
                  </div>
                </div>

                {/* Badge flutuante */}
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 border border-[#4A7C29]/20 flex flex-col items-center">
                  <span className="text-[#2D5016] font-black text-xl leading-none">
                    ~100
                  </span>
                  <span className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">
                    Páginas
                  </span>
                </div>

                {/* Badge de plantas */}
                <div className="absolute -top-3 -right-3 bg-[#B8860B] text-white rounded-2xl shadow-xl p-3 border-2 border-white flex flex-col items-center">
                  <span className="font-black text-lg leading-none">15</span>
                  <span className="text-[9px] uppercase font-bold tracking-tight">
                    Plantas
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
