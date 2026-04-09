"use client";

import Image from "next/image";
import React from "react";
import { FaArrowRight, FaLock, FaCreditCard, FaShieldAlt, FaStar } from "react-icons/fa";
import { MdOutlineCake } from "react-icons/md";

interface HeroProps {
  onButtonClick: () => void;
}

const sciencePillars = [
  { icon: "🧪", title: "A Química do Doce", desc: "Por que substituições genéricas falham e como a bioquímica resolve" },
  { icon: "📊", title: "12 Adoçantes Analisados", desc: "IG, preço e comportamento na receita. Ciência, não achismo" },
  { icon: "⚗️", title: "Técnicas de Confeitaria", desc: "Ingredientes simples transformados em textura profissional" },
  { icon: "📋", title: "7 Protocolos Prontos", desc: "Cardápio semanal por condição: glicêmico, anti-inflamatório, detox" },
];

const Hero: React.FC<HeroProps> = ({ onButtonClick }) => (
  <section
    id="hero"
    className="relative pt-6 pb-14 lg:py-24"
    style={{ background: "linear-gradient(160deg, #FFF0F5 0%, #FCEEF4 40%, #FFF8F0 70%, #FFF0F5 100%)" }}
  >
    <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, #8B2252, #D4A04A, #8B2252)" }} />
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #8B2252, transparent)" }} />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-8" style={{ background: "radial-gradient(circle, #D4A04A, transparent)" }} />
    </div>

    <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-14">
        {/* Coluna texto */}
        <div className="lg:w-1/2">
          {/* Badge prova social com foto do autor */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 rounded-full shadow-sm mb-4 border border-rose-100">
            <div className="w-7 h-7 rounded-full overflow-hidden border border-rose-200 bg-rose-100 shrink-0">
              {/* <Image src="/sobremesas/dr-diogo-avatar.jpg" alt="Prof. Dr. Diogo" width={28} height={28} className="object-cover" /> */}
              <div className="w-full h-full flex items-center justify-center text-[10px]">👨‍🔬</div>
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <FaStar key={i} className="text-amber-400 text-[10px]" />)}
            </div>
            <span className="text-xs font-semibold text-gray-700">4.9 · +2.000 clientes</span>
          </div>

          <p className="text-sm uppercase tracking-widest font-bold mb-3" style={{ color: "#8B2252" }}>
            Mais que receitas — um sistema científico completo
          </p>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span style={{ color: "#8B2252" }}>Doce Sem Culpa</span> —{" "}
            <span style={{ color: "#D4A04A" }}>537+ receitas</span> funcionais com base científica
          </h1>

          <p className="text-base sm:text-lg text-gray-500 mb-6 max-w-lg leading-relaxed">
            Três volumes com ciência aplicada: cada receita com IG controlado, bioativos identificados,
            3 faixas de adoçante e versão vegana. De mousses a trufas artesanais — sem abrir mão do prazer.
          </p>

          {/* ══ 4 Pilares Científicos ══ */}
          <div className="grid grid-cols-2 gap-3 mb-6" data-aos="fade-up">
            {sciencePillars.map((p, i) => (
              <div
                key={i}
                className="bg-white/80 rounded-xl px-3.5 py-3 border border-rose-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-2.5">
                  <span className="text-lg mt-0.5">{p.icon}</span>
                  <div>
                    <p className="text-xs font-bold text-gray-800 leading-tight">{p.title}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={onButtonClick}
            className="group w-full sm:w-auto px-10 py-5 text-lg font-bold text-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3"
            style={{ background: "linear-gradient(135deg, #8B2252, #6B1A40)" }}
          >
            <MdOutlineCake className="text-xl" />
            Garantir o Sistema Completo — R$47
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="flex flex-wrap gap-4 mt-3 text-xs text-gray-400">
            <span className="flex items-center gap-1"><FaLock className="text-green-500" /> Hotmart · Seguro</span>
            <span className="flex items-center gap-1"><FaCreditCard /> PIX · Cartão · Boleto</span>
            <span className="flex items-center gap-1"><FaShieldAlt className="text-green-500" /> 7 dias de garantia</span>
          </div>
        </div>

        {/* Coluna imagem */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <Image src="/sobremesas/sobremesas-hero.png" alt="Coleção Doce Sem Culpa" fill className="object-cover" priority />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 border border-rose-100">
              <p className="text-xs font-bold uppercase tracking-wide" style={{ color: "#8B2252" }}>3 volumes</p>
              <p className="text-2xl font-black text-gray-900">+500</p>
              <p className="text-xs text-gray-400">receitas funcionais</p>
            </div>
          </div>

          {/* Anchor badges */}
          <div className="grid grid-cols-2 gap-3 mt-6">
            {[
              { icon: "🏷️", label: "De R$97 por R$47", sub: "52% OFF · lançamento" },
              { icon: "📚", label: "+500 receitas", sub: "3 volumes completos" },
              { icon: "🔬", label: "73 referências", sub: "Nature, Lancet, PNAS" },
              { icon: "🛡️", label: "Garantia 7 dias", sub: "Acesso imediato" },
            ].map((a, i) => (
              <div key={i} className="bg-white/80 rounded-xl px-4 py-3 shadow-sm border border-rose-50 flex items-center gap-3">
                <span className="text-xl">{a.icon}</span>
                <div>
                  <p className="text-xs font-bold text-gray-800">{a.label}</p>
                  <p className="text-[11px] text-gray-400">{a.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
