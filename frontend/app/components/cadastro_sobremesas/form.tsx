"use client";
import React, { useRef } from "react";
import { useTracking } from "@/app/hooks/useTracking";

const Form: React.FC = () => {
  const { trackLead } = useTracking();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;

    await trackLead(email, phone);

    formRef.current?.submit();
  };

  return (
    <form
      ref={formRef}
      method="post"
      action="https://webhook.sellflux.com/webhook/v2/form/lead/6efdd500b4f55cad1115dd4ae7d70184?redirect_url=https%3A%2F%2Fpay.hotmart.com%2FG99983616M%3Foff%3D2e04ld34%26checkoutMode%3D10"
      onSubmit={handleSubmit}
      className="space-y-6 bg-zinc-900 p-6 rounded-xl shadow-lg border border-pink-500"
    >
      <div className="space-y-2">
        <label htmlFor="name-2" className="text-pink-400 font-semibold text-lg">
          Nome Completo
        </label>
        <input
          type="text"
          id="name-2"
          name="name"
          placeholder="Digite seu nome completo"
          className="w-full px-4 py-3 bg-zinc-800 border border-pink-500 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 text-pink-100 placeholder-pink-400"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email-2" className="text-pink-400 font-semibold text-lg">
          E-mail
        </label>
        <input
          type="email"
          id="email-2"
          name="email"
          placeholder="Digite seu melhor e-mail"
          required
          className="w-full px-4 py-3 bg-zinc-800 border border-pink-500 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 text-pink-100 placeholder-pink-400"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="tel-2" className="text-pink-400 font-semibold text-lg">
          Celular
        </label>
        <div className="flex">
          <select
            id="ddi-2"
            name="ddi"
            defaultValue="55"
            className="border border-pink-500 bg-zinc-800 rounded-l-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 text-pink-100"
          >
            <option value="55">🇧🇷 +55</option>
          </select>
          <input
            type="tel"
            id="tel-2"
            name="phone"
            placeholder="(00) 00000-0000"
            required
            className="w-full px-4 py-3 border border-l-0 border-pink-500 bg-zinc-800 rounded-r-md focus:outline-none focus:ring-2 focus:ring-pink-400 text-pink-100 placeholder-pink-400"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-pink-600 text-white font-bold uppercase rounded-lg hover:bg-pink-700 transition-all duration-300 shadow-md text-lg tracking-wide"
      >
        Continuar
      </button>
    </form>
  );
};

export default Form;