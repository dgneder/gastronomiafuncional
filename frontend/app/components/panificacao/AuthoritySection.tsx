"use client";

import Image from "next/image";
import React from "react";
import { FaGraduationCap, FaMicroscope, FaHeartbeat, FaFlask } from "react-icons/fa";

const credentials = [
  { icon: FaGraduationCap, text: "Doutor em Genética e Melhoramento de Plantas" },
  { icon: FaFlask,         text: "Pesquisador em Ciência e Tecnologia de Alimentos" },
  { icon: FaMicroscope,    text: "Especialista em leveduras e fermentação" },
  { icon: FaHeartbeat,     text: "Convive com doença renal, diabetes e hipertensão" },
];

const AuthoritySection: React.FC = () => {
  return (
    <section
      className="py-20 px-6 lg:px-12"
      style={{ background: "linear-gradient(180deg, #FAF3E8 0%, #F5E6CC 100%)" }}
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto lg:flex lg:items-center lg:gap-16">

        {/* Foto do autor */}
        <div className="lg:w-5/12 mb-10 lg:mb-0 flex justify-center" data-aos="fade-right">
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-2xl"
              style={{ background: "linear-gradient(135deg, #D4A04A20, #6B3A2A20)" }}
            />
            <div className="relative w-72 h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/panificacao/professor.png"
                alt="Prof. Dr. Diogo Gonçalves Neder"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-lg px-5 py-3 border border-amber-100">
              <p className="text-xs text-stone-400 uppercase tracking-wide">Autor</p>
              <p className="font-bold text-stone-800 text-sm">Prof. Dr. Diogo Neder</p>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="lg:w-7/12 space-y-6" data-aos="fade-left">
          <p className="text-sm uppercase tracking-widest font-semibold" style={{ color: "#C4622D" }}>
            Quem criou este guia
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-stone-800 leading-tight">
            Um cientista que pesquisa leveduras —{" "}
            <span style={{ color: "#6B3A2A" }}>e que precisa cuidar da própria saúde</span>
          </h2>

          <p className="text-stone-600 text-lg leading-relaxed">
            Como Doutor em Genética, passei anos estudando ao microscópio as leveduras
            que fazem o pão existir. Esse caminho me levou naturalmente à ciência e
            tecnologia de alimentos — e foi convivendo com doença renal, diabetes e
            hipertensão que entendi: a panificação funcional não é modismo. É necessidade.
          </p>

          <p className="text-stone-600 leading-relaxed">
            Este livro nasceu dessa interseção: de quem entende, no nível molecular,
            o que acontece dentro de uma massa — e de quem precisa que esse pão
            cuide do corpo enquanto alimenta a alma.
          </p>

          {/* Credenciais */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
            {credentials.map((cred, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-lg px-4 py-3 shadow-sm"
              >
                <cred.icon className="text-amber-700 text-lg shrink-0" />
                <span className="text-sm text-stone-700 font-medium">{cred.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AuthoritySection;