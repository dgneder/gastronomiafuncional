import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Benefits: React.FC = () => {
  return (
    <div className="bg-zinc-900 p-6 lg:p-8 rounded-xl shadow-xl border border-pink-400">
      <h3 className="text-2xl font-bold text-pink-400 mb-6 text-center">
        Por que escolher nossas Sobremesas Funcionais?
      </h3>

      <ul className="space-y-4 text-zinc-100 text-base leading-relaxed">
        <li className="flex items-start">
          <FaCheckCircle className="text-pink-400 mt-1 mr-3 shrink-0" />
          <span>Sabor irresistível com ingredientes naturais 🍓</span>
        </li>
        <li className="flex items-start">
          <FaCheckCircle className="text-pink-400 mt-1 mr-3 shrink-0" />
          <span>Ajuda no bem-estar, imunidade e saúde intestinal 🌱</span>
        </li>
        <li className="flex items-start">
          <FaCheckCircle className="text-pink-400 mt-1 mr-3 shrink-0" />
          <span>Receitas fáceis, acessíveis e sem açúcar refinado 🥥</span>
        </li>
        <li className="flex items-start">
          <FaCheckCircle className="text-pink-400 mt-1 mr-3 shrink-0" />
          <span>Perfeitas para o dia a dia ou momentos especiais ✨</span>
        </li>
      </ul>
    </div>
  );
};

export default Benefits;
