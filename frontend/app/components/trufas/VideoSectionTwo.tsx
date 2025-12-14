// VideoSectionTwo.tsx
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
      className="py-20 px-6 lg:px-12 bg-gradient-to-b from-amber-50 via-orange-100 to-white text-center"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-amber-700 mb-4">
          Cada Detalhe Pensado para Encantar
        </h2>
        <p className="text-lg lg:text-xl text-gray-700 mb-10 leading-relaxed">
          Trufas funcionais que combinam textura, sabor e apresentação impecável — assista e sinta o prazer visual.
        </p>

        <div className="relative rounded-xl shadow-2xl overflow-hidden border-4 border-amber-300 transition-transform hover:scale-[1.01]">
          <video
            ref={videoRef}
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"
            poster="/trufas/trufasflow02.png"
            className="w-full h-auto"
          >
            <source src="/trufas/trufas-video-02.webm" type="video/webm" />
            <source src="//trufas/trufas-video-02.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>

          <div className="absolute bottom-2 right-2 bg-amber-600 text-white text-sm font-semibold px-3 py-2 rounded-lg shadow-lg h-10 flex items-center">
            🍫 Gourmet sem Culpa
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSectionTwo;