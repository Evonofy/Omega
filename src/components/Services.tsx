import React from 'react';
import projectsImage from '../assets/projects.jpg';
import installationImage from '../assets/installation.jpg';
import reconstructionImage from '../assets/reconstruction.jpg';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Projetos",
      image: projectsImage,
      description: "Desde os serviços mais básicos até projetos complexos, nossos engenheiros e técnicos estão preparados para atender suas necessidades."
    },
    {
      id: 2,
      title: "Instalações",
      image: installationImage,
      description: "Realizamos novas instalações elétricas, com qualidade de execução e materiais, sempre em conformidade com normas técnicas."
    },
    {
      id: 3,
      title: "Reconstruções",
      image: reconstructionImage,
      description: "Especialistas em reformas e adequações de suas instalações elétricas, trazendo modernidade e eficiência ao seu sistema."
    }
  ];

  return (
    <section id="servicos" className="py-16 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-12 text-center text-white">Nossos Serviços</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
