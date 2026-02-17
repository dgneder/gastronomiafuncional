"use client";

import React from "react";
import Image from "next/image";
import { FaArrowRight, FaLock, FaCheck } from "react-icons/fa";

interface FinalCTAProps {
  onButtonClick: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onButtonClick }) => {
  return (
    <section className="py-16 sm:py-24 px-4 bg-[#FBF7EF]">
      <div className="max-w-md mx-auto text-center">
        
        {/* Mockup do Livro - Substituindo o emoji por uma imagem real */}
        <div className="relative w-48 h-64 mx-auto mb-8 group">
          {/* Sombra decorativa de fundo */}
          <div className="absolute inset-0 bg-[#4A7C29]/10 blur-3xl rounded-full scale-110 group-hover:bg-[#4A7C29]/20 transition-colors" />
          
          <div className="relative z-10 w-full h-full shadow-2xl rounded-lg overflow-hidden transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 border-4 border-white">
            <Image 
              src="/fitoterapia/mockup03.jpeg" // Nome sugerido para a imagem realista do livro
              alt="Capa do Guia Fitoterapia Essencial - Dr. Diogo Gonçalves"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>

        {/* Badge de Autoridade */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2D5016]/5 rounded-full mb-4 border border-[#2D5016]/10">
          <FaCheck className="text-[#4A7C29] text-[10px]" />
          <span className="text-[10px] font-bold text-[#2D5016] uppercase tracking-widest">Material Científico Validado</span>
        </div>

        {/* Título e Subtítulo */}
        <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-1">
          Fitoterapia Essencial
        </h3>
        <p className="text-gray-500 text-sm mb-8 italic">
          As 30 Plantas Que Todo Brasileiro Deveria Conhecer
        </p>

        {/* Bloco de Preço */}
        <div className="mb-8">
          <span className="text-gray-400 text-sm line-through block leading-none mb-1">De R$ 97</span>
          <p className="text-4xl sm:text-5xl font-black text-[#2D5016] flex items-center justify-center gap-2">
            <span className="text-xl font-bold">R$</span>37
          </p>
          <p className="text-[#4A7C29] text-[10px] font-bold uppercase tracking-tighter mt-1">Acesso Imediato • Pagamento Único</p>
        </div>

        {/* Botão de Fechamento */}
        <button
          onClick={onButtonClick}
          className="w-full py-5 px-6 bg-gradient-to-r from-[#4A7C29] to-[#2D5016] hover:brightness-110 text-white font-black text-xl rounded-2xl shadow-[0_20px_40px_rgba(45,80,22,0.25)] hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-3 group"
        >
          <span>QUERO MEU GUIA AGORA</span>
          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Rodapé de Segurança */}
        <div className="mt-6 flex items-center justify-center gap-4 text-gray-400 text-[10px] font-bold uppercase">
          <div className="flex items-center gap-1.5">
            <FaLock className="text-[#4A7C29]" />
            Compra 100% Segura
          </div>
          <div className="w-1 h-1 bg-gray-300 rounded-full" />
          <div>Garantia de 7 Dias</div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;