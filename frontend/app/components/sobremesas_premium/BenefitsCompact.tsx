"use client";

import React from "react";
import { 
  FaBolt, 
  FaHeart, 
  FaLeaf, 
  FaMoon, 
  FaChild, 
  FaWeight 
} from "react-icons/fa";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

const benefits: Benefit[] = [
  {
    icon: <FaBolt />,
    title: "Mais Energia",
    description: "Receitas que sustentam sem pesar na rotina",
    color: "text-amber-500",
    bgColor: "bg-amber-50",
  },
  {
    icon: <FaWeight />,
    title: "Controle de Peso",
    description: "Baixo índice glicêmico e alta saciedade",
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    icon: <FaLeaf />,
    title: "Imunidade Forte",
    description: "Ingredientes que fortalecem suas defesas",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
  },
  {
    icon: <FaHeart />,
    title: "Pele e Cabelos",
    description: "Antioxidantes que nutrem de dentro pra fora",
    color: "text-pink-500",
    bgColor: "bg-pink-50",
  },
  {
    icon: <FaMoon />,
    title: "Sono Tranquilo",
    description: "Sobremesas calmantes para relaxar",
    color: "text-indigo-500",
    bgColor: "bg-indigo-50",
  },
  {
    icon: <FaChild />,
    title: "Toda Família",
    description: "Delícias saudáveis para todas as idades",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
];

const BenefitsCompact: React.FC = () => {
  return (
    <section className="py-10 sm:py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Título */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Receitas organizadas por{" "}
            <span className="text-pink-600">benefício</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encontre a sobremesa perfeita para cada momento e necessidade do seu corpo
          </p>
        </div>

        {/* Grid de benefícios */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`${benefit.bgColor} rounded-2xl p-4 sm:p-6 text-center hover:shadow-lg transition-shadow duration-300 group cursor-default`}
            >
              <div className={`${benefit.color} text-3xl sm:text-4xl mb-3 group-hover:scale-110 transition-transform`}>
                {benefit.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tags funcionais */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-sm text-gray-500 mb-4">Classificações disponíveis:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Vegano",
              "Sem Glúten", 
              "Zero Açúcar",
              "Low Carb",
              "Rico em Fibras",
              "Proteico",
              "Antioxidante",
              "Anti-inflamatório"
            ].map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-pink-50 text-pink-700 text-xs sm:text-sm rounded-full border border-pink-200 hover:bg-pink-100 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsCompact;
