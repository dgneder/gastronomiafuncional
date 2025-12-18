"use client";

import React from "react";

const SimpleFooter: React.FC = () => {
  return (
    <footer className="bg-white text-gray-500 py-8 px-6 border-t border-pink-100 text-center text-sm">
      <p>
        &copy; {new Date().getFullYear()} Sobremesas Funcionais. Todos os direitos reservados.
      </p>
      <div className="mt-2 flex justify-center space-x-4">
        <span>Compra Segura</span>
        <span>|</span>
        <span>Privacidade Protegida</span>
      </div>
    </footer>
  );
};

export default SimpleFooter;