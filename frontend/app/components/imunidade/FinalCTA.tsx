"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface FinalCTAProps {
  onButtonClick: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onButtonClick }) => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
          Imunidade com Plantas Medicinais
        </h2>
        <p className="text-gray-500 text-sm mb-8">
          15 plantas · 5 protocolos · Dosagens reais · Lista de compras ·
          Segurança em cada ficha
        </p>

        <button
          onClick={onButtonClick}
          className="inline-flex items-center gap-2 py-5 px-10 bg-gradient-to-r from-[#4A7C29] to-[#2D5016] hover:brightness-110 text-white font-black text-lg sm:text-xl rounded-xl shadow-[0_10px_20px_rgba(45,80,22,0.3)] transition-all group"
        >
          🛡️ QUERO MEU GUIA AGORA — R$ 27,00
          <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
        </button>
        <p className="text-gray-400 text-xs mt-3">
          Acesso imediato · Garantia 7 dias · Pagamento seguro
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
