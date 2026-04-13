"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import Form from "@/app/components/cadastro_panificacao/Form";
import ProgressBar from "@/app/components/cadastro_panificacao/ProgressBar";
import OrderSummary from "@/app/components/cadastro_panificacao/OrderSummary";
import SocialProof from "@/app/components/cadastro_panificacao/SocialProof";
import SecuritySeal from "@/app/components/cadastro_panificacao/SecuritySeal";
import TrustBadges from "@/app/components/cadastro_panificacao/TrustBadges";
import CompactPrice from "@/app/components/cadastro_panificacao/Compactprice";
import { useTracking } from "@/app/hooks/useTracking";

const CountdownBanner = dynamic(() => import("@/app/components/cadastro_panificacao/CountdownBanner"), { ssr: false });
const VideoWall       = dynamic(() => import("@/app/components/cadastro_panificacao/VideoWall"),       { ssr: false });
const FoodGallery     = dynamic(() => import("@/app/components/cadastro_panificacao/FoodGallery"),     { ssr: false });

export default function CadastroPanificacao() {
  const { trackAddToCart } = useTracking();

  useEffect(() => {
    trackAddToCart("Kit Pão Sem Culpa — Panificação Funcional", "kit-pao-sem-culpa", 67.0);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #3D2418 0%, #2D1B12 50%, #1A110A 100%)" }}>

      {/* ── Formulário (acima da dobra) ── */}
      <div className="px-4 py-6 lg:py-12">
        <div className="max-w-lg mx-auto space-y-4">
          <div className="text-center space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-900/40 border border-amber-700/30">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-300/80 text-[11px] font-semibold uppercase tracking-wider">
                🎉 Preço Especial de Lançamento
              </span>
            </div>
            <h1 className="text-xl lg:text-3xl font-extrabold text-white">
              Falta pouco para o seu{" "}
              <span className="text-amber-400">Kit Pão Sem Culpa!</span>
            </h1>
          </div>

          <div className="bg-stone-900/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-stone-700/50 overflow-hidden">
            <ProgressBar progress={66} />
            <CountdownBanner />
            <div className="p-5 lg:p-8 space-y-4 lg:space-y-6">
              <div className="lg:hidden"><CompactPrice /></div>
              <Form />
              <div className="lg:hidden"><SecuritySeal /></div>
              <OrderSummary />
              <SocialProof />
              <div className="hidden lg:block"><SecuritySeal /></div>
            </div>
          </div>

          <TrustBadges />
        </div>
      </div>

      {/* ── Conteúdo visual (para quem hesitou e rolou) ── */}
      <div className="px-4 py-6 max-w-lg mx-auto">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-stone-700/50" />
          <p className="text-stone-500 text-xs uppercase tracking-widest font-semibold whitespace-nowrap">Veja o que você vai receber</p>
          <div className="h-px flex-1 bg-stone-700/50" />
        </div>
      </div>

      <VideoWall />
      <FoodGallery />

      {/* ── Segundo CTA ── */}
      <div className="px-4 py-8 max-w-lg mx-auto">
        <div className="bg-stone-900/80 backdrop-blur-sm rounded-2xl border border-amber-700/30 p-6 text-center space-y-4">
          <p className="text-amber-300/80 text-sm font-semibold uppercase tracking-wider">🎉 Preço especial de lançamento</p>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-stone-500 line-through text-base">R$97</span>
            <span className="text-3xl font-extrabold text-amber-400">R$67</span>
            <span className="text-xs font-bold text-amber-400 bg-amber-900/30 border border-amber-700/30 px-2 py-0.5 rounded-full">31% OFF</span>
          </div>
          <p className="text-stone-500 text-xs">ou 6x de R$12,80 sem juros</p>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="block w-full py-4 text-base font-bold text-white rounded-xl shadow-lg transition-all hover:scale-[1.02]"
            style={{ background: "linear-gradient(135deg, #6B3A2A, #8B5A3C)" }}
          >
            ↑ Voltar e garantir por R$67
          </a>
          <p className="text-stone-600 text-[10px]">Acesso imediato · Garantia de 7 dias · Pagamento seguro via Hotmart</p>
        </div>
      </div>
    </div>
  );
}
