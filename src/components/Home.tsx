import React from 'react';
import { ArrowRight, Zap, Globe, Smartphone, Code } from 'lucide-react';

const Home: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background with Seattle skyline image */}
      <div className="absolute inset-0">
        <img 
          src="/images/seattle-skyline.png" 
          alt="Seattle skyline with Space Needle and Mount Rainier - Home of Seattle Content Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0, 103, 79, 0.9), rgba(0, 103, 79, 0.8), rgba(0, 103, 79, 0.7))' }}></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Expert{' '}
            <span style={{ color: '#4ade80' }}>Content Creator</span>{' '}
            & AI Consultant
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto" style={{ color: '#bbf7d0' }}>
            Professional blog writer, app developer, and AI consultant helping tech businesses 
            create compelling content and automate smarter through intelligent solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection('services')}
              className="text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
              style={{ backgroundColor: '#00674F' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#004d3a'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00674F'}
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white hover:bg-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              style={{ '--tw-text-opacity': '1' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = '#00674F';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'white';
              }}
            >
              Book a Free Consultation
            </button>
          </div>

          {/* Service Pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300">
              <Zap className="h-12 w-12 mb-4 mx-auto" style={{ color: '#4ade80' }} />
              <h3 className="text-xl font-semibold mb-3">AI Content Creator</h3>
              <p style={{ color: '#bbf7d0' }}>
                Expert blog writer using AI to create engaging, SEO-optimized content that converts
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300">
              <Globe className="h-12 w-12 mb-4 mx-auto" style={{ color: '#4ade80' }} />
              <h3 className="text-xl font-semibold mb-3">WordPress Developer</h3>
              <p style={{ color: '#bbf7d0' }}>
                Professional websites and content management systems that work flawlessly
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300">
              <Code className="h-12 w-12 mb-4 mx-auto" style={{ color: '#4ade80' }} />
              <h3 className="text-xl font-semibold mb-3">App Developer</h3>
              <p style={{ color: '#bbf7d0' }}>
                Custom applications and microapps built with modern development tools
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300">
              <Smartphone className="h-12 w-12 mb-4 mx-auto" style={{ color: '#4ade80' }} />
              <h3 className="text-xl font-semibold mb-3">AI Consultant</h3>
              <p style={{ color: '#bbf7d0' }}>
                Strategic automation and AI implementation for business growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;