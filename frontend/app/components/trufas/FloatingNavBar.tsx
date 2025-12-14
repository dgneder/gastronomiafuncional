"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSignInAlt } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface FloatingNavBarProps {
  logoSrc: string;
  onLoginClick: () => void;
  handleButtonClick: () => void;
}

const FloatingNavBar: React.FC<FloatingNavBarProps> = ({
  logoSrc,
  onLoginClick,
  handleButtonClick,
}) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-md shadow-md py-3 px-6 lg:px-12 flex items-center justify-between z-50 border-b border-amber-200">
      {/* Logotipo */}
      <div className="flex items-center space-x-3">
        <Link href="/">
          <Image
            src={logoSrc || "/trufas/trufas-logo.jpeg"}
            alt="Logo"
            width={140}
            height={50}
            className="cursor-pointer hover:opacity-90 transition-opacity"
          />
        </Link>
      </div>

      {/* Botões de ação */}
      <div className="flex items-center space-x-3 lg:space-x-6">
        {/* Botão de Login */}
        <button
          onClick={onLoginClick}
          className="flex items-center space-x-2 text-gray-600 font-medium hover:text-amber-600 transition-colors text-sm lg:text-base"
        >
          <FaSignInAlt className="text-lg" />
          <span>Login</span>
        </button>

        {/* Botão de Compra */}
        <button
          onClick={handleButtonClick}
          className="flex items-center space-x-2 px-5 py-2 text-white bg-amber-600 rounded-full hover:bg-amber-500 transition-all transform hover:scale-105 shadow-md text-sm lg:text-base"
        >
          <AiOutlineShoppingCart className="text-lg" />
          <span>Começar Agora</span>
        </button>
      </div>
    </nav>
  );
};

export default FloatingNavBar;