"use client";

import React from "react";
import {
  FaBolt,
  FaBed,
  FaBrain,
  FaShieldAlt,
  FaHeart,
  FaLeaf,
  FaStar,
  FaFire,
  FaBalanceScale,
  FaFemale,
  FaCheckCircle,
} from "react-icons/fa";

const modules = [
  {
    icon: <FaBolt className="text-3xl text-yellow-500" />,
    title: "Energia e Pré-Treino",
    description: "10 receitas com cacau, maca e guaraná para dar aquele boost no seu dia.",
  },
  {
    icon: <FaHeart className="text-3xl text-red-400" />,
    title: "Recuperação Pós-Treino",
    description: "10 trufas proteicas com whey e colágeno para regeneração muscular.",
  },
  {
    icon: <FaLeaf className="text-3xl text-green-500" />,
    title: "Saúde Intestinal",
    description: "10 receitas com probióticos e fibras que cuidam da sua digestão.",
  },
  {
    icon: <FaBed className="text-3xl text-purple-500" />,
    title: "Relaxamento e Sono",
    description: "10 trufas calmantes com camomila e maracujá para noites tranquilas.",
  },
  {
    icon: <FaBrain className="text-3xl text-blue-500" />,
    title: "Foco e Função Cognitiva",
    description: "10 receitas nootrópicas para clareza mental e concentração.",
  },
  {
    icon: <FaStar className="text-3xl text-pink-400" />,
    title: "Beleza e Colágeno",
    description: "10 trufas com colágeno e biotina para pele, cabelos e unhas.",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-amber-500" />,
    title: "Imunidade e Defesa",
    description: "10 receitas com própolis, gengibre e vitamina C.",
  },
  {
    icon: <FaFire className="text-3xl text-orange-500" />,
    title: "Anti-Inflamatório",
    description: "10 trufas com cúrcuma, açaí e resveratrol.",
  },
  {
    icon: <FaBalanceScale className="text-3xl text-teal-500" />,
    title: "Emagrecimento e Saciedade",
    description: "10 receitas termogênicas com baixo índice glicêmico.",
  },
  {
    icon: <FaFemale className="text-3xl text-rose-400" />,
    title: "Equilíbrio Hormonal",
    description: "10 trufas com maca e vitex para saúde feminina.",
  },
];

const UpsellBenefits: React.FC = () => {
  return (
    <section className="py-16 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-amber-800 mb-4">
            100 Receitas em{" "}
            <span className="text-amber-600">10 Módulos Funcionais</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cada módulo foi pensado para um objetivo específico de saúde. 
            Escolha o que faz sentido para você ou domine todos!
          </p>
        </div>

        {/* Grid de Módulos */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 mb-12">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 shadow-md hover:shadow-xl transition-shadow duration-300 border border-amber-200 text-center"
            >
              <div className="mb-3 flex justify-center">{module.icon}</div>
              <h3 className="text-sm font-semibold text-amber-800 mb-1">
                {module.title}
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                {module.description}
              </p>
            </div>
          ))}
        </div>

        {/* Diferenciais */}
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-amber-800 text-center mb-6">
            Por que as Trufas Funcionais são diferentes?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                emoji: "🍫",
                title: "100% Plant-Based",
                desc: "Receitas veganas sem ingredientes de origem animal",
              },
              {
                emoji: "🚫",
                title: "Sem Açúcar Refinado",
                desc: "Adoçadas com tâmaras, xilitol e frutas naturais",
              },
              {
                emoji: "⚡",
                title: "Baixo Índice Glicêmico",
                desc: "Energia estável sem picos de açúcar",
              },
              {
                emoji: "🌿",
                title: "Ingredientes Funcionais",
                desc: "Cada trufa com benefícios comprovados",
              },
              {
                emoji: "📸",
                title: "Visual Instagramável",
                desc: "Perfeitas para presentear ou compartilhar",
              },
              {
                emoji: "⏱️",
                title: "Prontas em Minutos",
                desc: "Receitas práticas com ingredientes acessíveis",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-2xl">{item.emoji}</span>
                <div>
                  <h4 className="font-semibold text-amber-700">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resumo de Valor */}
        <div className="bg-amber-100 rounded-2xl p-8 text-center border-2 border-amber-300">
          <h3 className="text-2xl font-bold text-amber-800 mb-6">
            O Que Você Está Levando:
          </h3>

          <div className="space-y-3 text-left max-w-md mx-auto mb-8">
            {[
              { item: "100 Receitas de Trufas Funcionais", value: "R$ 67" },
              { item: "Bônus: Coberturas e Recheios Funcionais", value: "R$ 27" },
              { item: "Bônus: Trufas para Datas Especiais", value: "R$ 27" },
              { item: "Guia de Ingredientes Funcionais", value: "R$ 19" },
              { item: "Fichas Nutricionais Completas", value: "R$ 17" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center text-gray-700"
              >
                <span className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  {item.item}
                </span>
                <span className="text-gray-400 line-through">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="border-t-2 border-amber-300 pt-6">
            <p className="text-gray-600 mb-2">Valor total:</p>
            <p className="text-2xl text-gray-400 line-through mb-4">R$ 157,00</p>
            
            <p className="text-amber-700 font-semibold text-xl mb-2">
              Sua oferta exclusiva de hoje:
            </p>
            <p className="text-5xl font-extrabold text-green-600">
              R$ 37,00
            </p>
            <p className="text-green-700 font-semibold mt-2">
              Economia de R$ 120,00! 🎉
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpsellBenefits;