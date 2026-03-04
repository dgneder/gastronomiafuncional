"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface Protocol {
  num: string;
  title: string;
  for: string;
  desc: string;
  plants: string[];
  color: string;
  border: string;
  badge: string;
}

const protocols: Protocol[] = [
  {
    num: "01",
    title: "Protocolo Articulações",
    for: "Artrite • Artrose • Tendinite",
    desc: "Combinação de plantas anti-inflamatórias de ação central e suporte à regeneração articular, com cronograma de 4 semanas.",
    plants: ["Boswellia", "Cúrcuma", "Gengibre"],
    color: "bg-amber-50",
    border: "border-amber-400",
    badge: "bg-amber-100 text-amber-800",
  },
  {
    num: "02",
    title: "Protocolo Lombar",
    for: "Lombalgia crônica • Dor nas costas",
    desc: "Foco em anti-inflamatórios sistêmicos + relaxamento muscular. Inclui abordagem tópica e oral sincronizada.",
    plants: ["Salgueiro Branco", "Capsaicina", "Alecrim"],
    color: "bg-blue-50",
    border: "border-blue-400",
    badge: "bg-blue-100 text-blue-800",
  },
  {
    num: "03",
    title: "Protocolo Enxaqueca",
    for: "Enxaqueca • Cefaleia tensional",
    desc: "Estratégia de prevenção (uso contínuo) + manejo da crise aguda. Com plantas de ação vascular e neurológica.",
    plants: ["Lavanda", "Hortelã", "Gengibre"],
    color: "bg-purple-50",
    border: "border-purple-400",
    badge: "bg-purple-100 text-purple-800",
  },
  {
    num: "04",
    title: "Protocolo Fibromialgia",
    for: "Dor difusa crônica • Sensibilização central",
    desc: "Abordagem multimodal focada em redução da neuroinflamação e melhora do sono, com ciclos de uso e pausa.",
    plants: ["Ashwagandha", "Cúrcuma", "Lavanda"],
    color: "bg-rose-50",
    border: "border-rose-400",
    badge: "bg-rose-100 text-rose-800",
  },
  {
    num: "05",
    title: "Protocolo Dor Aguda",
    for: "Pronto-socorro natural",
    desc: "Para contusões, entorses e crises de dor aguda. Uso combinado de compressas, óleos e tinturas para alívio imediato.",
    plants: ["Arnica", "Hortelã", "Capsaicina"],
    color: "bg-green-50",
    border: "border-green-500",
    badge: "bg-green-100 text-green-800",
  },
  {
    num: "06",
    title: "Protocolo Manutenção",
    for: "Prevenção da inflamação crônica",
    desc: "Rotina diária anti-inflamatória para quem quer manter a saúde articular e prevenir crises antes que apareçam.",
    plants: ["Gengibre", "Cúrcuma", "Urtiga"],
    color: "bg-orange-50",
    border: "border-orange-400",
    badge: "bg-orange-100 text-orange-800",
  },
];

interface ProtocolsSectionProps {
  onButtonClick: () => void;
}

const ProtocolsSection: React.FC<ProtocolsSectionProps> = ({ onButtonClick }) => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-[#D97706] text-sm font-bold uppercase tracking-widest mb-2">
            O Diferencial do Guia
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E2A10] leading-tight mb-3">
            6 protocolos prontos —{" "}
            <span className="text-[#4A7C29]">você escolhe o seu</span>
          </h2>
          <p className="text-gray-600 text-base max-w-xl mx-auto">
            Saber que a cúrcuma é anti-inflamatória é uma coisa. Saber exatamente
            como usá-la, em que dose e com o que combinar para o SEU tipo de dor
            é outra. É isso que cada protocolo entrega.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {protocols.map(({ num, title, for: forText, desc, plants, color, border, badge }) => (
            <div
              key={num}
              className={`${color} border-l-4 ${border} rounded-r-2xl p-5 hover:shadow-md transition-shadow`}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-xs font-black text-gray-400 tracking-widest">{num}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${badge}`}>
                  {forText.split(" • ")[0]}
                </span>
              </div>
              <h3 className="font-extrabold text-[#1E2A10] text-base mb-1">{title}</h3>
              <p className="text-[11px] font-semibold text-gray-500 mb-2">{forText}</p>
              <p className="text-gray-600 text-xs leading-relaxed mb-3">{desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {plants.map((p) => (
                  <span key={p} className="text-[10px] bg-white/70 border border-gray-200 px-2 py-0.5 rounded-full text-gray-600 font-medium">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={onButtonClick}
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-[#4A7C29] to-[#2D5016] text-white font-bold rounded-full shadow-lg hover:brightness-110 transition-all hover:scale-[1.02]"
          >
            QUERO TODOS OS 6 PROTOCOLOS <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProtocolsSection;
