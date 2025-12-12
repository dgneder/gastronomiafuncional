"use client";
import { useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useTracking } from "@/app/hooks/useTracking";

function ObrigadoContent() {
  const searchParams = useSearchParams();
  const { trackPurchase } = useTracking();
  const hasTracked = useRef(false);

  useEffect(() => {
    if (hasTracked.current) return;
    hasTracked.current = true;

    const produto = searchParams.get("p") || "guia-sobremesas-funcionais";
    const valor = searchParams.get("v") || "37";

    trackPurchase(produto, parseFloat(valor));
  }, [searchParams, trackPurchase]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-950 via-pink-900 to-zinc-900 text-white px-4">
      <div className="text-center space-y-6 max-w-lg">
        <div className="text-6xl">
          <span role="img" aria-label="celebration">🎉</span>
        </div>
        <h1 className="text-4xl font-bold text-pink-400">
          Parabéns pela sua compra!
        </h1>
        <p className="text-xl text-pink-100">
          Seu acesso ao <strong>Guia de Sobremesas Funcionais</strong> já está disponível.
        </p>
        <p className="text-lg text-zinc-300">
          Verifique seu e-mail para acessar o conteúdo completo e todos os bônus exclusivos.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-pink-600 text-white font-bold uppercase rounded-lg hover:bg-pink-700 transition-all duration-300 shadow-md"
          >
            Voltar ao Início
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ObrigadoPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-zinc-900"></div>}>
      <ObrigadoContent />
    </Suspense>
  );
}