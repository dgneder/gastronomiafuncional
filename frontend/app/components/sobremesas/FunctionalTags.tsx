"use client";

import React from "react";
import {
  FaLeaf,
  FaBan,
  FaBolt,
  FaSeedling,
  FaHeart,
  FaShieldAlt,
  FaStar,
  FaFire,
} from "react-icons/fa";

const tags = [
  {
    icon: <FaLeaf className="text-green-600 text-3xl" aria-label="Vegano" />,
    label: "Vegano",
    description: "Sem ingredientes de origem animal.",
  },
  {
    icon: <FaBan className="text-red-500 text-3xl" aria-label="Sem Glúten" />,
    label: "Sem Glúten",
    description: "Ideal para celíacos ou sensíveis ao glúten.",
  },
  {
    icon: <FaBan className="text-purple-600 text-3xl" aria-label="Zero Açúcar" />,
    label: "Zero Açúcar",
    description: "Doces sem adição de açúcares refinados.",
  },
  {
    icon: <FaBolt className="text-blue-500 text-3xl" aria-label="Low Carb" />,
    label: "Low Carb",
    description: "Reduzido em carboidratos — perfeito para dietas equilibradas.",
  },
  {
    icon: <FaSeedling className="text-yellow-600 text-3xl" aria-label="Rico em Fibras" />,
    label: "Rico em Fibras",
    description: "Ajuda no trânsito intestinal e saciedade.",
  },
  {
    icon: <FaShieldAlt className="text-pink-500 text-3xl" aria-label="Rico em Proteínas" />,
    label: "Rico em Proteínas",
    description: "Contribui para saciedade e manutenção muscular.",
  },
  {
    icon: <FaHeart className="text-amber-700 text-3xl" aria-label="Gorduras Boas" />,
    label: "Fonte de Gorduras Boas",
    description: "Gorduras saudáveis para o cérebro e hormônios.",
  },
  {
    icon: <FaStar className="text-orange-500 text-3xl" aria-label="Antioxidante" />,
    label: "Antioxidante",
    description: "Ajuda a combater os radicais livres e envelhecimento precoce.",
  },
  {
    icon: <FaFire className="text-rose-600 text-3xl" aria-label="Anti-inflamatório" />,
    label: "Anti-inflamatório",
    description: "Ingredientes que ajudam a reduzir inflamações no corpo.",
  },
];

const FunctionalTags: React.FC = () => {
  return (
    <section
      data-aos="fade-up"
      id="functional-tags"
      className="py-20 px-6 lg:px-12 bg-gradient-to-b from-white via-pink-50 to-rose-100 text-center"
    >
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h2 className="text-3xl lg:text-4xl font-bold text-pink-700 mb-6">
          Classificações Funcionais das Receitas
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          Nossas receitas foram organizadas para que você encontre exatamente o que precisa: seja para uma dieta específica, um objetivo de saúde ou uma escolha consciente.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white rounded-lg shadow-md p-5 hover:shadow-xl hover:ring-2 hover:ring-pink-300 transition-all duration-300 ease-in-out"
            >
              <div className="shrink-0">{tag.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-pink-700">{tag.label}</h4>
                <p className="text-gray-600 text-sm mt-1 leading-snug">{tag.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunctionalTags;
