// VideoSectionFour.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";

const VideoSectionFour: React.FC = () => {
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
      className="py-16 px-6 lg:px-12 bg-gradient-to-r from-amber-50 via-orange-100 to-white text-center"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-amber-700 mb-6">
          Descubra um Novo Jeito de Saborear Chocolate
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Nossas trufas funcionais unem prazer gourmet e saúde, mostrando que é possível cuidar do corpo sem abrir mão do sabor.
        </p>

        <div className="relative rounded-lg shadow-xl overflow-hidden border-4 border-amber-300">
          <video
            ref={videoRef}
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"
            poster="/imagens/sobremesas-poster-01.jpg"
            className="w-full h-auto"
          >
            <source src="/videos/sobremesas-video-04-opt.webm" type="video/webm" />
            <source src="/videos/sobremesas-video-04-opt.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>

          <div className="absolute bottom-2 right-2 bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-md shadow-md">
            🍫 Funcional e Deliciosa
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSectionFour;