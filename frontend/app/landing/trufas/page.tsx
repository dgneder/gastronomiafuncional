"use client";

import { FormEvent, useState } from "react";
import { sendLead } from "@/lib/api";

export default function TrufasLandingPage() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [loading, setLoading] = useState(false);
  const [sucesso, setSucesso] = useState<string | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErro(null);
    setSucesso(null);

    try {
      await sendLead({
        name: nome,
        email,
        source: "landing-trufas",
        product: "trufas-funcionais",
      });
      setSucesso("Prontinho! Te enviei o acesso no e-mail. 💌");
      setEmail("");
      setNome("");
    } catch (err) {
      console.error(err);
      setErro("Ops! Algo deu errado. Tenta de novo em instantes.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 text-slate-900">
      {/* HERO */}
      <section className="px-4 py-10 md:py-16 max-w-5xl mx-auto">
        <header className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-700 mb-2">
            gastronomia funcional • infoproduto
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Trufas & Docinhos Funcionais Premium
          </h1>
          <p className="text-base md:text-lg text-slate-700 max-w-2xl mx-auto">
            Receitas low carb, sem açúcar refinado e 100% funcionais, pensadas
            para vender, encantar e ainda cuidar da saúde de quem consome.
          </p>
        </header>

        <div className="grid md:grid-cols-[3fr,2fr] gap-8 items-center">
          {/* COPY PRINCIPAL */}
          <div className="space-y-4">
            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex gap-2">
                <span className="mt-1 text-amber-700">✔</span>
                <span>
                  Receitas testadas para alta taxa de acerto, mesmo para
                  iniciantes na cozinha.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 text-amber-700">✔</span>
                <span>
                  Foco em textura, cremosidade e apresentação visual
                  instagramável.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 text-amber-700">✔</span>
                <span>
                  Perfeito para montar um cardápio funcional, aumentar ticket
                  médio e atrair clientes que fogem do açúcar refinado.
                </span>
              </li>
            </ul>

            <div className="rounded-2xl border border-amber-200 bg-white/70 p-4 text-xs md:text-sm">
              <p className="font-semibold text-amber-800 mb-1">
                Oferta de lançamento:
              </p>
              <p>
                Acesso imediato ao e-book + atualizações futuras. Ideal para
                confeiteiros funcionais, nutricionistas, criadores de conteúdo e
                apaixonados por doces mais inteligentes.
              </p>
            </div>
          </div>

          {/* CARD DE CAPTURA */}
          <div className="bg-white shadow-xl rounded-2xl p-6 border border-amber-100">
            <h2 className="text-lg font-semibold mb-2">
              Quer receber os detalhes e o link especial de lançamento?
            </h2>
            <p className="text-xs text-slate-600 mb-4">
              Deixa seu e-mail aqui embaixo e eu te envio tudo direto na caixa
              de entrada. Sem spam, só conteúdo funcional de verdade.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  placeholder="Como quer ser chamado(a)?"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  placeholder="seuemail@exemplo.com"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-amber-600 hover:bg-amber-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm py-2.5 mt-2 transition"
              >
                {loading ? "Enviando..." : "Quero receber o acesso 🔥"}
              </button>
            </form>

            {sucesso && (
              <p className="mt-3 text-xs text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-2">
                {sucesso}
              </p>
            )}

            {erro && (
              <p className="mt-3 text-xs text-red-700 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                {erro}
              </p>
            )}

            <p className="mt-3 text-[10px] text-slate-500">
              Ao enviar seus dados, você concorda em receber conteúdos e ofertas
              relacionados à gastronomia funcional. Você pode se descadastrar a
              qualquer momento.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
