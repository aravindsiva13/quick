

import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

const Footer = () => {
  return (
    <footer 
      className="relative flex flex-col justify-between px-4 sm:px-6 lg:px-0 border-t border-white/10 overflow-hidden"
      style={{
        paddingTop: '12rem',
        paddingBottom: '15rem',
        minHeight: '924px'
      }}
    >
      {/* Bottom Teal Glow */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          top: '800px',
          width: '1621px',
          height: '1524px',
          background: '#009999',
          borderRadius: '80%',
          filter: 'blur(120px)',
          opacity: 2
        }}
      ></div>

      {/* Noise Overlay */}
      <div 
        className="absolute pointer-events-none"
        style={{
          left: '50%',
          top: '20px',
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

      {/* Content Container */}
      <div className="w-full max-w-[1920px] mx-auto">
        <div className="px-0 lg:px-16 xl:px-24">
          <div className="relative z-10 flex-grow">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 mb-16 sm:mb-20">
              {/* Left Section - Heading & Social */}
              <div className="pl-0 lg:pl-10">
                <h2 
                  className="mb-12 sm:mb-16 leading-tight pl-16"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 'clamp(36px, 6vw, 60px)',
                    fontWeight: '400',
                    letterSpacing: '0.01em',
                    lineHeight: '1.2'
                  }}
                >
                  Let's Build the<br />
                  Future Together
                </h2>
                
                {/* Social Links */}
                <div>
                  <p 
                    className="mb-12 sm:mb-16 leading-tight pl-16"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 'clamp(18px, 2vw, 24px)',
                      fontWeight: '400',
                      letterSpacing: '0.13em'
                    }}
                  >
                    Stay Connected With
                  </p>
                  <div className="flex gap-4 flex-wrap pl-16">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transition-transform hover:scale-110"
                      aria-label="Facebook"
                    >
                      <FaFacebookF className="w-5 h-5" />
                    </a>

                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transition-transform hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn className="w-5 h-5" />
                    </a>

                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transition-transform hover:scale-110"
                      aria-label="Instagram"
                    >
                      <FaInstagram className="w-5 h-5" />
                    </a>

                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transition-transform hover:scale-110"
                      aria-label="YouTube"
                    >
                      <FaYoutube className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Section - Contact Info & CTA */}
              <div className="flex flex-col items-start lg:items-end">
                {/* Request a Call Button */}
               


                <button 
  className="border border-white rounded-full font-medium hover:bg-white hover:text-black transition-all mb-12 sm:mb-16 inline-flex items-center gap-2 w-full sm:w-auto"
  style={{
    maxWidth: '340px',  
    height: '70px',     
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '18px'    
  }}
>
  Request a Call →
</button>


                <div className="space-y-6 text-left lg:text-right w-full lg:w-auto">
                  <p 
                    className="mb-4"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 'clamp(18px, 2vw, 24px)',
                      fontWeight: '400',
                      letterSpacing: '0.13em'
                    }}
                  >
                    Contacts Us
                  </p>
                  
                  {/* Phone */}
                  <a
                    href="tel:+917094609923"
                    className="flex items-center gap-3 text-white hover:text-gray-200 transition-colors font-normal lg:flex-row-reverse"
                    style={{ fontSize: '16px' }}
                  >
                    <MdPhone className="w-5 h-5 flex-shrink-0" />
                    <span>+91 7094609923</span>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:heyareweare@gmail.com"
                    className="flex items-center gap-3 text-white hover:text-gray-200 transition-colors font-normal lg:flex-row-reverse"
                    style={{ fontSize: '16px' }}
                  >
                    <MdEmail className="w-5 h-5 flex-shrink-0" />
                    <span>heyareweare@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright with Vector Line */}
         


          <div className="absolute bottom-20 left-0 w-full z-10">
  {/* Divider Line */}
  <div 
    className="w-3/4 mx-auto mb-6 sm:mb-8"
    style={{
      height: '1px',
      background: 'rgba(255, 255, 255, 0.9)',
      opacity: 0.6
    }}
  ></div>

  <p 
    className="text-center font-normal"
    style={{ 
      fontSize: '16px',
      color: 'rgba(255, 255, 255, 0.7)',
      fontFamily: 'Montserrat, sans-serif'
    }}
  >
    © 2025 Heyareweare Technologies. All rights reserved
  </p>
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;