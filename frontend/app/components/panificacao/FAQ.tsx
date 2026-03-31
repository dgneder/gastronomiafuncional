"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "Os ingredientes são caros ou difíceis de encontrar?",
    answer: "A grande maioria está em supermercados comuns e tem preço acessível (farinha de arroz, aveia, polvilho). Ingredientes específicos como psyllium são facilmente encontrados em lojas de produtos naturais a granel. O guia inclui alternativas e uma tabela de substituição inteligente para você usar o que já tem.",
  },
  {
    question: "Preciso ter experiência na cozinha para fazer os pães?",
    answer: "Não. O livro começa literalmente do zero. Temos um módulo inteiro focado em pães de frigideira e micro-ondas que ficam prontos em 10 minutos. Você evolui do mais simples ao artesanal no seu próprio ritmo.",
  },
  {
    question: "Quanto tempo leva para aprender?",
    answer: "No primeiro dia você já consegue fazer o Pão de Frigideira — 10 minutos, sem fermentação, sem forno. Na primeira semana você domina os pães do dia a dia. Os pães artesanais com levain levam algumas semanas de prática, mas cada receita explica a ciência por trás — então o aprendizado é progressivo e você nunca trava.",
  },
  {
    question: "As receitas são realmente seguras para diabéticos?",
    answer: "Sim. As receitas com a tag 💙 DIA foram formuladas especificamente para controle glicêmico, utilizando farinhas de baixo índice glicêmico e técnicas de fermentação que quebram os açúcares. O próprio autor convive com diabetes e testou a eficácia do método.",
  },
  {
    question: "É totalmente sem glúten? Sou celíaco.",
    answer: "Sim! Todas as 246 receitas foram formuladas absolutamente sem trigo ou derivados. O sistema de Tags do livro indica claramente (com a tag 💚 CEL) quais receitas são 100% seguras para celíacos, orientando sobre o risco de contaminação cruzada em produtos como a aveia.",
  },
  {
    question: "Funciona para quem tem intolerância à lactose?",
    answer: "Sim. As receitas com a tag 🔵 SL foram desenvolvidas sem nenhum derivado de leite. A grande maioria dos pães funcionais do guia já é naturalmente sem lactose — e quando uma receita usa algum laticínio, sempre indicamos a substituição funcional equivalente.",
  },
  {
    question: "É só um ebook em PDF?",
    answer: "É muito mais que isso. Além do livro completo com 246 receitas e mais de 230 páginas, você recebe acesso à Área de Membros com o conteúdo dividido em 11 módulos navegáveis, o bônus de 50 Sanduíches Naturais Funcionais, a Tabela Mestra de Farinhas e a Planilha de Formulação automática.",
  },
  {
    question: "Qual a diferença para as receitas grátis da internet?",
    answer: "A internet diz 'o que' fazer (e muitas vezes dá errado, resultando em pães duros). O Pão Sem Culpa ensina a CIÊNCIA por trás da massa. Você vai entender a função da hidratação, dos estruturantes e da fermentação. A internet dá receitas; nós damos autonomia.",
  },
  {
    question: "Tenho doença renal. Posso consumir?",
    answer: "Sim. Criamos a tag 🩵 RENAL especificamente para você. O autor também convive com doença renal crônica e elaborou opções controladas em potássio e fósforo (como o Pão Amigo do Rim). Lembre-se sempre de alinhar com sua equipe médica.",
  },
  {
    question: "E se eu não gostar do conteúdo?",
    answer: "O risco é todo nosso. Você tem 7 dias de Garantia Incondicional. Se não gostar do formato, das receitas ou da ciência aplicada, basta solicitar o reembolso na Hotmart com um clique. Devolvemos 100% do seu dinheiro, sem letras miúdas.",
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-6 lg:px-12 bg-white" data-aos="fade-up">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest font-semibold mb-3" style={{ color: "#C4622D" }}>
            Tire suas dúvidas
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-stone-800">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqData.map((item, i) => (
            <div
              key={i}
              className={`rounded-xl border transition-all duration-300 cursor-pointer ${
                activeIndex === i
                  ? "bg-amber-50/50 border-amber-200 shadow-sm"
                  : "bg-white border-stone-100 hover:border-stone-200"
              }`}
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            >
              <div className="flex items-center justify-between px-6 py-5">
                <h3 className={`font-semibold pr-4 ${activeIndex === i ? "text-amber-800" : "text-stone-700"}`}>
                  {item.question}
                </h3>
                {activeIndex === i ? (
                  <FaChevronUp className="text-amber-600 shrink-0" />
                ) : (
                  <FaChevronDown className="text-stone-400 shrink-0" />
                )}
              </div>
              {activeIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-stone-500 leading-relaxed text-[15px]">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;