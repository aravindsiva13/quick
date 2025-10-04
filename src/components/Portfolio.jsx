
import React, { useState } from 'react';

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: 'Ar/Vr School Projects',
      description: 'Immersive AR/VR projects designed for schools, transforming classrooms into interactive, engaging, and future-ready learning environments',
      image: '/images/portfolio/ar-vr-school.svg'
    },
    {
      title: 'Enterprise Solutions',
      description: 'Custom enterprise-grade solutions that leverage AI and XR technologies to transform business operations',
      image: '/images/portfolio/enterprise.jpg'
    },
    {
      title: 'Media & Entertainment',
      description: 'Cutting-edge immersive experiences for media and entertainment industry',
      image: '/images/portfolio/retail.jpg'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section 
      className="relative px-4 sm:px-6 lg:px-0"
      style={{
        paddingTop: '12rem',
        paddingBottom: '15rem'
      }}
    >
      {/* Content Container */}
      <div className="w-full max-w-[1920px] mx-auto">
        <div className="px-0 lg:px-16 xl:px-24">
          {/* Header */}
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
              Our Portfolio
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
              Experience we have created
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center hidden md:flex"
            >
              <span className="text-white text-2xl">‹</span>
            </button>

            {/* Slide Content */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 px-0 lg:px-20">
              {/* Image */}
              <div 
                className="rounded-3xl overflow-hidden flex-shrink-0 relative w-full lg:w-auto"
                style={{
                  maxWidth: '558px',
                  height: 'auto',
                  aspectRatio: '558 / 384',
                  borderRadius: '26px'
                }}
              >
                <img 
                  src={projects[currentSlide].image}
                  alt={projects[currentSlide].title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div 
                className="flex flex-col justify-between w-full lg:w-auto"
                style={{
                  maxWidth: '452px',
                  minHeight: '283px'
                }}
              >
                <div>
                  <h3 
                    className="font-normal mb-4 sm:mb-6"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 'clamp(24px, 3vw, 32px)',
                      lineHeight: '1.2',
                      letterSpacing: '0.08em'
                    }}
                  >
                    {projects[currentSlide].title}
                  </h3>
                  <p 
                    className="text-gray-300 mb-6 sm:mb-8"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 'clamp(14px, 1.5vw, 16px)',
                      lineHeight: '1.5',
                      letterSpacing: '0.08em'
                    }}
                  >
                    {projects[currentSlide].description}
                  </p>
                </div>
                
                <button 
                  className="border border-white rounded-full hover:bg-white hover:text-black transition-all inline-flex items-center justify-center gap-2 self-start"
                  style={{
                    width: '148px',
                    height: '48px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '16px',
                    borderRadius: '100px'
                  }}
                >
                  Check →
                </button>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center hidden md:flex"
            >
              <span className="text-white text-2xl">›</span>
            </button>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex md:hidden justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center"
            >
              <span className="text-white text-2xl">‹</span>
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center"
            >
              <span className="text-white text-2xl">›</span>
            </button>
          </div>

          {/* Dots Indicator */}
          <div 
            className="flex items-center justify-center mt-12"
            style={{
              gap: '6px'
            }}
          >
            {projects.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="cursor-pointer transition-all"
                style={{
                  width: index === currentSlide ? '40px' : '6px',
                  height: '6px',
                  backgroundColor: index === currentSlide ? '#FFFFFF' : 'rgba(255, 255, 255, 0.3)',
                  borderRadius: '100px'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
