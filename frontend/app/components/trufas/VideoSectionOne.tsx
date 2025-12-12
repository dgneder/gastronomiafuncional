// VideoSectionOne.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";

const VideoSectionOne: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoaded) {
          setIsLoaded(true);
          videoRef.current?.play();
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [isLoaded]);

  return (
    <section
      data-aos="fade-up"
      className="py-20 px-6 lg:px-12 bg-gradient-to-b from-amber-50 via-orange-100 to-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-amber-700 mb-4 leading-tight">
          Veja Como é Fácil Fazer Trufas Funcionais em Casa
        </h2>
        <p className="text-lg lg:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
          Assista a esse preparo simples e veja como é possível criar trufas gourmet e saudáveis com ingredientes funcionais.
        </p>

        <div className="relative rounded-xl shadow-xl overflow-hidden border-4 border-amber-300">
          <video
            ref={videoRef}
            muted
            autoPlay
            loop
            playsInline
            controls={false}
            preload="metadata"
            poster="/imagens/sobremesas-poster.jpg"
            className="w-full h-auto"
          >
            <source src="/videos/sobremesas-video-01-opt.webm" type="video/webm" />
            <source src="/videos/sobremesas-video-01-opt.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>

          <div className="absolute bottom-2 right-2 bg-amber-600 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow-lg">
            🍫 Chocolate Funcional
          </div>
        </div>

        <p className="mt-8 text-base text-gray-600 italic">
          E o melhor? Você pode aprender a fazer 100 receitas como essa agora mesmo!
        </p>
      </div>
    </section>
  );
};

export default VideoSectionOne;