"use client";
import React from "react";
import { FaStar } from "react-icons/fa";

const SocialProof: React.FC = () => {
  return (
    <div className="space-y-3">
      {/* Rating */}
      <div className="flex items-center justify-center gap-3 py-3 rounded-lg bg-stone-800/50">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <FaStar key={s} className="text-amber-400 text-sm" />
          ))}
        </div>
        <span className="text-stone-400 text-sm">
          <strong className="text-white">4.9</strong>/5 — baseado em avaliações reais
        </span>
      </div>

      {/* Mini testimonial */}
      <div className="p-4 rounded-lg bg-stone-800/30 border border-stone-700/30">
        <p className="text-stone-400 text-sm italic leading-relaxed">
          &ldquo;Fiz o pão de frigideira no primeiro dia. Meu marido diabético
          comeu e pediu mais. Há anos não via ele tão feliz com pão.&rdquo;
        </p>
        <div className="flex items-center gap-2 mt-2">
          <div className="w-6 h-6 rounded-full bg-amber-900/50 flex items-center justify-center text-amber-400 text-xs font-bold">
            M
          </div>
          <span className="text-stone-500 text-xs">Márcia L. — São Paulo, SP</span>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
