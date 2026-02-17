"use client";

import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const forYes = [
  "Quer cultivar plantas medicinais mas não sabe por onde começar",
  "Já tentou plantar e \"matou a planta\" — quer entender o que errou",
  "Mora em apartamento e acha que não tem espaço (5 plantas cabem em menos de 1 m²)",
  "Quer colher ervas frescas para chás sem depender de supermercado",
  "Prefere informação com base científica, não achismo de blog",
  "Quer economizar — gasta com ervas secas de qualidade duvidosa",
  "Quer ensinar seus filhos de onde vem o remédio natural",
  "Gosta de entender POR QUE as coisas funcionam, não apenas \"plante isso\"",
];

const forNo = [
  "Busca solução mágica sem nenhum esforço (precisará regar pelo menos 1x/semana)",
  "Procura receitas terapêuticas com dosagem (isso está no Fitoterapia Essencial)",
  "Espera conteúdo superficial estilo blog genérico (são 150+ páginas — é completo de verdade)",
  "Não valoriza informação científica e prefere dicas aleatórias",
  "Quer substituir tratamento médico por plantas (não é a proposta)",
];

const TargetAudience: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 text-center mb-10 leading-tight">
          Este guia é para você se...
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Para quem é */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#2E7D32] shadow-sm">
            <h3 className="font-black text-[#2E7D32] text-lg mb-6 flex items-center gap-2">
              <FaCheckCircle /> Para quem é
            </h3>
            <div className="space-y-4">
              {forYes.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#2E7D32] flex-shrink-0 mt-0.5 text-sm" />
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Para quem NÃO é */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
            <h3 className="font-black text-gray-500 text-lg mb-6 flex items-center gap-2">
              <FaTimesCircle /> Para quem NÃO é
            </h3>
            <div className="space-y-4">
              {forNo.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <FaTimesCircle className="text-gray-400 flex-shrink-0 mt-0.5 text-sm" />
                  <span className="text-gray-600 text-sm leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
