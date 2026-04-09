"use client";
import React, { useState } from "react";
import { FaChevronDown, FaFlask, FaBook, FaMagic, FaGift } from "react-icons/fa";
import { MdOutlineCake } from "react-icons/md";

const parts = [
  { icon: FaFlask, title: "Fundamentos Científicos", color: "#8B2252",
    chapters: [
      { name: "Cap. 1 — A Química do Doce Funcional", desc: "Como açúcares, gorduras e proteínas interagem — e por que substituições simples falham sem essa base." },
      { name: "Cap. 2 — Índice Glicêmico e Carga Glicêmica", desc: "Por que não é só 'sem açúcar': IG, CG e o impacto real de cada adoçante e farinha no metabolismo." },
      { name: "Cap. 3 — Gorduras Funcionais", desc: "Cacau 70%, oleaginosas, coco: as gorduras que nutrem e por que elas são aliadas da sobremesa funcional." },
      { name: "Cap. 4 — Substitutos e Funções", desc: "Cada ingrediente tem uma função na textura, sabor e estrutura. Substitua com conhecimento, não no chute." },
    ]
  },
  { icon: MdOutlineCake, title: "Volume 1 — Sobremesas Funcionais (150 rec.)", color: "#6B1A40",
    chapters: [
      { name: "Mousses e Cremes", desc: "22 receitas cremosas com base científica — cacau, maracujá, baunilha, frutas vermelhas e mais." },
      { name: "Bolos e Tortas", desc: "28 receitas de bolos funcionais: cenoura, banana, cacau, limão — todos testados e aprovados." },
      { name: "Sorvetes e Picolés", desc: "18 receitas de frio funcional: de banana nice cream a picolé de frutas com kefir." },
      { name: "Cookies e Biscoitos", desc: "20 receitas de snacks doces: cookies de aveia, biscoitos de oleaginosas, alfajores funcionais." },
      { name: "Sobremesas de Liquidificador", desc: "22 receitas rápidas: pudim, pavê, cheesecake gelado — praticidade com ciência." },
      { name: "Sobremesas Especiais e Festivas", desc: "40 receitas temáticas: para datas comemorativas, para vender, para festas saudáveis." },
    ]
  },
  { icon: FaBook, title: "Volume 2 — Doce Sem Culpa (252 rec.)", color: "#5A1A3A",
    chapters: [
      { name: "Parte 1 — Bases e Fundamentos", desc: "4 capítulos de ciência: química da sobremesa funcional, substitutos, gorduras boas e adoçantes." },
      { name: "Parte 2 — Receitas por Categoria", desc: "18 capítulos com receitas organizadas por tipo, cada uma com box 'Por Que Funciona?' e ficha nutricional." },
      { name: "Parte 3 — Capítulos Especiais", desc: "Kids, Low Carb, Keto, Proteico, Regional, Para Vender — com fichas de custo e margem." },
      { name: "Parte 4 — Referências e Índices", desc: "72 referências científicas, índice cruzado por tag, fichas de geladeira e encerramento." },
    ]
  },
  { icon: FaMagic, title: "Volume 3 — Trufas & Docinhos (100 rec.)", color: "#8B2252",
    chapters: [
      { name: "Brigadeiros Funcionais", desc: "15 versões de brigadeiro: cacau 70%, castanha, café, especiarias — cada um com ficha técnica." },
      { name: "Trufas Artesanais", desc: "20 receitas de trufas: belga, suíça, francesa — com cobertura, recheio e acabamento profissional." },
      { name: "Docinhos de Festa", desc: "25 receitas para eventos: cajuzinho, olho-de-sogra, amendoim — versões funcionais dos clássicos." },
      { name: "Bombons e Chocolates", desc: "20 receitas de bombons artesanais com moldes, cobertura temperada e recheios funcionais." },
      { name: "Para Vender", desc: "20 receitas com fichas de custo, precificação, embalagem e sugestão de kit presente." },
    ]
  },
  { icon: FaGift, title: "Bônus e Extras", color: "#D4A04A",
    chapters: [
      { name: "Kit Fichas Técnicas Ilustradas (OB1)", desc: "30 fichas A5 imprimíveis das sobremesas hero, com foto, macros e substituições por restrição." },
      { name: "Guia Científico de Ingredientes (OB2)", desc: "48 fichas dos ingredientes funcionais: função bioativa, dose diária, interações e onde comprar." },
      { name: "Sistema de Tags e Índice Cruzado", desc: "Navegue por restrição alimentar ou condição de saúde. Incluso no Volume 2." },
    ]
  },
];

const CourseContent: React.FC = () => {
  const [openPart, setOpenPart] = useState<number>(1);
  return (
    <section className="py-20 px-6 lg:px-12 bg-white" data-aos="fade-up">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest font-semibold mb-3" style={{ color: "#8B2252" }}>Conteúdo completo</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            3 volumes + <span style={{ color: "#8B2252" }}>base científica em cada receita</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">+500 receitas com sistema de tags, fichas nutricionais e o box "Por Que Funciona?" que muda sua relação com a cozinha.</p>
        </div>
        <div className="space-y-4">
          {parts.map((part, i) => (
            <div key={i} className="rounded-2xl border border-rose-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button onClick={() => setOpenPart(openPart === i ? -1 : i)}
                className="w-full flex items-center gap-4 px-7 py-5 text-left transition-colors"
                style={{ backgroundColor: openPart === i ? `${part.color}08` : "white" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${part.color}15` }}>
                  <part.icon className="text-lg" style={{ color: part.color }} />
                </div>
                <span className="flex-1 font-bold text-gray-800">{part.title}</span>
                <FaChevronDown className="text-gray-400 text-sm transition-transform duration-300" style={{ transform: openPart === i ? "rotate(180deg)" : "rotate(0deg)" }} />
              </button>
              {openPart === i && (
                <div className="px-7 pb-6 space-y-3">
                  {part.chapters.map((ch, j) => (
                    <div key={j} className="flex gap-3 py-3 border-b border-rose-50 last:border-0">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-white text-xs font-bold mt-0.5" style={{ backgroundColor: part.color }}>{j + 1}</div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">{ch.name}</p>
                        <p className="text-gray-500 text-xs mt-1 leading-relaxed">{ch.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseContent;
