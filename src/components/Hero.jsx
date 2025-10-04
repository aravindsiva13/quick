

import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Top Right Ellipse Glow - Using solid color with blur like Footer */}
      <div 
        className="absolute pointer-events-none"
        style={{
          right: '-900px',
          top: '-900px',
          width: '1400px',
          height: '1400px',
          background: '#06B6D4',
          borderRadius: '50%',
          filter: 'blur(150px)',
          opacity: 0.6
        }}
      ></div>

      {/* Glow Ray 1 - Top Right */}
      <div 
        className="absolute pointer-events-none"
        style={{
          right: '-200px',
          top: '-100px',
          width: '800px',
          height: '3px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(6, 182, 212, 0.6) 20%, rgba(6, 182, 212, 0.8) 50%, rgba(6, 182, 212, 0.6) 80%, transparent 100%)',
          transform: 'rotate(-25deg)',
          filter: 'blur(8px)',
          opacity: 0.7
        }}
      ></div>

      {/* Glow Ray 2 - Top Right (Middle) */}
      <div 
        className="absolute pointer-events-none"
        style={{
          right: '-250px',
          top: '50px',
          width: '900px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(6, 182, 212, 0.5) 20%, rgba(6, 182, 212, 0.7) 50%, rgba(6, 182, 212, 0.5) 80%, transparent 100%)',
          transform: 'rotate(-20deg)',
          filter: 'blur(10px)',
          opacity: 0.6
        }}
      ></div>

      {/* Glow Ray 3 - Top Right (Lower) */}
      <div 
        className="absolute pointer-events-none"
        style={{
          right: '-300px',
          top: '200px',
          width: '1000px',
          height: '2.5px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(6, 182, 212, 0.4) 20%, rgba(6, 182, 212, 0.6) 50%, rgba(6, 182, 212, 0.4) 80%, transparent 100%)',
          transform: 'rotate(-15deg)',
          filter: 'blur(12px)',
          opacity: 0.5
        }}
      ></div>

      {/* Small Accent Glow */}
      <div 
        className="absolute pointer-events-none"
        style={{
          right: '100px',
          top: '100px',
          width: '80px',
          height: '80px',
          background: '#06B6D4',
          borderRadius: '50%',
          filter: 'blur(40px)',
          opacity: 0.8
        }}
      ></div>

      {/* Noise Overlay - Covers the glow area */}
      <div 
        className="absolute pointer-events-none"
        style={{
          right: '-1000px',
          top: '-100px',
          width: '1992px',
          height: '1288px',
          backgroundImage: 'url(/images/noise.svg)',
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
          opacity: 58,
          mixBlendMode: 'overlay'
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-overlay pointer-events-none"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo - Size from Figma: 726×105 */}
        <div 
          className="flex items-center justify-center"
          style={{
            width: '726px',
            height: '105px',
            maxWidth: '100%',
            margin: '0 auto 60px'
          }}
        >
          <img 
            src="/images/logo.svg" 
            alt="Heyareweare Technologies"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Tagline - Size from Figma: 728×27 */}
        <h2 
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '28px',
            lineHeight: '27px',
            letterSpacing: '0.13em',
            width: '728px',
            maxWidth: '100%',
            margin: '0 auto 60px'
          }}
        >
          SEE THE WORLD IN A WHOLE NEW WAY
        </h2>

        {/* CTA Button - Size from Figma: 230×54 */}
        <button 
          className="bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-all"
          style={{
            width: '230px',
            height: '54px',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '16px',
            borderRadius: '100px'
          }}
        >
          Let's Connect
        </button>
      </div>
    </section>
  );
};

export default Hero;


