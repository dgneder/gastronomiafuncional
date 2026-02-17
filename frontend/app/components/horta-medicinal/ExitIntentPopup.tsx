"use client";

import React, { useEffect, useState, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

interface ExitIntentPopupProps {
  onButtonClick: () => void;
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ onButtonClick }) => {
  const [show, setShow] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.clientY < 10 && !triggered.current) {
        triggered.current = true;
        setShow(true);
      }
    };
    document.addEventListener("mouseleave", handler);
    return () => document.removeEventListener("mouseleave", handler);
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-5"
      onClick={(e) => {
        if (e.target === e.currentTarget) setShow(false);
      }}
    >
      <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center relative shadow-2xl">
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-5 text-gray-400 hover:text-gray-700 text-2xl"
        >
          ×
        </button>

        <div className="text-5xl mb-4">🌱</div>

        <h3 className="font-black text-gray-900 text-xl mb-3">
          Espera — antes de ir...
        </h3>

        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          Por apenas <strong className="text-[#1B5E20]">R$34,90</strong> você
          aprende a cultivar 30 plantas medicinais com ciência de verdade.
          Calendários por região, fichas completas e 4 métodos de secagem.
          Garantia de 7 dias — risco zero.
        </p>

        <button
          onClick={() => {
            setShow(false);
            onButtonClick();
          }}
          className="w-full py-4 px-6 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] hover:brightness-110 text-white font-black text-lg rounded-xl shadow-lg flex items-center justify-center gap-2 group transition-all"
        >
          <span>QUERO MEU GUIA — R$34,90</span>
          <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
        </button>

        <p
          className="text-gray-400 text-xs mt-4 cursor-pointer underline hover:text-gray-600"
          onClick={() => setShow(false)}
        >
          Não, obrigada. Prefiro continuar sem o guia.
        </p>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
