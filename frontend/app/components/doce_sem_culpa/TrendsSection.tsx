"use client";

import Image from "next/image";
import React from "react";
import { FaChartLine, FaSearch, FaAppleAlt, FaFlask } from "react-icons/fa";

const TrendsSection: React.FC = () => {
  return (
    <section
      data-aos="fade-up"
      className="py-20 px-6 lg:px-12 text-center lg:text-left"
      style={{ background: "linear-gradient(135deg, #FFFFFF, #FBF5E8, #FFFFFF)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Destaques superiores */}
        <div className="mb-12">
          <div className="flex justify-center lg:justify-start gap-2 text-sm font-semibold">
            <span
              className="px-3 py-1 border rounded-full transition-colors"
              style={{ borderColor: "#8B2252", color: "#8B2252" }}
            >
              Tendência global
            </span>
            <span
              className="px-3 py-1 border rounded-full transition-colors"
              style={{ borderColor: "#D4A04A", color: "#8B6914" }}
            >
              Dado validado
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-stone-800 mt-6 leading-tight">
            Sobremesas funcionais não são modismo.{" "}
            <span style={{ color: "#8B2252" }}>É tendência estrutural com ciência por trás.</span>
          </h2>
          <p className="text-stone-600 text-lg mt-4 max-w-3xl">
            O mercado de alimentos funcionais movimenta mais de <strong>US$ 280 bilhões ao ano globalmente</strong>.
            Busca por &quot;sobremesa sem açúcar&quot;, &quot;brigadeiro funcional&quot; e &quot;doce low carb&quot;
            cresceu 3 dígitos nos últimos 5 anos. Mas o brasileiro ainda é refém do doce industrial.
          </p>
        </div>

        {/* Gráfico + Validação */}
        <div className="lg:flex lg:items-start lg:gap-10">
          {/* Imagem do Google Trends */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
            <div
              className="rounded-xl shadow-xl overflow-hidden border-4 bg-white relative aspect-video w-full max-w-2xl"
              style={{ borderColor: "#D4A04A30" }}
            >
              <Image
                src="/doce-sem-culpa/google_trends.png"
                alt="Google Trends — sobremesas funcionais crescendo"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow">
                <p className="text-[10px] uppercase tracking-widest font-bold" style={{ color: "#8B2252" }}>
                  Fonte
                </p>
                <p className="text-xs font-semibold text-stone-700">Google Trends — BR 2020-2026</p>
              </div>
            </div>
          </div>

          {/* Blocos de prova de tendência */}
          <div className="lg:w-1/2 space-y-8">
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#8B225215" }}
              >
                <FaSearch className="text-xl" style={{ color: "#8B2252" }} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-800">Buscas em Explosão</h3>
                <p className="text-stone-600 leading-relaxed">
                  Termos como &quot;sobremesa funcional&quot;, &quot;doce sem açúcar&quot; e &quot;brigadeiro low carb&quot;
                  cresceram consistentemente nos últimos 5 anos — e não mostram sinal de saturação.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#D4A04A15" }}
              >
                <FaChartLine className="text-xl" style={{ color: "#D4A04A" }} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-800">Mercado de US$ 280 Bi Global</h3>
                <p className="text-stone-600 leading-relaxed">
                  O setor de alimentos funcionais cresce a dois dígitos ao ano. Sobremesas nutritivas
                  estão entre os líderes — confeitarias artesanais que cobram R$15-25 por unidade.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#5B8B7D15" }}
              >
                <FaFlask className="text-xl" style={{ color: "#5B8B7D" }} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-800">Respaldo Científico Crescente</h3>
                <p className="text-stone-600 leading-relaxed">
                  Publicações sobre bioativos (epicatequina, antocianinas, curcumina) explodem nos
                  periódicos indexados. Não é moda. É reconhecimento clínico.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#6B1A3F15" }}
              >
                <FaAppleAlt className="text-xl" style={{ color: "#6B1A3F" }} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-800">Consumo com Propósito</h3>
                <p className="text-stone-600 leading-relaxed">
                  Comer por prazer já não basta. O novo consumidor brasileiro quer saúde, leveza e
                  <strong> alimentos com função real no bem-estar</strong> — mesmo nas sobremesas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendsSection;
