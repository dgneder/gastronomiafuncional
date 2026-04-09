"use client";

import Image from "next/image";
import React from "react";
import { FaArrowRight, FaLock, FaCreditCard, FaFire } from "react-icons/fa";

interface CTAProps {
  onButtonClick: () => void;
}

const CTASection: React.FC<CTAProps> = ({ onButtonClick }) => {
  return (
    <section id="cta" className="py-20 px-6 lg:px-12 bg-white" data-aos="fade-up">
      <div className="max-w-5xl mx-auto">
        <div className="lg:flex lg:items-center lg:gap-12 bg-linear-to-br from-stone-50 to-amber-50/50 rounded-3xl p-8 lg:p-12 border border-amber-100 shadow-lg">

          <div className="lg:w-1/2 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 mb-4">
                <FaFire className="text-red-500 text-xs" />
                <span className="text-red-700 text-xs font-bold uppercase tracking-wider">Preço especial de lançamento</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-stone-800 leading-tight">
                Seu primeiro pão funcional está a{" "}
                <span style={{ color: "#6B3A2A" }}>10 minutos de distância.</span>
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

            <div className="pt-4 pb-2">
              <div className="flex items-baseline gap-3">
                <span className="text-lg text-stone-400 line-through">R$97</span>
                <span className="text-5xl font-extrabold" style={{ color: "#6B3A2A" }}>R$47</span>
                <span className="text-sm font-bold px-3 py-1 rounded-full" style={{ backgroundColor: "#22C55E20", color: "#15803D", border: "1px solid #22C55E40" }}>
                  52% OFF
                </span>
              </div>
              <p className="text-stone-500 text-sm mt-2">ou 3× de R$15,90 sem juros</p>
              <p className="text-stone-400 text-xs mt-1">Preço volta para R$97 ao encerrar o lançamento</p>
            </div>

            <button
              onClick={onButtonClick}
              className="group w-full lg:w-auto px-10 py-5 text-lg font-bold text-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #6B3A2A, #8B5A3C)" }}
            >
              <span className="flex items-center justify-center gap-3">
                Garantir Meu Acesso por R$47
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-400">
              <div className="flex items-center gap-1"><FaLock className="text-green-500" /><span>Pagamento seguro</span></div>
              <div className="flex items-center gap-1"><FaCreditCard /><span>Cartão, PIX ou boleto</span></div>
              <div className="flex items-center gap-1"><span>🛡️</span><span>7 dias de garantia</span></div>
            </div>
          </div>

          <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-md aspect-3/4 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image src="/panificacao/mockup_ebook.jpeg" alt="Mockup do ebook Pão Sem Culpa" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
