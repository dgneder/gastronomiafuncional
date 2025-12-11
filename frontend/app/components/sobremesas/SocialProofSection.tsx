"use client";

import React from "react";
import { FaUsers, FaStar, FaHeart } from "react-icons/fa";

const SocialProofSection: React.FC = () => {
  return (
    <section
      id="social-proof"
      data-aos="fade-up"
      className="py-20 px-6 lg:px-12 bg-gradient-to-r from-pink-50 via-rose-100 to-white text-center"
    >
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <h2 className="text-3xl lg:text-4xl font-extrabold text-pink-700 mb-4 leading-snug">
          Mais de <span className="text-pink-500">1.000 Pessoas</span> Já Sentiram a Diferença
        </h2>

        {/* Subheadline */}
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          O sabor que encanta, a leveza que transforma. Descubra por que essas receitas estão ganhando tantos corações.
        </p>

        {/* Métricas */}
        <div className="grid gap-10 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <FaUsers className="text-pink-400 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-pink-700">+1.000 Clientes Satisfeitos</h3>
            <p className="text-gray-600">
              Pessoas que transformaram sua relação com o doce sem abrir mão do prazer.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaStar className="text-yellow-400 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-pink-700">Avaliação 4.9/5</h3>
            <p className="text-gray-600">
              Receitas aprovadas por quem buscava sabor, praticidade e saúde de verdade.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaHeart className="text-red-400 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-pink-700">Favorito da Comunidade</h3>
            <p className="text-gray-600">
              Recomendado por nutricionistas, elogiado por famílias e compartilhado com carinho.
            </p>
          </div>
        </div>

        {/* CTA com emoção */}
        <div className="mt-16">
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Chegou a sua vez de descobrir como é possível cuidar do corpo com prazer – e ainda adoçar o seu dia com saúde.
          </p>
          <button
            onClick={() => window.location.href = "/cadastro_sobremesas"}
            className="px-10 py-4 text-lg font-semibold text-white bg-pink-500 rounded-xl hover:bg-pink-400 transition-transform transform hover:scale-105 shadow-lg"
          >
            Quero Sentir Essa Transformação!
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
