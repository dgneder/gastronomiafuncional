"use client";

import React from "react";
import {
  FaPalette, FaFlask, FaMoon, FaCalendarAlt, FaFileAlt, FaStar,
} from "react-icons/fa";
import { MdFastfood } from "react-icons/md";

const orderBumps = [
  {
    icon: FaPalette,
    tag: "ADICIONE NO CHECKOUT",
    title: "Coberturas, Caldas e Toppings Funcionais",
    subtitle: "35 receitas de ganaches, coulis, chantillys, toppings e caldas — cada uma harmoniza com receitas específicas do ebook principal",
    value: "R$27",
    price: "R$14,90",
    color: "#6B1A3F",
    items: [
      "7 ganaches e coberturas de chocolate funcional",
      "8 coulis e compotas de frutas (antocianinas)",
      "10 cremes, chantillys e pastas funcionais",
      "5 toppings crocantes + 5 caldas especiais",
    ],
  },
  {
    icon: FaFlask,
    tag: "ACELERE SEUS RESULTADOS",
    title: "Guia Científico de Ingredientes Funcionais",
    subtitle: "48 fichas imprimíveis para consulta rápida — adoçantes, farinhas, gorduras, superingredientes bioativos",
    value: "R$27",
    price: "R$17,90",
    color: "#8B2252",
    items: [
      "12 fichas de adoçantes (mel, xilitol, allulose, monk fruit...)",
      "14 fichas de farinhas funcionais com IG e comportamento",
      "7 fichas de gorduras boas (TCM, azeite, abacate)",
      "15 fichas de superingredientes bioativos (cacau, chia...)",
    ],
  },
];

const memberBonuses = [
  {
    icon: FaMoon,
    tag: "🎁 BÔNUS EXCLUSIVO",
    title: "Protocolo de Compulsão Noturna",
    subtitle: "7 receitas SOS para ataques noturnos + Método dos 5 minutos para interromper a compulsão antes da cozinha",
    value: "R$27",
    color: "#5B8B7D",
    items: [
      "7 receitas calmantes (triptofano + magnésio)",
      "Método dos 5 Minutos — passo a passo anti-compulsão",
      "3 técnicas de psicologia alimentar aplicada",
      "Cronograma de rotina noturna para evitar o ataque",
    ],
  },
  {
    icon: FaCalendarAlt,
    tag: "🎁 BÔNUS EXCLUSIVO",
    title: "4 Cardápios Semanais Funcionais",
    subtitle: "Prontos para imprimir — Detox, Energia, Beleza e Semana das Crianças. Zero improvisação na cozinha.",
    value: "R$27",
    color: "#D4A04A",
    items: [
      "Semana Detox — foco em digestão e drenagem",
      "Semana Energia — disposição e performance",
      "Semana Beleza — pele, cabelo e colágeno",
      "Semana das Crianças — aprovada pelos 4 filhos da família Neder",
    ],
  },
];

const valueStack = [
  { label: "Ebook Doce Sem Culpa — 252 receitas + 20 caps + 73 refs",          value: "R$47" },
  { label: "Ebook Trufas & Docinhos — 100 receitas por objetivo",              value: "R$47" },
  { label: "Plataforma Hotmart — 150+ receitas diagramadas em PDF visual",     value: "R$97" },
  { label: "OB1 — Coberturas, Caldas e Toppings (35 receitas) 🎁",            value: "R$27" },
  { label: "OB2 — Guia Científico de 48 Ingredientes 🎁",                      value: "R$27" },
  { label: "Protocolo de Compulsão Noturna 🎁",                                value: "R$27" },
  { label: "4 Cardápios Semanais Funcionais 🎁",                               value: "R$27" },
];

const BonusSection: React.FC = () => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white" data-aos="fade-up">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest font-semibold mb-3" style={{ color: "#8B2252" }}>
            O ecossistema completo
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-stone-800">
            O ebook é só o começo.{" "}
            <span style={{ color: "#8B2252" }}>Você leva um sistema inteiro.</span>
          </h2>
        </div>

        {/* Order Bumps */}
        <p className="text-xs uppercase tracking-widest font-bold text-stone-400 mb-4">
          Opcional — Adicione no checkout
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {orderBumps.map((bonus, i) => (
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

        {/* Bônus inclusos */}
        <p className="text-xs uppercase tracking-widest font-bold text-stone-400 mb-4">
          Inclusos sem custo adicional
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {memberBonuses.map((bonus, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="rounded-2xl overflow-hidden border-2 shadow-sm hover:shadow-xl transition-all duration-300"
              style={{ borderColor: bonus.color + "50" }}
            >
              <div className="px-7 py-5" style={{ backgroundColor: bonus.color }}>
                <div className="flex items-center gap-3 mb-2">
                  <MdFastfood className="text-white text-base" />
                  <span className="text-xs font-bold text-white/90 uppercase tracking-widest">{bonus.tag}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{bonus.title}</h3>
                <p className="text-white/80 text-sm mt-1">{bonus.subtitle}</p>
              </div>
              <div className="p-7 bg-white grid sm:grid-cols-[1fr_auto] gap-4 items-center">
                <ul className="space-y-2.5">
                  {bonus.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-stone-600">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: bonus.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-center">
                  <div className="text-center p-4 rounded-xl bg-stone-50 border" style={{ borderColor: bonus.color + "40" }}>
                    <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">Valor</p>
                    <p className="text-stone-400 line-through text-sm">{bonus.value}</p>
                    <p className="text-2xl font-extrabold mt-1" style={{ color: bonus.color }}>GRÁTIS</p>
                    <p className="text-xs text-stone-400 mt-1">Incluso no kit</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Extras */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {[
            { icon: FaFileAlt, title: "Harmonização cruzada",      desc: "OB1 harmoniza com receitas numeradas do ebook principal" },
            { icon: FaFlask,   title: "Referências científicas",    desc: "73 referências indexadas (PubMed, Scopus) no ebook" },
          ].map((extra, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-6 rounded-xl border"
              style={{ background: "linear-gradient(135deg, #FBF5E8, #F5E6D0)", borderColor: "#D4A04A40" }}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#8B225215" }}
              >
                <extra.icon className="text-xl" style={{ color: "#8B2252" }} />
              </div>
              <div>
                <h4 className="font-bold text-stone-800">{extra.title}</h4>
                <p className="text-sm text-stone-500">{extra.desc}</p>
              </div>
              <span
                className="ml-auto text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap text-white"
                style={{ backgroundColor: "#8B2252" }}
              >
                INCLUSO
              </span>
            </div>
          ))}
        </div>

        {/* Stack de valor totalizado */}
        <div
          className="rounded-2xl p-8 border-2"
          style={{
            background: "linear-gradient(135deg, #FFFFFF, #FBF5E8)",
            borderColor: "#D4A04A"
          }}
          data-aos="zoom-in"
        >
          <p className="text-center text-sm uppercase tracking-widest font-bold mb-6" style={{ color: "#8B2252" }}>
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
          <div className="flex items-center justify-between pt-2 flex-wrap gap-4">
            <div>
              <p className="text-xs text-stone-400 uppercase tracking-wider">Valor total real</p>
              <p className="text-2xl font-extrabold text-stone-400 line-through">R$299</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#8B2252" }}>
                Preço especial de lançamento
              </p>
              <p className="text-5xl font-extrabold" style={{ color: "#8B2252" }}>R$67</p>
              <p className="text-xs text-stone-400 mt-0.5">ou 6× de R$12,80 s/ juros</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BonusSection;
