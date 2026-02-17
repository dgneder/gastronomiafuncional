"use client";

import React from "react";
import Image from "next/image";

const previews = [
  {
    title: "Ficha de Óleo Essencial",
    imageSrc: "/aromaterapia/preview-ficha.jpeg",
    alt: "Preview da ficha completa de um óleo essencial",
    desc: "Cada um dos 25 óleos tem uma ficha como esta — com composição química, mecanismo de ação no corpo, dosagem por método, contraindicações e nível de evidência científica.",
  },
  {
    title: "Blend Pronto com Receita",
    imageSrc: "/aromaterapia/preview-blend.jpeg",
    alt: "Preview de blend pronto com receita e gotas exatas",
    desc: "São 12 blends prontos com gotas exatas. Escolhe o que você precisa, segue a receita, e entende por que funciona.",
  },
  {
    title: "Tabela de Segurança",
    imageSrc: "/aromaterapia/preview-seguranca.jpeg",
    alt: "Preview da tabela de segurança por faixa etária",
    desc: "Tabelas para cada situação: gestantes (por trimestre), crianças (6 faixas etárias), pets (gatos, cães, aves), e 7 classes de medicamentos.",
  },
];

const ContentPreview: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-[#FDF6E3]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 text-center mb-10 leading-tight">
          Veja uma amostra do que você vai encontrar
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

        <div className="mt-10 bg-[#F2F8ED] border border-[#4A7C29]/20 rounded-2xl p-5 text-center">
          <p className="text-[#2D5016] text-sm font-semibold">
            💡 <strong>Estas são 3 de 160+ páginas.</strong> O guia completo
            cobre tudo que você precisa saber para usar aromaterapia com
            segurança e conhecimento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentPreview;
