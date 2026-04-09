"use client";

import React from "react";

const rows: [string, string][] = [
  ['"Sem açúcar" (sem explicar qual)', "12 adoçantes em 3 faixas com IG e preço"],
  ["Receitas copiadas da internet", "537+ receitas originais com template científico"],
  ['"É saudável" (sem dado)', "IG + CG + tabela nutricional em cada receita"],
  ["1 opção de adoçante", "3 faixas de substituição em CADA receita"],
  ["Sem referência científica", "73 artigos de periódicos revisados por pares"],
  ["15-30 receitas", "252 no guia + 150 ilustradas + 100 trufas"],
  ["Sem aplicação para negócio", "Capítulo completo com custo + margem 79%"],
];

const DiffTable: React.FC = () => (
  <section className="py-20 px-6 lg:px-12 bg-white" data-aos="fade-up">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
          Por que <span style={{ color: "#8B2252" }}>este</span> é diferente
        </h2>
      </div>
      <div className="rounded-2xl border border-rose-100 overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ backgroundColor: "rgba(139,34,82,0.05)" }}>
              <th className="text-left p-4 text-gray-400 font-normal border-b border-rose-100">Outros ebooks</th>
              <th className="text-left p-4 font-bold border-b border-rose-100" style={{ color: "#8B2252" }}>Doce Sem Culpa</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([other, ours], i) => (
              <tr key={i} className="border-b border-rose-50 last:border-0 hover:bg-rose-50/50 transition">
                <td className="p-4 text-gray-400">{other}</td>
                <td className="p-4 text-gray-800 font-medium">{ours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default DiffTable;
