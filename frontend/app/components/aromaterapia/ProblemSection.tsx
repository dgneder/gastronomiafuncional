"use client";

import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const alerts = [
  {
    borderColor: "border-[#B8860B]",
    bgColor: "bg-[#FFF8E7]",
    title: "Gatos não metabolizam óleos essenciais.",
    text: "Tea tree, eucalipto, hortelã e cítricos podem se acumular no fígado do seu gato e causar insuficiência hepática — e ele não demonstra sintomas até ser tarde demais.",
  },
  {
    borderColor: "border-red-400",
    bgColor: "bg-red-50",
    title: "Hortelã-pimenta pode causar espasmo de glote em bebês",
    text: "— um reflexo que fecha a via aérea. Em crianças pequenas, qualquer obstrução é potencialmente fatal. Eucalipto globulus é proibido até os 10 anos.",
  },
  {
    borderColor: "border-red-400",
    bgColor: "bg-red-50",
    title: "Wintergreen + anticoagulante = risco de sangramento.",
    text: "Alecrim pode elevar a pressão. Cânfora reduz o limiar convulsivo. São 7 classes de medicamentos que interagem com óleos essenciais — e ninguém te avisou.",
  },
];

const ProblemSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 text-center mb-8 leading-tight">
          Você usa óleos essenciais.{" "}
          <span className="text-[#4A7C29]">Mas será que está usando certo?</span>
        </h2>

        <div className="text-gray-600 leading-relaxed mb-6 space-y-4">
          <p>
            Você comprou um difusor bonito. Investiu R$200 em frasquinhos de vidro
            âmbar. Toda noite, pinga umas gotinhas e liga.
          </p>
          <p>Parece inofensivo. Natural. Saudável.</p>
          <p className="font-bold text-gray-900">Mas e se eu te disser que:</p>
        </div>

        <div className="space-y-3 mb-8">
          {alerts.map((alert, i) => (
            <div
              key={i}
              className={`${alert.bgColor} border-l-4 ${alert.borderColor} p-4 sm:p-5 rounded-r-xl`}
            >
              <div className="flex items-start gap-3">
                <FaExclamationTriangle className="text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                  <strong>{alert.title}</strong> {alert.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-gray-600 leading-relaxed space-y-4">
          <p>
            A maioria das marcas de óleos essenciais não te conta isso. E a
            maioria dos conteúdos de aromaterapia no Brasil não explica{" "}
            <em>por que</em> um óleo funciona — só diz &quot;use lavanda para
            relaxar&quot; sem mencionar que é o linalol modulando receptores
            GABA-A no sistema nervoso central.
          </p>
          <p className="font-bold text-[#2D5016] text-lg">
            A aromaterapia funciona. Mas funciona quando você entende o que está
            fazendo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
