import React from "react";
import electricianWorking from "../assets/electrician-working.jpg";

const AboutUs: React.FC = () => {
  return (
    <section id="sobre" className="py-16 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-lg font-bold mb-4 text-yellow-400">SOBRE NÓS</h2>
        <h3 className="text-2xl font-bold mb-8">Conheça a Omega</h3>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <p className="mb-4 text-gray-300">
              A Omega é uma empresa especializada em serviços e instalações
              elétricas, dedicada a fornecer soluções personalizadas para suas
              necessidades. Nossa equipe é formada por profissionais com vasta
              experiência no setor elétrico.
            </p>
            <p className="mb-4 text-gray-300">
              Somos guiados pela excelência e integridade, garantindo a
              segurança e confiabilidade de todos os nossos projetos. Utilizamos
              técnicas modernas e equipamentos de ponta, assegurando um serviço
              de qualidade superior que atende às normas e especificações
              técnicas.
            </p>
          </div>

          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <img
              src={electricianWorking}
              alt="Técnico da Omega trabalhando"
              className="rounded-lg w-full h-auto col-span-2"
            />
            <div className="bg-yellow-400 text-black p-6 rounded-lg flex items-center justify-center">
              <p className="font-bold text-center">Compromisso com segurança</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg flex items-center justify-center">
              <p className="text-center">Equipe certificada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
