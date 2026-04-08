import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const MentoringHero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-white py-8 md:py-16">
      <div className="max-w-2xl mx-auto px-4 md:px-6">
        {/* Foto de Destaque */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="relative w-48 h-64 md:w-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-600">
            <img
              src="/dheiver-profile.jpg"
              alt="Dr. Dheiver Santos - Mentor em IA"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-8">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-yellow-600 text-white rounded-full text-sm font-semibold mb-4">
              🚀 Mentoria Especializada
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Torne-se <span className="text-yellow-600">Engenheiro de IA</span> em 3 Meses
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Com mentoria 1-on-1 de um <strong>PhD em IA com 150+ projetos entregues</strong> e experiência em empresas como Santander e A3Data
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-blue-600">100+</p>
              <p className="text-xs md:text-sm text-gray-600">Artigos Publicados</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-blue-600">150+</p>
              <p className="text-xs md:text-sm text-gray-600">Projetos Entregues</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-blue-600">40K+</p>
              <p className="text-xs md:text-sm text-gray-600">Leitores ResearchGate</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col gap-3 mb-8">
            <Button
              size="lg"
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white text-base md:text-lg h-14 md:h-16 font-bold"
              onClick={() => window.location.href = 'https://wa.me/5551989889898?text=Quero%20saber%20mais%20sobre%20a%20mentoria%20em%20IA'}
            >
              💬 Falar com Dr. Dheiver
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full text-base md:text-lg h-12 md:h-14"
              onClick={() => scrollToSection('mentoring-authority')}
            >
              Ver Credenciais <ChevronDown className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600">
            <span className="flex items-center">✓ 15+ Mentees Formados</span>
            <span className="flex items-center">✓ 6 Meses de Programa</span>
            <span className="flex items-center">✓ Garantia ou Devolução</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentoringHero;
