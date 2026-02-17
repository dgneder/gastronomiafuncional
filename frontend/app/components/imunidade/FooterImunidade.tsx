"use client";

import React from "react";

const FooterImunidade = () => {
  return (
    <footer className="py-8 px-4 bg-gray-800 text-gray-400">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs leading-relaxed mb-4">
          <strong className="text-gray-300">Disclaimer legal:</strong> Este
          material tem finalidade educativa e informativa. Não substitui
          consulta médica, diagnóstico ou tratamento profissional. As
          informações são baseadas na literatura científica disponível e
          destinam-se a adultos saudáveis. Consulte um profissional de saúde
          antes de iniciar o uso de plantas medicinais, especialmente se
          gestante, lactante, em uso de medicamentos ou portador de condições de
          saúde preexistentes.
        </p>
        <p className="text-xs">
          © 2026 Dr. Diogo Gonçalves Neder · @Agricultando · Todos os direitos
          reservados
        </p>
        <div className="flex items-center justify-center gap-4 mt-3 text-xs">
          <a href="/politica-de-privacidade" className="hover:text-white transition-colors">
            Política de Privacidade
          </a>
          <span>·</span>
          <a href="#" className="hover:text-white transition-colors">
            Termos de Uso
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterImunidade;
