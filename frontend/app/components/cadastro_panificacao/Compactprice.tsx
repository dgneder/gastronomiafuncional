"use client";
import React from "react";

const CompactPrice: React.FC = () => {
  return (
    <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-stone-800/60 border border-stone-700/40">
      {/* Left — product + price */}
      <div>
        <p className="text-white font-bold text-sm">Pão Sem Culpa</p>
        <div className="flex items-baseline gap-2 mt-0.5">
          <span className="text-stone-500 text-xs line-through">R$47</span>
          <span className="text-amber-400 font-extrabold text-xl">R$37</span>
        </div>
      </div>

      {/* Right — coupon badge */}
      <div className="flex flex-col items-end gap-1">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-900/40 border border-green-700/40">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-green-400 text-[11px] font-bold">-R$10</span>
        </div>
        <span className="text-stone-500 text-[10px]">3x R$12,90</span>
      </div>
    </div>
  );
};

export default CompactPrice;