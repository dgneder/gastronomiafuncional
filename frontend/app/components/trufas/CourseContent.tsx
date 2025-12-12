"use client";

import React from "react";
import Image from "next/image";
import { FaBook, FaList, FaGift, FaLeaf } from "react-icons/fa";

interface Module {
  title: string;
  description: string;
  image: string;
}

const modules: Module[] = [
  {
    title: "⚡ Energia e Pré-Treino",
    description: "8 receitas energizantes com cacau, maca e guaraná para potencializar seu treino.",
    image: "/sobremesas/sobremesa-energia-02.png",
  },
  {
    title: "💪 Recuperação Pós-Treino",
    description: "8 trufas proteicas com whey, colágeno e aminoácidos para regeneração muscular.",
    image: "/sobremesas/sobremesa-pos-treino.png",
  },
  {
    title: "🧬 Saúde Intestinal e Digestiva",
    description: "8 receitas com probióticos, fibras e ingredientes que cuidam do seu intestino.",
    image: "/sobremesas/sobremesa-intestino.png",
  },
  {
    title: "🧘 Relaxamento e Sono",
    description: "8 trufas calmantes com camomila, maracujá e magnésio para noites tranquilas.",
    image: "/sobremesas/sobremesa-relax.png",
  },
  {
    title: "🧠 Foco e Função Cognitiva",
    description: "8 receitas nootrópicas com lion's mane, ômega-3 e cacau para clareza mental.",
    image: "/sobremesas/sobremesa-mente.png",
  },
  {
    title: "🌺 Beleza e Colágeno",
    description: "8 trufas com colágeno, biotina e antioxidantes para pele, cabelos e unhas.",
    image: "/sobremesas/sobremesa-beleza.png",
  },
  {
    title: "🛡️ Imunidade e Defesa",
    description: "8 receitas com própolis, gengibre e vitamina C para fortalecer suas defesas.",
    image: "/sobremesas/sobremesa-imunidade.png",
  },
  {
    title: "🔥 Anti-Inflamatório e Antioxidante",
    description: "8 trufas com cúrcuma, açaí e resveratrol para combater inflamações.",
    image: "/sobremesas/sobremesa-pele-intestino-02.png",
  },
  {
    title: "⚖️ Emagrecimento e Saciedade",
    description: "8 receitas termogênicas e saciantes com fibras e baixo índice glicêmico.",
    image: "/sobremesas/sobremesa-peso.png",
  },
  {
    title: "🌸 Hormonal e Feminino",
    description: "8 trufas com maca, vitex e magnésio para equilíbrio hormonal feminino.",
    image: "/sobremesas/sobremesa-detox.png",
  },
];

const CourseContent: React.FC = () => {
  return (
    <section
      data-aos="fade-up"
      id="coursecontent"
      className="py-20 px-6 lg:px-12 bg-gradient-to-r from-amber-50 via-orange-100 to-amber-50 text-center"
    >
      <div className="max-w-6xl mx-auto">
        {/* Título e Introdução */}
        <h2 className="text-3xl lg:text-4xl font-extrabold text-amber-700 mb-6">
          100 Receitas em 10 Módulos Funcionais
        </h2>
        <p className="text-lg text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
          Cada módulo foi pensado para um objetivo específico de saúde — escolha o que faz sentido para você ou domine todos!
        </p>

        {/* Módulos */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl border border-amber-200 hover:border-amber-400 transition duration-300 overflow-hidden transform hover:-translate-y-1"
            >
              <div className="relative">
                <Image
                  src={module.image}
                  alt={`Imagem de ${module.title}`}
                  width={400}
                  height={300}
                  className="object-cover w-full h-48"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-40 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-amber-700">{module.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{module.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bônus Exclusivos */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-amber-700 mb-2">Bônus Exclusivos</h3>
          <p className="text-gray-700 mb-10">
            Além das 100 receitas principais, você também recebe:
          </p>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="flex items-start p-6 bg-amber-100 rounded-lg shadow-sm space-x-4">
              <FaBook className="text-3xl text-amber-600" />
              <div>
                <h4 className="text-lg font-semibold text-amber-700">Bônus 1: Coberturas e Recheios Funcionais</h4>
                <p className="text-gray-600 text-sm">10 receitas extras para personalizar suas trufas</p>
              </div>
            </div>
            <div className="flex items-start p-6 bg-amber-100 rounded-lg shadow-sm space-x-4">
              <FaGift className="text-3xl text-amber-600" />
              <div>
                <h4 className="text-lg font-semibold text-amber-700">Bônus 2: Trufas para Datas Especiais</h4>
                <p className="text-gray-600 text-sm">10 receitas temáticas para Páscoa, Natal e mais</p>
              </div>
            </div>
            <div className="flex items-start p-6 bg-amber-100 rounded-lg shadow-sm space-x-4">
              <FaList className="text-3xl text-amber-600" />
              <div>
                <h4 className="text-lg font-semibold text-amber-700">Guia de Ingredientes Funcionais</h4>
                <p className="text-gray-600 text-sm">50+ ingredientes explicados com dosagens e benefícios</p>
              </div>
            </div>
            <div className="flex items-start p-6 bg-amber-100 rounded-lg shadow-sm space-x-4">
              <FaLeaf className="text-3xl text-amber-600" />
              <div>
                <h4 className="text-lg font-semibold text-amber-700">Fichas Nutricionais Completas</h4>
                <p className="text-gray-600 text-sm">Planilha com valores nutricionais de todas as receitas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseContent;