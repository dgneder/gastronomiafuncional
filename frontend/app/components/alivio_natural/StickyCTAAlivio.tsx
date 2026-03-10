"use client";

import React from "react";

interface StickyCTAAlivioProps {
  isVisible: boolean;
  onButtonClick: () => void;
}

const StickyCTAAlivio: React.FC<StickyCTAAlivioProps> = ({ isVisible, onButtonClick }) => {
  return (
    <div className={`fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-[#4A7C29] shadow-[0_-4px_20px_rgba(0,0,0,0.12)] px-4 py-3 flex items-center justify-between gap-3 transition-transform duration-300 md:hidden ${isVisible ? "translate-y-0" : "translate-y-full"}`}>
      <div>
        <p className="font-black text-[#1E2A10] text-base leading-none">R$47</p>
        <p className="text-gray-400 text-[10px]">Acesso imediato</p>
      </div>
      <button onClick={onButtonClick} className="flex-1 py-3 bg-linear-to-r from-[#D97706] to-[#B45309] text-white font-black text-sm rounded-xl shadow-md">
        QUERO O GUIA →
      </button>
    </div>
  );
};

export default StickyCTAAlivio;