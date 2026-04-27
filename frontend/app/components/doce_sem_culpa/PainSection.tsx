"use client";

import React from "react";

const pains = [
  {
    emoji: "🌙",
    title: "A compulsão noturna depois que todo mundo dorme",
    text: "Você passa o dia sendo exemplar. Recusa sobremesa no almoço, ignora o brigadeiro da reunião. E às 22h, sozinha na cozinha, ataca o armário. Come rápido, quase com pressa, como se fosse errado. E é assim que se sente depois.",
  },
  {
    emoji: "🩺",
    title: "O diagnóstico que tirou o doce da sua vida",
    text: "Diabetes. Pré-diabetes. Resistência à insulina. Triglicerídeos altos. Seu endócrino disse 'zero açúcar'. Seu nutricionista mandou 'dieta restritiva'. Mas ninguém te ensinou a substituir o prazer — e vida sem prazer não sustenta a longo prazo.",
  },
  {
    emoji: "👶",
    title: "A culpa de mãe toda vez que compra doce pro filho",
    text: "Leu o rótulo do biscoito recheado e se assustou com ingredientes impronunciáveis. Mas o seu filho pede doce. E você precisa de praticidade. Você não é nutricionista — e também não deveria precisar ser.",
  },
  {
    emoji: "✨",
    title: "A pele, o intestino, a inflamação — você sabe que o doce piora",
    text: "Espinha depois do doce. Inchaço depois do bolo. Sensação de peso depois do sorvete. Você sabe que a indústria destrói sua pele e sua digestão — mas cortar doce não é sustentável. Precisa de alternativa real.",
  },
  {
    emoji: "💰",
    title: "Você sabe que sabe cozinhar — e que tem gente disposta a pagar",
    text: "Faz brigadeiro que a vizinha elogia. Uma amiga pediu pra encomendar docinhos do aniversário dela. Você pensou 'eu poderia viver disso'. Mas não sabe quanto cobrar, que ingredientes usar, como rotular. Precisa de método, não de mais Pinterest.",
  },
];

const PainSection: React.FC = () => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white" data-aos="fade-up">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest font-semibold mb-3" style={{ color: "#8B2252" }}>
            Você se identifica?
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-stone-800 leading-tight">
            Se o doce virou seu inimigo,<br />
            <span style={{ color: "#8B2252" }}>o problema não é o doce.</span>
          </h2>
          <p className="mt-4 text-lg text-stone-500 max-w-2xl mx-auto">
            É o tipo de doce que a indústria te vende — e o que ninguém te ensinou sobre formular diferente.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pains.map((pain, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className={`group p-7 rounded-2xl border hover:shadow-lg transition-all duration-300 ${
                i === 2
                  ? "border-amber-200 bg-amber-50/40"
                  : "border-stone-100 bg-linear-to-br from-stone-50 to-white hover:border-amber-200"
              }`}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl shrink-0 mt-1">{pain.emoji}</span>
                <div>
                  <h3 className={`text-lg font-bold mb-2 transition-colors ${
                    i === 2 ? "text-amber-900" : "text-stone-800 group-hover:text-amber-900"
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
          <div
            className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl border"
            style={{ background: "linear-gradient(135deg, #FBF5E8, #F5E6D0)", borderColor: "#D4A04A60" }}
          >
            <span className="text-2xl">🍫</span>
            <p className="font-semibold text-lg" style={{ color: "#6B1A3F" }}>
              Existe uma forma de comer doce todos os dias — e que ainda cuida do seu corpo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
