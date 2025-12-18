"use client";
import React, { useState } from "react";
import { useTracking } from "@/app/hooks/useTracking";

const Form: React.FC = () => {
  const { trackLead } = useTracking();
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState("CONTINUAR");

  // CONFIGURAÇÕES
  const sellfluxWebhook = "https://webhook.sellflux.app/v2/webhook/form/e60bdb8ee95a621e87a74a5f5fb59990";
  const hotmartBaseUrl = "https://pay.hotmart.com/L103445537S";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 1. Trava o envio nativo para não recarregar a página
    setLoading(true);
    setButtonText("PROCESSANDO...");

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const ddi = String(formData.get("ddi") || "55");
    const rawPhone = String(formData.get("phone") || "");

    // --- TRATAMENTO DE TELEFONE ---
    // Remove tudo que não for número
    const numbersOnly = rawPhone.replace(/\D/g, ""); 
    
    // Formato Internacional (para Sellflux e Pixel)
    const fullPhone = `+${ddi}${numbersOnly}`; 
    
    // Formato Hotmart (Apenas DDD + Número, pois o DDI já vai separado)
    const hotmartPhone = numbersOnly; 

    // --- CORRIDA CONTRA O TEMPO (TIMEOUT) ---
    // Garante que se o Pixel ou Sellflux travarem, o cliente é redirecionado em 1.5s
    const performTrackingAndWebhook = async () => {
      try {
        await Promise.all([
          // Rastreamento
          trackLead(email, fullPhone).catch((err) => console.warn("Pixel falhou", err)),
          
          // Envio para Sellflux (sem esperar resposta de sucesso, apenas envia)
          fetch(sellfluxWebhook, {
            method: "POST",
            keepalive: true, // Garante envio mesmo se a página fechar
            mode: "no-cors",
            body: (() => {
              const data = new FormData();
              data.append("name", name);
              data.append("email", email);
              data.append("phone", fullPhone); // Envia completo para o CRM
              return data;
            })(),
          })
        ]);
      } catch (err) {
        console.warn("Erro silencioso:", err);
      }
    };

    // Timeout de segurança
    const timeOutPromise = new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Espera o envio OU o timeout (quem for mais rápido)
    await Promise.race([performTrackingAndWebhook(), timeOutPromise]);

    // --- REDIRECIONAMENTO FINAL ---
    const params = new URLSearchParams();
    
    // ATENÇÃO: Código da oferta de R$ 37,00 atualizado
    params.append("off", "4stt5dr0"); 
    
    params.append("checkoutMode", "10");
    params.append("name", name);
    params.append("email", email);
    
    // Parâmetros de telefone para Hotmart (Combo para garantir preenchimento)
    params.append("phoneac", hotmartPhone); // Padrão novo
    params.append("phone", hotmartPhone);   // Padrão antigo

    // Redireciona via Javascript
    window.location.href = `${hotmartBaseUrl}?${params.toString()}`;
  };

  return (
    <div className="w-full max-w-md mx-auto">
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
            Dica: Digite apenas o DDD e o número.
          </p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-amber-600 text-white font-bold uppercase rounded-lg hover:bg-amber-500 transition-all duration-300 shadow-md text-lg tracking-wide hover:shadow-amber-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default Form;