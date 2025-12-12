"use client";

import React from "react";
import { FaUsers, FaStar, FaHeart } from "react-icons/fa";

const SocialProofSection: React.FC = () => {
  return (
    <section
      id="social-proof"
      data-aos="fade-up"
      className="py-20 px-6 lg:px-12 bg-gradient-to-r from-amber-50 via-orange-100 to-white text-center"
    >
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <h2 className="text-3xl lg:text-4xl font-extrabold text-amber-700 mb-4 leading-snug">
          Mais de <span className="text-amber-600">500 Pessoas</span> Já Estão Fazendo Trufas Funcionais
        </h2>

        {/* Subheadline */}
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          O sabor gourmet que encanta, a funcionalidade que transforma. Descubra por que essas receitas estão conquistando corações.
        </p>

        {/* Métricas */}
        <div className="grid gap-10 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <FaUsers className="text-amber-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-amber-700">+500 Alunos Satisfeitos</h3>
            <p className="text-gray-600">
              Pessoas que descobriram o prazer de fazer trufas saudáveis em casa.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaStar className="text-yellow-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-amber-700">Avaliação 4.9/5</h3>
            <p className="text-gray-600">
              Receitas aprovadas por quem buscava qualidade gourmet com saúde.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaHeart className="text-red-400 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-amber-700">Favorito para Presentes</h3>
            <p className="text-gray-600">
              Trufas perfeitas para presentear, vender ou saborear em família.
            </p>
          </div>
        </div>

        {/* CTA com emoção */}
        <div className="mt-16">
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Chegou a sua vez de dominar a arte das trufas funcionais — com sabor gourmet e benefícios reais.
          </p>
          <button
            onClick={() => window.location.href = "/cadastro_trufas"}
            className="px-10 py-4 text-lg font-semibold text-white bg-amber-600 rounded-xl hover:bg-amber-500 transition-transform transform hover:scale-105 shadow-lg"
          >
            Quero Fazer Minhas Trufas Funcionais!
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;