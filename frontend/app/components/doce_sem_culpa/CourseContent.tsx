"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FaChevronDown, FaChevronRight,
  FaBolt, FaSpa, FaShieldAlt, FaAppleAlt,
  FaMoon, FaDumbbell, FaGem, FaBalanceScale,
  FaLeaf, FaBrain, FaUsers, FaStar,
  FaBook, FaList, FaGift
} from "react-icons/fa";

interface Module {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  color: string;
}

const modules: Module[] = [
  {
    icon: FaBolt,
    title: "Energia & Disposição",
    description: "Receitas revitalizantes com cacau, café verde e maca peruana para começar o dia com foco.",
    image: "/doce-sem-culpa/modules/energia.png",
    color: "#D4A04A",
  },
  {
    icon: FaSpa,
    title: "Relaxamento & Controle da Ansiedade",
    description: "Sobremesas com triptofano, magnésio e adaptógenos — ideais para o fim do dia.",
    image: "/doce-sem-culpa/modules/relaxamento.png",
    color: "#5B8B7D",
  },
  {
    icon: FaShieldAlt,
    title: "Imunidade & Antioxidantes",
    description: "Receitas formuladas com antocianinas, vitamina C e beta-glucana para fortalecer as defesas.",
    image: "/doce-sem-culpa/modules/imunidade.png",
    color: "#8B2252",
  },
  {
    icon: FaAppleAlt,
    title: "Saúde Digestiva",
    description: "Sobremesas com fibras solúveis, prebióticos e kefir que cuidam da microbiota intestinal.",
    image: "/doce-sem-culpa/modules/digestiva.png",
    color: "#6B1A3F",
  },
  {
    icon: FaMoon,
    title: "Sono Tranquilo",
    description: "Doces calmantes com triptofano + vitamina B6 que ajudam a induzir o sono naturalmente.",
    image: "/doce-sem-culpa/modules/sono.png",
    color: "#5B8B7D",
  },
  {
    icon: FaDumbbell,
    title: "Pós-Treino & Proteicas",
    description: "Sobremesas com whey, colágeno ou proteína vegetal para recuperação muscular.",
    image: "/doce-sem-culpa/modules/pos_treino.png",
    color: "#D4A04A",
  },
  {
    icon: FaGem,
    title: "Beleza Natural — Pele e Cabelos",
    description: "Receitas com colágeno, biotina e antioxidantes que nutrem de dentro pra fora.",
    image: "/doce-sem-culpa/modules/beleza.png",
    color: "#8B2252",
  },
  {
    icon: FaBalanceScale,
    title: "Controle de Peso & Saciedade",
    description: "Doces com baixo IG, fibras e proteína — focados em sustentar a saciedade.",
    image: "/doce-sem-culpa/modules/peso.png",
    color: "#6B1A3F",
  },
  {
    icon: FaLeaf,
    title: "Doce Detox",
    description: "Receitas com clorofila, limão siciliano e gengibre para apoiar o metabolismo.",
    image: "/doce-sem-culpa/modules/detox.png",
    color: "#5B8B7D",
  },
  {
    icon: FaBrain,
    title: "Foco & Clareza Mental",
    description: "Ingredientes que favorecem cognição: cacau, castanha-do-pará, matcha e ômega-3.",
    image: "/doce-sem-culpa/modules/foco.png",
    color: "#D4A04A",
  },
  {
    icon: FaUsers,
    title: "Para Toda a Família",
    description: "Sobremesas aprovadas pelos quatro filhos da família Neder — e pelos pediatras.",
    image: "/doce-sem-culpa/modules/familia.png",
    color: "#8B2252",
  },
];

const premiumModules = [
  { icon: FaStar, title: "Flan Funcional de Frutas com Calda",       desc: "Receita premium diagramada em 10 variações" },
  { icon: FaStar, title: "Pudim de Chia em Camadas",                  desc: "Padrão revista — 10 combinações visuais" },
  { icon: FaStar, title: "Trufas Funcionais Gourmet",                 desc: "11 receitas avançadas + formulação profissional" },
  { icon: FaStar, title: "Picolé Funcional",                          desc: "10 receitas de picolé por objetivo de saúde" },
];

