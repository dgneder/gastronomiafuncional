"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const LGPDHorta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage?.getItem("lgpd-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage?.setItem("lgpd-consent", "accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[70] lg:bottom-4 lg:left-4 lg:right-auto lg:max-w-sm">
      <div className="bg-gray-900 text-white p-4 lg:rounded-xl shadow-2xl border-t lg:border border-gray-700">
        <p className="text-xs leading-relaxed mb-3">
          Utilizamos cookies para melhorar sua experiência e para fins de
          marketing. Ao continuar navegando, você concorda com nossa{" "}
          <Link
            href="/politica-de-privacidade"
            className="underline text-[#F9A825]"
          >
            Política de Privacidade
          </Link>
          .
        </p>
        <button
          onClick={handleAccept}
          className="w-full lg:w-auto px-6 py-2 bg-[#2E7D32] hover:bg-[#1B5E20] text-white text-sm font-semibold rounded-lg transition-colors"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
};

export default LGPDHorta;
