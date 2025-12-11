import React from "react";
import { FaLock, FaShieldAlt, FaCreditCard } from "react-icons/fa";

const SecuritySeal: React.FC = () => {
  return (
    <div className="bg-pink-50 text-zinc-800 p-5 rounded-lg text-center shadow-md mt-6 border border-pink-200">
      {/* Ícones de segurança */}
      <div className="flex items-center justify-center space-x-4 mb-3">
        <FaLock className="text-pink-500 text-2xl" />
        <FaShieldAlt className="text-pink-500 text-2xl" />
        <FaCreditCard className="text-pink-500 text-2xl" />
      </div>

      {/* Mensagem principal */}
      <p className="text-sm font-semibold text-pink-600">
        🔒 Pagamento <span className="text-pink-700 font-bold">100% seguro</span> com Cartão, Pix ou Boleto.
      </p>

      {/* Aviso complementar */}
      <p className="text-xs text-pink-500 mt-1">
        Seus dados são protegidos com tecnologia de criptografia avançada.
      </p>
    </div>
  );
};

export default SecuritySeal;
