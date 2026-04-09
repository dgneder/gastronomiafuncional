"use client";

import React, { useEffect, useState } from "react";

const CountdownBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const savedDeadline = window.localStorage.getItem("dsc_launch_deadline");
    let targetDate: number;

    if (savedDeadline && !isNaN(Number(savedDeadline))) {
      targetDate = parseInt(savedDeadline, 10);
    } else {
      targetDate = Date.now() + 24 * 60 * 60 * 1000;
      window.localStorage.setItem("dsc_launch_deadline", targetDate.toString());
    }

    const updateTimer = () => {
      const distance = targetDate - Date.now();
      if (distance > 0) {
        setTimeLeft({
          hours: Math.floor(distance / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = window.setInterval(updateTimer, 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="px-6 py-2.5" style={{ background: "linear-gradient(135deg, #6B1A40, #8B2252)" }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <p className="text-rose-200/80 text-xs font-medium">
          🍰 Preço de lançamento expira em:
        </p>
        <div className="flex items-center gap-1.5">
          {[
            { value: timeLeft.hours, label: "h" },
            { value: timeLeft.minutes, label: "m" },
            { value: timeLeft.seconds, label: "s" },
          ].map((unit, i) => (
            <div key={i} className="flex items-center">
              <span className="bg-white/10 text-rose-100 font-mono font-bold text-sm px-1.5 py-0.5 rounded border border-white/20">
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="text-rose-300/60 text-xs ml-0.5">{unit.label}</span>
              {i < 2 && <span className="text-rose-400/40 mx-0.5">:</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountdownBanner;
