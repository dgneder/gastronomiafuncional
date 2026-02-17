"use client";

import React from "react";
import { FaShieldAlt } from "react-icons/fa";

const GuaranteeSection = () => {
  return (
    <section className="py-16 lg:py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        {/* Selo de garantia */}
        <div className="relative inline-block mb-8">
          <div className="w-28 h-28 bg-gradient-to-br from-[#B8860B] to-[#9a7209] rounded-full flex flex-col items-center justify-center shadow-xl border-4 border-white">
            <FaShieldAlt className="text-white text-xl mb-1" />
            <span className="text-white font-black text-lg leading-none">7</span>
            <span className="text-white text-[8px] font-bold uppercase tracking-wider">DIAS</span>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
          Garantia incondicional de 7 dias
        </h2>

        <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          <p>
            Você tem 7 dias para ler o guia inteiro, testar o protocolo que
            escolher, e decidir se faz sentido para você. Se por qualquer
            motivo não ficar satisfeita — me mande um email e eu devolvo 100%
            do valor. Sem perguntas, sem burocracia.
          </p>
          <p>
            Eu posso oferecer essa garantia porque confio no conteúdo. São
            anos de estudo condensados em 78 páginas. Quem lê, implementa. E
            quem implementa, dorme melhor.
          </p>
          <p className="text-[#2D5016] font-bold italic text-xl">
            O risco é zero para você. Todo o risco é meu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
