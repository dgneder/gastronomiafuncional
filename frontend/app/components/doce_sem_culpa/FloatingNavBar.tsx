"use client";

import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineCake } from "react-icons/md";

interface FloatingNavBarProps {
  onLoginClick: () => void;
  handleButtonClick: () => void;
}

const FloatingNavBar: React.FC<FloatingNavBarProps> = ({ onLoginClick, handleButtonClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 animate-slideDown">
      <div className="bg-white/95 backdrop-blur-md shadow-lg border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MdOutlineCake style={{ color: "#8B2252" }} className="text-lg" />
            <span className="font-bold text-gray-800 text-sm hidden sm:inline">Doce Sem Culpa</span>
            <span className="hidden md:inline-flex items-center gap-1.5 ml-3 bg-rose-50 border border-rose-200 rounded-full px-3 py-0.5">
              <span className="text-gray-400 line-through text-xs">R$97</span>
              <span className="text-sm font-extrabold" style={{ color: "#8B2252" }}>R$47</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={onLoginClick} className="text-sm text-gray-500 hover:text-gray-700 transition-colors hidden sm:inline">
              Já sou aluno
            </button>
            <button
              onClick={handleButtonClick}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white rounded-lg transition-all hover:scale-[1.03]"
              style={{ background: "linear-gradient(135deg, #8B2252, #6B1A40)" }}
            >
              <span>Garantir por R$47</span>
              <FaArrowRight className="text-xs" />
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes slideDown { from { transform: translateY(-100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-slideDown { animation: slideDown 0.3s ease-out; }
      `}</style>
    </div>
  );
};

export default FloatingNavBar;
