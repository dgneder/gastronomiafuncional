"use client";

import React, { useState, useEffect } from "react";
import { FaBreadSlice, FaArrowRight } from "react-icons/fa";

interface FloatingNavBarProps {
  onLoginClick: () => void;
  handleButtonClick: () => void;
}

const FloatingNavBar: React.FC<FloatingNavBarProps> = ({ onLoginClick, handleButtonClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 animate-slideDown">
      <div className="bg-white/95 backdrop-blur-md shadow-lg border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaBreadSlice style={{ color: "#6B3A2A" }} />
            <span className="font-bold text-stone-800 text-sm hidden sm:inline">Pão Sem Culpa</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onLoginClick}
              className="text-sm text-stone-500 hover:text-stone-700 transition-colors hidden sm:inline"
            >
              Já sou aluno
            </button>
            <button
              onClick={handleButtonClick}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white rounded-lg transition-all hover:scale-[1.03]"
              style={{ background: "linear-gradient(135deg, #6B3A2A, #8B5A3C)" }}
            >
              <span>Garantir Acesso</span>
              <FaArrowRight className="text-xs" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slideDown { animation: slideDown 0.3s ease-out; }
      `}</style>
    </div>
  );
};

export default FloatingNavBar;
