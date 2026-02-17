"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface ProtocolsSectionProps {
  onButtonClick: () => void;
}

const protocols = [
  {
    num: "P1",
    name: "Sono Tranquilo",
    profile: "insônia leve",
    color: "border-green-400 bg-green-50",
    accent: "text-green-700",
    details: "3 plantas + escalda-pés. Avaliação em 14 dias. Custo: ~R$25-45/mês.",
  },
  {
    num: "P2",
    name: "Sono Profundo",
    profile: "insônia severa",
    color: "border-blue-400 bg-blue-50",
    accent: "text-blue-700",
    details: "5 plantas + aromaterapia. 21 dias. O mais potente do guia.",
  },
  {
    num: "P3",
    name: "Mente Calma",
    profile: "ansiedade diurna",
    color: "border-amber-400 bg-amber-50",
    accent: "text-amber-700",
    details: "3 plantas. Calma SEM sonolência para quem precisa trabalhar e funcionar.",
  },
  {
    num: "P4",
    name: "Equilíbrio Completo",
    profile: "ansiedade + insônia",
    color: "border-purple-400 bg-purple-50",
    accent: "text-purple-700",
    details: "7 plantas em sistema dia-noite. O protocolo de referência.",
  },
  {
    num: "P5",
    name: "Transição Consciente",
    profile: "desmame medicamentoso",
    color: "border-red-400 bg-red-50",
    accent: "text-red-700",
    details: "3 fases para quem quer reduzir medicamentos COM acompanhamento médico.",
  },
];

const ProtocolsSection: React.FC<ProtocolsSectionProps> = ({ onButtonClick }) => {
  return (
    <section className="py-16 lg:py-20 px-4 bg-gradient-to-b from-[#F0F7F0] to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Não sabe por onde começar?{" "}
            <span className="text-[#4A7C29]">Eu montei para você.</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            5 protocolos prontos — escolha o seu perfil e siga o cronograma.
          </p>
        </div>

        {/* Cards dos protocolos */}
        <div className="space-y-4 mb-10">
          {protocols.map((p, i) => (
            <div
              key={i}
              className={`${p.color} border-2 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 hover:shadow-md transition-shadow`}
            >
              <div className="flex items-center gap-3 sm:w-1/3">
                <span className={`${p.accent} font-black text-lg`}>{p.num}</span>
                <div>
                  <h3 className={`${p.accent} font-bold text-base sm:text-lg`}>{p.name}</h3>
                  <span className="text-xs text-gray-500 italic">{p.profile}</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed sm:w-2/3">
                {p.details}
              </p>
            </div>
          ))}
        </div>

        {/* Caixa informativa */}
        <div className="bg-[#FFF8E1] border border-[#B8860B]/20 rounded-2xl p-6 mb-10 text-center">
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            <span className="text-lg mr-1">📋</span>
            Cada protocolo inclui: cronograma horário por horário, doses exatas,
            tempo de avaliação, ajustes possíveis e custo mensal estimado.
          </p>
        </div>

        {/* CTA intermediário */}
        <div className="text-center">
          <button
            onClick={onButtonClick}
            className="py-4 px-8 bg-gradient-to-r from-[#4A7C29] to-[#2D5016] text-white font-bold text-lg rounded-xl shadow-lg hover:brightness-110 transition-all inline-flex items-center gap-2 group"
          >
            QUERO ESCOLHER MEU PROTOCOLO
            <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProtocolsSection;
