"use client";

import React, { useState, useEffect } from "react";

const LGPDSono = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const consent = document.cookie
        .split("; ")
        .find((row) => row.startsWith("lgpd_consent="));
      if (!consent) {
        setIsVisible(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    document.cookie = "lgpd_consent=true; max-age=31536000; path=/";
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[70] lg:bottom-4 lg:left-4 lg:right-auto lg:max-w-md">
      <div className="bg-white border border-gray-200 shadow-2xl rounded-t-2xl lg:rounded-2xl p-4 sm:p-5 mx-0 lg:mx-0">
        <p className="text-gray-600 text-xs leading-relaxed mb-3">
          Utilizamos cookies para melhorar sua experiência e para fins de
          análise. Ao continuar navegando, você concorda com nossa{" "}
          <a
            href="/politica-de-privacidade"
            className="text-[#2D5016] underline hover:text-[#4A7C29]"
          >
            Política de Privacidade
          </a>
          .
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleAccept}
            className="flex-1 py-2 px-4 bg-[#2D5016] text-white text-xs font-bold rounded-lg hover:bg-[#4A7C29] transition-colors"
          >
            Aceitar
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="py-2 px-4 text-gray-500 text-xs font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default LGPDSono;
