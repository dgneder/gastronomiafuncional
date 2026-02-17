"use client";

import React from "react";
import { FaArrowRight, FaClock, FaCheckCircle } from "react-icons/fa";

interface UrgencyCTAProps {
  onButtonClick: () => void;
}

const UrgencyCTA: React.FC<UrgencyCTAProps> = ({ onButtonClick }) => {
  return (
    <section className="py-12 px-4 bg-[#2D5016]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white/5 p-8 md:p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-sm">
          
          {/* Texto de Urgência */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#A3E635] mb-2">
              <FaClock className="animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest">Oferta por Tempo Limitado</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
              Não deixe sua saúde <br className="hidden md:block" /> 
              nas mãos do <span className="text-[#A3E635]">acaso.</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-4 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#A3E635]" /> Acesso Vitalício
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#A3E635]" /> 7 Protocolos Inclusos
              </div>
            </div>
          </div>

          {/* Botão de Ação Final */}
          <div className="flex flex-col items-center gap-3">
            <button
              onClick={onButtonClick}
              className="px-10 py-5 bg-[#A3E635] hover:bg-[#bef264] text-[#2D5016] font-black text-xl rounded-2xl shadow-[0_10px_20px_rgba(163,230,53,0.2)] transform hover:scale-[1.03] transition-all flex items-center gap-3 group"
            >
              <span>GARANTIR MEU ACESSO</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-white/50 text-[10px] uppercase font-bold tracking-tighter">
              Apenas R$ 37,00 — Pagamento Único
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UrgencyCTA;