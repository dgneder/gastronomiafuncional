"use client";

import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const forYes = [
  "Quem convive com dores articulares, musculares ou crônicas",
  "Quem quer entender alternativas naturais com base científica",
  "Quem usa anti-inflamatórios com frequência e quer outras opções",
  "Quem sofre de enxaqueca e quer estratégias complementares",
  "Quem tem diagnóstico de artrite, artrose, fibromialgia ou tendinite",
  "Quem prefere informação técnica, sem misticismo",
  "Quem quer fazer suas próprias pomadas e compressas em casa",
];

const forNo = [
  "Quem busca cura ou tratamento médico — este é um guia educativo",
  "Quem quer receitas mágicas sem consistência de uso",
  "Quem não está disposto a consultar um profissional de saúde quando necessário",
  "Quem espera resultados sem nenhuma mudança de hábito",
];

const TargetAudience: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E2A10] leading-tight mb-3">
            Para quem é — e para quem não é
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Honestidade acima de tudo. Este guia é poderoso — mas não é para todo mundo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Para você */}
          <div className="bg-green-50 rounded-2xl p-6">
            <h3 className="font-extrabold text-[#2D5016] text-base mb-4 pb-3 border-b-2 border-[#4A7C29] flex items-center gap-2">
              <FaCheckCircle className="text-[#4A7C29]" />
              Este guia É para você se…
            </h3>
            <div className="space-y-3">
              {forYes.map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <FaCheckCircle className="text-[#4A7C29] shrink-0 mt-0.5 text-xs" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Não para você */}
          <div className="bg-red-50 rounded-2xl p-6">
            <h3 className="font-extrabold text-red-700 text-base mb-4 pb-3 border-b-2 border-red-400 flex items-center gap-2">
              <FaTimesCircle className="text-red-500" />
              Este guia NÃO é para você se…
            </h3>
            <div className="space-y-3">
              {forNo.map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <FaTimesCircle className="text-red-400 shrink-0 mt-0.5 text-xs" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 p-3 bg-white/80 rounded-xl border border-red-200">
              <p className="text-xs text-gray-500 italic">
                <strong className="text-gray-700">Nota importante:</strong> Este
                material tem caráter exclusivamente educativo e informativo. As
                plantas medicinais apresentadas são complementares ao
                acompanhamento profissional de saúde, não substitutos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
