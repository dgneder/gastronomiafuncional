"use client";

import Image from "next/image";
import React, { useSyncExternalStore } from "react";
import { FaArrowRight } from "react-icons/fa";

interface HeroProps {
  onButtonClick: () => void;
}

// ══════════════════════════════════════════════════════════
// 5 ÂNGULOS — Personalização dinâmica via query string
//    Uso: /doce_sem_culpa?a=compulsao
//         /doce_sem_culpa?a=beleza
//         /doce_sem_culpa?a=filho
//         /doce_sem_culpa?a=glicemia
//         /doce_sem_culpa?a=vender
// ══════════════════════════════════════════════════════════
type AngleKey = "compulsao" | "beleza" | "filho" | "glicemia" | "vender" | "default";

interface AngleContent {
  tag: string;
  headline: React.ReactNode;
  subheadline: string;
  support: string;
}

const ANGLES: Record<AngleKey, AngleContent> = {
  default: {
    tag: "🍫 Coleção Gastronomia Funcional",
    headline: (
      <>
        500+ receitas de{" "}
        <span className="relative inline-block" style={{ color: "#8B2252" }}>
          sobremesas funcionais
          <svg className="absolute -bottom-1.5 left-0 w-full" viewBox="0 0 400 10" fill="none">
            <path d="M2 6C80 2 160 1.5 200 4C240 6.5 320 3 398 5.5" stroke="#D4A04A" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </span>
        {" "}com base científica.
      </>
    ),
    subheadline: "O Kit completo de quem convive com diabetes, restrição alimentar ou simplesmente quer comer doce sem destruir a saúde.",
    support: "Construído por um pesquisador PhD em ciência dos alimentos que vive as três condições que quase todo brasileiro vai enfrentar: diabetes, doença renal e hipertensão. Do brigadeiro ao sourdough funcional, do mousse ao picolé. A biblioteca mais completa do Brasil.",
  },
  compulsao: {
    tag: "🌙 Para quem ataca o armário às 22h",
    headline: (
      <>
        Como parar a{" "}
        <span className="relative inline-block" style={{ color: "#8B2252" }}>
          compulsão noturna
          <svg className="absolute -bottom-1.5 left-0 w-full" viewBox="0 0 400 10" fill="none">
            <path d="M2 6C80 2 160 1.5 200 4C240 6.5 320 3 398 5.5" stroke="#D4A04A" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </span>
        {" "}sem força de vontade.
      </>
    ),
    subheadline: "Sobremesas calmantes formuladas com triptofano, magnésio e adaptógenos — que satisfazem o ataque antes da dieta ser sabotada.",
    support: "Inclui o Protocolo SOS Compulsão: 7 receitas em até 10 minutos para interromper o ciclo. Sem dieta restritiva, sem 'força de vontade', sem culpa no dia seguinte. Só a ciência do prazer consciente.",
  },
  beleza: {
    tag: "✨ Para quem cuida da pele por dentro",
    headline: (
      <>
        Sobremesas que viram{" "}
        <span className="relative inline-block" style={{ color: "#8B2252" }}>
          colágeno, antioxidante e brilho.
          <svg className="absolute -bottom-1.5 left-0 w-full" viewBox="0 0 400 10" fill="none">
            <path d="M2 6C80 2 160 1.5 200 4C240 6.5 320 3 398 5.5" stroke="#D4A04A" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </span>
      </>
    ),
    subheadline: "Doces funcionais ricos em antocianinas, ácido elágico e vitamina C. Beleza de dentro pra fora — com ciência, não com promessa.",
    support: "Módulo Beleza Natural da plataforma reúne receitas formuladas com bioativos que a pesquisa clínica suporta: colágeno, frutas vermelhas, cacau antioxidante. Doce aqui vira aliado da vaidade, não vilão.",
  },
  filho: {
    tag: "👶 Para mães que cansaram da culpa",
    headline: (
      <>
        Doces que seu filho{" "}
        <span className="relative inline-block" style={{ color: "#8B2252" }}>
          adora — e o pediatra aprova.
          <svg className="absolute -bottom-1.5 left-0 w-full" viewBox="0 0 400 10" fill="none">
            <path d="M2 6C80 2 160 1.5 200 4C240 6.5 320 3 398 5.5" stroke="#D4A04A" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </span>
      </>
    ),
    subheadline: "18 receitas dedicadas ao paladar infantil, com ingredientes funcionais escondidos. Testadas nos quatro filhos da família Neder.",
    support: "Lancheira, festa de aniversário, lanche da tarde. Sobremesas que enganam o paladar exigente de criança e ainda entregam nutrientes reais. Cardápio da 'Semana da Criança' incluso nos bônus.",
  },
  glicemia: {
    tag: "🩺 Para quem tem diabetes ou pré-diabetes",
    headline: (
      <>
        Doces com{" "}
        <span className="relative inline-block" style={{ color: "#8B2252" }}>
          impacto glicêmico baixo
          <svg className="absolute -bottom-1.5 left-0 w-full" viewBox="0 0 400 10" fill="none">
            <path d="M2 6C80 2 160 1.5 200 4C240 6.5 320 3 398 5.5" stroke="#D4A04A" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </span>
        {" "}— testados.
      </>
    ),
    subheadline: "O Capítulo 14 inteiro em Low Carb e Keto + semáforo glicêmico em cada uma das 252 receitas + fichas técnicas de 12 adoçantes.",
    support: "Material levado por alunos ao próprio endocrinologista e aprovado. O autor convive com diabetes tipo 2 e formulou cada receita pensando em quem tem que medir tudo. Material educativo — não substitui orientação médica.",
  },
  vender: {
    tag: "💰 Para quem quer renda extra",
    headline: (
      <>
        Da sua cozinha para{" "}
        <span className="relative inline-block" style={{ color: "#8B2252" }}>
          R$2.000 por mês.
          <svg className="absolute -bottom-1.5 left-0 w-full" viewBox="0 0 400 10" fill="none">
            <path d="M2 6C80 2 160 1.5 200 4C240 6.5 320 3 398 5.5" stroke="#D4A04A" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </span>
      </>
    ),
    subheadline: "Capítulo 17 dedicado + 100 trufas funcionais com margem 200-300% + precificação + rótulos prontos + script de WhatsApp.",
    support: "Muitas alunas pagaram o Kit várias vezes no primeiro mês vendendo para colegas de trabalho. Trufa funcional de alto valor agregado: custo R$2, vende R$8. Comece pequeno, escale no seu ritmo.",
  },
};

