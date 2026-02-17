"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como vou receber o acesso ao Guia?",
      answer:
        "O acesso é imediato. Assim que o pagamento for aprovado, você receberá um e-mail com o link para baixar o arquivo em formato PDF de alta qualidade. Você poderá ler no celular, tablet ou computador.",
    },
    {
      question: "O conteúdo é muito técnico ou difícil de entender?",
      answer:
        "Não. Apesar de ser baseado em bioquímica e farmacologia, eu escrevi o guia em linguagem acessível. Todos os termos técnicos são explicados no momento em que aparecem e existe um glossário completo no final. Se você consegue seguir uma receita de bolo, consegue usar o guia.",
    },
    {
      question:
        "Eu posso usar óleos essenciais perto do meu gato / cachorro / ave?",
      answer:
        "O Capítulo 5 tem uma seção inteira dedicada a pets. Gatos são os mais vulneráveis por não terem a enzima que metaboliza fenóis. Cães toleram mais, mas com restrições. Aves são extremamente sensíveis a voláteis. O guia lista quais óleos são seguros e quais são proibidos para cada espécie.",
    },
    {
      question: "Posso usar óleos essenciais na gestação?",
      answer:
        "Alguns sim, outros não — e depende do trimestre. O guia tem uma tabela completa de segurança gestacional, indicando exatamente quais óleos são seguros em cada fase e quais devem ser evitados. Em caso de dúvida, sempre consulte seu obstetra.",
    },
    {
      question: "O guia recomenda ingestão de óleos essenciais?",
      answer:
        "Não. A ingestão de óleos essenciais não é abordada nem recomendada neste guia. Os métodos de uso são: difusão, inalação, uso tópico diluído, banhos aromáticos e compressas. Todos com protocolos seguros e validados.",
    },
    {
      question: "E se eu tomo medicamentos de uso contínuo?",
      answer:
        "Justamente por isso o capítulo de segurança é tão detalhado. Ele lista 7 classes de medicamentos que podem interagir com óleos essenciais — anticoagulantes, antidiabéticos, anti-hipertensivos, anticonvulsivantes, imunossupressores, sedativos e anticoncepcionais. Cada interação é explicada com mecanismo.",
    },
    {
      question: "O guia substitui consulta médica ou tratamento?",
      answer:
        "Não, e essa é uma das primeiras coisas que o guia deixa claro. O Aromaterapia Essencial é um material educacional que ensina como a aromaterapia funciona com base em ciência. Ele complementa o acompanhamento profissional — nunca substitui.",
    },
    {
      question: "Posso imprimir?",
      answer:
        "Com certeza! O PDF foi diagramado para leitura digital, mas fica excelente impresso. Muitos leitores imprimem a tabela rápida de consulta para ter sempre à mão.",
    },
    {
      question: "Como funciona a garantia de 7 dias?",
      answer:
        "Você tem 7 dias para avaliar o material. Se não gostar ou sentir que não era o que esperava, basta solicitar o reembolso pela plataforma Hotmart. O valor é devolvido integralmente, sem perguntas, sem burocracia.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#FBF7EF]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-[#4A7C29] mb-4">
            <FaQuestionCircle size={24} />
            <span className="font-bold uppercase tracking-widest text-sm">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-gray-600 italic">
            &quot;A ciência é feita de perguntas. Aqui estão as respostas para as
            mais comuns.&quot;
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-[#4A7C29]/10 overflow-hidden shadow-sm"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
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
