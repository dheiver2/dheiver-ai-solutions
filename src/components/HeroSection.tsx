import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const HeroSection = () => {
  const whatsappNumber = '5551989889898';
  const whatsappMessage = encodeURIComponent(
    'Olá! 👋 Estou interessado em transformar meu negócio com IA.'
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section className="relative overflow-hidden min-h-screen min-h-[100svh] flex items-center pt-12 md:pt-20 bg-gradient-to-br from-gray-900 via-black to-gray-950">
      {/* Premium Background - Golden Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-yellow-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-60"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-yellow-400/10 rounded-full mix-blend-screen filter blur-3xl opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-yellow-600/5 rounded-full mix-blend-multiply filter blur-3xl opacity-20" style={{ transform: 'translate(-50%, -50%)' }}></div>
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)',
        backgroundSize: '50px 50px'
      }}></div>

      {/* Subtle Scanline */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(255,255,255,0.14) 1px, transparent 1px)',
          backgroundSize: '100% 6px',
          maskImage: 'radial-gradient(75% 60% at 50% 40%, black 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="container-width section-padding relative z-10 w-full">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter"
          >
            Transforme seu negócio com
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mt-2">
              Inteligência Artificial
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Soluções personalizadas de IA com ROI comprovado em 90 dias.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            variants={itemVariants}
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-6 sm:px-8 md:px-10 py-3 sm:py-3 md:py-4 lg:py-5 rounded-lg font-bold text-base sm:text-base md:text-lg transition-all duration-300 shadow-lg shadow-yellow-500/50 hover:shadow-yellow-500/80 hover:scale-105 active:scale-95 mb-16"
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Falar com Especialista</span>
          </motion.a>

          {/* Quick Trust Metrics */}
          <motion.div
            variants={itemVariants}
            className="text-center text-gray-400 text-sm space-y-2"
          >
            <p>✓ 50+ Projetos Entregues  |  ✓ ROI Médio 3.2x  |  ✓ 98% de Satisfação</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-400 font-semibold">SCROLL</span>
          <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
