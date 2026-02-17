"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface ValueBulletsProps {
  onButtonClick: () => void;
}

const bullets = [
  {
    icon: "🌱",
    title: "Por que plantas estressadas produzem mais remédio",
    text: "A ciência da elicitação: como o estresse controlado (hídrico, luminoso, mecânico) aumenta a concentração de compostos ativos. É o que separa uma hortelã comum de uma hortelã medicinal.",
  },
  {
    icon: "🏺",
    title: "A receita exata do substrato do Dr. Diogo",
    text: "Proporções exatas de terra vegetal, húmus de minhoca, areia e perlita para cada grupo de plantas. Sem complicação, com ingredientes que você encontra em qualquer garden center.",
  },
  {
    icon: "📋",
    title: "30 fichas exclusivas de cultivo medicinal",
    text: "Nome científico, exigências de luz/água/solo, método de propagação, pragas comuns, momento ideal de colheita, parte utilizada e nível de dificuldade. Tudo visual e objetivo.",
  },
  {
    icon: "📐",
    title: "Como plantar em 1 m² ou menos",
    text: "Técnicas de cultivo vertical, consórcio entre espécies e vasos empilhados. Mora em apartamento? Com uma janela que bate sol, você mantém 5+ plantas medicinais produtivas.",
  },
  {
    icon: "✂️",
    title: "O momento exato de colher cada planta",
    text: "Colher no momento errado pode reduzir os compostos ativos em até 80%. O guia indica o horário do dia, estágio de crescimento e sinais visuais para cada espécie.",
  },
  {
    icon: "🌡️",
    title: "4 métodos de secagem passo a passo",
    text: "Secagem à sombra, desidratador elétrico, forno convencional e secador caseiro DIY (projeto completo por R$30). Cada método com temperatura, tempo e indicação por planta.",
  },
  {
    icon: "📅",
    title: "Calendários regionais para todas as 5 regiões do Brasil",
    text: "Sudeste, Sul, Nordeste, Centro-Oeste e Norte. Mês a mês, planta por planta. Você sabe exatamente quando plantar e quando colher na sua região.",
  },
  {
    icon: "🧘",
    title: "3 jardins temáticos prontos para montar",
    text: "Jardim da Calma (ansiedade e sono), Jardim Digestivo (estômago e intestino) e Jardim Respiratório (gripes e congestão). Cada um com 5 plantas sinérgicas e layout de plantio.",
  },
];

const ValueBullets: React.FC<ValueBulletsProps> = ({ onButtonClick }) => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-[#FDF6E3]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 text-center mb-3 leading-tight">
          O que você vai aprender — em detalhes
        </h2>
        <p className="text-gray-500 text-center mb-10 text-sm">
          8 razões que tornam este o guia mais completo de cultivo medicinal do
          Brasil
        </p>

        <div className="space-y-4">
          {bullets.map((b, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-[#2E7D32]/10 flex gap-4 items-start hover:shadow-md transition-shadow"
            >
              <div className="text-2xl sm:text-3xl flex-shrink-0">{b.icon}</div>
              <div>
                <h4 className="font-bold text-[#1B5E20] text-sm sm:text-base mb-1">
                  {b.title}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {b.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={onButtonClick}
            className="py-5 px-10 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] hover:brightness-110 text-white font-black text-lg rounded-xl shadow-[0_10px_20px_rgba(27,94,32,0.3)] transition-all flex items-center justify-center gap-2 mx-auto group"
          >
            <span>QUERO TUDO ISSO POR R$34,90</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValueBullets;
