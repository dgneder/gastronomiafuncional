"use client";
import React from "react";
import { FaArrowRight, FaShieldAlt, FaLock, FaFire, FaCreditCard } from "react-icons/fa";
import { MdOutlineCake } from "react-icons/md";

const FinalCTA: React.FC<{ onButtonClick: () => void }> = ({ onButtonClick }) => (
  <section id="finalcta" className="py-24 px-6 lg:px-12 text-center relative overflow-hidden" style={{ backgroundColor: "#6B1A40" }}>
    <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #D4A04A, transparent)", transform: "translate(-30%, -30%)" }} />
    <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #D4A04A, transparent)", transform: "translate(30%, 30%)" }} />
    <div className="relative z-10 max-w-3xl mx-auto" data-aos="fade-up">
      <p className="text-sm uppercase tracking-widest font-semibold mb-6" style={{ color: "rgba(212,160,74,0.8)" }}>Sua mesa doce começa aqui</p>
      <h2 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
        Sobremesa boa{" "}<span style={{ color: "#D4A04A" }}>não precisa</span>{" "}ter culpa.
      </h2>
      <p className="text-lg text-rose-200/60 mb-4 max-w-xl mx-auto leading-relaxed">
        +500 receitas. 3 volumes. Uma coleção com base científica e muito sabor.
      </p>
      <div className="bg-white/10 rounded-2xl px-6 py-5 mb-8 max-w-md mx-auto text-left space-y-2">
        {[
          { label: "Volume 1 — 150 Sobremesas Funcionais", value: "R$47" },
          { label: "Volume 2 — 252 receitas + ciência", value: "R$97" },
          { label: "Volume 3 — 100 Trufas & Docinhos", value: "R$67" },
          { label: "Área de Membros + Extras 🎁", value: "R$81" },
        ].map((item, i) => (
          <div key={i} className="flex justify-between items-center text-sm">
            <span className="text-rose-200/70">{item.label}</span>
            <span className="text-rose-300/40 line-through ml-4 whitespace-nowrap">{item.value}</span>
          </div>
        ))}
        <div className="border-t border-rose-300/20 pt-3 flex justify-between items-center">
          <span className="text-white font-bold">Lançamento:</span>
          <span className="font-extrabold text-2xl" style={{ color: "#D4A04A" }}>R$47</span>
        </div>
      </div>
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5" style={{ backgroundColor: "rgba(212,160,74,0.2)", border: "1px solid rgba(212,160,74,0.4)" }}>
          <FaFire style={{ color: "#D4A04A" }} className="text-xs" />
          <span className="text-sm font-bold" style={{ color: "#D4A04A" }}>Preço de lançamento — sobe em breve</span>
        </div>
        <div className="flex items-baseline justify-center gap-3">
          <span className="text-xl text-rose-300/30 line-through">R$97</span>
          <span className="text-6xl font-extrabold text-white">R$47</span>
          <span className="text-sm font-bold px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(34,197,94,0.2)", color: "#86efac", border: "1px solid rgba(34,197,94,0.3)" }}>52% OFF</span>
        </div>
        <p className="text-rose-200/40 text-sm mt-2">ou 3× de R$15,90 · Acesso vitalício · Garantia 7 dias</p>
      </div>
      <button onClick={onButtonClick}
        className="group px-12 py-5 text-lg font-bold rounded-xl shadow-2xl hover:scale-[1.04] active:scale-[0.98] transition-all duration-300 text-gray-900 flex items-center justify-center gap-3 mx-auto"
        style={{ background: "linear-gradient(135deg, #D4A04A, #E8C06A)" }}>
        <MdOutlineCake className="text-xl" />
        Quero Meu Acesso por R$47
        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
      </button>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs text-rose-200/30">
        <span className="flex items-center gap-1.5"><FaLock /> Hotmart · Pagamento seguro</span>
        <span className="flex items-center gap-1.5"><FaShieldAlt /> 7 dias de garantia total</span>
        <span className="flex items-center gap-1.5"><FaCreditCard /> PIX · Cartão · Boleto</span>
      </div>
    </div>
  </section>
);

export default FinalCTA;
