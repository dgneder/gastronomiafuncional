"use client";
import React, { useEffect, useState, useMemo } from "react";

const CountdownBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  const deadline = useMemo(() => {
    const d = new Date();
    d.setHours(d.getHours() + 24);
    return d;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const distance = deadline.getTime() - now;
      if (distance > 0) {
        setTimeLeft({
          hours: Math.floor(distance / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [deadline]);

  return (
    <div className="px-6 py-3 bg-amber-900/20 border-b border-stone-700/50">
      <div className="flex items-center justify-between">
        <p className="text-amber-300/80 text-xs font-medium">
          ⏰ Cupom de lançamento expira em:
        </p>
        <div className="flex items-center gap-1.5">
          {[
            { value: timeLeft.hours, label: "h" },
            { value: timeLeft.minutes, label: "m" },
            { value: timeLeft.seconds, label: "s" },
          ].map((unit, i) => (
            <div key={i} className="flex items-center">
              <span className="bg-stone-800 text-amber-400 font-mono font-bold text-sm px-1.5 py-0.5 rounded">
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="text-stone-500 text-xs ml-0.5">{unit.label}</span>
              {i < 2 && <span className="text-stone-600 mx-0.5">:</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountdownBanner;