const anchors = [
  { icon: "🏷️", label: "De R$299 por R$67",      sub: "78% OFF · lançamento"       },
  { icon: "📚", label: "500+ receitas",           sub: "em 5 ativos + plataforma"   },
  { icon: "🔒", label: "Hotmart",                 sub: "Pagamento seguro"           },
  { icon: "🛡️", label: "Garantia 7 dias",         sub: "Acesso imediato"            },
];

// ══════════════════════════════════════════════════════════
// Hook SSR-safe para ler query string ?a=xxx
// Substitui o padrão useState + useEffect (anti-pattern no React 19)
// ══════════════════════════════════════════════════════════
function subscribeToUrl(callback: () => void): () => void {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}

function getAngleKey(): AngleKey {
  if (typeof window === "undefined") return "default";
  const params = new URLSearchParams(window.location.search);
  const key = params.get("a") as AngleKey | null;
  return key && key in ANGLES ? key : "default";
}

function getServerSnapshot(): AngleKey {
  return "default";
}

function MockupStrip() {
  return (
    <div
      className="flex items-center gap-5 rounded-2xl p-5 border shadow-sm"
      style={{ background: "linear-gradient(135deg, #FBF5E8, #F5E6D0)", borderColor: "#D4A04A40" }}
    >
      <div className="relative w-20 h-28 lg:w-24 lg:h-32 rounded-xl overflow-hidden shadow-lg border-2 border-white shrink-0">
        <Image
          src="/doce-sem-culpa/mockup_kit.jpeg"
          alt="Mockup do Kit Doce Sem Culpa"
          fill
          className="object-cover"
          sizes="96px"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#8B2252" }}>
          O que você recebe
        </p>
        <ul className="space-y-1">
          {[
            "252 receitas no ebook principal",
            "100 trufas & docinhos funcionais",
            "150+ receitas na plataforma",
            "2 order bumps + 2 bônus",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-stone-600">
              <span
                className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-white text-[9px]"
                style={{ backgroundColor: "#8B2252" }}
              >
                ✓
              </span>
              <span className="text-[13px]">{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex items-baseline gap-2 mt-3 pt-3 border-t" style={{ borderColor: "#D4A04A40" }}>
          <span className="text-stone-400 line-through text-sm">R$299</span>
          <span className="text-2xl font-extrabold" style={{ color: "#8B2252" }}>R$67</span>
          <span
            className="text-[11px] font-bold px-2 py-0.5 rounded-full"
            style={{ backgroundColor: "#22C55E15", color: "#15803D", border: "1px solid #22C55E30" }}
          >
            lançamento
          </span>
        </div>
      </div>
    </div>
  );
}

const Hero: React.FC<HeroProps> = ({ onButtonClick }) => {
  const angleKey = useSyncExternalStore(subscribeToUrl, getAngleKey, getServerSnapshot);
  const angle = ANGLES[angleKey] || ANGLES.default;

  return (
    <section
      id="hero"
      className="relative pt-6 pb-12 lg:py-20"
      style={{
        background: "linear-gradient(160deg, #F5E6D0 0%, #FBF5E8 40%, #FFF8F0 70%, #F5E6D0 100%)",
      }}
    >
      {/* Barra decorativa topo */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, #D4A04A, #8B2252, #D4A04A)" }}
      />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-12 w-full">
        <div className="lg:grid lg:grid-cols-2 lg:gap-14 lg:items-start">

          {/* ═══════════════════════════════════════════
              COLUNA ESQUERDA — copy + botão + âncoras
          ═══════════════════════════════════════════ */}
          <div className="flex flex-col" data-aos="fade-right">

            {/* Badge ângulo */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-white/70 backdrop-blur-sm w-fit mb-5"
              style={{ borderColor: "#8B225230" }}
            >
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#8B2252" }}>
                {angle.tag}
              </span>
            </div>

            {/* HEADLINE */}
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-[1.1] text-stone-800 mb-4">
              {angle.headline}
            </h1>

            {/* SUBHEADLINE */}
            <p className="text-xl lg:text-2xl font-bold text-stone-700 mb-4 leading-snug">
              {angle.subheadline}
            </p>

            {/* SUPORTE */}
            <p className="text-base text-stone-500 leading-relaxed mb-6 max-w-lg">
              {angle.support}
            </p>

            {/* IMAGEM 16:9 — MOBILE ONLY */}
            <div className="lg:hidden mb-6 w-full" data-aos="fade-up">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/60">
                <Image
                  src="/doce-sem-culpa/hero_mesa.jpeg"
                  alt="Mesa com sobremesas funcionais variadas"
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-stone-900/30 via-transparent to-transparent" />
                {/* Badge avaliação mobile */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg px-3 py-2 border" style={{ borderColor: "#D4A04A40" }}>
                  <p className="text-lg font-extrabold text-center" style={{ color: "#8B2252" }}>4.9★</p>
                  <p className="text-[9px] text-stone-400 text-center">+2.000 alunos</p>
                </div>
              </div>
            </div>

            {/* BOTÃO PRINCIPAL */}
            <button
              onClick={onButtonClick}
              className="group w-full lg:w-auto px-10 py-5 text-lg font-bold text-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mb-5"
              style={{ background: "linear-gradient(135deg, #8B2252, #6B1A3F)" }}
            >
              <span className="flex items-center justify-center gap-3">
                Garantir Acesso por R$67
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            {/* ÂNCORAS DE DECISÃO */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {anchors.map((a, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl px-4 py-3 border border-stone-100 shadow-sm"
                >
                  <span className="text-lg shrink-0">{a.icon}</span>
                  <div>
                    <p className="text-xs font-bold text-stone-700 leading-tight">{a.label}</p>
                    <p className="text-[11px] text-stone-400 leading-tight mt-0.5">{a.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* MOCKUP — MOBILE */}
            <div className="lg:hidden">
              <MockupStrip />
            </div>

          </div>

          {/* ═══════════════════════════════════════════
              COLUNA DIREITA — imagem 16:9 + mockup
              (desktop only)
          ═══════════════════════════════════════════ */}
          <div className="hidden lg:flex flex-col gap-5 sticky top-8" data-aos="fade-left">

            {/* Imagem 16:9 */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/60">
              <Image
                src="/doce-sem-culpa/hero_mesa.jpeg"
                alt="Mesa com sobremesas funcionais variadas"
                fill
                className="object-cover"
                priority
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-stone-900/30 via-transparent to-transparent" />
              {/* Badge avaliação desktop */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg px-4 py-2.5 border" style={{ borderColor: "#D4A04A40" }}>
                <p className="text-xl font-extrabold text-center" style={{ color: "#8B2252" }}>4.9★</p>
                <p className="text-[10px] text-stone-400 text-center">+2.000 alunos</p>
              </div>
            </div>

            {/* Mockup desktop */}
            <MockupStrip />

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;