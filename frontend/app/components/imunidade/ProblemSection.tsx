"use client";

import React from "react";
import { FaTimesCircle } from "react-icons/fa";

const painPoints = [
  {
    title: '"Chás milagrosos" sem dosagem',
    desc: "Posts de redes sociais que prometem tudo e não explicam nada",
  },
  {
    title: "Receitas sem contraindicação",
    desc: "Ninguém menciona que equinácea é contraindicada para quem tem doença autoimune",
  },
  {
    title: '"Aumentar a imunidade"',
    desc: "Uma frase que parece boa mas que cientificamente pode ser perigosa",
  },
  {
    title: "Produtos sem padronização",
    desc: "Cápsulas que não declaram teor de princípio ativo no rótulo",
  },
  {
    title: "Misticismo no lugar de ciência",
    desc: '"Energizar o corpo" em vez de explicar mecanismos reais',
  },
  {
    title: "Medo de interações",
    desc: "Você toma remédio e não sabe se a planta pode causar problemas",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-16 lg:py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 text-center leading-tight mb-6">
          Você já percebeu que, a cada ano, gripes e resfriados parecem{" "}
          <span className="text-[#B8860B]">durar mais</span>?
        </h2>

        <p className="text-gray-600 text-base sm:text-lg text-center max-w-2xl mx-auto mb-4 leading-relaxed">
          Aquela gripe que antes passava em 3 dias agora leva uma semana. As
          crianças voltam da escola e toda a família adoece em sequência. A
          mudança de estação virou sinônimo de farmácia, consultas e dias
          perdidos.
        </p>

        <p className="text-gray-700 text-base sm:text-lg text-center font-semibold mb-10">
          E quando você tenta se proteger, o que encontra?
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-100 rounded-xl p-5 flex items-start gap-3"
            >
              <FaTimesCircle className="text-red-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">
                  {point.title}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-[#FBF7EF] border border-[#B8860B]/20 rounded-2xl p-6 text-center">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            O problema não é a fitoterapia. O problema é a{" "}
            <strong>falta de informação confiável</strong>. Quando você não sabe
            a dosagem certa, a contraindicação real e o nível de evidência, você
            fica entre dois extremos: ou não usa nada (e perde o benefício), ou
            usa de qualquer jeito (e corre riscos desnecessários).
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
