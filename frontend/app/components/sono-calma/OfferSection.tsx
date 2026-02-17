"use client";

import React from "react";
import { FaCheckCircle, FaLock, FaCreditCard, FaBolt, FaArrowRight, FaShieldAlt } from "react-icons/fa";

interface OfferSectionProps {
  onButtonClick: () => void;
}

const offerItems = [
  "E-book completo — 78 páginas",
  "12 fichas de plantas com evidência científica",
  "5 protocolos prontos (dia-noite, horário por horário)",
  "Guia de preparação (infusão, decocção, tintura, escalda-pés, aromaterapia)",
  "Tabela Mestra de Referência Rápida (imprimível)",
  "Lista de compras por protocolo com custos",
  "Diário de progresso com 6 métricas",
  "22 referências científicas verificáveis",
  "Atualizações futuras gratuitas",
];

const OfferSection: React.FC<OfferSectionProps> = ({ onButtonClick }) => {
  return (
    <section id="oferta" className="py-16 lg:py-20 px-4 bg-[#2D5016] relative overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#4A7C29]/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#B8860B]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Card principal da oferta */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-[#B8860B]/30">
          {/* Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B8860B] text-white rounded-full text-xs font-black uppercase tracking-wider mb-4">
              🔥 Oferta Especial de Lançamento
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Sono e Calma com Plantas Medicinais
            </h2>
          </div>

          {/* Checklist */}
          <div className="space-y-3 mb-8">
            {offerItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <FaCheckCircle className="text-[#4A7C29] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm sm:text-base">{item}</span>
              </div>
            ))}
          </div>

          {/* Preço */}
          <div className="text-center mb-8 bg-[#FBF7EF] rounded-2xl p-6 border border-[#B8860B]/10">
            <p className="text-gray-400 line-through text-lg mb-1">De R$97</p>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl sm:text-6xl font-black text-[#2D5016]">R$37</span>
            </div>
            <p className="text-[#B8860B] font-bold text-sm mt-1">Pagamento Único • Acesso Imediato</p>
          </div>

          {/* Botão CTA principal */}
          <button
            onClick={onButtonClick}
            className="w-full py-5 sm:py-6 px-8 bg-gradient-to-r from-[#B8860B] to-[#9a7209] hover:brightness-110 text-white font-black text-xl sm:text-2xl rounded-2xl shadow-[0_15px_30px_rgba(184,134,11,0.4)] transform hover:scale-[1.01] transition-all duration-200 flex items-center justify-center gap-3 group animate-pulse hover:animate-none"
          >
            <span>SIM, QUERO DORMIR MELHOR!</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Selos de segurança */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs text-gray-500">
            <div className="flex items-center gap-1.5">
              <FaLock className="text-[#4A7C29]" />
              Pagamento seguro
            </div>
            <div className="flex items-center gap-1.5">
              <FaCreditCard className="text-[#4A7C29]" />
              Cartão, Pix ou boleto
            </div>
            <div className="flex items-center gap-1.5">
              <FaBolt className="text-[#4A7C29]" />
              Acesso imediato
            </div>
            <div className="flex items-center gap-1.5">
              <FaShieldAlt className="text-[#4A7C29]" />
              Garantia 7 dias
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
