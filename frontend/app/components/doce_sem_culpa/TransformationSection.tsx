"use client";

import Image from "next/image";
import React from "react";
import { FaArrowRight, FaTimesCircle, FaCheckCircle } from "react-icons/fa";

interface TransformationProps {
  onButtonClick: () => void;
}

const before = [
  "Brigadeiro com leite condensado (IG 80) e pico glicêmico",
  "Receitas genéricas da internet com sucralose e aditivos",
  "Culpa toda vez que come um pedaço de bolo",
  "Pão de forma 'diet' industrial por R$20 com 27 aditivos",
  "Dependência de 'força de vontade' que nunca sustenta",
];

const after = [
  "Sobremesas com IG calibrado e bioativos (epicatequina, antocianinas)",
  "252 receitas testadas com ciência por trás de cada escolha",
  "Doce no cardápio diário sem impacto metabólico negativo",
  "Fazendo trufa funcional por R$1,50 cada unidade em casa",
  "Autonomia para criar suas próprias receitas com segurança",
];

const TransformationSection: React.FC<TransformationProps> = ({ onButtonClick }) => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white" data-aos="fade-up">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest font-semibold mb-3" style={{ color: "#8B2252" }}>A transformação</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-stone-800">
            O que muda quando você entende a{" "}
            <span style={{ color: "#8B2252" }}>ciência do doce funcional</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <div className="rounded-2xl border border-red-100 bg-red-50/50 p-8" data-aos="fade-right">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <FaTimesCircle className="text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-stone-700">Antes do Doce Sem Culpa</h3>
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

          <div className="rounded-2xl border p-8"
               style={{ backgroundColor: "#FBF5E8", borderColor: "#D4A04A40" }}
               data-aos="fade-left">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#8B225215" }}
              >
                <FaCheckCircle style={{ color: "#8B2252" }} />
              </div>
              <h3 className="text-xl font-bold text-stone-700">Depois do Doce Sem Culpa</h3>
            </div>
            <ul className="space-y-4">
              {after.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 shrink-0" style={{ color: "#8B2252" }} />
                  <span className="text-stone-600 text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-12" data-aos="zoom-in">
          <div className="relative w-full aspect-video md:aspect-21/9 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="/doce-sem-culpa/resultado_real.png"
              alt="Sobremesas funcionais em destaque"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 896px"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-stone-900/90 via-stone-900/40 to-transparent p-6 md:p-8">
              <p className="text-white font-extrabold text-2xl md:text-3xl drop-shadow-lg mb-1">
                Sabor de restaurante, nutrientes de cozinha científica
              </p>
              <p className="drop-shadow-md font-medium text-sm md:text-base" style={{ color: "#E8B84A" }}>
                O resultado visual da ciência aplicada aos ingredientes certos.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onButtonClick}
            className="group px-10 py-5 text-lg font-bold text-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
            style={{ background: "linear-gradient(135deg, #8B2252, #6B1A3F)" }}
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
