"use client";
import React from "react";
import { FaLock } from "react-icons/fa";

const SecuritySeal: React.FC = () => {
  return (
    <div className="flex items-center justify-center space-x-2 text-zinc-500 text-xs">
      <FaLock />
      <span>Pagamento 100% seguro via Hotmart</span>
    </div>
  );
};

export default SecuritySeal;