"use client";

import React from "react";
import Link from "next/link";
import { FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Pão Sem Culpa</h3>
            <p className="text-sm leading-relaxed">
              Coleção Gastronomia Funcional<br />
              Prof. Dr. Diogo Gonçalves Neder
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/termos" className="hover:text-amber-400 transition-colors">Termos de Uso</Link></li>
              <li><Link href="/privacidade" className="hover:text-amber-400 transition-colors">Política de Privacidade</Link></li>
              <li><Link href="/" className="hover:text-amber-400 transition-colors">gastronomiafuncional.com</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Contato</h4>
            <div className="space-y-2 text-sm">
              <a href="https://instagram.com/annecarolinapessoa" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <FaInstagram /> @annecarolinapessoa
              </a>
              <a href="mailto:contato@gastronomiafuncional.com" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <FaEnvelope /> contato@gastronomiafuncional.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 text-center text-xs">
          <p>
            Este material tem finalidade educativa e informativa. Não substitui orientação médica ou nutricional individualizada.
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Gastronomia Funcional. Todos os direitos reservados. CNPJ: 38.714.701/0001-40
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;