"use client";

import React from "react";
import { FaShieldAlt, FaCheck, FaUndoAlt } from "react-icons/fa";

const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-[#FBF7EF] to-white rounded-[3rem] p-8 md:p-12 border-2 border-[#2E7D32]/10 shadow-sm relative overflow-hidden">
          {/* Selo decorativo */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#2E7D32]/5 rounded-full" />

          <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
            {/* Escudo */}
            <div className="flex-shrink-0 relative">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full shadow-2xl flex items-center justify-center border-8 border-[#F0F7EB]">
                <FaShieldAlt className="text-[#2E7D32] text-5xl md:text-6xl" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#F9A825] text-[#1B5E20] text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                7 DIAS
              </div>
            </div>

            {/* Texto */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                Garantia{" "}
                <span className="text-[#2E7D32]">incondicional</span> de 7 dias
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                Eu quero que você tenha total tranquilidade. Você tem 7 dias
                para ler o guia, explorar as fichas, conferir os calendários. Se
                ao abrir sentir que o conteúdo não é o que esperava, ou se
                simplesmente mudar de ideia — basta solicitar o reembolso. Sem
                letras miúdas, sem formulários, sem constrangimento.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 bg-[#2E7D32]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheck className="text-[#2E7D32] text-xs" />
                  </div>
                  <span className="text-sm font-semibold">
                    Reembolso sem perguntas
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 bg-[#2E7D32]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaUndoAlt className="text-[#2E7D32] text-xs" />
                  </div>
                  <span className="text-sm font-semibold">
                    Processo 100% Digital
                  </span>
                </div>
              </div>

              <p className="mt-8 text-sm text-gray-500 italic">
                &quot;O risco é todo meu. O conhecimento — e a horta — são todos
                seus.&quot; — Dr. Diogo Gonçalves
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
