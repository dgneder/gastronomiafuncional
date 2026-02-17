"use client";

import React, { useState, useEffect, useCallback } from "react";
import { FaTimes, FaArrowRight, FaShieldAlt } from "react-icons/fa";

interface ExitIntentPopupProps {
  onButtonClick: () => void;
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ onButtonClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (hasTriggered) return;
      // Detecta saída pelo topo da página (exit intent)
      if (e.clientY <= 5) {
        setIsVisible(true);
        setHasTriggered(true);
      }
    },
    [hasTriggered]
  );

  useEffect(() => {
    // Só ativa exit intent no desktop e após 15s na página
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 15000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseLeave]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 animate-fadeIn">
      {/* Overlay escuro */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setIsVisible(false)}
      />

      {/* Popup */}
      <div className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border-2 border-[#B8860B]/20 animate-scaleIn">
        {/* Botão fechar */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <FaTimes size={18} />
        </button>

        {/* Conteúdo */}
        <div className="text-center">
          <span className="text-4xl mb-4 block">🌙</span>

          <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-3 leading-tight">
            Espera! Antes de ir...
          </h3>

          <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
            Você está a um clique de ter acesso a{" "}
            <strong>12 plantas com evidência científica</strong> e{" "}
            <strong>5 protocolos prontos</strong> para dormir melhor — por
            apenas R$37, com garantia de 7 dias.
          </p>

          {/* Preço */}
          <div className="flex items-baseline justify-center gap-2 mb-4">
            <span className="text-gray-400 line-through text-sm">R$97</span>
            <span className="text-3xl font-black text-[#2D5016]">R$37</span>
          </div>

          <button
            onClick={() => {
              setIsVisible(false);
              onButtonClick();
            }}
            className="w-full py-4 px-6 bg-gradient-to-r from-[#B8860B] to-[#9a7209] hover:brightness-110 text-white font-bold text-lg rounded-xl shadow-lg flex items-center justify-center gap-2 group transition-all"
          >
            <span>SIM, QUERO DORMIR MELHOR</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
          </button>

          <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-500">
            <FaShieldAlt className="text-[#4A7C29]" />
            <span>Garantia incondicional de 7 dias</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.3s ease-out; }
      `}</style>
    </div>
  );
};

export default ExitIntentPopup;
