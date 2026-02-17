"use client";

import React from "react";
import { FaMicroscope, FaLeaf } from "react-icons/fa";

const RevealSection = () => {
  return (
    <section className="py-16 lg:py-20 px-4 bg-[#2D5016] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 opacity-5 transform translate-x-1/4 -translate-y-1/4 pointer-events-none">
        <FaMicroscope size={400} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center leading-tight mb-6 text-[#B8860B]">
          E se você tivesse acesso ao mesmo conhecimento que um pesquisador em
          genética de plantas usa para proteger sua própria família?
        </h2>

        <p className="text-white/80 text-base sm:text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          A fitoterapia baseada em evidências não é alternativa à medicina — é
          parte dela. O SUS reconhece oficialmente a fitoterapia, com plantas
          como guaco e pelargônio incluídas na Relação Nacional de Medicamentos
          Essenciais.
        </p>

        <p className="text-white text-center text-lg font-bold mb-12">
          O problema nunca foi a planta.{" "}
          <span className="text-[#A3E635]">
            Foi a informação errada sobre a planta.
          </span>
        </p>

        {/* Dados de impacto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
            <span className="text-[#B8860B] font-black text-4xl block mb-2">
              15.000+
            </span>
            <p className="text-white/80 text-sm leading-relaxed">
              estudos publicados apenas sobre curcumina, uma das 15 plantas
              deste guia
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FaLeaf className="text-[#A3E635]" />
              <span className="text-[#B8860B] font-black text-xl">
                Revisão Cochrane
              </span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              positiva para o pelargônio (Kaloba) em infecções respiratórias — o
              mais alto nível de evidência científica
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
            <span className="text-[#B8860B] font-black text-4xl block mb-2">
              70%
            </span>
            <p className="text-white/80 text-sm leading-relaxed">
              do tecido linfóide do corpo está no intestino — onde várias plantas
              deste guia atuam
            </p>
          </div>
        </div>

        <p className="text-[#B8860B] italic text-center mt-10 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          &quot;Existe ciência sólida por trás da fitoterapia para imunidade. O que
          faltava era alguém traduzir essa ciência para linguagem prática, com
          dosagens reais e protocolos seguros. É exatamente isso que este guia
          faz.&quot;
        </p>
      </div>
    </section>
  );
};

export default RevealSection;
