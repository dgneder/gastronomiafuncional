"use client";

import React from "react";
import { FaArrowRight, FaLock, FaCheck } from "react-icons/fa";

interface FinalCTAProps {
  onButtonClick: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onButtonClick }) => {
  return (
    <section className="py-16 sm:py-24 px-4 bg-[#1B5E20]">
      <div className="max-w-3xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-6 border border-white/20">
          <FaCheck className="text-[#A3E635] text-[10px]" />
          <span className="text-[10px] font-bold text-white uppercase tracking-widest">
            Guia Científico Validado
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
          A farmácia mais barata do Brasil{" "}
          <span className="text-[#A3E635]">cabe na sua janela</span>
        </h2>

        <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          E o guia para montá-la foi escrito por um doutor em plantas. 30
          espécies. 30 fichas completas. Calendários regionais. Tudo em 150+
          páginas.
        </p>

        {/* Checkmarks */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
          {[
            "30 fichas de cultivo",
            "Calendários por região",
            "4 métodos de secagem",
            "3 jardins temáticos",
            "Acesso vitalício",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-white/80 text-sm"
            >
              <FaCheck className="text-[#A3E635] text-xs" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Preço */}
        <div className="mb-8">
          <span className="text-white/40 text-sm line-through block leading-none mb-1">
            De R$ 97
          </span>
          <p className="text-5xl sm:text-6xl font-black text-white flex items-center justify-center gap-2">
            <span className="text-xl font-bold">R$</span>34,90
          </p>
          <p className="text-[#A3E635] text-xs font-bold uppercase tracking-tighter mt-1">
            Pagamento Único · ou 6x de R$6,50
          </p>
        </div>

        {/* Botão */}
        <button
          onClick={onButtonClick}
          className="w-full max-w-md mx-auto py-5 px-6 bg-[#F9A825] hover:bg-[#E8971E] text-[#1B5E20] font-black text-xl rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-3 group"
        >
          <span>QUERO MINHA HORTA MEDICINAL</span>
          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Segurança */}
        <div className="mt-6 flex items-center justify-center gap-4 text-white/50 text-[10px] font-bold uppercase">
          <div className="flex items-center gap-1.5">
            <FaLock className="text-[#A3E635]" />
            Compra 100% Segura
          </div>
          <div className="w-1 h-1 bg-white/30 rounded-full" />
          <div>Garantia de 7 Dias</div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
