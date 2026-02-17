"use client";

import React from "react";

const categories = [
  {
    label: "Nervinas Sedativas",
    color: "bg-green-100 border-green-300 text-green-800",
    dotColor: "bg-green-500",
    plants: [
      { name: "Camomila", stars: 3 },
      { name: "Passiflora", stars: 3 },
      { name: "Valeriana", stars: 3 },
      { name: "Mulungu", stars: 2 },
    ],
  },
  {
    label: "Ansiolíticas",
    color: "bg-amber-100 border-amber-300 text-amber-800",
    dotColor: "bg-amber-500",
    plants: [
      { name: "Melissa", stars: 3 },
      { name: "Capim-limão", stars: 2 },
      { name: "Lavanda", stars: 3 },
      { name: "Erva-de-São-João", stars: 3 },
    ],
  },
  {
    label: "Adaptógenas",
    color: "bg-blue-100 border-blue-300 text-blue-800",
    dotColor: "bg-blue-500",
    plants: [
      { name: "Ashwagandha", stars: 3 },
      { name: "Rhodiola", stars: 2 },
    ],
  },
  {
    label: "Complementares",
    color: "bg-purple-100 border-purple-300 text-purple-800",
    dotColor: "bg-purple-500",
    plants: [
      { name: "Lúpulo", stars: 2 },
      { name: "Magnólia", stars: 2 },
    ],
  },
];

const renderStars = (count: number) => {
  return Array.from({ length: 3 }, (_, i) => (
    <span key={i} className={i < count ? "text-[#B8860B]" : "text-gray-300"}>
      ★
    </span>
  ));
};

const PlantsGrid = () => {
  return (
    <section className="py-16 lg:py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            12 plantas. 9 sistemas cerebrais.{" "}
            <span className="text-[#4A7C29]">
              Resultados que uma planta sozinha não alcança.
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Cada ficha inclui: nome científico, compostos ativos, mecanismo de ação,
            estudos clínicos, dosagem exata, formas de preparo, combinações
            estratégicas e contraindicações completas.
          </p>
        </div>

        {/* Grid por categorias */}
        <div className="space-y-6 mb-10">
          {categories.map((cat, ci) => (
            <div key={ci}>
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-3 h-3 rounded-full ${cat.dotColor}`} />
                <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                  {cat.label}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {cat.plants.map((plant, pi) => (
                  <div
                    key={pi}
                    className={`${cat.color} border rounded-xl p-4 text-center hover:shadow-md transition-shadow`}
                  >
                    <p className="font-bold text-sm mb-1">{plant.name}</p>
                    <div className="text-xs">{renderStars(plant.stars)}</div>
                    <p className="text-[10px] mt-1 opacity-60">Evidência científica</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Caixa de destaque */}
        <div className="bg-[#F0F7F0] border-2 border-[#4A7C29]/20 rounded-2xl p-6 sm:p-8">
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            <span className="text-[#4A7C29] font-bold text-lg mr-2">💡</span>
            <strong>Por que 12 e não 30?</strong> Porque para sono e ansiedade,
            você não precisa de 30 opções — precisa das 12 certas, combinadas
            estrategicamente. Cada planta foi selecionada por três critérios:
            evidência científica sólida, acessibilidade no Brasil, e papel único
            em pelo menos um protocolo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlantsGrid;
