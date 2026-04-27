"use client";
import React from "react";
import { FaCheckCircle, FaGift } from "react-icons/fa";

const items = [
  { name: "Ebook Doce Sem Culpa — 252 receitas + 20 caps de ciência", value: "R$47" },
  { name: "Ebook Trufas & Docinhos — 100 receitas por objetivo",       value: "R$47" },
  { name: "Plataforma Hotmart — 150+ receitas diagramadas",            value: "R$97" },
  { name: "OB1 Coberturas, Caldas e Toppings — 35 receitas",           value: "R$27", bonus: true },
  { name: "OB2 Guia de Ingredientes — 48 fichas imprimíveis",          value: "R$27", bonus: true },
  { name: "Bônus Protocolo de Compulsão Noturna",                      value: "R$27", bonus: true },
  { name: "Bônus 4 Cardápios Semanais Funcionais",                     value: "R$27", bonus: true },
];

const OrderSummary: React.FC = () => {
  return (
    <div
      className="rounded-xl overflow-hidden border"
      style={{ borderColor: "rgba(120, 53, 15, 0.5)" }}
    >
      <div
        className="px-5 py-3 border-b"
        style={{
          backgroundColor: "rgba(28, 25, 23, 0.8)",
          borderColor: "rgba(120, 53, 15, 0.5)"
        }}
      >
        <h3 className="text-sm font-bold text-stone-300 uppercase tracking-wider">
          Resumo do seu pedido
        </h3>
      </div>

      <div className="px-5 py-4 space-y-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-2.5 grow">
              {item.bonus ? (
                <FaGift className="mt-0.5 shrink-0 text-sm" style={{ color: "#D4A04A" }} />
              ) : (
                <FaCheckCircle className="text-green-500 mt-0.5 shrink-0 text-sm" />
              )}
              <span className="text-stone-300 text-sm leading-snug">{item.name}</span>
            </div>
            <span className="text-stone-500 text-sm line-through whitespace-nowrap">{item.value}</span>
          </div>
        ))}
      </div>

      <div
        className="px-5 py-4 border-t"
        style={{
          backgroundColor: "rgba(28, 25, 23, 0.5)",
          borderColor: "rgba(120, 53, 15, 0.5)"
        }}
      >
        <div className="flex items-center justify-between mb-1">
          <span className="text-stone-400 text-sm">Valor total</span>
          <span className="text-stone-500 text-sm line-through">R$299</span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-stone-400 text-sm">Preço regular</span>
          <span className="text-stone-400 text-sm line-through">R$147</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-base">🎉 Lançamento</span>
            <span
              className="px-2 py-0.5 rounded text-xs font-bold border"
              style={{
                color: "#E8B84A",
                backgroundColor: "rgba(212, 160, 74, 0.15)",
                borderColor: "rgba(212, 160, 74, 0.3)"
              }}
            >
              78% OFF
            </span>
          </div>
          <span className="font-extrabold text-2xl" style={{ color: "#E8B84A" }}>R$67</span>
        </div>
        <p className="text-stone-500 text-xs mt-2 text-right">ou 6x de R$12,80 sem juros</p>
      </div>
    </div>
  );
};

export default OrderSummary;
