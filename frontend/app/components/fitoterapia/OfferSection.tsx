"use client";

import React from "react";
import Image from "next/image";
import { FaCheckCircle, FaLock, FaArrowRight, FaCalendarAlt, FaFlask } from "react-icons/fa";

interface OfferSectionProps {
  onButtonClick: () => void;
}

const OfferSection: React.FC<OfferSectionProps> = ({ onButtonClick }) => {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Círculos decorativos de fundo para profundidade */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#4A7C29]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-[#FBF7EF] rounded-[3rem] p-8 md:p-16 border-2 border-[#4A7C29]/10 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Coluna da Imagem Hiper-realista (mockup02.jpeg) */}
            <div className="lg:w-1/2 relative group">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] border-4 border-white transform transition-transform duration-700 hover:rotate-1">
                <Image
                  src="/fitoterapia/mockup02.jpeg"
                  alt="Preparo científico de fitoterápicos"
                  width={550}
                  height={550}
                  className="object-cover w-full h-auto"
                  priority
                />
                
                {/* TAJA ESTRATÉGICA - Cobre a marca d'água e reforça a autoridade */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2D5016] via-[#2D5016]/90 to-transparent pt-16 pb-6 px-6 text-center">
                  <div className="inline-flex items-center gap-2 bg-[#A3E635] text-[#2D5016] py-1 px-3 rounded-full mb-2 shadow-lg">
                    <FaFlask size={10} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Padrão Científico</span>
                  </div>
                  <p className="text-white text-xs font-medium leading-tight">
                    Extração de ativos baseada em princípios de Genética Vegetal
                  </p>
                </div>
              </div>

              {/* Badge de Preço Flutuante */}
              <div className="absolute -top-6 -right-4 bg-[#D97706] text-white w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-white transform rotate-12 font-black z-20 animate-pulse">
                <span className="text-[9px] uppercase leading-none">Apenas</span>
                <span className="text-2xl leading-none">R$37</span>
              </div>
            </div>

            {/* Coluna da Oferta - Copy de Fechamento */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-block px-4 py-1 bg-[#2D5016]/10 rounded-full mb-6">
                <span className="text-[#2D5016] text-xs font-bold uppercase tracking-widest">Garantia de Ciência Aplicada</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Domine a Arte da <br />
                <span className="text-[#4A7C29]">Saúde Natural</span>
              </h2>

              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Não arrisque a sua saúde com o amadorismo. Tenha em mãos o guia completo que traduz <strong>20 anos de laboratório</strong> em protocolos que você pode usar hoje mesmo.
              </p>

              <ul className="space-y-4 mb-10 text-left max-w-md mx-auto lg:mx-0">
                {[
                  "As 30 plantas com maior potencial fitoquímico",
                  "Métodos de extração que preservam os ativos",
                  "Análise de toxicologia e contraindicações",
                  "Acesso imediato aos 7 Protocolos Prontos"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <FaCheckCircle className="text-[#4A7C29] flex-shrink-0" />
                    <span className="font-semibold text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4">
                <button
                  onClick={onButtonClick}
                  className="w-full py-5 px-8 bg-gradient-to-r from-[#4A7C29] to-[#2D5016] text-white font-black text-xl rounded-2xl shadow-[0_15px_30px_rgba(45,80,22,0.4)] hover:brightness-110 transition-all flex items-center justify-center gap-3 group"
                >
                  <span>QUERO O MÉTODO CIENTÍFICO</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-gray-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <FaLock className="text-[#4A7C29]" />
                    Transação Criptografada
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FaCalendarAlt className="text-[#4A7C29]" />
                    Acesso Vitalício
                  </div>
                </div>
              </div>
              
              <p className="mt-8 text-[10px] text-gray-400 leading-relaxed max-w-sm mx-auto lg:mx-0">
                *O conteúdo é puramente informativo e baseado em estudos botânicos e genéticos. Consulte sempre um médico para questões diagnósticas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;