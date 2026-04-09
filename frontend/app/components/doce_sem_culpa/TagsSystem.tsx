"use client";
import React from "react";

const dietaryTags = [
  { emoji: "🟢", code: "SG",  label: "Sem Glúten",          color: "#22C55E" },
  { emoji: "🔵", code: "SL",  label: "Sem Lactose",          color: "#3B82F6" },
  { emoji: "🟡", code: "SA",  label: "Sem Açúcar Refinado",  color: "#EAB308" },
  { emoji: "🟤", code: "SO",  label: "Sem Ovo",              color: "#92400E" },
  { emoji: "🟣", code: "VEG", label: "Vegano",               color: "#A855F7" },
  { emoji: "🔴", code: "LC",  label: "Low Carb",             color: "#EF4444" },
  { emoji: "🟠", code: "K",   label: "Keto",                 color: "#F97316" },
];
const healthTags = [
  { emoji: "💙", code: "DIA",      label: "Controle Glicêmico",   color: "#3B82F6" },
  { emoji: "💚", code: "CARDIO",   label: "Saúde Cardiovascular", color: "#22C55E" },
  { emoji: "🧡", code: "RENAL",    label: "Amigo do Rim",         color: "#F97316" },
  { emoji: "🌿", code: "ANTI-INF", label: "Anti-inflamatório",    color: "#5B7B6D" },
  { emoji: "🛡️", code: "IMUNE",    label: "Imunidade",            color: "#6366F1" },
  { emoji: "💪", code: "FIT",      label: "Fitness / Proteico",   color: "#DC2626" },
  { emoji: "💰", code: "PV",       label: "Para Vender",          color: "#D4A04A" },
];

const TagsSystem: React.FC = () => (
  <section className="py-20 px-6 lg:px-12" style={{ background: "linear-gradient(180deg, #FFF0F5, #FCEEF4)" }} data-aos="fade-up">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-sm uppercase tracking-widest font-semibold mb-3" style={{ color: "#8B2252" }}>Sistema de Tags</p>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
          Encontre <span style={{ color: "#8B2252" }}>a sobremesa certa</span> em segundos
        </h2>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          Cada receita classificada com tags duplas: restrição alimentar + condição de saúde. Como um GPS para a sua necessidade.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-rose-100" data-aos="fade-right">
          <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2"><span className="text-xl">🏷️</span> Tags de Restrição Alimentar</h3>
          <div className="space-y-3">
            {dietaryTags.map((tag, i) => (
              <div key={i} className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-rose-50 transition-colors">
                <span className="text-lg">{tag.emoji}</span>
                <span className="px-2 py-0.5 rounded text-xs font-bold text-white" style={{ backgroundColor: tag.color }}>{tag.code}</span>
                <span className="text-gray-600 text-sm">{tag.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-rose-100" data-aos="fade-left">
          <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2"><span className="text-xl">❤️</span> Tags de Condição de Saúde</h3>
          <div className="space-y-3">
            {healthTags.map((tag, i) => (
              <div key={i} className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-rose-50 transition-colors">
                <span className="text-lg">{tag.emoji}</span>
                <span className="px-2 py-0.5 rounded text-xs font-bold text-white" style={{ backgroundColor: tag.color }}>{tag.code}</span>
                <span className="text-gray-600 text-sm">{tag.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 bg-white rounded-2xl p-8 shadow-sm border border-rose-100 text-center" data-aos="fade-up">
        <p className="text-gray-500 text-sm mb-3">Exemplo de uso</p>
        <p className="text-gray-700 text-lg">
          Se você é <span className="font-bold text-purple-600">vegano</span> e busca{" "}
          <span className="font-bold text-blue-600">controle glicêmico</span>, procure receitas com:
        </p>
        <div className="flex items-center justify-center gap-3 mt-4">
          <span className="px-3 py-1 rounded-full text-sm font-bold text-white bg-purple-500">🟣 VEG</span>
          <span className="text-gray-400 font-bold">+</span>
          <span className="px-3 py-1 rounded-full text-sm font-bold text-white bg-blue-500">💙 DIA</span>
        </div>
      </div>
    </div>
  </section>
);

export default TagsSystem;
