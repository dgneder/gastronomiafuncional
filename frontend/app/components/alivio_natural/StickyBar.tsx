"use client";

import React, { useState, useEffect } from "react";
import { FaLeaf } from "react-icons/fa";

interface StickyBarProps {
  onButtonClick: () => void;
}

const StickyBar: React.FC<StickyBarProps> = ({ onButtonClick }) => {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setVisible(current <= 60 || current < lastScroll);
      setLastScroll(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-[#1E2A10] px-4 py-2.5 flex items-center justify-center gap-3 shadow-lg">
        <FaLeaf className="text-[#A3D977] text-sm shrink-0 hidden sm:block" />
        <span className="text-white text-xs sm:text-sm font-medium opacity-90">
          🌿 Oferta especial — acesso imediato após confirmação
        </span>
        <button
          onClick={onButtonClick}
          className="ml-1 px-4 py-1.5 bg-[#D97706] hover:bg-[#B45309] text-white text-xs font-bold rounded-full transition-colors whitespace-nowrap"
        >
          VER OFERTA →
        </button>
      </div>
    </div>
  );
};

export default StickyBar;
