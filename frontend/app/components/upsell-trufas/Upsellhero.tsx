"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaHeart, FaArrowRight, FaExclamationTriangle } from "react-icons/fa";

interface UpsellHeroProps {
  customerName: string;
  onAccept: () => void;
  onDecline: () => void;
}

const UpsellHero: React.FC<UpsellHeroProps> = ({
  customerName,
  onAccept,
  onDecline,
}) => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 10,
    seconds: 0,
  });

  const firstName = customerName.split(" ")[0] || "Amigo(a)";

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(interval);
          onDecline();
          return prev;
        }

        if (prev.seconds === 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }

        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onDecline]);

  return (
    <section className="relative py-12 px-6 lg:px-12 text-center overflow-hidden">
      {/* Barra de Urgência Fixa */}
      <div className="fixed top-0 left-0 right-0 bg-red-600 text-white py-3 px-4 z-50 flex items-center justify-center gap-3 shadow-lg">
        <FaExclamationTriangle className="text-yellow-300 animate-pulse" />
        <span className="font-bold text-sm lg:text-base">
          OFERTA EXCLUSIVA! Esta página expira em{" "}
          <span className="bg-white text-red-600 px-2 py-1 rounded font-mono mx-1">
            {String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}
          </span>
        </span>
        <FaExclamationTriangle className="text-yellow-300 animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto pt-16">
        {/* Parabéns */}
        <div className="bg-green-100 border border-green-400 rounded-lg p-4 mb-8 inline-block">
          <p className="text-green-700 font-semibold text-lg">
            ✅ Parabéns, {firstName}! Sua compra do Guia de Sobremesas Funcionais foi confirmada!
          </p>
        </div>

        {/* Headline Principal */}
        <h1 className="text-3xl lg:text-5xl font-extrabold text-amber-800 leading-tight mb-6">
          <span className="text-red-600">ESPERE!</span> Que tal{" "}
          <span className="text-amber-600 underline decoration-wavy">100 receitas a mais</span>{" "}
          de docinhos que cuidam da sua saúde?
        </h1>

        {/* Subheadline */}
        <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
          O <span className="text-amber-700 font-bold">Guia de Trufas e Docinhos Funcionais</span> é 
          o complemento perfeito: mais 100 receitas gourmet com benefícios reais para{" "}
          <strong>energia, imunidade, sono, foco, beleza</strong> e muito mais!
        </p>

        {/* Mockup do Produto */}
        <div className="relative mb-10">
          <div className="absolute -top-4 -right-4 lg:right-20 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm transform rotate-12 shadow-lg z-10">
            +100 RECEITAS!
          </div>
          <Image
            src="/trufas/mockup.png"
            alt="Guia de Trufas e Docinhos Funcionais"
            width={600}
            height={400}
            className="mx-auto rounded-2xl shadow-2xl border-4 border-amber-400"
          />
        </div>

        {/* Preço */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 max-w-xl mx-auto border-2 border-amber-300">
          <p className="text-gray-600 mb-2">Valor normal do Guia de Trufas:</p>
          <p className="text-3xl text-gray-400 line-through mb-2">R$ 67,00</p>
          
          <p className="text-amber-700 font-semibold text-lg mb-2">
            Oferta exclusiva para quem comprou AGORA:
          </p>
          <p className="text-5xl font-extrabold text-green-600 mb-4">
            R$ 37,00
          </p>
          
          <p className="text-sm text-gray-500 mb-6">
            ou 4x de R$ 10,04 no cartão
          </p>

          {/* Botão Aceitar */}
          <button
            onClick={onAccept}
            className="w-full py-5 px-8 bg-green-600 hover:bg-green-500 text-white text-xl font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 mb-4"
          >
            <FaHeart className="text-2xl" />
            SIM! Quero Mais 100 Receitas Saudáveis!
            <FaArrowRight />
          </button>

          {/* Botão Recusar */}
          <button
            onClick={onDecline}
            className="w-full py-3 text-gray-500 text-sm hover:text-gray-700 transition-colors underline"
          >
            Não, obrigado. Prefiro ficar só com as sobremesas.
          </button>
        </div>

        {/* Selos de Segurança */}
        <div className="flex justify-center items-center gap-6 text-gray-500 text-sm">
          <span>🔒 Compra 100% Segura</span>
          <span>✅ Garantia de 7 Dias</span>
          <span>📱 Acesso Imediato</span>
        </div>
      </div>
    </section>
  );
};

export default UpsellHero;