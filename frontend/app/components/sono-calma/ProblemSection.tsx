"use client";

import React from "react";
import { FaTimesCircle } from "react-icons/fa";

const ProblemSection = () => {
  return (
    <section className="py-16 lg:py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Headline de pattern interrupt */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 text-center mb-8 leading-tight">
          3h da madrugada.{" "}
          <span className="text-[#B8860B]">Você está acordada de novo.</span>
        </h2>

        {/* Texto empático */}
        <div className="max-w-3xl mx-auto space-y-5 text-gray-600 text-base sm:text-lg leading-relaxed mb-12 text-center">
          <p>
            O corpo está exausto, mas a mente não desliga. Os pensamentos se
            atropelam. Amanhã tem trabalho, tem as crianças, tem tudo — e você
            sabe que vai enfrentar o dia destruída.
          </p>
          <p>
            Você já tentou chá de camomila. Já contou ovelhas. Já baixou app de
            meditação. Talvez até tenha tomado um &quot;calmante natural&quot; que
            alguém indicou. Nada funciona de verdade.
          </p>
          <p className="text-gray-800 font-semibold">
            E o pior: quando você pesquisa na internet, encontra dois caminhos
            igualmente frustrantes.
          </p>
        </div>

        {/* Dois cards de caminhos errados */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {/* Card 1 — Automedicação */}
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <FaTimesCircle className="text-red-400 text-xl flex-shrink-0" />
              <h3 className="font-bold text-gray-900 text-lg">
                O caminho da automedicação
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              &quot;Toma valeriana&quot;, &quot;mistura com passiflora&quot;,
              &quot;coloca lavanda no travesseiro&quot;. Receitas genéricas sem
              dosagem, sem explicação de por que funciona, sem alerta sobre
              contraindicações. Você toma e... nada acontece. Ou pior: tem efeito
              contrário.
            </p>
          </div>

          {/* Card 2 — Medicalização */}
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <FaTimesCircle className="text-amber-500 text-xl flex-shrink-0" />
              <h3 className="font-bold text-gray-900 text-lg">
                O caminho da medicalização imediata
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              O médico prescreve clonazepam, zolpidem, ou um antidepressivo.
              Funciona no curto prazo, mas em 3 meses você está dependente de
              algo que era &quot;temporário&quot;. E agora tem medo de parar.
            </p>
          </div>
        </div>

        {/* Texto de transição */}
        <p className="text-center text-lg sm:text-xl text-[#2D5016] font-semibold italic max-w-2xl mx-auto">
          Existe um terceiro caminho. Um caminho onde plantas medicinais
          funcionam — mas funcionam porque você sabe exatamente o que está
          fazendo.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
