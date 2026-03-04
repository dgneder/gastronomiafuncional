"use client";

import React from "react";

const FooterAlivio: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0F1A08] py-8 px-4 text-center">
      <p className="text-white/40 text-xs leading-relaxed max-w-xl mx-auto mb-3">
        © {year} Dr. Diogo Gonçalves Neder — Todos os direitos reservados.
        <br />
        Este material tem finalidade exclusivamente educativa e informativa.
        Não substitui orientação médica, farmacêutica ou de profissional de
        saúde habilitado. Consulte sempre um profissional de saúde antes de
        iniciar qualquer protocolo com plantas medicinais.
      </p>
      <div className="flex justify-center gap-4 text-white/30 text-xs">
        <a href="/politica-de-privacidade" className="hover:text-white/60 transition-colors">
          Política de Privacidade
        </a>
        <span>·</span>
        <a href="/termos-de-uso" className="hover:text-white/60 transition-colors">
          Termos de Uso
        </a>
        <span>·</span>
        <span>Suporte: contato@agricultando.com.br</span>
      </div>
    </footer>
  );
};

export default FooterAlivio;
