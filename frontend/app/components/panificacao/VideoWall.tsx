"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";

type VideoItem = {
  mp4: string;
  webm?: string;
  poster?: string;
  title?: string;
  subtitle?: string;
};

interface VideoWallProps {
  title?: string;
  subtitle?: string;
  videos?: VideoItem[];
}

const DEFAULT_VIDEOS: VideoItem[] = [
  { mp4: "/panificacao/videos/video_03.mp4", webm: "/panificacao/videos/video_03.webm", poster: "/panificacao/gallery/frigideira.jpg",  title: "Pão de Frigideira",    subtitle: "10 minutos · SG · DIA" },
  { mp4: "/panificacao/videos/video_04.mp4", webm: "/panificacao/videos/video_04.webm", poster: "/panificacao/gallery/pao_queijo.jpg",  title: "Pão de Queijo Funcional", subtitle: "SG · DIA · RENAL" },
  { mp4: "/panificacao/videos/video_05.mp4", webm: "/panificacao/videos/video_05.webm", poster: "/panificacao/gallery/focaccia.jpg",    title: "Focaccia",             subtitle: "Alta hidratação · ANTI-INF" },
  { mp4: "/panificacao/videos/video_06.mp4", webm: "/panificacao/videos/video_06.webm", poster: "/panificacao/gallery/hamburguer.jpg",  title: "Hambúrguer Funcional", subtitle: "IG 42 · SG" },
  { mp4: "/panificacao/videos/video_07.mp4", webm: "/panificacao/videos/video_07.webm", poster: "/panificacao/gallery/sourdough.jpg",   title: "Sourdough 48h",        subtitle: "Fermentação Natural · LC" },
  { mp4: "/panificacao/videos/video_08.mp4", webm: "/panificacao/videos/video_08.webm", poster: "/panificacao/gallery/tortilha.jpg",    title: "Tortilha Funcional",   subtitle: "10 min · VEG · SG" },
  { mp4: "/panificacao/videos/video_09.mp4", webm: "/panificacao/videos/video_09.webm", poster: "/panificacao/gallery/caneca.jpg",      title: "Pão de Caneca",        subtitle: "5 min · SG · DIA" },
];

function useInView<T extends HTMLElement>(threshold = 0.5) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { threshold }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function VideoCard({ v }: { v: VideoItem }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.5);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  // CORRIGIDO: useEffect só controla play/pause — sem setPlaying dentro
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (inView) { el.play().catch(() => {}); }
    else { el.pause(); }
  }, [inView]);

  return (
    <div ref={ref} className="rounded-2xl overflow-hidden bg-white shadow-md border border-stone-100 hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          poster={v.poster}
          className="w-full h-56 sm:h-60 object-cover"
          onPlay={() => setPlaying(true)}  // ← CORRIGIDO: setPlaying no evento, não no effect
        >
          {v.webm && <source src={v.webm} type="video/webm" />}
          <source src={v.mp4} type="video/mp4" />
        </video>

        {!playing && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-full shadow border border-stone-100">
            <FaPlay className="text-amber-700 text-[9px]" />
            <span className="text-[10px] font-bold text-stone-700 uppercase tracking-wider">vídeo</span>
          </div>
        )}

        <div className="absolute inset-0 bg-linear-to-t from-stone-900/60 via-transparent to-transparent" />

        {(v.title || v.subtitle) && (
          <div className="absolute bottom-3 left-3 right-3">
            {v.title && <p className="text-white text-sm font-bold drop-shadow-md">{v.title}</p>}
            {v.subtitle && <p className="text-amber-300 text-xs font-medium mt-0.5">{v.subtitle}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default function VideoWall({
  title    = "Os pães em movimento.",
  subtitle = "Clipes de 3 a 5 segundos — cada receita que você vai aprender a fazer.",
  videos   = DEFAULT_VIDEOS,
}: VideoWallProps) {
  const trackRef   = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const safeVideos = useMemo(() => videos.slice(0, 9), [videos]);

  const scrollToIndex = (idx: number) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(idx, safeVideos.length - 1));
    const child = el.children.item(clamped) as HTMLElement | null;
    if (!child) return;
    child.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const children = Array.from(el.children) as HTMLElement[];
      if (!children.length) return;
      const center = el.scrollLeft + el.clientWidth / 2;
      let bestIdx = 0, bestDist = Infinity;
      children.forEach((c, i) => {
        const dist = Math.abs(c.offsetLeft + c.clientWidth / 2 - center);
        if (dist < bestDist) { bestDist = dist; bestIdx = i; }
      });
      setActive(bestIdx);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, [safeVideos.length]);

  return (
    <section className="py-16 px-0 bg-white" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 px-6">
          <p className="text-xs uppercase tracking-widest font-bold mb-3" style={{ color: "#C4622D" }}>
            Veja antes de fazer
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-stone-800">{title}</h2>
          {subtitle && (
            <p className="text-stone-500 text-lg mt-3 max-w-xl mx-auto">{subtitle}</p>
          )}
        </div>

        <div className="relative">
          <button
            aria-label="Anterior"
            onClick={() => scrollToIndex(active - 1)}
            disabled={active <= 0}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border border-stone-200 disabled:opacity-20 hover:border-amber-300 transition"
          >
            <FaChevronLeft className="text-stone-600 text-sm" />
          </button>
          <button
            aria-label="Próximo"
            onClick={() => scrollToIndex(active + 1)}
            disabled={active >= safeVideos.length - 1}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border border-stone-200 disabled:opacity-20 hover:border-amber-300 transition"
          >
            <FaChevronRight className="text-stone-600 text-sm" />
          </button>

          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto pb-4 px-6 snap-x snap-mandatory scroll-smooth"
            style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {safeVideos.map((v, idx) => (
              <div key={idx} className="min-w-[78%] sm:min-w-[44%] lg:min-w-[30%] snap-center">
                <VideoCard v={v} />
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-1.5">
            {safeVideos.map((_, i) => (
              <button
                key={i}
                aria-label={`Vídeo ${i + 1}`}
                onClick={() => scrollToIndex(i)}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === active ? "28px" : "6px",
                  backgroundColor: i === active ? "#D4A04A" : "#D6D3D1",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}