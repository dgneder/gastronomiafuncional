"use client";

import React from "react";

const pains = [
  { emoji: "😔", title: "A culpa chega antes da sobremesa", text: "Não é fraqueza. É o resultado de anos ouvindo que doce é errado. O problema nunca foi a sobremesa — foi o que colocaram dentro dela." },
  { emoji: "🧁", title: "Receitas 'fit' com gosto de dieta", text: "Seco, sem sabor, textura estranha. A conclusão: 'saudável não pode ser gostoso'. Essa conclusão está errada — e vamos provar receita por receita." },
  { emoji: "💊", title: "Restrição alimentar = exclusão da mesa", text: "Sem glúten, sem lactose, diabético, renal — a mesa de sobremesas parece campo minado. A ciência já sabe como navegar com prazer e segurança." },
  { emoji: "🔬", title: "Ninguém explica o porquê", text: "Substituições sem ciência resultam em sobremesas que derretem, não cremificam e não satisfazem. A bioquímica muda isso completamente." },
];

const PainSection: React.FC = () => (
  <section className="py-20 px-6 lg:px-12 bg-white" data-aos="fade-up">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-sm uppercase tracking-widest font-semibold mb-3" style={{ color: "#8B2252" }}>Você se identifica?</p>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
          Se a sobremesa virou seu inimigo,<br />
          <span style={{ color: "#8B2252" }}>o problema não é a sobremesa.</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
        {["Quer emagrecer? Corta o doce.", "Diabético não pode comer sobremesa.", "Se é saudável, não é gostoso."].map((f, i) => (
          <div key={i} className="bg-rose-50/50 border-l-4 p-5 rounded-r-xl italic text-gray-500 text-base" style={{ borderColor: "#8B2252" }} data-aos="fade-up" data-aos-delay={i * 100}>
            &ldquo;{f}&rdquo;
          </div>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {pains.map((pain, i) => (
          <div key={i} className="group p-6 rounded-2xl border border-rose-100 bg-rose-50/30 hover:shadow-lg hover:border-rose-200 transition-all" data-aos="fade-up" data-aos-delay={i * 80}>
            <div className="flex items-start gap-4">
              <span className="text-3xl shrink-0">{pain.emoji}</span>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-rose-800 transition-colors">{pain.title}</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">{pain.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PainSection;
