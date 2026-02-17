"use client";

import React from "react";

const plantSystems = [
  {
    emoji: "🧠",
    system: "Sistema Nervoso",
    plants: [
      "Camomila",
      "Passiflora",
      "Valeriana",
      "Melissa",
      "Capim-limão",
      "Mulungu",
      "Ashwagandha",
    ],
  },
  {
    emoji: "🫄",
    system: "Sistema Digestivo",
    plants: [
      "Boldo-do-Chile",
      "Espinheira-santa",
      "Hortelã-pimenta",
      "Gengibre",
      "Alcachofra",
      "Erva-doce",
      "Babosa",
    ],
  },
  {
    emoji: "🛡️",
    system: "Sistema Imunológico",
    plants: ["Equinácea", "Cúrcuma", "Alho", "Sabugueiro", "Unha-de-gato"],
  },
  {
    emoji: "🫁",
    system: "Sistema Respiratório",
    plants: ["Guaco", "Eucalipto", "Malva"],
  },
  {
    emoji: "🌸",
    system: "Sistema Hormonal Feminino",
    plants: ["Vitex", "Amora-branca", "Óleo de prímula"],
  },
  {
    emoji: "💪",
    system: "Musculoesquelético e Circulatório",
    plants: ["Arnica", "Castanha-da-índia", "Cavalinha", "Alecrim", "Canela"],
  },
];

const protocols = [
  { emoji: "🌙", name: "Sono e Relaxamento" },
  { emoji: "🫄", name: "Digestão e Bem-Estar Intestinal" },
  { emoji: "🛡️", name: "Imunidade de Inverno" },
  { emoji: "🌸", name: "TPM e Equilíbrio Menstrual" },
  { emoji: "💪", name: "Dor e Inflamação" },
  { emoji: "🦵", name: "Pernas Pesadas e Circulação" },
  { emoji: "🧠", name: "Foco e Energia Mental" },
];

interface ChapterBlockProps {
  badge: string;
  badgeExtra?: string;
  badgeColor?: string;
  title: string;
  children: React.ReactNode;
  reverse?: boolean;
}

