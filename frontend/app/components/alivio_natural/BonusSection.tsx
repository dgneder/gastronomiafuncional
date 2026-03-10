"use client";

import React from "react";
import { FaGift, FaCheckCircle } from "react-icons/fa";

const bonuses = [
  {
    tag: "Bônus 1 — Incluído Gratuitamente",
    title: "Guia de Segurança: Interações Medicamentosas",
    subtitle: "O que NÃO misturar — Consulta rápida com sistema de semáforo",
    value: "Valor: R$27",
    desc: "Plantas medicinais × medicamentos convencionais. Tabela mestra com semáforo de risco (🟢🟡🔴) para 20+ plantas e 6 classes de medicamentos. Indispensável para quem toma remédios contínuos.",
    items: [
      "As 10 interações mais perigosas documentadas",
      "Tabela mestra planta × medicamento",
      "Guia por classe (anticoagulantes, antidepressivos, etc.)",
      "10 Regras de Ouro da segurança",
    ],
    accent: "border-[#D97706]",
    tagColor: "bg-[#D97706] text-white",
  },
  {
    tag: "Bônus 2 — Incluído Gratuitamente",
    title: "Guia Prático de Pomadas e Compressas Naturais",
    subtitle: "12 receitas com passo a passo para preparar em casa",
    value: "Valor: R$19,90",
    desc: "Pomadas analgésicas, compressas terapêuticas, cataplasmas, óleos de massagem e banhos medicinais. Tudo que você precisa para aplicar as plantas diretamente onde dói.",
    items: [
      "Pomada de Arnica (equivalente natural ao gel de diclofenaco)",
      "Bálsamo Calmante de Lavanda e Camomila",
      "Compressa de Cúrcuma para articulações",
      "Óleo Aquecedor de Gengibre e Cravo",
      "Escalda-pés Anti-inflamatório",
      "Banho de Imersão para Fibromialgia",
    ],
    accent: "border-[#4A7C29]",
    tagColor: "bg-[#4A7C29] text-white",
  },
];

const BonusSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-[#FBF7EF]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#D97706] text-white px-5 py-2 rounded-full font-bold text-sm mb-4">
            <FaGift />
            Você recebe muito mais
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E2A10] leading-tight">
            2 Guias Bônus <span className="text-[#4A7C29]">incluídos sem custo extra</span>
          </h2>
        </div>

        <div className="space-y-5">
          {bonuses.map(({ tag, title, subtitle, value, desc, items, accent, tagColor }) => (
            <div key={title} className={`bg-white rounded-2xl border-2 ${accent} overflow-hidden shadow-sm hover:shadow-md transition-shadow`}>
              <div className="p-5 md:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider ${tagColor}`}>{tag}</span>
                  <span className="text-sm font-bold text-gray-400 line-through">{value}</span>
                </div>
                <h3 className="text-lg font-extrabold text-[#1E2A10] mb-0.5">{title}</h3>
                <p className="text-sm text-gray-500 italic mb-3">{subtitle}</p>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">{desc}</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {items.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <FaCheckCircle className="text-[#4A7C29] mt-0.5 shrink-0 text-xs" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#1E2A10] rounded-2xl p-6 text-center text-white">
          <p className="text-white/70 text-sm mb-1">Tudo junto, o valor seria:</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="text-center">
              <p className="text-white/50 text-xs">Alívio Natural</p>
              <p className="text-[#D4A520] font-black text-lg">R$97</p>
            </div>
            <span className="text-white/30 text-2xl">+</span>
            <div className="text-center">
              <p className="text-white/50 text-xs">Bônus 1 (Interações)</p>
              <p className="text-[#D4A520] font-black text-lg">R$27</p>
            </div>
            <span className="text-white/30 text-2xl">+</span>
            <div className="text-center">
              <p className="text-white/50 text-xs">Bônus 2 (Pomadas)</p>
              <p className="text-[#D4A520] font-black text-lg">R$19,90</p>
            </div>
            <span className="text-white/30 text-2xl">=</span>
            <div className="text-center">
              <p className="text-white/50 text-xs line-through">R$143,90</p>
              <p className="text-white font-black text-3xl">R$47</p>
            </div>
          </div>
          <p className="text-[#A3D977] text-xs mt-2 font-semibold">
            Tudo por R$47 — menos que uma caixa de anti-inflamatório
          </p>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;