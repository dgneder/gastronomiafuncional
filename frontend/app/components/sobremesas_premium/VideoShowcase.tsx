"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaPlay, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const VideoShowcase: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showPlayButton, setShowPlayButton] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay bloqueado, mostra botão de play
            setShowPlayButton(true);
          });
          setIsPlaying(true);
          setShowPlayButton(false);
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  const handlePlayClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
      setShowPlayButton(true);
    } else {
      video.play();
      setIsPlaying(true);
      setShowPlayButton(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section className="py-10 sm:py-16 px-4 bg-gradient-to-b from-white via-pink-50/50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Veja como é <span className="text-pink-600">simples e delicioso</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Sobremesas saudáveis que você prepara em minutos, com ingredientes que você já tem em casa
          </p>
        </div>

        {/* Container do Vídeo */}
        <div 
          ref={containerRef}
          className="relative rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video group"
        >
          <video
            ref={videoRef}
            muted={isMuted}
            loop
            playsInline
            preload="metadata"
            poster="/imagens/sobremesas-poster.jpg"
            className="w-full h-full object-cover"
          >
            <source src="/videos/sobremesas-video-01-opt.webm" type="video/webm" />
            <source src="/videos/sobremesas-video-01-opt.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>

          {/* Overlay com play button */}
          {showPlayButton && (
            <div 
              className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer transition-opacity"
              onClick={handlePlayClick}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <FaPlay className="text-pink-600 text-xl sm:text-2xl ml-1" />
              </div>
            </div>
          )}

          {/* Controle de áudio */}
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors z-10"
            aria-label={isMuted ? "Ativar som" : "Desativar som"}
          >
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>

          {/* Badge no canto */}
          <div className="absolute bottom-4 left-4 bg-pink-600 text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg shadow-lg">
            🍓 Saúde + Sabor
          </div>
        </div>

        {/* Benefícios rápidos abaixo do vídeo */}
        <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4 text-center">
          <div className="p-3 rounded-xl bg-pink-50">
            <p className="text-lg sm:text-xl font-bold text-pink-600">5min</p>
            <p className="text-xs text-gray-600">preparo médio</p>
          </div>
          <div className="p-3 rounded-xl bg-green-50">
            <p className="text-lg sm:text-xl font-bold text-green-600">100%</p>
            <p className="text-xs text-gray-600">natural</p>
          </div>
          <div className="p-3 rounded-xl bg-purple-50">
            <p className="text-lg sm:text-xl font-bold text-purple-600">Zero</p>
            <p className="text-xs text-gray-600">açúcar refinado</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
