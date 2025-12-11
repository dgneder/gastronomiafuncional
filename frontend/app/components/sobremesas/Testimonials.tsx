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
    name: "Camila Oliveira",
    age: 32,
    text: "As sobremesas funcionais mudaram minha rotina! Agora me sinto mais leve e feliz ao comer doce.",
    image: "/sobremesas/Camila_Oliveira.jpeg",
    audio: "/audios/camila_oliveira.mp3",
  },
  {
    name: "Lucas Almeida",
    age: 40,
    text: "Descobri uma forma saudável de controlar o peso sem abrir mão de sobremesas incríveis.",
    image: "/sobremesas/Lucas_Almeida.jpeg",
    audio: "/audios/lucas-almeida.mp3",
  },
  {
    name: "Renata Costa",
    age: 42,
    text: "Agora minha pele está melhor, meu intestino mais regulado, e ainda como doce todo dia!",
    image: "/sobremesas/Renata_Costa.jpeg",
    audio: "/audios/renata-costa.mp3",
  },
  {
    name: "Patrícia Mendes",
    age: 48,
    text: "Minhas crianças adoram essas receitas! É bom saber que estão comendo com saúde e prazer.",
    image: "/sobremesas/Patrícia_Mendes.jpeg",
    audio: "/audios/patricia-mendes.mp3",
  },
  {
    name: "Diego Gonçalves",
    age: 39,
    text: "Essas receitas são práticas, saborosas e funcionais. Percebi melhora na imunidade e disposição.",
    image: "/sobremesas/Diego_Gonçalves.jpeg",
    audio: "/audios/diego-goncalves.mp3",
  },
  {
    name: "Fernanda Souza",
    age: 50,
    text: "A variedade é maravilhosa! Cada dia experimento algo novo e delicioso sem culpa.",
    image: "/sobremesas/Fernanda_Souza.jpeg",
    audio: "/audios/fernanda-souza.mp3",
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
      className="py-20 px-6 lg:px-12 bg-gradient-to-r from-rose-100 via-pink-100 to-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Título da Seção */}
        <h2 className="text-3xl lg:text-4xl font-extrabold text-pink-700 mb-4 leading-snug">
          Histórias Reais, Transformações Doces
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          Pessoas comuns que descobriram como é possível cuidar da saúde com sobremesas irresistíveis – e sem culpa.
        </p>

        {/* Grid de Depoimentos */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 text-center border-t-4 border-pink-300"
            >
              {/* Imagem do cliente */}
              <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-pink-300 mb-4 shadow-md">
                <Image
                  src={testimonial.image}
                  alt={`Foto de ${testimonial.name}`}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>

              {/* Nome, Idade e Depoimento */}
              <h3 className="text-lg font-semibold text-pink-700">
                {testimonial.name}, {testimonial.age} anos
              </h3>
              <p className="text-gray-600 italic text-sm md:text-base leading-relaxed mt-2">
                "{testimonial.text}"
              </p>

              {/* Botão para tocar áudio */}
              <button
                onClick={() => handleAudioToggle(index)}
                className="mt-4 flex items-center justify-center space-x-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-400 transition-transform transform hover:scale-105"
              >
                {playingIndex === index ? <FaPause /> : <FaPlay />}
                <span>
                  {playingIndex === index ? "Pausar" : "Ouvir Depoimento"}
                </span>
              </button>

              {/* Player de Áudio oculto */}
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
            Essas histórias também podem ser a sua. Descubra o prazer de comer bem, cuidar do corpo e transformar seus dias com sabor.
          </p>
          <button
            onClick={() => window.location.href = "/cadastro_sobremesas"}
            className="px-10 py-4 text-lg font-semibold text-white bg-pink-500 rounded-xl hover:bg-pink-400 transition-transform transform hover:scale-105 shadow-lg"
          >
            Quero Começar Minha Transformação!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
