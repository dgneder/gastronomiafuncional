"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface BridgeSectionProps {
  onButtonClick: () => void;
}

const BridgeSection: React.FC<BridgeSectionProps> = ({ onButtonClick }) => {
  return (
    <section className="py-16 lg:py-20 bg-[#FBF7EF]">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E2A10] leading-tight mb-6">
          E se existissem alternativas naturais{" "}
          <span className="text-[#4A7C29]">com evidência científica?</span>
        </h2>

        <div className="space-y-4 text-gray-700 text-base leading-relaxed text-left">
          <p>
            Existem. A fitoterapia oferece plantas com mecanismos de ação
            comprovados para modular a inflamação e dar suporte ao manejo da
            dor — muitas delas avaliadas em ensaios clínicos randomizados e
            meta-análises publicadas na literatura científica internacional.
          </p>
          <p>
            O problema é que a maioria das informações disponíveis na internet
            mistura ciência com misticismo, doses com achismo, e tradição com
            promessas vagas.
          </p>
          <p>
            <strong className="text-[#1E2A10]">
              Este guia foi escrito para resolver isso.
            </strong>{" "}
            Um doutor em genética de plantas reuniu as 15 plantas com melhor
            respaldo científico para dor e inflamação — com dosagens baseadas
            nos estudos, formas de preparo corretas e protocolos organizados
            para cada tipo de dor.
          </p>
        </div>

        <button
          onClick={onButtonClick}
          className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-base rounded-full shadow-lg transition-all hover:scale-[1.02]"
        >
          QUERO CONHECER O GUIA <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default BridgeSection;
