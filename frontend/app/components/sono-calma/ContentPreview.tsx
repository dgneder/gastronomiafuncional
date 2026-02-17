"use client";

import React from "react";
import Image from "next/image";

const previews = [
  {
    src: "/sono-calma/preview-ficha.jpeg",
    alt: "Ficha completa da Ashwagandha com evidência e dosagem",
    caption: "Cada planta com mecanismo, evidência, dose, preparo e contraindicações",
  },
  {
    src: "/sono-calma/preview-protocolo.jpeg",
    alt: "Protocolo 4 — Equilíbrio Completo com cronograma",
    caption: "Protocolos prontos: planta por planta, dose por dose, horário por horário",
  },
  {
    src: "/sono-calma/preview-tabela.jpeg",
    alt: "Tabela Mestra de Referência Rápida com 12 plantas",
    caption: "Tabela para recortar e colar na cozinha — referência instantânea",
  },
];

const ContentPreview = () => {
  return (
    <section className="py-16 lg:py-20 px-4 bg-[#F8F8F8]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            Veja o que está dentro
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Conteúdo prático, organizado e visual — feito para consultar e aplicar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {previews.map((preview, index) => (
            <div key={index} className="group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-2 border-white mb-4 group-hover:shadow-xl transition-shadow">
                {/* TODO: Substituir por screenshots reais do e-book */}
                <Image
                  src={preview.src}
                  alt={preview.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <p className="text-sm text-gray-600 text-center italic leading-relaxed px-2">
                {preview.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentPreview;
