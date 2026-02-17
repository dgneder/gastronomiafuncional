"use client";

import React from "react";
import {
  FaCheckCircle,
  FaLock,
  FaArrowRight,
  FaMobileAlt,
  FaInfinity,
} from "react-icons/fa";

interface OfferSectionProps {
  onButtonClick: () => void;
}

const includes = [
  "E-book completo (~100 páginas) com acesso imediato",
  "15 fichas detalhadas de plantas com evidência classificada",
  "5 protocolos prontos com horários e dosagens",
  "Guia completo de 7 métodos de preparação",
  "Tabela-mestre de plantas e métodos ideais",
  "Lista de compras com custo por protocolo",
  "Protocolo especial para famílias com crianças",
  "FAQ com 10 perguntas respondidas",
  "Diário de acompanhamento de 4 semanas",
  "Contraindicações e interações em cada ficha",
];

const OfferSection: React.FC<OfferSectionProps> = ({ onButtonClick }) => {
  return (
    <section id="oferta" className="py-16 lg:py-20 px-4 bg-[#FBF7EF] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#4A7C29]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#B8860B]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Card de oferta */}
        <div className="bg-white rounded-[2rem] p-6 sm:p-10 border-2 border-[#B8860B]/30 shadow-2xl relative">
          {/* Badge topo */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#B8860B] text-white text-xs font-black px-5 py-1.5 rounded-full shadow-md uppercase tracking-wider whitespace-nowrap">
            🏆 Oferta Especial de Lançamento
          </div>

          <div className="text-center mt-4 mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
              Imunidade com Plantas Medicinais
            </h2>
            <p className="text-gray-500 text-sm">
              O Guia Científico para Fortalecer suas Defesas Naturais
            </p>
          </div>

          {/* Lista de conteúdo */}
          <div className="space-y-3 mb-8">
            {includes.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-sm text-gray-700"
              >
                <FaCheckCircle className="text-[#4A7C29] mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Bloco de preço */}
          <div className="bg-[#FBF7EF] rounded-2xl p-6 text-center border border-[#B8860B]/20 mb-6">
            <p className="text-gray-400 line-through text-lg mb-1">
              De R$ 97,00
            </p>
            <p className="text-[#2D5016] font-black text-5xl mb-1">R$ 27,00</p>
            <p className="text-gray-500 text-sm">
              à vista no Pix ou em até 3x de R$ 9,46 sem juros
            </p>
          </div>

          {/* CTA */}
          <button
            onClick={onButtonClick}
            className="w-full py-5 px-6 bg-gradient-to-r from-[#4A7C29] to-[#2D5016] hover:brightness-110 text-white font-black text-lg sm:text-xl rounded-xl shadow-[0_15px_30px_rgba(45,80,22,0.4)] transform hover:scale-[1.01] transition-all duration-200 flex flex-col items-center justify-center group mb-4"
          >
            <div className="flex items-center gap-2">
              <span>🛡️ QUERO PROTEGER MINHA FAMÍLIA COM CIÊNCIA</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
            </div>
            <span className="text-[10px] opacity-80 font-normal uppercase mt-1">
              Acesso imediato após o pagamento
            </span>
          </button>

          {/* Selos */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-gray-500">
            <div className="flex items-center gap-1.5">
              <FaLock className="text-[#4A7C29]" />
              Pagamento 100% seguro
            </div>
            <div className="flex items-center gap-1.5">
              <FaMobileAlt className="text-[#4A7C29]" />
              Celular, tablet ou computador
            </div>
            <div className="flex items-center gap-1.5">
              <FaInfinity className="text-[#4A7C29]" />
              Acesso vitalício
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
