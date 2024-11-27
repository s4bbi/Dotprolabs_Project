import React from "react";
import mooner_logo from "../assets/mooner_logo.png";
import mooner_text from "../assets/mooner_text.png";
import uniswap_logo from "../assets/uniswap_logo.png";
import { FaCheck, FaTimes } from "react-icons/fa";
import glow3 from "../assets/ellipse10.png";
import glow4 from "../assets/ellipse11.png";
import Features from "./Features.jsx";

const ComparisonTable = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat min-h-screen bg-bgBlue flex items-center justify-center">
      <div>
        <img
          src={glow4}
          alt="Glow Sphere 1"
          className="absolute top-0 left-0 z-0 opacity-20"
        />
        <img
          src={glow3}
          alt="Glow Sphere 2"
          className="absolute bottom-[10%] right-0 z-0 opacity-20"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl">
        <div className="font-nmUB text-left">
          <h2 className="text-4xl font-bold text-white mb-8 pl-5">
            Why <span className="text-yellow-400">MoonEX </span>?
          </h2>
        </div>

        <div className="bg-white bg-opacity-5 backdrop-blur-md py-6 px-2 md:p-8 rounded-xl w-full">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="text-yellow-400 text-xl py-3 font-cSB pl-5">
                  Comparison
                </th>
                <th className="text-center py-3 border-l border-gray-600">
                  <div className="flex flex-col items-center gap-2">
                    <span className="flex gap-2">
                      <img
                        src={mooner_logo}
                        alt="MoonEX Logo"
                        className="h-8"
                      />
                      <img
                        src={mooner_text}
                        alt="MoonEX Text"
                        className="h-6 hidden md:flex"
                      />
                    </span>
                  </div>
                </th>
                <th className="text-center py-3 border-l border-gray-600">
                  <div className="flex flex-col items-center gap-2">
                    <img
                      src={uniswap_logo}
                      alt="Uniswap Logo"
                      className="h-8"
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="text-white font-nmR">
              {[
                "Point no one",
                "Point no two this",
                "Point no three this",
                "Point no four this",
                "Point no five this",
              ].map((point, index) => (
                <tr key={index} className="border-b border-gray-600 ">
                  <td className="py-5 opacity-50 pl-5">
                    {index + 1}. {point}
                  </td>
                  <td className="py-5 text-center border-l border-gray-600">
                    <FaCheck className="text-green-400 text-xl mx-auto" />
                  </td>
                  <td className="py-5 text-center border-l border-gray-600">
                    <FaTimes className="text-red-500 text-xl mx-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>


  );
};

export default ComparisonTable;
