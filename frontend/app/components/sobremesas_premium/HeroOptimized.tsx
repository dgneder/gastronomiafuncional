"use client";

import Image from "next/image";
import React from "react";
import { FaShieldAlt, FaStar, FaArrowRight, FaSignInAlt } from "react-icons/fa";

interface HeroOptimizedProps {
  onButtonClick: () => void;
  onLoginClick: () => void;
}

const HeroOptimized: React.FC<HeroOptimizedProps> = ({
  onButtonClick,
  onLoginClick,
}) => {
  return (
    <section
      id="hero"
      // Ajuste 1: tirar min-h full viewport no mobile (evita “espaço sobrando”/empurrar conteúdo)
      className="relative bg-gradient-to-br from-rose-50 via-pink-100 to-rose-100"
    >
      {/* Navbar Integrada */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-4 py-3 flex items-center justify-between">
        <Image
          src="/sobremesas-logo.png"
          alt="Gastronomia Funcional"
          width={120}
          height={40}
          className="h-8 w-auto"
          priority
        />
        <button
          onClick={onLoginClick}
          className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-pink-600 transition-colors"
        >
          <FaSignInAlt className="text-base" />
          <span className="hidden sm:inline">Entrar</span>
        </button>
      </nav>

      {/* Conteúdo Principal */}
      <div className="relative z-10 px-4 pt-16 pb-4 lg:pt-24 lg:pb-16 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Layout Mobile: Coluna única otimizada */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
            {/* Coluna Esquerda: Texto + CTA */}
            <div className="lg:w-1/2 text-center lg:text-left">
              {/* Badge de Prova Social */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur rounded-full shadow-sm mb-3 sm:mb-4">
                <div className="flex text-yellow-400 text-xs">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span className="text-xs font-medium text-gray-700">
                  4.9 • +2.000 vendas
                </span>
              </div>

              {/* Headline Principal */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight mb-3 lg:mb-4">
                Sobremesas que{" "}
                <span className="text-pink-600">nutrem</span> e{" "}
                <span className="text-pink-600">encantam</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-gray-600 mb-4 lg:mb-6 max-w-lg mx-auto lg:mx-0">
                Receitas funcionais, deliciosas e prontas em minutos. Chega de
                escolher entre sabor e saúde.
              </p>

              {/* Preço + CTA */}
              <div className="bg-white/90 backdrop-blur rounded-2xl p-4 sm:p-5 shadow-lg border border-pink-100 mb-3 sm:mb-4 lg:mb-0">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                  <span className="text-gray-400 line-through text-lg">R$97</span>
                  <span className="text-3xl sm:text-4xl font-black text-pink-600">
                    R$37
                  </span>
                  <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                    -62% OFF
                  </span>
                </div>

                <button
                  onClick={onButtonClick}
                  className="w-full py-4 px-6 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  <span>QUERO MEU GUIA AGORA</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center justify-center gap-2 mt-3 text-xs text-gray-500">
                  <FaShieldAlt className="text-green-500" />
                  <span>Garantia de 7 dias ou seu dinheiro de volta</span>
                </div>
              </div>

              {/* Trust badges - Desktop */}
              <div className="hidden lg:flex items-center justify-start gap-6 mt-6">
                <div className="flex items-center gap-2">
                  <Image src="/icons/pix.png" alt="Pix" width={28} height={28} />
                  <Image
                    src="/icons/cartao.png"
                    alt="Cartão"
                    width={28}
                    height={28}
                  />
                  <Image
                    src="/icons/boleto.png"
                    alt="Boleto"
                    width={28}
                    height={28}
                  />
                </div>
                <span className="text-xs text-gray-500">Acesso imediato</span>
              </div>
            </div>

            {/* Coluna Direita: Imagem */}
            {/* Ajuste 2: reduzir a margem top no mobile (aproxima do CTA) */}
            <div className="lg:w-1/2 mt-2 sm:mt-3 lg:mt-0">
              <div className="relative max-w-sm sm:max-w-md lg:max-w-none mx-auto">
                {/* Ajuste 3: padronizar recorte com aspect ratio e object-cover */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/sobremesas/sobremesas-hero.png"
                    alt="Sobremesas funcionais deliciosas"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 600px"
                  />
                </div>

                {/* Badge flutuante */}
                {/* Ajuste: tirar posições negativas no mobile pra não cortar */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-white rounded-xl shadow-lg p-2 sm:p-3 animate-bounce-slow">
                  <p className="text-xs sm:text-sm font-bold text-pink-600">
                    +150 receitas
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-500">
                    funcionais
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust badges - Mobile */}
          <div className="flex lg:hidden items-center justify-center gap-4 mt-3 sm:mt-4">
            <div className="flex items-center gap-2">
              <Image src="/icons/pix.png" alt="Pix" width={24} height={24} />
              <Image src="/icons/cartao.png" alt="Cartão" width={24} height={24} />
              <Image src="/icons/boleto.png" alt="Boleto" width={24} height={24} />
            </div>
            <span className="text-xs text-gray-500">Acesso imediato</span>
          </div>
        </div>
      </div>

      {/* Decoração de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl" />
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroOptimized;
