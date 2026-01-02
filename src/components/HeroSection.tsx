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
    <section className="relative overflow-hidden min-h-screen flex items-center pt-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Background Blur Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      </div>

      <div className="container-width section-padding relative z-10 w-full">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-blue-100 text-blue-700 rounded-full text-xs md:text-sm font-semibold mb-8 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Consultoria IA para Crescimento
          </motion.div>

          {/* Main Headline - Focado em Valor */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight"
          >
            Transforme Dados em Crescimento Exponencial
          </motion.h1>

          {/* Subheadline - Value Proposition */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            IA estratégica para empresas que querem automatizar processos, 
            aumentar conversão e tomar decisões baseadas em inteligência real. 
            Não templates prontos—soluções customizadas que geram ROI mensurável.
          </motion.p>

          {/* CTA Buttons - Conversion Focused */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <a
              href="#agendamento"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              Agendar Consulta Grátis
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#problemas"
              className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-lg font-semibold text-base transition-all duration-200"
            >
              Ver Casos de Sucesso
            </a>
          </motion.div>

          {/* Proof Elements */}
          <motion.div
            variants={itemVariants}
            className="bg-white/50 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <p className="text-sm text-gray-600 mb-4">Confiam em Nossas Soluções</p>
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-blue-600">50+</p>
                <p className="text-xs md:text-sm text-gray-700 mt-1">Projetos Entregues</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-blue-600">3.2x</p>
                <p className="text-xs md:text-sm text-gray-700 mt-1">ROI Médio</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-blue-600">98%</p>
                <p className="text-xs md:text-sm text-gray-700 mt-1">Satisfação</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-600 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
