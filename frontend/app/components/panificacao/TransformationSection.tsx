"use client";

import Image from "next/image";
import React from "react";
import { FaArrowRight, FaTimesCircle, FaCheckCircle } from "react-icons/fa";

interface TransformationProps {
  onButtonClick: () => void;
}

const before = [
  "Pão branco com IG 75 (pior que açúcar puro)",
  "Receitas genéricas que resultam em tijolos",
  "Sem entender por que o pão não cresce",
  "Comprando pão 'funcional' por R$20 a unidade",
  "Culpa toda vez que come um pão",
];

const after = [
  "Pão funcional com IG 35–45 e fibras reais",
  "246 receitas testadas com ciência por trás",
  "Entendendo a bioquímica de cada ingrediente",
  "Fazendo pão artesanal por menos de R$3",
  "Prazer e saúde na mesma fatia",
];

const TransformationSection: React.FC<TransformationProps> = ({ onButtonClick }) => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white" data-aos="fade-up">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest font-semibold mb-3" style={{ color: "#C4622D" }}>A transformação</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-stone-800">
            O que muda quando você entende a{" "}
            <span style={{ color: "#6B3A2A" }}>ciência do pão</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <div className="rounded-2xl border border-red-100 bg-red-50/50 p-8" data-aos="fade-right">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center"><FaTimesCircle className="text-red-400" /></div>
              <h3 className="text-xl font-bold text-stone-700">Antes do Pão Sem Culpa</h3>
            </div>
            <ul className="space-y-4">
              {before.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FaTimesCircle className="text-red-300 mt-1 shrink-0" />
                  <span className="text-stone-600 text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-green-100 bg-green-50/50 p-8" data-aos="fade-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center"><FaCheckCircle className="text-green-500" /></div>
              <h3 className="text-xl font-bold text-stone-700">Depois do Pão Sem Culpa</h3>
            </div>
            <ul className="space-y-4">
              {after.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                  <span className="text-stone-600 text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-12" data-aos="zoom-in">
          <div className="relative w-full aspect-video md:aspect-21/9 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <Image src="/panificacao/resultado_real.jpeg" alt="Interior macio e perfeito do pão funcional" fill className="object-cover" sizes="(max-width: 1200px) 100vw, 896px" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==" />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-stone-900/90 via-stone-900/40 to-transparent p-6 md:p-8">
              <p className="text-white font-extrabold text-2xl md:text-3xl drop-shadow-lg mb-1">Textura e maciez de verdade</p>
              <p className="text-amber-200 text-sm md:text-base drop-shadow-md font-medium">O resultado visual da ciência aplicada aos ingredientes certos.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onButtonClick}
            className="group px-10 py-5 text-lg font-bold text-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
            style={{ background: "linear-gradient(135deg, #6B3A2A, #8B5A3C)" }}
          >
            <span className="flex items-center gap-3">
              Quero Essa Transformação por R$67
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
