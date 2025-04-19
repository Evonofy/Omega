import React from "react";

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-10 text-center">
          Somos A Empresa Certa Para Seu Projeto
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-lg p-8 text-center">
            <h3 className="text-3xl font-bold text-yellow-400 mb-2">37+</h3>
            <p className="text-gray-400">Clientes atendidos em São Paulo</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-8 text-center">
            <h3 className="text-3xl font-bold text-yellow-400 mb-2">75+</h3>
            <p className="text-gray-400">
              Serviços diferentes feitos para nossos clientes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
