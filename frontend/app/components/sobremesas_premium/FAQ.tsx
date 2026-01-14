"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "O que vou encontrar no Guia de Sobremesas Funcionais?",
    answer:
      "Você terá acesso a dezenas de receitas deliciosas, saudáveis e práticas, divididas por objetivos como energia, digestão, relaxamento, emagrecimento e beleza. Tudo com orientações simples e ingredientes acessíveis.",
  },
  {
    question: "O guia é indicado para iniciantes?",
    answer:
      "Sim! Todas as receitas foram pensadas para qualquer pessoa, mesmo que nunca tenha feito sobremesas saudáveis antes. É só seguir o passo a passo.",
  },
  {
    question: "Preciso de utensílios ou equipamentos especiais?",
    answer:
      "Não. A maioria das receitas pode ser feita com utensílios básicos de cozinha, como tigelas, colheres e, no máximo, um liquidificador.",
  },
  {
    question: "Terei acesso vitalício ao conteúdo?",
    answer:
      "Sim. Você poderá acessar o guia sempre que quiser, pelo tempo que quiser, sem limitações.",
  },
  {
    question: "Funciona em celular e tablet?",
    answer:
      "Sim. O guia é 100% digital e funciona em qualquer dispositivo com acesso à internet.",
  },
  {
    question: "As receitas servem para toda a família?",
    answer:
      "Com certeza! Há opções para adultos, crianças, idosos e até para quem segue dietas específicas como low carb ou vegana.",
  },
  {
    question: "E se eu não gostar? Tenho garantia?",
    answer:
      "Sim. Você pode testar o guia por 7 dias e, se não ficar satisfeito(a), pode solicitar reembolso total, sem burocracia.",
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      data-aos="fade-up"
      id="faq"
      className="py-20 px-6 lg:px-12 bg-gradient-to-r from-rose-100 via-pink-100 to-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Título da Seção */}
        <h2 className="text-3xl font-bold text-pink-700 mb-10">Perguntas Frequentes</h2>

        {/* Itens do FAQ */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md transition-all duration-300 text-left cursor-pointer ${
                activeIndex === index
                  ? "bg-white border-l-4 border-pink-400"
                  : "bg-pink-50 hover:bg-pink-100"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              {/* Pergunta */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-pink-700">
                  {item.question}
                </h3>
                {activeIndex === index ? (
                  <FaChevronUp className="text-pink-500" />
                ) : (
                  <FaChevronDown className="text-pink-500" />
                )}
              </div>

              {/* Resposta */}
              {activeIndex === index && (
                <p className="text-gray-700 mt-4 leading-relaxed">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
