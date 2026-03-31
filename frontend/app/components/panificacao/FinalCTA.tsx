"use client";

import React from "react";
import { FaArrowRight, FaShieldAlt, FaLock, FaFire } from "react-icons/fa";

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
      {/* Decorativos */}
      <div
        className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #D4A04A, transparent)", transform: "translate(-30%, -30%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #D4A04A, transparent)", transform: "translate(30%, 30%)" }}
      />

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
          Um método com base científica que te dá autonomia para criar seus próprios pães — e prazer de volta à mesa.
        </p>

        {/* Preço com âncora e mensagem de lançamento */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-400/30 mb-5">
            <FaFire className="text-red-300 text-xs" />
            <span className="text-red-200 text-sm font-bold">
              Preço especial de lançamento — sobe para R$97 em breve
            </span>
          </div>

          <div className="flex items-baseline justify-center gap-3 mb-2">
            <span className="text-xl text-amber-300/50 line-through">R$97</span>
            <span className="text-6xl font-extrabold text-white">R$47</span>
            <span className="text-sm font-bold px-3 py-1 rounded-full bg-green-500/20 border border-green-400/30 text-green-300">
              52% OFF
            </span>
          </div>
          <p className="text-amber-200/60 text-sm">
            ou 3× de R$15,90 sem juros · Acesso vitalício · Garantia 7 dias
          </p>
        </div>

        {/* Stack resumido */}
        <div className="bg-white/10 rounded-2xl px-6 py-5 mb-8 max-w-md mx-auto text-left space-y-2">
          {[
            { label: "246 receitas + 12 capítulos de ciência",     value: "R$97" },
            { label: "Área de Membros — 11 módulos",               value: "R$47" },
            { label: "50 Sanduíches Naturais Funcionais 🎁",       value: "R$27" },
            { label: "5 Receitas: Café da Manhã Funcional 🎁",     value: "R$27" },
            { label: "Planilha + Guia de Farinhas + Checklist 🎁", value: "R$43" },
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center text-sm">
              <span className="text-amber-100/80">{item.label}</span>
              <span className="text-amber-300/60 line-through ml-4 whitespace-nowrap">{item.value}</span>
            </div>
          ))}
          <div className="border-t border-amber-300/20 pt-3 flex justify-between items-center">
            <span className="text-white font-bold">Total real:</span>
            <span className="text-amber-300/60 font-bold line-through">R$241</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-amber-200 text-sm font-semibold">Lançamento:</span>
            <span className="text-amber-300 font-extrabold text-2xl">R$47</span>
          </div>
        </div>

        <button
          onClick={onButtonClick}
          className="group px-12 py-5 text-lg font-bold rounded-xl shadow-2xl hover:scale-[1.04] active:scale-[0.98] transition-all duration-300 text-stone-900"
          style={{ background: "linear-gradient(135deg, #D4A04A, #E8B84A)" }}
        >
          <span className="flex items-center gap-3">
            Quero Meu Acesso por R$47
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </span>
        </button>

        <div className="flex items-center justify-center gap-6 mt-6 text-amber-200/50 text-xs">
          <span className="flex items-center gap-1.5">
            <FaLock /> Pagamento seguro via Hotmart
          </span>
          <span className="flex items-center gap-1.5">
            <FaShieldAlt /> 7 dias de garantia total
          </span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;