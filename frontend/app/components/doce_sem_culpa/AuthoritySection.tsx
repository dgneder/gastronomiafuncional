"use client";

import Image from "next/image";
import React from "react";
import { FaGraduationCap, FaMicroscope, FaHeartbeat, FaFlask, FaUtensils } from "react-icons/fa";

const credentials = [
  { icon: FaGraduationCap, text: "Doutor em Genética e Melhoramento de Plantas" },
  { icon: FaFlask,         text: "15+ anos de pesquisa em plantas bioativas" },
  { icon: FaMicroscope,    text: "Professor universitário (UEPB) e autor indexado" },
  { icon: FaHeartbeat,     text: "Convive com diabetes, doença renal e hipertensão" },
];

const AuthoritySection: React.FC = () => {
  return (
    <section
      className="py-20 px-6 lg:px-12"
      style={{ background: "linear-gradient(180deg, #FBF5E8 0%, #F5E6D0 100%)" }}
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto lg:flex lg:items-start lg:gap-16">

        {/* Foto do autor */}
        <div className="lg:w-5/12 mb-10 lg:mb-0 flex justify-center" data-aos="fade-right">
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-2xl"
              style={{ background: "linear-gradient(135deg, #D4A04A20, #8B225220)" }}
            />
            <div className="relative w-72 h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/doce-sem-culpa/professor.png"
                alt="Prof. Dr. Diogo Gonçalves Neder"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 288px, 320px"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
              />
            </div>
            <div
              className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-lg px-5 py-3 border"
              style={{ borderColor: "#D4A04A40" }}
            >
              <p className="text-xs text-stone-400 uppercase tracking-wide">Co-autores</p>
              <p className="font-bold text-stone-800 text-sm">Diogo G. Neder</p>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="lg:w-7/12 space-y-6" data-aos="fade-left">
          <p className="text-sm uppercase tracking-widest font-semibold" style={{ color: "#8B2252" }}>
            Quem criou este kit
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-stone-800 leading-tight">
            Um cientista que pesquisa bioativos —{" "}
            <span style={{ color: "#8B2252" }}>e que precisa cuidar da própria saúde todos os dias.</span>
          </h2>

          <p className="text-stone-600 text-lg leading-relaxed">
            Convivo com doença renal crônica hereditária, diabetes e hipertensão. São três condições
            que transformam cada refeição numa equação. Mas sou também Engenheiro Agrônomo e Doutor
            em Genética e Melhoramento de Plantas — passei 15 anos estudando o que torna cada
            ingrediente o que ele é.
          </p>

          <p className="text-stone-600 leading-relaxed">
            A epicatequina do cacau que aparece nos artigos de cardiologia está no brownie que meus
            filhos comem no domingo. A curcumina que eu estudava pela ação anti-inflamatória está no
            pudim funcional da Anne. O ácido elágico do morango, as antocianinas do açaí, a
            beta-glucana da aveia — cada composto que eu identifiquei em pesquisa virou uma receita
            na nossa cozinha.
          </p>

          <div
            className="rounded-xl p-5 border-l-4"
            style={{ borderColor: "#8B2252", backgroundColor: "#FFFFFF" }}
          >
            <div className="flex items-start gap-3">
              <FaUtensils className="text-xl mt-1 shrink-0" style={{ color: "#8B2252" }} />
              <p className="text-stone-600 leading-relaxed">
                <strong className="text-stone-800">Anne Carolina, minha esposa, é co-autora.</strong>{" "}
                Ela trouxe o que eu não tenho: o olhar prático de quem organiza uma casa real com
                quatro crianças, restrições alimentares variadas, e o tempo limitado de quem acorda
                todo dia antes das seis da manhã. A ciência sem a prática é teoria. A prática sem a
                ciência é tentativa.
              </p>
            </div>
          </div>

          {/* Credenciais */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
            {credentials.map((cred, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-lg px-4 py-3 shadow-sm"
              >
                <cred.icon className="text-lg shrink-0" style={{ color: "#8B2252" }} />
                <span className="text-sm text-stone-700 font-medium">{cred.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AuthoritySection;
