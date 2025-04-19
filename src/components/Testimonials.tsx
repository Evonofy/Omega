import React, { useState } from "react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      text: "Profissional com grande conhecimento técnico e que honra o dia combinado para os serviços. Utilizei para instalação de novos circuitos e solução de problema elétrico. Explicou bem todo o serviço realizado e tirou todas as nossas dúvidas. Super recomendo!",
      author: "James Webb",
      position: "Cliente Residencial",
    },
    {
      id: 2,
      text: "Contratamos a Omega para reforma completa da instalação elétrica de nossa loja. Trabalho impecável, dentro do prazo e com ótimo custo-benefício. Recomendo!",
      author: "Maria Silva",
      position: "Proprietária de Loja",
    },
    {
      id: 3,
      text: "Atendimento rápido e serviço de alta qualidade. Os técnicos são muito profissionais e deixaram tudo funcionando perfeitamente.",
      author: "Carlos Mendes",
      position: "Gerente de Condomínio",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section className="py-16 bg-yellow-400 text-black">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-10 text-center">
          O Que Nossos Clientes Falam De Nós
        </h2>

        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-8 text-lg font-medium italic">
            "{testimonials[currentTestimonial].text}"
          </p>
          <p className="font-bold">{testimonials[currentTestimonial].author}</p>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full ${
                  currentTestimonial === index ? "bg-black" : "bg-gray-400"
                }`}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
