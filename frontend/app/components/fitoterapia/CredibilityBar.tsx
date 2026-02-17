"use client";

import React from "react";
import {
  FaMicroscope,
  FaBookOpen,
  FaShieldAlt,
  FaClipboardList,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaMicroscope className="text-2xl text-[#4A7C29]" />,
    title: "20+ anos",
    subtitle: "de pesquisa com plantas",
  },
  {
    icon: <FaBookOpen className="text-2xl text-[#4A7C29]" />,
    title: "Referências do PubMed",
    subtitle: "e Cochrane Library",
  },
  {
    icon: <FaShieldAlt className="text-2xl text-[#4A7C29]" />,
    title: "Capítulo de segurança",
    subtitle: "com interações e riscos",
  },
  {
    icon: <FaClipboardList className="text-2xl text-[#4A7C29]" />,
    title: "7 protocolos prontos",
    subtitle: "para começar hoje",
  },
];

const CredibilityBar: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 px-4 bg-white border-y border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-2">{stat.icon}</div>
              <p className="font-bold text-gray-900 text-sm sm:text-base">
                {stat.title}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilityBar;
