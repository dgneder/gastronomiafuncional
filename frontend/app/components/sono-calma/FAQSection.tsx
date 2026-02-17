"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    question: "Funciona para qualquer tipo de insônia?",
    answer: "O guia cobre insônia leve (dificuldade para pegar no sono), insônia severa (sono fragmentado, despertar precoce), ansiedade diurna e a combinação ansiedade + insônia. Cada perfil tem um protocolo específico. Insônia causada por condições médicas específicas (apneia do sono, dor crônica, etc.) pode precisar de tratamento médico complementar.",
  },
  {
    question: "Posso usar se já tomo remédio para dormir?",
    answer: "Sim, mas com ressalvas. O Protocolo 5 (Transição Consciente) foi desenhado especificamente para quem usa medicamento e quer explorar alternativas. O guia explica quais plantas interagem com quais medicamentos. Importante: nunca pare um medicamento por conta própria — o guia orienta desmame gradual COM acompanhamento médico.",
  },
  {
    question: "Em quanto tempo vou ver resultado?",
    answer: "Efeitos sedativos (ajuda a dormir mais rápido): 30-60 minutos após a primeira dose. Efeitos cumulativos (redução sustentada de ansiedade, regulação de cortisol): 14-28 dias de uso contínuo. O guia indica o tempo de avaliação para cada protocolo.",
  },
  {
    question: "Gestantes e crianças podem usar?",
    answer: "O guia tem FAQ específico sobre isso. Resumo: camomila e capim-limão são geralmente seguros em doses moderadas. A maioria das outras plantas precisa de orientação profissional para gestantes e crianças. O guia indica quais são seguras e a partir de qual idade.",
  },
  {
    question: "É um livro físico?",
    answer: "Não. É um e-book digital (PDF) com 78 páginas. Você recebe acesso imediato após o pagamento e pode ler no celular, tablet ou computador. Também pode imprimir se preferir.",
  },
  {
    question: "Preciso comprar as plantas e suplementos?",
    answer: "Sim — o guia ensina O QUE usar e COMO usar, mas as plantas e suplementos são adquiridos separadamente. A boa notícia: o protocolo mais barato custa R$25-45/mês e usa plantas que você encontra em qualquer feira ou supermercado.",
  },
  {
    question: "Qual a diferença para os outros e-books de chás?",
    answer: "Três diferenças fundamentais: (1) cada planta tem mecanismo de ação explicado — você entende POR QUE funciona; (2) dosagens exatas baseadas em estudos clínicos — não \"uma pitadinha\"; (3) protocolos prontos com cronograma horário por horário — não \"tome antes de dormir\".",
  },
  {
    question: "Posso pedir reembolso?",
    answer: "Sim, até 7 dias após a compra, sem perguntas.",
  },
  {
    question: "Quem é o Dr. Diogo Gonçalves Neder?",
    answer: "Doutor em Genética e Melhoramento de Plantas, professor universitário de Agronomia e Agroecologia, pesquisador em fitoquímica e processos fermentativos. Estuda como plantas produzem compostos ativos e como extraí-los corretamente — a base científica deste guia.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-20 px-4 bg-[#FBF7EF]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-[#4A7C29] mb-4">
            <FaQuestionCircle size={24} />
            <span className="font-bold uppercase tracking-widest text-sm">FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            Perguntas frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-[#4A7C29]/10 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-5 sm:p-6 text-left flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-900 leading-tight text-sm sm:text-base">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FaMinus className="text-[#4A7C29] flex-shrink-0" />
                ) : (
                  <FaPlus className="text-[#4A7C29] flex-shrink-0" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="p-5 sm:p-6 pt-0 text-gray-600 leading-relaxed text-sm sm:text-base border-t border-gray-50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contato */}
        <div className="mt-8 text-center p-4 bg-[#4A7C29]/10 rounded-xl">
          <p className="text-gray-700 text-sm">
            Ainda tem alguma dúvida?{" "}
            <a
              href="https://wa.me/5583987831220"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2D5016] font-medium hover:underline"
            >
              Fale conosco no WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
