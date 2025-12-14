"use client";

import Image from "next/image";
import React from "react";
import { FaClock, FaHeart, FaGift, FaArrowRight } from "react-icons/fa";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText,
  onButtonClick,
}) => {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-r from-amber-50 via-orange-100 to-amber-50 py-20 px-6 lg:py-24 lg:px-12 text-center"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-8">
        {/* Pré-título */}
        <p className="text-sm uppercase tracking-widest text-amber-700 font-semibold">
          Gourmet, saudáveis e irresistíveis
        </p>

        {/* Headline estilizada */}
        <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-800">
          Descubra <span className="text-amber-700">Trufas e Docinhos Funcionais</span> que
          <br /> encantam, nutrem e surpreendem!
        </h1>

        {/* Subheadline com impacto */}
        <p className="text-lg lg:text-xl text-gray-700 max-w-3xl leading-relaxed">
          Chega de escolher entre sabor e saúde. Aprenda 100 receitas gourmet e funcionais que fazem bem ao corpo, mente e paladar — perfeitas para consumo próprio, presentear ou até vender.
        </p>

        {/* Imagem com VSL */}
        <div className="w-full flex justify-center mt-4">
          <Image
            src="/trufas/trufas_hero.png"
            alt="Trufas funcionais variadas"
            width={520}
            height={400}
            className="rounded-xl shadow-2xl border-4 border-amber-300"
          />
        </div>

        {/* Botão de Ação */}
        <button
          onClick={onButtonClick}
          className="mt-8 px-8 py-4 text-lg font-semibold text-white bg-amber-600 rounded-full hover:bg-amber-500 transition-transform transform hover:scale-105 shadow-lg flex items-center space-x-2"
        >
          <span>{buttonText}</span>
          <FaArrowRight />
        </button>

        {/* Benefícios com ícones */}
        <div className="mt-10 flex flex-col space-y-6 items-center text-left lg:text-center">
          <div className="flex items-center space-x-3">
            <FaClock className="text-2xl text-amber-700" />
            <span className="text-base text-gray-700">
              100 receitas práticas e deliciosas — prontas em minutos!
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <FaHeart className="text-2xl text-amber-700" />
            <span className="text-base text-gray-700">
              Trufas que cuidam da sua saúde com ingredientes funcionais.
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <FaGift className="text-2xl text-amber-700" />
            <span className="text-base text-gray-700">
              Acesso imediato ao guia completo + bônus exclusivos!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;