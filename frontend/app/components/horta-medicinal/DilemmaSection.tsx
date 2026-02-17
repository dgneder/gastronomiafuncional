"use client";

import React from "react";

const DilemmaSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-[#F2F8ED]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 text-center mb-4 leading-tight">
          Quando você pesquisa &quot;horta medicinal&quot;, encontra dois
          caminhos
        </h2>
        <p className="text-center text-gray-600 mb-10">
          E nenhum dos dois resolve o seu problema:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Card YouTube/Blogs */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
            <div className="text-4xl mb-4 opacity-50">📱</div>
            <h3 className="font-black text-gray-900 text-lg mb-3">
              O caminho do YouTube e dos blogs
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Conteúdo genérico, contraditório, sem base científica. Cada vídeo
              diz uma coisa diferente. Nenhum explica o porquê. Você tenta, a
              planta morre, e desiste. Quando sobrevive, você não sabe se o chá
              que preparou tem algum efeito.
            </p>
          </div>

          {/* Card Livros Técnicos */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
            <div className="text-4xl mb-4 opacity-50">📖</div>
            <h3 className="font-black text-gray-900 text-lg mb-3">
              O caminho dos livros técnicos
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Livros de agronomia com 600+ páginas, linguagem acadêmica, sem
              aplicação prática para quem tem uma varanda ou um quintal pequeno.
              Precisa de diploma para entender. E quando entende, não sabe como
              aplicar na varanda.
            </p>
          </div>
        </div>

        {/* Terceiro Caminho */}
        <div className="max-w-lg mx-auto bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#2E7D32] shadow-lg text-center">
          <h3 className="font-black text-[#1B5E20] text-xl mb-4">
            Existe um terceiro caminho.
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Um guia escrito por um cientista que sabe tudo sobre plantas — mas
            que fala como gente normal. Com fichas práticas, calendários visuais
            e passo a passo que qualquer pessoa consegue seguir. Mesmo sem
            quintal. Mesmo sem experiência.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DilemmaSection;
