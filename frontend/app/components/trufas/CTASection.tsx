"use client";

import Image from "next/image";
import React from "react";

const CTASection: React.FC = () => {
  return (
    <section
      id="cta"
      data-aos="fade-up"
      className="bg-gradient-to-r from-amber-50 via-orange-100 to-amber-50 py-20 px-6 lg:px-12 text-center lg:text-left shadow-inner"
    >
      <div className="max-w-6xl mx-auto lg:flex lg:items-center lg:justify-between">
        {/* Conteúdo */}
        <div className="lg:w-1/2 space-y-6 lg:pr-12">
          {/* Headline */}
          <h2 className="text-3xl lg:text-4xl font-extrabold text-amber-700 leading-tight">
            Transforme sua rotina com o{" "}
            <span className="text-amber-600">Guia de Trufas Funcionais</span>
          </h2>

          {/* Benefícios */}
          <ul className="space-y-3 text-gray-700 text-lg leading-relaxed">
            <li>🍫 <strong>100 Receitas Gourmet</strong> divididas em 10 módulos funcionais</li>
            <li>⏱️ <strong>Prontas em Minutos</strong> com ingredientes acessíveis</li>
            <li>✨ <strong>Visual Instagramável</strong> perfeito para vender ou presentear</li>
            <li>📘 <strong>Passo a Passo Detalhado</strong> para qualquer nível</li>
          </ul>

          {/* Preço */}
          <div className="mt-6">
            <p className="text-2xl font-bold text-amber-700">
              De <span className="line-through text-red-500">R$97</span> por apenas{" "}
              <span className="text-amber-800">R$47</span>
            </p>
            <p className="text-sm text-gray-500 italic">Oferta especial por tempo limitado!</p>
          </div>

          {/* Botão CTA */}
          <button
            onClick={() => window.location.href = "/cadastro_trufas"}
            className="mt-6 px-8 py-4 text-lg font-semibold text-white bg-amber-600 rounded-md hover:bg-amber-500 transition-transform transform hover:scale-105 shadow-lg"
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
            src="/trufas/mockup.png"
            alt="Mockup do Guia de Trufas Funcionais"
            width={600}
            height={600}
            className="rounded-xl shadow-2xl border-4 border-amber-300 hover:border-amber-500 transition-colors duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;