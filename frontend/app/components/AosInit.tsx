"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AosInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
      easing: "ease-in-out",
      delay: 100,
      once: true,
    });
  }, []);

  return null;
};