"use client";

import React, { useEffect, useState, useCallback } from "react";
import { FaArrowRight, FaLock, FaFire } from "react-icons/fa";

interface FinalCTAOptimizedProps {
  onButtonClick: () => void;
}

const FinalCTAOptimized: React.FC<FinalCTAOptimizedProps> = ({ onButtonClick }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [unitsLeft, setUnitsLeft] = useState(37);

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

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  // Simula diminuição de estoque
  useEffect(() => {
    const stockTimer = setInterval(() => {
      setUnitsLeft((prev) => {
        const decrease = Math.random() > 0.7 ? 1 : 0;
        return Math.max(prev - decrease, 12);
      });
    }, 45000);

    return () => clearInterval(stockTimer);
  }, []);

  return (
    <section className="py-10 sm:py-16 px-4 bg-gradient-to-br from-pink-600 via-rose-500 to-pink-600 text-white relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Urgência */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse mb-4">
            <FaFire />
            <span>ÚLTIMA CHANCE</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            Não perca essa oportunidade!
          </h2>
          
          <p className="text-white/90 text-sm sm:text-base max-w-xl mx-auto">
            O preço promocional de R$37 está disponível por tempo limitado. 
            Depois volta para R$97.
          </p>
        </div>

        {/* Timer */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-8">
          {[
            { value: timeLeft.hours, label: "Horas" },
            { value: timeLeft.minutes, label: "Min" },
            { value: timeLeft.seconds, label: "Seg" },
          ].map((item, index) => (
            <div key={index} className="bg-white/20 backdrop-blur rounded-xl p-3 sm:p-4 min-w-[70px] sm:min-w-[80px]">
              <p className="text-2xl sm:text-3xl font-mono font-bold">
                {String(item.value).padStart(2, "0")}
              </p>
              <p className="text-xs text-white/80">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Escassez */}
        <div className="text-center mb-6">
          <p className="text-yellow-300 font-medium">
            ⚠️ Restam apenas <span className="text-2xl font-bold">{unitsLeft}</span> vagas com desconto
          </p>
        </div>

        {/* Preço + CTA */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-2xl">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-gray-400 line-through text-xl">R$97</span>
            <span className="text-4xl sm:text-5xl font-black text-pink-600">R$37</span>
          </div>

          <p className="text-gray-600 text-sm mb-4">
            Pagamento único • Acesso vitalício
          </p>

          <button
            onClick={onButtonClick}
            className="w-full py-4 px-6 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2 group mb-4"
          >
            <span>SIM! QUERO GARANTIR AGORA</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <FaLock className="text-green-500" />
            <span>Compra 100% segura • Garantia de 7 dias</span>
          </div>
        </div>

        {/* Micro prova social */}
        <p className="text-center text-white/80 text-sm mt-6">
          🔥 <strong>47 pessoas</strong> garantiram o acesso na última hora
        </p>
      </div>
    </section>
  );
};

export default FinalCTAOptimized;
