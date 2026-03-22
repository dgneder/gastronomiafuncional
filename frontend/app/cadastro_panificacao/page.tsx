"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import Form from "@/app/components/cadastro_panificacao/Form";
import ProgressBar from "@/app/components/cadastro_panificacao/ProgressBar";
import OrderSummary from "@/app/components/cadastro_panificacao/OrderSummary";
import SocialProof from "@/app/components/cadastro_panificacao/SocialProof";
import SecuritySeal from "@/app/components/cadastro_panificacao/SecuritySeal";
import TrustBadges from "@/app/components/cadastro_panificacao/TrustBadges";
import { useTracking } from "@/app/hooks/useTracking";

const CountdownBanner = dynamic(
  () => import("@/app/components/cadastro_panificacao/CountdownBanner"),
  { ssr: false }
);

export default function CadastroPanificacao() {
  const { trackAddToCart } = useTracking();

  useEffect(() => {
    // Você pode manter trackAddToCart ou alterar para trackInitiateCheckout
    // dependendo da sua estratégia de eventos no Meta.
    trackAddToCart(
      "Pão Sem Culpa — Panificação Funcional",
      "pao-sem-culpa",
      37.0
    );
  },);

  return (
    <div
      className="min-h-screen px-4 py-8 lg:py-12"
      style={{
        background: "linear-gradient(180deg, #3D2418 0%, #2D1B12 50%, #1A110A 100%)",
      }}
    >
      <div className="max-w-lg mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-900/40 border border-amber-700/30">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-amber-300/80 text-xs font-semibold uppercase tracking-wider">
              Oferta de Lançamento Ativa
            </span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-white">
            Falta pouco para seus{" "}
            <span className="text-amber-400">pães funcionais!</span>
          </h1>
          <p className="text-stone-400 text-sm">
            Preencha seus dados para garantir o acesso com desconto de lançamento.
          </p>
        </div>

        {/* Main card */}
        <div className="bg-stone-900/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-stone-700/50 overflow-hidden">
          <ProgressBar progress={66} />
          <CountdownBanner />

          <div className="p-6 lg:p-8 space-y-6">
            <OrderSummary />
            <Form />
            <SocialProof />
            <SecuritySeal />
          </div>
        </div>

        <TrustBadges />
      </div>
    </div>
  );
}