"use client";

import React, { useState, useEffect } from "react";

const LGPD: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("lgpd_consent");
    if (!consent) {
      setTimeout(() => setShow(true), 2000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("lgpd_consent", "accepted");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto bg-stone-900 text-white rounded-2xl p-5 shadow-2xl flex flex-col sm:flex-row items-center gap-4">
        <p className="text-sm text-stone-300 grow">
          Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{" "}
          <a href="/privacidade" className="underline text-amber-400 hover:text-amber-300">
            Política de Privacidade
          </a>.
        </p>
        <button
          onClick={handleAccept}
          className="px-6 py-2 bg-amber-600 hover:bg-amber-500 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
};

export default LGPD;
