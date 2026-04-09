"use client";
import React, { useState } from "react";

const faqs = [
  { q: "Para quem é esta coleção?", a: "Para qualquer pessoa que ama sobremesas e quer aprender a fazê-las funcionalmente — seja por restrição alimentar (sem glúten, sem lactose, diabético, renal), escolha de vida saudável ou curiosidade científica sobre o que vai no prato." },
  { q: "Os 3 volumes são entregues de uma vez?", a: "Sim. Ao finalizar a compra você recebe acesso imediato aos 3 volumes na área de membros, com PDF disponível para download também." },
  { q: "Preciso ter experiência na cozinha?", a: "Não. As receitas têm passo a passo com até 10 etapas. A base científica te dá autonomia para entender o que está fazendo — não só seguir ingredientes às cegas." },
  { q: "As receitas são realmente funcionais ou são só 'fit'?", a: "São funcionais no sentido científico: cada ingrediente tem função bioativa documentada e explicada no box 'Por Que Funciona?'. Usamos ciência, não marketing." },
  { q: "Serve para quem tem restrição alimentar?", a: "Sim. O sistema de tags classifica cada receita por restrição: SG (sem glúten), SL (sem lactose), SA (sem açúcar refinado), Vegano, Low Carb, Keto, Renal e mais. Filtre as que servem para você." },
  { q: "Posso vender as sobremesas da coleção?", a: "Sim. O Volume 3 tem um capítulo dedicado a quem quer comercializar — com fichas de custo, margem de lucro, sugestões de embalagem e precificação para kits presente." },
  { q: "Como funciona a garantia?", a: "7 dias completos. Se por qualquer razão não ficar satisfeito, basta solicitar reembolso diretamente pela Hotmart. Um clique, sem perguntas, sem burocracia. O risco é 100% nosso." },
  { q: "Qual a diferença entre o Volume 1 e o Volume 2?", a: "O Volume 1 (150 receitas) é a coleção original ilustrada, com foco em variedade e praticidade. O Volume 2 (Doce Sem Culpa, 252 receitas) é a evolução — com base científica aprofundada, sistema de tags e o box científico em cada receita." },
];

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20 px-6 lg:px-12 bg-white" data-aos="fade-up">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest font-semibold mb-3" style={{ color: "#8B2252" }}>Dúvidas frequentes</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">Suas perguntas, respondidas</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-rose-100 overflow-hidden shadow-sm">
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-gray-800 hover:text-rose-800 transition-colors">
                <span>{faq.q}</span>
                <span className="shrink-0 ml-4 w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold transition-transform duration-300"
                  style={{ backgroundColor: "#8B2252", transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
              </button>
              {open === i && (
                <div className="px-6 pb-5"><p className="text-gray-500 leading-relaxed text-sm">{faq.a}</p></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
