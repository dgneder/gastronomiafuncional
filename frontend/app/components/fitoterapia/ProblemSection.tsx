"use client";

import React from "react";
import { FaExclamationTriangle, FaTimesCircle, FaSearch, FaFlask, FaUserMd } from "react-icons/fa";

const problems = [
  {
    icon: <FaTimesCircle className="w-6 h-6 text-red-500" />,
    title: "O Perigo da Confusão",
    description: "Existem dois boldos completamente diferentes no Brasil — e usar o errado pode causar problemas sérios. Muitas plantas são visualmente idênticas, mas geneticamente diferentes."
  },
  {
    icon: <FaExclamationTriangle className="w-6 h-6 text-amber-500" />,
    title: "Dosagens de 'Achismo'",
    description: "A diferença entre o remédio e o veneno é a dose. Receitas de internet ignoram a concentração de ativos necessária para o efeito real."
  },
  {
    icon: <FaSearch className="w-6 h-6 text-blue-500" />,
    title: "Excesso de Informação Contraditória",
    description: "Um site diz que gengibre é bom para tudo. Outro diz que faz mal para o estômago. Um blog recomenda misturar sete ervas no mesmo chá. Como saber o que é ciência e o que é achismo?"
  },
  {
    icon: <FaFlask className="w-6 h-6 text-purple-500" />,
    title: "Interações Ocultas",
    description: "Muitas plantas anulam o efeito de remédios que você já toma — anticoagulantes, anticoncepcionais, antidiabéticos. Quase ninguém menciona esses riscos."
  }
];

const ProblemSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Abertura conversacional — cria identificação emocional */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            Você quer usar plantas medicinais, mas...
          </h2>
          <div className="text-lg text-gray-600 max-w-2xl mx-auto space-y-4 text-left sm:text-center leading-relaxed">
            <p>Já tentou pesquisar sobre plantas medicinais na internet?</p>
            <p>
              Então sabe como é: cada fonte diz uma coisa diferente. E o pior —
              quando a informação é errada sobre plantas medicinais, o risco não
              é só &ldquo;não funcionar&rdquo;.{" "}
              <strong>O risco é real.</strong>
            </p>
          </div>
        </div>

        {/* Cards de problemas — design novo mantido */}
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((item, index) => (
            <div 
              key={index} 
              className="p-6 rounded-2xl bg-[#FBF7EF] border border-[#4A7C29]/10 hover:border-[#4A7C29]/30 transition-all shadow-sm"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call-out de Autoridade */}
        <div className="mt-12 p-6 bg-red-50 rounded-2xl border border-red-100 flex items-start gap-4">
          <div className="p-3 bg-red-100 rounded-lg flex-shrink-0">
            <FaUserMd className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <p className="text-red-900 font-bold mb-1 text-sm sm:text-base">
              Aviso do Especialista:
            </p>
            <p className="text-red-800 text-sm leading-relaxed">
              &quot;Alho em dose alta junto com anticoagulante pode potencializar sangramento.
              Cavalinha todo dia sem acompanhamento pode causar perda de minerais essenciais.
              Equinácea é contraindicada para transplantados. São riscos reais que quase
              ninguém menciona — e que estão detalhados no Fitoterapia Essencial.&quot;
            </p>
          </div>
        </div>

        {/* Texto de transição */}
        <p className="mt-10 text-center text-gray-500 italic text-base sm:text-lg">
          Se você se identificou com alguma dessas situações,{" "}
          <strong className="text-gray-700 not-italic">
            este guia foi escrito pensando em você.
          </strong>
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;