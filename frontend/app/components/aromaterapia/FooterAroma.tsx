"use client";

import React from "react";
import { FaInstagram, FaLinkedin, FaEnvelope, FaShieldAlt } from "react-icons/fa";

const FooterAroma: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Coluna 1: Autoridade */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg flex items-center gap-2">
              <span className="text-[#4A7C29]">Dr.</span> Diogo Gonçalves
            </h4>
            <p className="text-sm leading-relaxed">
              Cientista, Engenheiro Agrônomo e Doutor em Genética de Plantas.
              Dedicado a traduzir a complexidade da botânica e da bioquímica em
              conhecimento aplicável e seguro.
            </p>
          </div>

          {/* Coluna 2: Contato */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">Contato e Suporte</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:suporte@vivendodeplantas.com"
                className="hover:text-white transition-colors flex items-center gap-2 text-sm"
              >
                <FaEnvelope className="text-[#4A7C29]" />{" "}
                suporte@vivendodeplantas.com
              </a>
              <div className="flex gap-4 mt-2">
                <a href="#" className="hover:text-white transition-colors">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Coluna 3: Segurança */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">Pagamento Seguro</h4>
            <p className="text-sm">
              Sua compra é processada de forma 100% segura pela Hotmart. O acesso
              ao material é enviado imediatamente após a confirmação.
            </p>
            <div className="flex items-center gap-2 text-[#4A7C29] text-xs font-bold uppercase tracking-widest">
              <FaShieldAlt /> Ambiente Criptografado
            </div>
          </div>
        </div>

        {/* Termos e Disclaimers */}
        <div className="pt-8 border-t border-gray-800 text-[10px] sm:text-xs space-y-4 text-justify leading-relaxed">
          <p>
            <strong>AVISO LEGAL:</strong> As informações contidas neste e-book e
            nesta página não substituem a consulta médica profissional. O Dr.
            Diogo Gonçalves é Doutor em Genética de Plantas e Agrônomo, e as
            orientações aqui descritas são baseadas em literatura científica e
            bioquímica. Sempre consulte seu médico antes de utilizar óleos
            essenciais, especialmente se você já utiliza medicamentos de uso
            contínuo, está grávida, amamentando ou possui condições de saúde
            pré-existentes. Este guia NÃO recomenda a ingestão de óleos
            essenciais.
          </p>
          <p>
            Este site não faz parte do site do Facebook ou da Facebook Inc. Além
            disso, este site NÃO é endossado pelo Facebook de nenhuma maneira.
            FACEBOOK é uma marca comercial da FACEBOOK, Inc.
          </p>
          <div className="flex flex-wrap justify-between items-center pt-4">
            <p>
              © {currentYear} Vivendo de Plantas — Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <a
                href="/politica-de-privacidade"
                className="underline hover:text-white"
              >
                Políticas de Privacidade
              </a>
              <a href="#" className="underline hover:text-white">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAroma;
