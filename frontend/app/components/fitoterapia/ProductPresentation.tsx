"use client";

import React from "react";
import { FaCheckCircle, FaFlask, FaListUl, FaShieldVirus, FaBookOpen } from "react-icons/fa";

const ProductPresentation = () => {
  const chapters = [
    {
      icon: <FaFlask className="text-[#4A7C29]" />,
      title: "Fundamentos da Extração",
      description: "Aprenda a diferença científica entre infusão, decocção e tintura para não destruir os ativos da planta."
    },
    {
      icon: <FaListUl className="text-[#4A7C29]" />,
      title: "As 30 Plantas de Elite",
      description: "Fichas completas com nome científico, fotos de identificação e para que servem exatamente."
    },
    {
      icon: <FaShieldVirus className="text-[#4A7C29]" />,
      title: "Segurança e Toxicologia",
      description: "O que nenhum vídeo de internet te conta sobre contraindicações e interações medicamentosas."
    },
    {
      icon: <FaCheckCircle className="text-[#4A7C29]" />,
      title: "7 Protocolos Prontos",
      description: "Guia passo a passo para: Ansiedade, Sono, Imunidade, Digestão, Inflamação, Energia e Detox."
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#FBF7EF]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
            O que você vai encontrar <br />
            <span className="text-[#4A7C29]">dentro do Guia Completo</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto italic">
            &quot;Organizei 186 páginas de puro conteúdo técnico transformadas em um manual prático e fácil de consultar.&quot;
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {chapters.map((chapter, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-3xl shadow-sm border border-[#4A7C29]/10 hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform">
                {chapter.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{chapter.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {chapter.description}
              </p>
            </div>
          ))}
        </div>

        {/* Destaque para os Protocolos - O grande diferencial */}
        <div className="bg-[#2D5016] rounded-[3rem] p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <div className="bg-[#A3E635] text-[#2D5016] text-xs font-black px-3 py-1 rounded-full inline-block mb-4">
              EXCLUSIVO
            </div>
            <h3 className="text-3xl font-black mb-6">7 Protocolos de Aplicação Imediata</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Não sabe por onde começar? Eu criei 7 roteiros exatos para as queixas mais comuns do dia a dia. Você não precisa ler as 186 páginas de uma vez para ter resultados.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {["Ansiedade", "Insônia", "Má Digestão", "Baixa Imunidade"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-bold">
                  <FaCheckCircle className="text-[#A3E635]" /> {item}
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
             <div className="relative">
                {/* Um elemento visual que simula uma página interna ou detalhe técnico */}
                <div className="bg-white p-4 rounded-2xl shadow-2xl text-gray-900 max-w-[280px] transform -rotate-2">
                   <div className="flex items-center gap-2 mb-3 border-b pb-2">
                      <FaBookOpen className="text-[#4A7C29]" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Protocolo Imunidade</span>
                   </div>
                   <div className="space-y-2">
                      <div className="h-2 w-full bg-gray-100 rounded"></div>
                      <div className="h-2 w-3/4 bg-gray-100 rounded"></div>
                      <div className="h-2 w-full bg-gray-100 rounded"></div>
                      <div className="h-8 w-full border-2 border-dashed border-[#4A7C29]/20 rounded mt-4 flex items-center justify-center text-[9px] text-gray-400 font-bold">
                        MAPA DE EXTRAÇÃO CIENTÍFICA
                      </div>
                   </div>
                </div>
                {/* Elemento flutuante */}
                <div className="absolute -top-6 -right-6 bg-[#A3E635] text-[#2D5016] w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-xl border-4 border-[#2D5016]">
                   <span className="text-xs font-black">PÁGINA</span>
                   <span className="text-2xl font-black leading-none">142</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPresentation;