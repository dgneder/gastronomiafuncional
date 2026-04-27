"use client";
import React from "react";
import { FaShieldAlt, FaCreditCard, FaUndoAlt } from "react-icons/fa";

const SecuritySeal: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {[
        { icon: FaShieldAlt,  label: "Compra segura", sub: "SSL 256-bit" },
        { icon: FaCreditCard, label: "Cartão, PIX",    sub: "ou boleto" },
        { icon: FaUndoAlt,    label: "7 dias",         sub: "de garantia" },
      ].map((item, i) => (
        <div
          key={i}
          className="text-center py-3 px-2 rounded-lg border"
          style={{
            backgroundColor: "rgba(28, 25, 23, 0.3)",
            borderColor: "rgba(120, 53, 15, 0.3)"
          }}
        >
          <item.icon
            className="text-base mx-auto mb-1.5"
            style={{ color: "rgba(212, 160, 74, 0.7)" }}
          />
          <p className="text-stone-300 text-xs font-semibold">{item.label}</p>
          <p className="text-stone-500 text-[10px]">{item.sub}</p>
        </div>
      ))}
    </div>
  );
};

export default SecuritySeal;
