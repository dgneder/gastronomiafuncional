"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaPlay, FaPause, FaStar } from "react-icons/fa";

interface Testimonial {
  name: string;
  age: number;
  location: string;
  persona: string;
  personaColor: string;
  text: string;
  recipe: string;
  image: string;
  audio: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Camila Oliveira",
    age: 38,
    location: "São Paulo, SP",
    persona: "Compulsão Noturna",
    personaColor: "#5B8B7D",
    text: "Atacava o armário toda noite depois que os filhos dormiam. Hoje faço o Mousse de Chocolate 70% às 21h e durmo tranquila. O Protocolo de Compulsão Noturna mudou minha vida.",
    recipe: "Mousse de Chocolate 70% com Aquafaba",
    image: "/doce-sem-culpa/testimonials/camila.png",
    audio: "/doce-sem-culpa/audios/camila.mp3",
    rating: 5,
  },
  {
    name: "Lucas Almeida",
    age: 45,
    location: "Belo Horizonte, MG",
    persona: "Diabetes",
    personaColor: "#3B82F6",
    text: "Sou diabético tipo 2 e achei que minha vida doce tinha acabado. Esse kit me devolveu o prazer de ter sobremesa depois do almoço — sem picar a glicemia. Meu endócrino pediu algumas receitas.",
    recipe: "Capítulo 14 — Low Carb e Keto",
    image: "/doce-sem-culpa/testimonials/lucas.jpg",
    audio: "/doce-sem-culpa/audios/lucas.mp3",
    rating: 5,
  },
  {
    name: "Patrícia Mendes",
    age: 42,
    location: "Curitiba, PR",
    persona: "Mãe Culpada",
    personaColor: "#EC4899",
    text: "Sou mãe de 3 crianças e estava enlouquecendo com os lanches do mercado. O módulo Crianças da plataforma salvou minha vida. Faço sobremesa no domingo e congelo pra semana inteira.",
    recipe: "Semana das Crianças — Cardápio Bônus",
    image: "/doce-sem-culpa/testimonials/patricia.jpg",
    audio: "/doce-sem-culpa/audios/patricia.mp3",
    rating: 5,
  },
  {
    name: "Juliana Andrade",
    age: 29,
    location: "Rio de Janeiro, RJ",
    persona: "Renda Extra",
    personaColor: "#B45309",
    text: "Fiz a Trufa Verde Matchá pra vender no meu trabalho. No primeiro dia vendi 40 unidades. Em 2 meses paguei o kit 15 vezes. Virou minha renda extra. Receita validada.",
    recipe: "Trufa Verde Matchá — Módulo Trufas",
    image: "/doce-sem-culpa/testimonials/juliana.png",
    audio: "/doce-sem-culpa/audios/juliana.mp3",
    rating: 5,
  },
  {
    name: "Renata Costa",
    age: 44,
    location: "Salvador, BA",
    persona: "Beleza Natural",
    personaColor: "#8B2252",
    text: "Fiz as trufas de colágeno todos os dias por 60 dias. Minha pele mudou, minhas unhas pararam de quebrar. E o melhor: não é promessa de marketing, é bioativo real na receita.",
    recipe: "Trufa de Colágeno com Frutas Vermelhas",
    image: "/doce-sem-culpa/testimonials/renata.png",
    audio: "/doce-sem-culpa/audios/renata.mp3",
    rating: 5,
  },
  {
    name: "Marcos Vieira",
    age: 42,
    location: "Rio de Janeiro, RJ",
    persona: "Hipertensão + Diabetes",
    personaColor: "#6B1A3F",
    text: "Tenho hipertensão e pré-diabetes. Meu médico mandou cortar doce. Eu recusei. Comprei o kit. Seis meses depois: A1C caiu 0,8 ponto, pressão estabilizada. Meu médico se surpreendeu.",
    recipe: "Capítulo 14 + OB2 (fichas de adoçantes)",
    image: "/doce-sem-culpa/testimonials/marcos.png",
    audio: "/doce-sem-culpa/audios/marcos.mp3",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const handleAudioToggle = (index: number) => {
    const audioElement = document.getElementById(`audio-${index}`) as HTMLAudioElement;
    if (!audioElement) return;

    if (playingIndex === index) {
      audioElement.pause();
      setPlayingIndex(null);
    } else {
      if (playingIndex !== null) {
        const previousAudio = document.getElementById(`audio-${playingIndex}`) as HTMLAudioElement;
        if (previousAudio) previousAudio.pause();
      }
      audioElement.play().catch(() => {});
      setPlayingIndex(index);
    }
  };

  return (
    <section
      id="testimonials"
      className="py-20 px-6 lg:px-12 bg-white"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest font-semibold mb-3" style={{ color: "#8B2252" }}>
            Depoimentos em áudio
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-stone-800">
            Ouça quem viveu a transformação
          </h2>
          <p className="text-lg text-stone-500 mt-4 max-w-2xl mx-auto">
            Seis pessoas de perfis diferentes. Cada depoimento gravado por quem comprou, usou e aprovou.
            Toque no player para ouvir.
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 80}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-stone-100"
            >
              {/* Badge persona */}
              <div
                className="px-5 py-2 text-center"
                style={{ backgroundColor: t.personaColor }}
              >
                <span className="text-xs font-bold text-white uppercase tracking-widest">
                  {t.persona}
                </span>
              </div>

              <div className="p-6 text-center">
                {/* Avatar */}
                <div
                  className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-4 mb-4 shadow-md"
                  style={{ borderColor: t.personaColor + "40" }}
                >
                  <Image
                    src={t.image}
                    alt={`Foto de ${t.name}`}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>

                {/* Estrelas */}
                <div className="flex justify-center gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <FaStar key={si} className="text-amber-400 text-xs" />
                  ))}
                </div>

                {/* Nome e local */}
                <h3 className="text-base font-bold text-stone-800">
                  {t.name}, {t.age}
                </h3>
                <p className="text-xs text-stone-400 mb-4">{t.location}</p>

                {/* Texto */}
                <p className="text-stone-600 italic text-sm leading-relaxed min-h-[100px]">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Receita mencionada */}
                <div className="mt-4 pt-4 border-t border-stone-100">
                  <span
                    className="inline-block text-xs font-medium px-3 py-1 rounded-full"
                    style={{ backgroundColor: t.personaColor + "15", color: t.personaColor }}
                  >
                    📖 {t.recipe}
                  </span>
                </div>

                {/* Player de áudio */}
                <button
                  onClick={() => handleAudioToggle(index)}
                  className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-2.5 text-white rounded-lg font-bold text-sm transition-transform hover:scale-105 shadow-md"
                  style={{ background: "linear-gradient(135deg, #8B2252, #6B1A3F)" }}
                >
                  {playingIndex === index ? <FaPause /> : <FaPlay />}
                  <span>
                    {playingIndex === index ? "Pausar" : "Ouvir depoimento"}
                  </span>
                </button>

                <audio id={`audio-${index}`} className="hidden">
                  <source src={t.audio} type="audio/mpeg" />
                </audio>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
