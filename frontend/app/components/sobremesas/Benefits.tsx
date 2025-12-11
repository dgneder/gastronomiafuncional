"use client";

import React from "react";
import Image from "next/image";

interface Benefit {
  title: string;
  description: string;
  image: string;
}

const benefits: Benefit[] = [
  {
    title: "Mais Energia com Prazer",
    description: "Receitas leves que sustentam, sem pesar — perfeitas para a rotina.",
    image: "/sobremesas/sobremesa-energia.png",
  },
  {
    title: "Controle Natural de Peso",
    description: "Baixo índice glicêmico, alta saciedade — equilíbrio real no dia a dia.",
    image: "/sobremesas/sobremesa-peso.png",
  },
  {
    title: "Imunidade Reforçada",
    description: "Ingredientes naturais que fortalecem suas defesas de forma gostosa.",
    image: "/sobremesas/sobremesa-imunidade.png",
  },
  {
    title: "Beleza de Dentro pra Fora",
    description: "Pele, unhas e cabelos nutridos com cada colherada funcional.",
    image: "/sobremesas/sobremesa-beleza.png",
  },
  {
    title: "Intestino em Harmonia",
    description: "Fibras que cuidam da digestão e ajudam a manter o bem-estar geral.",
    image: "/sobremesas/sobremesa-intestino.png",
  },
  {
    title: "Saúde que Aproxima",
    description: "Delícias saudáveis que conectam gerações — da infância à maturidade.",
    image: "/sobremesas/sobremesa-familia.png",
  },
];

const Benefits: React.FC = () => {
  return (
    <section
      data-aos="fade-up"
      id="benefits"
      className="py-20 px-6 lg:px-12 bg-gradient-to-b from-rose-100 via-pink-50 to-white text-center"
    >
      <div className="max-w-6xl mx-auto">
        {/* Título e Subtítulo */}
        <h2 className="text-3xl lg:text-4xl font-bold text-pink-700 mb-6">
          Funcionalidade de Verdade em Cada Colherada
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          Nossas sobremesas foram pensadas para ir além do sabor. Elas cuidam da sua saúde com praticidade e resultados que você sente no corpo e vê no espelho.
        </p>

        {/* Grid de Benefícios */}
        <div className="grid gap-10 lg:gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl border border-pink-200 hover:border-pink-500 transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Imagem */}
              <div className="relative group">
                <Image
                  src={benefit.image}
                  alt={`Imagem ilustrativa de ${benefit.title}`}
                  width={400}
                  height={300}
                  className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              </div>

              {/* Texto */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-pink-700 group-hover:text-pink-800 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
