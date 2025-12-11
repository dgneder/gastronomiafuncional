"use client";

import Image from "next/image";
import React from "react";
import { FaChartLine, FaSearch, FaLeaf } from "react-icons/fa";

const TrendsSection: React.FC = () => {
  return (
    <section
      data-aos="fade-up"
      className="py-16 px-6 lg:px-12 bg-gradient-to-r from-rose-100 via-pink-200 to-rose-100 text-center lg:text-left"
    >
      {/* Destaques superiores */}
      <div className="mb-12">
        <div className="flex justify-center lg:justify-start space-x-3 text-pink-600 text-sm font-semibold">
          <span className="px-3 py-1 border border-pink-600 rounded-full hover:bg-pink-600 hover:text-white transition-colors">
            Alta Procura
          </span>
          <span className="px-3 py-1 border border-pink-600 rounded-full hover:bg-pink-600 hover:text-white transition-colors">
            Tendência Global
          </span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-pink-800 mt-6 leading-tight">
          As <span className="text-pink-500">Sobremesas Funcionais</span> estão entre os maiores movimentos da alimentação moderna
        </h2>
        <p className="text-gray-700 text-lg mt-4 max-w-3xl">
          O que antes era um nicho virou prioridade: milhares de pessoas estão buscando doces que cuidam da saúde e do bem-estar — sem abrir mão do prazer.
        </p>
      </div>

      {/* Gráfico + Benefícios */}
      <div className="lg:flex lg:items-start lg:space-x-10">
        {/* Imagem do Google Trends */}
        <div className="lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
          <Image
            src="/sobremesas_funcionais.png"
            alt="Google Trends sobre sobremesas funcionais"
            width={600}
            height={400}
            className="rounded-xl shadow-xl border-4 border-pink-300"
            priority
          />
        </div>

        {/* Blocos de prova de tendência */}
        <div className="lg:w-1/2 space-y-10">
          <div className="flex items-start space-x-4">
            <FaSearch className="text-3xl text-pink-600" />
            <div>
              <h3 className="text-lg font-semibold text-pink-700">Buscas em Explosão</h3>
              <p className="text-base text-gray-700">
                Termos como "sobremesas saudáveis", "low carb" e "sem açúcar" estão entre os mais pesquisados no Google nos últimos anos.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaChartLine className="text-3xl text-pink-600" />
            <div>
              <h3 className="text-lg font-semibold text-pink-700">Mercado em Aceleração</h3>
              <p className="text-base text-gray-700">
                O setor de alimentos funcionais cresce a dois dígitos ao ano — sobremesas nutritivas estão entre os líderes dessa transformação.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaLeaf className="text-3xl text-pink-600" />
            <div>
              <h3 className="text-lg font-semibold text-pink-700">Consumo com Propósito</h3>
              <p className="text-base text-gray-700">
                Comer por prazer já não basta — o novo consumidor quer saúde, leveza e alimentos com função real no seu bem-estar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendsSection;
