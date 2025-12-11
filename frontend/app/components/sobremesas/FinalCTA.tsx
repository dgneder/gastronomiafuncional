"use client";

import React, { useEffect, useState } from "react";

interface FinalCTAProps {
  buttonText: string;
  onButtonClick: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ buttonText, onButtonClick }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [unitsLeft, setUnitsLeft] = useState(37);
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 1);
    setFormattedDate(
      deadline.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    );

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    const stockInterval = setInterval(() => {
      setUnitsLeft((prev) => (prev > 1 ? prev - 1 : prev));
    }, 60000);

    return () => {
      clearInterval(interval);
      clearInterval(stockInterval);
    };
  }, []);

  return (
    <section
      id="finalcta"
      data-aos="fade-up"
      className="py-20 px-6 lg:px-12 bg-gradient-to-r from-rose-100 via-pink-100 to-white text-center"
    >
      <div className="max-w-3xl mx-auto">
        {/* Título */}
        <h2 className="text-3xl lg:text-4xl font-bold text-pink-700 mb-4">
          Última Oportunidade para Adoçar Sua Vida com Saúde!
        </h2>

        {/* Preço */}
        <p className="text-2xl font-bold text-pink-600 mb-1">
          De <span className="line-through text-red-500">R$97</span> por apenas{" "}
          <span className="text-pink-700">R$37</span>
        </p>
        <p className="text-sm text-gray-600">Desconto exclusivo disponível por tempo limitado!</p>

        {/* Descrição */}
        <p className="text-gray-700 text-lg my-6 leading-relaxed">
          Adquira agora o <span className="font-semibold">Guia de Sobremesas Funcionais</span> com receitas que unem sabor e bem-estar. São dezenas de opções para sua rotina — doces leves, práticas e cheias de benefícios.
        </p>

        {/* Botão CTA */}
        <button
          onClick={onButtonClick}
          className="mt-6 px-10 py-4 text-xl font-semibold text-white bg-pink-500 rounded-full shadow-lg hover:bg-pink-400 transition-all transform hover:scale-105"
        >
          {buttonText}
        </button>

        {/* Urgência */}
        <p className="text-gray-600 text-sm mt-4">
          Oferta válida até: <strong className="text-pink-700">{formattedDate}</strong>
        </p>
        <p className="text-red-500 font-semibold text-lg mt-2">
          Restam apenas <span className="text-pink-700">{unitsLeft} unidades</span> com desconto!
        </p>

        {/* Cronômetro */}
        <div className="mt-8 flex justify-center items-center space-x-4 text-gray-700 text-lg font-semibold">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <p className="text-pink-700 text-2xl font-bold">{timeLeft.days}</p>
            <span className="text-sm">Dias</span>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <p className="text-pink-700 text-2xl font-bold">{timeLeft.hours}</p>
            <span className="text-sm">Horas</span>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <p className="text-pink-700 text-2xl font-bold">{timeLeft.minutes}</p>
            <span className="text-sm">Minutos</span>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <p className="text-pink-700 text-2xl font-bold">{timeLeft.seconds}</p>
            <span className="text-sm">Segundos</span>
          </div>
        </div>

        {/* Garantia */}
        <div className="mt-8">
          <p className="text-gray-700 text-sm">
            <strong className="text-pink-700">Garantia incondicional:</strong> experimente por 7 dias e, se não amar, devolvemos seu dinheiro.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Pagamento 100% seguro com criptografia de ponta.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
