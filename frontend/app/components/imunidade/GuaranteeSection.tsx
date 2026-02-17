"use client";

import React from "react";
import { FaShieldAlt } from "react-icons/fa";

const GuaranteeSection = () => {
  return (
    <section className="py-16 lg:py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-[#FBF7EF] rounded-2xl p-6 sm:p-10 border border-[#B8860B]/20">
          {/* Ícone */}
          <div className="flex-shrink-0">
            <div className="w-28 h-28 bg-gradient-to-br from-[#B8860B] to-[#D4A017] rounded-full flex flex-col items-center justify-center text-white shadow-lg">
              <FaShieldAlt className="text-3xl mb-1" />
              <span className="text-xs font-black">7 DIAS</span>
            </div>
          </div>

          {/* Texto */}
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-4">
              Garantia Incondicional de 7 Dias
            </h3>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Você tem <strong>7 dias</strong> para ler o guia inteiro, testar os
              protocolos e decidir se vale para você. Se por qualquer motivo
              achar que não valeu o investimento — qualquer motivo, sem
              perguntas, sem burocracia — basta solicitar o reembolso
              diretamente pela plataforma Hotmart.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Você recebe 100% do valor de volta. Sem constrangimento, sem
              formulários. É simples assim.
            </p>
            <p className="text-[#2D5016] font-bold text-sm italic">
              Por que ofereço essa garantia? Porque tenho certeza do que
              escrevi. São 20 anos de pesquisa condensados em 100 páginas. Quem
              lê, fica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
