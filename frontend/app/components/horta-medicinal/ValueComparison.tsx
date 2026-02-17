"use client";

import React from "react";
import { FaCheckCircle, FaTimesCircle, FaMinusCircle } from "react-icons/fa";

const features = [
  "Base científica (PhD)",
  "Linguagem acessível",
  "Fichas de cultivo por planta",
  "Calendário regional",
  "Métodos de secagem",
  "Jardins temáticos prontos",
  "Passo a passo para iniciantes",
  "Investimento",
];

const columns = [
  {
    title: "YouTube / Blogs",
    subtitle: "gratuito",
    highlight: false,
    values: [
      { type: "no" },
      { type: "partial", note: "variável" },
      { type: "no" },
      { type: "no" },
      { type: "partial", note: "superficial" },
      { type: "no" },
      { type: "partial", note: "genérico" },
      { type: "text", text: "Grátis (com erros)" },
    ],
  },
  {
    title: "Livro técnico",
    subtitle: "acadêmico",
    highlight: false,
    values: [
      { type: "yes" },
      { type: "no" },
      { type: "partial", note: "genérico" },
      { type: "no" },
      { type: "partial", note: "incompleto" },
      { type: "no" },
      { type: "no" },
      { type: "text", text: "R$200–500" },
    ],
  },
  {
    title: "Curso presencial",
    subtitle: "uma vez",
    highlight: false,
    values: [
      { type: "partial", note: "variável" },
      { type: "yes" },
      { type: "partial", note: "poucas" },
      { type: "partial", note: "local" },
      { type: "yes" },
      { type: "no" },
      { type: "yes" },
      { type: "text", text: "R$200–500" },
    ],
  },
  {
    title: "Horta Medicinal em Casa",
    subtitle: "este guia",
    highlight: true,
    values: [
      { type: "yes" },
      { type: "yes" },
      { type: "yes" },
      { type: "yes" },
      { type: "yes" },
      { type: "yes" },
      { type: "yes" },
      { type: "text", text: "R$34,90" },
    ],
  },
];

const ValueIcon = ({ type }: { type: string }) => {
  if (type === "yes") return <FaCheckCircle className="text-[#2E7D32]" />;
  if (type === "no") return <FaTimesCircle className="text-red-400" />;
  return <FaMinusCircle className="text-yellow-500" />;
};

const ValueComparison: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 text-center mb-10 leading-tight">
          Compare e <span className="text-[#2E7D32]">decida você</span>
        </h2>

        <div className="overflow-x-auto -mx-4 px-4">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr>
                <th className="text-left p-3 text-sm text-gray-500 font-normal w-[200px]"></th>
                {columns.map((col, i) => (
                  <th
                    key={i}
                    className={`p-3 text-center ${
                      col.highlight
                        ? "bg-[#F2F8ED] rounded-t-2xl border-2 border-b-0 border-[#2E7D32]"
                        : ""
                    }`}
                  >
                    <p
                      className={`font-black text-sm ${
                        col.highlight ? "text-[#1B5E20]" : "text-gray-900"
                      }`}
                    >
                      {col.title}
                    </p>
                    <p className="text-[10px] text-gray-500">{col.subtitle}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, fi) => (
                <tr
                  key={fi}
                  className={fi % 2 === 0 ? "bg-gray-50/50" : "bg-white"}
                >
                  <td className="p-3 text-sm text-gray-700 font-medium">
                    {feature}
                  </td>
                  {columns.map((col, ci) => {
                    const val = col.values[fi];
                    return (
                      <td
                        key={ci}
                        className={`p-3 text-center ${
                          col.highlight
                            ? "bg-[#F2F8ED] border-x-2 border-[#2E7D32]" +
                              (fi === features.length - 1
                                ? " border-b-2 rounded-b-2xl"
                                : "")
                            : ""
                        }`}
                      >
                        {val.type === "text" ? (
                          <span
                            className={`font-bold text-sm ${
                              col.highlight
                                ? "text-[#1B5E20] text-lg"
                                : "text-gray-700"
                            }`}
                          >
                            {val.text}
                          </span>
                        ) : (
                          <div className="flex flex-col items-center gap-0.5">
                            <ValueIcon type={val.type} />
                            {val.type === "partial" && (
                              <span className="text-[9px] text-gray-400">
                                {(val as { note?: string }).note}
                              </span>
                            )}
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ValueComparison;
