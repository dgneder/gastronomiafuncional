"use client";

import React from "react";

const comparisons = [
  { item: "Consulta com fitoterapeuta clínico", cost: "R$ 200-500 por sessão" },
  { item: "Curso online de fitoterapia (40-60h)", cost: "R$ 497-1.200" },
  { item: "Livros técnicos de fitoterapia (3-5 volumes)", cost: "R$ 300-600" },
  { item: "Assinar bases científicas (PubMed, Cochrane)", cost: "R$ 150-300/mês" },
  { item: "Um dia perdido de trabalho por gripe", cost: "R$ 150-400+" },
  { item: "Uma ida à emergência por pneumonia", cost: "R$ 800-2.000+" },
];

const ValueComparison = () => {
  return (
    <section className="py-16 lg:py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 text-center mb-10">
          Quanto vale ter essa informação?
        </h2>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm mb-8">
          <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
            <div className="flex justify-between text-xs font-bold text-gray-500 uppercase tracking-wider">
              <span>O que você teria que fazer</span>
              <span>Custo</span>
            </div>
          </div>
          {comparisons.map((row, i) => (
            <div
              key={i}
              className={`flex justify-between items-center px-5 py-4 text-sm ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50"
              } border-b border-gray-100`}
            >
              <span className="text-gray-700 pr-4">{row.item}</span>
              <span className="text-gray-900 font-bold whitespace-nowrap">
                {row.cost}
              </span>
            </div>
          ))}
          <div className="flex justify-between items-center px-5 py-4 bg-[#2D5016]/5 border-t-2 border-[#4A7C29]">
            <span className="text-gray-900 font-extrabold text-sm">
              Total se fizesse tudo sozinho(a)
            </span>
            <span className="text-[#2D5016] font-black text-lg">
              R$ 2.000-5.000+
            </span>
          </div>
        </div>

        <div className="bg-[#4A7C29]/5 border-2 border-[#4A7C29]/20 rounded-2xl p-6 sm:p-8 text-center">
          <p className="text-[#2D5016] font-extrabold text-2xl sm:text-3xl mb-2">
            Você pode ter tudo isso por R$ 27,00
          </p>
          <p className="text-gray-600 text-base">
            — menos que uma pizza, menos que um remédio de farmácia, menos que um
            dia doente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueComparison;
