import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Bharath Kuppusamy
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors duration-200 relative group ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-cyan-600' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-green-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-cyan-600' : 'text-gray-300 hover:text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 pt-2">
              <a
                href="#contact"
                className="block text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-green-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-green-600 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;