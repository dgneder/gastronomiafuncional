import React from "react";
import { FaStar } from "react-icons/fa";

const SocialProof: React.FC = () => {
  return (
    <div className="bg-pink-50 text-zinc-800 p-6 rounded-lg mb-6 text-center shadow-lg border border-pink-200">
      {/* Estrelas de avaliação */}
      <div className="flex items-center justify-center space-x-2 mb-3">
        <FaStar className="text-yellow-400 text-2xl" />
        <FaStar className="text-yellow-400 text-2xl" />
        <FaStar className="text-yellow-400 text-2xl" />
        <FaStar className="text-yellow-400 text-2xl" />
        <FaStar className="text-yellow-400 text-2xl" />
      </div>

      {/* Depoimento */}
      <p className="italic text-lg text-pink-700">
        “Nunca imaginei que seria possível comer sobremesas tão gostosas e ainda cuidar da minha saúde. Agora, não abro mão delas no meu dia a dia!”
      </p>

      {/* Nome do usuário */}
      <p className="font-semibold text-pink-600 mt-3">— Juliana Andrade</p>
    </div>
  );
};

export default SocialProof;
