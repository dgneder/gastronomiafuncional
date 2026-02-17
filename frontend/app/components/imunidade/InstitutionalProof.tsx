"use client";

import React from "react";

const proofs = [
  {
    label: "ANVISA",
    value: "Aprovação oficial",
    desc: "Aprova oficialmente fitoterápicos como guaco e pelargônio (Kaloba), que fazem parte deste guia",
  },
  {
    label: "SUS / RENISUS",
    value: "71 plantas",
    desc: "listadas na Relação Nacional de interesse ao SUS. O guaco consta na RENAME (Medicamentos Essenciais)",
  },
  {
    label: "Comissão E Alemã",
    value: "Referência mundial",
    desc: "Aprova tomilho, equinácea e eucalipto — 3 das 15 plantas deste guia",
  },
  {
    label: "Revisão Cochrane",
    value: "3.400+ participantes",
    desc: "O mais alto nível de evidência confirmou a eficácia do pelargônio para infecções respiratórias — 10 ensaios clínicos",
  },
];

const InstitutionalProof = () => {
  return (
    <section className="py-16 lg:py-20 px-4 bg-[#2D5016] text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-[#B8860B] mb-4">
          A fitoterapia é reconhecida oficialmente
        </h2>
        <p className="text-white/80 text-center text-base sm:text-lg max-w-2xl mx-auto mb-12">
          Não é alternativa, não é misticismo, não é &quot;crença&quot;. A fitoterapia é
          reconhecida e regulamentada no Brasil e no mundo.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {proofs.map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:bg-white/15 transition-colors"
            >
              <span className="text-[#B8860B] font-black text-xs uppercase tracking-widest block mb-3">
                {item.label}
              </span>
              <span className="text-white font-extrabold text-xl block mb-3">
                {item.value}
              </span>
              <p className="text-white/70 text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstitutionalProof;
