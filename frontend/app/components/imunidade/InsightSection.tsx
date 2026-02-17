"use client";

import React from "react";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";

interface InsightSectionProps {
  onButtonClick: () => void;
}

const InsightSection: React.FC<InsightSectionProps> = ({ onButtonClick }) => {
  return (
    <section className="py-16 lg:py-20 px-4 bg-[#FBF7EF]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 text-center mb-8 leading-tight">
          O erro dos 10 minutos que desperdiça{" "}
          <span className="text-[#B8860B]">80% do seu alho</span>
        </h2>

        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#4A7C29]/10 shadow-sm mb-8">
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Quando você esmaga um dente de alho e joga direto na panela quente,
            o calor destrói a <strong>aliínase</strong> — a enzima responsável por
            converter a aliína em <strong>alicina</strong>, o principal composto
            antimicrobiano do alho.
          </p>

          <p className="text-red-600 font-bold text-lg mb-6">
            Resultado: você perde 80% do potencial terapêutico.
          </p>

          {/* Infográfico simplificado */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
            <div className="bg-gray-100 rounded-xl px-5 py-3 text-center">
              <p className="text-gray-500 text-xs uppercase font-bold">Matéria-prima</p>
              <p className="text-gray-900 font-bold text-lg">Aliína</p>
            </div>
            <div className="flex flex-col items-center text-[#4A7C29]">
              <FaArrowDown className="sm:hidden" />
              <FaArrowRight className="hidden sm:block" />
              <span className="text-[10px] font-bold bg-[#4A7C29]/10 px-2 py-0.5 rounded-full mt-1">
                aliínase + 10 min
              </span>
            </div>
            <div className="bg-[#4A7C29]/10 rounded-xl px-5 py-3 text-center border-2 border-[#4A7C29]/20">
              <p className="text-[#4A7C29] text-xs uppercase font-bold">Composto ativo</p>
              <p className="text-[#2D5016] font-bold text-lg">Alicina ✓</p>
            </div>
          </div>

          <p className="text-gray-700 text-base leading-relaxed">
            A solução? <strong>Esmague o alho e espere 10 minutos</strong> antes
            de cozinhar ou comer. Esses 10 minutos permitem a conversão
            completa. Depois disso, mesmo que você cozinhe, parte da alicina já
            foi formada.
          </p>
        </div>

        <p className="text-gray-600 italic text-center text-base sm:text-lg mb-8">
          Este é o tipo de detalhe prático que transforma fitoterapia genérica em
          fitoterapia que funciona. O guia está cheio deles — para cada uma das 15
          plantas.
        </p>

        <div className="text-center">
          <button
            onClick={onButtonClick}
            className="inline-flex items-center gap-2 py-4 px-8 bg-gradient-to-r from-[#4A7C29] to-[#2D5016] hover:brightness-110 text-white font-bold text-lg rounded-xl shadow-[0_10px_20px_rgba(45,80,22,0.3)] transition-all group"
          >
            QUERO APRENDER ESSES DETALHES
            <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InsightSection;
