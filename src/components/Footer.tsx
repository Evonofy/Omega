import React from "react";
import LogoFooter from "../assets/logo-footer.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <img src={LogoFooter} alt="Omega Logo" className="h-8" />
        </div>

        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gray-400 hover:text-yellow-400"
            aria-label="Facebook"
          >
            <div className="bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center">
              <span>f</span>
            </div>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-yellow-400"
            aria-label="Instagram"
          >
            <div className="bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center">
              <span>i</span>
            </div>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-yellow-400"
            aria-label="Twitter"
          >
            <div className="bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center">
              <span>t</span>
            </div>
          </a>
        </div>

        <div className="mt-6 md:mt-0 text-sm text-gray-400">
          © 2025 OMEGA. PRODUZIDO POR
        </div>
      </div>
    </footer>
  );
};

export default Footer;
