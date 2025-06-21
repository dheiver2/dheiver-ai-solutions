
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white">
      <div className="container-width section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
              Dr. Dheiver Santos
            </h1>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 font-light">
              Consultoria Avançada em Inteligência Artificial<br />
              <span className="text-black font-medium">para Desafios Complexos</span>
            </h2>
          </div>
          
          <div className="animate-fade-in-up delay-300">
            <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              Especialista em soluções de IA de alta complexidade, oferecendo consultoria estratégica 
              para organizações que buscam transformar desafios em oportunidades através da 
              inteligência artificial avançada.
            </p>
          </div>

          <div className="animate-fade-in-up delay-500 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('services')}
              size="lg"
              className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Explore Nossos Serviços
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg font-medium transition-all duration-300"
            >
              Agende uma Consulta
            </Button>
          </div>

          <div className="animate-slide-in-right delay-700 mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-black mb-2">ML</div>
              <div className="text-sm text-gray-600">Machine Learning<br />Avançado</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-black mb-2">CV</div>
              <div className="text-sm text-gray-600">Visão<br />Computacional</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-black mb-2">NLP</div>
              <div className="text-sm text-gray-600">Processamento<br />Linguagem Natural</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-black mb-2">AI</div>
              <div className="text-sm text-gray-600">Estratégias<br />de IA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
