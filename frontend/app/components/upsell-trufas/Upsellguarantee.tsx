"use client";

import React, { useEffect, useState } from "react";
import { FaShieldAlt, FaGift, FaArrowRight, FaClock } from "react-icons/fa";

interface UpsellGuaranteeProps {
  onAccept: () => void;
  onDecline: () => void;
}

const UpsellGuarantee: React.FC<UpsellGuaranteeProps> = ({
  onAccept,
  onDecline,
}) => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 10,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(interval);
          return prev;
        }

        if (prev.seconds === 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }

        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-6 lg:px-12 bg-gradient-to-b from-orange-100 to-amber-50">
      <div className="max-w-3xl mx-auto">
        {/* Garantia */}
        <div className="text-center mb-12">
          <FaShieldAlt className="text-6xl text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-amber-800 mb-4">
            Garantia Incondicional de 7 Dias
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Experimente o Guia de Trufas e Docinhos Funcionais por 7 dias completos. 
            Se você não amar as receitas, se os ingredientes não fizerem sentido para você, 
            ou se simplesmente mudar de ideia,{" "}
            <strong>devolvemos 100% do seu dinheiro</strong>.
          </p>
          <p className="text-gray-600">
            Sem perguntas, sem burocracia. Você está 100% protegido.
          </p>
        </div>

        {/* CTA Final */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-amber-400">
          {/* Timer */}
          <div className="flex items-center justify-center gap-3 bg-red-100 text-red-700 py-3 px-6 rounded-full mb-8 font-semibold">
            <FaClock className="animate-pulse" />
            <span>
              Oferta expira em{" "}
              <span className="bg-red-600 text-white px-2 py-1 rounded font-mono">
                {String(timeLeft.minutes).padStart(2, "0")}:
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
            </span>
          </div>

          {/* Resumo da Oferta */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-amber-800 mb-4">
              Última Chance: +100 Receitas de Trufas Funcionais
            </h3>

            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-2xl text-gray-400 line-through">R$ 67</span>
              <span className="text-4xl font-extrabold text-green-600">
                R$ 37
              </span>
            </div>

            <p className="text-gray-600 text-sm">
              Pagamento único • Acesso vitalício • Garantia de 7 dias
            </p>
          </div>

          {/* Botão Aceitar */}
          <button
            onClick={onAccept}
            className="w-full py-5 px-8 bg-green-600 hover:bg-green-500 text-white text-xl font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 mb-4"
          >
            <FaGift className="text-2xl" />
            SIM! Quero Mais 100 Receitas Saudáveis!
            <FaArrowRight />
          </button>

          {/* O que está incluído */}
          <div className="text-left space-y-2 mb-6">
            {[
              "100 Receitas de Trufas Funcionais",
              "10 Módulos por Objetivo de Saúde",
              "Bônus: Coberturas e Recheios Funcionais",
              "Bônus: Trufas para Datas Especiais",
              "Guia de Ingredientes Funcionais",
              "Fichas Nutricionais Completas",
            ].map((item, idx) => (
              <p key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
                <span className="text-green-500">✓</span>
                {item}
              </p>
            ))}
          </div>

          {/* Selos */}
          <div className="flex justify-center gap-4 text-gray-500 text-xs border-t pt-6">
            <span>🔒 Compra Segura</span>
            <span>📱 Acesso Imediato</span>
            <span>💳 Até 5x sem juros</span>
          </div>

          {/* Botão Recusar */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={onDecline}
              className="w-full py-3 text-gray-500 text-sm hover:text-gray-700 transition-colors"
            >
              Não, obrigado. Prefiro ficar só com as sobremesas.
            </button>
          </div>
        </div>

        {/* Aviso Final */}
        <p className="text-center text-gray-500 text-sm mt-8">
          Ao clicar em &quot;Sim&quot;, você será direcionado para a página de pagamento
          segura. Ao clicar em &quot;Não&quot;, você perderá acesso a esta oferta
          especial permanentemente.
        </p>
      </div>
    </section>
  );
};

export default UpsellGuarantee;