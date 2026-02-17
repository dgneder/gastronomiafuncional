"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como vou receber o acesso ao Guia?",
      answer: "O acesso é imediato. Assim que o seu pagamento for aprovado, você receberá um e-mail com o link para baixar o arquivo em formato PDF de alta qualidade. Você poderá ler no celular, tablet ou computador."
    },
    {
      question: "O conteúdo é muito difícil de entender?",
      answer: "Não. Apesar de ser baseado em genética e ciência, eu escrevi o guia de forma prática e acessível. Todos os termos técnicos são explicados no momento em que aparecem e existe um glossário completo no final. Meu objetivo é que qualquer pessoa consiga aplicar os protocolos com segurança, sem precisar ser da área da saúde."
    },
    {
      question: "As 30 plantas são fáceis de encontrar no Brasil?",
      answer: "Sim! Selecionei propositalmente plantas que são acessíveis no território brasileiro, seja em casas de ervas, feiras ou até mesmo para plantar no seu próprio quintal."
    },
    {
      question: "E se eu tomar medicamentos de uso contínuo?",
      answer: "Justamente por isso o capítulo de segurança é tão detalhado. Ele lista as principais interações entre plantas medicinais e classes de medicamentos — anticoagulantes, antidiabéticos, imunossupressores, sedativos, anticoncepcionais e outros. Se você toma medicamentos, esse capítulo é especialmente importante para você."
    },
    {
      question: "O guia substitui consulta médica ou tratamento?",
      answer: "Não, e essa é uma das primeiras coisas que o guia deixa claro. O Fitoterapia Essencial é um material educacional que ensina como a fitoterapia funciona com base em ciência. Ele complementa o acompanhamento profissional — nunca substitui. Inclusive, o capítulo de segurança enfatiza situações em que é essencial consultar um médico."
    },
    {
      question: "Posso imprimir o e-book?",
      answer: "Com certeza! O PDF foi diagramado para facilitar a leitura digital, mas também fica excelente se impresso. Muitos leitores preferem imprimir a tabela rápida do Anexo A para fixar na cozinha como referência de consulta rápida."
    },
    {
      question: "Posso compartilhar o guia com familiares?",
      answer: "O uso do guia é pessoal e intrafamiliar. Você pode consultar o material junto com sua família sem problemas. O que pedimos é que não distribua o arquivo publicamente ou para terceiros — isso nos ajuda a continuar produzindo conteúdo de qualidade."
    },
    {
      question: "Como funciona a garantia de 7 dias?",
      answer: "Você tem 7 dias para avaliar o material. Se não gostar ou sentir que não era o que esperava, basta enviar um e-mail solicitando o reembolso. O valor é devolvido integralmente, sem perguntas, sem burocracia. Essa é uma garantia prevista pelo Código de Defesa do Consumidor — e eu faço questão de honrar."
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#FBF7EF]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-[#4A7C29] mb-4">
            <FaQuestionCircle size={24} />
            <span className="font-bold uppercase tracking-widest text-sm">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-gray-600 italic">
            &quot;A ciência é feita de perguntas. Aqui estão as respostas para as mais comuns.&quot;
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-[#4A7C29]/10 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-900 leading-tight">
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
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
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