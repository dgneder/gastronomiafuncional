"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";

const FooterSimple: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Logo e descrição */}
        <div className="text-center mb-8">
          <Image
            src="/sobremesas-logo.png"
            alt="Gastronomia Funcional"
            width={150}
            height={50}
            className="mx-auto mb-4 brightness-0 invert opacity-80"
          />
          <p className="text-sm max-w-md mx-auto">
            Transformando a forma como você se relaciona com sobremesas. 
            Saúde e sabor em cada receita.
          </p>
        </div>

        {/* Links rápidos */}
        <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
          <Link 
            href="/politica-de-privacidade" 
            className="hover:text-white transition-colors"
          >
            Política de Privacidade
          </Link>
          <Link 
            href="#faq" 
            className="hover:text-white transition-colors"
          >
            Dúvidas Frequentes
          </Link>
          <a 
            href="https://wa.me/5583987831220" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Suporte
          </a>
        </div>

        {/* Contato e redes */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://wa.me/5583987831220"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="text-lg" />
          </a>
          <a
            href="mailto:contato@gastronomiafuncional.com"
            className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors"
            aria-label="E-mail"
          >
            <FaEnvelope className="text-lg" />
          </a>
          <a
            href="https://instagram.com/agricultando"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 rounded-full flex items-center justify-center transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram className="text-lg" />
          </a>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-800 pt-6 text-center text-xs">
          <p>
            © {currentYear} Neder Cursos, Treinamentos e Consultoria. 
            Todos os direitos reservados.
          </p>
          <p className="mt-2 text-gray-500">
            CNPJ: XX.XXX.XXX/0001-XX • Paraíba, Brasil
          </p>
        </div>
      </div>

      {/* Espaço extra para sticky CTA no mobile */}
      <div className="h-20 lg:hidden" />
    </footer>
  );
};

export default FooterSimple;
