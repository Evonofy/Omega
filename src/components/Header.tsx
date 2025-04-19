import React, { useState } from 'react';
import Logo from '../assets/logo.svg';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white py-4 px-6 flex justify-between items-center">
      <div className="logo">
        <img src={Logo} alt="Omega Logo" className="h-8" />
      </div>
      
      <nav className="hidden md:flex space-x-6">
        <a href="#servicos" className="hover:text-yellow-400">Serviços</a>
        <a href="#projetos" className="hover:text-yellow-400">Projetos</a>
        <a href="#sobre" className="hover:text-yellow-400">Sobre</a>
        <a href="#contato" className="hover:text-yellow-400">Contato</a>
      </nav>
      
      <button className="hidden md:block bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded">
        Fale Conosco
      </button>
      
      <button 
        className="md:hidden text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </button>
      
      {isMobileMenuOpen && (
        <div className="absolute top-16 right-0 left-0 bg-black p-4 z-10 md:hidden">
          <nav className="flex flex-col space-y-4">
            <a href="#servicos" className="hover:text-yellow-400">Serviços</a>
            <a href="#projetos" className="hover:text-yellow-400">Projetos</a>
            <a href="#sobre" className="hover:text-yellow-400">Sobre</a>
            <a href="#contato" className="hover:text-yellow-400">Contato</a>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded">
              Fale Conosco
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
