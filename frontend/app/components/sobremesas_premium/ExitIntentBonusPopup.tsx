"use client";

import React, { useEffect, useMemo, useState } from "react";

interface ExitIntentBonusPopupProps {
  delayMs?: number; // ex: 55000
  topReturnThresholdPx?: number; // ex: 260
  onAccept: () => void; // ex: scrollToCTA + trackLead
  onGoToCheckout: () => void;
  bonusLabel?: string;
  bonusText?: string;
}

const STORAGE_KEY = "gf_exit_bonus_seen_at";

function canShowToday(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return true;
    const last = Number(raw);
    if (!Number.isFinite(last)) return true;
    const diff = Date.now() - last;
    return diff > 24 * 60 * 60 * 1000; // 24h
  } catch {
    return true;
  }
}

function markShown() {
  try {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch {}
}

export default function ExitIntentBonusPopup({
  delayMs = 55000,
  topReturnThresholdPx = 260,
  onAccept,
  onGoToCheckout,
  bonusLabel = "BÔNUS VÁLIDO HOJE",
  bonusText = "Pack extra + checklist + cardápio 7 dias (acesso imediato)",
}: ExitIntentBonusPopupProps) {
  const [open, setOpen] = useState(false);

  const allowed = useMemo(() => {
    if (typeof window === "undefined") return false;
    return canShowToday();
  }, []);

  useEffect(() => {
    if (!allowed) return;

    // 1) tempo
    const t = window.setTimeout(() => {
      setOpen(true);
      markShown();
    }, delayMs);

    return () => window.clearTimeout(t);
  }, [allowed, delayMs]);

  useEffect(() => {
    if (!allowed) return;

    // 2) exit intent (desktop)
    const onMouseLeave = (e: MouseEvent) => {
      if (open) return;
      if (e.clientY <= 0) {
        setOpen(true);
        markShown();
      }
    };

    document.addEventListener("mouseout", onMouseLeave);
    return () => document.removeEventListener("mouseout", onMouseLeave);
  }, [allowed, open]);

  useEffect(() => {
    if (!allowed) return;

    // 3) voltar pro topo (mobile e geral)
    const onScroll = () => {
      if (open) return;
      const y = window.scrollY || 0;
      if (y <= topReturnThresholdPx) {
        // Só abre se a pessoa já desceu um pouco antes
        // (evita abrir no load)
        if (document.documentElement.scrollHeight > window.innerHeight * 2) {
          setOpen(true);
          markShown();
        }
      }
    };

    let lastY = window.scrollY || 0;
    const handler = () => {
      const y = window.scrollY || 0;
      // Só considera "voltar" se estava mais embaixo e voltou.
      if (lastY > 900 && y <= topReturnThresholdPx) onScroll();
      lastY = y;
    };

    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [allowed, open, topReturnThresholdPx]);

  if (!open) return null;

  const close = () => setOpen(false);

  const accept = () => {
    close();
    onAccept();
  };

  const buyNow = () => {
    close();
    onGoToCheckout();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/50" onClick={close} />

      <div className="relative w-full max-w-lg rounded-3xl bg-white shadow-2xl border border-rose-100 overflow-hidden">
        <div className="p-6 sm:p-7">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-extrabold">
            {bonusLabel}
          </div>

          <h3 className="mt-3 text-2xl font-extrabold text-gray-900">
            Antes de sair…
            <span className="text-pink-600"> quer levar um bônus</span>?
          </h3>

          <p className="mt-2 text-gray-600">
            {bonusText}
          </p>

          <div className="mt-5 flex flex-col gap-3">
            <button
              onClick={accept}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-extrabold shadow-lg hover:shadow-xl transition-all"
            >
              Liberar bônus e ver o CTA
            </button>

            <button
              onClick={buyNow}
              className="w-full py-4 rounded-xl bg-white border border-rose-200 text-gray-800 font-bold hover:bg-rose-50 transition-colors"
            >
              Ir direto pro checkout
            </button>

            <button
              onClick={close}
              className="w-full py-3 rounded-xl text-gray-500 hover:text-gray-700 text-sm"
            >
              Agora não
            </button>
          </div>

          <p className="mt-4 text-xs text-gray-500">
            Sem WhatsApp, sem atendimento manual. É automático.
          </p>
        </div>
      </div>
    </div>
  );
}
