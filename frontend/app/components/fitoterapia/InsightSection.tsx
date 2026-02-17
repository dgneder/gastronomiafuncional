"use client";

import React from "react";
import Image from "next/image";
import { FaCloud, FaFlask, FaArrowRight } from "react-icons/fa";

interface InsightSectionProps {
  onButtonClick: () => void;
}

const InsightSection: React.FC<InsightSectionProps> = ({ onButtonClick }) => {
  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Lado Esquerdo: Imagem com Taja Estratégica */}
          <div className="lg:w-1/2 relative group">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-[#FBF7EF]">
              <Image
                src="/fitoterapia/cha-vapor.jpg"
                alt="Vapor saindo da xícara de chá medicinais"
                width={600}
                height={600}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Taja Estratégica */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2D5016] to-transparent pt-12 pb-6 px-6">
                <div className="bg-[#A3E635] text-[#2D5016] py-2 px-4 rounded-xl shadow-lg inline-flex items-center gap-2 transform -rotate-1">
                  <FaFlask size={14} />
                  <span className="text-xs font-black uppercase tracking-wider">
                    Fitoquímica Aplicada
                  </span>
                </div>
                <p className="text-white text-sm mt-3 font-medium italic">
                  &quot;O vapor que você vê é o remédio indo embora.&quot;
                </p>
              </div>
            </div>

            {/* Elemento decorativo sutil */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#4A7C29]/10 rounded-full blur-2xl -z-10" />
          </div>

          {/* Lado Direito: Texto de Impacto */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 text-[#4A7C29] mb-6 font-bold uppercase tracking-widest text-sm">
              <FaCloud className="animate-pulse" />
              <span>O Segredo do Vapor</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">
              Sabe aquele vapor que sobe quando você faz um chá e deixa a xícara aberta?
            </h2>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Você está literalmente vendo compostos medicinais evaporando. 
                <strong> Mentol</strong> da hortelã. <strong>Citral</strong> da melissa. <strong>Bisabolol</strong> e <strong>camazuleno</strong> da camomila.
              </p>
              
              <div className="bg-[#FBF7EF] p-6 rounded-2xl border-l-4 border-[#4A7C29]">
                <p className="text-gray-800">
                  São <strong>terpenos</strong> — compostos voláteis que escapam com o calor. Sem tampa, a hortelã pode perder até <strong>60% do mentol</strong>. A camomila perde boa parte do que a torna eficaz.
                </p>
              </div>

              <p className="font-bold text-[#2D5016]">
                Tampar imediatamente é a regra mais importante do preparo de chás medicinais. E quase ninguém faz.
              </p>

              <p className="text-gray-500 text-base">
                Esse é UM dos erros que o Fitoterapia Essencial ensina a evitar.
                Tem muitos outros — temperatura errada, tempo errado, método
                errado, combinação errada. Cada erro reduz ou anula o que a
                planta poderia fazer por você.
              </p>
            </div>

            {/* CTA restaurado */}
            <div className="mt-8">
              <button
                onClick={onButtonClick}
                className="inline-flex items-center gap-2 py-4 px-8 bg-gradient-to-r from-[#4A7C29] to-[#2D5016] hover:brightness-110 text-white font-bold text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 group"
              >
                <span>QUERO APRENDER O JEITO CERTO</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-gray-400 text-xs mt-3">
                186 páginas de ciência aplicada por apenas R$37
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InsightSection;