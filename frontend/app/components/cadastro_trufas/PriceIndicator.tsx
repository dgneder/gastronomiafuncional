"use client";
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
    <div className="text-center">
      <p className="text-zinc-400 text-sm">
        De <span className="line-through text-red-400">R${originalPrice}</span> por apenas
      </p>
      <p className="text-3xl font-extrabold text-amber-400">
        R${discountedPrice}
      </p>
      <p className="text-zinc-500 text-xs">ou 12x de R${(discountedPrice / 12).toFixed(2)}</p>
    </div>
  );
};

export default PriceIndicator;