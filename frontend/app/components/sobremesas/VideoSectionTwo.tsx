"use client";
import React, { useEffect, useRef, useState } from "react";

const VideoSectionTwo: React.FC = () => {
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
      className="py-20 px-6 lg:px-12 bg-gradient-to-b from-rose-100 via-pink-100 to-white text-center"
    >
      <div className="max-w-5xl mx-auto">
        {/* Título */}
        <h2 className="text-3xl lg:text-4xl font-bold text-pink-700 mb-4">
          Encante-se com Cada Detalhe
        </h2>

        {/* Subtítulo */}
        <p className="text-lg lg:text-xl text-gray-700 mb-10 leading-relaxed">
          As sobremesas funcionais combinam saúde, beleza e sabor em cada colherada — assista e sinta o prazer visual de cuidar de si.
        </p>

        {/* Vídeo com tarja ampliada */}
        <div className="relative rounded-xl shadow-2xl overflow-hidden border-4 border-pink-300 transition-transform hover:scale-[1.01]">
          <video
            ref={videoRef}
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"
            poster="/imagens/sobremesas-poster-02.jpg"
            className="w-full h-auto"
          >
            <source src="/videos/sobremesas-video-02-opt.webm" type="video/webm" />
            <source src="/videos/sobremesas-video-02-opt.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos. Experimente acessar com um navegador mais moderno.
          </video>

          {/* Tarja mais alta para cobrir a marca d'água */}
          <div className="absolute bottom-2 right-2 bg-pink-600 text-white text-sm font-semibold px-3 py-2 rounded-lg shadow-lg h-10 flex items-center">
            🍮 Delícia sem Culpa
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSectionTwo;
