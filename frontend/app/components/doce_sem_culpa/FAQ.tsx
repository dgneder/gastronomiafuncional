"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "Em quanto tempo eu tenho acesso ao material?",
    answer: "Acesso imediato após a confirmação do pagamento. Os ebooks são enviados por e-mail em PDF, e o acesso à plataforma Hotmart Club é liberado automaticamente. Pagamentos por cartão confirmam em minutos. Pix em até 2h. Boleto em até 3 dias úteis.",
  },
  {
    question: "Sou diabético(a). As receitas são seguras para mim?",
    answer: "Sim — o Capítulo 14 inteiro é dedicado a receitas Low Carb e Keto, e cada uma das 252 receitas traz semáforo glicêmico que indica o impacto estimado. O OB2 (48 fichas de ingredientes) inclui IG de cada adoçante e comportamento metabólico. Importante: material educativo, não substitui orientação do seu médico ou nutricionista.",
  },
  {
    question: "Eu tenho compulsão por doce à noite. Isso vai me ajudar de verdade?",
    answer: "Sim. O Bônus 'Protocolo de Compulsão Noturna' foi formulado exatamente para isso: 7 receitas calmantes com triptofano, magnésio e adaptógenos (sem cafeína) + método dos 5 minutos para interromper a vontade antes de chegar na cozinha. Material novo, exclusivo desta edição.",
  },
  {
    question: "Eu sou mãe e quero dar doce pros meus filhos sem culpa. Tem algo específico?",
    answer: "Sim — o Capítulo 13 do ebook é dedicado a receitas para crianças, testadas nos quatro filhos do autor. Na plataforma há um módulo 'Para Toda a Família' com receitas aprovadas por paladar infantil real. O Bônus 'Semana das Crianças' traz cardápio semanal pronto para lancheira.",
  },
  {
    question: "Eu quero vender doces funcionais. O kit ensina?",
    answer: "Sim. O Capítulo 17 do ebook principal é 'Sobremesas para Vender', com precificação, margens (várias trufas têm margem 200-300%), dicas de embalagem e rótulo. O Ebook Trufas & Docinhos adiciona 100 receitas com alta rentabilidade. Várias alunas pagaram o kit várias vezes no primeiro mês.",
  },
  {
    question: "Eu nunca cozinhei sobremesa. Vou conseguir fazer as receitas?",
    answer: "Sim. O Capítulo 11 é dedicado a receitas rápidas ≤15 minutos (nice cream, mousses simples, cookies). O Capítulo 3 traz Técnicas de Confeitaria Funcional para iniciantes. Começa pelo simples e evolui. Nenhuma receita exige equipamento profissional.",
  },
  {
    question: "Tem receita para vegano / sem lactose / sem ovo?",
    answer: "Sim. Cada receita tem tags de restrição (🟢 SG / 🔵 SL / 🟤 SO / 🟣 VEG / 🔴 LC / 🟠 KETO). O Índice Cruzado de Tags no Capítulo 19 permite filtrar rapidamente. Das 252 receitas, mais de 100 são veganas, mais de 200 são sem lactose, e 33 são keto.",
  },
  {
    question: "É só um ebook em PDF ou é mais do que isso?",
    answer: "É muito mais. Você recebe: (1) Ebook Doce Sem Culpa 252 receitas, (2) Ebook Trufas & Docinhos 100 receitas, (3) Plataforma Hotmart com 150+ receitas diagramadas individualmente em PDF visual estilo revista, (4) OB1 Coberturas, (5) OB2 Fichas de Ingredientes, (6) Bônus Protocolo Compulsão, (7) Bônus 4 Cardápios Semanais. Valor real de mercado: R$299.",
  },
  {
    question: "O acesso à plataforma é vitalício?",
    answer: "Sim. Você compra uma vez e o acesso à plataforma Hotmart Club é permanente. Os ebooks em PDF ficam salvos no seu e-mail e podem ser baixados quando quiser. Novos módulos adicionados no futuro são liberados sem custo adicional para quem já é aluno.",
  },
  {
    question: "Qual a diferença para receitas gratuitas da internet?",
    answer: "A internet te dá receitas isoladas, sem ciência por trás, e muitas vezes com informações imprecisas. O Doce Sem Culpa traz 252 receitas formuladas por um PhD em ciência dos alimentos, com 73 referências científicas indexadas, sistema de tags funcionais, semáforo glicêmico calibrado e a história real de um autor que convive com diabetes e doença renal.",
  },
  {
    question: "Ingredientes são difíceis de achar ou caros?",
    answer: "Não. A grande maioria está em supermercados comuns (cacau, aveia, banana, morango, tâmara, leite vegetal). Ingredientes específicos como xilitol e psyllium são facilmente encontrados em lojas de produtos naturais. O OB2 traz alternativas para cada ingrediente — você usa o que já tem em casa.",
  },
  {
    question: "E se eu não gostar do kit?",
    answer: "Você tem 7 dias de garantia incondicional. Abre os ebooks, acessa a plataforma, testa as receitas. Se em qualquer momento nesse prazo decidir que não é pra você — qualquer motivo — basta enviar um e-mail e devolvemos 100% do valor. Sem perguntas, sem formulários.",
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-6 lg:px-12 bg-white" data-aos="fade-up">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest font-semibold mb-3" style={{ color: "#8B2252" }}>
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
                  ? "shadow-sm"
                  : "bg-white border-stone-100 hover:border-stone-200"
              }`}
              style={
                activeIndex === i
                  ? { backgroundColor: "#FBF5E8", borderColor: "#D4A04A60" }
                  : {}
              }
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            >
              <div className="flex items-center justify-between px-6 py-5">
                <h3
                  className={`font-semibold pr-4 ${activeIndex === i ? "" : "text-stone-700"}`}
                  style={activeIndex === i ? { color: "#6B1A3F" } : {}}
                >
                  {item.question}
                </h3>
                {activeIndex === i ? (
                  <FaChevronUp className="shrink-0" style={{ color: "#8B2252" }} />
                ) : (
                  <FaChevronDown className="text-stone-400 shrink-0" />
                )}
              </div>
              {activeIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-stone-600 leading-relaxed text-[15px]">{item.answer}</p>
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
