// VideoSectionThree.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";

const VideoSectionThree: React.FC = () => {
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

    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, [isLoaded]);

  return (
    <section
      id="experiencia"
      data-aos="fade-up"
      className="relative py-20 px-6 lg:px-12 bg-gradient-to-r from-amber-50 via-orange-100 to-white text-center"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-amber-700 mb-4 leading-tight">
          Transforme Sua Cozinha em uma Confeitaria Funcional
        </h2>
        <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
          Trufas gourmet, saudáveis e irresistíveis — prontas para consumo, presente ou venda.
        </p>

        <div className="rounded-3xl overflow-hidden border-4 border-amber-300 shadow-2xl ring-2 ring-white ring-opacity-30 relative">
          <video
            ref={videoRef}
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"
            poster="/imagens/sobremesas-poster-03.jpg"
            className="w-full h-auto"
          >
            <source src="/videos/sobremesas-video-03-opt.webm" type="video/webm" />
            <source src="/videos/sobremesas-video-03-opt.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>

          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 text-white text-sm lg:text-base font-medium text-center">
            Trufas reais feitas com as receitas do guia
          </div>

          <div className="absolute bottom-2 right-2 bg-amber-600 text-white text-sm font-semibold px-3 py-2 rounded-lg shadow-lg h-10 flex items-center">
            🍫 Arte Funcional
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSectionThree;