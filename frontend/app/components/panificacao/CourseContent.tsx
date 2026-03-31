"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronRight, FaBookOpen, FaFlask, FaTools, FaBreadSlice } from "react-icons/fa";

interface Part {
  icon: React.ElementType;
  title: string;
  color: string;
  chapters: { name: string; desc: string }[];
}

const parts: Part[] = [
  {
    icon: FaFlask,
    title: "Parte 1 — A Ciência do Pão",
    color: "#5B7B6D",
    chapters: [
      { name: "Cap. 1 — O Pão e o Corpo",        desc: "O que acontece quando comemos: índice glicêmico, inflamação, glúten e a saída funcional." },
      { name: "Cap. 2 — A Anatomia do Pão",       desc: "Os 4 pilares (estrutura, fermentação, hidratação, sabor) e os substitutos do glúten." },
      { name: "Cap. 3 — O Universo das Farinhas", desc: "14 farinhas funcionais com ficha técnica, personalidade, nota de 1 a 5 e combinações." },
      { name: "Cap. 4 — Leveduras",               desc: "Saccharomyces cerevisiae, tipos de fermento, equivalências e temperatura ideal." },
      { name: "Cap. 5 — Levain",                  desc: "Como criar seu fermento natural do zero em 7 dias, protocolo completo." },
      { name: "Cap. 6 — Fermentação Lenta",       desc: "Por que tempo é ingrediente: redução de IG, pré-digestão de proteínas, sabor complexo." },
    ],
  },
  {
    icon: FaTools,
    title: "Parte 2 — Equipamentos e Cálculos",
    color: "#C4622D",
    chapters: [
      { name: "Cap. 7 — Equipamentos",          desc: "Kit básico, intermediário e avançado. O que realmente faz diferença." },
      { name: "Cap. 8 — A Matemática do Pão",   desc: "Porcentagem de padeiro, hidratação e como escalar receitas com precisão." },
      { name: "Cap. 9 — Substituição Inteligente", desc: "O princípio que te dá autonomia para criar receitas próprias com segurança." },
    ],
  },
  {
    icon: FaBreadSlice,
    title: "Parte 3 — As 246 Receitas",
    color: "#6B3A2A",
    chapters: [
      { name: "Módulo A — Pães Rápidos",      desc: "42 receitas sem fermentação: frigideira, micro-ondas, pão de queijo, wrap, broa e mais." },
      { name: "Módulo B — Pães do Dia a Dia", desc: "51 receitas com fermento: forma, bisnaguinha, hambúrguer, focaccia, australiano, proteico e mais." },
      { name: "Módulo C — Pães Artesanais",   desc: "48 receitas com levain: sourdough clássico, 48h, ciabatta, fermentação mista, azeitonas e mais." },
      { name: "Módulo D — Pães Especiais",    desc: "58 receitas temáticas: cetogênico, anti-inflamatório, renal-friendly, prebiótico, energético e mais." },
      { name: "Módulo E — Além do Pão",       desc: "47 receitas: pizza, crackers, grissini, panquecas, wraps, massas-base e mais." },
    ],
  },
  {
    icon: FaBookOpen,
    title: "Parte 4 — Resolução e Futuro",
    color: "#8B6914",
    chapters: [
      { name: "Cap. 10 — Solução de Problemas", desc: "Guia de resgate: pão não cresceu? Ficou duro? Desmoronou? Diagnóstico e correção." },
      { name: "Cap. 11 — Conservação",           desc: "Por que o pão endurece (não é porque secou) e como armazenar corretamente." },
      { name: "Cap. 12 — O Futuro",              desc: "Genômica nutricional, personalização e tendências da panificação funcional." },
    ],
  },
];

const CourseContent: React.FC = () => {
  const [openPart, setOpenPart] = useState<number>(2);

  return (
    <section className="py-20 px-6 lg:px-12 bg-white" data-aos="fade-up">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest font-semibold mb-3" style={{ color: "#C4622D" }}>
            Conteúdo completo
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-stone-800">
            12 capítulos de ciência +{" "}
            <span style={{ color: "#6B3A2A" }}>246 receitas testadas</span>
          </h2>
          <p className="mt-4 text-stone-500 text-lg max-w-2xl mx-auto">
            Mais de 230 páginas A5 com diagramação profissional, pílulas de conhecimento e referências bibliográficas.
          </p>
        </div>

        <div className="space-y-4">
          {parts.map((part, pi) => (
            <div
              key={pi}
              className="rounded-2xl border border-stone-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-delay={pi * 50}
            >
              <button
                onClick={() => setOpenPart(openPart === pi ? -1 : pi)}
                className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-stone-50 transition-colors"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: part.color + "15", color: part.color }}
                >
                  <part.icon />
                </div>
                <div className="grow">
                  <h3 className="font-bold text-stone-800">{part.title}</h3>
                  <p className="text-sm text-stone-400">{part.chapters.length} {part.chapters.length > 1 ? "capítulos" : "capítulo"}</p>
                </div>
                {openPart === pi ? (
                  <FaChevronDown className="text-stone-400" />
                ) : (
                  <FaChevronRight className="text-stone-400" />
                )}
              </button>

              {openPart === pi && (
                <div className="px-6 pb-5 space-y-3">
                  {part.chapters.map((ch, ci) => (
                    <div
                      key={ci}
                      className="flex items-start gap-3 pl-14 py-2 border-l-2 ml-5"
                      style={{ borderColor: part.color + "30" }}
                    >
                      <div
                        className="w-2 h-2 rounded-full mt-2 shrink-0"
                        style={{ backgroundColor: part.color }}
                      />
                      <div>
                        <p className="font-semibold text-stone-700 text-sm">{ch.name}</p>
                        <p className="text-stone-400 text-sm">{ch.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseContent;
