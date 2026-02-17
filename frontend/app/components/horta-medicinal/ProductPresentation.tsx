"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface ProductPresentationProps {
  onButtonClick: () => void;
}

const chapters = [
  { icon: "🌱", title: "Cap. 1 — Antes de Plantar", text: "A ciência do estresse vegetal: como plantas estressadas produzem mais compostos medicinais (elicitação)." },
  { icon: "🏡", title: "Cap. 2 — Montando sua Horta", text: "De apartamento a quintal. Receita do substrato do Dr. Diogo. Vasos, jardineiras, hortas verticais." },
  { icon: "📋", title: "Cap. 3 — As 30 Plantas", text: "Fichas completas: nome científico, sol, água, solo, propagação, pragas, nível de dificuldade, colheita." },
  { icon: "✂️", title: "Cap. 4 — Colheita Certa", text: "O momento exato para colher cada planta — quando a concentração de compostos ativos é máxima." },
  { icon: "🫙", title: "Cap. 5 — Secagem e Conservação", text: "4 métodos de secagem passo a passo. Inclui projeto de secador caseiro por R$30." },
  { icon: "📅", title: "Cap. 6 — Calendário e Planejamento", text: "Calendários regionais para as 5 regiões do Brasil. Plano de 12 meses. 3 jardins temáticos prontos." },
];

const ProductPresentation: React.FC<ProductPresentationProps> = ({ onButtonClick }) => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-block px-4 py-1 bg-[#1B5E20]/10 rounded-full mb-4">
          <span className="text-[#1B5E20] text-xs font-bold uppercase tracking-widest">
            O Guia Completo
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 leading-tight">
          Conheça o{" "}
          <span className="text-[#2E7D32]">Horta Medicinal em Casa</span>
        </h2>
        <p className="text-gray-600 text-lg mb-4 max-w-2xl mx-auto">
          O guia mais completo do Brasil para cultivar, colher e conservar
          plantas medicinais — com base em ciência, não em achismo.
        </p>

        <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10 text-left sm:text-center">
          São 150+ páginas escritas por um doutor em genética de plantas — a
          pessoa que literalmente estuda os compostos que as plantas produzem.
          30 espécies medicinais com fichas completas, calendários regionais e
          passo a passo que qualquer pessoa consegue seguir. Em linguagem que
          qualquer pessoa entende.
        </p>

        <h3 className="font-black text-gray-900 text-xl mb-6">
          O que está dentro:
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left mb-10">
          {chapters.map((ch, i) => (
            <div
              key={i}
              className="bg-[#FBF7EF] rounded-2xl p-5 border border-[#2E7D32]/10 hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-3">{ch.icon}</div>
              <h4 className="font-bold text-[#1B5E20] text-sm mb-2">
                {ch.title}
              </h4>
              <p className="text-gray-600 text-xs leading-relaxed">{ch.text}</p>
            </div>
          ))}
        </div>

        <button
          onClick={onButtonClick}
          className="py-5 px-10 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] hover:brightness-110 text-white font-black text-lg rounded-xl shadow-[0_10px_20px_rgba(27,94,32,0.3)] transition-all flex items-center justify-center gap-2 mx-auto group"
        >
          <span>QUERO MEU GUIA AGORA — R$34,90</span>
          <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
        </button>
        <p className="text-gray-400 text-xs mt-3">
          🔒 Acesso imediato · Garantia de 7 dias
        </p>
      </div>
    </section>
  );
};

export default ProductPresentation;
