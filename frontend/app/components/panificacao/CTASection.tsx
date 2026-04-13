"use client";

import Image from "next/image";
import React from "react";
import { FaArrowRight, FaLock, FaCreditCard } from "react-icons/fa";

interface CTAProps {
  onButtonClick: () => void;
}

const CTASection: React.FC<CTAProps> = ({ onButtonClick }) => {
  return (
    <section id="cta" className="py-20 px-6 lg:px-12 bg-white" data-aos="fade-up">
      <div className="max-w-5xl mx-auto">
        <div className="lg:flex lg:items-center lg:gap-12 bg-linear-to-br from-stone-50 to-amber-50/50 rounded-3xl p-8 lg:p-12 border border-amber-100 shadow-lg">

          {/* Left — Content */}
          <div className="lg:w-1/2 space-y-6">
            <div>
              {/* Banner de lançamento */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 border border-amber-300 mb-4">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">🎉 Preço especial de lançamento</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-stone-800 leading-tight">
                Comece a fazer pão funcional{" "}
                <span style={{ color: "#6B3A2A" }}>ainda hoje</span>
              </h2>
            </div>

            <ul className="space-y-3">
              {[
                "246 receitas testadas com base científica",
                "12 capítulos de ciência acessível",
                "Sistema de tags por restrição e saúde",
                "Tabela mestra de 14 farinhas funcionais",
                "Planilha de formulação inclusa",
                "50 Sanduíches Naturais Funcionais (bônus)",
                "Acesso vitalício + área de membros com 11 módulos",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-stone-600">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-white text-xs" style={{ backgroundColor: "#6B3A2A" }}>✓</span>
                  <span className="text-[15px]">{item}</span>
                </li>
              ))}
            </ul>

            {/* Preço */}
            <div className="pt-4 pb-2">
              <div className="flex items-baseline gap-3">
                <span className="text-lg text-stone-400 line-through">R$97</span>
                <span className="text-5xl font-extrabold" style={{ color: "#6B3A2A" }}>R$67</span>
                <span className="text-sm font-bold text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">31% OFF</span>
              </div>
              <p className="text-stone-500 text-sm mt-2">ou 6x de R$12,80 sem juros</p>
              <p className="text-stone-400 text-xs mt-1">Preço de lançamento — sobe para R$97 após este período</p>
            </div>

            <button
              onClick={onButtonClick}
              className="group w-full lg:w-auto px-10 py-5 text-lg font-bold text-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #6B3A2A, #8B5A3C)" }}
            >
              <span className="flex items-center justify-center gap-3">
                Aproveitar Lançamento por R$67
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-400">
              <div className="flex items-center gap-1"><FaLock className="text-green-500" /><span>Pagamento seguro</span></div>
              <div className="flex items-center gap-1"><FaCreditCard /><span>Cartão, PIX ou boleto</span></div>
              <div className="flex items-center gap-1"><span>🛡️</span><span>7 dias de garantia</span></div>
            </div>
          </div>

          {/* Right — Mockup */}
          <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-md aspect-3/4 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image src="/panificacao/mockup_ebook.jpeg" alt="Mockup do Kit Pão Sem Culpa" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 448px" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
