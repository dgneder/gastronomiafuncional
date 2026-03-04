"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    q: "Este guia substitui o meu médico ou tratamento atual?",
    a: "Não. O Alívio Natural tem caráter exclusivamente educativo e informativo. As plantas medicinais apresentadas são opções complementares, não substitutas do acompanhamento médico. Sempre informe seu médico sobre qualquer fitoterápico que você pretenda usar, especialmente se faz uso de medicamentos contínuos.",
  },
  {
    q: "Posso usar o guia se tomo medicamentos de uso contínuo?",
    a: "Sim, com as devidas precauções. O guia inclui um Bônus específico — o Guia de Segurança: Interações Medicamentosas — com uma tabela de semáforo que mostra quais plantas podem interagir com anticoagulantes, antidepressivos, anti-hipertensivos e outros. Mas sempre confirme com seu médico ou farmacêutico.",
  },
  {
    q: "As plantas têm evidência científica real ou é só tradição?",
    a: "Cada planta incluída tem no mínimo estudos controlados publicados em periódicos científicos revisados por pares. O guia classifica cada planta com um sistema de estrelas de evidência (1 a 5), baseado na quantidade e qualidade dos estudos disponíveis. Não inclui plantas com apenas uso tradicional sem respaldo científico.",
  },
  {
    q: "Onde encontro as plantas? É difícil ou caro?",
    a: "A maioria das 15 plantas está disponível em farmácias, ervanários, lojas de produtos naturais e até supermercados (gengibre, cúrcuma, alecrim). O guia inclui uma lista de compras completa com estimativas de custo — o Kit Essencial sai entre R$50 e R$90 e cobre as plantas mais importantes dos protocolos.",
  },
  {
    q: "O guia funciona para qualquer tipo de dor?",
    a: "O guia foca em seis categorias principais: dor articular (artrite, artrose), lombalgia, enxaqueca, fibromialgia, dor aguda (contusões, entorses) e manutenção anti-inflamatória. Para cada uma há um protocolo específico. Se sua dor não se encaixa nessas categorias, ainda há muita informação útil, mas os protocolos foram desenhados para esses perfis.",
  },
  {
    q: "Em quanto tempo recebo acesso?",
    a: "O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com o link de download do guia em PDF de alta qualidade, compatível com celular, tablet e computador. Acesso vitalício — sem assinatura.",
  },
  {
    q: "E se eu não gostar? Tenho como pedir reembolso?",
    a: "Sim. Você tem 7 dias de garantia incondicional. Se por qualquer razão não se sentir satisfeito, solicite o reembolso pelo suporte da Hotmart ou por e-mail. 100% do valor devolvido sem perguntas.",
  },
  {
    q: "Qual a diferença entre este guia e o Fitoterapia Essencial?",
    a: "O Alívio Natural foca exclusivamente em dor e inflamação — 15 plantas com a máxima profundidade, 6 protocolos específicos para cada tipo de dor, e os bônus de segurança e receitas tópicas. O Fitoterapia Essencial cobre 30 plantas para 7 sistemas do corpo (imunidade, digestão, sono, pele, respiratório, energia e inflamação), com amplitude maior mas menos especialização em dor.",
  },
];

const FAQSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E2A10] leading-tight mb-3">
            Perguntas frequentes
          </h2>
          <p className="text-gray-500 text-base">
            Tudo o que você precisa saber antes de decidir.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map(({ q, a }, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-[#4A7C29]/40 transition-colors"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white hover:bg-[#FBF7EF] transition-colors"
              >
                <span className="font-semibold text-[#1E2A10] text-sm leading-snug">
                  {q}
                </span>
                <FaChevronDown
                  className={`text-gray-400 shrink-0 text-sm transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
