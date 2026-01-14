import React from "react";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="mb-6">
      {/* Mensagem motivacional */}
      {progress >= 50 && (
        <p className="text-sm text-pink-400 font-semibold text-center mb-2">
          🍰 Você está quase lá! Finalize seu cadastro e aproveite.
        </p>
      )}

      {/* Barra de progresso */}
      <div className="w-full bg-zinc-800 rounded-full h-3 shadow-inner overflow-hidden border border-pink-600">
        <div
          className="h-full bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
