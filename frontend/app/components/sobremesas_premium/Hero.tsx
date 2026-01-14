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
      className="relative bg-gradient-to-r from-rose-100 via-pink-200 to-rose-100 py-20 px-6 lg:py-24 lg:px-12 text-center"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-8">
        {/* Pré-título */}
        <p className="text-sm uppercase tracking-widest text-pink-500 font-semibold">
          Saudáveis, deliciosas e surpreendentes
        </p>

        {/* Headline estilizada */}
        <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-800">
          Descubra <span className="text-pink-600">Sobremesas Funcionais</span> que
          <br /> nutrem, encantam e surpreendem!
        </h1>

        {/* Subheadline com impacto */}
        <p className="text-lg lg:text-xl text-gray-700 max-w-3xl leading-relaxed">
          Chega de escolher entre sabor e saúde. Aprenda receitas fáceis e funcionais que fazem bem ao corpo, mente e paladar – perfeitas para o dia a dia sem abrir mão do prazer.
        </p>

        {/* Imagem com VSL (pode trocar por video futuramente) */}
        <div className="w-full flex justify-center mt-4">
          <Image
            src="/sobremesas/sobremesas-hero.png"
            alt="Sobremesas funcionais variadas"
            width={520}
            height={400}
            className="rounded-xl shadow-2xl border-4 border-pink-300"
          />
        </div>

        {/* Botão de Ação */}
        <button
          onClick={onButtonClick}
          className="mt-8 px-8 py-4 text-lg font-semibold text-white bg-pink-500 rounded-full hover:bg-pink-400 transition-transform transform hover:scale-105 shadow-lg flex items-center space-x-2"
        >
          <span>{buttonText}</span>
          <FaArrowRight />
        </button>

        {/* Benefícios com ícones */}
        <div className="mt-10 flex flex-col space-y-6 items-center text-left lg:text-center">
          <div className="flex items-center space-x-3">
            <FaClock className="text-2xl text-pink-600" />
            <span className="text-base text-gray-700">
              Receitas rápidas, deliciosas e saudáveis – prontas em minutos!
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <FaHeart className="text-2xl text-pink-600" />
            <span className="text-base text-gray-700">
              Sobremesas que cuidam da sua saúde sem abrir mão do sabor.
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <FaGift className="text-2xl text-pink-600" />
            <span className="text-base text-gray-700">
              Acesso imediato ao guia completo e bônus exclusivos!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
