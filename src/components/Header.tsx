import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, PenTool } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      // Navigate to home page first, then scroll to section
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || !isHomePage ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <PenTool className={`h-8 w-8 transition-colors duration-300 ${
              isScrolled || !isHomePage ? 'text-emerald-700' : 'text-white'
            }`} />
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'
            }`}>
              Seattle Content Studio
            </span>
          </Link>

          {/* Desktop Navigation - Updated Order: Home, About, Services, FAQ, Blog, Contact */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Services', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium transition-colors duration-300 hover:text-emerald-600 ${
                  isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item}
              </button>
            ))}
            <Link
              to="/blog"
              className={`font-medium transition-colors duration-300 hover:text-emerald-600 ${
                isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'
              }`}
            >
              Blog
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-colors duration-300 hover:text-emerald-600 ${
                isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Updated Order: Home, About, Services, FAQ, Blog, Contact */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            {['Home', 'About', 'Services', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200"
              >
                {item}
              </button>
            ))}
            <Link
              to="/blog"
              className="block w-full text-left py-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;