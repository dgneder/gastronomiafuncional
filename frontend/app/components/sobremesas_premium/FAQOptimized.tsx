"use client";

import React, { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "O que vou receber ao comprar?",
    answer: "Você receberá acesso imediato ao Guia completo com +150 receitas de sobremesas funcionais organizadas por benefício (energia, sono, imunidade, etc.), listas de compras prontas, guia de substituições e bônus exclusivos. Tudo em formato digital, disponível para celular, tablet ou computador.",
  },
  {
    question: "Preciso ter experiência na cozinha?",
    answer: "Não! As receitas foram desenvolvidas para qualquer pessoa, mesmo quem nunca cozinhou. Cada passo é explicado de forma simples e clara, com ingredientes fáceis de encontrar em qualquer mercado.",
  },
  {
    question: "As receitas servem para toda a família?",
    answer: "Sim! Todas as receitas são saudáveis e saborosas, perfeitas para crianças e adultos. Muitas mães usam o guia para oferecer sobremesas nutritivas aos filhos sem que eles percebam que é saudável.",
  },
  {
    question: "Quanto tempo leva para preparar?",
    answer: "A maioria das receitas fica pronta em 5 a 15 minutos. Algumas precisam de tempo de geladeira, mas o preparo ativo é sempre rápido e prático.",
  },
  {
    question: "E se eu não gostar? Tem garantia?",
    answer: "Sim! Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito, basta enviar um e-mail e devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.",
  },
  {
    question: "Como recebo o acesso?",
    answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com os dados de acesso à área de membros. Se pagar com Pix, o acesso é instantâneo. Cartão de crédito também é imediato. Boleto pode levar até 3 dias úteis.",
  },
];

const FAQOptimized: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 sm:py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Título */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-pink-600 mb-3">
            <FaQuestionCircle className="text-2xl" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Dúvidas <span className="text-pink-600">Frequentes</span>
          </h2>
          <p className="text-gray-600">
            Tudo que você precisa saber antes de começar
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === index 
                  ? "border-pink-300 shadow-md" 
                  : "border-gray-200"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-white hover:bg-pink-50/50 transition-colors"
              >
                <span className={`font-medium text-sm sm:text-base pr-4 ${
                  openIndex === index ? "text-pink-700" : "text-gray-900"
                }`}>
                  {item.question}
                </span>
                <FaChevronDown 
                  className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-pink-500" : ""
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="p-4 sm:p-5 pt-0 text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ainda tem dúvidas */}
        <div className="mt-8 text-center p-4 bg-pink-50 rounded-xl">
          <p className="text-gray-700 text-sm">
            Ainda tem alguma dúvida?{" "}
            <a 
              href="https://wa.me/5583987831220" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-600 font-medium hover:underline"
            >
              Fale conosco no WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQOptimized;
