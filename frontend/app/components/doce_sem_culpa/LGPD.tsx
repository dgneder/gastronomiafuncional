"use client";

import React, { useState, useEffect } from "react";

const LGPD: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("lgpd_consent_doce");
    if (!consent) {
      setTimeout(() => setShow(true), 2000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("lgpd_consent_doce", "accepted");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto bg-stone-900 text-white rounded-2xl p-5 shadow-2xl flex flex-col sm:flex-row items-center gap-4">
        <p className="text-sm text-stone-300 grow">
          Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{" "}
          <a href="/privacidade" className="underline hover:text-amber-300" style={{ color: "#D4A04A" }}>
            Política de Privacidade
          </a>.
        </p>
        <button
          onClick={handleAccept}
          className="px-6 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors text-white"
          style={{ background: "linear-gradient(135deg, #8B2252, #6B1A3F)" }}
        >
          Aceitar
        </button>
      </div>
    </div>
  );
};

export default LGPD;
