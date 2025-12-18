"use client";
import React from "react";
import { FaCheckCircle, FaEnvelope } from "react-icons/fa";

const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F7F2] flex items-center justify-center p-6">
      <div className="bg-white max-w-lg w-full rounded-2xl shadow-xl p-10 text-center border-t-8 border-[#27AE60]">
        
        <FaCheckCircle className="text-[#27AE60] text-7xl mx-auto mb-6" />
        
        <h1 className="text-3xl font-extrabold text-[#4E342E] mb-4">
          Compra Confirmada! 🎉
        </h1>
        
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Parabéns pela decisão! Seus dados de acesso já foram enviados para o seu e-mail.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 text-left flex items-start space-x-3">
          <FaEnvelope className="text-blue-500 text-xl mt-1 shrink-0" />
          <div>
            <h3 className="font-bold text-blue-800 text-sm">O que fazer agora?</h3>
            <p className="text-blue-700 text-sm mt-1">
              Abra seu e-mail e procure por &quot;Hotmart&quot;. Lá está seu link para baixar o Guia de Trufas (e o de Sobremesas, se você adicionou).
            </p>
          </div>
        </div>

        <a 
          href="https://consumer.hotmart.com/" // Link direto para a área de compras do cliente
          className="block w-full bg-[#27AE60] hover:bg-[#219150] text-white font-bold py-4 rounded-xl transition-all shadow-lg uppercase tracking-wide"
        >
          Acessar Meu Conteúdo Agora
        </a>
        
        <p className="text-xs text-gray-400 mt-6">
          Dúvidas? Responda ao e-mail que acabamos de enviar.
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;