"use client";

import React from "react";

const stats = [
  {
    num: "37%",
    label: "dos brasileiros adultos convivem com alguma forma de dor crônica",
    source: "Soc. Bras. Estudo da Dor",
  },
  {
    num: "R$12bi",
    label: "gasto anual em anti-inflamatórios no Brasil — mercado em crescimento",
    source: "IQVIA / Interfarma",
  },
  {
    num: "1ª",
    label: "causa de afastamento do trabalho no Brasil: dores musculoesqueléticas",
    source: "INSS / Previdência Social",
  },
  {
    num: "70%",
    label: "dos usuários crônicos de AINEs desenvolvem efeitos adversos gástricos",
    source: "Cochrane Database",
  },
];

const DataSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-[#1E2A10]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-3">
            A dimensão real da dor no Brasil
          </h2>
          <p className="text-white/60 text-base">
            Números que colocam o problema em perspectiva.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ num, label, source }) => (
            <div
              key={num}
              className="bg-white/6 border border-white/10 rounded-2xl p-5 text-center"
            >
              <p className="text-4xl font-black text-[#D4A520] leading-none mb-3">
                {num}
              </p>
              <p className="text-white/80 text-xs leading-relaxed mb-2">{label}</p>
              <p className="text-white/30 text-[10px] italic">{source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataSection;
