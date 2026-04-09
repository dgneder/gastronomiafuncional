"use client";
import React from "react";
import { FaShieldAlt } from "react-icons/fa";

const Guarantee: React.FC = () => (
  <section id="guarantee" className="py-20 px-6 lg:px-12" style={{ background: "linear-gradient(180deg, #FFF0F5, #FCEEF4)" }} data-aos="fade-up">
    <div className="max-w-3xl mx-auto text-center">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8" style={{ backgroundColor: "#8B225215" }}>
        <FaShieldAlt className="text-4xl" style={{ color: "#8B2252" }} />
      </div>
      <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Garantia Incondicional de 7 Dias</h2>
      <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto">
        Acesse os 3 volumes, escolha uma receita, coloque a mão na massa. Se em até 7 dias
        você não estiver satisfeito com o que aprendeu, basta solicitar reembolso total pela
        Hotmart. Um clique, sem perguntas, sem burocracia.
      </p>
      <p className="text-gray-400 text-sm">
        Sua compra é processada com segurança pela{" "}
        <span className="font-semibold" style={{ color: "#8B2252" }}>Hotmart</span>,
        a maior plataforma de produtos digitais do Brasil.
      </p>
      <p className="font-semibold text-sm mt-6" style={{ color: "#8B2252" }}>* O risco é zero. A decisão é sua.</p>
    </div>
  </section>
);

export default Guarantee;
