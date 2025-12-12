"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import ScriptLoader from "@/app/components/cadastro_trufas/ScriptLoader";
import ProgressBar from "@/app/components/cadastro_trufas/ProgressBar";
import SocialProof from "@/app/components/cadastro_trufas/SocialProof";
import Benefits from "@/app/components/cadastro_trufas/Benefits";
import SatisfactionGuarantee from "@/app/components/cadastro_trufas/SatisfactionGuarantee";
import PriceIndicator from "@/app/components/cadastro_trufas/PriceIndicator";
import SecuritySeal from "@/app/components/cadastro_trufas/SecuritySeal";
import PersuasiveCTA from "@/app/components/cadastro_trufas/PersuasiveCTA";
import Form from "@/app/components/cadastro_trufas/Form";
import { useTracking } from "@/app/hooks/useTracking";

const CountdownTimer = dynamic(
  () => import("@/app/components/cadastro_trufas/CountdownTimer"),
  { ssr: false }
);

export default function CadastroTrufasPremium() {
  const { trackAddToCart } = useTracking();

  useEffect(() => {
    trackAddToCart(
      "Guia de Trufas e Docinhos Funcionais",
      "guia-trufas-funcionais",
      47.00
    );
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-amber-950 via-amber-900 to-zinc-900 text-zinc-100 px-4 py-10">
      <main className="bg-zinc-900 p-6 lg:p-8 rounded-2xl shadow-2xl w-full max-w-md border border-amber-500 space-y-6">
        <ProgressBar progress={50} />
        <h1 className="text-2xl lg:text-3xl font-extrabold text-center text-amber-400">
          Cadastre-se para Continuar
        </h1>
        <ScriptLoader />
        <CountdownTimer hours={24} />
        <Form />
        <SocialProof />
        <Benefits />
        <SatisfactionGuarantee />
        <PriceIndicator originalPrice={97} discountedPrice={47} />
        <PersuasiveCTA />
        <SecuritySeal />
      </main>
    </div>
  );
}