"use client";
import React from "react";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between text-sm text-amber-400 mb-2">
        <span>Progresso</span>
        <span>{progress}%</span>
      </div>
      <div className="w-full bg-zinc-700 rounded-full h-3">
        <div
          className="bg-gradient-to-r from-amber-500 to-amber-400 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;