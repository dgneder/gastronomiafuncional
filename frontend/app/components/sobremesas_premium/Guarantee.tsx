"use client";

import React from "react";
import { FaShieldAlt } from "react-icons/fa";

const Guarantee: React.FC = () => {
  return (
    <section
      data-aos="fade-up"
      id="guarantee"
      className="py-20 px-6 lg:px-12 bg-gradient-to-r from-rose-100 via-pink-100 to-white text-center"
    >
      <div className="max-w-3xl mx-auto">
        {/* Ícone de Garantia */}
        <FaShieldAlt className="text-pink-500 text-6xl mx-auto mb-6" />

        {/* Título */}
        <h2 className="text-3xl lg:text-4xl font-bold text-pink-700 mb-4">
          Garantia de Satisfação por 7 Dias
        </h2>

        {/* Texto Principal */}
        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
          Temos certeza de que você vai se apaixonar pelo nosso{" "}
          <span className="font-semibold text-pink-500">Guia de Sobremesas Funcionais</span>.
          Mas, se por qualquer motivo não ficar satisfeito, oferecemos reembolso total em até 7 dias após a compra. Sem complicações, sem burocracia.
        </p>

        {/* Garantia com Hotmart */}
        <p className="text-gray-500 text-base">
          Sua compra é realizada com segurança na{" "}
          <span className="font-semibold text-pink-500">Hotmart</span>, uma das maiores plataformas de produtos digitais do Brasil. Você terá acesso imediato ao conteúdo e poderá solicitar seu reembolso com apenas alguns cliques, se necessário.
        </p>

        {/* Nota de Isenção de Riscos */}
        <p className="text-pink-600 font-medium mt-6 text-sm">
          * Experimente sem medo. Sua satisfação ou seu dinheiro de volta.
        </p>
      </div>
    </section>
  );
};

export default Guarantee;
