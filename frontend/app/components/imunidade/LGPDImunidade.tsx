"use client";

import React, { useState, useEffect } from "react";

const LGPDImunidade = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if already accepted
      try {
        const accepted = document.cookie.includes("lgpd_accepted=true");
        if (!accepted) setShow(true);
      } catch {
        setShow(true);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const accept = () => {
    try {
      document.cookie = "lgpd_accepted=true; max-age=31536000; path=/";
    } catch {
      // ignore
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 lg:hidden-false">
      <div className="max-w-2xl mx-auto bg-gray-900 text-white rounded-xl p-4 flex flex-col sm:flex-row items-center gap-3 shadow-2xl">
        <p className="text-xs leading-relaxed flex-1">
          Este site usa cookies para melhorar sua experiência e personalizar
          anúncios. Ao continuar navegando, você concorda com nossa{" "}
          <a
            href="/politica-de-privacidade"
            className="underline hover:text-[#A3E635]"
          >
            Política de Privacidade
          </a>
          .
        </p>
        <button
          onClick={accept}
          className="flex-shrink-0 bg-[#4A7C29] text-white text-xs font-bold px-5 py-2 rounded-lg hover:brightness-110 transition-all"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
};

export default LGPDImunidade;
