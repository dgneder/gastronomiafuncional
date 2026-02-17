"use client";

import React from "react";
import { FaSearch, FaUserMd, FaPills, FaSeedling, FaCheck, FaTimes, FaMinus } from "react-icons/fa";

const ValueComparison = () => {
  return (
    <section className="py-16 lg:py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            Quanto custa{" "}
            <span className="text-[#B8860B]">NÃO resolver isso?</span>
          </h2>
        </div>

        {/* Tabela comparativa — mobile-friendly como cards */}
        <div className="hidden lg:block overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 px-4 text-left text-gray-500 font-medium" />
                <th className="py-3 px-4 text-center text-gray-600">
                  <FaSearch className="mx-auto mb-1" />
                  Pesquisar sozinha
                </th>
                <th className="py-3 px-4 text-center text-gray-600">
                  <FaUserMd className="mx-auto mb-1" />
                  Consulta especialista
                </th>
                <th className="py-3 px-4 text-center text-gray-600">
                  <FaPills className="mx-auto mb-1" />
                  Medicação contínua
                </th>
                <th className="py-3 px-4 text-center bg-[#F0F7F0] rounded-t-xl">
                  <FaSeedling className="mx-auto mb-1 text-[#4A7C29]" />
                  <span className="text-[#2D5016] font-bold">Sono e Calma</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "Investimento", vals: ['"Grátis" (+ horas perdidas)', "R$300-600/consulta", "R$30-80/mês + consultas", "R$37 (único)"] },
                { label: "Tempo até resultado", vals: ["Meses de tentativa e erro", "Semanas (se acertar)", "Dias (com efeitos colaterais)", "14-28 dias"] },
                { label: "Risco de erro", vals: ["Alto", "Baixo", "Baixo", "Baixo (protocolo guiado)"] },
                { label: "Dependência", vals: ["Nenhuma", "Nenhuma", "Potencialmente alta", "Nenhuma"] },
                { label: "Contraindicações claras", vals: ["Raramente mencionadas", "Sim", "Sim (bula)", "Sim (cada planta)"] },
                { label: "Protocolo personalizado", vals: ["Não", "Sim", "Parcial", "Sim (5 perfis)"] },
              ].map((row, i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-gray-700">{row.label}</td>
                  {row.vals.map((val, vi) => (
                    <td key={vi} className={`py-3 px-4 text-center text-gray-600 ${vi === 3 ? "bg-[#F0F7F0] font-bold text-[#2D5016]" : ""}`}>
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Versão mobile — cards */}
        <div className="lg:hidden space-y-4 mb-8">
          {/* Card Sono e Calma destacado */}
          <div className="bg-[#F0F7F0] border-2 border-[#4A7C29]/20 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <FaSeedling className="text-[#4A7C29]" />
              <h3 className="font-bold text-[#2D5016]">Sono e Calma</h3>
            </div>
            <div className="space-y-2 text-sm">
              <p><strong>Investimento:</strong> R$37 (único)</p>
              <p><strong>Resultado:</strong> 14-28 dias</p>
              <p><strong>Risco de erro:</strong> Baixo (protocolo guiado)</p>
              <p><strong>Dependência:</strong> Nenhuma</p>
              <p><strong>Protocolos:</strong> 5 perfis diferentes</p>
            </div>
          </div>
          {/* Comparativos resumidos */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: FaSearch, title: "Pesquisar sozinha", cost: '"Grátis"', time: "Meses" },
              { icon: FaUserMd, title: "Especialista", cost: "R$300-600", time: "Semanas" },
              { icon: FaPills, title: "Medicação", cost: "R$30-80/mês", time: "Dias" },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 text-center">
                <item.icon className="mx-auto text-gray-400 mb-2" />
                <p className="text-xs font-bold text-gray-700 mb-1">{item.title}</p>
                <p className="text-xs text-gray-500">{item.cost}</p>
                <p className="text-xs text-gray-500">{item.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-gray-500 italic">
          * O guia não substitui acompanhamento médico. Ele te dá conhecimento
          para usar plantas com segurança — sozinha ou em conjunto com seu
          tratamento.
        </p>
      </div>
    </section>
  );
};

export default ValueComparison;
