"use client";

import React from "react";
import { FaGraduationCap, FaBookOpen, FaFlask, FaClipboardList } from "react-icons/fa";

const credentials = [
  { icon: FaGraduationCap, text: "Escrito por Doutor em Genética de Plantas" },
  { icon: FaBookOpen, text: "78 páginas de conteúdo prático" },
  { icon: FaFlask, text: "Baseado em +20 estudos clínicos" },
  { icon: FaClipboardList, text: "12 plantas + 5 protocolos prontos" },
];

const CredibilityBar = () => {
  return (
    <section className="py-6 px-4 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {credentials.map((item, index) => (
            <div key={index} className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="w-10 h-10 bg-[#4A7C29]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <item.icon className="text-[#4A7C29] text-sm" />
              </div>
              <span className="text-xs sm:text-sm text-gray-700 font-medium leading-tight">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilityBar;
