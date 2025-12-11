"use client";

import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="bg-gray-50 text-gray-800 py-12 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-green-600 mb-6">
          Política de Privacidade
        </h1>
        <p className="mb-4 text-gray-700">
          A sua privacidade é importante para nós. Esta Política de Privacidade descreve como coletamos, usamos e protegemos as informações fornecidas por você ao usar nosso site e serviços.
        </p>

        {/* Coleta de Dados */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-500 mb-4">
            1. Informações que Coletamos
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Informações fornecidas diretamente por você, como nome, e-mail e telefone.</li>
            <li>Dados de navegação, como endereço IP, localização geográfica, tipo de dispositivo e comportamento no site.</li>
            <li>Cookies e tecnologias semelhantes para personalizar sua experiência.</li>
          </ul>
        </section>

        {/* Uso das Informações */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-500 mb-4">
            2. Como Usamos suas Informações
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Para fornecer e personalizar nossos serviços.</li>
            <li>Para enviar comunicações importantes, como promoções, atualizações e ofertas.</li>
            <li>Para análise de dados e melhorias no site e nos serviços oferecidos.</li>
            <li>Para cumprir com obrigações legais e regulatórias.</li>
          </ul>
        </section>

        {/* Compartilhamento de Dados */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-500 mb-4">
            3. Compartilhamento de Informações
          </h2>
          <p className="text-gray-700">
            Não compartilhamos suas informações pessoais com terceiros, exceto:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Quando necessário para o funcionamento do serviço, como processadores de pagamento.</li>
            <li>Para cumprimento de obrigações legais ou solicitações de autoridades.</li>
            <li>Com parceiros confiáveis para melhorar nossos serviços, garantindo a segurança dos dados.</li>
          </ul>
        </section>

        {/* Segurança */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-500 mb-4">
            4. Segurança dos Dados
          </h2>
          <p className="text-gray-700">
            Adotamos medidas técnicas e organizacionais para proteger suas informações contra acessos não autorizados, alterações, divulgações ou destruições.
          </p>
        </section>

        {/* Cookies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-500 mb-4">
            5. Cookies e Tecnologias Semelhantes
          </h2>
          <p className="text-gray-700">
            Utilizamos cookies para melhorar sua experiência de navegação. Você pode configurar seu navegador para recusar ou aceitar cookies, mas algumas partes do site podem não funcionar corretamente.
          </p>
        </section>

        {/* Seus Direitos */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-500 mb-4">
            6. Seus Direitos
          </h2>
          <p className="text-gray-700">
            De acordo com a LGPD, você tem os seguintes direitos:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Confirmar a existência de tratamento de dados.</li>
            <li>Acessar suas informações pessoais.</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
            <li>Solicitar a exclusão de dados pessoais.</li>
            <li>Solicitar a portabilidade dos dados para outro fornecedor de serviços.</li>
          </ul>
        </section>

        {/* Contato */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-500 mb-4">
            7. Como Entrar em Contato
          </h2>
          <p className="text-gray-700">
            Caso tenha dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus dados pessoais, entre em contato conosco:
          </p>
          <p className="mt-4">
            <strong>Email:</strong> <a href="mailto:contato@seusite.com" className="text-green-500 hover:underline">contato@seusite.com</a>
          </p>
          <p>
            <strong>WhatsApp:</strong> <a href="https://wa.me/5583981374367" className="text-green-500 hover:underline">(83) 98137-4367</a>
          </p>
        </section>

        {/* Atualizações da Política */}
        <section>
          <h2 className="text-2xl font-semibold text-green-500 mb-4">
            8. Atualizações desta Política
          </h2>
          <p className="text-gray-700">
            Esta Política de Privacidade pode ser atualizada periodicamente para refletir alterações na legislação ou em nossos serviços. Recomendamos revisar esta página regularmente.
          </p>
        </section>

        {/* Última Atualização */}
        <p className="text-sm text-gray-500 mt-10">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
