"use client";

import Image from "next/image";
import React from "react";

const TrufaBenefits: React.FC = () => {
  return (
    <section
      data-aos="fade-up"
      className="py-20 px-6 lg:px-12 bg-gradient-to-b from-amber-50 via-orange-100 to-white text-center lg:text-left"
    >
      <div className="max-w-6xl mx-auto">
        {/* Título e Introdução */}
        <h2 className="text-3xl lg:text-4xl font-extrabold text-amber-700 mb-6">
          O Que Torna Nossas Trufas Verdadeiramente Funcionais
        </h2>
        <p className="text-lg text-gray-700 mb-12 leading-relaxed max-w-3xl">
          Mais do que docinhos bonitos, essas receitas foram desenvolvidas com ingredientes funcionais que oferecem benefícios reais para sua saúde — sem abrir mão do sabor gourmet.
        </p>

        {/* Imagem em Destaque */}
        <div className="mb-12">
          <Image
            src="/trufas/destaque_up.png"
            alt="Trufas funcionais variadas e atraentes"
            width={1200}
            height={500}
            className="rounded-xl shadow-xl w-full h-auto object-cover border border-amber-300"
          />
        </div>

        {/* Grid de Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "100% Plant-Based",
              description:
                "Receitas veganas que respeitam os animais e o planeta sem perder o sabor.",
              image: "/trufas/trufas_plant_based.png",
            },
            {
              title: "Sem Açúcar Refinado",
              description:
                "Adoçadas naturalmente com tâmaras, xilitol, eritritol e frutas.",
              image: "/sobremesas/fibras-nutrientes.png",
            },
            {
              title: "Ricas em Antioxidantes",
              description:
                "Cacau, açaí, matcha e frutas vermelhas que combatem o envelhecimento.",
              image: "/trufas/fudge_antioxidante.png",
            },
            {
              title: "Baixo Índice Glicêmico",
              description:
                "Energia estável sem picos de açúcar — perfeito para diabéticos e low carb.",
              image: "/trufas/trufa_baixo_indice.png",
            },
            {
              title: "Ingredientes Funcionais",
              description:
                "Cada trufa contém princípios ativos com benefícios comprovados.",
              image: "/trufas/trufas_funcionais.png",
            },
            {
              title: "Visual Instagramável",
              description:
                "Estética gourmet pensada para impressionar — perfeitas para vender ou presentear.",
              image: "/trufas/trufa_instagramavel.png",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <Image
                src={benefit.image}
                alt={benefit.title}
                width={300}
                height={300}
                className="rounded-lg w-full h-auto object-cover"
              />
              <h3 className="text-xl font-semibold text-amber-700">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrufaBenefits;