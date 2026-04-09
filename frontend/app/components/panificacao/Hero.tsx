"use client";

import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface HeroProps {
  onButtonClick: () => void;
}

const anchors = [
  { icon: "🏷️", label: "De R$97 por R$47",  sub: "52% OFF · lançamento"  },
  { icon: "📚", label: "Área de membros",     sub: "11 módulos navegáveis" },
  { icon: "🔒", label: "Hotmart",             sub: "Pagamento seguro"      },
  { icon: "🛡️", label: "Garantia 7 dias",     sub: "Acesso imediato"       },
];

function MockupStrip() {
  return (
    <div
      className="flex items-center gap-5 rounded-2xl p-5 border border-amber-200 shadow-sm"
      style={{ background: "linear-gradient(135deg, #FFF8F0, #FAF3E8)" }}
    >
      <div className="relative w-20 h-28 lg:w-24 lg:h-32 rounded-xl overflow-hidden shadow-lg border-2 border-white shrink-0">
        <Image src="/panificacao/mockup_ebook.jpeg" alt="Mockup do ebook Pão Sem Culpa" fill className="object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#C4622D" }}>
          O que você recebe
        </p>
        <ul className="space-y-1">
          {[
            "246 receitas com base científica",
            "12 capítulos de ciência aplicada",
            "Área de membros — 11 módulos",
            "50 Sanduíches Naturais + bônus",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-stone-600">
              <span className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-white text-[9px]" style={{ backgroundColor: "#6B3A2A" }}>✓</span>
              <span className="text-[13px]">{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex items-baseline gap-2 mt-3 pt-3 border-t border-amber-200">
          <span className="text-stone-400 line-through text-sm">R$97</span>
          <span className="text-2xl font-extrabold" style={{ color: "#6B3A2A" }}>R$47</span>
          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: "#22C55E15", color: "#15803D", border: "1px solid #22C55E30" }}>
            lançamento
          </span>
        </div>
      </div>
    </div>
  );
}

const Hero: React.FC<HeroProps> = ({ onButtonClick }) => {
  return (
    <section
      id="hero"
      className="relative pt-6 pb-12 lg:py-20"
      style={{ background: "linear-gradient(160deg, #F5E6CC 0%, #FAF3E8 40%, #FFF8F0 70%, #F5E6CC 100%)" }}
    >
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, #D4A04A, #C4622D, #D4A04A)" }} />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-12 w-full">
        <div className="lg:grid lg:grid-cols-2 lg:gap-14 lg:items-start">

          {/* ── Copy ── */}
          <div className="flex flex-col" data-aos="fade-right">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-700/20 bg-white/70 backdrop-blur-sm w-fit mb-5">
              <span className="text-sm">🌿</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-800">Coleção Gastronomia Funcional</span>
            </div>

            {/* HEADLINE — desejo + permissão */}
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-[1.1] text-stone-800 mb-4">
              Volte a comer pão —{" "}
              <span className="relative inline-block" style={{ color: "#6B3A2A" }}>
                sem culpa, com todo o sabor.
                <svg className="absolute -bottom-1.5 left-0 w-full" viewBox="0 0 400 10" fill="none">
                  <path d="M2 6C80 2 160 1.5 200 4C240 6.5 320 3 398 5.5" stroke="#D4A04A" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* SUBHEADLINE */}
            <p className="text-xl lg:text-2xl font-bold text-stone-700 mb-4 leading-snug">
              O método que transforma qualquer cozinha em padaria artesanal.
            </p>

            {/* SUPORTE */}
            <p className="text-base text-stone-500 leading-relaxed mb-6 max-w-lg">
              246 receitas criadas por um{" "}
              <span className="font-semibold text-stone-600">pesquisador em ciência dos alimentos</span>{" "}
              — cada uma ensinando o <em>porquê</em>, não só o como.
              Pão macio, gostoso e funcional. Do pão em 10 minutos ao sourdough de 48 horas.
            </p>

            {/* IMAGEM 16:9 — MOBILE ONLY */}
            <div className="lg:hidden mb-6 w-full" data-aos="fade-up">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/60">
                <Image src="/panificacao/hero_mesa.png" alt="Mesa com pães funcionais artesanais variados" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-linear-to-t from-stone-900/30 via-transparent to-transparent" />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg px-3 py-2 border border-amber-100">
                  <p className="text-lg font-extrabold text-center" style={{ color: "#6B3A2A" }}>4.9★</p>
                  <p className="text-[9px] text-stone-400 text-center">avaliação</p>
                </div>
              </div>
            </div>

            {/* BOTÃO */}
            <button
              onClick={onButtonClick}
              className="group w-full lg:w-auto px-10 py-5 text-lg font-bold text-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mb-5"
              style={{ background: "linear-gradient(135deg, #6B3A2A, #8B5A3C)" }}
            >
              <span className="flex items-center justify-center gap-3">
                Garantir Acesso por R$47
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            {/* ÂNCORAS */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {anchors.map((a, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl px-4 py-3 border border-stone-100 shadow-sm">
                  <span className="text-lg shrink-0">{a.icon}</span>
                  <div>
                    <p className="text-xs font-bold text-stone-700 leading-tight">{a.label}</p>
                    <p className="text-[11px] text-stone-400 leading-tight mt-0.5">{a.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:hidden"><MockupStrip /></div>
          </div>

          {/* ── Imagem + Mockup desktop ── */}
          <div className="hidden lg:flex flex-col gap-5 sticky top-8" data-aos="fade-left">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/60">
              <Image src="/panificacao/hero_mesa.png" alt="Mesa com pães funcionais artesanais variados" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-linear-to-t from-stone-900/30 via-transparent to-transparent" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg px-4 py-2.5 border border-amber-100">
                <p className="text-xl font-extrabold text-center" style={{ color: "#6B3A2A" }}>4.9★</p>
                <p className="text-[10px] text-stone-400 text-center">avaliação média</p>
              </div>
            </div>
            <MockupStrip />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
