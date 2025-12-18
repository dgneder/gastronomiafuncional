"use client";
import React, { useState } from "react";
import { useTracking } from "@/app/hooks/useTracking";

const Form: React.FC = () => {
  const { trackLead } = useTracking();
  const [buttonText, setButtonText] = useState("CONTINUAR");

  // Configurações
  const sellfluxWebhook = "https://webhook.sellflux.app/v2/webhook/form/e60bdb8ee95a621e87a74a5f5fb59990";
  const hotmartBaseUrl = "https://pay.hotmart.com/L103445537S";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Impede o envio padrão do navegador
    setButtonText("PROCESSANDO...");

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const ddi = String(formData.get("ddi") || "55");
    const phone = String(formData.get("phone") || "");

    // 1. Tratamento do Telefone
    const cleanPhone = phone.replace(/\D/g, ""); 
    const fullPhone = `+${ddi}${cleanPhone}`; // Formato +5583999999999 para tracking
    const hotmartPhone = `${ddi}${cleanPhone}`; // Formato 5583999999999 para Hotmart

    // 2. Envio para Rastreamento (Pixel/API)
    await trackLead(email, fullPhone);

    // 3. Envio para Sellflux (Em segundo plano)
    // Usamos 'no-cors' pois webhooks geralmente não retornam JSON legível para o browser,
    // mas o dado é recebido lá normalmente.
    try {
      const sellfluxData = new FormData();
      sellfluxData.append("name", name);
      sellfluxData.append("email", email);
      sellfluxData.append("phone", fullPhone);

      await fetch(sellfluxWebhook, {
        method: "POST",
        body: sellfluxData,
        mode: "no-cors",
      });
    } catch (error) {
      console.error("Erro ao salvar lead:", error);
      // Não paramos o fluxo se der erro no webhook, priorizamos a venda
    }

    // 4. Redirecionamento Controlado (Client-Side)
    // Montamos a URL manualmente, sem interferência externa
    const params = new URLSearchParams();
    params.append("off", "obgahk0r");
    params.append("checkoutMode", "10");
    params.append("name", name);
    params.append("email", email);
    
    // Parâmetros de telefone para preenchimento automático
    params.append("phoneac", hotmartPhone); 
    
    // Forçamos o redirecionamento aqui
    window.location.href = `${hotmartBaseUrl}?${params.toString()}`;
  };

  return (
    <form
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
        
        <p className="text-xs text-zinc-400">
          Dica: digite só números (DDD + número).
        </p>
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-amber-600 text-white font-bold uppercase rounded-lg hover:bg-amber-500 transition-all duration-300 shadow-md text-lg tracking-wide hover:shadow-amber-500/20"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default Form;