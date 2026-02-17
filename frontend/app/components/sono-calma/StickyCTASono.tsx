"use client";

import React from "react";
import { FaShoppingCart } from "react-icons/fa";

interface StickyCTASonoProps {
  isVisible: boolean;
  onButtonClick: () => void;
}

const StickyCTASono: React.FC<StickyCTASonoProps> = ({
  isVisible,
  onButtonClick,
}) => {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {/* Gradiente de fade */}
      <div className="h-4 bg-gradient-to-t from-white to-transparent" />

      {/* Container do CTA */}
      <div className="bg-white border-t border-gray-200 shadow-2xl px-4 py-3 safe-area-bottom">
        <div className="flex items-center gap-3">
          {/* Preço */}
          <div className="flex-shrink-0">
            <p className="text-xs text-gray-400 line-through">R$97</p>
            <p className="text-xl font-bold text-[#2D5016]">R$37</p>
          </div>

          {/* Botão */}
          <button
            onClick={onButtonClick}
            className="flex-1 py-3 px-4 bg-gradient-to-r from-[#B8860B] to-[#9a7209] hover:brightness-110 text-white font-bold text-sm rounded-xl shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <FaShoppingCart />
            <span>QUERO DORMIR MELHOR</span>
          </button>
        </div>

        {/* Micro garantia */}
        <p className="text-center text-[10px] text-gray-400 mt-1">
          ✓ Garantia de 7 dias • Acesso imediato • PDF
        </p>
      </div>

      <style jsx>{`
        .safe-area-bottom {
          padding-bottom: max(12px, env(safe-area-inset-bottom));
        }
      `}</style>
    </div>
  );
};

export default StickyCTASono;
