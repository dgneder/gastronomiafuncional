"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface PlantsGridProps {
  onButtonClick: () => void;
}

const groups = [
  {
    label: "Iniciante",
    stars: "⭐",
    color: "#4CAF50",
    bg: "bg-[#4CAF50]/5",
    plants: [
      "Hortelã", "Alecrim", "Babosa", "Capim-limão", "Boldo",
      "Erva-cidreira", "Manjericão", "Arruda", "Citronela", "Camomila",
      "Ora-pro-nóbis", "Tanchagem",
    ],
  },
  {
    label: "Intermediário",
    stars: "⭐⭐",
    color: "#F9A825",
    bg: "bg-[#F9A825]/5",
    plants: [
      "Guaco", "Cavalinha", "Malva", "Gengibre", "Cúrcuma",
      "Erva-doce", "Alho", "Calêndula", "Alfavaca", "Espinheira-santa",
    ],
  },
  {
    label: "Avançado",
    stars: "⭐⭐⭐",
    color: "#E65100",
    bg: "bg-[#E65100]/5",
    plants: [
      "Passiflora", "Equinácea", "Valeriana", "Lavanda",
      "Chapéu-de-couro", "Alcachofra", "Mil-folhas", "Confrei",
    ],
  },
];

const PlantsGrid: React.FC<PlantsGridProps> = ({ onButtonClick }) => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 leading-tight">
          <span className="text-[#2E7D32]">30 plantas. 30 fichas completas.</span>{" "}
          Do plantio à colheita.
        </h2>
        <p className="text-gray-600 mb-8">
          Organizadas por nível de dificuldade — para você começar hoje, mesmo
          sem experiência.
        </p>

        <div className="space-y-6 text-left mb-8">
          {groups.map((group, gi) => (
            <div key={gi} className={`${group.bg} rounded-2xl p-5 sm:p-6 border`} style={{ borderColor: `${group.color}20` }}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm">{group.stars}</span>
                <h3 className="font-bold text-sm" style={{ color: group.color }}>
                  {group.label} ({group.plants.length} plantas)
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.plants.map((plant, pi) => (
                  <span
                    key={pi}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white border shadow-sm"
                    style={{ borderColor: `${group.color}30`, color: group.color }}
                  >
                    🌿 {plant}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tip Box */}
        <div className="bg-[#FFF8E7] border border-[#F9A825]/30 rounded-xl p-4 max-w-lg mx-auto mb-8">
          <p className="text-gray-700 text-sm">
            💡 <strong>12 são &quot;impossíveis de matar&quot;</strong> — classificadas
            como Iniciante. Se você nunca plantou nada na vida, comece por elas.
            Hortelã + Alecrim + Babosa = trio perfeito para a primeira semana.
          </p>
        </div>

        <p className="text-gray-500 text-sm italic max-w-2xl mx-auto mb-6">
          Cada ficha inclui: nome científico, nível de dificuldade, exigências
          de luz/água/solo, método de propagação, pragas comuns, momento ideal
          de colheita e parte utilizada.
        </p>

        <button
          onClick={onButtonClick}
          className="py-5 px-10 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] hover:brightness-110 text-white font-black text-lg rounded-xl shadow-[0_10px_20px_rgba(27,94,32,0.3)] transition-all flex items-center justify-center gap-2 mx-auto group"
        >
          <span>QUERO AS 30 FICHAS — R$34,90</span>
          <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
        </button>
      </div>
    </section>
  );
};

export default PlantsGrid;
