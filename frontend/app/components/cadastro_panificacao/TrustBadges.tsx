"use client";
import React from "react";

const TrustBadges: React.FC = () => {
  return (
    <div className="text-center space-y-4 pb-8">
      {/* Hotmart badge */}
      <div className="flex items-center justify-center gap-2 text-stone-500 text-xs">
        <span>Pagamento processado com segurança pela</span>
        <span className="font-bold text-stone-400">Hotmart®</span>
      </div>

      {/* Payment methods */}
      <div className="flex items-center justify-center gap-4 text-stone-600">
        {["💳 Cartão", "📱 PIX", "📄 Boleto"].map((method, i) => (
          <span key={i} className="text-xs">{method}</span>
        ))}
      </div>

      {/* Disclaimer */}
      <p className="text-stone-600 text-[10px] max-w-sm mx-auto leading-relaxed">
        Este produto é comercializado com apoio da Hotmart. A plataforma não faz controle
        editorial prévio dos produtos comercializados, nem avalia a tecnicidade e experiência
        daqueles que os produzem. A Hotmart não endossa ou recomenda este produto.
      </p>

      {/* LGPD */}
      <p className="text-stone-600 text-[10px]">
        Ao continuar, você concorda com os{" "}
        <a href="/termos" className="underline hover:text-stone-400">Termos de Uso</a>{" "}
        e{" "}
        <a href="/privacidade" className="underline hover:text-stone-400">Política de Privacidade</a>.
      </p>
    </div>
  );
};

export default TrustBadges;
