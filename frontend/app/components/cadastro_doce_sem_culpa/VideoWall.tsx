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
  {
    mp4: "/doce-sem-culpa/videos/video_01.mp4",
    webm: "/doce-sem-culpa/videos/video_01.webm",
    poster: "/doce-sem-culpa/gallery/mousse_chocolate.jpg",
    title: "Mousse de Chocolate 70%",
    subtitle: "5 min · Aquafaba · SG · DIA",
  },
  {
    mp4: "/doce-sem-culpa/videos/video_03.mp4",
    webm: "/doce-sem-culpa/videos/video_03.webm",
    poster: "/doce-sem-culpa/gallery/brigadeiro.jpg",
    title: "Brigadeiro Funcional",
    subtitle: "Sem leite condensado · KIDS",
  },
  {
    mp4: "/doce-sem-culpa/videos/video_05.mp4",
    webm: "/doce-sem-culpa/videos/video_05.webm",
    poster: "/doce-sem-culpa/gallery/cheesecake.jpg",
    title: "Cheesecake Funcional",
    subtitle: "Antocianinas · 15 min",
  },
  {
    mp4: "/doce-sem-culpa/videos/video_06.mp4",
    webm: "/doce-sem-culpa/videos/video_06.webm",
    poster: "/doce-sem-culpa/gallery/brownie_keto.jpg",
    title: "Brownie Keto",
    subtitle: "IG baixo · SG · LC",
  },
  {
    mp4: "/doce-sem-culpa/videos/video_07.mp4",
    webm: "/doce-sem-culpa/videos/video_07.webm",
    poster: "/doce-sem-culpa/gallery/trufa_beleza.jpg",
    title: "Trufa Colágeno",
    subtitle: "Beleza · 12 min",
  },
  {
    mp4: "/doce-sem-culpa/videos/video_09.mp4",
    webm: "/doce-sem-culpa/videos/video_09.webm",
    poster: "/doce-sem-culpa/gallery/pudim_chia.jpg",
    title: "Pudim de Chia em Camadas",
    subtitle: "Ômega-3 · VEG · 4h",
  },
];

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

function VideoCard({ v }: { v: VideoItem }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.5);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (inView) { el.play().catch(() => {}); }
    else { el.pause(); }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="rounded-xl overflow-hidden shadow-xl border bg-stone-900"
      style={{ borderColor: "rgba(120, 53, 15, 0.4)" }}
    >
      <div className="relative">
        <video
          ref={videoRef}
          muted loop playsInline preload="metadata" poster={v.poster}
          className="w-full h-52 sm:h-56 object-cover"
        >
          {v.webm && <source src={v.webm} type="video/webm" />}
          <source src={v.mp4} type="video/mp4" />
        </video>

        <div
          className="absolute top-3 left-3 flex items-center gap-1.5 backdrop-blur-sm px-2.5 py-1 rounded-full border"
          style={{
            backgroundColor: "rgba(28, 25, 23, 0.7)",
            borderColor: "rgba(120, 53, 15, 0.5)"
          }}
        >
          <FaPlay className="text-[9px]" style={{ color: "#E8B84A" }} />
          <span
            className="text-[10px] font-bold uppercase tracking-wider"
            style={{ color: "#E8B84A" }}
          >
            vídeo
          </span>
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-stone-900/80 via-transparent to-transparent" />

        {(v.title || v.subtitle) && (
          <div className="absolute bottom-3 left-3 right-3">
            {v.title && <p className="text-white text-sm font-bold drop-shadow-md">{v.title}</p>}
            {v.subtitle && <p className="text-xs mt-0.5" style={{ color: "rgba(232, 184, 74, 0.8)" }}>{v.subtitle}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default function VideoWall({
  title = "As sobremesas em movimento",
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
    <section
      className="py-8 px-0"
      style={{ background: "linear-gradient(180deg, #1A0A14, #2D1220)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 px-4">
          <h2 className="text-xl font-extrabold text-white">{title}</h2>
          {subtitle && <p className="text-stone-400 text-sm mt-1 max-w-sm mx-auto">{subtitle}</p>}
        </div>

        <div className="relative">
          <button
            aria-label="Vídeo anterior"
            onClick={() => scrollToIndex(active - 1)}
            disabled={active <= 0}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full backdrop-blur shadow-lg flex items-center justify-center border disabled:opacity-20 disabled:cursor-not-allowed transition"
            style={{
              backgroundColor: "rgba(28, 25, 23, 0.8)",
              borderColor: "rgba(120, 53, 15, 0.5)"
            }}
          >
            <FaChevronLeft className="text-xs" style={{ color: "#E8B84A" }} />
          </button>

          <button
            aria-label="Próximo vídeo"
            onClick={() => scrollToIndex(active + 1)}
            disabled={active >= safeVideos.length - 1}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full backdrop-blur shadow-lg flex items-center justify-center border disabled:opacity-20 disabled:cursor-not-allowed transition"
            style={{
              backgroundColor: "rgba(28, 25, 23, 0.8)",
              borderColor: "rgba(120, 53, 15, 0.5)"
            }}
          >
            <FaChevronRight className="text-xs" style={{ color: "#E8B84A" }} />
          </button>

          <div
            ref={trackRef}
            className="flex gap-3 overflow-x-auto pb-3 px-4 snap-x snap-mandatory scroll-smooth"
            style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {safeVideos.map((v, idx) => (
              <div key={idx} className="min-w-[78%] sm:min-w-[44%] lg:min-w-[30%] snap-center">
                <VideoCard v={v} />
              </div>
            ))}
          </div>

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

        <p className="text-center text-stone-600 text-[10px] mt-4 px-4">
          * Todos os vídeos mostram receitas do Kit Doce Sem Culpa. Sem açúcar refinado, sem aditivos.
        </p>
      </div>
    </section>
  );
}
