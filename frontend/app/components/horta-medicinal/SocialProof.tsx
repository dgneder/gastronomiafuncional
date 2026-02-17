"use client";

import React from "react";
import { FaChartBar, FaHospital, FaMoneyBillWave, FaBookOpen } from "react-icons/fa";

const stats = [
  {
    icon: <FaChartBar className="text-3xl text-[#2E7D32]" />,
    value: "82%",
    label: "dos brasileiros já usaram plantas medicinais (IBGE/PNS)",
  },
  {
    icon: <FaHospital className="text-3xl text-[#2E7D32]" />,
    value: "12",
    label: "plantas deste guia estão na lista oficial do SUS (RENAME)",
  },
  {
    icon: <FaMoneyBillWave className="text-3xl text-[#2E7D32]" />,
    value: "R$1.200+",
    label: "gasto médio anual por família com chás e ervas medicinais",
  },
  {
    icon: <FaBookOpen className="text-3xl text-[#2E7D32]" />,
    value: "150+",
    label: "páginas de conteúdo científico original — não é compilação de blog",
  },
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-[#F2F8ED]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 text-center mb-10 leading-tight">
          Por que cultivar suas plantas medicinais{" "}
          <span className="text-[#2E7D32]">faz sentido</span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 text-center border border-[#2E7D32]/10 shadow-sm"
            >
              <div className="flex justify-center mb-3">{s.icon}</div>
              <p className="font-black text-[#1B5E20] text-xl sm:text-2xl">
                {s.value}
              </p>
              <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Nota do Autor */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 border border-[#2E7D32]/10 shadow-sm">
          <p className="text-gray-600 leading-relaxed text-sm italic">
            &quot;A farmácia mais barata do Brasil cabe na sua janela. Mas só
            funciona se você souber cultivar, colher e conservar corretamente.
            Foi por isso que escrevi este guia: para transformar a boa intenção
            de plantar ervas em resultado de verdade.&quot;
          </p>
          <p className="text-[#1B5E20] font-bold text-sm mt-3">
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