const bonuses = [
  { icon: FaBook, title: "35 Coberturas e Toppings Funcionais",       desc: "Ganaches, coulis, cremes e caldas para qualquer receita" },
  { icon: FaList, title: "48 Fichas Imprimíveis de Ingredientes",      desc: "Adoçantes, farinhas, gorduras e superingredientes" },
  { icon: FaGift, title: "Protocolo de Compulsão Noturna",             desc: "7 receitas + método dos 5 minutos anti-ataque" },
  { icon: FaGift, title: "4 Cardápios Semanais Funcionais",            desc: "Detox, Energia, Beleza e Semana das Crianças" },
];

const CourseContent: React.FC = () => {
  const [view, setView] = useState<"cards" | "list">("cards");

  return (
    <section
      id="coursecontent"
      className="py-20 px-6 lg:px-12 bg-white"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest font-semibold mb-3" style={{ color: "#8B2252" }}>
            Plataforma de membros
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-stone-800">
            11 módulos + 4 módulos premium,{" "}
            <span style={{ color: "#8B2252" }}>150+ receitas diagramadas individualmente</span>
          </h2>
          <p className="mt-4 text-stone-500 text-lg max-w-2xl mx-auto">
            Cada módulo foi organizado por <strong>objetivo de saúde</strong> — você abre direto o que precisa
            naquela semana, escolhe a receita, e ela já vem diagramada em PDF visual de 8 páginas padrão revista.
          </p>
        </div>

        {/* Toggle View */}
        <div className="flex items-center justify-center mb-10 gap-2">
          <button
            onClick={() => setView("cards")}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition ${
              view === "cards"
                ? "text-white shadow-md"
                : "bg-stone-100 text-stone-500 hover:bg-stone-200"
            }`}
            style={view === "cards" ? { background: "linear-gradient(135deg, #8B2252, #6B1A3F)" } : {}}
          >
            Visual
          </button>
          <button
            onClick={() => setView("list")}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition ${
              view === "list"
                ? "text-white shadow-md"
                : "bg-stone-100 text-stone-500 hover:bg-stone-200"
            }`}
            style={view === "list" ? { background: "linear-gradient(135deg, #8B2252, #6B1A3F)" } : {}}
          >
            Lista
          </button>
        </div>

        {/* Modules */}
        {view === "cards" ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((m, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={(i % 3) * 80}
                className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-stone-100 hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-stone-100">
                  <Image
                    src={m.image}
                    alt={m.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shadow-sm backdrop-blur-sm"
                      style={{ backgroundColor: m.color + "DD", color: "white" }}
                    >
                      <m.icon />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white font-bold text-lg drop-shadow-md leading-tight">{m.title}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-stone-500 text-sm leading-relaxed">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-3">
            {modules.map((m, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl border border-stone-100 hover:border-amber-200 hover:shadow-sm transition-all"
                data-aos="fade-up"
                data-aos-delay={(i % 2) * 60}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: m.color + "15", color: m.color }}
                >
                  <m.icon />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-stone-800 text-sm">{m.title}</p>
                  <p className="text-stone-500 text-xs mt-0.5">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Módulos Premium */}
        <div className="mt-16">
          <p className="text-center text-sm uppercase tracking-widest font-bold mb-2" style={{ color: "#8B2252" }}>
            ⭐ Módulos Premium
          </p>
          <h3 className="text-center text-2xl font-extrabold text-stone-800 mb-8">
            Receitas diagramadas em padrão revista
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {premiumModules.map((p, i) => (
              <div
                key={i}
                className="text-center p-5 rounded-xl border-2"
                style={{ borderColor: "#D4A04A40", background: "linear-gradient(135deg, #FBF5E8, #F5E6D0)" }}
                data-aos="zoom-in"
                data-aos-delay={i * 80}
              >
                <p.icon className="text-3xl mx-auto mb-2" style={{ color: "#D4A04A" }} />
                <p className="text-sm font-bold text-stone-800 leading-tight">{p.title}</p>
                <p className="text-xs text-stone-500 mt-1">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bônus Inclusos */}
        <div className="mt-16">
          <p className="text-center text-sm uppercase tracking-widest font-bold mb-2" style={{ color: "#8B2252" }}>
            🎁 Inclusos no Kit
          </p>
          <h3 className="text-center text-2xl font-extrabold text-stone-800 mb-8">
            Bônus que a maioria vende como produto separado
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {bonuses.map((b, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl border border-amber-100"
                style={{ backgroundColor: "#FBF5E8" }}
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#D4A04A20" }}
                >
                  <b.icon className="text-lg" style={{ color: "#D4A04A" }} />
                </div>
                <div>
                  <p className="font-bold text-stone-800">{b.title}</p>
                  <p className="text-sm text-stone-500 mt-1">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseContent;
