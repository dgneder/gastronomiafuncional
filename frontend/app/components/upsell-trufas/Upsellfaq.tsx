"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Qual a diferença entre o Guia de Sobremesas e o de Trufas?",
    answer:
      "O Guia de Sobremesas Funcionais que você acabou de comprar traz receitas variadas (bolos, tortas, mousses, etc). Já o Guia de Trufas é 100% focado em trufas e docinhos: são 100 receitas divididas em 10 módulos por objetivo de saúde (energia, sono, imunidade, beleza, etc).",
  },
  {
    question: "As receitas são realmente saudáveis?",
    answer:
      "Sim! Todas as receitas são plant-based, sem açúcar refinado, sem glúten e com ingredientes funcionais que oferecem benefícios reais para a saúde. Cada trufa tem propósito: energia, relaxamento, imunidade, beleza, etc.",
  },
  {
    question: "Preciso de ingredientes caros ou difíceis de encontrar?",
    answer:
      "Os ingredientes funcionais são acessíveis e podem ser encontrados em lojas de produtos naturais, farmácias ou online. O guia inclui sugestões de substituições para facilitar.",
  },
  {
    question: "As receitas são difíceis de fazer?",
    answer:
      "Não! Todas as receitas foram desenvolvidas para serem práticas e acessíveis. A maioria pode ser feita em menos de 30 minutos com utensílios básicos de cozinha.",
  },
  {
    question: "Essa oferta vai estar disponível depois?",
    answer:
      "Não. Este preço especial de R$ 37 é exclusivo para quem acabou de comprar o Guia de Sobremesas Funcionais. Depois, o Guia de Trufas será vendido por R$ 67.",
  },
  {
    question: "E se eu não gostar? Tenho garantia?",
    answer:
      "Sim. Você pode testar o guia por 7 dias e, se não ficar satisfeito(a), pode solicitar reembolso total, sem burocracia.",
  },
];

const UpsellFAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 lg:px-12 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Título */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-amber-800 mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-gray-600">
            Tire suas dúvidas sobre o Guia de Trufas e Docinhos Funcionais
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl transition-all duration-300 cursor-pointer ${
                activeIndex === index
                  ? "bg-amber-50 border-2 border-amber-400 shadow-md"
                  : "bg-gray-50 border border-gray-200 hover:border-amber-300"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              {/* Pergunta */}
              <div className="flex justify-between items-center p-5">
                <h3
                  className={`font-semibold text-lg ${
                    activeIndex === index ? "text-amber-700" : "text-gray-800"
                  }`}
                >
                  {item.question}
                </h3>
                {activeIndex === index ? (
                  <FaChevronUp className="text-amber-600 flex-shrink-0" />
                ) : (
                  <FaChevronDown className="text-gray-400 flex-shrink-0" />
                )}
              </div>

              {/* Resposta */}
              {activeIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpsellFAQ;