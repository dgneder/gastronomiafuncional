"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  hours: number;
}

export default function CountdownTimer({ hours }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    const target = Date.now() + hours * 60 * 60 * 1000;

    const tick = () => {
      setTimeLeft(target - Date.now());
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [hours]);

  if (timeLeft <= 0) return null;

  const h = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const m = Math.floor((timeLeft / (1000 * 60)) % 60);
  const s = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="bg-zinc-900 p-6 rounded-xl border border-pink-500 shadow-lg text-center">
      <h3 className="text-lg font-bold text-pink-400 mb-4">
        Oferta especial expira em:
      </h3>
      <div className="flex justify-center gap-4 text-xl font-semibold">
        <div className="bg-pink-500 px-5 py-4 rounded-lg">{h}h</div>
        <div className="bg-pink-500 px-5 py-4 rounded-lg">{m}m</div>
        <div className="bg-pink-500 px-5 py-4 rounded-lg">{s}s</div>
      </div>
    </div>
  );
}
