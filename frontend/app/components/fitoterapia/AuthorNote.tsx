"use client";

import React from "react";

const AuthorNote: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        {/* Headline */}
        <p className="text-gray-400 italic text-base sm:text-lg mb-6 text-center">
          Uma última palavra, de mim para você.
        </p>

        {/* Carta */}
        <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-5" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
          <p>
            Eu poderia ter mantido esse conhecimento dentro de artigos
            científicos e salas de aula. Durante 20 anos, foi exatamente isso que
            fiz.
          </p>
          <p>
            Mas quando eu olhava para a minha mãe fazendo chá sem tampa, para a
            minha esposa pesquisando plantas na internet e encontrando informação
            duvidosa, para os meus alunos confundindo boldo-do-chile com
            boldo-de-jardim — eu sabia que tinha uma responsabilidade.
          </p>
          <p className="font-semibold text-gray-800">
            O conhecimento que salva vidas não pode ficar trancado na academia.
          </p>
          <p>
            Este guia não vai curar nada. Eu nunca faria essa promessa. O que ele
            vai fazer é colocar nas suas mãos o mesmo conhecimento que eu uso com
            a minha família. Verificado, organizado e apresentado de uma forma
            que qualquer pessoa pode entender e aplicar.
          </p>
          <p>
            É o mínimo que um cientista de plantas deveria fazer pelo seu país.
          </p>
          <p>
            Espero que ele seja útil para você e para quem você ama.
          </p>
          <p className="text-gray-500">Com respeito,</p>
        </div>

        {/* Assinatura */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="font-bold text-gray-900 text-lg">
            Dr. Diogo Gonçalves Neder
          </p>
          <p className="text-gray-500 text-sm italic">
            Engenheiro Agrônomo · Doutor em Genética e Melhoramento de Plantas
          </p>
          <p className="text-gray-500 text-sm italic">
            Professor — Universidade Estadual da Paraíba
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthorNote;
