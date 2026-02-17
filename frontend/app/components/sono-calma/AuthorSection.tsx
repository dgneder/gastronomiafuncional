"use client";

import React from "react";
import Image from "next/image";
import { FaGraduationCap, FaChalkboardTeacher, FaFlask, FaInstagram } from "react-icons/fa";

const badges = [
  { icon: FaGraduationCap, text: "Doutor em Genética de Plantas" },
  { icon: FaChalkboardTeacher, text: "Professor Universitário" },
  { icon: FaFlask, text: "Pesquisador em Fitoquímica" },
  { icon: FaInstagram, text: "@Agricultando" },
];

const AuthorSection = () => {
  return (
    <section className="py-16 lg:py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-14">
          {/* Foto do autor */}
          <div className="lg:w-2/5 flex-shrink-0">
            <div className="relative max-w-[300px] mx-auto">
              <div className="absolute inset-0 bg-[#4A7C29]/15 rounded-full blur-[50px]" />
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                {/* TODO: Substituir por foto profissional */}
                <Image
                  src="/sono-calma/autor.jpeg"
                  alt="Dr. Diogo Gonçalves Neder"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <div className="inline-block px-4 py-1 bg-[#4A7C29]/10 rounded-full mb-4">
              <span className="text-[#2D5016] text-xs font-bold uppercase tracking-widest">
                Quem Escreveu
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
              Dr. Diogo Gonçalves Neder
            </h2>

            <div className="space-y-4 text-gray-600 text-base leading-relaxed mb-8">
              <p>
                Doutor em Genética e Melhoramento de Plantas. Professor
                universitário de Agronomia e Agroecologia. Pesquisador em
                fitoquímica e processos fermentativos.
              </p>
              <p>
                Estudo plantas no nível molecular — como produzem seus compostos
                ativos, como esses compostos interagem com o corpo humano, e como
                extraí-los corretamente para uso terapêutico.
              </p>
              <p className="text-gray-700 italic border-l-4 border-[#B8860B] pl-4">
                &quot;Esse e-book nasceu da intersecção entre minha formação
                acadêmica e minha experiência pessoal como pai de 4 filhos que,
                como todo pai, já passou noites demais sem dormir e dias demais
                ansioso. Não escrevi como quem vende — escrevi como quem usa.&quot;
              </p>
            </div>

            {/* Badges de autoridade */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {badges.map((badge, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 px-3 py-2 bg-[#FBF7EF] rounded-lg border border-[#B8860B]/10"
                >
                  <badge.icon className="text-[#4A7C29] text-xs" />
                  <span className="text-xs text-gray-700 font-medium">{badge.text}</span>
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
