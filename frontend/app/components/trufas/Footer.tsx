"use client";

import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer
      data-aos="fade-up"
      className="bg-white text-gray-700 py-12 px-6 lg:px-12 border-t border-amber-200"
    >
      <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-3">
        {/* Descrição e Logo */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold text-amber-700">Trufas Funcionais</h2>
          <p className="text-gray-600">
            Descubra o prazer do chocolate gourmet funcional: 100 receitas de trufas e docinhos que cuidam da sua saúde enquanto encantam seu paladar.
          </p>
        </div>

        {/* Navegação */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-semibold text-amber-700">Navegação</h3>
          {[
            { href: "#hero", label: "Início" },
            { href: "#coursecontent", label: "Conteúdo" },
            { href: "#benefits", label: "Benefícios" },
            { href: "#testimonials", label: "Depoimentos" },
            { href: "#faq", label: "FAQ" },
            { href: "#guarantee", label: "Garantia" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-gray-500 hover:text-amber-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/politica-de-privacidade"
            className="text-gray-500 hover:text-amber-600 transition-colors"
          >
            Política de Privacidade
          </Link>
        </div>

        {/* Contato e Redes Sociais */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold text-amber-700">Contato</h3>
          <div className="space-y-3">
            <Link
              href="mailto:anne@vivendodeplantas.com"
              className="flex items-center space-x-2 text-gray-500 hover:text-amber-600 transition-colors"
            >
              <FaEnvelope />
              <span>anne@vivendodeplantas.com</span>
            </Link>
            <Link
              href="https://wa.me/5583987831220"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-500 hover:text-amber-600 transition-colors"
            >
              <FaWhatsapp />
              <span>WhatsApp: (83) 98783-1220</span>
            </Link>
          </div>

          <h3 className="text-lg font-semibold text-amber-700 mt-6">Siga-nos</h3>
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com/annecarolinapessoaneder/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="text-2xl text-gray-500 hover:text-amber-600 transition-colors" />
            </Link>
            <Link
              href="https://instagram.com/annecarolinapessoaneder/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl text-gray-500 hover:text-amber-600 transition-colors" />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-10">
        &copy; {new Date().getFullYear()} Neder Cursos, Treinamentos e Consultoria. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;