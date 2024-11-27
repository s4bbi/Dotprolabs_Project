import './index.css';
import React from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Features from './components/Features.jsx';
import Accordion from './components/Accordion.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div>
      <Hero />
      <About /> 
      <Features />
      <Accordion /> 
      <Footer />
    </div>
  );
};

export default App;
