import React from "react";
import team1Image from "../assets/team1.jpg";
import team2Image from "../assets/team2.jpg";
import team3Image from "../assets/team3.jpg";

const Team: React.FC = () => {
  const team = [
    {
      id: 1,
      name: "Tadeu",
      position: "Engenheiro Sênior",
      image: team1Image,
    },
    {
      id: 2,
      name: "Ricardo",
      position: "Chefe De Operações",
      image: team2Image,
    },
    {
      id: 3,
      name: "Miguelângelo",
      position: "Diretor Técnico",
      image: team3Image,
    },
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-12 text-center">Nosso Time</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <div className="overflow-hidden rounded-lg mb-4 w-56 h-56">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-gray-400">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
