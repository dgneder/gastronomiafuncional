"use client";

import React from "react";

const dataCards = [
  {
    emoji: "📊",
    stat: "72 milhões",
    text: "de brasileiros sofrem com distúrbios do sono (IBGE/Fiocruz). Você não está sozinha.",
  },
  {
    emoji: "🔬",
    stat: "Meta-análise",
    text: "com 5 ensaios clínicos indicou que ashwagandha pode reduzir cortisol em 23-30% em 8 semanas (Lopresti, 2019).",
  },
  {
    emoji: "💊",
    stat: "2º maior",
    text: "consumidor de ansiolíticos do mundo. Clonazepam está entre os 5 medicamentos mais vendidos no país.",
  },
  {
    emoji: "🌿",
    stat: "OMS reconhece",
    text: "a fitoterapia como prática integrativa de saúde. O SUS incorporou plantas medicinais desde 2006.",
  },
];

const SocialProof = () => {
  return (
    <section className="py-16 lg:py-20 px-4 bg-[#F0F7F0]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            Não é opinião.{" "}
            <span className="text-[#4A7C29]">É ciência publicada.</span>
          </h2>
        </div>

        {/* Cards de dados */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {dataCards.map((card, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 sm:p-8 border border-[#4A7C29]/10 shadow-sm">
              <span className="text-3xl mb-4 block">{card.emoji}</span>
              <p className="text-2xl font-black text-[#2D5016] mb-2">{card.stat}</p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>

        {/* Espaço para depoimentos futuros */}
        {/* TODO: Adicionar depoimentos reais quando coletados */}
        {/* 
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-200" />
                <span className="font-bold text-gray-900">{t.name}</span>
              </div>
              <p className="text-gray-600 text-sm italic">&quot;{t.text}&quot;</p>
            </div>
          ))}
        </div>
        */}

        {/* Disclaimer compliance */}
        <p className="text-center text-xs text-gray-500 mt-6">
          * Dados de fontes públicas. Resultados individuais podem variar. Este
          guia não substitui acompanhamento médico.
        </p>
      </div>
    </section>
  );
};

export default SocialProof;
