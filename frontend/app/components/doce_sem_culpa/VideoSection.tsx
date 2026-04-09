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

function VideoPlayer({ src, poster, className = "" }: { src: string; poster?: string; className?: string }) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
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
        <source src={src} type="video/webm" />
        <source src={mp4Src} type="video/mp4" />
      </video>
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-14 h-14 rounded-full flex items-center justify-center border-2 border-white/60" style={{ backgroundColor: "rgba(139,34,82,0.55)" }}>
            <FaPlay className="text-white text-lg ml-1" />
          </div>
        </div>
      )}
    </div>
  );
}

function SplitLayout({ p, videoLeft }: { p: VideoSectionProps; videoLeft: boolean }) {
  const text = (
    <div className="flex flex-col justify-center space-y-5">
      {p.tag && (
        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#8B2252" }}>{p.tag}</span>
      )}
      <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight">{p.headline}</h2>
      {p.subtext && <p className="text-gray-500 leading-relaxed">{p.subtext}</p>}
      {p.caption && (
        <p className="text-xs font-mono px-3 py-2 rounded-lg" style={{ backgroundColor: "#8B225210", color: "#8B2252" }}>{p.caption}</p>
      )}
      {p.stat && (
        <div className="inline-flex items-baseline gap-2">
          <span className="text-4xl font-extrabold" style={{ color: "#8B2252" }}>{p.stat.value}</span>
          <span className="text-gray-500 text-sm">{p.stat.label}</span>
        </div>
      )}
      {p.ctaLabel && p.onCtaClick && (
        <button onClick={p.onCtaClick}
          className="group self-start flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-xl transition-all hover:scale-[1.03]"
          style={{ background: "linear-gradient(135deg, #8B2252, #6B1A40)" }}>
          {p.ctaLabel}
          <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
        </button>
      )}
    </div>
  );

  const video = <VideoPlayer src={p.videoSrc} poster={p.poster} className="w-full aspect-[4/3]" />;

  return (
    <section className="py-16 px-6 lg:px-12" style={{ background: videoLeft ? "#ffffff" : "linear-gradient(135deg, #FFF0F5, #FCEEF4)" }} data-aos="fade-up">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {videoLeft ? <>{video}{text}</> : <>{text}{video}</>}
      </div>
    </section>
  );
}

function CinematicLayout({ p }: { p: VideoSectionProps }) {
  return (
    <section className="py-16 px-6 lg:px-12 bg-gray-950" data-aos="fade-up">
      <div className="max-w-5xl mx-auto">
        {p.tag && <p className="text-xs font-bold uppercase tracking-widest text-center mb-4" style={{ color: "#D4A04A" }}>{p.tag}</p>}
        <h2 className="text-2xl lg:text-4xl font-extrabold text-white text-center leading-tight mb-8">{p.headline}</h2>
        <VideoPlayer src={p.videoSrc} poster={p.poster} className="w-full aspect-video" />
        {p.caption && (
          <p className="text-center text-xs mt-4 font-mono" style={{ color: "#D4A04A80" }}>{p.caption}</p>
        )}
        {p.subtext && <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">{p.subtext}</p>}
        {p.ctaLabel && p.onCtaClick && (
          <div className="text-center mt-8">
            <button onClick={p.onCtaClick}
              className="group inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-gray-900 transition-all hover:scale-[1.03]"
              style={{ background: "linear-gradient(135deg, #D4A04A, #E8C06A)" }}>
              {p.ctaLabel}
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function HighlightLayout({ p }: { p: VideoSectionProps }) {
  return (
    <section className="py-16 px-6 lg:px-12" style={{ background: "linear-gradient(160deg, #6B1A40, #8B2252)" }} data-aos="fade-up">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white space-y-5">
          {p.tag && <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A04A" }}>{p.tag}</span>}
          <h2 className="text-2xl lg:text-3xl font-extrabold leading-tight">{p.headline}</h2>
          {p.subtext && <p className="text-rose-200/70 leading-relaxed">{p.subtext}</p>}
          {p.caption && <p className="text-xs font-mono text-rose-300/60">{p.caption}</p>}
          {p.ctaLabel && p.onCtaClick && (
            <button onClick={p.onCtaClick}
              className="group self-start flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-xl text-gray-900 transition-all hover:scale-[1.03]"
              style={{ background: "linear-gradient(135deg, #D4A04A, #E8C06A)" }}>
              {p.ctaLabel}
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>
        <VideoPlayer src={p.videoSrc} poster={p.poster} className="w-full aspect-[4/3]" />
      </div>
    </section>
  );
}

const VideoSection: React.FC<VideoSectionProps> = (props) => {
  const variant = props.variant ?? "split-right";
  if (variant === "split-right") return <SplitLayout p={props} videoLeft={false} />;
  if (variant === "split-left")  return <SplitLayout p={props} videoLeft={true} />;
  if (variant === "cinematic")   return <CinematicLayout p={props} />;
  return <HighlightLayout p={props} />;
};

export default VideoSection;
