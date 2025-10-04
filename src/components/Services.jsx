


import React from 'react';

const Services = () => {
  const services = [
    {
      number: '1',
      title: 'Artificial Intelligence',
      image: '/images/services/ai.svg',
      tags: ['AI']
    },
    {
      number: '2',
      title: 'Augmented, Virtual & Mixed Reality',
      image: '/images/services/ar-vr.svg',
      tags: ['AR', 'VR', 'MR']
    },
    {
      number: '3',
      title: 'Enterprise Tech Solutions',
      image: '/images/services/enterprise.svg',
      tags: ['SOFTWARE', 'CLOUD', 'DEVOPS', 'CYBER SECURITY', 'CONSULTING']
    }
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Title - Left Aligned */}
        <h2 
          className="font-normal mb-12 sm:mb-16"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(40px, 5vw, 64px)',
            lineHeight: '1.2',
            letterSpacing: '0.08em'
          }}
        >
          Our Services
        </h2>

       


        {/* Services Grid - 3 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 sm:mb-16 max-w-6xl mx-auto">

          {services.map((service, index) => (
            <div 
              key={index}
              className="relative group w-full"
            >
              {/* Service Card */}
              <div className="relative overflow-hidden rounded-2xl">
                {/* Number Badge - Top Left */}
                <div 
                  className="absolute z-20"
                  style={{
                    top: '16px',
                    left: '16px',
                    width: '32px',
                    height: '32px',
                    background: 'rgba(6, 182, 212, 0.2)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#06B6D4'
                  }}
                >
                  {service.number}
                </div>

                {/* Service Image */}
                <div 
                  className="relative w-full"
                  style={{
                    height: '237px',
                    borderRadius: '16px',
                    overflow: 'hidden'
                  }}
                >
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Service Title */}
                <h3 
                  className="mt-6 mb-3"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 'clamp(20px, 2vw, 24px)',
                    lineHeight: '1.2',
                    fontWeight: '600',
                    letterSpacing: '0.02em'
                  }}
                >
                  {service.title}
                </h3>

                {/* Tags - Right after title */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center justify-center"
                      style={{
                        minWidth: '80px',
                        height: '32px',
                        padding: '0 16px',
                        border: '1.5px solid rgba(6, 182, 212, 0.6)',
                        borderRadius: '20px',
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '11px',
                        fontWeight: '500',
                        color: '#06B6D4',
                        letterSpacing: '0.05em',
                        background: 'rgba(6, 182, 212, 0.1)',
                        textTransform: 'uppercase'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button - Centered */}
        <div className="flex justify-center">
          <button 
            className="border border-white rounded-full font-medium hover:bg-white hover:text-black transition-all inline-flex items-center justify-center gap-2"
            style={{
              width: '100%',
              maxWidth: '320px',
              height: '58px',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '16px',
              borderRadius: '100px'
            }}
          >
            Let's Work Together →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;