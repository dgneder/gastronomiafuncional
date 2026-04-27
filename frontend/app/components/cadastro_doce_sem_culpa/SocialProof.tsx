"use client";
import React from "react";
import { FaStar } from "react-icons/fa";

const SocialProof: React.FC = () => {
  return (
    <div className="space-y-3">
      {/* Rating */}
      <div
        className="flex items-center justify-center gap-3 py-3 rounded-lg"
        style={{ backgroundColor: "rgba(28, 25, 23, 0.5)" }}
      >
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <FaStar key={s} className="text-amber-400 text-sm" />
          ))}
        </div>
        <span className="text-stone-400 text-sm">
          <strong className="text-white">4.9</strong>/5 — baseado em +2.000 avaliações
        </span>
      </div>

      {/* Mini testimonial */}
      <div
        className="p-4 rounded-lg border"
        style={{
          backgroundColor: "rgba(28, 25, 23, 0.3)",
          borderColor: "rgba(120, 53, 15, 0.3)"
        }}
      >
        <p className="text-stone-400 text-sm italic leading-relaxed">
          &ldquo;Sou diabético tipo 2. O Doce Sem Culpa me devolveu o prazer de ter sobremesa depois
          do almoço — sem picar a glicemia. Meu endócrino pediu o PDF para recomendar.&rdquo;
        </p>
        <div className="flex items-center gap-2 mt-2">
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
            style={{ backgroundColor: "rgba(139, 34, 82, 0.5)", color: "#E8B84A" }}
          >
            L
          </div>
          <span className="text-stone-500 text-xs">Lucas A. — Belo Horizonte, MG</span>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
