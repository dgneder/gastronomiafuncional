"use client";

import React from "react";

const stats = [
  { number: "562.000", label: "atendimentos com fitoterápicos no SUS em 2024" },
  { number: "12", label: "fitoterápicos distribuídos gratuitamente pelo governo" },
  { number: "R$60 mi", label: "investidos pelo governo federal em fitoterapia" },
];

const InstitutionalProof: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 px-4 bg-[#1A5276] relative overflow-hidden">
      {/* Textura de fundo */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-10">
          Fitoterapia não é achismo.{" "}
          <span className="text-[#B8860B]">É política pública.</span>
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl sm:text-5xl font-black text-[#B8860B] mb-2">
                {stat.number}
              </p>
              <p className="text-white/80 text-sm sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Texto */}
        <p className="text-white/80 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Países como Alemanha, França e Canadá incluem fitoterápicos em seus
          sistemas de saúde há décadas. O Brasil avança na mesma direção. A
          questão não é SE plantas medicinais funcionam — é{" "}
          <strong className="text-white">
            saber usar com segurança e conhecimento.
          </strong>
        </p>
      </div>
    </section>
  );
};

export default InstitutionalProof;
