"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const chapters = [
  {
    emoji: "📖",
    title: "Capítulo 1 — Como seu Sistema Imunológico Funciona",
    items: [
      "As duas linhas de defesa do corpo (imunidade inata vs. adaptativa)",
      "Por que inflamação crônica é o maior inimigo silencioso",
      "Os 7 fatores que enfraquecem suas defesas",
      "Como as plantas atuam: imunoestimulantes vs. imunomoduladores",
    ],
  },
  {
    emoji: "🌿",
    title: "Capítulo 2 — As 15 Plantas (fichas completas)",
    items: [
      "Nome popular e científico, nível de evidência (★ a ★★★★★)",
      "Princípios ativos, mecanismo de ação, formas de uso e dosagem",
      "Contraindicações, interações medicamentosas e efeitos adversos",
      'Box "O que a ciência diz" com meta-análises e estudos clínicos',
    ],
    categories: [
      { color: "bg-green-100 text-green-800", label: "🟢 Imunoestimulantes", plants: "Equinácea · Astragalus · Própolis · Sabugueiro" },
      { color: "bg-yellow-100 text-yellow-800", label: "🟡 Anti-inflamatórios", plants: "Cúrcuma · Gengibre · Romã · Unha-de-gato" },
      { color: "bg-blue-100 text-blue-800", label: "🔵 Antimicrobianos", plants: "Alho · Orégano · Melaleuca · Guaco" },
      { color: "bg-purple-100 text-purple-800", label: "🟣 Protetores Respiratórios", plants: "Eucalipto · Tomilho · Pelargônio" },
    ],
  },
  {
    emoji: "🧪",
    title: "Capítulo 3 — Guia Completo de Preparações",
    items: [
      "7 métodos: infusão, decocção, tintura, cápsulas, inalação, gargarejo, uso tópico",
      "Tabela-mestre indicando o método ideal para cada planta",
      "O alho precisa de 10 minutos, a cúrcuma precisa de 3 aliados",
      "Por que chá de equinácea é a pior forma de usar equinácea",
    ],
  },
  {
    emoji: "📋",
    title: "Capítulo 4 — 5 Protocolos Prontos (hora a hora)",
    items: [],
    protocols: [
      { name: "Prevenção Diária", cost: "R$ 80-150/mês", desc: "Rotina de manutenção com astragalus + cúrcuma + alho + gengibre" },
      { name: "Sentiu Chegando", cost: "R$ 165-290 kit", desc: "Intervenção intensiva nas primeiras 48h. 10 horários/dia" },
      { name: "Recuperação Pós-Doença", cost: "R$ 230-380/mês", desc: "Foco em reconstrução após gripe forte ou antibióticos" },
      { name: "Blindagem Sazonal", cost: "R$ 145-255/mês", desc: "Proteção preventiva para mudança de estação" },
      { name: "Família com Crianças", cost: "R$ 130-225", desc: "Dosagens pediátricas seguras (6-12 anos)" },
    ],
  },
  {
    emoji: "❓",
    title: "Capítulo 5 — FAQ, Lista de Compras e Diário",
    items: [
      "10 perguntas frequentes respondidas",
      "Lista de compras consolidada em 3 níveis de prioridade",
      "Diário de 4 semanas para registrar progresso",
    ],
  },
];

const ContentDetails = () => {
  const [expanded, setExpanded] = useState<number | null>(1);

  return (
    <section className="py-16 lg:py-20 px-4 bg-[#FBF7EF]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 text-center mb-12">
          O que você vai encontrar{" "}
          <span className="text-[#4A7C29]">dentro do guia</span>
        </h2>

        <div className="space-y-4">
          {chapters.map((ch, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#4A7C29]/10 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{ch.emoji}</span>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                    {ch.title}
                  </h3>
                </div>
                {expanded === i ? (
                  <FaChevronUp className="text-[#4A7C29] flex-shrink-0" />
                ) : (
                  <FaChevronDown className="text-gray-400 flex-shrink-0" />
                )}
              </button>

              {expanded === i && (
                <div className="px-5 sm:px-6 pb-6 border-t border-gray-100 pt-4">
                  {ch.items.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {ch.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-gray-600 text-sm"
                        >
                          <span className="text-[#4A7C29] mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {ch.categories && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                      {ch.categories.map((cat, k) => (
                        <div
                          key={k}
                          className={`${cat.color} rounded-xl p-3`}
                        >
                          <p className="font-bold text-xs mb-1">{cat.label}</p>
                          <p className="text-xs opacity-80">{cat.plants}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {ch.protocols && (
                    <div className="space-y-3">
                      {ch.protocols.map((p, k) => (
                        <div
                          key={k}
                          className="flex items-start gap-3 bg-[#FBF7EF] rounded-xl p-4"
                        >
                          <span className="bg-[#4A7C29] text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                            {k + 1}
                          </span>
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="font-bold text-gray-900 text-sm">
                                {p.name}
                              </h4>
                              <span className="bg-[#B8860B]/10 text-[#B8860B] text-[10px] font-bold px-2 py-0.5 rounded-full">
                                {p.cost}
                              </span>
                            </div>
                            <p className="text-gray-500 text-xs mt-1">{p.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentDetails;
