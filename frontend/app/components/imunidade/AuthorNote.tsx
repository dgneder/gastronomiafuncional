"use client";

import React from "react";

const AuthorNote = () => {
  return (
    <section className="py-16 lg:py-20 px-4 bg-[#FBF7EF]">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Aspas decorativas */}
          <span className="absolute -top-8 -left-4 text-[#B8860B]/20 text-8xl font-serif select-none">
            &ldquo;
          </span>

          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#B8860B]/15 shadow-sm">
            <h3 className="text-xl font-extrabold text-gray-900 italic mb-6">
              Uma nota pessoal
            </h3>

            <div className="space-y-4 text-gray-600 italic text-base sm:text-lg leading-relaxed">
              <p>
                Eu escrevi este guia pensando na minha esposa, nos meus quatro
                filhos e nos meus pais.
              </p>
              <p>
                Pensando nas vezes em que a mudança de estação trouxe semanas de
                gripe. Nas noites acordado com filho doente, na dúvida entre dar
                ou não dar aquele chá que &quot;todo mundo recomenda&quot;.
              </p>
              <p>
                A ciência me deu as respostas. E eu decidi organizar tudo em um
                lugar — com a clareza que eu gostaria de ter encontrado quando
                comecei a procurar.
              </p>
              <p>
                Este guia não promete milagres. Promete informação honesta,
                testada, com dosagens reais e respeito pela sua inteligência. Se
                isso é o que você procura, vai encontrar aqui.
              </p>
              <p className="text-[#2D5016] font-bold not-italic">
                Cuide-se com ciência.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-[#2D5016] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                DG
              </div>
              <div>
                <p className="font-bold text-gray-900">
                  Dr. Diogo Gonçalves Neder
                </p>
                <p className="text-xs text-gray-500">
                  Doutor em Genética e Melhoramento de Plantas · @Agricultando
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorNote;
