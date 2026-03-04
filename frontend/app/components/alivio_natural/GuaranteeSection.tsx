"use client";

import React from "react";

const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-[#FBF7EF]">
      <div className="max-w-xl mx-auto px-4 text-center">
        <div className="bg-white rounded-2xl p-8 border-2 border-[#4A7C29] shadow-sm">
          <div className="w-20 h-20 bg-[#4A7C29] rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
            <span className="text-white text-3xl">🛡️</span>
          </div>
          <h2 className="text-2xl font-extrabold text-[#1E2A10] mb-3">
            Garantia Incondicional de 7 Dias
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-5">
            Se por qualquer razão você não se sentir satisfeito com o Alívio
            Natural nos primeiros <strong>7 dias após a compra</strong>, basta
            solicitar o reembolso. Sem perguntas, sem burocracia, sem julgamentos.
            100% do valor devolvido.
          </p>
          <div className="bg-[#FBF7EF] rounded-xl p-4 text-sm text-gray-600">
            <strong className="text-[#1E2A10]">Como funciona:</strong> Acesse o
            suporte da Hotmart ou envie um e-mail para nosso contato dentro de 7
            dias. O reembolso é processado automaticamente.
          </div>
          <p className="text-[#4A7C29] font-bold text-sm mt-4">
            Você não tem nada a perder — e pode ter um caminho completamente novo
            para o alívio da dor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
