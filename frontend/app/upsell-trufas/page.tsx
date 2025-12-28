"use client";
import React, { Suspense, useEffect } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useTracking } from "@/app/hooks/useTracking";

const UpsellHero = dynamic(() => import("@/app/components/upsell-trufas/Upsellhero"));
const UpsellBenefits = dynamic(() => import("@/app/components/upsell-trufas/Upsellbenefits"));
const UpsellTestimonials = dynamic(() => import("@/app/components/upsell-trufas/Upselltestimonials"));
const UpsellGuarantee = dynamic(() => import("@/app/components/upsell-trufas/Upsellguarantee"));
const UpsellFAQ = dynamic(() => import("@/app/components/upsell-trufas/Upsellfaq"));
const UpsellFooter = dynamic(() => import("@/app/components/upsell-trufas/Upsellfooter"));

// Loading fallback
function UpsellLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-amber-700 font-semibold">Carregando sua oferta especial...</p>
      </div>
    </div>
  );
}

// Componente que usa useSearchParams (precisa estar dentro do Suspense)
function UpsellContent() {
  const { trackViewContent } = useTracking();
  const searchParams = useSearchParams();

  // Captura os dados do cliente vindos da página anterior
  const customerName = searchParams.get("name") || "";
  const customerEmail = searchParams.get("email") || "";
  const customerPhone = searchParams.get("phone") || "";

  useEffect(() => {
    trackViewContent(
      "Guia de Trufas e Docinhos Funcionais - Upsell",
      "guia-trufas-funcionais-upsell",
      37.00
    );
  }, [trackViewContent]);

  // ═══════════════════════════════════════════════════════════════════════════
  // CONFIGURAÇÃO DO CHECKOUT HOTMART UPSELL
  // ═══════════════════════════════════════════════════════════════════════════
  const hotmartUpsellUrl = "https://pay.hotmart.com/L103445537S";
  const offerCode = "";
  const declineRedirectUrl = "/obrigado-trufas";
  // ═══════════════════════════════════════════════════════════════════════════

  const handleAcceptUpsell = () => {
    const params = new URLSearchParams();
    params.append("checkoutMode", "10");
    
    if (offerCode) params.append("off", offerCode);
    if (customerName) params.append("name", customerName);
    if (customerEmail) params.append("email", customerEmail);
    if (customerPhone) {
      params.append("phoneac", customerPhone);
      params.append("phone", customerPhone);
    }

    window.location.href = `${hotmartUpsellUrl}?${params.toString()}`;
  };

  const handleDeclineUpsell = () => {
    window.location.href = declineRedirectUrl;
  };

  return (
    <>
      <UpsellHero
        customerName={customerName}
        onAccept={handleAcceptUpsell}
        onDecline={handleDeclineUpsell}
      />
      <UpsellBenefits />
      <UpsellTestimonials />
      <UpsellFAQ />
      <UpsellGuarantee
        onAccept={handleAcceptUpsell}
        onDecline={handleDeclineUpsell}
      />
      <UpsellFooter />
    </>
  );
}

// Página principal com Suspense (obrigatório no Next.js 14+)
export default function TrufasUpsellPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100">
      <Suspense fallback={<UpsellLoading />}>
        <UpsellContent />
      </Suspense>
    </div>
  );
}