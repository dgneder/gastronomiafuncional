"use client";
import React from "react";

const CompactPrice: React.FC = () => {
  return (
    <div
      className="flex items-center justify-between py-3 px-4 rounded-xl border"
      style={{
        backgroundColor: "rgba(28, 25, 23, 0.6)",
        borderColor: "rgba(120, 53, 15, 0.4)"
      }}
    >
      <div>
        <p className="text-white font-bold text-sm">Kit Doce Sem Culpa</p>
        <div className="flex items-baseline gap-2 mt-0.5">
          <span className="text-stone-500 text-xs line-through">R$299</span>
          <span className="font-extrabold text-xl" style={{ color: "#E8B84A" }}>R$67</span>
        </div>
      </div>
      <div className="flex flex-col items-end gap-1">
        <div
          className="flex items-center gap-1.5 px-3 py-1 rounded-full border"
          style={{
            backgroundColor: "rgba(139, 34, 82, 0.4)",
            borderColor: "rgba(212, 160, 74, 0.4)"
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: "#D4A04A" }}
          />
          <span className="text-[11px] font-bold" style={{ color: "#E8B84A" }}>78% OFF</span>
        </div>
        <span className="text-stone-500 text-[10px]">🎉 Preço de lançamento</span>
      </div>
    </div>
  );
};

export default CompactPrice;
