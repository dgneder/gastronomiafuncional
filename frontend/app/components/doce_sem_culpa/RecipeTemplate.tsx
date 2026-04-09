"use client";

import Image from "next/image";
import React from "react";

const fields = [
  "Tags funcionais e de restrição alimentar",
  "Ficha rápida: nível, tempo, rendimento, doçura 0-10, custo",
  "Semáforo glicêmico 🟢🟡🟠 com IG e Carga Glicêmica",
  "Tabela ingredientes com coluna \"Função\"",
  "3 faixas de adoçante com quantidade exata por faixa",
  "Versão vegana com proporções de substituição",
  "Modo de preparo em ≤10 passos",
  "Box \"Por Que Funciona?\" com bioativo + referência",
  "Tabela nutricional por porção realista",
  "Variações (mínimo 2 por receita)",
  "Harmonização: bebida + cobertura + sugestão de mesa",
];

const RecipeTemplate: React.FC = () => (
  <section className="py-20 px-6 lg:px-12 bg-white" data-aos="fade-up">
    <div className="max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white" data-aos="fade-right">
          <Image src="/sobremesas/template-preview.png" alt="Preview do template de receita do Doce Sem Culpa" fill className="object-cover" />
        </div>
        <div data-aos="fade-left">
          <p className="text-sm uppercase tracking-widest font-semibold mb-3" style={{ color: "#8B2252" }}>Template exclusivo</p>
          <h2 className="text-3xl font-extrabold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
            Cada receita tem <span style={{ color: "#8B2252" }}>11 campos</span>
          </h2>
          <p className="mt-3 text-gray-500">Não é PDF genérico da internet. É um sistema científico por receita.</p>
          <div className="mt-6 space-y-2.5">
            {fields.map((f, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="mt-0.5 text-sm" style={{ color: "#5B8B7D" }}>✓</span>
                <span className="text-gray-600 text-sm">{f}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-gray-400 uppercase tracking-wider">× 252 receitas no Volume 2</p>
        </div>
      </div>
    </div>
  </section>
);

export default RecipeTemplate;
