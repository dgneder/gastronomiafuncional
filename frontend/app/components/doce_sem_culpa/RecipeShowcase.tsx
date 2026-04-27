"use client";

import Image from "next/image";
import React from "react";

const recipes = [
  {
    module: "Ebook Principal",
    title: "Mousses, Cremes e Pudins",
    subtitle: "Capítulo 5 — Sobremesas de textura aveludada",
    count: "20 receitas",
    color: "#8B2252",
    image: "/doce-sem-culpa/rec_mousses.png",
    highlight: "Mousse de Chocolate 70% com Aquafaba",
  },
  {
    module: "Ebook Principal",
    title: "Bolos, Tortas e Brigadeiros",
    subtitle: "Capítulos 6 e 7 — Os clássicos reformulados",
    count: "45 receitas",
    color: "#6B1A3F",
    image: "/doce-sem-culpa/rec_bolos.png",
    highlight: "Bolo de Rolo Funcional + Brigadeiro de Tâmara",
  },
  {
    module: "Ebook Principal",
    title: "Cookies, Sorvetes e Rápidas ≤15min",
    subtitle: "Capítulos 8-11 — Para quem tem pouco tempo",
    count: "70 receitas",
    color: "#D4A04A",
    image: "/doce-sem-culpa/rec_cookies.png",
    highlight: "Nice cream de banana + Cookie proteico 5 min",
  },
  {
    module: "Ebook Principal",
    title: "Crianças, Regionais, Airfryer",
    subtitle: "Capítulos 13, 15 e 16 — Família e tradição",
    count: "48 receitas",
    color: "#5B8B7D",
    image: "/doce-sem-culpa/rec_criancas.png",
    highlight: "Cocada de Forno + Churros de Airfryer",
  },
  {
    module: "Ebook Principal",
    title: "Low Carb, Keto e Proteicas",
    subtitle: "Capítulos 14 e 18 — Controle metabólico e treino",
    count: "33 receitas",
    color: "#8B2252",
    image: "/doce-sem-culpa/rec_lowcarb.png",
    highlight: "Brownie Keto + Cheesecake Proteico",
  },
  {
    module: "Ebook Principal",
    title: "Para Ocasiões e Para Vender",
    subtitle: "Capítulos 12 e 17 — Festa e renda extra",
    count: "36 receitas",
    color: "#C4622D",
    image: "/doce-sem-culpa/rec_vender.png",
    highlight: "Bem-casado Funcional + Trufa Gourmet para vender",
  },
];

const RecipeShowcase: React.FC = () => {
  return (
    <section
      className="py-20 px-6 lg:px-12"
      style={{ background: "linear-gradient(180deg, #FBF5E8 0%, #F5E6D0 50%, #FBF5E8 100%)" }}
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest font-semibold mb-3" style={{ color: "#8B2252" }}>
            252 receitas em 14 categorias
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-stone-800">
            Do <span style={{ color: "#8B2252" }}>nice cream em 5 minutos</span> à{" "}
            <span style={{ color: "#8B2252" }}>trufa gourmet pra vender</span>
          </h2>
          <p className="mt-4 text-lg text-stone-500 max-w-2xl mx-auto">
            Cada capítulo cobre um perfil diferente — da urgência prática à complexidade artesanal.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((rec, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-stone-100 hover:-translate-y-1"
            >
              <div className="relative w-full aspect-square overflow-hidden bg-stone-100">
                <Image
                  src={rec.image}
                  alt={rec.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm"
                    style={{ backgroundColor: rec.color }}
                  >
                    {rec.module}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white/90 text-xs font-medium mb-1 drop-shadow-md">{rec.count}</p>
                  <p className="text-white font-bold text-xl drop-shadow-md leading-tight">{rec.title}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-stone-500 text-sm mb-3">{rec.subtitle}</p>
                <div className="flex items-center gap-2 text-sm font-medium" style={{ color: rec.color }}>
                  <span>⭐</span>
                  <span>{rec.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Badge extra — Trufas & Docinhos + Plataforma */}
        <div
          className="mt-10 rounded-2xl p-8 border-2 text-center"
          style={{
            background: "linear-gradient(135deg, #FFFFFF, #FBF5E8)",
            borderColor: "#8B225240"
          }}
          data-aos="zoom-in"
        >
          <p className="text-sm uppercase tracking-widest font-bold mb-3" style={{ color: "#8B2252" }}>
            E ainda não acabou
          </p>
          <p className="text-lg text-stone-700 leading-relaxed">
            <strong>+ 100 receitas no ebook Trufas & Docinhos Funcionais</strong> (10 módulos por
            objetivo de saúde: energia, pós-treino, sono, beleza, imunidade, saciedade, hormonal,
            anti-inflamatório, saúde intestinal e foco).{" "}
            <strong style={{ color: "#8B2252" }}>+ 150 receitas diagramadas na plataforma</strong>{" "}
            — cada uma em PDF visual de 8 páginas no padrão de revista internacional de gastronomia.
          </p>
          <p className="mt-4 text-sm text-stone-500">
            <strong>Total: 500+ receitas únicas.</strong> É a biblioteca mais completa de sobremesa funcional do Brasil.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RecipeShowcase;
