
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import Logo from '@/components/Logo';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-width section-padding">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <Logo className="w-8 h-8" />
            <span className="font-playfair font-bold text-xl text-black">
              Dr. Dheiver Santos
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              className={`transition-colors duration-200 font-medium ${
                isActive('/') ? 'text-black font-semibold' : 'text-gray-700 hover:text-black'
              }`}
            >
              Início
            </Link>
            <Link 
              to="/about"
              className={`transition-colors duration-200 font-medium ${
                isActive('/about') ? 'text-black font-semibold' : 'text-gray-700 hover:text-black'
              }`}
            >
              Sobre
            </Link>
            <Link 
              to="/services"
              className={`transition-colors duration-200 font-medium ${
                isActive('/services') ? 'text-black font-semibold' : 'text-gray-700 hover:text-black'
              }`}
            >
              Serviços
            </Link>
            <Link 
              to="/projects"
              className={`transition-colors duration-200 font-medium ${
                isActive('/projects') ? 'text-black font-semibold' : 'text-gray-700 hover:text-black'
              }`}
            >
              Projetos
            </Link>
            <Link 
              to="/insights"
              className={`transition-colors duration-200 font-medium ${
                isActive('/insights') ? 'text-black font-semibold' : 'text-gray-700 hover:text-black'
              }`}
            >
              Insights
            </Link>
            <Button asChild className="bg-black text-white hover:bg-gray-800 px-6">
              <Link to="/contact">Contato</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-black transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}></span>
              <span className={`w-full h-0.5 bg-black transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`w-full h-0.5 bg-black transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <Link 
                to="/"
                className={`transition-colors duration-200 font-medium text-left ${
                  isActive('/') ? 'text-black font-semibold' : 'text-gray-700 hover:text-black'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                to="/about"
                className={`transition-colors duration-200 font-medium text-left ${
                  isActive('/about') ? 'text-black font-semibold' : 'text-gray-700 hover:text-black'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link 
                to="/services"
                className={`transition-colors duration-200 font-medium text-left ${
                  isActive('/services') ? 'text-black font-semibold' : 'text-gray-700 hover:text-black'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link 
                to="/projects"
                className={`transition-colors duration-200 font-medium text-left ${
                  isActive('/projects') ? 'text-black font-semibold' : 'text-gray-700 hover:text-black'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projetos
              </Link>
              <Link 
                to="/insights"
                className={`transition-colors duration-200 font-medium text-left ${
                  isActive('/insights') ? 'text-black font-semibold' : 'text-gray-700 hover:text-black'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Insights
              </Link>
              <Button asChild className="bg-black text-white hover:bg-gray-800 w-fit">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contato</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
