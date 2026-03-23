"use client";

import React from "react";
import HotmartUpsellWidget from "@/app/components/HotmartUpsellWidget";

const UpsellHero: React.FC = () => {
  return (
    <section className="bg-linear-to-b from-rose-100 via-pink-100 to-white pt-10 pb-16 px-6 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Barra de Alerta */}
        <div className="bg-red-500 text-white font-bold px-6 py-2 rounded-full mb-8 shadow-lg animate-pulse">
          ⚠️ ATENÇÃO: Não feche essa página agora!
        </div>

        {/* Headline de Confirmação */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
          Sua inscrição no Pão Sem Culpa foi <span className="text-green-600">CONFIRMADA!</span> 🎉
        </h1>

        {/* A Oferta Irrecusável */}
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed mb-8">
          Mas antes de você acessar suas receitas, eu tenho um convite único.
          <br className="hidden md:block"/>
          Como novo aluno, você ganhou a chance de levar o <strong>Guia Completo de Sobremesas Funcionais</strong> com um desconto que não mostramos em nenhum outro lugar.
        </p>

        {/* Preço Âncora */}
        <div className="bg-white border-2 border-pink-300 rounded-xl p-6 shadow-md mb-8">
          <p className="text-gray-500 text-sm uppercase font-semibold">Oferta Única de Inscrição</p>
          <div className="flex items-center justify-center space-x-3 mt-2">
            <span className="text-gray-400 line-through text-xl">De R$ 97</span>
            <span className="text-4xl font-extrabold text-pink-600">Por R$ 37</span>
          </div>
        </div>

        {/* Widget da Hotmart (Botões Sim/Não) */}
        <div className="w-full">
            <p className="text-sm text-gray-500 mb-2">Adicione ao seu pedido com 1 clique:</p>
            <HotmartUpsellWidget />
        </div>
        
      </div>
    </section>
  );
};

export default UpsellHero;