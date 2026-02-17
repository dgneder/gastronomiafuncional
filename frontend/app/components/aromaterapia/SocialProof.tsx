"use client";

import React from "react";
import { FaFlask, FaGlobeAmericas, FaBookOpen, FaChartLine } from "react-icons/fa";

const stats = [
  {
    icon: <FaBookOpen className="text-3xl text-[#4A7C29]" />,
    value: "25.000+",
    label: "estudos publicados sobre óleos essenciais no PubMed",
  },
  {
    icon: <FaGlobeAmericas className="text-3xl text-[#4A7C29]" />,
    value: "US$ 19 bi",
    label: "mercado global de óleos essenciais em 2027",
  },
  {
    icon: <FaFlask className="text-3xl text-[#4A7C29]" />,
    value: "30+",
    label: "hospitais públicos no Brasil usando aromaterapia",
  },
  {
    icon: <FaChartLine className="text-3xl text-[#4A7C29]" />,
    value: "PNPIC",
    label: "Política Nacional reconhece aromaterapia como prática integrativa desde 2018",
  },
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-[#F2F8ED]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 text-center mb-10 leading-tight">
          A aromaterapia <span className="text-[#4A7C29]">tem respaldo</span>{" "}
          científico
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 text-center border border-[#4A7C29]/10 shadow-sm"
            >
              <div className="flex justify-center mb-3">{s.icon}</div>
              <p className="font-black text-[#2D5016] text-xl sm:text-2xl">
                {s.value}
              </p>
              <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Nota do Autor */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 border border-[#4A7C29]/10 shadow-sm">
          <p className="text-gray-600 leading-relaxed text-sm italic">
            &quot;Quando eu digo que aromaterapia funciona, não é opinião. São
            milhares de estudos com ensaios clínicos, revisões sistemáticas e
            meta-análises. O que falta no Brasil não é eficácia — é informação de
            qualidade sobre como usar corretamente. Esse guia preenche essa
            lacuna.&quot;
          </p>
          <p className="text-[#2D5016] font-bold text-sm mt-3">
            — Dr. Diogo Gonçalves Neder
          </p>
        </div>

        {/* Espaço para depoimentos futuros */}
        {/*
        <div className="mt-10">
          <h3 className="font-bold text-gray-900 text-center mb-6">
            O que nossos leitores dizem
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map(...)}
          </div>
        </div>
        */}
      </div>
    </section>
  );
};

export default SocialProof;
