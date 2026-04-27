"use client";

import React from "react";
import Link from "next/link";
import { FaInstagram, FaEnvelope, FaWhatsapp, FaGraduationCap } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Kit Doce Sem Culpa</h3>
            <p className="text-sm leading-relaxed mb-3">
              Coleção Gastronomia Funcional<br />
              Prof. Dr. Diogo Gonçalves Neder<br />
              Anne Carolina Pessoa Neder
            </p>
            <div className="flex items-center gap-2 text-xs text-stone-500">
              <FaGraduationCap />
              <span>PhD em Genética · UEPB</span>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#coursecontent" className="hover:text-amber-400 transition-colors">
                  Conteúdo
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-amber-400 transition-colors">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-amber-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#guarantee" className="hover:text-amber-400 transition-colors">
                  Garantia
                </Link>
              </li>
              <li>
                <Link href="/termos" className="hover:text-amber-400 transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="hover:text-amber-400 transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  gastronomiafuncional.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Contato</h4>
            <div className="space-y-2 text-sm mb-4">
              <a
                href="https://instagram.com/annecarolinapessoaneder"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <FaInstagram /> @annecarolinapessoaneder
              </a>
              <a
                href="https://instagram.com/agricultando"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <FaInstagram /> @agricultando
              </a>
              <a
                href="mailto:contato@gastronomiafuncional.com"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <FaEnvelope /> contato@gastronomiafuncional.com
              </a>
              <a
                href="https://wa.me/5583987831220"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <FaWhatsapp /> (83) 98783-1220
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 text-center text-xs space-y-2">
          <p>
            Este material tem finalidade educativa e informativa. Não substitui orientação médica,
            nutricional ou psicológica individualizada. Resultados variam conforme adesão e perfil individual.
          </p>
          <p>
            © {new Date().getFullYear()} Neder Cursos, Treinamentos e Consultoria · Gastronomia Funcional. Todos os direitos reservados. CNPJ: 38.714.701/0001-40
          </p>
          <p className="text-stone-600 text-[10px] pt-1">
            Facebook™, Meta™, Instagram™ e Hotmart™ são marcas de seus respectivos proprietários. Este site não é afiliado oficialmente a essas plataformas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
