"use client";

import React from "react";
import Link from "next/link";

const UpsellFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo/Nome */}
        <h3 className="text-amber-500 font-bold text-xl mb-4">
          Trufas Funcionais
        </h3>

        {/* Links */}
        <div className="flex justify-center gap-6 text-sm mb-6">
          <Link
            href="/politica-de-privacidade"
            className="hover:text-amber-400 transition-colors"
          >
            Política de Privacidade
          </Link>
          <Link
            href="/termos-de-uso"
            className="hover:text-amber-400 transition-colors"
          >
            Termos de Uso
          </Link>
          <Link
            href="mailto:anne@vivendodeplantas.com"
            className="hover:text-amber-400 transition-colors"
          >
            Contato
          </Link>
        </div>

        {/* Aviso Legal */}
        <p className="text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed mb-6">
          Este site não faz parte do site do Facebook ou do Facebook Inc. Além
          disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. O
          Facebook é uma marca registrada do Facebook Inc. Os resultados podem
          variar de pessoa para pessoa. Este produto não substitui o parecer
          profissional. Sempre consulte um especializado antes de iniciar
          qualquer tratamento ou negócio.
        </p>

        {/* Copyright */}
        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} Neder Cursos, Treinamentos e Consultoria.
          Todos os direitos reservados. CNPJ: XX.XXX.XXX/0001-XX
        </p>
      </div>
    </footer>
  );
};

export default UpsellFooter;