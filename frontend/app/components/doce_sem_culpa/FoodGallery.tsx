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
  { src: "/doce-sem-culpa/gallery/mousse_chocolate.png", alt: "Mousse de chocolate funcional",    label: "Mousse Chocolate 70%",     meta: "SG · SL · DIA" },
  { src: "/doce-sem-culpa/gallery/brigadeiro.png",       alt: "Brigadeiro funcional",             label: "Brigadeiro Funcional",     meta: "KIDS · LC · 10 min" },
  { src: "/doce-sem-culpa/gallery/cheesecake.png",       alt: "Cheesecake de frutas vermelhas",   label: "Cheesecake Funcional",     meta: "Antocianinas · 15 min" },
  { src: "/doce-sem-culpa/gallery/picole_frutas.png",    alt: "Picolé de frutas vermelhas",       label: "Picolé Antioxidante",      meta: "VEG · ANTI-INF · 5 min" },
  { src: "/doce-sem-culpa/gallery/brownie_keto.png",     alt: "Brownie keto com cobertura",       label: "Brownie Keto",             meta: "LC · SG · SO" },
  { src: "/doce-sem-culpa/gallery/pudim_chia.png",       alt: "Pudim de chia em camadas",         label: "Pudim de Chia em Camadas", meta: "VEG · FIBRA · 4h geladeira" },
  { src: "/doce-sem-culpa/gallery/trufa_beleza.png",     alt: "Trufa de colágeno e frutas",       label: "Trufa Beleza & Colágeno",  meta: "Colágeno · Vit C · 12 min" },
  { src: "/doce-sem-culpa/gallery/bolo_rolo.png",        alt: "Bolo de rolo funcional",           label: "Bolo de Rolo Funcional",   meta: "Regional · SG · 40 min" },
  { src: "/doce-sem-culpa/gallery/nice_cream.png",       alt: "Nice cream de banana",             label: "Nice Cream Express",       meta: "5 min · KIDS · VEG" },
  { src: "/doce-sem-culpa/gallery/panna_cotta.png",      alt: "Panna cotta funcional",            label: "Panna Cotta de Kefir",     meta: "Probiótico · DIGEST" },
  { src: "/doce-sem-culpa/gallery/cookie_proteico.png",  alt: "Cookie proteico pós-treino",       label: "Cookie Pós-Treino",        meta: "PROTEICO · 15 min" },
  { src: "/doce-sem-culpa/gallery/flan_funcional.png",   alt: "Flan funcional com calda",         label: "Flan Funcional",           meta: "Vit A · 20 min" },
];

export default function FoodGallery({
  title = "252 receitas no ebook. Cada uma com essa qualidade visual.",
  subtitle = "Sobremesas funcionais que parecem saídas de revista de gastronomia — e cabem na sua cozinha de domingo.",
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
    <section className="py-16 px-0 bg-white" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 px-6">
          <p
            className="text-xs uppercase tracking-widest font-bold mb-3"
            style={{ color: "#8B2252" }}
          >
            Veja a qualidade visual do material
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-stone-800">{title}</h2>
          {subtitle && <p className="text-stone-500 text-lg mt-3 max-w-xl mx-auto">{subtitle}</p>}
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
            disabled={active >= safeItems.length - 1}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border border-stone-200 disabled:opacity-20 hover:border-amber-300 transition"
          >
            <FaChevronRight className="text-stone-600 text-sm" />
          </button>

          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto pb-4 px-6 snap-x snap-mandatory scroll-smooth"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {safeItems.map((item, idx) => (
              <div
                key={idx}
                className="min-w-[78%] sm:min-w-[44%] lg:min-w-[30%] snap-center"
              >
                <div className="rounded-2xl overflow-hidden bg-white shadow-md border border-stone-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 640px) 78vw, (max-width: 1024px) 44vw, 30vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-stone-900/80 via-stone-900/10 to-transparent" />
                    {(item.label || item.meta) && (
                      <div className="absolute bottom-3 left-3 right-3">
                        {item.label && (
                          <p className="text-white text-sm font-bold drop-shadow-md">{item.label}</p>
                        )}
                        {item.meta && (
                          <p className="text-xs font-medium mt-0.5" style={{ color: "#E8B84A" }}>{item.meta}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-1.5">
            {safeItems.map((_, i) => (
              <button
                key={i}
                aria-label={`Imagem ${i + 1}`}
                onClick={() => scrollToIndex(i)}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === active ? "28px" : "6px",
                  backgroundColor: i === active ? "#8B2252" : "#D6D3D1",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
