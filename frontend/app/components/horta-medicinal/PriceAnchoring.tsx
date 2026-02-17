"use client";

import React from "react";

const anchors = [
  {
    emoji: "💰",
    value: "R$1.200+",
    title: "É o que uma família gasta por ano em chás e ervas",
    text: "Ervas secas de farmácia, chás de caixinha, suplementos. E você não sabe se foram colhidas no momento certo, secas corretamente, ou se ainda têm compostos ativos.",
  },
  {
    emoji: "🎓",
    value: "R$200–500",
    title: "É o custo de UM curso presencial de horta",
    text: "Um curso presencial te dá orientação pontual de um dia. Este guia te dá autonomia para a vida inteira — 30 plantas, calendários regionais, 4 métodos de secagem.",
  },
  {
    emoji: "⏰",
    value: "Meses",
    title: "É o tempo para aprender tudo sozinho",
    text: "Pesquisar blog por blog, testar planta por planta, errar, recomeçar. Ou abrir o guia e ter tudo organizado em 150+ páginas escritas por quem estuda plantas há 20+ anos.",
  },
];

const PriceAnchoring: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-[#FDF6E3]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 leading-tight">
          Quanto vale ter um agrônomo PhD te ensinando?
        </h2>
        <p className="text-gray-600 mb-10">
          Compare o investimento de R$34,90 com o que você já gasta ou gastaria:
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {anchors.map((a, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm text-left"
            >
              <div className="text-3xl mb-3">{a.emoji}</div>
              <p className="font-black text-[#F9A825] text-2xl mb-1">
                {a.value}
              </p>
              <h4 className="font-bold text-gray-900 text-sm mb-3">
                {a.title}
              </h4>
              <p className="text-gray-500 text-xs leading-relaxed">{a.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#F2F8ED] border border-[#2E7D32]/20 rounded-xl p-5 max-w-lg mx-auto">
          <p className="text-[#1B5E20] font-bold text-lg">
            Tudo isso por <span className="text-2xl">R$34,90</span> — pagamento
            único, acesso vitalício.
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Menos que o preço de 3 caixas de chá de camomila no supermercado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PriceAnchoring;
