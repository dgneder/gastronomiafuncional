"use client";

import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const forYes = [
  "Já tem óleos essenciais em casa mas não sabe usar com confiança",
  "Quer receitas prontas com dosagem exata — sem adivinhação",
  "Tem filhos pequenos, pets ou toma medicamentos e se preocupa com segurança",
  "Se frustra com conteúdo esotérico e quer entender a ciência real",
  "Quer saber se o óleo que comprou é puro ou falsificado",
  "É profissional de saúde ou terapeuta e quer base científica sólida",
  "Quer autonomia para cuidar do bem-estar da família com segurança",
  "Gosta de entender POR QUE as coisas funcionam, não apenas \"use isso\"",
];

const forNo = [
  "Busca promessa de cura ou substituição de tratamento médico",
  "Espera conteúdo sobre chakras, vibrações ou energia cósmica",
  "Quer apenas fotos bonitas de difusor sem aprofundamento",
  "Não tem paciência para ler (são 160+ páginas — é completo de verdade)",
  "Procura receitas de ingestão de óleos essenciais",
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
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#4A7C29] shadow-sm">
            <h3 className="font-black text-[#4A7C29] text-lg mb-6 flex items-center gap-2">
              <FaCheckCircle /> Para quem é
            </h3>
            <div className="space-y-4">
              {forYes.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#4A7C29] flex-shrink-0 mt-0.5 text-sm" />
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
