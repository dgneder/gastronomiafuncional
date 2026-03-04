"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const chapters = [
  {
    num: "01",
    title: "Por que você sente dor — a ciência da inflamação",
    desc: "Como a inflamação funciona no corpo, a diferença entre dor aguda e crônica, o papel do NF-κB e das COX-1/COX-2, e por que tratar a causa é mais eficaz do que apenas bloquear a dor.",
  },
  {
    num: "02",
    title: "O que os anti-inflamatórios fazem — e o que eles não fazem",
    desc: "Mecanismo de ação dos AINEs, por que o uso crônico cria dependência, efeitos colaterais sistêmicos documentados e como as plantas medicinais atuam de forma complementar.",
  },
  {
    num: "03",
    title: "As 15 plantas — fichas científicas completas",
    desc: "Para cada planta: nome científico, princípio ativo, mecanismo de ação, dosagem validada nos estudos, modo de preparo correto, contraindicações e nível de evidência (★ a ★★★★★).",
  },
  {
    num: "04",
    title: "Protocolos por tipo de dor — o seu plano",
    desc: "6 protocolos com cronograma hora a hora: Articulações, Lombalgia, Enxaqueca, Fibromialgia, Dor Aguda e Manutenção. Cada um com combinações específicas e sinais de alerta.",
  },
  {
    num: "05",
    title: "Tabela mestra de preparações",
    desc: "Guia rápido de preparo para todas as formas de uso: chás por decocção e infusão, tinturas, óleos infusionados, cataplasmas e cápsulas. Tempos, temperaturas e proporções exatas.",
  },
  {
    num: "06",
    title: "Lista de compras e Diário de Dor",
    desc: "Kit Essencial (R$50–90) com os ingredientes das plantas mais importantes, onde comprar e estimativa de custo. Diário de dor estruturado para monitorar a evolução dos protocolos.",
  },
];

const ContentDetails: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-[#D97706] text-sm font-bold uppercase tracking-widest mb-2">
            Estrutura do Guia
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E2A10] leading-tight mb-3">
            O que você encontra dentro
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            80+ páginas organizadas para consulta rápida — você não precisa ler
            do início ao fim para começar a usar.
          </p>
        </div>

        <div className="space-y-2">
          {chapters.map(({ num, title, desc }, i) => (
            <div
              key={i}
              className={`rounded-xl border overflow-hidden transition-colors ${
                open === i ? "border-[#4A7C29]" : "border-gray-200 hover:border-[#4A7C29]/40"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center gap-4 p-4 text-left bg-white hover:bg-[#FBF7EF] transition-colors"
              >
                <div className="w-9 h-9 bg-[#4A7C29] rounded-full flex items-center justify-center shrink-0 text-white text-xs font-black">
                  {num}
                </div>
                <span className="font-semibold text-[#1E2A10] text-sm flex-1 leading-snug">
                  {title}
                </span>
                <FaChevronDown
                  className={`text-gray-400 shrink-0 text-xs transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-60" : "max-h-0"
                }`}
              >
                <p className="px-4 pb-4 pl-16 text-gray-600 text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentDetails;
