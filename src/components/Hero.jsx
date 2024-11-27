import React from "react";
import star1 from "../assets/star-img.png";
import star2 from "../assets/star-img-1.png";
import star3 from "../assets/star-img-2.png";
import circles from "../assets/circles.png";
import glow1 from "../assets/Ellipse12.png";
import glow2 from "../assets/Ellipse14.png";
import hero_sphere from "../assets/hero_sphere.png";
import Navbar from "./Navbar.jsx";

const Hero = () => {
  return (
    <div>
      <Navbar />

      <section className="relative bg-bgBlue text-white overflow-hidden h-screen">
        <img
          src={star1}
          alt="Star 1"
          className="absolute top-40 left-40 w-8 h-8 lg:w-16 lg:h-16"
        />
        <img
          src={star2}
          alt="Star 2"
          className="absolute bottom-16 right-20 w-10 h-10"
        />
        <img
          src={star3}
          alt="Star 3"
          className="absolute top-10 right-32 w-6 h-6 animate-fade"
        />

        <div
          className="absolute inset-0 flex justify-center items-center pointer-events-none"
          style={{
            zIndex: 0,
            overflow: "hidden",
          }}
        >
          <img
            src={circles}
            alt="Orbit"
            className="w-full h-full object-cover sm:block"
            style={{
              position: "absolute",
            }}
          />
        </div>

        <div>
          <img
            src={glow1}
            alt="Glow Sphere 1"
            className="absolute top-0 left-0 z-0 opacity-40"
          />
          <img
            src={glow2}
            alt="Glow Sphere 2"
            className="absolute bottom-[-50%] right-0 z-0 opacity-40"
          />
        </div>

        <div className="relative flex items-center justify-center h-full z-10 mx-5 sm:mx-10 lg:mx-20">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 text-center lg:text-left">
            <div className="lg:pt-20 flex flex-col justify-center items-center sm:items-start">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-nmUB leading-tight">
                Trusted Multi-Chain <span className="text-yellow-400">DEX</span>{" "}
                Platform
              </h1>
              <p className="mt-4 text-lg sm:text-xl md:text-2xl font-nmR text-white opacity-75">
                Trade, earn, and own crypto on the all-in-one multi-chain DEX
              </p>
              <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 font-rSB">
                <button className="px-6 py-3 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition duration-300 w-full sm:w-auto">
                  Connect Wallet
                </button>
                <button className="px-6 py-3 border-2 border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition duration-300 w-full sm:w-auto">
                  Trade Crypto
                </button>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
              <img
                src={hero_sphere}
                alt="Yellow Planet"
                className="hidden sm:block w-48 md:w-64 lg:w-80 drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
