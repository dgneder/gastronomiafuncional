"use client";
import React from "react";
import { FaUsers, FaStar } from "react-icons/fa";

const SocialProof: React.FC = () => {
  return (
    <div className="flex justify-center space-x-6 text-amber-400">
      <div className="flex items-center space-x-2">
        <FaUsers className="text-xl" />
        <span className="text-sm">+500 alunos</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaStar className="text-xl text-yellow-400" />
        <span className="text-sm">4.9/5 avaliação</span>
      </div>
    </div>
  );
};

export default SocialProof;