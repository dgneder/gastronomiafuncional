"use client";

import React, { useEffect, useState } from "react";

const LGPD: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("lgpd_doce_sem_culpa");
    if (!seen) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("lgpd_doce_sem_culpa", "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-sm z-50 bg-white rounded-2xl shadow-2xl border border-rose-100 p-4">
      <p className="text-xs text-gray-600 mb-3">
        Utilizamos cookies para melhorar sua experiência. Ao continuar, você concorda com nossa{" "}
        <a href="/politica-de-privacidade" className="underline" style={{ color: "#8B2252" }}>Política de Privacidade</a>.
      </p>
      <button
        onClick={handleAccept}
        className="w-full py-2 text-sm font-bold text-white rounded-xl"
        style={{ backgroundColor: "#8B2252" }}
      >
        Entendi
      </button>
    </div>
  );
};

export default LGPD;
