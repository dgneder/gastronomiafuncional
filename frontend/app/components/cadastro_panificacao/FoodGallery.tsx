"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

type GalleryItem = {
  src: string;
  alt: string;
  label?: string;
  meta?: string;
};

interface FoodGalleryProps {
  title?: string;
  subtitle?: string;
  items?: GalleryItem[];
}

const DEFAULT_ITEMS: GalleryItem[] = [
  { src: "/panificacao/gallery/frigideira.jpg",    alt: "Pão de frigideira funcional",      label: "Pão de Frigideira",      meta: "10 min · SG · DIA" },
  { src: "/panificacao/gallery/sourdough.jpg",     alt: "Sourdough funcional fatiado",      label: "Sourdough 48h",          meta: "Fermentação Natural · LC" },
  { src: "/panificacao/gallery/forma.jpg",         alt: "Pão de forma funcional fatiado",   label: "Pão de Forma Funcional", meta: "Dia a dia · SG · SL" },
  { src: "/panificacao/gallery/hamburguer.jpg",    alt: "Pão de hambúrguer funcional",      label: "Pão de Hambúrguer",      meta: "IG 42 · SG · P" },
  { src: "/panificacao/gallery/focaccia.jpg",      alt: "Focaccia com tomate e ervas",      label: "Focaccia Funcional",     meta: "Alta Hidratação · ANTI-INF" },
  { src: "/panificacao/gallery/ciabatta.jpg",      alt: "Ciabatta funcional alveolada",     label: "Ciabatta",               meta: "Artesanal · SG" },
  { src: "/panificacao/gallery/crackers.jpg",      alt: "Crackers multigrãos empilhados",   label: "Crackers Multigrãos",    meta: "Snack · LC · SG" },
  { src: "/panificacao/gallery/pizza.jpg",         alt: "Pizza de longa fermentação",       label: "Pizza Funcional",        meta: "Fermentação Longa · SG" },
  { src: "/panificacao/gallery/wrap.jpg",          alt: "Wrap funcional colorido",          label: "Wrap Funcional",         meta: "10 min · VEG · SG" },
  { src: "/panificacao/gallery/sanduiche.jpg",     alt: "Sanduíche natural montado",        label: "Sanduíche Natural",      meta: "+30g proteína · SG" },
  { src: "/panificacao/gallery/brioche.jpg",       alt: "Brioche funcional fofinho",        label: "Brioche Funcional",      meta: "Ocasião Especial · SG" },
  { src: "/panificacao/gallery/integral.jpg",      alt: "Pão integral funcional fatiado",   label: "Pão Integral 2.0",       meta: "Fibras · DIGEST · SG" },
];

export default function FoodGallery({
  title = "246 receitas. Cada uma com essa textura.",
  subtitle = "Pães que você vai querer fazer amanhã.",
  items = DEFAULT_ITEMS,
}: FoodGalleryProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const safeItems = useMemo(() => items.slice(0, 12), [items]);

  const scrollToIndex = (idx: number) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(idx, safeItems.length - 1));
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
  }, [safeItems.length]);

  return (
    <section className="py-8 px-0" style={{ background: "linear-gradient(180deg, #2D1B12, #1A110A)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 px-4">
          <h2 className="text-xl font-extrabold text-white">{title}</h2>
          {subtitle && <p className="text-stone-400 text-sm mt-1">{subtitle}</p>}
        </div>

        <div className="relative">
          <button
            aria-label="Anterior"
            onClick={() => scrollToIndex(active - 1)}
            disabled={active <= 0}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-stone-900/80 backdrop-blur shadow-lg flex items-center justify-center border border-stone-700/50 disabled:opacity-20 disabled:cursor-not-allowed hover:bg-stone-800 transition"
          >
            <FaChevronLeft className="text-amber-400 text-xs" />
          </button>

          <button
            aria-label="Próximo"
            onClick={() => scrollToIndex(active + 1)}
            disabled={active >= safeItems.length - 1}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-stone-900/80 backdrop-blur shadow-lg flex items-center justify-center border border-stone-700/50 disabled:opacity-20 disabled:cursor-not-allowed hover:bg-stone-800 transition"
          >
            <FaChevronRight className="text-amber-400 text-xs" />
          </button>

          <div
            ref={trackRef}
            className="flex gap-3 overflow-x-auto pb-3 px-4 snap-x snap-mandatory scroll-smooth"
            style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {safeItems.map((item, idx) => (
              <div key={idx} className="min-w-[78%] sm:min-w-[44%] lg:min-w-[30%] snap-center">
                <div className="rounded-xl overflow-hidden shadow-xl border border-stone-700/40 bg-stone-900">
                  <div className="relative">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 640px) 78vw, (max-width: 1024px) 44vw, 30vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-stone-900/80 via-transparent to-transparent" />
                    {(item.label || item.meta) && (
                      <div className="absolute bottom-3 left-3 right-3">
                        {item.label && (
                          <p className="text-white text-sm font-bold drop-shadow-md">{item.label}</p>
                        )}
                        {item.meta && (
                          <p className="text-amber-300/80 text-xs font-medium mt-0.5">{item.meta}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-center gap-1.5">
            {safeItems.map((_, i) => (
              <button
                key={i}
                aria-label={`Imagem ${i + 1}`}
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
      </div>
    </section>
  );
}