"use client";

import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const forYou = [
  "Tem dificuldade para dormir e quer uma abordagem natural com base científica",
  "Sente ansiedade e quer reduzir sem depender de medicação",
  "Já tentou \"chás para dormir\" mas nunca funcionou (provavelmente estava preparando errado)",
  "Quer saber exatamente QUAL planta tomar, QUANTO, COMO preparar e POR QUANTO TEMPO",
  "Usa medicamento para dormir e gostaria de explorar alternativas (com acompanhamento médico)",
  "Se preocupa com contraindicações e quer um guia que alerta sobre riscos reais",
  "Prefere um protocolo pronto do que ter que montar sozinha",
];

const notForYou = [
  "Procura solução mágica que funciona na primeira noite sem esforço",
  "Quer substituir acompanhamento médico ou psicológico por um e-book",
  "Não está disposta a seguir um protocolo por pelo menos 14 dias antes de avaliar",
  "Busca conteúdo esotérico, místico ou baseado em \"energia\"",
  "Quer apenas uma lista genérica de \"chás para relaxar\"",
];

const TargetAudience = () => {
  return (
    <section className="py-16 lg:py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 text-center mb-12">
          Este guia é para você?
        </h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Para quem é */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-green-200 shadow-sm">
            <h3 className="text-xl font-bold text-green-700 mb-6 flex items-center gap-2">
              <FaCheck /> Este guia é para você se:
            </h3>
            <ul className="space-y-4">
              {forYou.map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-700 text-sm sm:text-base leading-relaxed">
                  <FaCheck className="text-green-500 flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Para quem NÃO é */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-red-200 shadow-sm">
            <h3 className="text-xl font-bold text-red-600 mb-6 flex items-center gap-2">
              <FaTimes /> Este guia NÃO é para você se:
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-700 text-sm sm:text-base leading-relaxed">
                  <FaTimes className="text-red-400 flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
