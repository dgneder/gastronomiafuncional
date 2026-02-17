"use client";

import React from "react";
import { FaInstagram, FaLinkedin, FaEnvelope, FaShieldAlt } from "react-icons/fa";

const FooterHorta: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Coluna 1: Autoridade */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg flex items-center gap-2">
              <span className="text-[#4CAF50]">Dr.</span> Diogo Gonçalves
            </h4>
            <p className="text-sm leading-relaxed">
              Cientista, Engenheiro Agrônomo e Doutor em Genética de Plantas.
              Dedicado a traduzir a complexidade da botânica em conhecimento
              aplicável e seguro para qualquer pessoa cultivar suas plantas
              medicinais.
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
                <FaEnvelope className="text-[#4CAF50]" />{" "}
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
            <div className="flex items-center gap-2 text-[#4CAF50] text-xs font-bold uppercase tracking-widest">
              <FaShieldAlt /> Ambiente Criptografado
            </div>
          </div>
        </div>

        {/* Termos e Disclaimers */}
        <div className="pt-8 border-t border-gray-800 text-[10px] sm:text-xs space-y-4 text-justify leading-relaxed">
          <p>
            <strong>AVISO LEGAL:</strong> Este produto é um material educacional
            sobre cultivo de plantas medicinais. Não substitui orientação médica,
            diagnóstico ou tratamento. As informações sobre propriedades das
            plantas são baseadas em literatura científica e tradição de uso, e não
            constituem recomendação terapêutica. Consulte um profissional de saúde
            antes de utilizar plantas medicinais para fins terapêuticos.
            Resultados de cultivo podem variar conforme condições climáticas, solo
            e manejo individual.
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

export default FooterHorta;
