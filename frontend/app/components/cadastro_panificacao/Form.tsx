"use client";
import React, { useRef, useState } from "react";
import { useTracking } from "@/app/hooks/useTracking";
import { FaArrowRight, FaLock } from "react-icons/fa";

// ═══════════════════════════════════════════════════════════════
// CONFIGURAÇÃO
// ═══════════════════════════════════════════════════════════════
const HOTMART_CHECKOUT_URL = "https://pay.hotmart.com/SEU_HOTLINK_AQUI";
const COUPON_CODE = "LANCAMENTO";
const WEBHOOK_URL = "https://webhook.sellflux.com/webhook/v2/form/lead/SEU_WEBHOOK_ID_AQUI";
// ═══════════════════════════════════════════════════════════════

const Form: React.FC = () => {
  const { trackLead } = useTracking();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Nova lógica de URL passando o telefone para pré-preencher 100% do checkout
  const buildCheckoutUrl = (email: string, name: string, phone: string) => {
    const params = new URLSearchParams();
    params.set("offDiscount", COUPON_CODE);
    params.set("checkoutMode", "10"); // Checkout limpo, sem header
    
    if (email) params.set("email", email);
    if (name) params.set("name", name);
    if (phone) {
      // Limpa a máscara (parênteses, espaços e traços) para a Hotmart
      const cleanPhone = phone.replace(/\D/g, ""); 
      params.set("phonenumber", cleanPhone);
    }
    
    return `${HOTMART_CHECKOUT_URL}?${params.toString()}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;

    // Track lead event (Meta Pixel + CAPI)
    try {
      await trackLead(email, phone);
    } catch {
      // Ignora erro de tracking para não bloquear o redirect da venda
    }

    const checkoutUrl = buildCheckoutUrl(email, name, phone);

    // Lógica do Webhook ou Redirecionamento Direto
    if (WEBHOOK_URL && WEBHOOK_URL !== "https://webhook.sellflux.com/webhook/v2/form/lead/SEU_WEBHOOK_ID_AQUI") {
      const webhookWithRedirect = `${WEBHOOK_URL}?redirect_url=${encodeURIComponent(checkoutUrl)}`;
      if (formRef.current) {
        formRef.current.action = webhookWithRedirect;
        formRef.current.submit();
      }
    } else {
      window.location.href = checkoutUrl;
    }
  };

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  return (
    <form
      ref={formRef}
      method="post"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      {/* Name */}
      <div className="space-y-1.5">
        <label htmlFor="name" className="text-stone-300 font-medium text-sm">
          Nome completo
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Seu nome"
          required
          className="w-full px-4 py-3.5 bg-stone-800 border border-stone-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 text-white placeholder-stone-500 transition-all"
        />
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <label htmlFor="email" className="text-stone-300 font-medium text-sm">
          Seu melhor e-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="nome@email.com"
          required
          className="w-full px-4 py-3.5 bg-stone-800 border border-stone-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 text-white placeholder-stone-500 transition-all"
        />
      </div>

      {/* Phone */}
      <div className="space-y-1.5">
        <label htmlFor="phone" className="text-stone-300 font-medium text-sm">
          WhatsApp
        </label>
        <div className="flex">
          <div className="flex items-center gap-1.5 px-3 bg-stone-800 border border-stone-600 border-r-0 rounded-l-xl text-stone-400 text-sm">
            <span>🇧🇷</span>
            <span>+55</span>
          </div>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(00) 00000-0000"
            required
            onChange={(e) => {
              e.target.value = formatPhone(e.target.value);
            }}
            className="w-full px-4 py-3.5 bg-stone-800 border border-stone-600 rounded-r-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 text-white placeholder-stone-500 transition-all"
          />
        </div>
        <p className="text-stone-500 text-xs">
          Enviaremos seu acesso e materiais bônus por aqui.
        </p>
      </div>

      {/* Hidden DDI field for webhook compatibility */}
      <input type="hidden" name="ddi" value="55" />

      {/* Submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="group w-full py-4 text-lg font-bold text-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        style={{
          background: isSubmitting
            ? "#6B3A2A"
            : "linear-gradient(135deg, #6B3A2A, #8B5A3C)",
        }}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Processando...
          </>
        ) : (
          <>
            Ir para Pagamento Seguro
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>

      {/* Security note */}
      <p className="text-center text-stone-500 text-xs flex items-center justify-center gap-1.5">
        <FaLock className="text-green-500" />
        Seus dados estão protegidos e não serão compartilhados.
      </p>
    </form>
  );
};

export default Form;