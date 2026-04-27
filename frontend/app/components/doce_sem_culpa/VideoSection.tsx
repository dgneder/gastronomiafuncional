"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaPlay } from "react-icons/fa";

export type VideoSectionVariant = "split-left" | "split-right" | "cinematic" | "highlight";

export interface VideoSectionProps {
  variant?: VideoSectionVariant;
  tag?: string;
  headline: string;
  subtext?: string;
  videoSrc: string;
  poster?: string;
  caption?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  stat?: { value: string; label: string };
}

// ── VideoPlayer com IntersectionObserver para autoplay on-view ────────────
function VideoPlayer({ src, poster, className = "" }: { src: string; poster?: string; className?: string }) {
  const wrapRef  = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const wrap  = wrapRef.current;
    const video = videoRef.current;
    if (!wrap || !video) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { video.play().catch(() => {}); }
        else { video.pause(); }
      },
      { threshold: 0.5 }
    );
    obs.observe(wrap);
    return () => obs.disconnect();
  }, []);

  const mp4Src = src.replace(/\.webm$/, ".mp4");

  return (
    <div ref={wrapRef} className={`relative overflow-hidden rounded-2xl shadow-2xl ${className}`}>
      <video
        ref={videoRef}
        muted loop playsInline preload="metadata" poster={poster}
        className="w-full h-full object-cover"
        onPlay={() => setPlaying(true)}
      >
        <source src={src}    type="video/webm" />
        <source src={mp4Src} type="video/mp4"  />
      </video>
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-14 h-14 rounded-full flex items-center justify-center border-2 border-white/60" style={{ backgroundColor: "rgba(0,0,0,0.40)" }}>
            <FaPlay className="text-white text-lg ml-1" />
          </div>
        </div>
      )}
    </div>
  );
}

function SplitLayout({ p, videoLeft }: { p: VideoSectionProps; videoLeft: boolean }) {
  return (
    <section
      className="py-16 px-6 lg:px-12"
      style={{ background: videoLeft ? "#ffffff" : "linear-gradient(135deg, #FBF5E8, #F5E6D0)" }}
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`flex flex-col ${videoLeft ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}>
          <div className="w-full lg:w-1/2" data-aos={videoLeft ? "fade-right" : "fade-left"}>
            <VideoPlayer src={p.videoSrc} poster={p.poster} className="w-full aspect-video lg:aspect-4/3" />
            {p.caption && <p className="text-stone-400 text-xs text-center mt-3 italic">{p.caption}</p>}
          </div>
          <div className="w-full lg:w-1/2 space-y-6" data-aos={videoLeft ? "fade-left" : "fade-right"}>
            {p.tag && <p className="text-xs uppercase tracking-widest font-bold" style={{ color: "#8B2252" }}>{p.tag}</p>}
            <h2 className="text-3xl lg:text-4xl font-extrabold text-stone-800 leading-tight">{p.headline}</h2>
            {p.subtext && <p className="text-lg text-stone-500 leading-relaxed">{p.subtext}</p>}
            {p.stat && (
              <div className="inline-flex items-baseline gap-2 px-5 py-3 rounded-xl border" style={{ backgroundColor: "#F5E6D0", borderColor: "#D4A04A40" }}>
                <span className="text-3xl font-extrabold" style={{ color: "#8B2252" }}>{p.stat.value}</span>
                <span className="text-stone-500 text-sm">{p.stat.label}</span>
              </div>
            )}
            {p.ctaLabel && p.onCtaClick && (
              <button
                onClick={p.onCtaClick}
                className="group flex items-center gap-3 px-8 py-4 text-base font-bold text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                style={{ background: "linear-gradient(135deg, #8B2252, #6B1A3F)" }}
              >
                {p.ctaLabel}
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function CinematicLayout({ p }: { p: VideoSectionProps }) {
  const mp4Src = p.videoSrc.replace(/\.webm$/, ".mp4");
  return (
    <section className="relative py-0 overflow-hidden" data-aos="fade-up">
      <div className="relative w-full" style={{ minHeight: "420px" }}>
        <video autoPlay muted loop playsInline poster={p.poster} className="absolute inset-0 w-full h-full object-cover" style={{ minHeight: "420px" }}>
          <source src={p.videoSrc} type="video/webm" />
          <source src={mp4Src}     type="video/mp4"  />
        </video>
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(45,18,32,0.55) 0%, rgba(45,18,32,0.72) 60%, rgba(26,10,20,0.92) 100%)" }} />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 lg:py-28 min-h-[420px]">
          {p.tag && <p className="text-amber-400/80 text-xs uppercase tracking-widest font-bold mb-4">{p.tag}</p>}
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight max-w-3xl mb-6">{p.headline}</h2>
          {p.subtext && <p className="text-amber-100/70 text-lg max-w-xl leading-relaxed mb-8">{p.subtext}</p>}
          {p.ctaLabel && p.onCtaClick && (
            <button onClick={p.onCtaClick} className="group flex items-center gap-3 px-10 py-4 text-base font-bold rounded-xl shadow-2xl hover:scale-[1.04] transition-all text-stone-900" style={{ background: "linear-gradient(135deg, #D4A04A, #E8B84A)" }}>
              {p.ctaLabel}
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          )}
          {p.caption && <p className="text-white/30 text-xs mt-6 italic">{p.caption}</p>}
        </div>
      </div>
    </section>
  );
}

function HighlightLayout({ p }: { p: VideoSectionProps }) {
  return (
    <section className="py-16 px-6 lg:px-12" style={{ background: "linear-gradient(180deg, #F5E6D0, #FBF5E8)" }} data-aos="fade-up">
      <div className="max-w-4xl mx-auto space-y-8 text-center">
        {p.tag && <p className="text-xs uppercase tracking-widest font-bold" style={{ color: "#8B2252" }}>{p.tag}</p>}
        <h2 className="text-3xl lg:text-4xl font-extrabold text-stone-800 leading-tight">{p.headline}</h2>
        {p.subtext && <p className="text-lg text-stone-500 leading-relaxed max-w-2xl mx-auto">{p.subtext}</p>}
        <VideoPlayer src={p.videoSrc} poster={p.poster} className="w-full aspect-video" />
        {p.caption && <p className="text-stone-400 text-xs italic">{p.caption}</p>}
        {p.ctaLabel && p.onCtaClick && (
          <button onClick={p.onCtaClick} className="group inline-flex items-center gap-3 px-10 py-4 text-base font-bold text-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all" style={{ background: "linear-gradient(135deg, #8B2252, #6B1A3F)" }}>
            {p.ctaLabel}
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        )}
      </div>
    </section>
  );
}

const VideoSection: React.FC<VideoSectionProps> = (props) => {
  const variant = props.variant ?? "split-right";
  if (variant === "cinematic") return <CinematicLayout p={props} />;
  if (variant === "highlight")  return <HighlightLayout p={props} />;
  if (variant === "split-left") return <SplitLayout p={props} videoLeft={true} />;
  return <SplitLayout p={props} videoLeft={false} />;
};

export default VideoSection;
