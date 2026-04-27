"use client";
import React from "react";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="px-6 pt-5 pb-2">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center gap-1.5">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  step <= 2
                    ? "text-white"
                    : "bg-stone-700 text-stone-400"
                }`}
                style={step <= 2 ? { background: "linear-gradient(135deg, #8B2252, #6B1A3F)" } : {}}
              >
                {step <= 1 ? "✓" : step}
              </div>
              <span className="text-xs text-stone-500 hidden sm:inline">
                {step === 1 ? "Página" : step === 2 ? "Cadastro" : "Pagamento"}
              </span>
              {step < 3 && <span className="text-stone-600 mx-1">→</span>}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-1.5 bg-stone-700 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, #D4A04A, #8B2252)",
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
