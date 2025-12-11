import React from "react";
import { FaShieldAlt } from "react-icons/fa";

const SatisfactionGuarantee: React.FC = () => {
  return (
    <div className="bg-zinc-900 text-zinc-100 p-5 rounded-lg mb-6 text-center shadow-lg border border-pink-500">
      <div className="flex items-center justify-center space-x-3 mb-2">
        <FaShieldAlt className="text-pink-400 text-3xl" />
        <p className="font-bold text-pink-300 text-lg">Garantia Incondicional</p>
      </div>
      <p className="text-sm text-zinc-300 leading-relaxed">
        Sua compra é <strong className="text-pink-300">100% segura</strong>! Se não estiver satisfeita com as receitas,
        devolvemos seu dinheiro sem complicações. Você tem <strong className="text-pink-300">7 dias</strong> para experimentar sem riscos!
      </p>
    </div>
  );
};

export default SatisfactionGuarantee;
