"use client";
import React from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineCake } from "react-icons/md";

const obs = [
  { tag: "UPGRADE RECOMENDADO", title: "Kit Fichas Técnicas Ilustradas", subtitle: "30 fichas A5 das sobremesas hero — imprimíveis e plastificáveis", value: "R$47", price: "R$14,90", color: "#8B2252",
    items: ["30 fichas das sobremesas mais pedidas", "Foto + passo a passo + macros em cada ficha", "Guia de substituições por restrição", "Tabela de adoçantes funcionais comparados"] },
  { tag: "ACELERE SEUS RESULTADOS", title: "Guia Científico de Ingredientes", subtitle: "48 fichas completas dos ingredientes funcionais da coleção", value: "R$37", price: "R$14,90", color: "#4A2C5A",
    items: ["Função bioativa documentada por estudo", "Dose funcional diária recomendada", "Interações com medicamentos e alertas", "Fornecedores e onde comprar no Brasil"] },
];

const valueStack = [
  { label: "Volume 1 — 150 Sobremesas Funcionais ilustradas", value: "R$47" },
  { label: "Volume 2 — 252 receitas Doce Sem Culpa + ciência", value: "R$97" },
  { label: "Volume 3 — 100 Trufas & Docinhos Funcionais", value: "R$67" },
  { label: "Área de Membros — módulos navegáveis", value: "R$47" },
  { label: "Sistema de Tags + Índice Cruzado 🎁", value: "R$17" },
  { label: "Fichas Nutricionais + Box Científico 🎁", value: "R$17" },
];

const BonusSection: React.FC = () => (
  <section className="py-20 px-6 lg:px-12 bg-white" data-aos="fade-up">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-sm uppercase tracking-widest font-semibold mb-3" style={{ color: "#8B2252" }}>Complete o ecossistema</p>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
          A sobremesa é só o começo.{" "}
          <span style={{ color: "#8B2252" }}>A ciência por trás muda tudo.</span>
        </h2>
      </div>
      <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-4">Adicione no checkout</p>
      <div className="grid md:grid-cols-2 gap-8 mb-14">
        {obs.map((ob, i) => (
          <div key={i} data-aos="fade-up" data-aos-delay={i * 150}
            className="rounded-2xl overflow-hidden border border-rose-100 hover:border-rose-200 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="px-7 py-5" style={{ backgroundColor: ob.color }}>
              <div className="flex items-center gap-3 mb-2">
                <FaStar className="text-amber-300 text-sm" />
                <span className="text-xs font-bold text-white/90 uppercase tracking-widest">{ob.tag}</span>
              </div>
              <h3 className="text-xl font-bold text-white">{ob.title}</h3>
              <p className="text-white/70 text-sm mt-1">{ob.subtitle}</p>
            </div>
            <div className="p-7 bg-white">
              <ul className="space-y-3 mb-6">
                {ob.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: ob.color }} />{item}
                  </li>
                ))}
              </ul>
              <div className="flex items-baseline gap-3 pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-400 line-through">Valor: {ob.value}</span>
                <span className="text-2xl font-extrabold" style={{ color: ob.color }}>+{ob.price}</span>
                <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-1 rounded">No checkout</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-2xl p-8 border-2 border-rose-200" style={{ background: "linear-gradient(135deg, #FFF0F5, #FCEEF4)" }} data-aos="zoom-in">
        <p className="text-center text-sm uppercase tracking-widest font-bold mb-6" style={{ color: "#8B2252" }}>Tudo que você recebe hoje</p>
        <div className="space-y-3 mb-6">
          {valueStack.map((item, i) => (
            <div key={i} className="flex justify-between items-center text-sm border-b border-rose-100 pb-2">
              <span className="text-gray-600">{item.label}</span>
              <span className="text-gray-300 line-through ml-4 whitespace-nowrap">{item.value}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between pt-2">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider">Valor total real</p>
            <p className="text-2xl font-extrabold text-gray-300 line-through">R$292</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#8B2252" }}>Preço especial de lançamento</p>
            <p className="text-5xl font-extrabold" style={{ color: "#8B2252" }}>R$47</p>
            <p className="text-xs text-gray-400 mt-0.5">ou 3× de R$15,90 s/ juros</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BonusSection;
