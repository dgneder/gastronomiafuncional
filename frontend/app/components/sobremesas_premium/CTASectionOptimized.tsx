"use client";

import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";
import { FaArrowRight, FaShieldAlt, FaClock, FaCheck } from "react-icons/fa";

interface CTASectionOptimizedProps {
  onButtonClick: () => void;
}

const CTASectionOptimized: React.FC<CTASectionOptimizedProps> = ({
  onButtonClick,
}) => {
  const calculateTimeLeft = useCallback(() => {
    const now = new Date();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const diff = endOfDay.getTime() - now.getTime();

    if (diff > 0) {
      return {
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      };
    }

    return { hours: 0, minutes: 0, seconds: 0 };
  }, []);

  // ✅ Inicializa o state já com o valor correto (sem setState dentro do effect)
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());

  useEffect(() => {
    const timer = window.setInterval(() => {
      // ✅ setState dentro de callback (externo) = ok pro lint
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => window.clearInterval(timer);
  }, [calculateTimeLeft]);

  const benefits = [
    "+150 receitas funcionais passo a passo",
    "Opções veganas, low carb e com/sem adoçantes",
    "Lista de compras pronta para usar",
    "Bônus: Guia de substituições inteligentes",
  ];

  return (
    <section
      id="cta"
      className="scroll-mt-20 py-10 sm:py-16 px-4 bg-gradient-to-br from-rose-100 via-pink-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Timer de urgência no topo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium animate-pulse">
            <FaClock />
            <span>Oferta expira em:</span>
            <span className="font-mono font-bold">
              {String(timeLeft.hours).padStart(2, "0")}:
              {String(timeLeft.minutes).padStart(2, "0")}:
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Mockup do produto */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <Image
                src="/sobremesas/mockup-guia-sobremesas.png"
                alt="Guia de Sobremesas Funcionais"
                width={500}
                height={600}
                className="w-full max-w-sm mx-auto drop-shadow-2xl"
                priority
              />
              {/* Badge de desconto */}
              <div className="absolute -top-4 -right-4 sm:top-4 sm:right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-lg transform rotate-12">
                <span className="text-xs">APENAS</span>
                <span className="text-xl font-black">R$37</span>
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Transforme sua relação com{" "}
              <span className="text-pink-600">sobremesas</span>
            </h2>

            <p className="text-gray-600 mb-6">
              O guia completo para quem quer comer doces com mais equilíbrio,
              com receitas funcionais que cuidam do corpo e encantam o paladar.
            </p>

            {/* Lista de benefícios */}
            <ul className="space-y-3 mb-6 text-left">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Preço */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg border border-pink-100 mb-6">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                <div className="text-center lg:text-left">
                  <p className="text-sm text-gray-500 line-through">De R$97</p>
                  <p className="text-4xl sm:text-5xl font-black text-pink-600">
                    R$37
                  </p>
                </div>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm font-bold">
                  62% OFF
                </div>
              </div>

              {/* Botão CTA */}
              <button
                onClick={onButtonClick}
                className="w-full py-4 px-6 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>GARANTIR MEU ACESSO AGORA</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Garantia e pagamento */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <FaShieldAlt className="text-green-500" />
                  <span>7 dias de garantia</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/icons/pix.png" alt="Pix" width={20} height={20} />
                  <Image src="/icons/cartao.png" alt="Cartão" width={20} height={20} />
                  <Image src="/icons/boleto.png" alt="Boleto" width={20} height={20} />
                </div>
              </div>
            </div>

            {/* Micro prova social (recomendo trocar por algo verificável) */}
            <p className="text-center lg:text-left text-sm text-gray-500">
              ✅ Acesso imediato + download • garantia de 7 dias
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASectionOptimized;
