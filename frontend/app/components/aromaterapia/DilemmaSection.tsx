"use client";

import React from "react";

const DilemmaSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-[#F2F8ED]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 text-center mb-4 leading-tight">
          O problema com a aromaterapia no Brasil
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Quando você pesquisa aromaterapia, encontra dois extremos:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Card Esotérico */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
            <div className="text-4xl mb-4 opacity-50">🔮</div>
            <h3 className="font-black text-gray-900 text-lg mb-3">
              &quot;Aromaterapia vibracional&quot;
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Chakras, cristais, energia cósmica, vibrações. Nenhuma explicação
              de mecanismo de ação. Nenhuma referência científica. Muito
              sentimento, pouca farmacologia. Se você pergunta &quot;mas por que
              funciona?&quot;, a resposta é &quot;porque a energia da planta se conecta
              com a sua energia&quot;.
            </p>
          </div>

          {/* Card Superficial */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
            <div className="text-4xl mb-4 opacity-50">📸</div>
            <h3 className="font-black text-gray-900 text-lg mb-3">
              &quot;Lifestyle bonito, ciência zero&quot;
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Difusor na mesa, foto estética, legendas genéricas. &quot;Lavanda:
              relaxante. Hortelã: energizante.&quot; Sem explicar dose, sem mencionar
              contraindicação, sem diferenciar eucalipto globulus de radiata.
              Quando pergunta &quot;posso usar no meu bebê?&quot;, a resposta é &quot;é
              natural, pode&quot;.
            </p>
          </div>
        </div>

        {/* Terceiro Caminho */}
        <div className="max-w-lg mx-auto bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#4A7C29] shadow-lg text-center">
          <h3 className="font-black text-[#2D5016] text-xl mb-4">
            Existe um terceiro caminho.
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Um caminho onde a aromaterapia é explicada pela bioquímica. Onde cada
            recomendação tem referência publicada. Onde você entende o{" "}
            <em>mecanismo molecular</em> que faz a lavanda relaxar e o alecrim
            melhorar a memória. Sem misticismo. Sem promessas vazias. Só ciência
            aplicada em linguagem simples.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DilemmaSection;
