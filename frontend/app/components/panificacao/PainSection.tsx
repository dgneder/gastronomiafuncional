"use client";

import React from "react";

const pains = [
  {
    emoji: "😔",
    title: "A mesa está posta — mas você não pode participar",
    text: "Todo mundo comendo pão fresco, e você ali com sua restrição alimentar, olhando de longe. Ou comendo algo sem gosto que mais parece isopor. A exclusão da mesa é uma dor real.",
  },
  {
    emoji: "😪",
    title: "Você já desistiu de sentir saudade do pão de verdade",
    text: "O cheiro que invade a casa. A crosta que estalinha. O miolo macio que você afunda o dedo. Você aprendeu a não querer — porque achava que nunca mais poderia ter. E se pudesse?",
  },
  {
    emoji: "🤯",
    title: "Você tentou receitas 'sem glúten' da internet",
    text: "Resultado: um tijolo seco que ninguém quis comer. Ou um pão que desmorona só de olhar. A frustração é real — e não é culpa sua. É porque ninguém te ensinou a ciência por trás.",
  },
  {
    emoji: "💸",
    title: "Pães funcionais prontos custam uma fortuna",
    text: "R$15 a R$25 num pão pequeno no mercado. E quando você lê o rótulo, descobre que tem mais aditivos do que ingredientes de verdade. Funcional só no nome.",
  },
  {
    emoji: "🔬",
    title: "Ninguém explica o porquê — só diz 'faça assim'",
    text: "Livros de receita dizem o quê, mas não o porquê. Sem entender a ciência, você nunca vai ter autonomia. Vai depender de receitas para sempre — e vai continuar errando.",
  },
];

const PainSection: React.FC = () => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white" data-aos="fade-up">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest font-semibold mb-3" style={{ color: "#C4622D" }}>
            Você se identifica?
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-stone-800 leading-tight">
            Se o pão virou seu inimigo,<br />
            <span style={{ color: "#6B3A2A" }}>o problema não é o pão.</span>
          </h2>
          <p className="mt-4 text-lg text-stone-500 max-w-2xl mx-auto">
            É o tipo de pão que você está comendo — e o que ninguém te ensinou sobre como fazer diferente.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pains.map((pain, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className={`group p-7 rounded-2xl border hover:shadow-lg hover:border-amber-200 transition-all duration-300 ${
                i === 1
                  ? "border-amber-100 bg-amber-50/30"
                  : "border-stone-100 bg-linear-to-br from-stone-50 to-white"
              }`}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl shrink-0 mt-1">{pain.emoji}</span>
                <div>
                  <h3 className={`text-lg font-bold mb-2 group-hover:text-amber-800 transition-colors ${
                    i === 1 ? "text-amber-900" : "text-stone-800"
                  }`}>
                    {pain.title}
                  </h3>
                  <p className="text-stone-500 leading-relaxed text-[15px]">{pain.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-3 bg-amber-50 px-8 py-5 rounded-2xl border border-amber-200">
            <span className="text-2xl">🍞</span>
            <p className="text-amber-800 font-semibold text-lg">
              Existe uma forma de ter o pão que você quer — e que ainda cuida do seu corpo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
