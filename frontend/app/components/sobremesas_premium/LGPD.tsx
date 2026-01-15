"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const LGPD: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const consent = localStorage.getItem("cookieConsent");
      if (!consent) {
        // Delay para não aparecer imediatamente
        const timer = setTimeout(() => setIsVisible(true), 2000);
        return () => clearTimeout(timer);
      }
    } catch {
      // localStorage não disponível (SSR)
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("cookieConsent", "accepted");
    } catch {
      // Ignorar erro de localStorage
    }
    setIsVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem("cookieConsent", "declined");
    } catch {
      // Ignorar erro de localStorage
    }
    setIsVisible(false);
  };

  // Não renderizar no servidor
  if (!isMounted || !isVisible) return null;

  return (
    <div className="fixed bottom-20 lg:bottom-0 left-0 right-0 z-40 p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-2xl border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          {/* Texto */}
          <div className="flex-1">
            <p className="text-sm text-gray-700">
              🍪 Usamos cookies para melhorar sua experiência.{" "}
              <Link
                href="/politica-de-privacidade"
                className="text-pink-600 hover:underline"
              >
                Saiba mais
              </Link>
            </p>
          </div>

          {/* Botões */}
          <div className="flex gap-2">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              Rejeitar
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors"
            >
              Aceitar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LGPD;
