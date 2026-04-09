"use client";

import Image from "next/image";
import React from "react";

const archives = [
  {
    icon: "🖼️",
    title: "Acervo Visual — 150 Receitas Ilustradas",
    desc: "PDFs individuais com fotos food porn em cada página. Ingredientes em cards visuais, propriedades funcionais com ícones, substituições e sugestão de apresentação. Organizadas por funcionalidade.",
    tags: ["Energia", "Sono", "Imunidade", "Foco", "Detox", "Beleza", "+6 módulos"],
    image: "/sobremesas/acervo-visual.jpg",
  },
  {
    icon: "🍫",
    title: "Acervo Especial — 100 Trufas por Funcionalidade",
    desc: "247 páginas com 100 receitas de trufas organizadas por objetivo de saúde. Quer energia pro treino? Vai ao módulo certo. Precisa relaxar? Tem módulo para isso.",
    tags: ["Pré-Treino", "Anti-Stress", "Cognitivo", "Colágeno", "Anti-Inflam.", "Hormonal", "+4 módulos"],
    image: "/sobremesas/acervo-trufas.jpg",
  },
];

const BonusArchives: React.FC = () => (
  <section className="py-20 px-6 lg:px-12 bg-gray-950 relative overflow-hidden" data-aos="fade-up">
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(212,160,74,0.08), transparent 50%)" }} />
    <div className="max-w-5xl mx-auto relative z-10">
      <div className="text-center">
        <p className="font-bold text-lg" style={{ color: "#D4A04A", fontFamily: "'Playfair Display', serif" }}>Espera, tem mais.</p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
          Além das 252 receitas, você recebe <span style={{ color: "#D4A04A" }}>+250 de acervo</span>
        </h2>
      </div>

      <div className="mt-14 grid md:grid-cols-2 gap-8">
        {archives.map((a, i) => (
          <div key={i} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all" data-aos="fade-up" data-aos-delay={i * 150}>
            <div className="relative w-full aspect-video">
              <Image src={a.image} alt={a.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{a.icon}</span>
                <h3 className="font-bold text-white text-lg">{a.title}</h3>
              </div>
              <p className="text-stone-400 text-sm leading-relaxed">{a.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {a.tags.map((t, j) => (
                  <span key={j} className="text-xs bg-white/10 text-stone-300 px-2 py-1 rounded">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-stone-400">
          252 + 150 + 100 ={" "}
          <span className="font-bold text-xl" style={{ color: "#D4A04A" }}>mais de 500 receitas</span>
          {" "}por{" "}
          <span className="font-bold text-xl" style={{ color: "#D4A04A" }}>R$47</span>
        </p>
        <p className="text-stone-500 text-sm mt-1">R$0,09 por receita.</p>
      </div>
    </div>
  </section>
);

export default BonusArchives;
