"use client";

import Image from "next/image";
import React from "react";
import { FaChartLine, FaSearch, FaLeaf } from "react-icons/fa";

const TrendsSection: React.FC = () => {
  return (
    <section
      data-aos="fade-up"
      className="py-16 px-6 lg:px-12 bg-gradient-to-r from-amber-50 via-orange-100 to-amber-50 text-center lg:text-left"
    >
      {/* Destaques superiores */}
      <div className="mb-12">
        <div className="flex justify-center lg:justify-start space-x-3 text-amber-700 text-sm font-semibold">
          <span className="px-3 py-1 border border-amber-700 rounded-full hover:bg-amber-700 hover:text-white transition-colors">
            Alta Procura
          </span>
          <span className="px-3 py-1 border border-amber-700 rounded-full hover:bg-amber-700 hover:text-white transition-colors">
            Tendência Global
          </span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-amber-800 mt-6 leading-tight">
          As <span className="text-amber-600">Trufas Funcionais</span> estão conquistando o mercado de alimentação saudável
        </h2>
        <p className="text-gray-700 text-lg mt-4 max-w-3xl">
          O chocolate gourmet encontrou a nutrição funcional: milhares de pessoas buscam docinhos que combinam prazer, saúde e sofisticação — uma oportunidade de ouro para quem quer consumir ou empreender.
        </p>
      </div>

      {/* Gráfico + Benefícios */}
      <div className="lg:flex lg:items-start lg:space-x-10">
        {/* Imagem do Google Trends */}
        <div className="lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
          <Image
            src="/sobremesas_funcionais.png"
            alt="Google Trends sobre trufas funcionais"
            width={600}
            height={400}
            className="rounded-xl shadow-xl border-4 border-amber-300"
            priority
          />
        </div>

        {/* Blocos de prova de tendência */}
        <div className="lg:w-1/2 space-y-10">
          <div className="flex items-start space-x-4">
            <FaSearch className="text-3xl text-amber-600" />
            <div>
              <h3 className="text-lg font-semibold text-amber-700">Buscas em Explosão</h3>
              <p className="text-base text-gray-700">
                Termos como &quot;trufas saudáveis&quot;, &quot;brigadeiro fit&quot; e &quot;docinhos sem açúcar&quot; estão entre os mais pesquisados no Google.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaChartLine className="text-3xl text-amber-600" />
            <div>
              <h3 className="text-lg font-semibold text-amber-700">Mercado em Crescimento</h3>
              <p className="text-base text-gray-700">
                O segmento de confeitaria funcional cresce dois dígitos ao ano — trufas gourmet lideram essa transformação.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaLeaf className="text-3xl text-amber-600" />
            <div>
              <h3 className="text-lg font-semibold text-amber-700">Consumo Consciente</h3>
              <p className="text-base text-gray-700">
                O novo consumidor quer indulgência com propósito — doces que nutrem, energizam e cuidam do corpo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendsSection;