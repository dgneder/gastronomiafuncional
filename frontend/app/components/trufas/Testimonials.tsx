"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaPlay, FaPause } from "react-icons/fa";

interface Testimonial {
  name: string;
  age: number;
  text: string;
  image: string;
  audio: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Laura Menezes",
    age: 24,
    text: "As trufas funcionais mudaram minha relação com o doce! Agora como docinhos sem culpa e ainda cuido da saúde.",
    image: "/trufas/depoimento01.png",
    audio: "/trufas/laura.mp3",
  },
  {
    name: "Rafael Andrade",
    age: 32,
    text: "Comecei a fazer para consumo próprio e agora vendo para clientes. Renda extra com algo que amo fazer!",
    image: "/trufas/depoimento02.png",
    audio: "/trufas/rafael.mp3",
  },
  {
    name: "Camila Rocha",
    age: 30,
    text: "Minha pele melhorou muito depois que comecei a comer as trufas com colágeno. E são deliciosas!",
    image: "/trufas/depoimento03.png",
    audio: "/trufas/camila.mp3",
  },
  {
    name: "Ricardo Souza",
    age: 45,
    text: "Vou presentear minha família no Natal com as trufas funcionais. Tenho certeza que será um sucesso absoluto!",
    image: "/trufas/depoimento04.png",
    audio: "/trufas/ricardo.mp3",
  },
  {
    name: "Fernanda Lima",
    age: 48,
    text: "As trufas pré-treino viraram meu ritual. Energia natural sem precisar de suplementos artificiais.",
    image: "/trufas/depoimento05.png",
    audio: "/trufas/fernanda.mp3",
  },
  {
    name: "Edna Oliveira",
    age: 55,
    text: "Finalmente encontrei receitas que posso comer sendo diabética. Baixo índice glicêmico e muito saborosas!",
    image: "/trufas/depoimento06.png",
    audio: "/trufas/edna.mp3",
  },
];

const Testimonials: React.FC = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const handleAudioToggle = (index: number) => {
    const audioElement = document.getElementById(
      `audio-${index}`
    ) as HTMLAudioElement;

    if (playingIndex === index) {
      audioElement.pause();
      setPlayingIndex(null);
    } else {
      if (playingIndex !== null) {
        const previousAudio = document.getElementById(
          `audio-${playingIndex}`
        ) as HTMLAudioElement;
        if (previousAudio) previousAudio.pause();
      }
      audioElement.play();
      setPlayingIndex(index);
    }
  };

  return (
    <section
      id="testimonials"
      data-aos="fade-up"
      className="py-20 px-6 lg:px-12 bg-gradient-to-r from-amber-50 via-orange-100 to-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Título da Seção */}
        <h2 className="text-3xl lg:text-4xl font-extrabold text-amber-700 mb-4 leading-snug">
          Histórias Reais de Quem Já Faz Trufas Funcionais
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          Pessoas comuns que descobriram como é possível unir prazer, saúde e até renda extra com trufas gourmet funcionais.
        </p>

        {/* Grid de Depoimentos */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 text-center border-t-4 border-amber-400"
            >
              {/* Imagem do cliente */}
              <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-amber-300 mb-4 shadow-md">
                <Image
                  src={testimonial.image}
                  alt={`Foto de ${testimonial.name}`}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>

              {/* Nome, Idade e Depoimento */}
              <h3 className="text-lg font-semibold text-amber-700">
                {testimonial.name}, {testimonial.age} anos
              </h3>
              <p className="text-gray-600 italic text-sm md:text-base leading-relaxed mt-2">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Botão para tocar áudio */}
              <button
                onClick={() => handleAudioToggle(index)}
                className="mt-4 flex items-center justify-center space-x-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-500 transition-transform transform hover:scale-105"
              >
                {playingIndex === index ? <FaPause /> : <FaPlay />}
                <span>
                  {playingIndex === index ? "Pausar" : "Ouvir Depoimento"}
                </span>
              </button>

              {/* Player de áudio oculto */}
              <audio id={`audio-${index}`} className="hidden">
                <source src={testimonial.audio} type="audio/mpeg" />
                Seu navegador não suporta a reprodução de áudio.
              </audio>
            </div>
          ))}
        </div>

        {/* CTA final após depoimentos */}
        <div className="mt-16">
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Essas histórias também podem ser a sua. Comece hoje a fazer trufas que encantam e nutrem.
          </p>
          <button
            onClick={() => window.location.href = "/cadastro_trufas"}
            className="px-10 py-4 text-lg font-semibold text-white bg-amber-600 rounded-xl hover:bg-amber-500 transition-transform transform hover:scale-105 shadow-lg"
          >
            Quero Começar Minha Jornada!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;