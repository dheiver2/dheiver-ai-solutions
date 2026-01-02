import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
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
    <section className="relative overflow-hidden min-h-screen min-h-[100svh] flex items-center pt-20 bg-gradient-to-br from-gray-900 via-black to-gray-950">
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
          {/* Premium Badge with Glow */}
          <motion.div
            variants={itemVariants}
            className="ui-shine inline-flex items-center gap-2 px-5 py-3 md:px-7 md:py-4 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/50 text-yellow-300 rounded-full text-xs md:text-sm font-semibold mb-8 shadow-lg shadow-yellow-500/20 backdrop-blur-sm hover:shadow-yellow-500/40 transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
            ✨ Transformação de Negócios com IA
          </motion.div>

          {/* Main Headline - Ultra Bold */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tighter"
          >
            Transforme Dados em
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mt-2">
              Crescimento Exponencial
            </span>
          </motion.h1>

          {/* Subheadline - Compelling */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Soluções de IA estratégicas customizadas que geram
            <span className="block text-yellow-400 font-semibold">ROI mensurável em 90 dias.</span>
          </motion.p>

          {/* CTA Buttons - Premium Design */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20"
          >
            <a
              href="#agendamento"
              className="ui-shine group relative inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg shadow-yellow-500/50 hover:shadow-yellow-500/80 hover:scale-105 active:scale-95"
            >
              <span>Agendar Consulta Grátis</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href="#cases"
              className="ui-shine group relative inline-flex items-center gap-3 border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 backdrop-blur-sm hover:border-yellow-400"
            >
              <span>Ver Resultados</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>

          {/* Trust Metrics - Premium Cards */}
          <motion.div
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl"
          >
            <p className="text-sm font-semibold text-yellow-400 mb-6 uppercase tracking-widest">Confiam em Nossas Soluções</p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="group hover:scale-110 transition-transform duration-300">
                <p className="text-3xl md:text-4xl font-black text-yellow-400 group-hover:text-yellow-300">50+</p>
                <p className="text-xs md:text-sm text-gray-400 mt-2 group-hover:text-gray-300 transition-colors">Projetos Entregues</p>
              </div>
              <div className="group hover:scale-110 transition-transform duration-300 border-l border-r border-white/10">
                <p className="text-3xl md:text-4xl font-black text-yellow-400 group-hover:text-yellow-300">3.2x</p>
                <p className="text-xs md:text-sm text-gray-400 mt-2 group-hover:text-gray-300 transition-colors">ROI Médio</p>
              </div>
              <div className="group hover:scale-110 transition-transform duration-300">
                <p className="text-3xl md:text-4xl font-black text-yellow-400 group-hover:text-yellow-300">98%</p>
                <p className="text-xs md:text-sm text-gray-400 mt-2 group-hover:text-gray-300 transition-colors">Satisfação</p>
              </div>
            </div>
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
