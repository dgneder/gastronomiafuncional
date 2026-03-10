"use client";

import React from "react";
import { FaCheckCircle, FaShieldAlt, FaLock, FaBolt } from "react-icons/fa";

interface OfferSectionProps {
  onButtonClick: () => void;
}

const OfferSection: React.FC<OfferSectionProps> = ({ onButtonClick }) => {
  const included = [
    { label: "E-book Alívio Natural (80+ páginas)", value: "R$97" },
    { label: "15 fichas científicas completas", value: "" },
    { label: "6 protocolos prontos por tipo de dor", value: "" },
    { label: "Tabela mestra de preparações", value: "" },
    { label: "Lista de compras do Kit Essencial", value: "" },
    { label: "Diário de Dor para acompanhar evolução", value: "" },
    { label: "🎁 Bônus: Guia de Interações Medicamentosas", value: "R$27" },
    { label: "🎁 Bônus: Guia de Pomadas e Compressas Naturais", value: "R$19,90" },
  ];

  return (
    <section id="oferta" className="py-16 lg:py-20 bg-linear-to-b from-[#1E2A10] to-[#2D3B1A] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#D97706]/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[#D97706]/20 border border-[#D97706]/40 text-[#D4A520] px-5 py-2 rounded-full text-sm font-bold mb-4">
            <FaBolt />
            Oferta especial de lançamento
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-2">
            Tudo o que você recebe hoje
          </h2>
          <p className="text-white/60 text-base">
            Acesso imediato ao guia completo + 2 bônus exclusivos
          </p>
        </div>

        <div className="bg-white/8 border border-white/15 rounded-2xl p-6 backdrop-blur-sm">
          <ul className="space-y-2.5 mb-8">
            {included.map(({ label, value }) => (
              <li key={label} className="flex items-center justify-between gap-3 py-2 border-b border-white/6">
                <div className="flex items-center gap-2.5">
                  <FaCheckCircle className="text-[#A3D977] shrink-0 text-xs" />
                  <span className="text-white/90 text-sm">{label}</span>
                </div>
                {value && <span className="text-white/40 text-xs line-through shrink-0">{value}</span>}
              </li>
            ))}
          </ul>

          <div className="text-center mb-6">
            <p className="text-white/40 text-sm line-through mb-1">Valor total: R$143,90</p>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl font-black text-[#D4A520]">R$47</span>
              <span className="text-white/60 text-sm">pagamento único</span>
            </div>
            <p className="text-white/50 text-xs mt-1">ou em até 5x no cartão</p>
          </div>

          <button onClick={onButtonClick} className="w-full py-5 bg-linear-to-r from-[#D97706] to-[#B45309] hover:brightness-110 text-white font-black text-xl rounded-xl shadow-[0_8px_30px_rgba(217,119,6,0.4)] transform hover:scale-[1.01] transition-all duration-200 flex flex-col items-center">
            <span>QUERO MEU ACESSO AGORA →</span>
            <span className="text-[11px] font-normal opacity-80 mt-0.5 uppercase tracking-wide">Pagamento 100% seguro • Acesso imediato</span>
          </button>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-5">
            <div className="flex items-center gap-1.5 text-xs text-white/50">
              <FaShieldAlt className="text-[#A3D977]" />
              Garantia de 7 dias
            </div>
            <div className="w-1 h-1 bg-white/20 rounded-full" />
            <div className="flex items-center gap-1.5 text-xs text-white/50">
              <FaLock className="text-[#A3D977]" />
              SSL / Pagamento seguro
            </div>
            <div className="w-1 h-1 bg-white/20 rounded-full" />
            <div className="text-xs text-white/50">Hotmart · Pix · Cartão</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;