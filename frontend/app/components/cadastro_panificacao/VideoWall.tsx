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
  videos: VideoItem[];
}

// ─── Vídeos padrão — substitua pelos seus clips de 3-4s ───────────────────────
// Formato recomendado: 9:16 vertical (1080×1920) ou 4:5 (1080×1350)
// Duração ideal: 3–5 segundos, loop, sem áudio
// Pipeline: Midjourney still → Kling/Runway para animar → Magnific → Lightroom
const DEFAULT_VIDEOS: VideoItem[] = [
  {
    mp4: "/panificacao/videos/frigideira.mp4",
    poster: "/panificacao/gallery/frigideira.jpg",
    title: "Pão de Frigideira",
    subtitle: "10 minutos · do zero ao pão",
  },
  {
    mp4: "/panificacao/videos/sourdough_corte.mp4",
    poster: "/panificacao/gallery/sourdough.jpg",
    title: "Sourdough 48h",
    subtitle: "Miolo alveolado · crosta crocante",
  },
  {
    mp4: "/panificacao/videos/focaccia.mp4",
    poster: "/panificacao/gallery/focaccia.jpg",
    title: "Focaccia Funcional",
    subtitle: "Alta hidratação · anti-inflamatório",
  },
  {
    mp4: "/panificacao/videos/massa_sovada.mp4",
    poster: "/panificacao/gallery/forma.jpg",
    title: "A Massa",
    subtitle: "Elasticidade sem glúten — ciência aplicada",
  },
  {
    mp4: "/panificacao/videos/hamburguer.mp4",
    poster: "/panificacao/gallery/hamburguer.jpg",
    title: "Pão de Hambúrguer",
    subtitle: "IG 42 · macio · sem glúten",
  },
  {
    mp4: "/panificacao/videos/crackers.mp4",
    poster: "/panificacao/gallery/crackers.jpg",
    title: "Crackers Multigrãos",
    subtitle: "Low carb · snack · 20 min",
  },
];

// ─── Hook para detectar se o elemento está visível na viewport ────────────────
function useInView<T extends HTMLElement>(threshold = 0.5) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

// ─── Card de vídeo individual com autoplay ao entrar na viewport ──────────────
function VideoCard({ v }: { v: VideoItem }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.5);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (inView) {
      el.play().catch(() => {
        // iOS/Safari pode bloquear sem interação — silencioso
      });
    } else {
      el.pause();
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="rounded-xl overflow-hidden shadow-xl border border-stone-700/40 bg-stone-900"
    >
      <div className="relative">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          controls={false}
          preload="metadata"
          poster={v.poster}
          className="w-full h-52 sm:h-56 object-cover"
        >
          {v.webm && <source src={v.webm} type="video/webm" />}
          <source src={v.mp4} type="video/mp4" />
        </video>

        {/* Badge "vídeo" */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-stone-900/70 backdrop-blur-sm px-2.5 py-1 rounded-full border border-stone-700/50">
          <FaPlay className="text-amber-400 text-[9px]" />
          <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider">vídeo</span>
        </div>

        {/* Overlay inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />

        {/* Label */}
        {(v.title || v.subtitle) && (
          <div className="absolute bottom-3 left-3 right-3">
            {v.title && <p className="text-white text-sm font-bold drop-shadow-md">{v.title}</p>}
            {v.subtitle && <p className="text-amber-300/80 text-xs mt-0.5">{v.subtitle}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────
export default function VideoWall({
  title = "O produto que você vai levar para casa",
  subtitle = "Vídeos reais das receitas — 3 a 5 segundos que valem mais que mil palavras.",
  videos = DEFAULT_VIDEOS,
}: VideoWallProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const safeVideos = useMemo(() => videos.slice(0, 8), [videos]);

  const scrollToIndex = (idx: number) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(idx, safeVideos.length - 1));
    const child = el.children.item(clamped) as HTMLElement | null;
    if (!child) return;
    child.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  const next = () => scrollToIndex(active + 1);
  const prev = () => scrollToIndex(active - 1);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onScroll = () => {
      const children = Array.from(el.children) as HTMLElement[];
      if (!children.length) return;
      const center = el.scrollLeft + el.clientWidth / 2;
      let bestIdx = 0;
      let bestDist = Infinity;
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
    <section className="py-8 px-0" style={{ background: "linear-gradient(180deg, #1A110A, #2D1B12)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 px-4">
          <h2 className="text-xl font-extrabold text-white">{title}</h2>
          {subtitle && <p className="text-stone-400 text-sm mt-1 max-w-sm mx-auto">{subtitle}</p>}
        </div>

        {/* Carrossel */}
        <div className="relative">
          {/* Setas */}
          <button
            aria-label="Vídeo anterior"
            onClick={prev}
            disabled={active <= 0}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-stone-900/80 backdrop-blur shadow-lg flex items-center justify-center border border-stone-700/50 disabled:opacity-20 disabled:cursor-not-allowed hover:bg-stone-800 transition"
          >
            <FaChevronLeft className="text-amber-400 text-xs" />
          </button>

          <button
            aria-label="Próximo vídeo"
            onClick={next}
            disabled={active >= safeVideos.length - 1}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-stone-900/80 backdrop-blur shadow-lg flex items-center justify-center border border-stone-700/50 disabled:opacity-20 disabled:cursor-not-allowed hover:bg-stone-800 transition"
          >
            <FaChevronRight className="text-amber-400 text-xs" />
          </button>

          {/* Track */}
          <div
            ref={trackRef}
            className="flex gap-3 overflow-x-auto pb-3 px-4 snap-x snap-mandatory scroll-smooth"
            style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {safeVideos.map((v, idx) => (
              <div
                key={idx}
                className="min-w-[78%] sm:min-w-[44%] lg:min-w-[30%] snap-center"
              >
                <VideoCard v={v} />
              </div>
            ))}
          </div>

          {/* Indicadores */}
          <div className="mt-3 flex items-center justify-center gap-1.5">
            {safeVideos.map((_, i) => (
              <button
                key={i}
                aria-label={`Vídeo ${i + 1}`}
                onClick={() => scrollToIndex(i)}
                className="h-1.5 rounded-full transition-all"
                style={{
                  width: i === active ? "28px" : "6px",
                  backgroundColor: i === active ? "#D4A04A" : "#44403C",
                }}
              />
            ))}
          </div>
        </div>

        {/* Nota de rodapé */}
        <p className="text-center text-stone-600 text-[10px] mt-4 px-4">
          * Todos os vídeos mostram receitas do guia Pão Sem Culpa. Sem glúten, sem aditivos.
        </p>
      </div>
    </section>
  );
}
