"use client";

import React from "react";
import { FaGraduationCap, FaUniversity, FaBookOpen, FaSeedling } from "react-icons/fa";

const stats = [
  {
    icon: <FaGraduationCap className="text-2xl text-[#2E7D32]" />,
    title: "Doutor em Genética",
    subtitle: "de Plantas",
  },
  {
    icon: <FaUniversity className="text-2xl text-[#2E7D32]" />,
    title: "Professor há 20+ anos",
    subtitle: "em universidade",
  },
  {
    icon: <FaBookOpen className="text-2xl text-[#2E7D32]" />,
    title: "150+ páginas",
    subtitle: "de conteúdo científico",
  },
  {
    icon: <FaSeedling className="text-2xl text-[#2E7D32]" />,
    title: "30 plantas",
    subtitle: "com fichas completas",
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
