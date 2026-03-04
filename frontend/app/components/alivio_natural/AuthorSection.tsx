"use client";

import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const credentials = [
  "Doutor em Genética e Melhoramento de Plantas",
  "Engenheiro Agrônomo",
  "Professor Universitário há 20+ anos",
  "Pesquisador em fitoquímica e compostos bioativos",
  "Autor de múltiplos guias de plantas medicinais",
];

const AuthorSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-[#D97706] text-sm font-bold uppercase tracking-widest mb-2">
            Sobre o Autor
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E2A10] leading-tight">
            Ciência sem filtro, linguagem sem barreira
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start bg-[#FBF7EF] rounded-2xl p-6 md:p-8 border border-[#D97706]/15">

          {/* Avatar / Foto */}
          <div className="flex flex-col items-center shrink-0">
            <div className="relative w-36 h-36 rounded-full overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/alivio_natural/professor.png"
                alt="Prof. Dr. Diogo Gonçalves Neder"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="mt-3 flex flex-wrap justify-center gap-1.5 max-w-40">
              {["PhD", "Prof. Dr.", "20+ anos"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] bg-[#4A7C29]/10 text-[#4A7C29] border border-[#4A7C29]/20 px-2 py-0.5 rounded-full font-bold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Texto */}
          <div>
            <h3 className="text-xl font-extrabold text-[#1E2A10] mb-1">
              Dr. Diogo Gonçalves Neder
            </h3>
            <p className="text-[#4A7C29] text-sm font-semibold mb-4">
              Doutor em Genética de Plantas • Professor Universitário
            </p>

            <div className="space-y-2 mb-4">
              {credentials.map((c) => (
                <div key={c} className="flex items-start gap-2 text-sm text-gray-700">
                  <FaCheckCircle className="text-[#4A7C29] mt-0.5 shrink-0" />
                  <span>{c}</span>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-[#D97706] pl-4 italic text-gray-600 text-sm leading-relaxed">
              &ldquo;Passei 20 anos estudando o que acontece dentro das plantas no
              nível molecular. Vi com frustração como pacientes tomavam
              anti-inflamatórios sem saber que existem alternativas naturais
              documentadas. E vi com igual frustração pessoas usando plantas
              de forma errada &mdash; sem dose, sem preparo correto, sem segurança.
              Este guia existe para fechar essa lacuna.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;