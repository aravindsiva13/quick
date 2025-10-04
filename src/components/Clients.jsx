



import React from 'react';

const Clients = () => {
  const clients = [
    { name: 'AGS Entertainment', logo: '/images/clients/ags.svg', size: 'normal' },
    { name: 'AVR', logo: '/images/clients/avr.svg', size: 'normal' },
    { name: 'Vijay TV', logo: '/images/clients/vijay.svg', size: 'normal' },
    { name: 'JioHotstar', logo: '/images/clients/jiohotstar.svg', size: 'large' },
    { name: 'Studio Green', logo: '/images/clients/studiogreen.svg', size: 'normal' },
    { name: 'StartupTN', logo: '/images/clients/startuptn.svg', size: 'normal' },
  ];

  return (
    <section 
      className="relative px-4 sm:px-6 lg:px-0 overflow-hidden"
      style={{
        paddingTop: '12rem',
        paddingBottom: '15rem'
      }}
    >
      {/* Left Glow Effect */}
      <div 
        className="absolute pointer-events-none"
        style={{
          left: '-400px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '600px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, rgba(6, 182, 212, 0.15) 40%, transparent 70%)',
          filter: 'blur(30px)',
          opacity: 1.2
        }}
      ></div>

      {/* Right Glow Effect */}
      <div 
        className="absolute pointer-events-none"
        style={{
          right: '-400px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '600px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, rgba(20, 184, 166, 0.08) 40%, transparent 70%)',
          filter: 'blur(10px)',
          opacity: 1.2
        }}
      ></div>

      {/* Content Container  */}
      <div className="w-full max-w-[1920px] mx-auto">
        <div className="px-0 lg:px-16 xl:px-24">
          {/* Section Title */}
          <div className="text-left mb-12 sm:mb-20 pl-16">
            <h2 
              className="font-normal mb-2"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(40px, 5vw, 64px)',
                lineHeight: '1.2',
                letterSpacing: '0.08em'
              }}
            >
              Our Clients
            </h2>

           
            <p 
              className="text-gray-400"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(16px, 2vw, 20px)',
                lineHeight: '1.2',
                letterSpacing: '0.08em'
              }}
            >
              Proud to collaborate with forward thinking brands
            </p>
          </div>

          {/* Client Logos - Centered within container */}
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="space-y-8 sm:space-y-12">
              {/* First Row - 4 logos */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16 items-center justify-items-center">
                {clients.slice(0, 4).map((client, index) => (
                  <div 
                    key={index}
                    className="w-full flex items-center justify-center p-4 transition-transform hover:scale-110 duration-300"
                  >
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className={`h-auto object-contain opacity-90 hover:opacity-100 transition-opacity ${
                        client.size === 'large' 
                          ? 'max-w-[140px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[280px]' 
                          : 'max-w-[100px] sm:max-w-[130px] md:max-w-[150px] lg:max-w-[180px]'
                      }`}
                    />
                  </div>
                ))}
              </div>

              {/* Second Row - 2 logos centered */}
              <div className="flex items-center justify-center gap-8 sm:gap-12 md:gap-16 flex-wrap">
                {clients.slice(4, 6).map((client, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-center p-4 transition-transform hover:scale-110 duration-300"
                  >
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="h-auto object-contain opacity-90 hover:opacity-100 transition-opacity max-w-[100px] sm:max-w-[130px] md:max-w-[150px] lg:max-w-[180px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;


