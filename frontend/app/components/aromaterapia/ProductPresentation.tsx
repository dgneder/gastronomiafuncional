"use client";

import React from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

interface ProductPresentationProps {
  onButtonClick: () => void;
}

const chapters = [
  { icon: "🔬", title: "Cap. 1 — Fundamentos", text: "As 3 vias de absorção, a química dos terpenos, os 8 princípios de ouro da segurança." },
  { icon: "🌿", title: "Cap. 2 — 25 Óleos Essenciais", text: "Ficha completa: composição, mecanismo de ação, dosagem, contraindicações, estrelas de evidência." },
  { icon: "💧", title: "Cap. 3 — Métodos de Uso", text: "Difusão, inalação, uso tópico, banhos, compressas — como, quando e quanto. Tabelas de diluição." },
  { icon: "🧪", title: "Cap. 4 — 12 Blends Prontos", text: "Receitas com gotas exatas, modo de preparo, explicação científica e variações." },
  { icon: "🛡️", title: "Cap. 5 — Segurança Completa", text: "Gestantes, bebês, pets, interações medicamentosas, fotossensibilidade, primeiros socorros." },
  { icon: "🏷️", title: "Cap. 6 — Como Comprar Bem", text: "8 critérios para não ser enganado, tabela de preços justos, teste caseiro de pureza." },
];

const ProductPresentation: React.FC<ProductPresentationProps> = ({ onButtonClick }) => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-block px-4 py-1 bg-[#2D5016]/10 rounded-full mb-4">
          <span className="text-[#2D5016] text-xs font-bold uppercase tracking-widest">
            O Guia Completo
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 leading-tight">
          Apresento o{" "}
          <span className="text-[#4A7C29]">Aromaterapia Essencial</span>
        </h2>
        <p className="text-gray-600 text-lg mb-4 max-w-2xl mx-auto">
          O guia mais completo do Brasil sobre óleos essenciais — com base em
          ciência, não em achismo.
        </p>

        <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10 text-left sm:text-center">
          São 160+ páginas escritas por um doutor em genética de plantas — a
          pessoa que literalmente estuda os compostos que as plantas produzem.
          Cada óleo essencial explicado do gene à molécula, da molécula ao
          receptor, do receptor ao efeito no seu corpo. Em linguagem que qualquer
          pessoa entende.
        </p>

        <h3 className="font-black text-gray-900 text-xl mb-6">
          O que está dentro:
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left mb-10">
          {chapters.map((ch, i) => (
            <div
              key={i}
              className="bg-[#FBF7EF] rounded-2xl p-5 border border-[#4A7C29]/10 hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-3">{ch.icon}</div>
              <h4 className="font-bold text-[#2D5016] text-sm mb-2">
                {ch.title}
              </h4>
              <p className="text-gray-600 text-xs leading-relaxed">{ch.text}</p>
            </div>
          ))}
        </div>

        <button
          onClick={onButtonClick}
          className="py-5 px-10 bg-gradient-to-r from-[#4A7C29] to-[#2D5016] hover:brightness-110 text-white font-black text-lg rounded-xl shadow-[0_10px_20px_rgba(45,80,22,0.3)] transition-all flex items-center justify-center gap-2 mx-auto group"
        >
          <span>QUERO MEU GUIA AGORA — R$37</span>
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
