"use client";
import React from "react";
import { FaCheckCircle, FaGift } from "react-icons/fa";

const items = [
  { name: "Pão Sem Culpa — 246 receitas + 12 caps de ciência", value: "R$97" },
  { name: "Área de Membros — 11 módulos navegáveis",           value: "R$47" },
  { name: "50 Sanduíches Naturais Funcionais",                 value: "R$27", bonus: true },
  { name: "5 Receitas Bônus — Café da Manhã Funcional",        value: "R$27", bonus: true },
  { name: "Planilha de Formulação",                            value: "R$17", bonus: true },
  { name: "Guia Rápido de Farinhas — 14 fichas",               value: "R$17", bonus: true },
  { name: "Checklist de Despensa Funcional",                   value: "R$9",  bonus: true },
];

const OrderSummary: React.FC = () => {
  return (
    <div className="rounded-xl border border-stone-700/50 overflow-hidden">
      <div className="px-5 py-3 bg-stone-800/80 border-b border-stone-700/50">
        <h3 className="text-sm font-bold text-stone-300 uppercase tracking-wider">Resumo do seu pedido</h3>
      </div>

      <div className="px-5 py-4 space-y-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-2.5 grow">
              {item.bonus
                ? <FaGift className="text-amber-500 mt-0.5 shrink-0 text-sm" />
                : <FaCheckCircle className="text-green-500 mt-0.5 shrink-0 text-sm" />}
              <span className="text-stone-300 text-sm leading-snug">{item.name}</span>
            </div>
            <span className="text-stone-500 text-sm line-through whitespace-nowrap">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="px-5 py-4 bg-stone-800/50 border-t border-stone-700/50">
        <div className="flex items-center justify-between mb-1">
          <span className="text-stone-400 text-sm">Valor total</span>
          <span className="text-stone-500 text-sm line-through">R$241</span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-stone-400 text-sm">Preço regular</span>
          <span className="text-stone-400 text-sm line-through">R$97</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-base">🎉 Lançamento</span>
            <span className="px-2 py-0.5 bg-amber-900/50 border border-amber-700/50 rounded text-amber-400 text-xs font-bold">52% OFF</span>
          </div>
          <span className="text-amber-400 font-extrabold text-2xl">R$47</span>
        </div>
        <p className="text-stone-500 text-xs mt-2 text-right">ou 3× de R$15,90 sem juros</p>
      </div>
    </div>
  );
};

export default OrderSummary;
