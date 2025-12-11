import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(targetDate.getTime() - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate.getTime() - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="bg-zinc-900 p-6 rounded-xl border border-pink-500 shadow-lg text-center mb-8">
      <h3 className="text-lg font-bold text-pink-400 uppercase tracking-wide mb-4">
        Oferta especial expira em:
      </h3>

      <div className="flex justify-center gap-4 text-zinc-100 text-xl font-semibold">
        <div className="bg-pink-500 px-5 py-4 rounded-lg shadow-md">
          {String(hours).padStart(2, '0')}h
        </div>
        <div className="bg-pink-500 px-5 py-4 rounded-lg shadow-md">
          {String(minutes).padStart(2, '0')}m
        </div>
        <div className="bg-pink-500 px-5 py-4 rounded-lg shadow-md">
          {String(seconds).padStart(2, '0')}s
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
