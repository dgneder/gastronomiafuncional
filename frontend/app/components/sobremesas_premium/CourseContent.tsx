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
    title: "🍫 Energia e Disposição",
    description: "Receitas revitalizantes para começar o dia com foco e vigor.",
    image: "/sobremesas/sobremesa-energia-02.png",
  },
  {
    title: "🧘 Relaxamento e Controle da Ansiedade",
    description: "Sobremesas que acalmam corpo e mente, ideais para o fim do dia.",
    image: "/sobremesas/sobremesa-relax.png",
  },
  {
    title: "🌿 Imunidade e Antioxidantes",
    description: "Receitas que fortalecem o sistema imune com ingredientes funcionais.",
    image: "/sobremesas/sobremesa-pele-intestino-02.png",
  },
  {
    title: "🧬 Saúde Digestiva",
    description: "Sobremesas com alto teor de fibras que cuidam do intestino.",
    image: "/sobremesas/sobremesa-intestino.png",
  },
  {
    title: "🌙 Sono Tranquilo",
    description: "Doces calmantes que ajudam a relaxar e dormir melhor.",
    image: "/sobremesas/sobremesa-sono.png",
  },
  {
    title: "💪 Reposição Pós-Treino",
    description: "Sobremesas com boas fontes de proteína para recuperação muscular.",
    image: "/sobremesas/sobremesa-pos-treino.png",
  },
  {
    title: "🌺 Pele e Cabelos Saudáveis",
    description: "Antioxidantes e gorduras boas que nutrem de dentro pra fora.",
    image: "/sobremesas/sobremesa-beleza.png",
  },
  {
    title: "⚖️ Controle de Peso e Saciedade",
    description: "Receitas leves, com baixo índice glicêmico e foco na saciedade.",
    image: "/sobremesas/sobremesa-peso.png",
  },
  {
    title: "🫐 Detox Natural",
    description: "Sobremesas funcionais para limpeza interna e leveza digestiva.",
    image: "/sobremesas/sobremesa-detox.png",
  },
  {
    title: "🧠 Foco e Clareza Mental",
    description: "Ingredientes que favorecem o desempenho cognitivo.",
    image: "/sobremesas/sobremesa-mente.png",
  },
  {
    title: "👨‍👩‍👧‍👦 Para Toda a Família",
    description: "Doces saudáveis, práticos e deliciosos para todas as idades.",
    image: "/sobremesas/sobremesa-familia-02.png",
  },
];

const CourseContent: React.FC = () => {
  return (
    <section
      data-aos="fade-up"
      id="coursecontent"
      className="py-20 px-6 lg:px-12 bg-gradient-to-r from-rose-100 via-pink-100 to-white text-center"
    >
      <div className="max-w-6xl mx-auto">
        {/* Título e Introdução */}
        <h2 className="text-3xl lg:text-4xl font-extrabold text-pink-700 mb-6">
          O Que Você Vai Encontrar no Guia
        </h2>
        <p className="text-lg text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
          O Guia é dividido em módulos práticos com receitas para cada necessidade — energia, foco, sono, beleza, imunidade e muito mais.
        </p>

        {/* Módulos */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl border border-pink-200 hover:border-pink-400 transition duration-300 overflow-hidden transform hover:-translate-y-1"
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
                <h3 className="text-lg font-semibold text-pink-700">{module.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{module.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bônus Exclusivos */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-pink-700 mb-2">Bônus Exclusivos</h3>
          <p className="text-gray-700 mb-10">
            Além dos módulos principais, você também recebe:
          </p>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="flex items-start p-6 bg-pink-100 rounded-lg shadow-sm space-x-4">
              <FaBook className="text-3xl text-pink-500" />
              <div>
                <h4 className="text-lg font-semibold text-pink-700">Livro Digital com +50 Receitas Funcionais</h4>
              </div>
            </div>
            <div className="flex items-start p-6 bg-pink-100 rounded-lg shadow-sm space-x-4">
              <FaList className="text-3xl text-pink-500" />
              <div>
                <h4 className="text-lg font-semibold text-pink-700">Listas de Compras e Planejamento de Uso</h4>
              </div>
            </div>
            <div className="flex items-start p-6 bg-pink-100 rounded-lg shadow-sm space-x-4">
              <FaGift className="text-3xl text-pink-500" />
              <div>
                <h4 className="text-lg font-semibold text-pink-700">Receitas Especiais para Ocasiões</h4>
              </div>
            </div>
            <div className="flex items-start p-6 bg-pink-100 rounded-lg shadow-sm space-x-4">
              <FaLeaf className="text-3xl text-pink-500" />
              <div>
                <h4 className="text-lg font-semibold text-pink-700">Guia de Substituições Inteligentes</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseContent;
