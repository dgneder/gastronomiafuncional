"use client";

import React from "react";
import { FaGraduationCap, FaUniversity, FaMicroscope, FaBook, FaLeaf } from "react-icons/fa";

const credentials = [
  { icon: <FaGraduationCap />, text: "Doutor em Genética e Melhoramento de Plantas" },
  { icon: <FaUniversity />, text: "Professor Universitário (Agronomia e Agroecologia)" },
  { icon: <FaMicroscope />, text: "20+ anos em pesquisa com plantas" },
  { icon: <FaBook />, text: "Pesquisador em fitoquímica e estatística computacional" },
  { icon: <FaLeaf />, text: "Criador do @Agricultando" },
];

const AuthorSection = () => {
  return (
    <section className="py-16 lg:py-20 px-4 bg-[#FBF7EF]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Foto placeholder */}
          <div className="lg:w-2/5 flex-shrink-0">
            <div className="relative max-w-[320px] mx-auto">
              <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-[#2D5016] to-[#4A7C29] flex flex-col items-center justify-center shadow-2xl border-4 border-white overflow-hidden">
                <div className="text-7xl mb-2">👨‍🔬</div>
                <p className="text-white font-bold text-lg">Dr. Diogo</p>
                <p className="text-white/70 text-xs">Gonçalves Neder</p>
              </div>
              {/* Badge de credencial */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-3 border border-[#4A7C29]/20">
                <span className="text-[#2D5016] font-black text-sm">PhD</span>
                <span className="text-gray-500 text-[10px] block">Genética Vegetal</span>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="lg:w-3/5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
              Quem está por trás deste guia
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Meu nome é <strong>Dr. Diogo Gonçalves Neder</strong>. Sou Doutor
              em Genética e Melhoramento de Plantas pela Universidade Estadual da
              Paraíba e Professor Universitário de Agronomia e Agroecologia.
            </p>

            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Passo meus dias entre laboratórios de pesquisa, salas de aula e a
              literatura científica — com mais de 20 anos de experiência em
              genética vegetal, fitoquímica, processos fermentativos e
              bioestatística.
            </p>

            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Mas este guia não nasceu da academia.{" "}
              <strong>Nasceu da minha cozinha.</strong> Quando percebi que a
              mesma ciência que eu usava em pesquisas de melhoramento genético
              podia me ajudar a proteger a saúde da minha família com plantas
              medicinais, comecei a estudar sistematicamente. Li centenas de
              artigos, meta-análises e revisões Cochrane. Separei o que realmente
              tem evidência do que é apenas folclore repetido.
            </p>

            {/* Quote */}
            <div className="bg-[#2D5016]/5 border-l-4 border-[#B8860B] rounded-r-xl p-5 mb-6">
              <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed">
                &quot;Eu sou um cientista que foi para a cozinha. E descobri que a
                ciência das plantas medicinais é tão rigorosa quanto qualquer
                outra área da farmacologia — quando você tem acesso à informação
                certa.&quot;
              </p>
              <p className="text-[#2D5016] font-bold text-sm mt-3">
                — Dr. Diogo Gonçalves Neder
              </p>
            </div>

            {/* Credenciais */}
            <div className="flex flex-wrap gap-2">
              {credentials.map((cred, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 bg-white border border-[#4A7C29]/15 rounded-full px-3 py-1.5 text-xs text-gray-700 font-medium"
                >
                  <span className="text-[#4A7C29]">{cred.icon}</span>
                  {cred.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
