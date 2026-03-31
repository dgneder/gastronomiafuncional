"use client";
import React from "react";

const CompactPrice: React.FC = () => {
  return (
    <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-stone-800/60 border border-stone-700/40">
      <div>
        <p className="text-white font-bold text-sm">Pão Sem Culpa</p>
        <div className="flex items-baseline gap-2 mt-0.5">
          <span className="text-stone-500 text-xs line-through">R$97</span>
          <span className="text-amber-400 font-extrabold text-xl">R$47</span>
        </div>
      </div>
      <div className="flex flex-col items-end gap-1">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-900/40 border border-amber-700/40">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-amber-400 text-[11px] font-bold">52% OFF</span>
        </div>
        <span className="text-stone-500 text-[10px]">🎉 Preço de lançamento</span>
      </div>
    </div>
  );
};

export default CompactPrice;
