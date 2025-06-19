import React from 'react';
import { Link } from 'react-router-dom';
import { PenTool, Mail, MapPin, Calendar } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const serviceLinks = [
    { name: 'AI Content Creator', path: '/services/ai-driven-content' },
    { name: 'Technical Documentation', path: '/services/technical-documentation' },
    { name: 'Whitepapers & Case Studies', path: '/services/whitepapers-and-case-studies' },
    { name: 'Event Coverage', path: '/services/tech-event-coverage' },
    { name: 'AI Consultant', path: '/services/ai-automation-services' },
    { name: 'App Developer', path: '/services/app-based-content-and-sites' },
    { name: 'Bookmaking Services', path: '/services/bookmaking-services' },
    { name: 'WordPress Websites', path: '/services/wordpress-websites' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <PenTool className="h-8 w-8 text-emerald-400" />
              <span className="text-xl font-bold">Seattle Content Studio</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional content creator, blog writer, app developer, and AI consultant 
              serving tech businesses. Expert in AI-driven content creation, automation, 
              and intelligent business solutions. Based in Seattle, serving clients globally.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Seattle, WA - Content Creator & AI Consultant
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                hello@seattlecontentstudio.com
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Book a free consultation with our AI consultant
              </div>
            </div>
          </div>

          {/* Quick Links - Updated Order: Home, About, Services, FAQ, Blog, Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'FAQ'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Expert Services</h3>
            <ul className="space-y-2 text-sm">
              {serviceLinks.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Seattle Content Studio. Professional Content Creator & AI Consultant. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link 
              to="/privacy-policy" 
              className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-of-service" 
              className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm"
            >
              Terms of Service
            </Link>
            <a href="/rss.xml" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm">
              RSS Feed
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;