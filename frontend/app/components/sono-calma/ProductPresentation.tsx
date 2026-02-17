"use client";

import React from "react";
import Image from "next/image";
import { FaArrowRight, FaBrain, FaSeedling, FaMugHot, FaClipboardList, FaQuestionCircle } from "react-icons/fa";

interface ProductPresentationProps {
  onButtonClick: () => void;
}

const chapters = [
  { icon: FaBrain, num: "Cap. 1", title: "A Ciência do Sono", desc: "Como GABA, cortisol e melatonina regulam seu sono — e como plantas atuam nesses sistemas" },
  { icon: FaSeedling, num: "Cap. 2", title: "12 Plantas Detalhadas", desc: "Fichas completas: mecanismo, evidência, dose, preparo, combinações, contraindicações" },
  { icon: FaMugHot, num: "Cap. 3", title: "Guia de Preparação", desc: "Infusão, decocção, tintura, extrato, escalda-pés, aromaterapia — técnica correta para cada método" },
  { icon: FaClipboardList, num: "Cap. 4", title: "5 Protocolos Prontos", desc: "Protocolos dia-noite para 5 perfis: insônia leve, severa, ansiedade, ansiedade+insônia, transição" },
  { icon: FaQuestionCircle, num: "Cap. 5", title: "FAQ + Lista de Compras", desc: "10 perguntas respondidas, lista de compras por protocolo com custos, diário de progresso" },
];

const ProductPresentation: React.FC<ProductPresentationProps> = ({ onButtonClick }) => {
  return (
    <section className="py-16 lg:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-[#4A7C29]/10 rounded-full mb-4">
            <span className="text-[#2D5016] text-xs font-bold uppercase tracking-widest">
              Conheça o Guia
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Sono e Calma com{" "}
            <span className="text-[#4A7C29]">Plantas Medicinais</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            O Guia Científico para Reduzir Ansiedade e Dormir Melhor com Fitoterapia
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          {/* Mockup */}
          <div className="lg:w-2/5 mb-10 lg:mb-0">
            <div className="relative max-w-[320px] mx-auto">
              <div className="absolute inset-0 bg-[#4A7C29]/15 rounded-full blur-[60px]" />
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                {/* TODO: Substituir por mockup real do e-book aberto */}
                <Image
                  src="/sono-calma/mockup-aberto.jpeg"
                  alt="E-book Sono e Calma aberto mostrando fichas de plantas"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Texto + Capítulos */}
          <div className="lg:w-3/5">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              78 páginas escritas por um Doutor em Genética e Melhoramento de
              Plantas. Sem linguagem científica incompreensível. Sem promessas
              milagrosas. Sem misticismo. Apenas ciência real traduzida em
              protocolos que você implementa hoje à noite.
            </p>

            {/* Grid de capítulos */}
            <div className="space-y-4 mb-8">
              {chapters.map((ch, i) => (
                <div key={i} className="flex gap-4 items-start p-4 bg-[#FBF7EF] rounded-xl border border-[#B8860B]/10">
                  <div className="w-10 h-10 bg-[#4A7C29]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ch.icon className="text-[#4A7C29] text-sm" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] text-[#B8860B] font-bold uppercase">{ch.num}</span>
                      <span className="font-bold text-gray-900 text-sm">{ch.title}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{ch.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={onButtonClick}
              className="w-full sm:w-auto py-4 px-8 bg-gradient-to-r from-[#4A7C29] to-[#2D5016] text-white font-bold text-lg rounded-xl shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 group"
            >
              QUERO MEU EXEMPLAR
              <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPresentation;
