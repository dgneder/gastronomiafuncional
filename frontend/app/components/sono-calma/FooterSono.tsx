"use client";

import React from "react";

const FooterSono = () => {
  return (
    <footer className="py-10 px-4 bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Disclaimer legal */}
        <p className="text-gray-500 text-[11px] leading-relaxed mb-6">
          Este produto é um material educativo sobre plantas medicinais e não
          substitui diagnóstico, tratamento ou aconselhamento médico,
          psicológico ou farmacêutico. Consulte seu profissional de saúde antes
          de iniciar qualquer protocolo com plantas medicinais, especialmente se
          estiver grávida, amamentando, em uso de medicamentos ou em tratamento
          para qualquer condição de saúde. Os resultados podem variar de pessoa
          para pessoa. As informações são baseadas em estudos científicos
          publicados, citados na bibliografia do e-book, e não constituem
          promessa de resultado individual. Este produto não se propõe a curar,
          tratar ou prevenir doenças.
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500 mb-6">
          <a
            href="/politica-de-privacidade"
            className="hover:text-gray-300 transition-colors"
          >
            Política de Privacidade
          </a>
          <span className="text-gray-700">|</span>
          <a
            href="https://www.instagram.com/agricultando/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            @Agricultando
          </a>
          <span className="text-gray-700">|</span>
          <a
            href="https://wa.me/5583987831220"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            Suporte
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-600 text-[10px]">
          © {new Date().getFullYear()} Dr. Diogo Gonçalves Neder — Todos os
          direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default FooterSono;
