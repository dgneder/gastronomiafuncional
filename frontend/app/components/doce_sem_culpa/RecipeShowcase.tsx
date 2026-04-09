"use client";
import Image from "next/image";
import React from "react";

const volumes = [
  { vol: "Volume 01", title: "Sobremesas Funcionais", subtitle: "Base ilustrada da coleção", count: "150 receitas", color: "#8B2252", image: "/sobremesas/sobremesa-relax.png",        highlight: "Mousse de Cacau Funcional" },
  { vol: "Volume 02", title: "Doce Sem Culpa",        subtitle: "Com base científica completa", count: "252 receitas", color: "#6B1A40", image: "/sobremesas/sobremesa-imunidade.png",  highlight: "Brownie de Grão-de-bico SG" },
  { vol: "Volume 03", title: "Trufas & Docinhos",     subtitle: "Especialização artesanal",    count: "100 receitas", color: "#5A1A3A", image: "/sobremesas/sobremesa-familia-02.png", highlight: "Trufa Belga com Cacau 70%" },
];

const RecipeShowcase: React.FC = () => (
  <section className="py-20 px-6 lg:px-12" style={{ background: "linear-gradient(180deg, #FFF0F5 0%, #FCEEF4 50%, #FFF0F5 100%)" }} data-aos="fade-up">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-sm uppercase tracking-widest font-semibold mb-3" style={{ color: "#8B2252" }}>+500 receitas em 3 volumes</p>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
          Da sobremesa rápida à{" "}<span style={{ color: "#8B2252" }}>trufa artesanal</span>
        </h2>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">Cada volume com propósito distinto, conteúdo exclusivo e base científica.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {volumes.map((vol, i) => (
          <div key={i} data-aos="fade-up" data-aos-delay={i * 80}
            className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-rose-100 hover:-translate-y-1">
            <div className="relative w-full aspect-square overflow-hidden bg-rose-50">
              <Image src={vol.image} alt={vol.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm" style={{ backgroundColor: vol.color }}>{vol.vol}</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white/80 text-xs font-medium mb-1 drop-shadow-md">{vol.count}</p>
                <p className="text-white font-bold text-xl drop-shadow-md leading-tight">{vol.title}</p>
              </div>
            </div>
            <div className="p-5">
              <p className="text-gray-500 text-sm mb-3">{vol.subtitle}</p>
              <div className="flex items-center gap-2 text-sm font-medium" style={{ color: vol.color }}>
                <span>⭐</span><span>{vol.highlight}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RecipeShowcase;
