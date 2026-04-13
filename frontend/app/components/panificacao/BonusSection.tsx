"use client";

import React from "react";
import { FaCoffee, FaUtensils, FaTable, FaFileAlt, FaStar } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";

const bonuses = [
  {
    icon: FaCoffee,
    tag: "UPGRADE RECOMENDADO",
    title: "Mesa Completa — Bebidas Funcionais",
    subtitle: "38 receitas de cafés, chás, smoothies e fermentados para potencializar seus pães",
    value: "R$47",
    price: "R$14,90",
    color: "#2C4A5A",
    items: [
      "Cafés bulletproof e golden lattes",
      "Chás terapêuticos com fitoterapia",
      "Smoothies e shots matinais",
      "Kombucha, kefir e tepache artesanal",
    ],
  },
  {
    icon: FaUtensils,
    tag: "ACELERE SEUS RESULTADOS",
    title: "Pão na Mesa — Acompanhamentos",
    subtitle: "52 receitas de pastas, geleias, fermentados, molhos e pestos para passar no pão",
    value: "R$67",
    price: "R$14,90",
    color: "#4A5D3A",
    items: [
      "Manteigas de oleaginosas artesanais",
      "Geleias sem açúcar com chia",
      "Chucrute, kimchi e pickles caseiros",
      "Queijos vegetais e pestos",
    ],
  },
];

const memberBonus = {
  tag: "INCLUSO NA ÁREA DE MEMBROS",
  title: "50 Sanduíches Naturais Funcionais",
  subtitle: "Café da Manhã · Almoço · Pós-Treino · Lancheira · Gourmet",
  value: "R$27",
  color: "#7B4F2C",
  items: [
    "Cada sanduíche com pão indicado do guia PSC",
    "Macros estimados por montagem",
    "Dica funcional em cada receita",
    "Categorias: Fitness, Infantil, Gourmet e mais",
  ],
};

const extras = [
  { icon: FaTable,   title: "Tabela Mestra de Farinhas",  desc: "14 farinhas com nota, perfil e combinações ideais" },
  { icon: FaFileAlt, title: "Planilha de Formulação",      desc: "Calcule hidratação e porcentagem de padeiro automaticamente" },
];

const valueStack = [
  { label: "Kit Pão Sem Culpa — 246 receitas + ciência",     value: "R$97" },
  { label: "Área de Membros — 11 módulos navegáveis",    value: "R$47" },
  { label: "50 Sanduíches Naturais Funcionais 🎁",       value: "R$27" },
  { label: "5 Receitas: Café da Manhã Funcional 🎁",     value: "R$27" },
  { label: "Planilha de Formulação 🎁",                   value: "R$17" },
  { label: "Guia Rápido de 14 Farinhas 🎁",              value: "R$17" },
  { label: "Checklist de Despensa Funcional 🎁",         value: "R$9"  },
];

const BonusSection: React.FC = () => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white" data-aos="fade-up">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest font-semibold mb-3" style={{ color: "#C4622D" }}>
            O ecossistema completo
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-stone-800">
            O pão é só o começo.{" "}
            <span style={{ color: "#6B3A2A" }}>A mesa inteira pode ser funcional.</span>
          </h2>
        </div>

        {/* Order Bumps */}
        <p className="text-xs uppercase tracking-widest font-bold text-stone-400 mb-4">Adicione no checkout</p>
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {bonuses.map((bonus, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="rounded-2xl overflow-hidden border border-stone-200 hover:border-amber-300 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="px-7 py-5" style={{ backgroundColor: bonus.color }}>
                <div className="flex items-center gap-3 mb-2">
                  <FaStar className="text-amber-300 text-sm" />
                  <span className="text-xs font-bold text-white/90 uppercase tracking-widest">{bonus.tag}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{bonus.title}</h3>
                <p className="text-white/70 text-sm mt-1">{bonus.subtitle}</p>
              </div>
              <div className="p-7 bg-white">
                <ul className="space-y-3 mb-6">
                  {bonus.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-stone-600">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: bonus.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-baseline gap-3 pt-4 border-t border-stone-100">
                  <span className="text-sm text-stone-400 line-through">Valor: {bonus.value}</span>
                  <span className="text-2xl font-extrabold" style={{ color: bonus.color }}>
                    +{bonus.price}
                  </span>
                  <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-1 rounded">No checkout</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bônus da Área de Membros */}
        <p className="text-xs uppercase tracking-widest font-bold text-stone-400 mb-4">Incluso na área de membros</p>
        <div className="mb-10 rounded-2xl overflow-hidden border border-amber-200 shadow-sm hover:shadow-xl transition-all duration-300">
          <div className="px-7 py-5" style={{ backgroundColor: memberBonus.color }}>
            <div className="flex items-center gap-3 mb-2">
              <MdFastfood className="text-amber-300 text-base" />
              <span className="text-xs font-bold text-white/90 uppercase tracking-widest">{memberBonus.tag}</span>
            </div>
            <h3 className="text-xl font-bold text-white">{memberBonus.title}</h3>
            <p className="text-white/70 text-sm mt-1">{memberBonus.subtitle}</p>
          </div>
          <div className="p-7 bg-amber-50/40 grid sm:grid-cols-2 gap-4">
            <ul className="space-y-3">
              {memberBonus.items.map((item, j) => (
                <li key={j} className="flex items-center gap-2 text-sm text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: memberBonus.color }} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-center">
              <div className="text-center p-4 rounded-xl bg-white border border-amber-200">
                <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">Valor</p>
                <p className="text-stone-400 line-through text-sm">{memberBonus.value}</p>
                <p className="text-2xl font-extrabold mt-1" style={{ color: memberBonus.color }}>GRÁTIS</p>
                <p className="text-xs text-stone-400 mt-1">Incluso no guia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Extras */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {extras.map((extra, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-6 rounded-xl bg-amber-50 border border-amber-100"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "#D4A04A20" }}>
                <extra.icon className="text-xl" style={{ color: "#D4A04A" }} />
              </div>
              <div>
                <h4 className="font-bold text-stone-800">{extra.title}</h4>
                <p className="text-sm text-stone-500">{extra.desc}</p>
              </div>
              <span className="ml-auto text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full whitespace-nowrap">
                INCLUSO
              </span>
            </div>
          ))}
        </div>

        {/* Stack de valor totalizado */}
        <div
          className="rounded-2xl p-8 border-2 border-amber-300"
          style={{ background: "linear-gradient(135deg, #FFF8F0, #FAF3E8)" }}
          data-aos="zoom-in"
        >
          <p className="text-center text-sm uppercase tracking-widest font-bold mb-6" style={{ color: "#C4622D" }}>
            Tudo que você recebe hoje
          </p>
          <div className="space-y-3 mb-6">
            {valueStack.map((item, i) => (
              <div key={i} className="flex justify-between items-center text-sm border-b border-amber-100 pb-2">
                <span className="text-stone-600">{item.label}</span>
                <span className="text-stone-400 line-through ml-4 whitespace-nowrap">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between pt-2">
            <div>
              <p className="text-xs text-stone-400 uppercase tracking-wider">Valor total real</p>
              <p className="text-2xl font-extrabold text-stone-400 line-through">R$241</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold text-red-600 uppercase tracking-wider mb-1">
                Preço especial de lançamento
              </p>
              <p className="text-5xl font-extrabold" style={{ color: "#6B3A2A" }}>R$67</p>
              <p className="text-xs text-stone-400 mt-0.5">ou 6× de R$12,80 s/ juros</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BonusSection;