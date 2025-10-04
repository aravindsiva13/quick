import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Clients from './components/Clients';
import Portfolio from './components/Portfolio';
import ComingSoon from './components/ComingSoon';
import Footer from './components/Footer';
import Services from './components/Services';

function App() {
  return (
    <div className="gradient-bg min-h-screen">
      <Hero />
      <About />
      <Services />
      <Clients />
      <Portfolio />
      <ComingSoon />
      <Footer />
    </div>
  );
}

export default App;