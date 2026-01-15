"use client";

import React from "react";
import { FaCheckCircle, FaDownload, FaLockOpen, FaShieldAlt } from "react-icons/fa";

interface IncludedSectionProps {
  onButtonClick: () => void;
  price: string;
  highlight: string;
  smallNote?: string;
}

export default function IncludedSection({
  onButtonClick,
  price,
  highlight,
  smallNote,
}: IncludedSectionProps) {
  return (
    <section className="py-10 sm:py-14 px-4 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl bg-white border border-rose-100 shadow-xl p-6 sm:p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              O que você recebe hoje por <span className="text-pink-600">{price}</span>
            </h3>
            <p className="text-gray-600 mt-2">
              Receitas práticas e gostosas — com variações <strong>vegana</strong>,{" "}
              <strong>low carb</strong> e <strong>com/sem adoçantes</strong>.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: <FaCheckCircle className="text-green-600" />,
                title: highlight,
                desc: "Receitas com foto/ilustração + passo a passo direto ao ponto.",
              },
              {
                icon: <FaDownload className="text-pink-600" />,
                title: "PDF na área de membros + download",
                desc: "Você acessa no Memberkit e baixa quando quiser.",
              },
              {
                icon: <FaLockOpen className="text-amber-600" />,
                title: "Acesso imediato",
                desc: "Pagou, liberou. Sem esperar atendimento.",
              },
              {
                icon: <FaShieldAlt className="text-purple-600" />,
                title: "Garantia de 7 dias",
                desc: "Risco zero: se não curtir, é só pedir reembolso.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-4 flex gap-3"
              >
                <div className="text-xl mt-0.5">{item.icon}</div>
                <div>
                  <div className="font-bold text-gray-900">{item.title}</div>
                  <div className="text-sm text-gray-600 mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {smallNote ? (
            <p className="text-xs text-gray-500 text-center mt-5">{smallNote}</p>
          ) : null}

          <div className="mt-6 flex justify-center">
            <button
              onClick={onButtonClick}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-extrabold shadow-lg hover:shadow-xl transition-all"
            >
              QUERO GARANTIR MEU ACESSO AGORA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
