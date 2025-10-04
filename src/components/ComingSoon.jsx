


import React from 'react';

const ComingSoon = () => {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden">
      {/* Main Glow Container */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] pointer-events-none">
        
        {/* Large Teal Ellipse - Mostly Hidden Above-hAs */}
        <div 
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            top: '-768px',
            width: '1621px',
            height: '833px',
            background: '#009999',
            borderRadius: '50%',
            filter: 'blur(80px)',
            opacity: 1
          }}
        ></div>
        
        {/* White Ellipse Core - Bright Center */}
        <div 
          className="absolute top-[-54px] left-1/2 -translate-x-1/2"
          style={{
            width: '571px',
            height: '68px',
            background: '#FFFFFF',
            borderRadius: '50%',
            filter: 'blur(60px)',
            mixBlendMode: 'plus-lighter',
            opacity: 1
          }}
        ></div>
        
        {/* Additional Cyan Gradient for depth */}
        <div className="absolute inset-0 bg-gradient-radial from-cyan-400/20 via-transparent to-transparent blur-[80px]"></div>
      </div>
      
    
      {/* Noise Overlay */}
      <div 
        className="absolute pointer-events-none"
        style={{
          left: '50%',
          top: '0px',
          transform: 'translateX(-50%)',
          width: '1992px',
          height: '1524px',
          backgroundImage: 'url(/images/noise.svg)',
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
          opacity: 58,
          mixBlendMode: 'soft-light'
        }}
      ></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
        {/* Coming Soon Badge */}
        <div className="mb-12 flex justify-center">
          <span 
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '30px',
              fontWeight: '400',
              lineHeight: '48px',
              letterSpacing: '0.13em',
              color: 'rgba(219, 249, 254, 1)',
              textAlign: 'center'
            }}
          >
            Coming Soon!
          </span>
        </div>

        {/* Main Heading */}
        <h2 
          className="mb-14"
          style={{ 
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '60px',
            fontWeight: '400',
            lineHeight: '72px',
            letterSpacing: '0.08em'
          }}
        >
          The Future is Loading
        </h2>

        {/* Description */}
        <div className="flex justify-center mb-20">
          <p 
            className="text-gray-300"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '26px',
              fontWeight: '400',
              lineHeight: '42px',
              letterSpacing: '0.13em',
              maxWidth: '968px',
              textAlign: 'center'
            }}
          >
            An intelligent and immersive digital experience in AI+XR is on its way built on enterprise reliability
          </p>
        </div>

        {/* Features and CTA - Increased Spacing */}
        <div className="flex flex-col items-center justify-center gap-16">
          {/* Features Box with Blurred Background Inside */}
          <div 
            className="relative flex items-center justify-center gap-4"
            style={{
              width: '490px',
              height: '78px',
              borderRadius: '38px',
              border: '0.6px solid rgba(6, 182, 212, 0.8)',
              background: 'rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '20px',
              fontWeight: '400'
            }}
          >
            <span>Smarter</span>
            <span style={{ color: 'rgba(6, 182, 212, 1)', fontSize: '12px' }}>•</span>
            <span>Immersive</span>
            <span style={{ color: 'rgba(6, 182, 212, 1)', fontSize: '12px' }}>•</span>
            <span>Future Ready</span>
          </div>

          {/* CTA Button */}
          <button 
            className="bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-2"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '18px',
              fontWeight: '500',
              padding: '14px 32px',
              height: '52px'
            }}
          >
            Let's Work Together →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
