"use client";

import Image from "next/image";
import React from "react";

const CTASection: React.FC = () => {
  return (
    <section
      id="cta"
      data-aos="fade-up"
      className="bg-gradient-to-r from-rose-100 via-pink-100 to-white py-20 px-6 lg:px-12 text-center lg:text-left shadow-inner"
    >
      <div className="max-w-6xl mx-auto lg:flex lg:items-center lg:justify-between">
        {/* Conteúdo */}
        <div className="lg:w-1/2 space-y-6 lg:pr-12">
          {/* Headline */}
          <h2 className="text-3xl lg:text-4xl font-extrabold text-pink-700 leading-tight">
            Transforme sua rotina com o{" "}
            <span className="text-pink-500">Guia de Sobremesas Funcionais</span>
          </h2>

          {/* Benefícios */}
          <ul className="space-y-3 text-gray-700 text-lg leading-relaxed">
            <li>🍓 <strong>Receitas Inteligentes</strong> para saúde e bem-estar</li>
            <li>⏱️ <strong>Prontas em Minutos</strong> com poucos ingredientes</li>
            <li>✨ <strong>Sabor Incrível</strong> com aparência de dar água na boca</li>
            <li>📘 <strong>Passo a Passo Simples</strong> para qualquer nível</li>
          </ul>

          {/* Preço */}
          <div className="mt-6">
            <p className="text-2xl font-bold text-pink-600">
              De <span className="line-through text-red-500">R$97</span> por apenas{" "}
              <span className="text-pink-700">R$37</span>
            </p>
            <p className="text-sm text-gray-500 italic">Oferta especial por tempo limitado!</p>
          </div>

          {/* Botão CTA */}
          <button
            onClick={() => window.location.href = "/cadastro_sobremesas"}
            className="mt-6 px-8 py-4 text-lg font-semibold text-white bg-pink-500 rounded-md hover:bg-pink-400 transition-transform transform hover:scale-105 shadow-lg"
          >
            Garantir Meu Guia Agora
          </button>
          <p className="text-sm text-gray-500 mt-2">Acesso imediato + bônus exclusivos</p>

          {/* Formas de Pagamento */}
          <div className="flex justify-center lg:justify-start mt-6 space-x-6 text-gray-400 text-2xl">
            {[
              { icon: "/icons/cartao.png", alt: "Cartão de Crédito", label: "Cartão" },
              { icon: "/icons/pix.png", alt: "Pix", label: "Pix" },
              { icon: "/icons/boleto.png", alt: "Boleto Bancário", label: "Boleto" },
            ].map(({ icon, alt, label }, idx) => (
              <div key={idx} className="relative group">
                <Image src={icon} alt={alt} width={40} height={40} />
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mockup */}
        <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src="/sobremesas/mockup-guia-sobremesas.png"
            alt="Mockup do Guia de Sobremesas Funcionais"
            width={600}
            height={600}
            className="rounded-xl shadow-2xl border-4 border-pink-300 hover:border-pink-500 transition-colors duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
