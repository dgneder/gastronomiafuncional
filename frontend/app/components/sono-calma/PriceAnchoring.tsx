"use client";

import React from "react";

const anchors = [
  {
    emoji: "💸",
    title: "Uma consulta com fitoterapeuta",
    price: "R$200-400",
    detail: "E você sai com uma receita para 1 problema.",
  },
  {
    emoji: "💸",
    title: "Comprar plantas por tentativa e erro",
    price: "R$150-300",
    detail: "Testando sem saber dose, preparo ou combinação.",
  },
  {
    emoji: "💸",
    title: "Perda de produtividade por noites mal dormidas",
    price: "Incalculável",
    detail: "Estudo da RAND Corporation estima que insônia impacta significativamente a economia de um país.",
  },
];

const PriceAnchoring = () => {
  return (
    <section className="py-16 lg:py-20 px-4 bg-gradient-to-b from-white to-[#2D5016]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 text-center mb-12">
          Quanto vale{" "}
          <span className="text-[#B8860B]">dormir bem?</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {anchors.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg text-center">
              <span className="text-4xl mb-4 block">{item.emoji}</span>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
              <p className="text-2xl font-black text-[#B8860B] mb-2">{item.price}</p>
              <p className="text-gray-500 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Transição */}
        <p className="text-center text-white text-base sm:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
          Este guia reúne 20+ estudos clínicos, 12 plantas completas, 5
          protocolos prontos, guia de preparação e lista de compras — por:
        </p>
      </div>
    </section>
  );
};

export default PriceAnchoring;
