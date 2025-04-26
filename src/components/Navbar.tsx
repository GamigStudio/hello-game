import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <a 
              href="#hero" 
              className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}
            >
              HELLO GAMES
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              About
            </a>
            <a
              href="#games"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('games');
              }}
            >
              Games
            </a>
            <a
              href="#values"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('values');
              }}
            >
              Values
            </a>
            <a
              href="#team"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('team');
              }}
            >
              Team
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('faq');
              }}
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Contact
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg py-4 px-2 absolute left-4 right-4 top-12 transition-all duration-300">
            <div className="flex flex-col space-y-4">
              <a
                href="#about"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 px-4 py-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
              >
                About
              </a>
              <a
                href="#games"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 px-4 py-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('games');
                }}
              >
                Games
              </a>
              <a
                href="#values"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 px-4 py-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('values');
                }}
              >
                Values
              </a>
              <a
                href="#team"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 px-4 py-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('team');
                }}
              >
                Team
              </a>
              <a
                href="#faq"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 px-4 py-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('faq');
                }}
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 px-4 py-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;