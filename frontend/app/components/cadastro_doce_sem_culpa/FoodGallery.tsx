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
  { src: "/doce-sem-culpa/gallery/mousse_chocolate.jpg", alt: "Mousse de chocolate funcional", label: "Mousse Chocolate 70%",     meta: "SG · SL · DIA" },
  { src: "/doce-sem-culpa/gallery/brigadeiro.jpg",       alt: "Brigadeiro funcional",          label: "Brigadeiro Funcional",     meta: "KIDS · LC · 10 min" },
  { src: "/doce-sem-culpa/gallery/cheesecake.jpg",       alt: "Cheesecake frutas vermelhas",   label: "Cheesecake Funcional",     meta: "Antocianinas · 15 min" },
  { src: "/doce-sem-culpa/gallery/picole_frutas.jpg",    alt: "Picolé de frutas vermelhas",    label: "Picolé Antioxidante",      meta: "VEG · ANTI-INF" },
  { src: "/doce-sem-culpa/gallery/brownie_keto.jpg",     alt: "Brownie keto",                  label: "Brownie Keto",             meta: "LC · SG · SO" },
  { src: "/doce-sem-culpa/gallery/pudim_chia.jpg",       alt: "Pudim de chia em camadas",      label: "Pudim de Chia",            meta: "VEG · FIBRA · 4h" },
  { src: "/doce-sem-culpa/gallery/trufa_beleza.jpg",     alt: "Trufa de colágeno",             label: "Trufa Colágeno",           meta: "Beleza · 12 min" },
  { src: "/doce-sem-culpa/gallery/bolo_rolo.jpg",        alt: "Bolo de rolo funcional",        label: "Bolo de Rolo",             meta: "Regional · SG" },
  { src: "/doce-sem-culpa/gallery/nice_cream.jpg",       alt: "Nice cream de banana",          label: "Nice Cream Express",       meta: "5 min · KIDS" },
  { src: "/doce-sem-culpa/gallery/panna_cotta.jpg",      alt: "Panna cotta funcional",         label: "Panna Cotta de Kefir",     meta: "Probiótico · DIGEST" },
  { src: "/doce-sem-culpa/gallery/cookie_proteico.jpg",  alt: "Cookie proteico",               label: "Cookie Pós-Treino",        meta: "PROTEICO · 15 min" },
  { src: "/doce-sem-culpa/gallery/flan_funcional.jpg",   alt: "Flan funcional",                label: "Flan Funcional",           meta: "Vit A · 20 min" },
];

export default function FoodGallery({
  title = "252 receitas. Cada uma com essa qualidade.",
  subtitle = "Sobremesas que você vai querer fazer amanhã.",
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
    <section
      className="py-8 px-0"
      style={{ background: "linear-gradient(180deg, #2D1220, #1A0A14)" }}
    >
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
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full backdrop-blur shadow-lg flex items-center justify-center border disabled:opacity-20 disabled:cursor-not-allowed transition"
            style={{
              backgroundColor: "rgba(28, 25, 23, 0.8)",
              borderColor: "rgba(120, 53, 15, 0.5)"
            }}
          >
            <FaChevronLeft className="text-xs" style={{ color: "#E8B84A" }} />
          </button>

          <button
            aria-label="Próximo"
            onClick={() => scrollToIndex(active + 1)}
            disabled={active >= safeItems.length - 1}
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
            {safeItems.map((item, idx) => (
              <div key={idx} className="min-w-[78%] sm:min-w-[44%] lg:min-w-[30%] snap-center">
                <div
                  className="rounded-xl overflow-hidden shadow-xl border bg-stone-900"
                  style={{ borderColor: "rgba(120, 53, 15, 0.4)" }}
                >
                  <div className="relative aspect-4/5">
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
                          <p
                            className="text-xs font-medium mt-0.5"
                            style={{ color: "rgba(232, 184, 74, 0.8)" }}
                          >
                            {item.meta}
                          </p>
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
