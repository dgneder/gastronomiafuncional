"use client";

import Image from "next/image";
import React from "react";

const recipes = [
  {
    module: "Módulo A",
    title: "Pães Rápidos",
    subtitle: "10 a 15 minutos, sem fermentação",
    count: "5 receitas",
    color: "#C4622D",
    image: "/panificacao/rec_rapidos.png",
    highlight: "Pão de Frigideira em 10 min",
  },
  {
    module: "Módulo B",
    title: "Pães do Dia a Dia",
    subtitle: "Com fermento biológico",
    count: "6 receitas",
    color: "#8B5A3C",
    image: "/panificacao/rec_diadia.png",
    highlight: "Pão de Forma Funcional",
  },
  {
    module: "Módulo C",
    title: "Pães Artesanais",
    subtitle: "Com levain e fermentação lenta",
    count: "5 receitas",
    color: "#6B3A2A",
    image: "/panificacao/rec_artesanais.png",
    highlight: "Sourdough Funcional 48h",
  },
  {
    module: "Módulo D",
    title: "Pães Especiais",
    subtitle: "Formulados por necessidade",
    count: "6 receitas",
    color: "#5B7B6D",
    image: "/panificacao/rec_especiais.png",
    highlight: "Cetogênico · Renal · Anti-inflamatório",
  },
  {
    module: "Módulo E",
    title: "Além do Pão",
    subtitle: "Pizza, crackers, grissini e mais",
    count: "5 receitas",
    color: "#D4A04A",
    image: "/panificacao/rec_alemdopao.png",
    highlight: "Pizza de Longa Fermentação",
  },
];

const RecipeShowcase: React.FC = () => {
  return (
    <section
      className="py-20 px-6 lg:px-12"
      style={{ background: "linear-gradient(180deg, #FAF3E8 0%, #F5E6CC 50%, #FAF3E8 100%)" }}
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest font-semibold mb-3" style={{ color: "#C4622D" }}>
            27 receitas em 5 módulos
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-stone-800">
            De pão em <span style={{ color: "#6B3A2A" }}>10 minutos</span> a{" "}
            <span style={{ color: "#6B3A2A" }}>sourdough de 48 horas</span>
          </h2>
          <p className="mt-4 text-lg text-stone-500 max-w-2xl mx-auto">
            Cada módulo foi pensado para um nível de complexidade e um momento diferente da sua jornada.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((rec, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-stone-100 hover:-translate-y-1"
            >
              {/* Ajuste feito aqui: w-full e aspect-square no lugar de h-48 */}
              <div className="relative w-full aspect-square overflow-hidden bg-stone-100">
                <Image
                  src={rec.image}
                  alt={rec.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm"
                    style={{ backgroundColor: rec.color }}
                  >
                    {rec.module}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white/90 text-xs font-medium mb-1 drop-shadow-md">{rec.count}</p>
                  <p className="text-white font-bold text-xl drop-shadow-md leading-tight">{rec.title}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-stone-500 text-sm mb-3">{rec.subtitle}</p>
                <div className="flex items-center gap-2 text-sm font-medium" style={{ color: rec.color }}>
                  <span>⭐</span>
                  <span>{rec.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipeShowcase;