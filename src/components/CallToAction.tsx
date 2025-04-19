import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section id="contato" className="py-16 bg-yellow-400 text-black">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">
          Venha Também Fechar Com A Omega
        </h2>
        <button className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition duration-300">
          Fazer Orçamento
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
