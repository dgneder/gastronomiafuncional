"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface UrgencyCTAProps {
  onButtonClick: () => void;
}

const UrgencyCTA: React.FC<UrgencyCTAProps> = ({ onButtonClick }) => {
  return (
    <section className="py-16 lg:py-20 px-4 bg-[#2D5016] text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#B8860B] mb-6 leading-tight">
          A próxima gripe não avisa quando chega. Mas você pode estar preparado(a).
        </h2>

        <p className="text-white/80 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Ter este guia em mãos ANTES de precisar faz toda a diferença. O
          Protocolo 2 (&quot;Sentiu Chegando&quot;) só funciona se você começar nas
          primeiras 48 horas — e para isso, precisa saber o que fazer e ter os
          produtos em casa.
        </p>

        <p className="text-[#A3E635] font-bold text-lg mb-8">
          Quem se prepara antes, sofre menos depois.
        </p>

        <button
          onClick={onButtonClick}
          className="inline-flex items-center gap-2 py-5 px-10 bg-[#B8860B] hover:brightness-110 text-white font-black text-lg sm:text-xl rounded-xl shadow-[0_10px_25px_rgba(184,134,11,0.4)] transition-all group"
        >
          🛡️ QUERO ME PREPARAR AGORA — R$ 27,00
          <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
        </button>
        <p className="text-white/50 text-xs mt-3">
          Acesso imediato · Garantia de 7 dias · Pagamento seguro
        </p>
      </div>
    </section>
  );
};

export default UrgencyCTA;
