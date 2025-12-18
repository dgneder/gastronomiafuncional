"use client";
import React, { useRef } from "react";
import { useTracking } from "@/app/hooks/useTracking";

const Form: React.FC = () => {
  const { trackLead } = useTracking();
  const formRef = useRef<HTMLFormElement>(null);

  // URL base do Webhook (sem o redirect ainda)
  const webhookBase = "https://webhook.sellflux.app/v2/webhook/form/e60bdb8ee95a621e87a74a5f5fb59990";
  
  // URL base da Hotmart
  const hotmartBase = "https://pay.hotmart.com/L103445537S";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget; // Referência direta ao formulário

    const formData = new FormData(form);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const ddi = String(formData.get("ddi") || "55");
    const phone = String(formData.get("phone") || "");

    // 1. Limpeza do telefone (Apenas números)
    const cleanPhone = phone.replace(/\D/g, ""); 
    const fullPhone = `${ddi}${cleanPhone}`; // Formato 5511999999999

    // 2. Rastreamento (Pixel/API)
    // Fazemos isso antes de sair da página
    await trackLead(email, `+${fullPhone}`);

    // 3. Construção Inteligente da URL da Hotmart
    // Aqui "colamos" os dados do usuário na URL de destino
    const hotmartParams = new URLSearchParams();
    hotmartParams.append("off", "obgahk0r"); // Oferta R$ 47
    hotmartParams.append("checkoutMode", "10");
    hotmartParams.append("name", name);
    hotmartParams.append("email", email);
    
    // Envia o telefone em todas as variações para garantir o preenchimento
    hotmartParams.append("phoneac", fullPhone);
    hotmartParams.append("phone", fullPhone);
    
    // URL Final da Hotmart com os dados
    const finalHotmartUrl = `${hotmartBase}?${hotmartParams.toString()}`;

    // 4. Montagem da URL de Ação do Formulário
    // Dizemos para a Sellflux: "Salva o lead E DEPOIS joga ele para essa URL cheia de dados"
    const finalActionUrl = `${webhookBase}?redirect_url=${encodeURIComponent(finalHotmartUrl)}`;

    // 5. Atualiza a ação do formulário e envia
    form.action = finalActionUrl;
    form.submit(); // Envio nativo (não passa pelo React mais)
  };

  return (
    <form
      ref={formRef}
      method="post"
      // Deixamos vazio ou padrão aqui, pois será sobrescrito no submit
      action={webhookBase} 
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
        className="w-full py-4 bg-amber-600 text-white font-bold uppercase rounded-lg hover:bg-amber-500 transition-all duration-300 shadow-md text-lg tracking-wide"
      >
        CONTINUAR
      </button>
    </form>
  );
};

export default Form;