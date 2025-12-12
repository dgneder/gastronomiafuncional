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

    const produto = searchParams.get("p") || "guia-trufas-funcionais";
    const valor = searchParams.get("v") || "47";

    trackPurchase(produto, parseFloat(valor));
  }, [searchParams, trackPurchase]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-950 via-amber-900 to-zinc-900 text-white px-4">
      <div className="text-center space-y-6 max-w-lg">
        <div className="text-6xl">
          <span role="img" aria-label="celebration">🍫</span>
        </div>
        <h1 className="text-4xl font-bold text-amber-400">
          Parabéns pela sua compra!
        </h1>
        <p className="text-xl text-amber-100">
          Seu acesso ao <strong>Guia de Trufas e Docinhos Funcionais</strong> já está disponível.
        </p>
        <p className="text-lg text-zinc-300">
          Verifique seu e-mail para acessar as 100 receitas e todos os bônus exclusivos.
        </p>
        
        <div className="bg-zinc-800 rounded-xl p-6 border border-amber-500 mt-8">
          <h2 className="text-xl font-semibold text-amber-400 mb-4">O que você vai receber:</h2>
          <ul className="text-left text-zinc-300 space-y-2">
            <li>✅ 100 Receitas de Trufas Funcionais</li>
            <li>✅ 10 Módulos por Objetivo de Saúde</li>
            <li>✅ Bônus: Coberturas e Recheios Funcionais</li>
            <li>✅ Bônus: Trufas para Datas Especiais</li>
            <li>✅ Guia de Ingredientes Funcionais</li>
            <li>✅ Fichas Nutricionais Completas</li>
          </ul>
        </div>

        <div className="pt-6">
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-amber-600 text-white font-bold uppercase rounded-lg hover:bg-amber-500 transition-all duration-300 shadow-md"
          >
            Voltar ao Início
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ObrigadoTrufasPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-zinc-900"></div>}>
      <ObrigadoContent />
    </Suspense>
  );
}