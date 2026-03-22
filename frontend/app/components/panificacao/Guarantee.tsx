"use client";

import React from "react";
import { FaShieldAlt } from "react-icons/fa";

const Guarantee: React.FC = () => {
  return (
    <section
      id="guarantee"
      className="py-20 px-6 lg:px-12"
      style={{ background: "linear-gradient(180deg, #FAF3E8, #F5E6CC)" }}
      data-aos="fade-up"
    >
      <div className="max-w-3xl mx-auto text-center">
        <div
          className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8"
          style={{ backgroundColor: "#6B3A2A15" }}
        >
          <FaShieldAlt className="text-4xl" style={{ color: "#6B3A2A" }} />
        </div>

        <h2 className="text-3xl lg:text-4xl font-extrabold text-stone-800 mb-4">
          Garantia Incondicional de 7 Dias
        </h2>

        <p className="text-lg text-stone-600 leading-relaxed mb-6 max-w-2xl mx-auto">
          Faça o download, leia, teste as receitas. Se em até 7 dias você sentir que o
          Pão Sem Culpa não entregou o que prometeu, basta solicitar reembolso total
          pela Hotmart. Um clique, sem perguntas, sem burocracia.
        </p>

        <p className="text-stone-500 text-sm">
          Sua compra é processada com segurança pela{" "}
          <span className="font-semibold" style={{ color: "#6B3A2A" }}>Hotmart</span>,
          a maior plataforma de produtos digitais do Brasil.
        </p>

        <p className="font-semibold text-sm mt-6" style={{ color: "#6B3A2A" }}>
          * O risco é zero. A decisão é sua.
        </p>
      </div>
    </section>
  );
};

export default Guarantee;
