"use client";

import React from "react";
import { FaCheck, FaTimes, FaFlask, FaUserShield } from "react-icons/fa";

const TargetAudience = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
            Este Guia Científico <br />
            <span className="text-[#4A7C29]">é para você?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A fitoterapia baseada em genética não é para todos. Preciso que você entenda se está no lugar certo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Coluna: PARA QUEM É */}
          <div className="bg-[#F0F7EB] p-8 md:p-10 rounded-[2.5rem] border border-[#4A7C29]/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <FaCheck size={80} className="text-[#2D5016]" />
            </div>
            
            <h3 className="text-2xl font-bold text-[#2D5016] mb-6 flex items-center gap-3">
              <FaUserShield /> Sim, é para você se:
            </h3>
            
            <ul className="space-y-4">
              {[
                "Busca autonomia para cuidar da saúde de forma natural e segura.",
                "Está cansado de informações contraditórias e sem base científica.",
                "Quer entender a dosagem e o preparo exato para cada objetivo.",
                "Deseja proteger sua família de efeitos colaterais e erros de manejo.",
                "Valoriza o conhecimento de um especialista com doutorado na área."
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FaCheck className="text-[#4A7C29] mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium leading-tight">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna: PARA QUEM NÃO É */}
          <div className="bg-gray-50 p-8 md:p-10 rounded-[2.5rem] border border-gray-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <FaTimes size={80} className="text-gray-400" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FaFlask /> Não é para você se:
            </h3>

            <ul className="space-y-4">
              {[
                "Procura por simpatias ou receitas místicas sem comprovação.",
                "Acredita que 'por ser natural, não tem contraindicação'.",
                "Não tem paciência para ler e aplicar protocolos sérios.",
                "Busca fórmulas mágicas para curar doenças graves da noite para o dia.",
                "Ignora a importância da ciência na manipulação de plantas."
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FaTimes className="text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-500 font-medium leading-tight italic">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl font-bold text-gray-900 mb-2">
            Se você se identificou com a coluna da esquerda...
          </p>
          <p className="text-gray-600">
            Você faz parte do grupo seleto que entende que a natureza é poderosa, mas exige respeito e técnica.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;