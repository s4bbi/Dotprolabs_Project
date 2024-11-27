import React from "react";
import mooner_logo from "../assets/mooner_logo.png";
import mooner_text from "../assets/mooner_text.png";
import { FaTelegramPlane, FaRedditAlien, FaTwitter } from "react-icons/fa"; // Import icons

const Footer = () => {
  return (
    <footer className="bg-bgBlue text-white py-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 sm:px-8">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <img src={mooner_logo} alt="Moonex" className="h-8" />
            <img src={mooner_text} alt="Moonex text" className="h-8" />
          </div>
          
        </div>

        <div>
            <nav className="hidden sm:flex space-x-8 font-rSB">
                <a href="#about" className="hover:text-yellow-400">About Us</a>
                <a href="#roadmap" className="hover:text-yellow-400">Roadmap</a>
                <a href="#faqs" className="hover:text-yellow-400">FAQs</a>
                <a href="#contact" className="hover:text-yellow-400">Contact Us</a>
            </nav>
        </div>

        <div className="flex items-center space-x-4">
          <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
            <FaTelegramPlane size={24} />
          </a>
          <a href="https://reddit.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
            <FaRedditAlien size={24} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
      <div className="sm:hidden mt-4 text-center font-rSB">
        <nav className="space-y-4">
          <a href="#about" className="block hover:text-yellow-400">About Us</a>
          <a href="#roadmap" className="block hover:text-yellow-400">Roadmap</a>
          <a href="#faqs" className="block hover:text-yellow-400">FAQs</a>
          <a href="#contact" className="block hover:text-yellow-400">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
