"use client";

import Image from "next/image";
import React from "react";

const moments = [
  {
    image: "/doce-sem-culpa/gallery/mousse_colher.png",
    sensory: "A primeira colherada.",
    copy: "Textura aveludada que desmancha sem derreter, doçura calibrada que não agride, amargor do cacau 70% que aparece como assinatura no final. Não é 'aceitável pra quem está de dieta'. É bom por direito próprio.",
    badge: "Mousse de Chocolate · SG · DIA",
    color: "#8B2252",
  },
  {
    image: "/doce-sem-culpa/gallery/bolo_corte.png",
    sensory: "O corte que revela o miolo.",
    copy: "Bolo que não desmonta. Umidade preservada por ingredientes funcionais — tâmaras, purês, proteína vegetal — não por açúcar e gordura hidrogenada. Abre alveolado, com brilho natural. Rende fatia firme.",
    badge: "Bolo Funcional · SG · LC",
    color: "#6B1A3F",
  },
  {
    image: "/doce-sem-culpa/gallery/picole_frutas.png",
    sensory: "A cor que vem das frutas de verdade.",
    copy: "Antocianinas do morango, ácido elágico das frutas vermelhas, mangiferina da manga. O pigmento que colore o picolé é o mesmo que o estudo científico identifica como antioxidante. Beleza com função.",
    badge: "Picolé Funcional · VEG · ANTIOX",
    color: "#5B8B7D",
  },
  {
    image: "/doce-sem-culpa/gallery/brigadeiro_gourmet.png",
    sensory: "O brigadeiro que a família não percebe.",
    copy: "Cremosidade idêntica ao tradicional. Sabor indistinguível. Mas sem leite condensado, sem açúcar refinado, com bioativos reais. Você faz. A família come. Ninguém pergunta se é saudável — porque não parece.",
    badge: "Brigadeiro Funcional · KIDS · LC",
    color: "#D4A04A",
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
          <p className="text-sm uppercase tracking-widest font-semibold mb-3" style={{ color: "#8B2252" }}>
            Funcional não significa sem prazer
          </p>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-stone-800 leading-tight mb-4">
            Sobremesa que cuida da saúde{" "}
            <span style={{ color: "#8B2252" }}>pode — e deve — ser irresistível.</span>
          </h2>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto leading-relaxed">
            A ciência dos alimentos funcionais não sacrifica o prazer. Ela o aperfeiçoa.
            Cada receita foi desenvolvida para entregar textura, aroma e sabor reais —
            com os bioativos que seu corpo precisa.
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
                  sizes="(max-width: 768px) 100vw, 50vw"
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
          style={{ background: "linear-gradient(135deg, #FBF5E8, #F5E6D0)" }}
          data-aos="fade-up"
        >
          <p className="text-sm uppercase tracking-widest font-bold mb-6 text-center" style={{ color: "#8B2252" }}>
            Este kit foi criado para você se...
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "🌙", text: "Ataca o armário depois das 22h e quer parar sem 'força de vontade'" },
              { icon: "🩺", text: "Tem diabetes, pré-diabetes ou resistência à insulina" },
              { icon: "👶", text: "É mãe e quer dar doce ao filho sem culpa nem rótulo aprovado" },
              { icon: "💰", text: "Quer renda extra vendendo doces funcionais a partir de R$2/custo" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white/70 backdrop-blur-sm rounded-xl p-4 border"
                style={{ borderColor: "#D4A04A30" }}
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
