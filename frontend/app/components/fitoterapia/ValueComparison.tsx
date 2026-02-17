"use client";

import React from "react";
import { FaTimes, FaCheck, FaWallet, FaStethoscope, FaFlask } from "react-icons/fa";

const ValueComparison = () => {
  return (
    <section className="py-20 px-4 bg-[#FBF7EF]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
            O preço da <span className="text-red-600">dúvida</span> vs. <br />
            O valor da <span className="text-[#4A7C29]">segurança</span>
          </h2>
          <p className="text-lg text-gray-600">
            Quanto custa para você continuar dependendo de informações rasas ou arriscar a saúde da sua família com o amadorismo?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-0 border-2 border-[#4A7C29]/20 rounded-[3rem] overflow-hidden shadow-2xl">
          {/* Coluna: O Caminho Comum */}
          <div className="bg-white p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-100">
            <h3 className="text-xl font-bold text-gray-400 mb-8 uppercase tracking-widest flex items-center gap-2">
              <FaTimes /> O Caminho Comum
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-3 opacity-60">
                <FaStethoscope className="mt-1 text-gray-400" />
                <span className="text-sm text-gray-600">Consultas particulares: <strong>R$ 300 - R$ 600</strong></span>
              </li>
              <li className="flex items-start gap-3 opacity-60">
                <FaFlask className="mt-1 text-gray-400" />
                <span className="text-sm text-gray-600">Remédios sintéticos (mensal): <strong>R$ 150+</strong></span>
              </li>
              <li className="flex items-start gap-3 opacity-60">
                <FaTimes className="mt-1 text-red-300" />
                <span className="text-sm text-gray-600 italic">Risco de comprar plantas sem procedência genética ou tóxicas.</span>
              </li>
            </ul>
          </div>

          {/* Coluna: O Seu Novo Caminho */}
          <div className="bg-[#2D5016] p-8 md:p-12 text-white relative">
            <div className="absolute top-4 right-8 opacity-20">
               <FaWallet size={60} />
            </div>
            
            <h3 className="text-xl font-bold text-[#A3E635] mb-8 uppercase tracking-widest flex items-center gap-2">
              <FaCheck /> Este Guia
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <FaCheck className="mt-1 text-[#A3E635]" />
                <span className="text-sm text-white/90">Acesso a um Doutor em Genética por menos de um lanche.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheck className="mt-1 text-[#A3E635]" />
                <span className="text-sm text-white/90">Economia real ao usar as plantas certas, do jeito certo.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheck className="mt-1 text-[#A3E635]" />
                <span className="text-sm text-white/90 font-bold">Protocolos validados que você terá para a vida toda.</span>
              </li>
            </ul>

            <div className="mt-10 pt-6 border-t border-white/10">
               <p className="text-xs text-white/60 mb-2 uppercase tracking-tighter">Investimento Único</p>
               <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-[#A3E635]">R$ 37</span>
                  <span className="text-white/60 text-sm line-through font-medium">R$ 97</span>
               </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center italic text-gray-500 text-sm">
          &quot;O conhecimento científico é o único investimento que se paga no primeiro uso.&quot;
        </div>
      </div>
    </section>
  );
};

export default ValueComparison;