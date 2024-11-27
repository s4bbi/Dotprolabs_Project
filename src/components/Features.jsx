import React from "react";
import { features } from "../utils/features.js";

const Features = () => {
  return (
    <div className="bg-bgBlue text-white py-16 px-5">
      <div className="max-w-7xl mx-auto text-left mb-12">
        <h2 className="text-4xl font-nmUB">
          Our <span className="text-yellow-400">Features</span>
        </h2>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-opacity-10 bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-4">
              <div className="text-left">
                <feature.icon className="text-white text-4xl" />
              </div>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm opacity-75">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
