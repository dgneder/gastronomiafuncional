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
                src="/horta-medicinal/author.jpeg"
                alt="Dr. Diogo Gonçalves Neder — Doutor em Genética de Plantas"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 inline-flex items-center gap-2 bg-[#1B5E20] text-white px-4 py-2 rounded-full text-xs font-bold">
              <FaGraduationCap />
              Doutor em Genética e Melhoramento de Plantas
            </div>
          </div>

          {/* Texto do Autor */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <h3 className="font-black text-[#1B5E20] text-2xl mb-4">
              Dr. Diogo Gonçalves Neder
            </h3>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                Engenheiro Agrônomo. Mestre e Doutor em Genética e Melhoramento
                de Plantas pela Universidade Estadual da Paraíba. Professor
                universitário há mais de 20 anos. Pesquisador com projetos de
                cultivo medicinal financiados por agências federais.
              </p>
              <p>
                Meu doutorado é literalmente sobre plantas — sobre os genes que
                controlam os compostos que elas produzem. Quando vejo alguém
                cultivando ervas medicinais sem saber o básico de manejo, colheita
                e conservação, sei que essa planta não vai entregar o que promete.
              </p>
              <p>
                Escrevi o Horta Medicinal em Casa para devolver às famílias
                brasileiras o conhecimento que nossas avós tinham — agora com
                respaldo da ciência moderna. Cada ficha de cultivo, cada
                calendário, cada método de secagem foi validado pela minha
                experiência de mais de duas décadas com plantas.
              </p>
              <p>
                Pensei na minha própria família — minha esposa, meus 4 filhos.
                Quero que você tenha o mesmo nível de segurança e conhecimento
                que eu dou à minha horta.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mt-6 justify-center lg:justify-start">
              {[
                "🏫 Professor universitário",
                "📖 20+ anos de pesquisa",
                "🌱 Especialista em cultivo medicinal",
                "👨‍👩‍👧‍👦 Pai de 4",
              ].map((badge, i) => (
                <span
                  key={i}
                  className="bg-white border border-gray-200 rounded-full px-3 py-1 text-xs text-[#1B5E20] font-semibold"
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
