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
      className="py-20 px-6 lg:px-12 bg-gradient-to-b from-rose-100 via-pink-100 to-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Título */}
        <h2 className="text-3xl lg:text-4xl font-extrabold text-pink-700 mb-4 leading-tight">
          Descubra Como uma Sobremesa Pode Ser Saudável, Bonita e Funcional
        </h2>

        {/* Subtítulo */}
        <p className="text-lg lg:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
          Assista a esse preparo simples e veja como é possível cuidar da sua saúde com sabor, leveza e prazer.
        </p>

        {/* Vídeo com máscara */}
        <div className="relative rounded-xl shadow-xl overflow-hidden border-4 border-pink-300">
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

          {/* Máscara para cobrir a marca d’água */}
          <div className="absolute bottom-2 right-2 bg-pink-600 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow-lg">
            🍓 Saúde e Sabor
          </div>
        </div>

        {/* Chamada pós-vídeo */}
        <p className="mt-8 text-base text-gray-600 italic">
          E o melhor? Você pode aprender a fazer isso e muito mais agora mesmo no conforto da sua casa.
        </p>
      </div>
    </section>
  );
};

export default VideoSectionOne;
