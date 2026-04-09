"use client";

import React from "react";

const pillars = [
  { icon: "🧪", title: "Cap. 1 — A Química do Doce Funcional", desc: "Como açúcares, gorduras e proteínas interagem — e por que substituições falham sem esta base." },
  { icon: "📊", title: "Cap. 2 — Ingredientes Funcionais", desc: "12 adoçantes, 14 farinhas, 7 gorduras, 15 superingredientes — cada um com IG, preço e ciência." },
  { icon: "⚗️", title: "Cap. 3 — Técnicas e Equipamentos", desc: "As técnicas que transformam ingredientes simples em sobremesas com textura de confeitaria." },
  { icon: "📋", title: "Cap. 4 — Protocolos e Cardápios", desc: "7 protocolos semanais prontos por condição: controle glicêmico, anti-inflamatório, detox." },
];

const ScienceTransition: React.FC = () => (
  <section className="py-16 px-6 lg:px-12 bg-gray-950" data-aos="fade-up">
    <div className="max-w-5xl mx-auto text-center">
      <p className="text-xs uppercase tracking-widest font-bold mb-3" style={{ color: "#D4A04A" }}>
        O que diferencia este guia de qualquer ebook de receitas
      </p>
      <h2
        className="text-2xl lg:text-3xl font-extrabold text-white leading-tight mb-4"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        O Doce Sem Culpa não começa pelas receitas.<br />
        <span style={{ color: "#D4A04A" }}>Começa pela ciência que faz elas funcionarem.</span>
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-12">
        4 capítulos de fundamentos antes da primeira receita. Porque entender o porquê transforma a forma como você cozinha — para sempre.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 text-left">
        {pillars.map((p, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-amber-500/30 transition-all"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <div className="flex items-start gap-4">
              <span className="text-2xl shrink-0">{p.icon}</span>
              <div>
                <h3 className="font-bold text-white text-sm mb-1">{p.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{p.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-gray-500 text-sm mt-8">
        73 referências de periódicos como <span className="text-gray-300 font-semibold">Nature</span>,{" "}
        <span className="text-gray-300 font-semibold">The Lancet</span> e{" "}
        <span className="text-gray-300 font-semibold">PNAS</span>.
      </p>
    </div>
  </section>
);

export default ScienceTransition;
