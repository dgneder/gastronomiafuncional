'use client';

import Script from 'next/script';

// 1. Definimos a "forma" do objeto da Hotmart para o TypeScript entender
interface HotmartCheckoutElements {
  init: (mode: string) => {
    mount: (selector: string) => void;
  };
}

// 2. Ensinamos ao TypeScript que essa variável existe no objeto global 'window'
declare global {
  interface Window {
    checkoutElements?: HotmartCheckoutElements;
  }
}

export default function HotmartUpsellWidget() {
  return (
    <div className="w-full flex justify-center my-8 px-4">
      {/* Container onde a Hotmart injeta os botões */}
      <div id="hotmart-sales-funnel" className="w-full max-w-md"></div>

      {/* Script de Inicialização */}
      <Script
        src="https://checkout.hotmart.com/lib/hotmart-checkout-elements.js"
        strategy="lazyOnload"
        onLoad={() => {
          try {
            // Agora acessamos via 'window' de forma segura e tipada
            if (window.checkoutElements) {
              window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
              console.log("Widget Hotmart Carregado com Sucesso");
            } else {
              console.warn("Script Hotmart carregou, mas checkoutElements não foi encontrado.");
            }
          } catch (e) {
            console.error("Erro ao montar Widget Hotmart:", e);
          }
        }}
      />
    </div>
  );
}