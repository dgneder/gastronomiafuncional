"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface ValueBulletsProps {
  onButtonClick: () => void;
}

const bullets = [
  { emoji: "🧠", title: "Por que a ansiedade rouba seu sono", text: "Como o cortisol elevado impede o GABA de fazer seu trabalho (e como 2 plantas podem auxiliar a reverter isso em 2-4 semanas)" },
  { emoji: "🌿", title: "A planta que pode ajudar a reduzir cortisol em 23-30%", text: "Ashwagandha, com meta-análise de 5 ensaios clínicos. Dose, extrato e horário exatos." },
  { emoji: "💊", title: "Valeriana + lúpulo: a sinergia comprovada", text: "Estudo Koetter 2007 indicou que a combinação pode reduzir o tempo para dormir. O guia ensina a proporção exata." },
  { emoji: "😴", title: "O erro que faz 90% dos chás não funcionarem", text: "NÃO TAMPAR. Sem tampa, você pode perder 30-60% dos compostos ativos no vapor. Parece simples, mas muda tudo." },
  { emoji: "⏰", title: "Protocolos com horário por horário", text: "Não é \"tome antes de dormir\". É \"às 20h faça isso, às 21h tome isso, às 21h30 deite\". Cronograma completo." },
  { emoji: "🦶", title: "Escalda-pés: a técnica mais subestimada", text: "3 mecanismos simultâneos (termorregulação + absorção + aromaterapia). A ciência explica por que funciona." },
  { emoji: "📊", title: "Tabela Mestra de Referência Rápida", text: "Todas as 12 plantas com método, quantidade, tempo e temperatura. Para recortar e colar na cozinha." },
  { emoji: "💰", title: "Lista de compras com custos", text: "Cada protocolo com lista exata do que comprar, onde comprar, e custo mensal estimado (de R$25 a R$130/mês)." },
  { emoji: "⚠️", title: "Contraindicações reais", text: "Hipotireoidismo + ashwagandha? Antidepressivo + erva-de-são-joão? O guia alerta sobre TODOS os riscos que outros ignoram." },
  { emoji: "👶", title: "Segurança para crianças e gestantes", text: "Quais plantas são seguras, a partir de qual idade, e em qual dose. O FAQ mais completo que você vai encontrar." },
  { emoji: "🔬", title: "22 referências científicas", text: "Todo estudo citado no guia está na bibliografia. Nenhuma informação \"eu acho\". Tudo verificável." },
  { emoji: "📓", title: "Diário de progresso", text: "Modelo com 6 métricas para acompanhar sua evolução semana a semana e saber se o protocolo está funcionando." },
];

const ValueBullets: React.FC<ValueBulletsProps> = ({ onButtonClick }) => {
  return (
    <section className="py-16 lg:py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            O que você encontra em{" "}
            <span className="text-[#4A7C29]">cada página</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 lg:gap-5 mb-10">
          {bullets.map((bullet, i) => (
            <div
              key={i}
              className="flex gap-4 p-5 bg-[#FBF7EF] rounded-xl border border-[#B8860B]/10 hover:shadow-md transition-shadow"
            >
              <span className="text-2xl flex-shrink-0">{bullet.emoji}</span>
              <div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1">
                  {bullet.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{bullet.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onButtonClick}
            className="py-4 px-8 bg-gradient-to-r from-[#4A7C29] to-[#2D5016] text-white font-bold text-lg rounded-xl shadow-lg hover:brightness-110 transition-all inline-flex items-center gap-2 group"
          >
            QUERO TUDO ISSO POR R$37
            <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValueBullets;
