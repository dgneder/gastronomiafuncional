"use client";
import Image from "next/image";
import React from "react";
import { FaArrowRight, FaLock, FaCreditCard, FaShieldAlt } from "react-icons/fa";
import { MdOutlineCake } from "react-icons/md";

const CTASection: React.FC<{ onButtonClick: () => void }> = ({ onButtonClick }) => (
  <section id="cta" className="py-20 px-6 lg:px-12 bg-white" data-aos="fade-up">
    <div className="max-w-5xl mx-auto">
      <div className="lg:flex lg:items-center lg:gap-12 rounded-3xl p-8 lg:p-12 border border-rose-100 shadow-2xl" style={{ background: "linear-gradient(135deg, #FFF0F5, #FCEEF4)" }}>
        <div className="lg:w-1/2 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-2" style={{ backgroundColor: "#8B225208", borderColor: "#8B225225" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#8B2252" }} />
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#8B2252" }}>🍰 Preço especial de lançamento</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
            Comece hoje.{" "}<span style={{ color: "#8B2252" }}>+500 sobremesas funcionais em 3 volumes.</span>
          </h2>
          <ul className="space-y-3">
            {["Volume 1 — 150 Sobremesas Funcionais ilustradas", "Volume 2 — 252 receitas com base científica completa", "Volume 3 — 100 Trufas & Docinhos Funcionais artesanais", "Box 'Por Que Funciona?' em cada receita", "Sistema de tags por restrição alimentar", "Fichas nutricionais + variações guiadas", "Acesso vitalício + área de membros navegável"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-600">
                <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-white text-xs font-bold" style={{ backgroundColor: "#8B2252" }}>✓</span>
                <span className="text-[15px]">{item}</span>
              </li>
            ))}
          </ul>
          <div className="pt-4 pb-2">
            <div className="flex items-baseline gap-3">
              <span className="text-lg text-gray-400 line-through">R$97</span>
              <span className="text-5xl font-extrabold" style={{ color: "#8B2252" }}>R$47</span>
              <span className="text-sm font-bold text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">52% OFF</span>
            </div>
            <p className="text-gray-500 text-sm mt-2">ou 3× de R$15,90 sem juros</p>
          </div>
          <button onClick={onButtonClick}
            className="group w-full lg:w-auto px-10 py-5 text-lg font-bold text-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3"
            style={{ background: "linear-gradient(135deg, #8B2252, #6B1A40)" }}>
            <MdOutlineCake className="text-xl" />
            Garantir Acesso por R$47
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1"><FaLock className="text-green-500" /> Hotmart · Seguro</span>
            <span className="flex items-center gap-1"><FaCreditCard /> PIX · Cartão · Boleto</span>
            <span className="flex items-center gap-1"><FaShieldAlt className="text-green-500" /> 7 dias de garantia</span>
          </div>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <Image src="/sobremesas/sobremesas-hero.png" alt="Doce Sem Culpa — Coleção Completa" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
