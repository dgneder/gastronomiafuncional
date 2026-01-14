"use client";

import Image from "next/image";
import React from "react";

interface CTASectionProps {
  onButtonClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onButtonClick }) => {
  return (
    <section
      id="cta"
      data-aos="fade-up"
      className="scroll-mt-24 bg-gradient-to-r from-rose-100 via-pink-100 to-white py-20 px-6 lg:px-12 text-center lg:text-left shadow-inner"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Texto */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-bold text-pink-700">
            Garanta agora o seu Guia Premium de Sobremesas Funcionais
          </h2>

          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            Acesso imediato + bônus exclusivos para você transformar sua rotina com
            sobremesas saudáveis, práticas e deliciosas.
          </p>

          {/* Benefícios */}
          <ul className="mt-6 space-y-3 text-gray-700 text-lg leading-relaxed">
            <li>
              🍓 <strong>Receitas Inteligentes</strong> para saúde e bem-estar
            </li>
            <li>
              ⏱️ <strong>Prontas em Minutos</strong> com poucos ingredientes
            </li>
            <li>
              ✨ <strong>Sabor Incrível</strong> com aparência de dar água na boca
            </li>
            <li>
              📘 <strong>Passo a Passo Simples</strong> para qualquer nível
            </li>
          </ul>

          {/* Preço */}
          <div className="mt-6">
            <p className="text-2xl font-bold text-pink-600">
              De <span className="line-through text-red-500">R$97</span> por apenas{" "}
              <span className="text-pink-700">R$37</span>
            </p>
            <p className="text-sm text-gray-500 italic">
              Oferta especial por tempo limitado!
            </p>
          </div>

          {/* Botão checkout */}
          <button
            onClick={onButtonClick}
            className="mt-6 px-8 py-4 text-lg font-semibold text-white bg-pink-600 rounded-full hover:bg-pink-700 transition-transform transform hover:scale-105 shadow-lg"
          >
            Quero garantir por R$37
          </button>

          <p className="text-sm text-gray-500 mt-2">
            Acesso imediato + bônus exclusivos
          </p>

          {/* Formas de Pagamento */}
          <div className="flex justify-center lg:justify-start mt-6 space-x-6 text-gray-400 text-2xl">
            {[
              { icon: "/icons/cartao.png", alt: "Visa", label: "Cartão" },
              { icon: "/icons/pix.png", alt: "Pix", label: "Pix" },
              { icon: "/icons/boleto.png", alt: "Boleto Bancário", label: "Boleto" },
            ].map(({ icon, alt, label }, idx) => (
              <div key={idx} className="relative group">
                <Image src={icon} alt={alt} width={40} height={40} />
                <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs bg-white text-gray-700 px-2 py-1 rounded shadow z-10">
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
            alt="Mockup Guia Sobremesas Funcionais"
            width={420}
            height={520}
            className="rounded-2xl shadow-2xl border-4 border-pink-200"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
