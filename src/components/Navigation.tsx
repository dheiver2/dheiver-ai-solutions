import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', path: '/', anchor: 'hero' },
    { name: 'Problemas & Soluções', path: '/', anchor: 'problemas' },
    { name: 'Cases', path: '/', anchor: 'cases' },
    { name: 'Serviços', path: '/', anchor: 'servicos' },
    { name: 'Investimento', path: '/', anchor: 'pricing' },
    { name: 'FAQ', path: '/', anchor: 'faq' },
  ];

  const isActive = (path: string, anchor?: string) => {
    if (anchor) {
      return location.hash === `#${anchor}` || (anchor === 'hero' && location.hash === '');
    }
    return location.pathname === path;
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/85 backdrop-blur-lg shadow-lg border-b border-gray-200/60' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container-width">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="flex items-center">
              <Logo className={`h-12 w-auto ${isScrolled ? 'text-gray-900' : 'text-white drop-shadow'}`} />
          </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
            <a 
                  href={item.anchor ? `#${item.anchor}` : item.path}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.path, item.anchor)
                      ? 'text-black bg-gray-100 shadow-sm'
                      : isScrolled
                      ? 'text-gray-700 hover:text-black hover:bg-gray-50'
                      : 'text-white hover:text-white hover:bg-white/15'
                  }`}
                >
                  {item.name}
                  {isActive(item.path, item.anchor) && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-500 rounded-full"
                      layoutId="activeIndicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
            </a>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
            <a 
                href="#agendamento"
                className="bg-black hover:bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg border border-gray-500/20"
              >
                Consulta Grátis
            </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'text-gray-700 hover:text-black hover:bg-gray-100'
                : 'text-white hover:text-white hover:bg-white/15'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
            </div>
        </div>

        {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed inset-x-0 top-20 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container-width py-6">
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
              <a 
                      href={item.anchor ? `#${item.anchor}` : item.path}
                      className="block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 text-gray-700 hover:text-black hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
              </a>
                  </motion.div>
                ))}
                
                <motion.div
                  className="pt-4 border-t border-gray-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                >
              <a 
                    href="#agendamento"
                    className="block w-full text-center bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg text-base font-semibold transition-all duration-200 shadow-md"
                    onClick={() => setIsOpen(false)}
                  >
                    Agendar Consulta
              </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
