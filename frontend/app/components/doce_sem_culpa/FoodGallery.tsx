"use client";

import Image from "next/image";
import React from "react";

const recipes = [
  { src: "/sobremesas/gallery/mousse.jpg", label: "Mousse Chocolate 70%", tag: "IG 25 · 15 min" },
  { src: "/sobremesas/gallery/brigadeiro.jpg", label: "Brigadeiros 6 Sabores", tag: "IG 35 · Zero açúcar" },
  { src: "/sobremesas/gallery/picole.jpg", label: "Picolé Arco-Íris", tag: "3 camadas · Sem adoçante" },
  { src: "/sobremesas/gallery/bolo.jpg", label: "Bolo de Cenoura", tag: "IG 35 · Sem glúten" },
  { src: "/sobremesas/gallery/nicecream.jpg", label: "Nice Cream Bowl", tag: "2 ingredientes · 5 min" },
  { src: "/sobremesas/gallery/cheesecake.jpg", label: "Cheesecake Funcional", tag: "Probióticos vivos" },
  { src: "/sobremesas/gallery/cartola.jpg", label: "Cartola Nordestina", tag: "Regional · 10 min" },
  { src: "/sobremesas/gallery/brownie.jpg", label: "Brownie Proteico", tag: "22g proteína · IG 25" },
];

const FoodGallery: React.FC = () => (
  <section className="py-20 px-6 lg:px-12 bg-gray-950" data-aos="fade-up">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-widest font-bold mb-3" style={{ color: "#D4A04A" }}>Galeria de receitas</p>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
          Sobremesas que <span style={{ color: "#D4A04A" }}>parecem pecado</span> — mas não são
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {recipes.map((r, i) => (
          <div key={i} className="group relative aspect-square rounded-xl overflow-hidden" data-aos="zoom-in" data-aos-delay={i * 60}>
            <Image src={r.src} alt={r.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
              <div>
                <p className="text-white text-sm font-bold">{r.label}</p>
                <p className="text-amber-300 text-xs">{r.tag}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-stone-500 text-sm mt-6">8 de mais de 500 receitas. Cada uma com IG controlado e base científica.</p>
    </div>
  </section>
);

export default FoodGallery;
