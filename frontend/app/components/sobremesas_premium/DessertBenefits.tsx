"use client";

import Image from "next/image";
import React from "react";

const DessertBenefits: React.FC = () => {
  return (
    <section
      data-aos="fade-up"
      className="py-20 px-6 lg:px-12 bg-gradient-to-b from-rose-100 via-pink-100 to-white text-center lg:text-left"
    >
      <div className="max-w-6xl mx-auto">
        {/* Título e Introdução */}
        <h2 className="text-3xl lg:text-4xl font-extrabold text-pink-700 mb-6">
          O Que Torna Nossas Sobremesas Verdadeiramente Funcionais
        </h2>
        <p className="text-lg text-gray-700 mb-12 leading-relaxed max-w-3xl">
          Mais do que doces bonitos, essas receitas foram pensadas para cuidar da sua saúde, encantar seus sentidos e transformar sua rotina com praticidade.
        </p>

        {/* Imagem em Destaque */}
        <div className="mb-12">
          <Image
            src="/sobremesas/destaque-sobremesas.png"
            alt="Sobremesas funcionais variadas e atraentes"
            width={1200}
            height={500}
            className="rounded-xl shadow-xl w-full h-auto object-cover border border-pink-300"
          />
        </div>

        {/* Grid de Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Saudáveis e Deliciosas",
              description:
                "Sabores que surpreendem o paladar com ingredientes que realmente fazem bem.",
              image: "/sobremesas/saudaveis-deliciosas.png",
            },
            {
              title: "Ricas em Fibras e Nutrientes",
              description:
                "Contribuem com a saúde intestinal, imunidade e saciedade de forma natural.",
              image: "/sobremesas/fibras-nutrientes.png",
            },
            {
              title: "Beleza de Dentro para Fora",
              description:
                "Feitas com antioxidantes e vitaminas que ajudam a cuidar da sua pele e cabelo.",
              image: "/sobremesas/beleza-pele.png",
            },
            {
              title: "Baixo Índice Glicêmico",
              description:
                "Ajuda a manter os níveis de energia equilibrados e evitar picos de açúcar.",
              image: "/sobremesas/baixo-glicemico.png",
            },
            {
              title: "Fáceis e Rápidas",
              description:
                "Preparos simples e acessíveis mesmo para quem tem pouco tempo na cozinha.",
              image: "/sobremesas/facil-preparar.png",
            },
            {
              title: "Visualmente Atraentes",
              description:
                "Estética pensada para impressionar — sua sobremesa pode ser arte e saúde ao mesmo tempo.",
              image: "/sobremesas/visualmente-bonitas.png",
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
              <h3 className="text-xl font-semibold text-pink-700">
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

export default DessertBenefits;
