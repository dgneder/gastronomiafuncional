"use client";

import React from "react";

const anchors = [
  {
    emoji: "💸",
    value: "R$150–300",
    title: "É o que você já investiu em óleos essenciais",
    text: "Frasquinhos de R$30-80 cada, difusor, carreadores. E provavelmente está usando errado — dosagem chutada, blends aleatórios, sem saber contraindicações.",
  },
  {
    emoji: "🏥",
    value: "R$200–500",
    title: "É o custo de UMA consulta com aromaterapeuta",
    text: "Uma consulta individual te dá orientação pontual. Este guia te dá autonomia para a vida inteira — 25 óleos, 12 blends, tabelas de segurança completas.",
  },
  {
    emoji: "⏰",
    value: "6+ meses",
    title: "É o tempo para juntar tudo isso sozinho",
    text: "Pesquisar artigo por artigo no PubMed, cruzar informações, traduzir estudos em inglês, organizar tudo. Ou abrir o guia e ter tudo pronto em 160+ páginas.",
  },
];

const PriceAnchoring: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-[#FDF6E3]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 leading-tight">
          Coloque na balança
        </h2>
        <p className="text-gray-600 mb-10">
          Compare o investimento de R$37 com o que você já gasta ou gastaria:
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {anchors.map((a, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm text-left"
            >
              <div className="text-3xl mb-3">{a.emoji}</div>
              <p className="font-black text-[#B8860B] text-2xl mb-1">
                {a.value}
              </p>
              <h4 className="font-bold text-gray-900 text-sm mb-3">
                {a.title}
              </h4>
              <p className="text-gray-500 text-xs leading-relaxed">{a.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#F2F8ED] border border-[#4A7C29]/20 rounded-xl p-5 max-w-lg mx-auto">
          <p className="text-[#2D5016] font-bold text-lg">
            Tudo isso por <span className="text-2xl">R$37</span> — pagamento
            único, acesso vitalício.
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Menos que 2 frascos de óleo essencial de qualidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PriceAnchoring;
