import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import {faqs} from '../utils/faqs.js';
import glow5 from "../assets/ellipse08.png";
import glow6 from "../assets/ellipse07.png";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };  

  return (
    <div className="bg-bgBlue text-white py-16 px-5">


      <div className="max-w-7xl mx-auto text-center mb-12">
        <div>
            <img
            src={glow5}
            alt="Glow Sphere 1"
            className="absolute top-100 left-0 z-0 opacity-20"
            />
            <img
            src={glow6}
            alt="Glow Sphere 2"
            className="absolute top-100 right-0 z-0 opacity-20"
            />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold">
          FAQ <span className="text-yellow-400">s</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-opacity-10 bg-white rounded-lg shadow-md font-rR"
          >
            <div
              className="flex justify-between items-center px-5 py-4 cursor-pointer transition-all duration-300 ease-in-out hover:bg-opacity-20 font-rR"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-lg font-semibold text-center flex-grow">
                {faq.question}
              </h3>
              <div className="text-xl text-white">
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </div>
            </div>

            <div
              className={`overflow-hidden px-5 py-4 text-sm transition-all duration-500 ease-in-out ${
                activeIndex === index
                  ? 'max-h-[300px] opacity-100' 
                  : 'max-h-0 opacity-0'
              }`}
            >
              <p className='text-center opacity-75'>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
