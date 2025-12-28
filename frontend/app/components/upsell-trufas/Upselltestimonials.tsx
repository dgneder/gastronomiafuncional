"use client";

import React from "react";
import Image from "next/image";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Laura Menezes",
    location: "São Paulo, SP",
    image: "/trufas/depoimento01.png",
    text: "As trufas funcionais mudaram minha relação com o doce! Agora como docinhos sem culpa e ainda cuido da saúde. Minha pele melhorou muito com as trufas de colágeno!",
    highlight: "Pele renovada",
  },
  {
    name: "Camila Rocha",
    location: "Belo Horizonte, MG",
    image: "/trufas/depoimento02.png",
    text: "Sou diabética e finalmente encontrei receitas que posso comer. Baixo índice glicêmico e muito saborosas! Recomendo demais.",
    highlight: "Ideal para diabéticos",
  },
  {
    name: "Fernanda Lima",
    location: "Curitiba, PR",
    image: "/trufas/depoimento03.png",
    text: "As trufas pré-treino viraram meu ritual. Energia natural sem precisar de suplementos artificiais. E ainda são deliciosas!",
    highlight: "Energia natural",
  },
];

const UpsellTestimonials: React.FC = () => {
  return (
    <section className="py-16 px-6 lg:px-12 bg-gradient-to-b from-amber-50 to-orange-100">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-amber-800 mb-4">
            Quem Já Faz Trufas Funcionais{" "}
            <span className="text-green-600">Ama os Resultados</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja como as trufas funcionais estão transformando a relação das pessoas com doces e saúde.
          </p>
        </div>

        {/* Depoimentos */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 relative overflow-hidden"
            >
              {/* Badge de Destaque */}
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                {testimonial.highlight}
              </div>

              {/* Ícone de Citação */}
              <FaQuoteLeft className="text-amber-200 text-4xl mb-4" />

              {/* Texto */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Autor */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-300">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-amber-800">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>

              {/* Estrelas */}
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Estatística */}
        <div className="mt-12 text-center bg-amber-600 text-white rounded-2xl p-8 shadow-xl">
          <p className="text-4xl font-bold mb-2">95%</p>
          <p className="text-lg">
            dos compradores relatam que conseguiram manter uma alimentação mais saudável sem abrir mão do prazer
          </p>
        </div>
      </div>
    </section>
  );
};

export default UpsellTestimonials;