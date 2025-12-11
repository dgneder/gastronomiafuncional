"use client";
import React, { useEffect } from "react";

const ScriptLoader: React.FC = () => {
  useEffect(() => {
    if (typeof window === "undefined") return; // Evita SSR crash

    const phoneInput = document.getElementById("tel-2") as HTMLInputElement | null;
    const emailInput = document.getElementById("email-2") as HTMLInputElement | null;
    const nameInput = document.getElementById("name-2") as HTMLInputElement | null;
    const ddiSelect = document.getElementById("ddi-2") as HTMLSelectElement | null;

    if (!phoneInput || !ddiSelect) return;

    const phoneMask = "(99) 99999-9999";
    const regionCode = "55";

    const applyMask = (input: HTMLInputElement, mask: string) => {
      const digits = input.value.replace(/\D/g, "");
      let i = 0;
      const masked = mask.replace(/9/g, () => digits[i++] || "");
      input.value = masked;
    };

    const updatePlaceholder = (input: HTMLInputElement, mask: string) => {
      input.placeholder = mask.replace(/9/g, "0");
    };

    const maskPhone = () => {
      applyMask(phoneInput, phoneMask);
      updatePlaceholder(phoneInput, phoneMask);
      phoneInput.dataset.phoneWithDdi = `+${regionCode}${phoneInput.value.replace(/\D/g, "")}`;
    };

    phoneInput.addEventListener("input", maskPhone);
    ddiSelect.addEventListener("change", maskPhone);

    maskPhone(); // Executa ao carregar

    return () => {
      phoneInput.removeEventListener("input", maskPhone);
      ddiSelect.removeEventListener("change", maskPhone);
    };
  }, []);

  return null;
};

export default ScriptLoader;
