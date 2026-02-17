"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface ValueBulletsProps {
  onButtonClick: () => void;
}

const bullets = [
  {
    icon: "🧬",
    title: "O que cada óleo faz no seu corpo — e por quê",
    text: "Não é \"lavanda relaxa\". É: o linalol liga nos receptores GABA-A do sistema nervoso central, inibindo a excitação neuronal. A diferença entre acreditar e entender.",
  },
  {
    icon: "💧",
    title: "Dosagem exata por método e por idade",
    text: "Quantas gotas? Em quanto de carreador? Para crianças de qual idade? Cada informação está em tabelas claras — sem espaço para erro.",
  },
  {
    icon: "🐱",
    title: "Quais óleos são tóxicos para gatos, cães e aves",
    text: "Gatos não têm a enzima glucuronil-transferase. Eles não metabolizam fenóis e monoterpenos. Tea tree, eucalipto e hortelã podem ser fatais. O guia tem a lista completa.",
  },
  {
    icon: "🤰",
    title: "Segurança na gestação — por trimestre",
    text: "Nem todo óleo é proibido. Lavanda é segura no 2º trimestre. Sálvia esclareia pode estimular contrações. Você vai saber exatamente o que pode e o que não pode.",
  },
  {
    icon: "💊",
    title: "7 classes de medicamentos que interagem com óleos",
    text: "Anticoagulantes, antidiabéticos, anti-hipertensivos, anticonvulsivantes, imunossupressores, sedativos, anticoncepcionais. Cada interação explicada com mecanismo.",
  },
  {
    icon: "🔬",
    title: "Como verificar se seu óleo é puro ou adulterado",
    text: "8 critérios objetivos + 1 teste caseiro que você faz em casa. Aprenda a ler rótulos, identificar sinais de fraude e exigir laudo GC-MS.",
  },
  {
    icon: "📊",
    title: "Estrelas de evidência científica por óleo",
    text: "Cada óleo recebe uma classificação de 1 a 5 estrelas baseada no nível de evidência publicada. Você sabe o que tem respaldo forte e o que ainda é preliminar.",
  },
  {
    icon: "🧪",
    title: "A química por trás dos terpenos",
    text: "Monoterpenos, sesquiterpenos, óxidos, ésteres, cetonas. Cada classe de composto com seus efeitos e riscos — explicados em linguagem acessível.",
  },
  {
    icon: "🛁",
    title: "5 métodos de uso com protocolo completo",
    text: "Difusão, inalação direta, uso tópico, banhos aromáticos, compressas. Cada método com tempo ideal, diluição correta e precauções específicas.",
  },
  {
    icon: "💰",
    title: "O \"kit mínimo\" para começar com R$100-170",
    text: "Você não precisa de 25 óleos. Com apenas 5 estratégicos (lavanda, limão, eucalipto radiata, tea tree, hortelã), você prepara 8 dos 12 blends do guia.",
  },
];

const ValueBullets: React.FC<ValueBulletsProps> = ({ onButtonClick }) => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-[#FDF6E3]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 text-center mb-3 leading-tight">
          Ao abrir o guia, você vai aprender:
        </h2>
        <p className="text-gray-500 text-center mb-10 text-sm">
          10 razões que tornam este o guia mais completo de aromaterapia
          científica do Brasil
        </p>

        <div className="space-y-4">
          {bullets.map((b, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-[#4A7C29]/10 flex gap-4 items-start hover:shadow-md transition-shadow"
            >
              <div className="text-2xl sm:text-3xl flex-shrink-0">{b.icon}</div>
              <div>
                <h4 className="font-bold text-[#2D5016] text-sm sm:text-base mb-1">
                  {b.title}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {b.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={onButtonClick}
            className="py-5 px-10 bg-gradient-to-r from-[#4A7C29] to-[#2D5016] hover:brightness-110 text-white font-black text-lg rounded-xl shadow-[0_10px_20px_rgba(45,80,22,0.3)] transition-all flex items-center justify-center gap-2 mx-auto group"
          >
            <span>QUERO TUDO ISSO POR R$37</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValueBullets;
