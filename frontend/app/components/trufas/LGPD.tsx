"use client";

import React, { useState } from "react";
import Link from "next/link";

const CookieConsent: React.FC = () => {
  // Inicializa o estado diretamente com função lazy (evita useEffect)
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    const consent = localStorage.getItem("cookieConsent");
    return !consent;
  });
  
  const [isExpanded, setIsExpanded] = useState(false);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white text-gray-700 p-4 z-50 shadow-xl border-t border-amber-200">
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Texto principal */}
        <div>
          <p className="text-sm">
            Usamos cookies para melhorar sua experiência no site. Ao continuar navegando, você concorda com nossa{" "}
            <Link
              href="/politica-de-privacidade"
              className="underline text-amber-600 hover:text-amber-500 transition-colors"
            >
              política de privacidade
            </Link>
            .
          </p>

          {isExpanded && (
            <div className="text-xs text-gray-500 mt-2 space-y-1">
              <p>🍪 <strong>Essenciais:</strong> para o funcionamento do site.</p>
              <p>📊 <strong>Análise:</strong> para entender seu uso e melhorar a experiência.</p>
              <p>🎯 <strong>Marketing:</strong> para conteúdos e ofertas personalizadas.</p>
            </div>
          )}

          <button
            onClick={handleExpand}
            className="mt-2 text-xs underline text-amber-600 hover:text-amber-500"
          >
            {isExpanded ? "Ver menos" : "Ver mais"}
          </button>
        </div>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2 lg:mt-0">
          <button
            onClick={handleAccept}
            className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md text-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            Aceitar Todos
          </button>
          <button
            onClick={handleDecline}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md text-sm transition-all focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Rejeitar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;