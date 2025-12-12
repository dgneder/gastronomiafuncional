"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import ScriptLoader from "@/app/components/cadastro_sobremesas/ScriptLoader";
import ProgressBar from "@/app/components/cadastro_sobremesas/ProgressBar";
import SocialProof from "@/app/components/cadastro_sobremesas/SocialProof";
import Benefits from "@/app/components/cadastro_sobremesas/Benefits";
import SatisfactionGuarantee from "@/app/components/cadastro_sobremesas/SatisfactionGuarantee";
import PriceIndicator from "@/app/components/cadastro_sobremesas/PriceIndicator";
import SecuritySeal from "@/app/components/cadastro_sobremesas/SecuritySeal";
import PersuasiveCTA from "@/app/components/cadastro_sobremesas/PersuasiveCTA";
import Form from "@/app/components/cadastro_sobremesas/form";
import { useTracking } from "@/app/hooks/useTracking";

// ✅ Client-only: não renderiza no SSR (evita hydration mismatch)
const CountdownTimer = dynamic(
  () => import("@/app/components/cadastro_sobremesas/CountdownTimer"),
  { ssr: false }
);

export default function CadastroSobremesasPremium() {
  const { trackViewContent } = useTracking();

  useEffect(() => {
    trackViewContent(
      "Cadastro Sobremesas Funcionais",
      "checkout-sobremesas-001",
      37.00
    );
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-pink-950 via-pink-900 to-zinc-900 text-zinc-100 px-4 py-10">
      <main className="bg-zinc-900 p-6 lg:p-8 rounded-2xl shadow-2xl w-full max-w-md border border-pink-400 space-y-6">
        {/* ORDEM ORIGINAL PRESERVADA */}
        <ProgressBar progress={50} />
        <h1 className="text-2xl lg:text-3xl font-extrabold text-center text-pink-400">
          Cadastre-se para Continuar
        </h1>
        <ScriptLoader />
        {/* ✅ Timer 24h (sem Date.now aqui) */}
        <CountdownTimer hours={24} />
        <Form />
        <SocialProof />
        <Benefits />
        <SatisfactionGuarantee />
        <PriceIndicator originalPrice={97} discountedPrice={37} />
        <PersuasiveCTA />
        <SecuritySeal />
      </main>
    </div>
  );
}