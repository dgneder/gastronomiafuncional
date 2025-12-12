"use client";
import React from "react";
import { FaCheck } from "react-icons/fa";

const Benefits: React.FC = () => {
  const benefits = [
    "100 receitas de trufas funcionais",
    "10 módulos por objetivo de saúde",
    "Bônus exclusivos inclusos",
    "Acesso vitalício",
  ];

  return (
    <div className="space-y-3">
      {benefits.map((benefit, index) => (
        <div key={index} className="flex items-center space-x-3">
          <FaCheck className="text-amber-400" />
          <span className="text-zinc-300 text-sm">{benefit}</span>
        </div>
      ))}
    </div>
  );
};

export default Benefits;