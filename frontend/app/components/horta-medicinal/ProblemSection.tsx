"use client";

import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const alerts = [
  {
    borderColor: "border-red-400",
    bgColor: "bg-red-50",
    title: '"Colha quando quiser" — ERRADO.',
    text: "Colher no momento errado pode reduzir os compostos ativos da planta em até 80%. Cada espécie tem um ponto exato de colheita — e o horário do dia importa.",
  },
  {
    borderColor: "border-[#F9A825]",
    bgColor: "bg-[#FFF8E7]",
    title: '"É só jogar semente na terra" — ERRADO.',
    text: "Cada planta medicinal tem exigências específicas de substrato, luminosidade, irrigação e propagação. Hortelã se propaga por estacas. Camomila precisa de sol pleno. Valeriana exige solo úmido.",
  },
  {
    borderColor: "border-[#F9A825]",
    bgColor: "bg-[#FFF8E7]",
    title: '"Secar é só pendurar" — INCOMPLETO.',
    text: "A secagem errada destrói os compostos terapêuticos. Existem 4 métodos diferentes e cada planta exige uma abordagem específica — incluindo um secador caseiro que você monta com R$30.",
  },
];

const ProblemSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 text-center mb-8 leading-tight">
          Você quer cultivar plantas medicinais.{" "}
          <span className="text-[#2E7D32]">Mas está confusa.</span>
        </h2>

        <div className="text-gray-600 leading-relaxed mb-6 space-y-4">
          <p>
            Você já tentou plantar hortelã no vaso da janela. Comprou um kit de
            sementes. Assistiu uns vídeos no YouTube. E mesmo assim a planta
            morreu.
          </p>
          <p>Ou pior: cresceu bonita, mas você não sabe se funciona.</p>
          <p className="font-bold text-gray-900">
            Porque a verdade é que a maioria das pessoas repete 3 erros que
            destroem o potencial medicinal das plantas:
          </p>
        </div>

        <div className="space-y-3 mb-8">
          {alerts.map((alert, i) => (
            <div
              key={i}
              className={`${alert.bgColor} border-l-4 ${alert.borderColor} p-4 sm:p-5 rounded-r-xl`}
            >
              <div className="flex items-start gap-3">
                <FaExclamationTriangle className="text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                  <strong>{alert.title}</strong> {alert.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-gray-600 leading-relaxed space-y-4">
          <p>
            A diferença entre planta que funciona e planta que não funciona quase
            nunca é a planta.{" "}
            <strong className="text-[#1B5E20]">É quem cultivou.</strong>
          </p>
          <p className="font-bold text-[#1B5E20] text-lg">
            Cultivo medicinal funciona. Mas funciona quando você entende o que
            está fazendo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
