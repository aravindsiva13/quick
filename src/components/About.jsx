

import React from 'react';

const About = () => {
  return (
    
    <section 
      className="relative px-4 sm:px-6 lg:px-0 overflow-hidden"
      style={{
        paddingTop: '12rem',
        paddingBottom: '15rem'
      }}
    >
      <div className="max-w-7xl mx-auto w-full">
       
        <h2 
          className="font-normal mb-8 sm:mb-12"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(40px, 5vw, 60px)',
            lineHeight: '1.2',
            letterSpacing: '0.17em'
          }}
        >
          About Us
        </h2>

        
        <p 
          className="text-gray-300"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(18px, 2.5vw, 30px)',
            lineHeight: '1.6',
            letterSpacing: '0.17em',
            maxWidth: '1293px'
          }}
        >
          Heyareweare is a next generation Creative technology company that blends Artificial Intelligence, Extended Reality (AR, VR, MR), and enterprise IT services to create intelligent, immersive, and enterprise grade solutions. From Media to Retail to Enterprises, we help businesses unlock growth by reimagining how people and technology connect.
        </p>
      </div>
    </section>
  );
};

export default About;