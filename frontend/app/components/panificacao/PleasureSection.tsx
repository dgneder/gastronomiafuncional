"use client";

import Image from "next/image";
import React from "react";

const moments = [
  {
    image: "/panificacao/gallery/pao_lento.png",
    sensory: "A crosta que estalinha.",
    copy: "O som da crosta quebrando na primeira mordida. A textura crocante por fora, que cede para um miolo macio e alveolado por dentro. Isso não é sorte — é fermentação lenta e ciência aplicada.",
    badge: "Sourdough · Fermentação 48h",
    color: "#6B3A2A",
  },
  {
    image: "/panificacao/gallery/forma_02.png",
    sensory: "O miolo que afunda e volta.",
    copy: "Pressione com o dedo. Um pão funcional de verdade deve afundar e recuperar a forma. Sem goma xantana em excesso, sem truques. Só psyllium, hidratação correta e a ciência dos estruturantes.",
    badge: "Pão de Forma · SG · SL",
    color: "#5B7B6D",
  },
  {
    image: "/panificacao/gallery/focaccia_02.png",
    sensory: "O cheiro que invade a casa.",
    copy: "A reação de Maillard que cria a crosta dourada também cria o aroma mais irresistível que existe. Quando seu pão funcional sair do forno, ninguém vai acreditar que é sem glúten.",
    badge: "Focaccia · ANTI-INF · VEG",
    color: "#C4622D",
  },
  {
    image: "/panificacao/gallery/hamburguer_02.png",
    sensory: "O sabor que você sentiu falta.",
    copy: "Não de farinha de arroz crua. Não de papel. De pão de verdade — com complexidade de sabor que vem da fermentação, com o dulçor natural das farinhas funcionais. Gosto que fica.",
    badge: "Hambúrguer · IG 42 · SG",
    color: "#8B5A3C",
  },
];

const PleasureSection: React.FC = () => {
  return (
    <section
      className="py-20 px-6 lg:px-12"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #FFF8F0 100%)" }}
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header emocional */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest font-semibold mb-3" style={{ color: "#C4622D" }}>
            Funcional não significa sem prazer
          </p>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-stone-800 leading-tight mb-4">
            Pão que é bom para você{" "}
            <span style={{ color: "#6B3A2A" }}>pode — e deve — ser irresistível.</span>
          </h2>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto leading-relaxed">
            A ciência da panificação funcional não sacrifica o prazer. Ela o aperfeiçoa.
            Cada receita foi desenvolvida para entregar textura, aroma e sabor reais —
            com os benefícios que seu corpo precisa.
          </p>
        </div>

        {/* Cards sensoriais */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {moments.map((m, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-white border border-stone-100"
            >
              {/* Imagem */}
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={m.image}
                  alt={m.sensory}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-stone-900/70 via-stone-900/20 to-transparent" />
                {/* Sensory headline sobre a imagem */}
                <div className="absolute bottom-4 left-5 right-5">
                  <p className="text-white text-2xl font-extrabold drop-shadow-lg leading-tight">
                    {m.sensory}
                  </p>
                </div>
                {/* Badge funcional */}
                <div className="absolute top-4 right-4">
                  <span
                    className="text-[11px] font-bold px-3 py-1.5 rounded-full text-white shadow-lg"
                    style={{ backgroundColor: m.color + "CC" }}
                  >
                    {m.badge}
                  </span>
                </div>
              </div>

              {/* Copy */}
              <div className="p-6">
                <p className="text-stone-500 leading-relaxed text-[15px]">
                  {m.copy}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quem é este guia */}
        <div
          className="rounded-2xl p-8 lg:p-10"
          style={{ background: "linear-gradient(135deg, #FAF3E8, #F5E6CC)" }}
          data-aos="fade-up"
        >
          <p className="text-sm uppercase tracking-widest font-bold mb-6 text-center" style={{ color: "#C4622D" }}>
            Este guia foi criado para você se...
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "💙", text: "Tem diabetes ou resistência à insulina e precisa controlar a glicemia" },
              { icon: "🌿", text: "É celíaco ou sensível ao glúten e quer pão de verdade, não de isopor" },
              { icon: "🧡", text: "Quer comer mais saudável sem abrir mão do prazer à mesa" },
              { icon: "🍞", text: "Já tentou receitas da internet e ficou frustrado com o resultado" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-amber-100"
              >
                <span className="text-2xl shrink-0">{item.icon}</span>
                <p className="text-stone-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PleasureSection;
