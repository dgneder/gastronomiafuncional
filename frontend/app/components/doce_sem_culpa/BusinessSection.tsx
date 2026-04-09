"use client";

import React from "react";

const products = [
  { name: "Brigadeiro gourmet", cost: "R$0,80", price: "R$5", margin: "84%" },
  { name: "Brownie fatiado", cost: "R$2", price: "R$12", margin: "83%" },
  { name: "Granola artesanal", cost: "R$8", price: "R$42", margin: "81%" },
  { name: "Mesa corporativa", cost: "R$224", price: "R$1.200", margin: "81%" },
];

const BusinessSection: React.FC = () => (
  <section className="py-20 px-6 lg:px-12" style={{ background: "linear-gradient(180deg, #FFF0F5, #fff)" }} data-aos="fade-up">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <p className="text-sm uppercase tracking-widest font-semibold mb-3" style={{ color: "#8B2252" }}>Capítulo 17 — Para Vender</p>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
          Transforme receitas em <span style={{ color: "#8B2252" }}>renda</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((p, i) => (
          <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-rose-100 hover:shadow-md transition text-center" data-aos="zoom-in" data-aos-delay={i * 80}>
            <p className="font-bold text-gray-800 text-sm">{p.name}</p>
            <p className="text-gray-400 text-xs mt-1">Custo {p.cost} → Venda {p.price}</p>
            <p className="text-3xl font-black mt-3" style={{ color: "#5B8B7D" }}>{p.margin}</p>
            <p className="text-gray-400 text-xs">margem</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-gray-400 text-sm">
        Potencial mês 12: <strong className="text-gray-800">R$3.000-8.000/mês</strong> trabalhando meio período
      </p>
    </div>
  </section>
);

export default BusinessSection;
