"use client";

import React from "react";
import { FaLeaf, FaClock, FaClipboardList, FaArrowRight } from "react-icons/fa";

interface ProductPresentationProps {
  onButtonClick: () => void;
}

const highlights = [
  {
    icon: <FaLeaf className="text-[#4A7C29] text-2xl" />,
    title: "15 plantas validadas",
    desc: "Com nível de evidência de ★ a ★★★★★ e mecanismo de ação explicado",
  },
  {
    icon: <FaClock className="text-[#B8860B] text-2xl" />,
    title: "5 protocolos hora a hora",
    desc: "Prevenção, resgate, recuperação, sazonal e família",
  },
  {
    icon: <FaClipboardList className="text-[#4A7C29] text-2xl" />,
    title: "Lista de compras com preços",
    desc: "Saiba exatamente o que comprar, onde e quanto vai gastar",
  },
];

const ProductPresentation: React.FC<ProductPresentationProps> = ({
  onButtonClick,
}) => {
  return (
    <section className="py-16 lg:py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Título */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
          Imunidade com Plantas Medicinais
        </h2>
        <p className="text-gray-500 text-base sm:text-lg mb-10">
          O Guia Científico para Fortalecer suas Defesas Naturais
        </p>

        <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
          Um guia completo de aproximadamente <strong>100 páginas</strong> que
          transforma pesquisa científica em ação prática. Cada planta com ficha
          detalhada, cada dosagem com referência, cada protocolo com horários —
          tudo que você precisa para proteger sua família com inteligência e
          segurança.
        </p>

        {/* Cards de destaque */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="bg-[#FBF7EF] rounded-2xl p-6 border border-[#4A7C29]/10 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={onButtonClick}
          className="inline-flex items-center gap-2 py-4 px-8 bg-gradient-to-r from-[#4A7C29] to-[#2D5016] hover:brightness-110 text-white font-bold text-lg rounded-xl shadow-[0_10px_20px_rgba(45,80,22,0.3)] transition-all group"
        >
          QUERO MEU GUIA AGORA
          <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
        </button>
        <p className="text-gray-400 text-xs mt-3">
          R$ 27,00 · Acesso imediato · Garantia de 7 dias
        </p>
      </div>
    </section>
  );
};

export default ProductPresentation;
