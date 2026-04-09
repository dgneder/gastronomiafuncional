"use client";

import React from "react";

const LaunchBanner: React.FC = () => (
  <div className="px-4 py-2.5" style={{ background: "linear-gradient(135deg, #6B1A40, #8B2252)" }}>
    <div className="max-w-6xl mx-auto flex items-center justify-between">
      <p className="text-rose-200/80 text-xs font-medium">🍰 Preço de lançamento — sobe em breve para R$67</p>
      <div className="flex items-center gap-2">
        <span className="text-white/40 line-through text-xs">R$97</span>
        <span className="text-white font-bold text-sm">R$47</span>
        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-green-400/20 text-green-300 border border-green-400/30">52% OFF</span>
      </div>
    </div>
  </div>
);

export default LaunchBanner;
