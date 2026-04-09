"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";

type VideoItem = { webm: string; poster?: string; title?: string; subtitle?: string };

interface VideoWallProps { title?: string; subtitle?: string; videos?: VideoItem[] }

const DEFAULT_VIDEOS: VideoItem[] = [
  { webm: "/sobremesas/videos/video_01.webm", poster: "/sobremesas/gallery/mousse.jpg",      title: "Mousse Funcional",        subtitle: "Cremosa · Sem açúcar refinado" },
  { webm: "/sobremesas/videos/video_02.webm", poster: "/sobremesas/gallery/brownie.jpg",     title: "Brownie de Grão-de-bico", subtitle: "SG · SA · Anti-inflamatório"   },
  { webm: "/sobremesas/videos/video_03.webm", poster: "/sobremesas/gallery/trufa.jpg",       title: "Trufa Belga Funcional",   subtitle: "Cacau 70% · Low Carb"          },
  { webm: "/sobremesas/videos/video_04.webm", poster: "/sobremesas/gallery/cheesecake.jpg",  title: "Cheesecake Funcional",    subtitle: "Sem forno · SG · SL"           },
  { webm: "/sobremesas/videos/video_05.webm", poster: "/sobremesas/gallery/bolo.jpg",        title: "Bolo de Cenoura Fit",     subtitle: "Zero glúten · SA"              },
  { webm: "/sobremesas/videos/video_06.webm", poster: "/sobremesas/gallery/brigadeiro.jpg",  title: "Brigadeiro Funcional",    subtitle: "Cacau 70% · Vegano"            },
  { webm: "/sobremesas/videos/video_07.webm", poster: "/sobremesas/gallery/sorvete.jpg",     title: "Sorvete de Banana",       subtitle: "5 min · Vegano · SG"           },
];

function VideoCard({ v }: { v: VideoItem }) {
  const wrapRef  = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const mp4 = v.webm.replace(/\.webm$/, ".mp4");

  useEffect(() => {
    const wrap = wrapRef.current; const video = videoRef.current;
    if (!wrap || !video) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) video.play().catch(() => {}); else video.pause(); },
      { threshold: 0.5 }
    );
    obs.observe(wrap);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="snap-center min-w-[78%] sm:min-w-[44%] lg:min-w-[30%]">
      <div ref={wrapRef} className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg bg-gray-900">
        <video ref={videoRef} muted loop playsInline preload="metadata" poster={v.poster} className="w-full h-full object-cover" onPlay={() => setPlaying(true)}>
          <source src={v.webm} type="video/webm" /><source src={mp4} type="video/mp4" />
        </video>
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-white/50" style={{ backgroundColor: "rgba(139,34,82,0.55)" }}>
              <FaPlay className="text-white text-sm ml-0.5" />
            </div>
          </div>
        )}
        {(v.title || v.subtitle) && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4">
            {v.title   && <p className="text-white font-bold text-sm leading-tight">{v.title}</p>}
            {v.subtitle && <p className="text-white/60 text-xs mt-0.5">{v.subtitle}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

const VideoWall: React.FC<VideoWallProps> = ({ title, subtitle, videos }) => {
  const safeVideos = useMemo(() => (videos && videos.length > 0 ? videos : DEFAULT_VIDEOS), [videos]);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (i: number) => {
    const clamped = Math.max(0, Math.min(i, safeVideos.length - 1));
    setActive(clamped);
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[clamped] as HTMLElement;
    if (card) card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const children = Array.from(track.children) as HTMLElement[];
      const center = track.scrollLeft + track.clientWidth / 2;
      let closest = 0, minDist = Infinity;
      children.forEach((el, i) => {
        const d = Math.abs(el.offsetLeft + el.offsetWidth / 2 - center);
        if (d < minDist) { minDist = d; closest = i; }
      });
      setActive(closest);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="py-16 px-4 bg-white" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-10">
            {title   && <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-2">{title}</h2>}
            {subtitle && <p className="text-gray-500 max-w-xl mx-auto">{subtitle}</p>}
          </div>
        )}
        <div className="relative">
          <button aria-label="Anterior" onClick={() => scrollToIndex(active - 1)} disabled={active <= 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border border-rose-100 disabled:opacity-20 hover:border-rose-300 transition">
            <FaChevronLeft className="text-gray-600 text-sm" />
          </button>
          <button aria-label="Próximo" onClick={() => scrollToIndex(active + 1)} disabled={active >= safeVideos.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border border-rose-100 disabled:opacity-20 hover:border-rose-300 transition">
            <FaChevronRight className="text-gray-600 text-sm" />
          </button>
          <div ref={trackRef} className="flex gap-4 overflow-x-auto pb-4 px-6 snap-x snap-mandatory scroll-smooth" style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}>
            {safeVideos.map((v, i) => <VideoCard key={i} v={v} />)}
          </div>
          <div className="mt-5 flex items-center justify-center gap-1.5">
            {safeVideos.map((_, i) => (
              <button key={i} aria-label={`Vídeo ${i + 1}`} onClick={() => scrollToIndex(i)}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{ width: i === active ? "28px" : "6px", backgroundColor: i === active ? "#8B2252" : "#D1D5DB" }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoWall;
