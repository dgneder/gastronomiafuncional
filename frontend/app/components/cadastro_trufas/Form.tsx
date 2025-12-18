"use client";
import React, { useRef } from "react";
import { useTracking } from "@/app/hooks/useTracking";

const Form: React.FC = () => {
  const { trackLead } = useTracking();
  const formRef = useRef<HTMLFormElement>(null);

  // Use o mesmo PADRÃO do Sobremesas (v2/form/lead)
  const actionUrl =
    "https://webhook.sellflux.com/webhook/v2/form/lead/e60bdb8ee95a621e87a74a5f5fb59990" +
    "?redirect_url=" +
    encodeURIComponent("https://pay.hotmart.com/L103445537S?checkoutMode=10");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email") || "");
    const ddi = String(formData.get("ddi") || "55");
    const phone = String(formData.get("phone") || "");

    // Envie pro seu tracking o telefone já “completo”
    await trackLead(email, `+${ddi}${phone}`);

    // Agora deixa o POST real acontecer (Sellflux salva e redireciona)
    formRef.current?.submit();
  };

  return (
    <form
      ref={formRef}
      method="post"
      action={actionUrl}
      onSubmit={handleSubmit}
      className="space-y-6 bg-zinc-900 p-6 rounded-xl shadow-lg border border-amber-500"
    >
      <div className="space-y-2">
        <label htmlFor="name" className="text-amber-400 font-semibold text-lg">
          Nome Completo
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nome Completo"
          required
          className="w-full px-4 py-3 bg-zinc-800 border border-amber-500 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-amber-100 placeholder-amber-400"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-amber-400 font-semibold text-lg">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Seu melhor e-mail"
          required
          className="w-full px-4 py-3 bg-zinc-800 border border-amber-500 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-amber-100 placeholder-amber-400"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-amber-400 font-semibold text-lg">
          WhatsApp
        </label>

        <div className="flex">
          <select
            id="ddi"
            name="ddi"
            defaultValue="55"
            className="w-24 border border-amber-500 bg-zinc-800 rounded-l-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 text-amber-100"
          >
            <option value="55">🇧🇷 +55</option>
          </select>

          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(00) 00000-0000"
            required
            className="w-full px-4 py-3 border border-l-0 border-amber-500 bg-zinc-800 rounded-r-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-amber-100 placeholder-amber-400"
          />
        </div>

        {/* opcional: ajuda o Sellflux/Hotmart a não “engasgar” com máscara */}
        <p className="text-xs text-zinc-400">
          Dica: digite só números (DDD + número).
        </p>
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-amber-600 text-white font-bold uppercase rounded-lg hover:bg-amber-500 transition-all duration-300 shadow-md text-lg tracking-wide"
      >
        CONTINUAR
      </button>
    </form>
  );
};

export default Form;
