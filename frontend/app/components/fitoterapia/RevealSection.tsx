"use client";

import React from "react";
import { FaMicroscope, FaCheck, FaBookOpen, FaLeaf } from "react-icons/fa";

const RevealSection = () => {
  return (
    <section className="py-20 px-4 bg-[#2D5016] text-white overflow-hidden relative">
      {/* Elementos decorativos de fundo - Um microscópio sutil que remete à ciência */}
      <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4 pointer-events-none">
        <FaMicroscope size={400} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Coluna de Texto: Onde apresentamos a autoridade científica */}
          <div className="md:w-3/5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-6 border border-white/20">
              <FaLeaf className="text-[#A3E635] text-xs" />
              <span className="text-[10px] uppercase tracking-widest font-bold">A Solução Definitiva</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
              A Ciência das Plantas <br />
              <span className="text-[#A3E635]">nas suas mãos.</span>
            </h2>

            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Eu reuni meus anos de estudo em <strong>Genética e Melhoramento de Plantas</strong> para criar algo que o Brasil ainda não tinha: um mapa seguro para quem quer saúde natural com base em fatos, não em boatos.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Identificação botânica precisa (DNA da planta)",
                "Protocolos de extração para máxima potência",
                "O que a ciência diz sobre contraindicações",
                "As 30 plantas que realmente entregam o que prometem"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="bg-[#A3E635] p-1 rounded-full flex-shrink-0">
                    <FaCheck className="text-[#2D5016] text-[10px]" />
                  </div>
                  <span className="text-white/90 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna de Destaque: Card que humaniza o Dr. Diogo */}
          <div className="md:w-2/5 w-full">
            <div className="bg-white text-gray-900 p-8 rounded-3xl shadow-2xl transform md:rotate-2 border border-white/20">
              <FaBookOpen className="text-[#4A7C29] text-4xl mb-4" />
              <h3 className="text-2xl font-bold mb-4 italic text-gray-800">
                &quot;Não é apenas um e-book...&quot;
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                É um sistema de segurança para sua família. Você vai aprender a ler a natureza com os olhos de um especialista.
              </p>
              
              <div className="flex items-center gap-4 border-t pt-6 border-gray-100">
                <div className="w-12 h-12 bg-[#2D5016] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  DG
                </div>
                <div>
                  <p className="font-bold text-sm text-gray-900 leading-none mb-1">Dr. Diogo Gonçalves</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-tighter font-semibold">
                    Doutor em Genética de Plantas
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RevealSection;