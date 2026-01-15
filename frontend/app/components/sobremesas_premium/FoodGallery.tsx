"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type GalleryItem = {
  src: string;
  alt: string;
  label?: string;
  meta?: string;
};

interface FoodGalleryProps {
  title: string;
  subtitle?: string;
  items: GalleryItem[];
}

export default function FoodGallery({ title, subtitle, items }: FoodGalleryProps) {
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

  const next = () => scrollToIndex(active + 1);
  const prev = () => scrollToIndex(active - 1);

  // Atualiza o "active" conforme scroll (mais confiável que onClick)
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
  }, [safeItems.length]);

  // ⚠️ Autoplay não recomendo por padrão.
  // Se quiser MUITO, ativa somente depois de interação do usuário.
  // const [userTouched, setUserTouched] = useState(false);
  // useEffect(() => {
  //   if (!userTouched) return;
  //   const id = window.setInterval(() => scrollToIndex((active + 1) % safeItems.length), 4500);
  //   return () => window.clearInterval(id);
  // }, [userTouched, active, safeItems.length]);

  return (
    <section className="py-10 sm:py-14 px-4 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">{title}</h2>
          {subtitle ? <p className="text-gray-600 mt-2 max-w-2xl mx-auto">{subtitle}</p> : null}
        </div>

        {/* Carrossel (mobile e desktop) */}
        <div className="relative">
          {/* Setas (aparecem sempre; no mobile são úteis demais) */}
          <button
            aria-label="Anterior"
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
            aria-label="Próximo"
            onClick={next}
            disabled={active >= safeItems.length - 1}
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10
                       w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow
                       flex items-center justify-center
                       disabled:opacity-30 disabled:cursor-not-allowed
                       hover:bg-white transition"
          >
            <FaChevronRight className="text-gray-700" />
          </button>

          <div
            ref={trackRef}
            // onTouchStart={() => setUserTouched(true)}
            className="flex gap-4 overflow-x-auto pb-3 px-2 snap-x snap-mandatory scroll-smooth"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {safeItems.map((it, idx) => (
              <div
                key={idx}
                className="min-w-[84%] sm:min-w-[46%] lg:min-w-[32%] snap-center"
              >
                <div className="rounded-2xl overflow-hidden bg-white shadow-lg border border-rose-100">
                  <div className="relative">
                    <img
                      src={it.src}
                      alt={it.alt}
                      className="w-full h-60 sm:h-56 object-cover"
                      loading="lazy"
                    />
                    {(it.label || it.meta) && (
                      <div className="absolute bottom-3 left-3 right-3 bg-white/85 backdrop-blur rounded-xl px-3 py-2 shadow">
                        {it.label ? (
                          <div className="text-sm font-bold text-gray-900">{it.label}</div>
                        ) : null}
                        {it.meta ? <div className="text-xs text-gray-600">{it.meta}</div> : null}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicadores */}
          <div className="mt-3 flex items-center justify-center gap-2">
            {safeItems.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir para imagem ${i + 1}`}
                onClick={() => scrollToIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === active ? "w-7 bg-pink-500" : "w-2.5 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <p className="mt-6 text-xs text-gray-500 text-center">
          *Sobremesas lindas e gostosas — com variações vegana, low carb e com/sem adoçantes (você escolhe).
        </p>
      </div>
    </section>
  );
}
