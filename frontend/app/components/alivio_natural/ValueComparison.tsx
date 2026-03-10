"use client";

import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const rows = [
  { item: "Consulta com especialista", cost: "R$250–500", recurring: "Sim", scientific: true, practical: false, safe: true },
  { item: "Anti-inflamatórios (1 mês)", cost: "R$50–120", recurring: "Sim, todo mês", scientific: true, practical: true, safe: false },
  { item: "Cursos e tratamentos alternativos", cost: "R$200–800", recurring: "Varia", scientific: false, practical: false, safe: false },
  { item: "Pesquisa própria na internet", cost: "Tempo", recurring: "Horas", scientific: false, practical: false, safe: false },
  { item: "Alívio Natural (guia completo)", cost: "R$47", recurring: "Nunca mais", scientific: true, practical: true, safe: true, highlight: true },
];

interface ValueComparisonProps {
  onButtonClick: () => void;
}

const ValueComparison: React.FC<ValueComparisonProps> = ({ onButtonClick }) => {
  return (
    <section className="py-16 lg:py-20 bg-[#FBF7EF]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-[#D97706] text-sm font-bold uppercase tracking-widest mb-2">Por que R$47 é uma decisão fácil</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E2A10] leading-tight">Compare antes de decidir</h2>
        </div>

        <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-100">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#1E2A10] text-white">
                <th className="text-left p-4 font-semibold rounded-tl-2xl">Opção</th>
                <th className="text-center p-4 font-semibold">Custo</th>
                <th className="text-center p-4 font-semibold">Recorrente</th>
                <th className="text-center p-4 font-semibold">Embasamento científico</th>
                <th className="text-center p-4 font-semibold">Uso prático imediato</th>
                <th className="text-center p-4 font-semibold rounded-tr-2xl">Uso seguro</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ item, cost, recurring, scientific, practical, safe, highlight }) => (
                <tr key={item} className={highlight ? "bg-[#2D5016] text-white font-bold" : "bg-white even:bg-[#FBF7EF] text-gray-700"}>
                  <td className="p-4 font-semibold">{highlight && <span className="text-[#D4A520] mr-2">⭐</span>}{item}</td>
                  <td className={`p-4 text-center font-bold ${highlight ? "text-[#D4A520]" : "text-[#1E2A10]"}`}>{cost}</td>
                  <td className="p-4 text-center text-xs">{recurring}</td>
                  <td className="p-4 text-center">{scientific ? <FaCheckCircle className={`mx-auto ${highlight ? "text-[#A3D977]" : "text-[#4A7C29]"}`} /> : <FaTimesCircle className="mx-auto text-red-400" />}</td>
                  <td className="p-4 text-center">{practical ? <FaCheckCircle className={`mx-auto ${highlight ? "text-[#A3D977]" : "text-[#4A7C29]"}`} /> : <FaTimesCircle className="mx-auto text-red-400" />}</td>
                  <td className="p-4 text-center">{safe ? <FaCheckCircle className={`mx-auto ${highlight ? "text-[#A3D977]" : "text-[#4A7C29]"}`} /> : <FaTimesCircle className="mx-auto text-red-400" />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-8">
          <button onClick={onButtonClick} className="inline-flex items-center gap-2 px-8 py-4 bg-[#D97706] hover:bg-[#B45309] text-white font-bold rounded-full shadow-lg transition-all hover:scale-[1.02]">
            QUERO O ALÍVIO NATURAL POR R$47 →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValueComparison;