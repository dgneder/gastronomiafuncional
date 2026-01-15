"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

interface Testimonial {
  name: string;
  age: number;
  text: string;
  image: string;
  highlight: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Camila Oliveira",
    age: 32,
    text: "As sobremesas funcionais mudaram minha rotina! Agora me sinto mais leve e feliz ao comer doce.",
    image: "/sobremesas/Camila_Oliveira.jpeg",
    highlight: "Mais leve e feliz",
  },
  {
    name: "Lucas Almeida",
    age: 40,
    text: "Descobri uma forma saudável de controlar o peso sem abrir mão de sobremesas incríveis.",
    image: "/sobremesas/Lucas_Almeida.jpeg",
    highlight: "Controle de peso",
  },
  {
    name: "Renata Costa",
    age: 42,
    text: "Agora minha pele está melhor, meu intestino mais regulado, e ainda como doce todo dia!",
    image: "/sobremesas/Renata_Costa.jpeg",
    highlight: "Pele e intestino",
  },
  {
    name: "Patrícia Mendes",
    age: 48,
    text: "Minhas crianças adoram essas receitas! É bom saber que estão comendo com saúde e prazer.",
    image: "/sobremesas/Patrícia_Mendes.jpeg",
    highlight: "Toda a família ama",
  },
  {
    name: "Diego Gonçalves",
    age: 39,
    text: "Essas receitas são práticas, saborosas e funcionais. Percebi melhora na imunidade e disposição.",
    image: "/sobremesas/Diego_Gonçalves.jpeg",
    highlight: "Mais imunidade",
  },
  {
    name: "Fernanda Souza",
    age: 50,
    text: "A variedade é maravilhosa! Cada dia experimento algo novo e delicioso sem culpa.",
    image: "/sobremesas/Fernanda_Souza.jpeg",
    highlight: "Variedade incrível",
  },
];

interface TestimonialsCarouselProps {
  onButtonClick: () => void;
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ onButtonClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Touch/swipe handling
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  return (
    <section className="py-10 sm:py-16 px-4 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-5xl mx-auto">
        {/* Título */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-1 text-yellow-400 mb-3">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            <span className="text-gray-600 text-sm ml-2">4.9 de 5</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            O que nossos <span className="text-pink-600">clientes</span> dizem
          </h2>
          <p className="text-gray-600">
            Mais de 1.000 pessoas já transformaram sua relação com sobremesas
          </p>
        </div>

        {/* Carrossel */}
        <div 
          ref={carouselRef}
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-2 sm:px-4"
              >
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mx-auto max-w-lg">
                  {/* Quote icon */}
                  <FaQuoteLeft className="text-pink-200 text-3xl mb-4" />
                  
                  {/* Texto */}
                  <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
                    &quot;{testimonial.text}&quot;
                  </p>

                  {/* Highlight */}
                  <div className="inline-block bg-pink-100 text-pink-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    ✨ {testimonial.highlight}
                  </div>

                  {/* Autor */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-pink-200">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.age} anos</p>
                    </div>
                    <div className="ml-auto flex text-yellow-400 text-sm">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navegação Desktop */}
          <button
            onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full items-center justify-center text-gray-600 hover:text-pink-600 hover:shadow-xl transition-all"
            aria-label="Anterior"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full items-center justify-center text-gray-600 hover:text-pink-600 hover:shadow-xl transition-all"
            aria-label="Próximo"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentIndex 
                  ? "bg-pink-500 w-6" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Junte-se a mais de 1.000 pessoas que já transformaram sua alimentação
          </p>
          <button
            onClick={onButtonClick}
            className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            Quero Fazer Parte!
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
