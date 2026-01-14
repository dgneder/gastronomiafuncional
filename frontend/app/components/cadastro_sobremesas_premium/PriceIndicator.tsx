import React from "react";

interface PriceIndicatorProps {
  originalPrice: number;
  discountedPrice: number;
}

const PriceIndicator: React.FC<PriceIndicatorProps> = ({
  originalPrice,
  discountedPrice,
}) => {
  return (
    <div className="text-center mb-6 bg-zinc-900 p-4 rounded-lg shadow-lg border border-pink-400">
      <p className="text-lg text-pink-400 line-through">
        De <span className="text-red-400 font-bold">R${originalPrice}</span>
      </p>
      <p className="text-3xl font-extrabold text-pink-500 mt-2 animate-pulse">
        💖 Agora por apenas <span className="text-pink-300">R${discountedPrice}</span>
      </p>
      <p className="text-sm text-pink-400 italic mt-2">
        Oferta válida somente por tempo limitado! ⏳
      </p>
    </div>
  );
};

export default PriceIndicator;
