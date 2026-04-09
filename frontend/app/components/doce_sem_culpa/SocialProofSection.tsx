"use client";
import React from "react";
import { FaUsers, FaStar, FaBookOpen, FaShieldAlt } from "react-icons/fa";

const stats = [
  { icon: FaStar,      value: "4.9",   label: "Avaliação média",        suffix: "/5" },
  { icon: FaUsers,     value: "2.000+",label: "Clientes satisfeitos",   suffix: ""   },
  { icon: FaBookOpen,  value: "+500",  label: "Receitas funcionais",    suffix: ""   },
  { icon: FaShieldAlt, value: "3",     label: "Volumes completos",      suffix: ""   },
];

const testimonials = [
  { name: "Juliana M.", location: "São Paulo, SP", text: "Nunca imaginei que sobremesa funcional pudesse ser tão boa. Fiz o brownie de grão-de-bico e minha família inteira pediu a receita. Ninguém acreditou que era saudável.", recipe: "Volume 1 — Brownie Funcional", rating: 5 },
  { name: "Carla R.", location: "Fortaleza, CE", text: "Tenho diabetes tipo 2 e sempre me senti de fora quando o assunto era sobremesa. Com este guia encontrei receitas que posso comer sem culpa e com segurança.", recipe: "Volume 2 — Mousse Funcional", rating: 5 },
  { name: "Renata P.", location: "Curitiba, PR", text: "A base científica em cada receita mudou minha relação com a cozinha. Agora entendo o porquê de cada substituição e consigo criar minhas próprias variações.", recipe: "Cap. 2 — Substitutos", rating: 5 },
  { name: "Ana Lima", location: "BH, MG", text: "As trufas funcionais foram um sucesso na minha confeitaria! Já vendo as receitas do Volume 3 e o retorno dos clientes é incrível. Vale muito pelo preço.", recipe: "Volume 3 — Trufas", rating: 5 },
];

const SocialProofSection: React.FC = () => (
  <section className="py-20 px-6 lg:px-12" style={{ background: "linear-gradient(180deg, #FFF0F5, #FCEEF4)" }} data-aos="fade-up">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {stats.map((stat, i) => (
          <div key={i} className="text-center bg-white rounded-xl p-6 shadow-sm border border-rose-100" data-aos="zoom-in" data-aos-delay={i * 100}>
            <stat.icon className="text-2xl mx-auto mb-3" style={{ color: "#D4A04A" }} />
            <p className="text-3xl font-extrabold text-gray-800">{stat.value}<span className="text-lg text-gray-400">{stat.suffix}</span></p>
            <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="text-center mb-10">
        <p className="text-sm uppercase tracking-widest font-semibold mb-3" style={{ color: "#8B2252" }}>Quem já está fazendo sobremesas funcionais</p>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">Histórias reais de mesas transformadas</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white rounded-2xl p-7 shadow-sm border border-rose-100 hover:shadow-md transition-shadow" data-aos="fade-up" data-aos-delay={i * 80}>
            <div className="flex gap-1 mb-4">{[...Array(t.rating)].map((_, j) => <FaStar key={j} className="text-amber-400 text-sm" />)}</div>
            <p className="text-gray-600 leading-relaxed mb-5 italic text-[15px]">&ldquo;{t.text}&rdquo;</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-gray-800 text-sm">{t.name}</p>
                <p className="text-xs text-gray-400">{t.location}</p>
              </div>
              <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: "#FCEEF4", color: "#8B2252" }}>{t.recipe}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofSection;
