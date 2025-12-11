import React from "react";

const PersuasiveCTA: React.FC = () => {
  return (
    <div className="text-center mt-6">
      <button
        className="w-full py-4 bg-pink-600 text-white font-bold uppercase rounded-lg 
                   shadow-lg hover:bg-pink-700 hover:scale-105 transition-all 
                   duration-300 tracking-wide text-lg animate-pulse"
        onClick={() =>
          window.location.href =
            "https://pay.hotmart.com/G99983616M?off=2e04ld34&checkoutMode=10"
        }
      >
        🍰 Últimas Vagas - Garanta Agora!
      </button>
      <p className="text-pink-300 text-sm mt-2 italic">
        Oferta especial por tempo limitado! 🚀
      </p>
    </div>
  );
};

export default PersuasiveCTA;
