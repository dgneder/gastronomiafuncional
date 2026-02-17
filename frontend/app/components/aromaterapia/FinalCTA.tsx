"use client";

import React from "react";
import Image from "next/image";
import { FaArrowRight, FaLock, FaCheck } from "react-icons/fa";

interface FinalCTAProps {
  onButtonClick: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onButtonClick }) => {
  return (
    <section className="py-16 sm:py-24 px-4 bg-[#2D5016]">
      <div className="max-w-3xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-6 border border-white/20">
          <FaCheck className="text-[#A3E635] text-[10px]" />
          <span className="text-[10px] font-bold text-white uppercase tracking-widest">
            Material Científico Validado
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
          Você está a um clique de usar óleos essenciais com{" "}
          <span className="text-[#A3E635]">ciência de verdade</span>
        </h2>

        <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          25 óleos. 12 blends prontos. Tabelas de segurança completas. Tudo em
          160+ páginas escritas por um Doutor em Genética de Plantas.
        </p>

        {/* Checkmarks */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
          {[
            "Dosagem exata",
            "Segurança de pets e crianças",
            "Receitas prontas",
            "Guia anti-fraude",
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
            <span className="text-xl font-bold">R$</span>37
          </p>
          <p className="text-[#A3E635] text-xs font-bold uppercase tracking-tighter mt-1">
            Pagamento Único · ou 6x de R$6,90
          </p>
        </div>

        {/* Botão */}
        <button
          onClick={onButtonClick}
          className="w-full max-w-md mx-auto py-5 px-6 bg-[#B8860B] hover:bg-[#9A7209] text-white font-black text-xl rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-3 group"
        >
          <span>QUERO MEU GUIA AGORA</span>
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
