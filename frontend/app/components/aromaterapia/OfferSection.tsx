"use client";

import React from "react";
import Image from "next/image";
import { FaCheckCircle, FaLock, FaArrowRight, FaCalendarAlt, FaFlask } from "react-icons/fa";

interface OfferSectionProps {
  onButtonClick: () => void;
}

const included = [
  "25 perfis completos de óleos essenciais",
  "12 receitas de blends com gotas exatas",
  "Tabelas de segurança: gestantes, crianças (6 faixas), pets (3 espécies)",
  "7 interações medicamentosas explicadas com mecanismo",
  "Guia de compra com 8 critérios + teste de pureza caseiro",
  "Tabela rápida de consulta para imprimir",
  "Glossário completo de termos",
  "Acesso imediato em PDF de alta qualidade",
  "Atualizações gratuitas incluídas",
];

const OfferSection: React.FC<OfferSectionProps> = ({ onButtonClick }) => {
  return (
    <section id="oferta" className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Decoração */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#4A7C29]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-[#FBF7EF] rounded-[3rem] p-8 md:p-16 border-2 border-[#4A7C29]/10 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Coluna da Imagem */}
            <div className="lg:w-1/2 relative group">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] border-4 border-white transform transition-transform duration-700 hover:rotate-1">
                <Image
                  src="/aromaterapia/mockup02.jpeg"
                  alt="Aromaterapia Essencial — Guia Científico dos Óleos Essenciais"
                  width={550}
                  height={550}
                  className="object-cover w-full h-auto"
                  priority
                />

                {/* Tarja inferior */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2D5016] via-[#2D5016]/90 to-transparent pt-16 pb-6 px-6 text-center">
                  <div className="inline-flex items-center gap-2 bg-[#A3E635] text-[#2D5016] py-1 px-3 rounded-full mb-2 shadow-lg">
                    <FaFlask size={10} />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      Base Científica
                    </span>
                  </div>
                  <p className="text-white text-xs font-medium leading-tight">
                    Bioquímica dos óleos essenciais explicada por um Doutor em Genética
                  </p>
                </div>
              </div>

              {/* Badge de Preço */}
              <div className="absolute -top-6 -right-4 bg-[#D97706] text-white w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-white transform rotate-12 font-black z-20 animate-pulse">
                <span className="text-[9px] uppercase leading-none">Apenas</span>
                <span className="text-2xl leading-none">R$37</span>
              </div>
            </div>

            {/* Coluna da Oferta */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-block px-4 py-1 bg-[#2D5016]/10 rounded-full mb-6">
                <span className="text-[#2D5016] text-xs font-bold uppercase tracking-widest">
                  Oferta de Lançamento
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Use óleos essenciais com{" "}
                <span className="text-[#4A7C29]">ciência e segurança</span>
              </h2>

              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Não arrisque a saúde da sua família com achismo. Tenha em mãos o
                guia completo que traduz{" "}
                <strong>20 anos de pesquisa com plantas</strong> em protocolos que
                você pode usar hoje mesmo.
              </p>

              <ul className="space-y-3 mb-10 text-left max-w-md mx-auto lg:mx-0">
                {included.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <FaCheckCircle className="text-[#4A7C29] flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Preço */}
              <div className="mb-6">
                <div className="flex items-baseline justify-center lg:justify-start gap-3">
                  <span className="text-gray-400 line-through text-lg">
                    R$97
                  </span>
                  <span className="text-5xl font-black text-[#2D5016]">
                    R$37
                  </span>
                </div>
                <p className="text-[#4A7C29] text-sm font-bold mt-1">
                  ou 6x de R$6,90 · Pagamento Único
                </p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={onButtonClick}
                  className="w-full py-5 px-8 bg-gradient-to-r from-[#4A7C29] to-[#2D5016] text-white font-black text-xl rounded-2xl shadow-[0_15px_30px_rgba(45,80,22,0.4)] hover:brightness-110 transition-all flex items-center justify-center gap-3 group"
                >
                  <span>QUERO MEU GUIA AGORA</span>
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
                *O conteúdo é puramente informativo e educacional. Não substitui
                consulta médica. Não recomendamos ingestão de óleos essenciais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
