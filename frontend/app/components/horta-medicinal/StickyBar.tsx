"use client";

import React, { useEffect, useState } from "react";

interface StickyBarProps {
  onButtonClick: () => void;
}

const StickyBar: React.FC<StickyBarProps> = ({ onButtonClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[60] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-[#1B5E20] py-2 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          <p className="text-white text-xs sm:text-sm font-medium truncate">
            <span className="mr-1">🌱</span>
            <span className="hidden sm:inline">
              150+ páginas · 30 plantas · Guia científico de cultivo
            </span>
            <span className="sm:hidden">150+ páginas · R$34,90</span>
          </p>
          <button
            onClick={onButtonClick}
            className="flex-shrink-0 bg-[#F9A825] text-[#1B5E20] text-xs font-bold px-3 py-1.5 rounded-full hover:brightness-110 transition-all"
          >
            QUERO O MEU →
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyBar;
