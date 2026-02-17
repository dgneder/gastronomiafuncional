"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface FinalCTAProps {
  onButtonClick: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onButtonClick }) => {
  return (
    <section className="py-16 lg:py-20 px-4 bg-gradient-to-b from-[#0a1628] to-[#132238] relative overflow-hidden">
      {/* Estrelas decorativas */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-[10%] w-1 h-1 bg-white/20 rounded-full animate-pulse" />
        <div className="absolute top-16 right-[20%] w-0.5 h-0.5 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-12 left-[30%] w-1 h-1 bg-white/25 rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-20 left-[60%] w-0.5 h-0.5 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
          Hoje à noite pode ser{" "}
          <span className="text-[#B8860B]">diferente.</span>
        </h2>

        <p className="text-white/70 text-base sm:text-lg mb-8 leading-relaxed max-w-xl mx-auto">
          78 páginas. 12 plantas. 5 protocolos. Lista de compras. Guia de
          preparação. Tudo por R$37.
        </p>

        <p className="text-white/50 text-sm mb-10">
          Se não funcionar para você, devolvemos seu dinheiro em 7 dias. Sem perguntas.
        </p>

        <button
          onClick={onButtonClick}
          className="py-5 sm:py-6 px-10 sm:px-14 bg-gradient-to-r from-[#B8860B] to-[#9a7209] hover:brightness-110 text-white font-black text-xl sm:text-2xl rounded-2xl shadow-[0_15px_30px_rgba(184,134,11,0.3)] transform hover:scale-[1.02] transition-all duration-200 inline-flex items-center gap-3 group"
        >
          <span>QUERO COMEÇAR HOJE</span>
          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="mt-6 text-white/30 text-xs">
          Acesso imediato após pagamento • Cartão, Pix ou boleto
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
