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
          {/* Left - Content */}
          <div className="lg:w-1/2 space-y-6">
            <div>
              <p className="text-sm uppercase tracking-widest font-semibold mb-2" style={{ color: "#C4622D" }}>
                Oferta especial
              </p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-stone-800 leading-tight">
                Comece a fazer pão funcional{" "}
                <span style={{ color: "#6B3A2A" }}>ainda hoje</span>
              </h2>
            </div>

            <ul className="space-y-3">
              {[
                "27 receitas testadas com base científica",
                "12 capítulos de ciência acessível",
                "Sistema de tags por restrição e saúde",
                "Tabela mestra de 14 farinhas funcionais",
                "Planilha de formulação inclusa",
                "Acesso vitalício + atualizações",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-stone-600">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-white text-xs" style={{ backgroundColor: "#6B3A2A" }}>
                    ✓
                  </span>
                  <span className="text-[15px]">{item}</span>
                </li>
              ))}
            </ul>

            {/* Price */}
            <div className="pt-4 pb-2">
              <div className="flex items-baseline gap-3">
                <span className="text-lg text-stone-400 line-through">R$97</span>
                <span className="text-2xl text-stone-400 line-through ml-1">R$47</span>
                <span className="text-5xl font-extrabold ml-2" style={{ color: "#6B3A2A" }}>R$37</span>
              </div>
              <div className="inline-flex items-center gap-2 mt-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-200">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-700 text-sm font-semibold">Cupom de lançamento aplicado: -R$10</span>
              </div>
              <p className="text-stone-500 text-sm mt-2">
                ou 3x de R$12,90 sem juros
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={onButtonClick}
              className="group w-full lg:w-auto px-10 py-5 text-lg font-bold text-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #6B3A2A, #8B5A3C)" }}
            >
              <span className="flex items-center justify-center gap-3">
                Garantir Meu Acesso por R$37
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-400">
              <div className="flex items-center gap-1">
                <FaLock className="text-green-500" />
                <span>Pagamento seguro</span>
              </div>
              <div className="flex items-center gap-1">
                <FaCreditCard />
                <span>Cartão, PIX ou boleto</span>
              </div>
              <div className="flex items-center gap-1">
                <span>🛡️</span>
                <span>7 dias de garantia</span>
              </div>
            </div>
          </div>

          {/* Right - Mockup */}
          <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
            {/* IMAGE TAG: mockup_ebook */}
            <div className="relative w-full max-w-md aspect-3/4 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/panificacao/mockup_ebook.jpeg"
                alt="Mockup do ebook Pão Sem Culpa"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
