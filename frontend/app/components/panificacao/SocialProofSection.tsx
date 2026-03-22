"use client";

import React from "react";
import { FaUsers, FaStar, FaBookOpen, FaShieldAlt } from "react-icons/fa";

const stats = [
  { icon: FaStar, value: "4.9", label: "Avaliação média", suffix: "/5" },
  { icon: FaBookOpen, value: "27", label: "Receitas testadas", suffix: "" },
  { icon: FaUsers, value: "600+", label: "Páginas de conteúdo", suffix: "" },
  { icon: FaShieldAlt, value: "117", label: "Receitas no ecossistema", suffix: "" },
];

const testimonials = [
  {
    name: "Márcia L.",
    location: "São Paulo, SP",
    text: "Meu marido é diabético e eu já tinha desistido de pão. Fiz o de frigideira em 10 minutos e ele pediu bis. Chorei de alegria.",
    recipe: "Receita 01 — Pão de Frigideira",
    rating: 5,
  },
  {
    name: "Rafael S.",
    location: "Belo Horizonte, MG",
    text: "Sou celíaco e há anos como pães que parecem isopor. O sourdough funcional deste livro mudou minha relação com panificação. A ciência por trás faz toda a diferença.",
    recipe: "Receita 12 — Sourdough Funcional",
    rating: 5,
  },
  {
    name: "Carla M.",
    location: "Curitiba, PR",
    text: "Comprei achando que seria mais um ebook genérico. São 230 páginas com referências científicas, tabelas de farinhas e uma carta do autor que me emocionou. Vale 10x o preço.",
    recipe: "Capítulo 3 — Farinhas Funcionais",
    rating: 5,
  },
  {
    name: "João P.",
    location: "Recife, PE",
    text: "O capítulo de substituição inteligente me deu autonomia para criar minhas próprias receitas. Não dependo mais de ninguém. Isso não tem preço.",
    recipe: "Capítulo 9 — Substituição",
    rating: 5,
  },
];

const SocialProofSection: React.FC = () => {
  return (
    <section
      className="py-20 px-6 lg:px-12"
      style={{ background: "linear-gradient(180deg, #FAF3E8, #F5E6CC)" }}
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="text-center bg-white rounded-xl p-6 shadow-sm border border-stone-100" data-aos="zoom-in" data-aos-delay={i * 100}>
              <stat.icon className="text-2xl mx-auto mb-3" style={{ color: "#D4A04A" }} />
              <p className="text-3xl font-extrabold text-stone-800">
                {stat.value}<span className="text-lg text-stone-400">{stat.suffix}</span>
              </p>
              <p className="text-sm text-stone-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-widest font-semibold mb-3" style={{ color: "#C4622D" }}>
            Quem já está fazendo pão funcional
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-stone-800">
            Histórias reais de mesas transformadas
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 shadow-sm border border-stone-100 hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <FaStar key={si} className="text-amber-400 text-sm" />
                ))}
              </div>
              <p className="text-stone-600 leading-relaxed mb-5 italic text-[15px]">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-stone-800 text-sm">{t.name}</p>
                  <p className="text-xs text-stone-400">{t.location}</p>
                </div>
                <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: "#F5E6CC", color: "#6B3A2A" }}>
                  {t.recipe}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
