"use client";

import React from "react";
import { FaShieldAlt, FaCheck } from "react-icons/fa";

const GuaranteeCompact: React.FC = () => {
  return (
    <section className="py-10 sm:py-12 px-4 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border-2 border-green-200 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Ícone */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                <FaShieldAlt className="text-white text-3xl sm:text-4xl" />
              </div>
            </div>

            {/* Conteúdo */}
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Garantia Incondicional de 7 Dias
              </h3>
              <p className="text-gray-600 mb-4">
                Se por qualquer motivo você não ficar satisfeito com o Guia de Sobremesas Funcionais, 
                basta nos enviar um e-mail dentro de 7 dias e devolvemos 100% do seu dinheiro. 
                Sem perguntas, sem burocracia.
              </p>

              <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm">
                <div className="flex items-center gap-2 text-green-600">
                  <FaCheck />
                  <span>Sem perguntas</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <FaCheck />
                  <span>Reembolso total</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <FaCheck />
                  <span>Processo simples</span>
                </div>
              </div>
            </div>
          </div>

          {/* Nota de segurança */}
          <div className="mt-6 pt-6 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-500">
              Sua compra é processada com segurança pela Yampi/Mercado Pago. 
              Seus dados estão protegidos com criptografia de ponta a ponta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeCompact;
