"use client";

import React, { useState, useEffect } from "react";

const LGPDAlivio: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("lgpd_alivio_natural");
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("lgpd_alivio_natural", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1E2A10] border-t border-white/10 px-4 py-4 shadow-2xl md:bottom-4 md:left-4 md:right-auto md:max-w-sm md:rounded-2xl">
      <p className="text-white/80 text-xs leading-relaxed mb-3">
        🍪 Usamos cookies para melhorar sua experiência, analisar o tráfego e
        personalizar anúncios. Ao continuar navegando, você concorda com nossa{" "}
        <a href="/politica-de-privacidade" className="text-[#A3D977] underline">
          Política de Privacidade
        </a>.
      </p>
      <button
        onClick={accept}
        className="w-full py-2 bg-[#4A7C29] hover:bg-[#2D5016] text-white text-xs font-bold rounded-lg transition-colors"
      >
        Entendi e aceito
      </button>
    </div>
  );
};

export default LGPDAlivio;
