"use client";
import React from "react";

const Footer: React.FC = () => (
  <footer className="py-8 px-4 bg-gray-900 text-center">
    <p className="text-gray-500 text-xs">
      © {new Date().getFullYear()} Gastronomia Funcional · Prof. Dr. Diogo Gonçalves Neder & Anne Carolina Pessoa Neder
      {" "}·{" "}
      <a href="/politica-de-privacidade" className="underline hover:text-gray-300 transition-colors">Política de Privacidade</a>
    </p>
    <p className="text-gray-600 text-xs mt-2 max-w-xl mx-auto">
      * As informações têm caráter educativo e não substituem orientação médica ou nutricional individualizada.
      Resultados podem variar. Garantia processada via Hotmart em até 7 dias úteis.
    </p>
  </footer>
);

export default Footer;
