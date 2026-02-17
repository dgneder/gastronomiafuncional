"use client";

import React from "react";
import Image from "next/image";

const previews = [
  {
    title: "Fichas completas de cultivo",
    imageSrc: "/horta-medicinal/preview-ficha.jpeg",
    alt: "Preview da ficha completa de cultivo de uma planta medicinal",
    desc: "Cada planta tem uma ficha visual com tudo que você precisa — sol, água, solo, pragas e propagação. Com tabela-resumo rápida, boxes coloridos de dicas, nível de dificuldade e parte utilizada.",
  },
  {
    title: "Calendários por região do Brasil",
    imageSrc: "/horta-medicinal/preview-calendario.jpeg",
    alt: "Preview do calendário de plantio por região",
    desc: "Calendários de plantio coloridos para as 5 regiões do Brasil — Sudeste, Sul, Nordeste, Centro-Oeste e Norte. Saiba exatamente quando plantar e quando colher cada espécie na sua cidade.",
  },
  {
    title: "Boxes do Dr. Diogo",
    imageSrc: "/horta-medicinal/preview-boxes.jpeg",
    alt: "Preview dos boxes informativos do Dr. Diogo",
    desc: "Dicas de campo, alertas e curiosidades científicas em cada página — como ter um agrônomo ao seu lado durante a leitura. Inclui receitas de substrato, dicas de economia e alertas de pragas.",
  },
];

const ContentPreview: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-[#FDF6E3]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 text-center mb-10 leading-tight">
          Veja o que você vai encontrar lá dentro
        </h2>

        <div className="space-y-10">
          {previews.map((p, i) => (
            <div key={i}>
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
                <Image
                  src={p.imageSrc}
                  alt={p.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-500 text-sm italic mt-3 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-[#F2F8ED] border border-[#2E7D32]/20 rounded-2xl p-5 text-center">
          <p className="text-[#1B5E20] text-sm font-semibold">
            💡 <strong>Estas são 3 de 150+ páginas.</strong> O guia completo
            cobre tudo que você precisa saber para cultivar, colher e conservar
            suas plantas medicinais com segurança e conhecimento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentPreview;
