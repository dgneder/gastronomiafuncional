"use client";

import React from "react";
import { FaGraduationCap, FaFlask, FaBolt, FaShieldAlt, FaLock, FaBookOpen } from "react-icons/fa";

const items = [
  { icon: FaGraduationCap, label: "Autor com Doutorado" },
  { icon: FaFlask, label: "25+ referências científicas" },
  { icon: FaBookOpen, label: "15 fichas completas" },
  { icon: FaBolt, label: "Acesso imediato" },
  { icon: FaShieldAlt, label: "7 dias de garantia" },
  { icon: FaLock, label: "Pagamento seguro" },
];

const CredibilityBar: React.FC = () => {
  return (
    <div className="bg-[#FBF7EF] border-y border-[#D97706]/15 py-5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-sm text-gray-600 whitespace-nowrap">
              <Icon className="text-[#4A7C29] text-base shrink-0" />
              <span className="font-semibold text-gray-800">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CredibilityBar;
