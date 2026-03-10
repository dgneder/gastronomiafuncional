"use client";

import React from "react";
import { FaArrowRight, FaShieldAlt } from "react-icons/fa";

interface FinalCTAProps {
  onButtonClick: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onButtonClick }) => {
  return (
    <section className="py-16 lg:py-20 bg-[#1E2A10]">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10 text-left italic text-white/75 text-base leading-relaxed">
          <p className="mb-3">
            &quot;Eu escrevi este guia pensando nas pessoas que eu amo. Minha mãe,
            que tem artrite no joelho. Minha sogra, que sofre de enxaqueca.
            Amigos que vivem à base de diclofenaco.
          </p>
          <p className="mb-3">
            E eu pensei: se eu sei que existem alternativas naturais com
            evidência — e eu sei que essas pessoas não vão ler artigos
            científicos em inglês — então é minha obrigação traduzir isso de
            um jeito que qualquer pessoa entenda e use.
          </p>
          <p>
            Se eu exijo esse nível de informação para a minha família,
            eu exijo para você também.&quot;
          </p>
          <p className="text-right text-white/50 text-sm mt-4 not-italic">— Dr. Diogo Gonçalves Neder</p>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
          Sua jornada para o <span className="text-[#D4A520]">alívio natural</span><br />começa com uma decisão.
        </h2>

        <p className="text-white/70 text-base leading-relaxed mb-8 max-w-xl mx-auto">
          Mais de 80 páginas, 15 fichas científicas, 6 protocolos prontos e 2
          guias bônus — tudo por R$47. Menos do que uma caixa de anti-inflamatório
          que dura uma semana. Com acesso vitalício e garantia de 7 dias.
        </p>

        <div className="mb-6">
          <p className="text-white/40 text-sm line-through">De R$143,90</p>
          <p className="text-5xl font-black text-[#D4A520]">R$47</p>
          <p className="text-white/50 text-xs mt-1">pagamento único • acesso imediato</p>
        </div>

        <button onClick={onButtonClick} className="inline-flex flex-col items-center gap-1 px-10 py-5 bg-linear-to-r from-[#D97706] to-[#B45309] hover:brightness-110 text-white font-black text-xl rounded-2xl shadow-[0_8px_30px_rgba(217,119,6,0.35)] transform hover:scale-[1.02] transition-all duration-200">
          <div className="flex items-center gap-2">
            <span>QUERO MEU ALÍVIO NATURAL</span>
            <FaArrowRight />
          </div>
          <span className="text-[11px] font-normal opacity-75 uppercase tracking-wider">Download imediato • Garantia de 7 dias</span>
        </button>

        <div className="flex items-center justify-center gap-2 mt-5 text-white/40 text-xs">
          <FaShieldAlt className="text-[#A3D977]" />
          Compra 100% segura via Hotmart · Pix · Cartão de crédito
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;