const ChapterBlock: React.FC<ChapterBlockProps> = ({
  badge,
  badgeExtra,
  badgeColor = "bg-[#4A7C29]",
  title,
  children,
  reverse,
}) => (
  <div
    className={`flex flex-col ${
      reverse ? "lg:flex-row-reverse" : "lg:flex-row"
    } gap-6 lg:gap-10 items-start py-8 border-b border-gray-100 last:border-0`}
  >
    <div className="lg:w-full">
      <div className="flex items-center gap-2 mb-3">
        <span
          className={`${badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}
        >
          {badge}
        </span>
        {badgeExtra && (
          <span className="text-[#B8860B] text-xs font-medium">
            {badgeExtra}
          </span>
        )}
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
        {title}
      </h3>
      <div className="text-gray-600 text-sm sm:text-base leading-relaxed">
        {children}
      </div>
    </div>
  </div>
);

const ContentDetails: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10">
          O que você vai encontrar{" "}
          <span className="text-[#2D5016]">dentro do guia</span>
        </h2>

        {/* ── Capítulo 1 ── */}
        <ChapterBlock
          badge="Capítulo 1"
          title="O Que Você Precisa Saber Antes de Usar Qualquer Planta"
        >
          <p>
            Antes de conhecer as plantas, você vai entender os fundamentos que
            separam o uso consciente do uso arriscado. Os dois mitos mais
            perigosos sobre fitoterapia — e por que ambos estão errados. Como as
            plantas realmente funcionam no corpo (metabólitos secundários,
            flavonoides, alcaloides, terpenos — explicados de forma simples). O
            sistema de evidência científica que usamos no guia. E as 6 Regras de
            Ouro que você vai seguir em toda a sua jornada com plantas
            medicinais.
          </p>
        </ChapterBlock>

        {/* ── Capítulo 2 ── */}
        <ChapterBlock
          badge="Capítulo 2"
          badgeExtra="O coração do guia"
          title="30 Fichas Completas de Plantas Medicinais"
          reverse
        >
          <p className="mb-4">
            Cada uma das 30 plantas tem uma ficha completa e aprofundada com:{" "}
            <strong>Para que serve</strong>, <strong>Como funciona no corpo</strong>,{" "}
            <strong>O que a ciência diz</strong>, <strong>Como usar</strong>{" "}
            (passo a passo), <strong>Dosagem</strong>,{" "}
            <strong>Contraindicações e cuidados</strong> e{" "}
            <strong>Dica do especialista</strong>.
          </p>

          {/* Grade de plantas por sistema */}
          <div className="mt-6 space-y-3">
            {plantSystems.map((sys, index) => (
              <div
                key={index}
                className="bg-[#FBF7EF] rounded-xl p-4"
              >
                <p className="font-semibold text-gray-800 text-sm mb-2">
                  {sys.emoji} {sys.system}
                </p>
                <div className="flex flex-wrap gap-2">
                  {sys.plants.map((plant, pIndex) => (
                    <span
                      key={pIndex}
                      className="bg-white text-gray-700 text-xs px-3 py-1.5 rounded-full border border-[#4A7C29]/15 font-medium"
                    >
                      {plant}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ChapterBlock>

        {/* ── Capítulo 3 ── */}
        <ChapterBlock
          badge="Capítulo 3"
          title="Como Preparar: Os 3 Métodos Essenciais"
        >
          <p>
            A forma como você prepara uma planta determina se ela vai funcionar
            ou virar água colorida. Neste capítulo você vai dominar os 3 métodos
            que cobrem todas as 30 plantas do guia:{" "}
            <strong>Infusão</strong> (para flores e folhas),{" "}
            <strong>Decocção</strong> (para raízes e cascas) e{" "}
            <strong>Tintura hidroalcoólica</strong> (para praticidade e
            conservação). Cada método com passo a passo detalhado, temperatura
            exata, tempo de preparo e as plantas que se encaixam em cada um.
          </p>
        </ChapterBlock>

        {/* ── Capítulo 4 ── */}
        <ChapterBlock
          badge="Capítulo 4"
          badgeExtra="Favorito dos leitores"
          title="7 Protocolos Prontos Para Usar Hoje"
          reverse
        >
          <p className="mb-5">
            Este é o capítulo mais prático do guia. São 7 protocolos completos,
            com planos de ação prontos: quais plantas usar, em que horário, em
            que dose, por quanto tempo, e o que fazer se não funcionar no prazo
            esperado.
          </p>

          {/* Mini-cards dos protocolos */}
          <div className="flex flex-wrap gap-2">
            {protocols.map((protocol, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-[#4A7C29]/10 px-4 py-2.5 rounded-xl"
              >
                <span className="text-lg">{protocol.emoji}</span>
                <div>
                  <p className="text-xs text-[#2D5016]/60 font-medium">
                    Protocolo {index + 1}
                  </p>
                  <p className="text-sm font-semibold text-[#2D5016]">
                    {protocol.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm text-gray-500">
            E no final do capítulo, você aprende a criar seus próprios protocolos
            — os 3 princípios que um cientista usa para combinar plantas de forma
            segura e eficaz.
          </p>
        </ChapterBlock>

        {/* ── Capítulo 5 ── */}
        <ChapterBlock
          badge="Capítulo 5"
          badgeExtra="Essencial"
          badgeColor="bg-red-600"
          title="Segurança: O Capítulo Que Pode Salvar Sua Vida"
        >
          <p className="mb-4">
            Este é o capítulo mais curto do guia. E o mais importante. Aqui você
            vai descobrir: quais plantas interagem de forma perigosa com
            medicamentos de uso contínuo (anticoagulantes, antidiabéticos,
            imunossupressores, anticoncepcionais). Quais são contraindicadas na
            gravidez, amamentação e para crianças. Os 5 sinais de alerta que
            exigem suspensão imediata. E os 5 erros que mais colocam pessoas em
            risco.
          </p>

          {/* Box de alerta */}
          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-4 mt-4">
            <p className="text-red-800 text-sm font-semibold mb-1">
              ⚠️ Por que isso importa:
            </p>
            <p className="text-red-700 text-sm">
              Alho em dose alta + anticoagulante pode potencializar sangramento.
              Cavalinha todo dia sem acompanhamento pode causar perda de minerais
              essenciais. Equinácea é contraindicada para transplantados. São
              riscos reais que quase ninguém menciona — e que estão detalhados
              neste capítulo.
            </p>
          </div>
        </ChapterBlock>

        {/* ── Anexos ── */}
        <ChapterBlock
          badge="Bônus incluído"
          badgeColor="bg-[#B8860B]"
          title="Anexos: Tabela Rápida + Glossário + Referências"
          reverse
        >
          <p>
            <strong>Tabela rápida das 30 plantas</strong> — uma página para você
            imprimir e fixar na cozinha. Todas as plantas em ordem alfabética com
            indicação, método de preparo, dosagem e precauções em formato de
            consulta rápida. <strong>Glossário</strong> com todos os termos
            técnicos explicados. <strong>Referências científicas</strong>{" "}
            organizadas por planta e por sistema — com links para PubMed e
            Cochrane para quem quiser ir direto na fonte.
          </p>
        </ChapterBlock>
      </div>
    </section>
  );
};

export default ContentDetails;
