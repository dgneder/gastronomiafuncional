"use client";
import React, { useEffect, useState } from "react";

interface CountdownTimerProps {
  hours: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ hours }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const deadline = new Date();
    deadline.setHours(deadline.getHours() + hours);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [hours]);

  return (
    <div className="text-center">
      <p className="text-amber-400 text-sm mb-2">Oferta expira em:</p>
      <div className="flex justify-center space-x-3">
        <div className="bg-amber-600 text-white px-4 py-2 rounded-lg">
          <span className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, "0")}</span>
          <p className="text-xs">Horas</p>
        </div>
        <div className="bg-amber-600 text-white px-4 py-2 rounded-lg">
          <span className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, "0")}</span>
          <p className="text-xs">Min</p>
        </div>
        <div className="bg-amber-600 text-white px-4 py-2 rounded-lg">
          <span className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, "0")}</span>
          <p className="text-xs">Seg</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;