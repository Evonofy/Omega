import React from "react";

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: "Experiência Um",
      description:
        "Contar histórias descrevendo projetos, o olfazer da sua equipe durante cada projeto e a satisfação do cliente final para mostrar experiência e competência.",
    },
    {
      id: 2,
      title: "Experiência Dois",
      description:
        "Nossa história começa quando identificamos que muitas pessoas não conseguiam encontrar profissionais confiáveis para realizar reparos elétricos residenciais com qualidade e orçamentos justos.",
    },
    {
      id: 3,
      title: "Experiência Três",
      description:
        "Hoje, nós expandimos nosso atendimento a todas, não só com um time maior de profissionais, mas também com equipamentos modernos e constantemente atualizados.",
    },
    {
      id: 4,
      title: "Experiência Quatro",
      description:
        "Orgulhosos de fazer do serviço elétrico algo seguro e acessível, a Omega está comprometida em ser sempre sua melhor opção para quaisquer necessidades elétricas. Estamos sempre melhorando nossa comunicação, formação técnica que é um diferencial competitivo e atendimento ao cliente.",
    },
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-12 text-center text-yellow-400">
          NOSSA EXPERIÊNCIA
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {experiences.map((exp) => (
            <div key={exp.id} className="border-l-2 border-yellow-400 pl-4">
              <h3 className="text-lg font-bold mb-3">{exp.title}</h3>
              <p className="text-gray-400">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
