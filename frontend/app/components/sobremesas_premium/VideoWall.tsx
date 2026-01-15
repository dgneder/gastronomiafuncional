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
  title: string;
  subtitle?: string;
  videos: VideoItem[];
}

function useInView<T extends HTMLElement>(threshold = 0.45) {
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
  const { ref, inView } = useInView<HTMLDivElement>(0.45);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    if (inView) {
      el.play().catch(() => {
        // Alguns browsers/iOS bloqueiam sem interação — ok.
      });
    } else {
      el.pause();
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="rounded-2xl overflow-hidden bg-white shadow-lg border border-rose-100"
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
          className="w-full h-56 sm:h-56 object-cover"
          onTouchStart={() => setTouched(true)}
        >
          {v.webm ? <source src={v.webm} type="video/webm" /> : null}
          <source src={v.mp4} type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>

        {!touched && (
          <div className="absolute top-3 left-3 flex items-center gap-2 bg-white/85 backdrop-blur px-3 py-1.5 rounded-full shadow">
            <FaPlay className="text-pink-600 text-xs" />
            <span className="text-xs font-semibold text-gray-800">vídeo</span>
          </div>
        )}

        {(v.title || v.subtitle) && (
          <div className="absolute bottom-3 left-3 right-3 bg-white/85 backdrop-blur rounded-xl px-3 py-2 shadow">
            {v.title ? (
              <div className="text-sm font-bold text-gray-900">{v.title}</div>
            ) : null}
            {v.subtitle ? (
              <div className="text-xs text-gray-600">{v.subtitle}</div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}

export default function VideoWall({ title, subtitle, videos }: VideoWallProps) {
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
        const cCenter = c.offsetLeft + c.clientWidth / 2;
        const dist = Math.abs(center - cCenter);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = i;
        }
      });

      setActive(bestIdx);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, [safeVideos.length]);

  return (
    <section className="py-10 sm:py-14 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            {title}
          </h2>
          {subtitle ? (
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">{subtitle}</p>
          ) : null}
        </div>

        <div className="relative">
          {/* Setas */}
          <button
            aria-label="Vídeo anterior"
            onClick={prev}
            disabled={active <= 0}
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10
                       w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow
                       flex items-center justify-center
                       disabled:opacity-30 disabled:cursor-not-allowed
                       hover:bg-white transition"
          >
            <FaChevronLeft className="text-gray-700" />
          </button>

          <button
            aria-label="Próximo vídeo"
            onClick={next}
            disabled={active >= safeVideos.length - 1}
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10
                       w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow
                       flex items-center justify-center
                       disabled:opacity-30 disabled:cursor-not-allowed
                       hover:bg-white transition"
          >
            <FaChevronRight className="text-gray-700" />
          </button>

          {/* Track */}
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto pb-3 px-2 snap-x snap-mandatory scroll-smooth"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {safeVideos.map((v, idx) => (
              <div
                key={idx}
                className="min-w-[86%] sm:min-w-[46%] lg:min-w-[32%] snap-center"
              >
                <VideoCard v={v} />
              </div>
            ))}
          </div>

          {/* Indicadores */}
          <div className="mt-3 flex items-center justify-center gap-2">
            {safeVideos.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir para vídeo ${i + 1}`}
                onClick={() => scrollToIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === active ? "w-7 bg-pink-500" : "w-2.5 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
