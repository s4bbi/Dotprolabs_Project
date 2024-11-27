import React, { useState } from "react";
import mooner_logo from "../assets/mooner_logo.png";
import mooner_text from "../assets/mooner_text.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-none absolute text-white top-0 left-0 w-full z-50 font-rSB"> 
      <div className="container mx-auto px-4 lg:px-16 py-8 flex items-center justify-between">
        
        <div className="flex items-center">
          <img src={mooner_logo} alt="Moonex Logo" className="w-8 h-8 mr-2" />
          <img src={mooner_text} alt="Moonex Text" className="h-6" />
        </div>

        
        <nav className="hidden md:flex space-x-24">
          {["About Us", "Roadmap", "FAQs", "Contact Us"].map((item) => (
            <a
              key={item}
              href={`#${item.replace(" ", "").toLowerCase()}`}
              className="text-sm font-medium hover:text-yellow-400 transition duration-300 font-rSB"
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          className="hidden md:block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-2 rounded-full font-medium hover:from-yellow-500 hover:to-yellow-600 transition duration-300"
        >
          Connect Wallet
        </button>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-2xl">☰</span>
        </button>
      </div>

      <div
        className={`md:hidden bg-gray-900 text-white overflow-hidden transition-all duration-1000 ease-in-out ${
          isOpen ? "max-h-[300px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col space-y-4 px-4 py-4">
          {["Home", "About Us", "Roadmap", "FAQs", "Contact Us"].map((item) => (
            <a
              key={item}
              href={`#${item.replace(" ", "").toLowerCase()}`}
              className="text-sm font-medium hover:text-yellow-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="px-4 py-2">
          <button
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-2 rounded-lg font-medium hover:from-yellow-500 hover:to-yellow-600 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
