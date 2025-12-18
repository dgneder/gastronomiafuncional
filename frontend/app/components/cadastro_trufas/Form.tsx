"use client";
import React, { useState } from "react";
import { useTracking } from "@/app/hooks/useTracking";

const Form: React.FC = () => {
  const { trackLead } = useTracking();
  const [loading, setLoading] = useState(false);

  const hotmartBaseUrl = "https://pay.hotmart.com/L103445537S"; 
  const sellfluxWebhook = "https://webhook.sellflux.app/v2/webhook/form/e60bdb8ee95a621e87a74a5f5fb59990";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const ddi = formData.get("ddi") as string;
    const rawPhone = formData.get("phone") as string;

    // 1. Prepara os formatos de telefone
    // 'cleanPhone': Apenas DDD + Número (ex: 11999999999) -> Para Hotmart
    const cleanPhone = rawPhone.replace(/\D/g, "");
    
    // 'fullPhone': DDI + DDD + Número (ex: 5511999999999) -> Para Sellflux/Pixel
    const fullPhone = `${ddi}${cleanPhone}`;

    try {
      // 2. Rastreamento (Usa formato completo internacional)
      await trackLead(email, fullPhone);

      // 3. Sellflux (Usa formato completo internacional)
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
      console.error("Erro:", error);
    } finally {
      // 4. REDIRECIONAMENTO CORRIGIDO
      const params = new URLSearchParams();
      
      params.append("off", "obgahk0r"); // Preço R$ 47
      params.append("checkoutMode", "10");
      params.append("name", name);
      params.append("email", email);
      
      // CORREÇÃO AQUI: Enviamos 'cleanPhone' (sem o 55) para a Hotmart
      params.append("phoneac", cleanPhone); 

      const finalUrl = `${hotmartBaseUrl}?${params.toString()}`;
      
      window.location.href = finalUrl;
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-zinc-900 p-6 rounded-xl shadow-lg border border-amber-500"
      >
        {/* Campo Nome */}
        <div className="space-y-2">
          <label htmlFor="name" className="text-amber-400 font-semibold text-lg">
            Nome Completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome completo"
            required
            className="w-full px-4 py-3 bg-zinc-800 border border-amber-500 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-amber-100 placeholder-amber-400 transition-all"
          />
        </div>

        {/* Campo Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-amber-400 font-semibold text-lg">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu melhor e-mail"
            required
            className="w-full px-4 py-3 bg-zinc-800 border border-amber-500 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-amber-100 placeholder-amber-400 transition-all"
          />
        </div>

        {/* Campo Celular */}
        <div className="space-y-2">
          <label htmlFor="phone" className="text-amber-400 font-semibold text-lg">
            WhatsApp
          </label>
          <div className="flex">
            {/* DDI Manual */}
            <select
              id="ddi"
              name="ddi"
              defaultValue="55"
              className="w-24 border border-amber-500 bg-zinc-800 rounded-l-md px-2 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 text-amber-100"
            >
              <option value="55">🇧🇷 +55</option>
            </select>
            
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="(00) 00000-0000"
              required
              maxLength={15}
              className="w-full px-4 py-3 border border-l-0 border-amber-500 bg-zinc-800 rounded-r-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-amber-100 placeholder-amber-400 transition-all"
            />
          </div>
        </div>

        {/* Botão de Ação */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-amber-600 text-white font-bold uppercase rounded-lg hover:bg-amber-500 transition-all duration-300 shadow-md text-lg tracking-wide hover:shadow-amber-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "PROCESSANDO..." : "CONTINUAR"}
        </button>
      </form>
    </div>
  );
};

export default Form;