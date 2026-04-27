"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import Form            from "@/app/components/cadastro_doce_sem_culpa/Form";
import ProgressBar     from "@/app/components/cadastro_doce_sem_culpa/ProgressBar";
import OrderSummary    from "@/app/components/cadastro_doce_sem_culpa/OrderSummary";
import SocialProof     from "@/app/components/cadastro_doce_sem_culpa/SocialProof";
import SecuritySeal    from "@/app/components/cadastro_doce_sem_culpa/SecuritySeal";
import TrustBadges     from "@/app/components/cadastro_doce_sem_culpa/TrustBadges";
import CompactPrice    from "@/app/components/cadastro_doce_sem_culpa/CompactPrice";
import { useTracking } from "@/app/hooks/useTracking";

const CountdownBanner = dynamic(() => import("@/app/components/cadastro_doce_sem_culpa/CountdownBanner"), { ssr: false });
const VideoWall       = dynamic(() => import("@/app/components/cadastro_doce_sem_culpa/VideoWall"),       { ssr: false });
const FoodGallery     = dynamic(() => import("@/app/components/cadastro_doce_sem_culpa/FoodGallery"),     { ssr: false });

export default function CadastroDoceSemCulpa() {
  const { trackAddToCart } = useTracking();

  useEffect(() => {
    trackAddToCart("Kit Doce Sem Culpa — Sobremesas Funcionais", "kit-doce-sem-culpa", 67.0);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(180deg, #3D1B2D 0%, #2D1220 50%, #1A0A14 100%)" }}
    >

      {/* ── Formulário (acima da dobra) ── */}
      <div className="px-4 py-6 lg:py-12">
        <div className="max-w-lg mx-auto space-y-4">
          <div className="text-center space-y-1.5">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border"
              style={{ backgroundColor: "rgba(139, 34, 82, 0.25)", borderColor: "rgba(212, 160, 74, 0.3)" }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "#D4A04A" }}
              />
              <span
                className="text-[11px] font-semibold uppercase tracking-wider"
                style={{ color: "#E8B84A" }}
              >
                🎉 Preço Especial de Lançamento
              </span>
            </div>
            <h1 className="text-xl lg:text-3xl font-extrabold text-white">
              Falta pouco para o seu{" "}
              <span style={{ color: "#E8B84A" }}>Kit Doce Sem Culpa!</span>
            </h1>
          </div>

          <div
            className="backdrop-blur-sm rounded-2xl shadow-2xl border overflow-hidden"
            style={{ backgroundColor: "rgba(28, 25, 23, 0.8)", borderColor: "rgba(120, 53, 15, 0.3)" }}
          >
            <ProgressBar progress={66} />
            <CountdownBanner />
            <div className="p-5 lg:p-8 space-y-4 lg:space-y-6">
              <div className="lg:hidden"><CompactPrice /></div>
              <Form />
              <div className="lg:hidden"><SecuritySeal /></div>
              <OrderSummary />
              <SocialProof />
              <div className="hidden lg:block"><SecuritySeal /></div>
            </div>
          </div>

          <TrustBadges />
        </div>
      </div>

      {/* ── Conteúdo visual (para quem hesitou e rolou) ── */}
      <div className="px-4 py-6 max-w-lg mx-auto">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-stone-700/50" />
          <p className="text-stone-500 text-xs uppercase tracking-widest font-semibold whitespace-nowrap">
            Veja o que você vai receber
          </p>
          <div className="h-px flex-1 bg-stone-700/50" />
        </div>
      </div>

      <VideoWall />
      <FoodGallery />

      {/* ── Segundo CTA (scroll-top) ── */}
      <div className="px-4 py-8 max-w-lg mx-auto">
        <div
          className="backdrop-blur-sm rounded-2xl border p-6 text-center space-y-4"
          style={{ backgroundColor: "rgba(28, 25, 23, 0.8)", borderColor: "rgba(212, 160, 74, 0.3)" }}
        >
          <p
            className="text-sm font-semibold uppercase tracking-wider"
            style={{ color: "#E8B84A" }}
          >
            🎉 Preço especial de lançamento
          </p>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-stone-500 line-through text-base">R$299</span>
            <span className="text-3xl font-extrabold" style={{ color: "#E8B84A" }}>R$67</span>
            <span
              className="text-xs font-bold px-2 py-0.5 rounded-full border"
              style={{ color: "#E8B84A", backgroundColor: "rgba(212, 160, 74, 0.15)", borderColor: "rgba(212, 160, 74, 0.3)" }}
            >
              78% OFF
            </span>
          </div>
          <p className="text-stone-500 text-xs">ou 6x de R$12,80 sem juros</p>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="block w-full py-4 text-base font-bold text-white rounded-xl shadow-lg transition-all hover:scale-[1.02]"
            style={{ background: "linear-gradient(135deg, #8B2252, #6B1A3F)" }}
          >
            ↑ Voltar e garantir por R$67
          </a>
          <p className="text-stone-600 text-[10px]">
            Acesso imediato · Garantia de 7 dias · Pagamento seguro via Hotmart
          </p>
        </div>
      </div>
    </div>
  );
}
