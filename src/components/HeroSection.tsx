import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, TrendingUp, Zap, Brain } from 'lucide-react';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const services = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Avançado"
    },
    {
      icon: Zap,
      title: "Visão",
      description: "Computacional"
    },
    {
      icon: TrendingUp,
      title: "NLP",
      description: "Processing"
    },
    {
      icon: Sparkles,
      title: "Estratégias",
      description: "de IA"
    }
  ];

  return (
    <section className="hero-section bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden min-h-screen flex items-center pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          </div>
          
      <div className="container-width section-padding relative z-10 w-full">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-gray-900 text-white rounded-full text-xs md:text-sm font-medium mb-6 md:mb-8 shadow-lg"
          >
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
            <span>Consultoria Avançada em IA</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight tracking-tight"
          >
            Dr. Dheiver Santos
          </motion.h1>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="w-16 h-0.5 md:w-24 md:h-1 bg-gradient-to-r from-gray-900 to-gray-600 mx-auto mb-6 md:mb-8"
          ></motion.div>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600 mb-6 md:mb-8 font-light max-w-4xl mx-auto leading-relaxed px-4"
          >
            Transforme <span className="font-semibold text-gray-900">desafios complexos</span>
            <br className="hidden sm:block" />
            <span className="hidden sm:inline"> em </span>
            <span className="sm:hidden">em </span>
            <span className="font-semibold text-gray-900">oportunidades inteligentes</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Especialista em soluções de IA de alta complexidade. Oferecemos consultoria estratégica 
            para organizações que buscam transformação através da inteligência artificial avançada.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12 md:mb-20 px-4"
          >
            <Button asChild size="lg" className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white px-6 md:px-8 py-3 md:py-4 text-sm md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group">
              <Link to="/services" className="flex items-center justify-center gap-2">
                <span>Explore Nossos Serviços</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 md:px-8 py-3 md:py-4 text-sm md:text-lg font-semibold transition-all duration-300">
              <Link to="/contact">
                Agende uma Consulta
              </Link>
            </Button>
          </motion.div>

          {/* Services Grid - Responsivo melhorado */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto mb-12 md:mb-20"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-4 md:p-6 rounded-2xl shadow-lg border border-gray-100 text-center group cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300">
                  <service.icon className="w-6 h-6 md:w-8 md:h-8 text-gray-700 group-hover:text-white transition-colors duration-300" />
          </div>
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 md:mb-2 leading-tight">{service.title}</h3>
                <p className="text-xs md:text-sm text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats - Melhor responsividade */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-lg md:max-w-2xl mx-auto pt-8 md:pt-12 border-t border-gray-200"
          >
            <div className="text-center px-2">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 md:mb-2">10+</div>
              <div className="text-xs md:text-sm text-gray-600 leading-tight">Anos de<br className="sm:hidden" /> Experiência</div>
            </div>
            <div className="text-center px-2">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 md:mb-2">50+</div>
              <div className="text-xs md:text-sm text-gray-600 leading-tight">Projetos<br className="sm:hidden" /> Entregues</div>
            </div>
            <div className="text-center px-2">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 md:mb-2">100%</div>
              <div className="text-xs md:text-sm text-gray-600 leading-tight">Satisfação<br className="sm:hidden" /> dos Clientes</div>
            </div>
          </motion.div>
        </motion.div>
            </div>

      {/* Scroll Indicator - Oculto no mobile */}
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
