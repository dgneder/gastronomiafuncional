"use client";

import React from "react";

const problems = [
  {
    icon: "😩",
    title: "O ciclo inflamatório articular",
    text: "A rigidez matinal, o desconforto nos joelhos ao usar escadas e a fadiga lombar no fim do dia são sinais de inflamação contínua, um quadro onde o alívio temporário dos remédios convencionais costuma perder a eficácia com o tempo.",
  },
  {
    icon: "💊",
    title: "A sobrecarga medicamentosa",
    text: "O uso frequente de anti-inflamatórios sintéticos para dores recorrentes frequentemente desencadeia efeitos colaterais adversos de longo prazo, como desconforto gástrico, retenção de líquidos e alterações na pressão arterial.",
  },
  {
    icon: "🤯",
    title: "Os gatilhos da enxaqueca",
    text: "As crises severas causam sensibilidade extrema à luz e ao som, interrompendo completamente a rotina produtiva e gerando um estado de apreensão constante sobre o surgimento do próximo episódio.",
  },
  {
    icon: "😔",
    title: "O impacto das dores crônicas",
    text: "Condições como artrite, fibromialgia e tendinite representam inflamações silenciosas sistêmicas ou localizadas. O manejo adequado exige compreender esses mecanismos e integrar abordagens naturais complementares.",
  },
];

const ProblemSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E2A10] leading-tight mb-3">
            Os sinais silenciosos de que o
            <br className="hidden sm:block" /> corpo precisa de atenção
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Compreender os mecanismos da inflamação é o primeiro passo para 
            adotar alternativas naturais com respaldo científico.
          </p>
        </div>

        <div className="space-y-4">
          {problems.map(({ icon, title, text }) => (
            <div
              key={title}
              className="flex gap-4 p-5 bg-red-50 border-l-4 border-red-400 rounded-r-xl"
            >
              <span className="text-2xl shrink-0 mt-0.5">{icon}</span>
              <div>
                <h3 className="font-bold text-red-700 text-sm mb-1">{title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;