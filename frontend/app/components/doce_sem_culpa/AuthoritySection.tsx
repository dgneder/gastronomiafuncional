"use client";
import Image from "next/image";
import React from "react";
import { FaGraduationCap, FaMicroscope, FaHeartbeat, FaFlask } from "react-icons/fa";

const credentials = [
  { icon: FaGraduationCap, text: "Doutor em Genética e Melhoramento de Plantas — UEPB" },
  { icon: FaFlask,         text: "Pesquisador em leveduras, fermentação e ciência de alimentos" },
  { icon: FaMicroscope,    text: "Especialista em bioquímica aplicada à gastronomia funcional" },
  { icon: FaHeartbeat,     text: "Convive com doença renal crônica, diabetes e hipertensão em família" },
];

const AuthoritySection: React.FC = () => (
  <section className="py-20 px-6 lg:px-12" style={{ background: "linear-gradient(180deg, #FFF0F5 0%, #FCEEF4 100%)" }} data-aos="fade-up">
    <div className="max-w-6xl mx-auto lg:flex lg:items-center lg:gap-16">
      <div className="lg:w-5/12 mb-10 lg:mb-0 flex justify-center" data-aos="fade-right">
        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl" style={{ background: "linear-gradient(135deg, #8B225215, #D4A04A15)" }} />
          <div className="relative w-72 h-80 lg:w-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/panificacao/professor.png" alt="Prof. Dr. Diogo Gonçalves Neder" fill className="object-cover" />
          </div>
          <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl px-5 py-3 border border-rose-100">
            <p className="text-xs text-gray-400 uppercase tracking-wide">Co-autores</p>
            <p className="font-bold text-gray-800 text-sm">Prof. Dr. Diogo Neder</p>
            <p className="text-xs text-gray-500">& Anne Carolina Neder</p>
          </div>
        </div>
      </div>
      <div className="lg:w-7/12 space-y-6" data-aos="fade-left">
        <p className="text-sm uppercase tracking-widest font-semibold" style={{ color: "#8B2252" }}>Quem criou esta coleção</p>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
          Um cientista que pesquisa leveduras —{" "}
          <span style={{ color: "#8B2252" }}>e que precisa cuidar da própria saúde</span>
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Passei anos estudando ao microscópio as leveduras que fazem a fermentação acontecer. Esse caminho me levou
          à ciência e tecnologia de alimentos — e foi convivendo com doença renal, diabetes e hipertensão em família
          que entendi: gastronomia funcional não é tendência. É necessidade.
        </p>
        <p className="text-gray-500 leading-relaxed">
          Esta coleção nasceu com minha esposa Anne Carolina, que traz o olhar do cuidado hospitalar e da alimentação
          terapêutica. Juntos desenvolvemos sobremesas que são saborosas, bonitas e respaldadas pela ciência.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {credentials.map((cred, i) => (
            <div key={i} className="flex items-center gap-3 bg-white/80 rounded-xl px-4 py-3 shadow-sm border border-rose-50">
              <cred.icon className="text-lg shrink-0" style={{ color: "#8B2252" }} />
              <span className="text-sm text-gray-700 font-medium">{cred.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AuthoritySection;
