"use client";

import React from "react";
import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";

const AuthorSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-[#F2F8ED]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 text-center mb-10 leading-tight">
          Quem escreveu este guia
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Foto do Autor */}
          <div className="lg:w-2/5 flex flex-col items-center">
            <div className="relative w-56 h-72 sm:w-64 sm:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/aromaterapia/author.jpeg"
                alt="Dr. Diogo Gonçalves Neder — Doutor em Genética de Plantas"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 inline-flex items-center gap-2 bg-[#2D5016] text-white px-4 py-2 rounded-full text-xs font-bold">
              <FaGraduationCap />
              Doutor em Genética e Melhoramento de Plantas
            </div>
          </div>

          {/* Texto do Autor */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <h3 className="font-black text-[#2D5016] text-2xl mb-4">
              Dr. Diogo Gonçalves Neder
            </h3>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                Engenheiro Agrônomo. Mestre e Doutor em Genética e Melhoramento
                de Plantas. Professor universitário na Universidade Estadual da
                Paraíba. Pesquisador há mais de 20 anos.
              </p>
              <p>
                Meu doutorado é literalmente sobre plantas — sobre os genes que
                controlam os compostos que elas produzem. Óleos essenciais são
                metabólitos secundários voláteis: terpenos, terpenóides,
                fenilpropanóides. É o que eu estudo.
              </p>
              <p>
                Quando comecei a perceber como o mercado de aromaterapia no Brasil
                era dominado por informação superficial ou esotérica, decidi fazer
                o que eu deveria ter feito há anos: pegar tudo que eu sei e
                transformar em algo que qualquer pessoa pudesse abrir, entender e
                usar.
              </p>
              <p>
                Escrevi o Aromaterapia Essencial pensando na minha própria família
                — minha esposa, meus 4 filhos, nossos pets. Quero que você tenha o
                mesmo nível de segurança e conhecimento.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mt-6 justify-center lg:justify-start">
              {[
                "🏫 Professor universitário",
                "📖 20+ anos de pesquisa",
                "🧬 Especialista em metabólitos",
                "👨‍👩‍👧‍👦 Pai de 4",
              ].map((badge, i) => (
                <span
                  key={i}
                  className="bg-white border border-gray-200 rounded-full px-3 py-1 text-xs text-[#2D5016] font-semibold"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
