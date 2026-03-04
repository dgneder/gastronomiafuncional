"use client";

import React, { useState } from "react";

type Category = "Analgésico" | "Anti-inflamatório" | "Neurológico" | "Circulatório" | "Tônico";

interface Plant {
  name: string;
  latin: string;
  stars: number;
  use: string;
  category: Category;
}

const plants: Plant[] = [
  { name: "Cúrcuma", latin: "Curcuma longa", stars: 5, use: "Inflamação sistêmica", category: "Anti-inflamatório" },
  { name: "Gengibre", latin: "Zingiber officinale", stars: 5, use: "Dor articular e muscular", category: "Analgésico" },
  { name: "Boswellia", latin: "Boswellia serrata", stars: 5, use: "Artrite e artrose", category: "Anti-inflamatório" },
  { name: "Arnica", latin: "Arnica montana", stars: 5, use: "Contusões e hematomas", category: "Anti-inflamatório" },
  { name: "Salgueiro Branco", latin: "Salix alba", stars: 4, use: "Lombalgia e febre", category: "Analgésico" },
  { name: "Lavanda", latin: "Lavandula angustifolia", stars: 4, use: "Enxaqueca e tensão", category: "Neurológico" },
  { name: "Ashwagandha", latin: "Withania somnifera", stars: 4, use: "Inflamação crônica", category: "Tônico" },
  { name: "Capsaicina", latin: "Capsicum annuum", stars: 4, use: "Dor neuropática", category: "Analgésico" },
  { name: "Urtiga", latin: "Urtica dioica", stars: 4, use: "Artrite reumatoide", category: "Anti-inflamatório" },
  { name: "Ginkgo biloba", latin: "Ginkgo biloba", stars: 4, use: "Circulação e dor vascular", category: "Circulatório" },
  { name: "Camomila", latin: "Matricaria chamomilla", stars: 3, use: "Espasmos e dor leve", category: "Analgésico" },
  { name: "Alecrim", latin: "Rosmarinus officinalis", stars: 3, use: "Dor muscular tópica", category: "Anti-inflamatório" },
  { name: "Hortelã", latin: "Mentha × piperita", stars: 4, use: "Enxaqueca (uso tópico)", category: "Neurológico" },
  { name: "Calêndula", latin: "Calendula officinalis", stars: 3, use: "Inflamação cutânea", category: "Anti-inflamatório" },
  { name: "Própolis", latin: "Propolis resinosa", stars: 3, use: "Inflamação e imunidade", category: "Tônico" },
];

const catColors: Record<Category, string> = {
  "Analgésico": "bg-amber-100 text-amber-800",
  "Anti-inflamatório": "bg-blue-100 text-blue-800",
  "Neurológico": "bg-purple-100 text-purple-800",
  "Circulatório": "bg-green-100 text-green-800",
  "Tônico": "bg-rose-100 text-rose-800",
};

const PlantsSection: React.FC = () => {
  const [filter, setFilter] = useState<Category | "Todas">("Todas");

  const categories: (Category | "Todas")[] = [
    "Todas",
    "Analgésico",
    "Anti-inflamatório",
    "Neurológico",
    "Circulatório",
    "Tônico",
  ];

  const filtered = filter === "Todas" ? plants : plants.filter((p) => p.category === filter);

  return (
    <section className="py-16 lg:py-20 bg-[#FBF7EF]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-[#D97706] text-sm font-bold uppercase tracking-widest mb-2">
            O Que Você Encontra no Guia
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E2A10] leading-tight mb-3">
            As 15 plantas com melhor{" "}
            <span className="text-[#4A7C29]">respaldo científico</span>
          </h2>
          <p className="text-gray-600 text-base max-w-xl mx-auto">
            Cada planta vem com ficha completa: mecanismo de ação, dosagem
            validada, modo de preparo, contraindicações e nível de evidência.
          </p>
        </div>

        {/* Filtro */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                filter === cat
                  ? "bg-[#4A7C29] text-white border-[#4A7C29]"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#4A7C29] hover:text-[#4A7C29]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de plantas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {filtered.map(({ name, latin, stars, use, category }) => (
            <div
              key={name}
              className="bg-white rounded-xl p-3.5 border border-gray-100 hover:border-[#4A7C29] hover:-translate-y-1 hover:shadow-md transition-all duration-200"
            >
              <p className="font-bold text-[#1E2A10] text-sm leading-tight">{name}</p>
              <p className="text-[10px] italic text-gray-400 mt-0.5">{latin}</p>
              <p className="text-[#D97706] text-xs mt-1.5">
                {"★".repeat(stars)}
                {"☆".repeat(5 - stars)}
              </p>
              <p className="text-[#4A7C29] text-[11px] font-semibold mt-1 leading-tight">
                {use}
              </p>
              <span
                className={`inline-block text-[9px] px-2 py-0.5 rounded-full font-bold mt-2 ${catColors[category]}`}
              >
                {category}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          ★ = nível de evidência científica (maior = mais estudos publicados)
        </p>
      </div>
    </section>
  );
};

export default PlantsSection;
