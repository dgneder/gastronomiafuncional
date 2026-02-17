"use client";

import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const forWhom = [
  "Você quer proteger sua família com abordagens naturais, mas COM base científica",
  "Está cansado(a) de receitas de internet sem dosagem, sem contraindicação e sem referência",
  "Toma medicamentos e precisa saber quais plantas são seguras para combinar",
  "Quer saber exatamente o que comprar, como preparar e quanto tomar",
  "Tem filhos e quer alternativas naturais seguras com dosagens pediátricas",
  "Busca prevenção inteligente — não esperar ficar doente para agir",
  "Valoriza ciência acima de modismos e \"dicas de influencer\"",
];

const notFor = [
  'Quem busca "cura milagrosa" — este guia é honesto, não mágico',
  "Quem acredita que plantas podem substituir vacinas — NÃO podem",
  "Quem quer diagnóstico ou tratamento médico — este guia é educativo",
  'Quem prefere misticismo a ciência — aqui há mecanismos bioquímicos, não "energia"',
  "Quem espera resultados sem seguir os protocolos",
];

const TargetAudience = () => {
  return (
    <section className="py-16 lg:py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 text-center mb-12">
          Este guia é para você?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Para quem é */}
          <div className="bg-[#4A7C29]/5 border border-[#4A7C29]/15 rounded-2xl p-6 sm:p-8">
            <h3 className="text-[#2D5016] font-extrabold text-lg mb-6 flex items-center gap-2">
              <FaCheckCircle /> Este guia É para você se...
            </h3>
            <ul className="space-y-4">
              {forWhom.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <FaCheckCircle className="text-[#4A7C29] mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Para quem não é */}
          <div className="bg-red-50 border border-red-100 rounded-2xl p-6 sm:p-8">
            <h3 className="text-red-700 font-extrabold text-lg mb-6 flex items-center gap-2">
              <FaTimesCircle /> Este guia NÃO é para você se...
            </h3>
            <ul className="space-y-4">
              {notFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <FaTimesCircle className="text-red-400 mt-0.5 flex-shrink-0" />
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
