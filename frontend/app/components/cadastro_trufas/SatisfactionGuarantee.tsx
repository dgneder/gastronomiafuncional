"use client";
import React from "react";
import { FaShieldAlt } from "react-icons/fa";

const SatisfactionGuarantee: React.FC = () => {
  return (
    <div className="flex items-center justify-center space-x-3 text-amber-400">
      <FaShieldAlt className="text-2xl" />
      <span className="text-sm">Garantia de 7 dias ou seu dinheiro de volta</span>
    </div>
  );
};

export default SatisfactionGuarantee;