"use client";
import React from "react";
import { useTracking } from "@/app/hooks/useTracking";

const Form: React.FC = () => {
  const { trackLead } = useTracking();

  const webhookBase =
    "https://webhook.sellflux.app/v2/webhook/form/e60bdb8ee95a621e87a74a5f5fb59990";

  const hotmartBase = "https://pay.hotmart.com/L103445537S";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const ddi = String(formData.get("ddi") || "55").replace(/\D/g, "");
    const phoneRaw = String(formData.get("phone") || "");

    // só números
    const cleanPhone = phoneRaw.replace(/\D/g, "");

    // tenta inferir DDD (BR): 2 primeiros dígitos
    const ddd = cleanPhone.slice(0, 2);
    const number = cleanPhone.slice(2);

    // full E.164-ish sem "+"
    const fullPhone = `${ddi}${cleanPhone}`; // 5511999999999

    // Track sem travar o submit em produção
    try {
      await trackLead(email, `+${fullPhone}`);
    } catch (err) {
      // Não bloqueia fluxo de venda
      console.warn("trackLead falhou, seguindo o submit:", err);
    }

    // Monta params pro Hotmart (mande variações)
    const p = new URLSearchParams();
    p.set("off", "obgahk0r");
    p.set("checkoutMode", "10");
    if (name) p.set("name", name);
    if (email) p.set("email", email);

    // Telefone (várias chaves, vários formatos)
    if (cleanPhone) {
      p.set("ddi", ddi);            // 55
      p.set("phoneac", ddd);        // 11
      p.set("phonenumber", number); // 999999999
      p.set("phone_number", number);

      // Alguns checkouts aceitam tudo junto também
      p.set("phone", fullPhone);    // 5511999999999
      p.set("telephone", fullPhone);
      p.set("tel", fullPhone);
    }

    const finalHotmartUrl = `${hotmartBase}?${p.toString()}`;

    // Importante: encode UMA vez aqui
    const finalActionUrl =
      `${webhookBase}?redirect_url=${encodeURIComponent(finalHotmartUrl)}`;

    // Não use form.submit() se você quer garantir action atualizada imediatamente
    // (requestSubmit respeita validação/estado do form)
    form.setAttribute("action", finalActionUrl);
    form.requestSubmit();
  };

  return (
    <form
      method="post"
      action={webhookBase}
      onSubmit={handleSubmit}
      acceptCharset="UTF-8"
      className="space-y-6 bg-zinc-900 p-6 rounded-xl shadow-lg border border-amber-500"
    >
      {/* Nome */}
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

      {/* Email */}
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

      {/* Telefone */}
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
            placeholder="(11) 99999-9999"
            required
            inputMode="numeric"
            className="w-full px-4 py-3 border border-l-0 border-amber-500 bg-zinc-800 rounded-r-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-amber-100 placeholder-amber-400"
          />
        </div>
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
