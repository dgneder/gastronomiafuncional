"use client";

import React, { useEffect } from "react";
import ScriptLoader from "@/app/components/cadastro_sobremesas/ScriptLoader";
import ProgressBar from "@/app/components/cadastro_sobremesas/ProgressBar";
import CountdownTimer from "@/app/components/cadastro_sobremesas/CountdownTimer";
import SocialProof from "@/app/components/cadastro_sobremesas/SocialProof";
import Benefits from "@/app/components/cadastro_sobremesas/Benefits";
import SatisfactionGuarantee from "@/app/components/cadastro_sobremesas/SatisfactionGuarantee";
import PriceIndicator from "@/app/components/cadastro_sobremesas/PriceIndicator";
import SecuritySeal from "@/app/components/cadastro_sobremesas/SecuritySeal";
import PersuasiveCTA from "@/app/components/cadastro_sobremesas/PersuasiveCTA";
import Form from "@/app/components/cadastro_sobremesas/form";

// Tipagem global para fbq
declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

// Mesmo helper para garantir que o evento dispare
function useFbqTrack(eventName: string, params?: Record<string, any>) {
  useEffect(() => {
    let tries = 0;
    const maxTries = 20;
    const delay = 250;

    function fire() {
      if (typeof window !== "undefined" && typeof window.fbq === "function") {
        window.fbq("track", eventName, params || {});
        // console.log("FBQ event fired:", eventName, params);
      } else if (tries < maxTries) {
        tries++;
        setTimeout(fire, delay);
      } else {
        // console.warn("FBQ not available to fire event:", eventName);
      }
    }

    fire();
  }, [eventName]);
}

export default function CadastroSobremesasPremium() {
  // AddToCart ao carregar a página de cadastro
  useFbqTrack("AddToCart", {
    content_name: "Cadastro Sobremesas Funcionais",
    value: 37.0,
    currency: "BRL",
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-pink-950 via-pink-900 to-zinc-900 text-zinc-100 px-4 py-10">
      <main className="bg-zinc-900 p-6 lg:p-8 rounded-2xl shadow-2xl w-full max-w-md border border-pink-400 space-y-6">

        {/* ORDEM EXATA DO ORIGINAL */}

        <ProgressBar progress={50} />

        <h1 className="text-2xl lg:text-3xl font-extrabold text-center text-pink-400">
          Cadastre-se para Continuar
        </h1>

        <ScriptLoader />

        <CountdownTimer targetDate={new Date(Date.now() + 24 * 60 * 60 * 1000)} />

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

