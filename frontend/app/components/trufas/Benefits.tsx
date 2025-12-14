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
    title: "Energia que Impulsiona",
    description: "Trufas com cacau, maca e guaraná para dar aquele boost no seu dia.",
    image: "/trufas/trufas_energia_up.png",
  },
  {
    title: "Controle de Peso Inteligente",
    description: "Baixo índice glicêmico e alta saciedade — doce sem culpa.",
    image: "/trufas/trufas_peso.webp",
  },
  {
    title: "Imunidade Blindada",
    description: "Ingredientes como própolis, gengibre e vitamina C que fortalecem.",
    image: "/trufas/trufas_imunidade.webp",
  },
  {
    title: "Beleza de Dentro pra Fora",
    description: "Colágeno, biotina e antioxidantes para pele, cabelos e unhas.",
    image: "/trufas/trufas_colageno.webp",
  },
  {
    title: "Intestino Equilibrado",
    description: "Fibras prebióticas e probióticos que cuidam da sua digestão.",
    image: "/trufas/trufas_intestino.webp",
  },
  {
    title: "Momentos que Conectam",
    description: "Trufas gourmet perfeitas para presentear ou compartilhar em família.",
    image: "/trufas/trufas_conectam.webp",
  },
];

const Benefits: React.FC = () => {
  return (
    <section
      data-aos="fade-up"
      id="benefits"
      className="py-20 px-6 lg:px-12 bg-gradient-to-b from-amber-50 via-orange-50 to-white text-center"
    >
      <div className="max-w-6xl mx-auto">
        {/* Título e Subtítulo */}
        <h2 className="text-3xl lg:text-4xl font-bold text-amber-700 mb-6">
          Funcionalidade Gourmet em Cada Mordida
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          Nossas trufas foram criadas para ir além do sabor. Elas cuidam da sua saúde com ingredientes funcionais que você sente no corpo e vê nos resultados.
        </p>

        {/* Grid de Benefícios */}
        <div className="grid gap-10 lg:gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl border border-amber-200 hover:border-amber-500 transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
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
                <h3 className="text-xl font-semibold text-amber-700 group-hover:text-amber-800 transition-colors">
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