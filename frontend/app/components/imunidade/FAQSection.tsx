"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    q: "O e-book é digital ou físico?",
    a: "Digital (PDF). Você recebe acesso imediato por e-mail após a compra. Pode ler no celular, tablet ou computador. Pode imprimir se preferir.",
  },
  {
    q: "Preciso de conhecimento prévio?",
    a: "Não. O guia foi escrito para qualquer pessoa — desde quem nunca usou uma planta medicinal até quem já tem experiência. A linguagem é acessível e as explicações científicas são claras.",
  },
  {
    q: "As plantas substituem vacinas ou medicamentos?",
    a: "De forma alguma. O guia é explícito: fitoterapia é COMPLEMENTAR à medicina convencional. Nunca substitui vacinas, diagnóstico ou tratamento médico. Essa clareza é um dos diferenciais do guia.",
  },
  {
    q: "Posso usar as plantas se tomo medicamento?",
    a: "Cada ficha do guia lista as interações medicamentosas específicas. Você saberá exatamente quais plantas são seguras para combinar com seu medicamento — e quais evitar. Na dúvida, recomendamos consultar seu médico ou farmacêutico.",
  },
  {
    q: "Serve para crianças?",
    a: "Sim. O Protocolo 5 é específico para famílias com crianças acima de 6 anos, com dosagens pediátricas adaptadas e apenas plantas com perfil de segurança adequado. Para crianças menores, orientações específicas são incluídas.",
  },
  {
    q: "As plantas são fáceis de encontrar no Brasil?",
    a: "Sim. A maioria está disponível em supermercados (alho, gengibre, cúrcuma), farmácias (guaco, Kaloba, própolis), ervanários e lojas online. A lista de compras inclui onde encontrar cada item.",
  },
  {
    q: "Quanto vou gastar com as plantas?",
    a: "Depende do protocolo. O Protocolo de Prevenção Diária custa R$ 80-150/mês. O Kit de Resgate custa R$ 165-290 (compra única). Cada protocolo tem sua lista de compras com custo estimado.",
  },
  {
    q: "O acesso é vitalício?",
    a: "Sim. Você compra uma vez e tem acesso para sempre. E recebe atualizações futuras sem custo adicional.",
  },
  {
    q: "Como funciona a garantia?",
    a: "Você tem 7 dias para avaliar. Se não ficar satisfeito(a), solicita o reembolso diretamente pela Hotmart — 100% do valor, sem perguntas.",
  },
  {
    q: "Posso compartilhar com minha família?",
    a: "O guia é para uso pessoal e familiar. Compartilhar com sua família direta é esperado e incentivado. Distribuir publicamente ou revender é proibido.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-20 px-4 bg-[#FBF7EF]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 text-center mb-10">
          Perguntas Frequentes
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
              >
                <span className="font-bold text-gray-900 text-sm sm:text-base pr-4">
                  {faq.q}
                </span>
                {open === i ? (
                  <FaChevronUp className="text-[#4A7C29] flex-shrink-0 text-sm" />
                ) : (
                  <FaChevronDown className="text-gray-400 flex-shrink-0 text-sm" />
                )}
              </button>
              {open === i && (
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 border-t border-gray-100 pt-3">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
