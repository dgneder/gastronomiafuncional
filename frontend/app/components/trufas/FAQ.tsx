"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "O que vou encontrar no Guia de Trufas Funcionais?",
    answer:
      "Você terá acesso a 100 receitas de trufas e docinhos funcionais, divididas em 10 módulos por objetivo de saúde (energia, sono, imunidade, beleza, etc). Cada receita tem passo a passo detalhado, lista de ingredientes e benefícios funcionais.",
  },
  {
    question: "As receitas são difíceis de fazer?",
    answer:
      "Não! Todas as receitas foram desenvolvidas para serem práticas e acessíveis. A maioria pode ser feita em menos de 30 minutos com utensílios básicos de cozinha.",
  },
  {
    question: "Preciso de ingredientes caros ou difíceis de encontrar?",
    answer:
      "Os ingredientes funcionais são acessíveis e podem ser encontrados em lojas de produtos naturais, farmácias ou online. O guia inclui sugestões de substituições para facilitar.",
  },
  {
    question: "Posso vender as trufas que eu fizer?",
    answer:
      "Sim! Muitas alunas usam as receitas para gerar renda extra. Inclusive, oferecemos como upsell uma planilha de precificação e kit de embalagens para quem quer empreender.",
  },
  {
    question: "As trufas são realmente saudáveis?",
    answer:
      "Sim! Todas as receitas são plant-based, sem açúcar refinado, sem glúten e com ingredientes funcionais que oferecem benefícios reais para a saúde.",
  },
  {
    question: "Terei acesso vitalício ao conteúdo?",
    answer:
      "Sim. Uma vez adquirido, você poderá acessar o guia sempre que quiser, pelo tempo que quiser, incluindo futuras atualizações.",
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
      className="py-20 px-6 lg:px-12 bg-gradient-to-r from-amber-50 via-orange-100 to-amber-50"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Título da Seção */}
        <h2 className="text-3xl font-bold text-amber-700 mb-10">Perguntas Frequentes</h2>

        {/* Itens do FAQ */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md transition-all duration-300 text-left cursor-pointer ${
                activeIndex === index
                  ? "bg-white border-l-4 border-amber-500"
                  : "bg-amber-50 hover:bg-amber-100"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              {/* Pergunta */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-amber-700">
                  {item.question}
                </h3>
                {activeIndex === index ? (
                  <FaChevronUp className="text-amber-600" />
                ) : (
                  <FaChevronDown className="text-amber-600" />
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