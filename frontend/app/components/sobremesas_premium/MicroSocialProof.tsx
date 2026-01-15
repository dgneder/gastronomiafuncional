"use client";

import React from "react";
import { FaUsers, FaBookOpen, FaShieldAlt, FaBolt } from "react-icons/fa";

const MicroSocialProof: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 px-4 bg-white border-y border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          <div className="flex flex-col items-center text-center p-3 rounded-xl bg-gradient-to-br from-pink-50 to-rose-50">
            <FaUsers className="text-2xl sm:text-3xl text-pink-500 mb-2" />
            <p className="text-xl sm:text-2xl font-bold text-gray-900">~2.000</p>
            <p className="text-xs sm:text-sm text-gray-600">vendas realizadas</p>
          </div>

          <div className="flex flex-col items-center text-center p-3 rounded-xl bg-gradient-to-br from-amber-50 to-yellow-50">
            <FaBookOpen className="text-2xl sm:text-3xl text-amber-500 mb-2" />
            <p className="text-xl sm:text-2xl font-bold text-gray-900">150+</p>
            <p className="text-xs sm:text-sm text-gray-600">receitas ilustradas</p>
          </div>

          <div className="flex flex-col items-center text-center p-3 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50">
            <FaBolt className="text-2xl sm:text-3xl text-green-600 mb-2" />
            <p className="text-xl sm:text-2xl font-bold text-gray-900">Imediato</p>
            <p className="text-xs sm:text-sm text-gray-600">acesso + download</p>
          </div>

          <div className="flex flex-col items-center text-center p-3 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50">
            <FaShieldAlt className="text-2xl sm:text-3xl text-purple-600 mb-2" />
            <p className="text-xl sm:text-2xl font-bold text-gray-900">7 dias</p>
            <p className="text-xs sm:text-sm text-gray-600">garantia total</p>
          </div>
        </div>

        {/* Mensagem curta, sem jargão */}
        <div className="mt-6 text-center">
        <p className="text-sm text-gray-700 bg-gray-50 px-4 py-3 rounded-2xl inline-block">
          Chegou por anúncio? Veja as fotos/vídeos 👇 e, se fizer sentido, toque em{" "}
          <strong className="text-gray-900">“Comprar agora”</strong> — você tem{" "}
          <strong className="text-gray-900">7 dias de garantia</strong>.
        </p>

        </div>
      </div>
    </section>
  );
};

export default MicroSocialProof;
