"use client";

import React from "react";
import { FaMicroscope, FaStar, FaShieldAlt, FaUsers } from "react-icons/fa";

const items = [
  {
    icon: <FaMicroscope className="text-[#4A7C29] text-2xl" />,
    title: "20+ anos",
    desc: "de pesquisa em genética de plantas",
  },
  {
    icon: <FaStar className="text-[#B8860B] text-2xl" />,
    title: "Baseado em evidências",
    desc: "Cada planta com nível de evidência classificado (★ a ★★★★★)",
  },
  {
    icon: <FaShieldAlt className="text-[#4A7C29] text-2xl" />,
    title: "Segurança em 1º lugar",
    desc: "Contraindicações e interações medicamentosas em cada ficha",
  },
  {
    icon: <FaUsers className="text-[#B8860B] text-2xl" />,
    title: "Protocolo para toda família",
    desc: "Dosagens adaptadas para crianças acima de 6 anos",
  },
];

const CredibilityBar = () => {
  return (
    <section className="py-8 px-4 bg-white border-y border-[#4A7C29]/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-2">
              {item.icon}
              <h3 className="font-extrabold text-gray-900 text-sm sm:text-base">
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilityBar;
