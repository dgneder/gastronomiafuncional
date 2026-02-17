"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface BlendsSectionProps {
  onButtonClick: () => void;
}

const blends = [
  { icon: "🌙", name: "Noite Serena", desc: "Lavanda + Cedro + Laranja. Para dormir melhor sem medicação." },
  { icon: "🫁", name: "Respira Bem", desc: "Eucalipto + Hortelã + Tea tree. Alívio respiratório em minutos." },
  { icon: "🧠", name: "Foco Total", desc: "Alecrim + Limão + Hortelã. +15% em testes de memória." },
  { icon: "🧘", name: "Antiestresse", desc: "Bergamota + Lavanda + Ylang-ylang. Ansiedade reduzida em 20 min." },
  { icon: "🛡️", name: "Escudo Protetor", desc: "Tea tree + Limão + Eucalipto radiata. Antimicrobiano natural." },
  { icon: "💪", name: "Alívio Muscular", desc: "Wintergreen + Lavanda + Gengibre. O princípio da aspirina." },
  { icon: "✨", name: "Pele Nova", desc: "Tea tree + Palmarosa + Lavanda. Cuidado facial científico." },
  { icon: "🌺", name: "SOS TPM", desc: "Gerânio + Lavanda + Bergamota. Cólicas e oscilações de humor." },
  { icon: "🌬️", name: "Descongestiona", desc: "Eucalipto radiata + Ravensara + Hortelã. Sinusite e congestão." },
  { icon: "🍃", name: "Boa Digestão", desc: "Funcho + Gengibre + Hortelã. Massagem abdominal pós-refeição." },
  { icon: "☀️", name: "Energia da Manhã", desc: "Limão + Alecrim + Laranja. Terpenos cítricos para despertar." },
  { icon: "💆", name: "Paz Interior", desc: "Olíbano + Lavanda + Cedro. Para meditação e presença." },
];

const BlendsSection: React.FC<BlendsSectionProps> = ({ onButtonClick }) => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 leading-tight">
          <span className="text-[#4A7C29]">12 receitas prontas</span> para usar
          hoje
        </h2>
        <p className="text-gray-600 mb-8">
          Cada blend com gotas exatas, método de aplicação e a explicação de por
          que funciona.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 text-left mb-8">
          {blends.map((b, i) => (
            <div
              key={i}
              className="bg-[#FDF6E3] rounded-xl p-4 border border-[#4A7C29]/10 hover:shadow-md transition-shadow"
            >
              <div className="text-2xl mb-2">{b.icon}</div>
              <h4 className="font-bold text-[#2D5016] text-sm mb-1">
                {b.name}
              </h4>
              <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-500 text-sm italic max-w-2xl mx-auto mb-6">
          Cada receita inclui: composição com nome botânico e gotas exatas,
          método passo a passo, ciência de por que funciona, 3 variações e
          contraindicações.
        </p>

        {/* Tip Box */}
        <div className="bg-[#FFF8E7] border border-[#B8860B]/30 rounded-xl p-4 max-w-lg mx-auto mb-8">
          <p className="text-gray-700 text-sm">
            💰 <strong>Você sabia?</strong> Com apenas 5 óleos essenciais
            (investimento de R$100-170), você prepara 8 dos 12 blends. Lavanda +
            Limão + Eucalipto radiata + Tea tree + Hortelã-pimenta = a base de
            quase tudo.
          </p>
        </div>

        <button
          onClick={onButtonClick}
          className="py-5 px-10 bg-gradient-to-r from-[#4A7C29] to-[#2D5016] hover:brightness-110 text-white font-black text-lg rounded-xl shadow-[0_10px_20px_rgba(45,80,22,0.3)] transition-all flex items-center justify-center gap-2 mx-auto group"
        >
          <span>QUERO OS 12 BLENDS — R$37</span>
          <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
        </button>
      </div>
    </section>
  );
};

export default BlendsSection;
