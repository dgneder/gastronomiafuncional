"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Preciso ter quintal para cultivar?",
      answer:
        "Não! O guia ensina cultivo em vasos, jardineiras, hortas verticais e até na janela do apartamento. 5 plantas medicinais cabem em menos de 1 m². O Capítulo 2 tem layouts específicos para espaços pequenos.",
    },
    {
      question: "Nunca plantei nada na vida. Consigo acompanhar?",
      answer:
        "Com certeza. 12 das 30 plantas são classificadas como Iniciante — praticamente impossíveis de matar. O guia tem um checklist semanal do primeiro mês e passo a passo desde a escolha do vaso até a primeira colheita.",
    },
    {
      question: "O guia ensina a fazer chás e remédios caseiros?",
      answer:
        "O Horta Medicinal em Casa foca no CULTIVO: plantar, cuidar, colher e conservar. Para receitas terapêuticas com dosagem (chás, tinturas, xaropes), existe o Fitoterapia Essencial — complemento perfeito, disponível após a compra.",
    },
    {
      question: "Funciona na minha região do Brasil?",
      answer:
        "Sim! O guia inclui calendários específicos para as 5 regiões: Sudeste, Sul, Nordeste, Centro-Oeste e Norte. Cada calendário indica mês a mês quais plantas plantar e colher na sua região.",
    },
    {
      question: "Quanto vou gastar para montar a horta?",
      answer:
        "Investimento inicial estimado: R$88 a R$185 (vasos, substrato, mudas/sementes, ferramentas básicas). O guia tem dicas para economizar: pedir mudas a vizinhos, reaproveitar recipientes, fazer substrato caseiro.",
    },
    {
      question: "Posso ler no celular?",
      answer:
        "Sim! O PDF abre em qualquer dispositivo — celular, tablet, computador ou Kindle. Foi diagramado para leitura digital confortável, mas também fica excelente impresso.",
    },
    {
      question: "E se eu não gostar? Posso devolver?",
      answer:
        "Sim. Você tem garantia incondicional de 7 dias. Se não gostar ou sentir que não era o que esperava, basta solicitar o reembolso pela plataforma Hotmart. Valor devolvido integralmente, sem perguntas.",
    },
    {
      question: "O guia será atualizado?",
      answer:
        "Sim! Compradores recebem todas as atualizações futuras gratuitamente. Novas fichas de plantas, correções e melhorias são enviadas automaticamente.",
    },
    {
      question: "Quanto tempo leva para receber?",
      answer:
        "Acesso imediato. Após a confirmação do pagamento (instantâneo via PIX ou cartão), o link de download é enviado por e-mail em menos de 2 minutos.",
    },
    {
      question: "Qual a diferença para o Fitoterapia Essencial?",
      answer:
        "São complementares. Horta Medicinal ensina CULTIVAR (plantar, colher, secar). Fitoterapia Essencial ensina USAR (chás com dosagem, tinturas, xaropes). Juntos formam o sistema completo: do solo ao remédio.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#FBF7EF]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-[#2E7D32] mb-4">
            <FaQuestionCircle size={24} />
            <span className="font-bold uppercase tracking-widest text-sm">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 italic">
            &quot;As respostas para as dúvidas mais comuns sobre o guia.&quot;
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-[#2E7D32]/10 overflow-hidden shadow-sm"
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
                  <FaMinus className="text-[#2E7D32] flex-shrink-0" />
                ) : (
                  <FaPlus className="text-[#2E7D32] flex-shrink-0" />
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
        <div className="mt-8 text-center p-4 bg-[#2E7D32]/10 rounded-xl">
          <p className="text-gray-700 text-sm">
            Ainda tem alguma dúvida?{" "}
            <a
              href="https://wa.me/5583987831220"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1B5E20] font-medium hover:underline"
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
