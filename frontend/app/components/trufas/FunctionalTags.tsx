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
    icon: <FaLeaf className="text-green-600 text-3xl" aria-label="Plant-Based" />,
    label: "100% Plant-Based",
    description: "Todas as receitas são veganas e livres de ingredientes animais.",
  },
  {
    icon: <FaBan className="text-red-500 text-3xl" aria-label="Sem Glúten" />,
    label: "Sem Glúten",
    description: "Ideal para celíacos ou quem evita glúten na dieta.",
  },
  {
    icon: <FaBan className="text-purple-600 text-3xl" aria-label="Zero Açúcar" />,
    label: "Zero Açúcar Refinado",
    description: "Adoçadas com tâmaras, xilitol, eritritol e frutas naturais.",
  },
  {
    icon: <FaBolt className="text-blue-500 text-3xl" aria-label="Low Carb" />,
    label: "Low Carb",
    description: "Opções com baixo carboidrato para dietas cetogênicas.",
  },
  {
    icon: <FaSeedling className="text-yellow-600 text-3xl" aria-label="Rico em Fibras" />,
    label: "Rico em Fibras",
    description: "Ingredientes que promovem saciedade e saúde intestinal.",
  },
  {
    icon: <FaShieldAlt className="text-amber-600 text-3xl" aria-label="Proteico" />,
    label: "Opções Proteicas",
    description: "Trufas com whey, colágeno e proteínas vegetais.",
  },
  {
    icon: <FaHeart className="text-amber-700 text-3xl" aria-label="Gorduras Boas" />,
    label: "Gorduras Saudáveis",
    description: "Castanhas, cacau e coco que nutrem cérebro e coração.",
  },
  {
    icon: <FaStar className="text-orange-500 text-3xl" aria-label="Antioxidante" />,
    label: "Rico em Antioxidantes",
    description: "Cacau, açaí e frutas vermelhas que combatem radicais livres.",
  },
  {
    icon: <FaFire className="text-rose-600 text-3xl" aria-label="Anti-inflamatório" />,
    label: "Anti-inflamatório",
    description: "Cúrcuma, gengibre e canela que reduzem inflamações.",
  },
];

const FunctionalTags: React.FC = () => {
  return (
    <section
      data-aos="fade-up"
      id="functional-tags"
      className="py-20 px-6 lg:px-12 bg-gradient-to-b from-white via-amber-50 to-orange-100 text-center"
    >
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h2 className="text-3xl lg:text-4xl font-bold text-amber-700 mb-6">
          Classificações Funcionais das Receitas
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          Cada trufa foi desenvolvida com propósito. Escolha de acordo com sua dieta, objetivo de saúde ou preferência alimentar.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white rounded-lg shadow-md p-5 hover:shadow-xl hover:ring-2 hover:ring-amber-300 transition-all duration-300 ease-in-out"
            >
              <div className="shrink-0">{tag.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-amber-700">{tag.label}</h4>
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