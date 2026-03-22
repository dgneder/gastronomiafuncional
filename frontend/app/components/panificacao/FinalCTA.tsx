"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface FinalCTAProps {
  onButtonClick: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onButtonClick }) => {
  return (
    <section
      id="finalcta"
      className="py-24 px-6 lg:px-12 text-center relative overflow-hidden"
      style={{ backgroundColor: "#6B3A2A" }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #D4A04A, transparent)", transform: "translate(-30%, -30%)" }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #D4A04A, transparent)", transform: "translate(30%, 30%)" }} />

      <div className="relative z-10 max-w-3xl mx-auto" data-aos="fade-up">
        <p className="text-amber-300/80 text-sm uppercase tracking-widest font-semibold mb-6">
          Sua mesa funcional começa aqui
        </p>

        <h2 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
          Restrição alimentar{" "}
          <span className="text-amber-300">não precisa</span>{" "}
          ser restrição de vida.
        </h2>

        <p className="text-amber-100/70 text-lg mb-4 max-w-xl mx-auto leading-relaxed">
          27 receitas com base científica. 12 capítulos que te dão autonomia.
          Um guia que transforma a forma como você pensa sobre pão.
        </p>

        <div className="mb-8">
          <div className="flex items-baseline justify-center gap-3 mb-1">
            <span className="text-xl text-amber-300/50 line-through">R$97</span>
            <span className="text-xl text-amber-300/50 line-through">R$47</span>
            <span className="text-5xl font-extrabold text-white">R$37</span>
          </div>
          <div className="inline-flex items-center gap-2 mt-3 px-5 py-2 rounded-full bg-white/10 border border-amber-400/30">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-amber-200 text-sm font-semibold">Cupom de lançamento aplicado: -R$10</span>
          </div>
          <p className="text-amber-200/60 text-sm mt-2">
            Acesso vitalício · Área de membros · Garantia de 7 dias · Preço volta para R$47 em breve
          </p>
        </div>

        <button
          onClick={onButtonClick}
          className="group px-12 py-5 text-lg font-bold rounded-xl shadow-2xl hover:scale-[1.04] active:scale-[0.98] transition-all duration-300 text-stone-900"
          style={{ background: "linear-gradient(135deg, #D4A04A, #E8B84A)" }}
        >
          <span className="flex items-center gap-3">
            Quero Fazer Pão Funcional Hoje
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </span>
        </button>

        <p className="text-amber-200/40 text-xs mt-6">
          Pagamento seguro via Hotmart · Cartão, PIX ou boleto · Acesso imediato
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
