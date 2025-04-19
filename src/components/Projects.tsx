import React from "react";
import streetImage from "../assets/street.jpg";
import gasStationImage from "../assets/gas-station.jpg";
import streetLampImage from "../assets/street-lamp.jpg";

const Projects: React.FC = () => {
  return (
    <section id="projetos" className="py-16 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-2">Nossos Projetos</h2>
          <h3 className="text-xl font-bold text-yellow-400">Vias Públicas</h3>
          <p className="text-gray-400">Iluminação para ruas e avenidas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="overflow-hidden rounded-lg">
            <img
              src={streetImage}
              alt="Rua iluminada à noite"
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src={gasStationImage}
              alt="Posto de gasolina iluminado"
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src={streetLampImage}
              alt="Detalhe de poste decorativo"
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
