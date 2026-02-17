"use client";

import React from "react";
import { FaSeedling, FaBalanceScale, FaClipboardList } from "react-icons/fa";

const insights = [
  {
    icon: FaSeedling,
    title: "A planta certa para o SEU problema",
    text: "Insônia leve é diferente de insônia severa. Ansiedade diurna é diferente de ansiedade noturna. Cada perfil pede plantas diferentes agindo em mecanismos diferentes.",
  },
  {
    icon: FaBalanceScale,
    title: "A dose e o preparo corretos",
    text: '"Uma pitadinha de camomila" não é dose terapêutica. 3 minutos de infusão não extrai quase nada. Sem tampa, os compostos mais valiosos evaporam com o vapor.',
  },
  {
    icon: FaClipboardList,
    title: "Um protocolo estruturado",
    text: "Plantas isoladas produzem efeitos limitados. Plantas combinadas estrategicamente — cobrindo sistemas complementares no cérebro — produzem resultados que nenhuma planta sozinha consegue.",
  },
];

const RootCauseSection = () => {
  return (
    <section className="py-16 lg:py-20 px-4 bg-[#F0F7F0]">
      <div className="max-w-5xl mx-auto">
        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 text-center mb-6 leading-tight">
          O problema não é a planta.{" "}
          <span className="text-[#4A7C29]">É como você usa.</span>
        </h2>

        {/* Texto explicativo */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Sabia que um chá de valeriana preparado errado entrega apenas 10% do
            potencial terapêutico? Que a camomila perde até 60% dos seus
            compostos ativos se você não tampar a xícara? Que a passiflora
            precisa de 12 minutos de infusão — e não os 3 que você provavelmente
            deixa?
          </p>
          <p className="text-gray-700 font-semibold mt-4 text-base sm:text-lg">
            A fitoterapia funciona. Existem centenas de estudos clínicos provando
            isso. Mas ela precisa de três coisas que ninguém te ensina:
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {insights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#4A7C29]/10 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-[#4A7C29]/10 rounded-2xl flex items-center justify-center mb-5">
                <item.icon className="text-[#4A7C29] text-xl" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Texto de transição */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#4A7C29]/20 max-w-3xl mx-auto text-center">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            É exatamente isso que este guia entrega. Não é mais um e-book de
            &quot;chás para dormir&quot;. É um{" "}
            <strong className="text-[#2D5016]">sistema completo, com base científica</strong>,
            escrito por quem entende de plantas no nível molecular.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RootCauseSection;
