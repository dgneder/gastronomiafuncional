"use client";

import React from "react";
import { FaUsers, FaStar, FaBookOpen, FaShieldAlt } from "react-icons/fa";

const stats = [
  { icon: FaStar,      value: "4.9",    label: "Avaliação média",           suffix: "/5" },
  { icon: FaBookOpen,  value: "500+",   label: "Receitas únicas",           suffix: "" },
  { icon: FaUsers,     value: "2.000+", label: "Alunos satisfeitos",        suffix: "" },
  { icon: FaShieldAlt, value: "15",     label: "Módulos na plataforma",     suffix: "" },
];

const SocialProofSection: React.FC = () => {
  return (
    <section
      className="py-20 px-6 lg:px-12"
      style={{ background: "linear-gradient(180deg, #FBF5E8, #F5E6D0)" }}
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center bg-white rounded-xl p-6 shadow-sm border border-stone-100"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <stat.icon className="text-2xl mx-auto mb-3" style={{ color: "#D4A04A" }} />
              <p className="text-3xl font-extrabold text-stone-800">
                {stat.value}<span className="text-lg text-stone-400">{stat.suffix}</span>
              </p>
              <p className="text-sm text-stone-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-widest font-semibold mb-3" style={{ color: "#8B2252" }}>
            Histórias reais
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-stone-800">
            Mais de 2.000 famílias já transformaram{" "}
            <span style={{ color: "#8B2252" }}>sua relação com doce</span>
          </h2>
          <p className="text-lg text-stone-500 mt-4 max-w-2xl mx-auto">
            Ouça as histórias reais — cada depoimento foi gravado por quem comprou, usou e viveu a transformação.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
