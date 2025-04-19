import React from 'react';
import electricianImage from '../assets/electrician.jpg';

const Hero: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 flex flex-col md:flex-row items-center">
      <div className="container mx-auto px-6 md:flex">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Soluções De </span>
            <span className="text-yellow-400">Serviços Elétricos</span>
            <span className="text-white"> Para Sua</span><br />
            <span className="text-white">Residência Ou Comércio</span>
          </h1>
          <p className="mb-6 text-gray-300">
            Conte conosco para serviços elétricos profissionais, atendendo com precisão 
            e segurança. Equipe qualificada e equipamentos modernos para 
            atender todas as suas necessidades elétricas.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-md font-medium">
            Solicite Orçamento Grátis
          </button>
          
          <div className="flex mt-8 space-x-6">
            <div className="flex items-center">
              <div className="bg-yellow-400 rounded-full p-2 mr-2">
                <span className="text-black font-bold">24h</span>
              </div>
              <span>Atendimento 24h</span>
            </div>
            <div className="flex items-center">
              <div className="bg-yellow-400 rounded-full p-2 mr-2">
                <span className="text-black font-bold">✓</span>
              </div>
              <span>Certificação Isea</span>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2">
          <img 
            src={electricianImage} 
            alt="Eletricista trabalhando em um quadro elétrico" 
            className="rounded-lg w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
