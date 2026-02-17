"use client";

import React from "react";
import { FaGraduationCap, FaUniversity, FaMicroscope, FaUsers } from "react-icons/fa";

const credentials = [
  { icon: <FaGraduationCap />, text: "PhD em Genética de Plantas" },
  { icon: <FaUniversity />, text: "Professor Universitário" },
  { icon: <FaMicroscope />, text: "20+ anos de pesquisa" },
  { icon: <FaUsers />, text: "Pai de 4 filhos" },
];

const AuthorSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10">
          Quem está por trás deste guia
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* ── Coluna esquerda: Foto ── */}
          <div className="lg:w-2/5 text-center flex-shrink-0">
            {/* Placeholder para foto do Dr. Diogo */}
            <div className="w-64 h-80 sm:w-72 sm:h-96 mx-auto rounded-2xl bg-gradient-to-br from-[#2D5016] to-[#4A7C29] shadow-xl flex items-center justify-center overflow-hidden border-4 border-[#4A7C29]/20">
              {/* 
                TODO: Substituir pela foto real
                <Image
                  src="/fitoterapia/dr-diogo.jpg"
                  alt="Dr. Diogo Gonçalves Neder"
                  fill
                  className="object-cover"
                  sizes="300px"
                />
              */}
              <div className="text-center p-6">
                <div className="text-7xl mb-3">👨‍🔬</div>
                <p className="text-white/80 text-sm">Foto profissional</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="font-bold text-gray-900 text-lg">
                Dr. Diogo Gonçalves Neder
              </p>
              <p className="text-gray-500 text-sm italic">
                Engenheiro Agrônomo · Doutor em Genética e Melhoramento de
                Plantas
              </p>
            </div>
          </div>

          {/* ── Coluna direita: Texto ── */}
          <div className="lg:w-3/5">
            <div className="text-gray-600 text-base leading-relaxed space-y-4">
              <p>
                Meu nome é Diogo Gonçalves Neder. Sou engenheiro agrônomo,
                professor universitário na Universidade Estadual da Paraíba e
                doutor em Genética e Melhoramento de Plantas.
              </p>
              <p>
                Passei mais de 20 anos dentro de universidades, laboratórios e
                campos de pesquisa estudando como as plantas funcionam — não de
                forma superficial, mas nos genes, nos compostos químicos, nos
                mecanismos moleculares que fazem uma planta produzir substâncias
                capazes de agir no corpo humano.
              </p>
              <p>E durante todos esses anos, duas coisas me incomodavam profundamente:</p>
              <p>
                A primeira era ver pessoas dizendo que &ldquo;planta não funciona, é
                coisa de leigo&rdquo; — quando eu sabia que existiam milhares de
                estudos comprovando o contrário.
              </p>
              <p>
                A segunda era ver pessoas usando plantas de forma errada, sem
                saber dos riscos, achando que &ldquo;é natural, então é
                seguro&rdquo; — quando eu sabia que a dose errada, a combinação
                errada ou a planta errada pode causar problemas reais.
              </p>
              <p className="font-semibold text-gray-800">
                A verdade está no meio. Plantas medicinais funcionam — mas
                precisam ser usadas com conhecimento.
              </p>
              <p>
                Foi pensando nisso — e na minha própria família — que decidi
                escrever o guia que eu gostaria que toda casa brasileira tivesse.
              </p>
            </div>

            {/* Quote box */}
            <div className="mt-6 p-5 bg-[#FBF7EF] rounded-xl border-l-4 border-[#B8860B]">
              <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed">
                &ldquo;Eu escrevi o Fitoterapia Essencial pensando no que eu
                gostaria que minha mãe, minha esposa e meus filhos soubessem
                antes de usar qualquer planta medicinal. Se eu exijo esse nível
                de informação para a minha família — eu exijo para a sua
                também.&rdquo;
              </p>
            </div>

            {/* Credenciais em linha */}
            <div className="mt-6 flex flex-wrap gap-3">
              {credentials.map((cred, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 bg-[#4A7C29]/10 rounded-lg text-[#2D5016] text-sm"
                >
                  {cred.icon}
                  <span className="font-medium">{cred.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
