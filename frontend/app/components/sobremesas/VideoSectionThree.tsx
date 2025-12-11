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
      className="relative py-20 px-6 lg:px-12 bg-gradient-to-r from-pink-50 via-rose-100 to-white text-center"
    >
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <h2 className="text-3xl lg:text-4xl font-extrabold text-pink-700 mb-4 leading-tight">
          Viva na Pele a Transformação
        </h2>

        {/* Subheadline */}
        <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
          Mais leveza, mais energia, mais prazer em cada colher. Assista e sinta o que está por vir.
        </p>

        {/* Video Container */}
        <div className="rounded-3xl overflow-hidden border-4 border-pink-300 shadow-2xl ring-2 ring-white ring-opacity-30 relative">
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

          {/* Overlay opcional com legenda */}
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 text-white text-sm lg:text-base font-medium text-center">
            Imagens reais de como as sobremesas podem fazer parte do seu dia com saúde e sabor
          </div>

          {/* Tarja adicional para cobrir marca d’água */}
          <div className="absolute bottom-2 right-2 bg-pink-600 text-white text-sm font-semibold px-3 py-2 rounded-lg shadow-lg h-10 flex items-center">
            🍓 Sobremesa com Propósito
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSectionThree;
