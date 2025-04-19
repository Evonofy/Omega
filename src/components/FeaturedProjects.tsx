import React from "react";
import houseImage from "../assets/house.jpg";
import windowImage from "../assets/window.jpg";
import lampImage from "../assets/lamp.jpg";

const FeaturedProjects: React.FC = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-2">Projetos Privados</h2>
          <h3 className="text-2xl font-bold text-yellow-400">Áreas Internas</h3>
          <p className="text-gray-400">
            Instalações completas para residências e comércios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="overflow-hidden rounded-lg">
            <img
              src={houseImage}
              alt="Casa moderna com iluminação"
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src={windowImage}
              alt="Interior com detalhes elétricos"
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src={lampImage}
              alt="Luminária decorativa instalada"
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
