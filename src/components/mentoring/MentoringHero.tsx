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
    <div className="w-full bg-white py-12 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-6">
        {/* Foto de Destaque */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="relative w-48 h-64 md:w-64 md:h-80 overflow-hidden">
            <img
              src="/dheiver-photo.png"
              alt="Dr. Dheiver Santos - Mentor em IA"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
            Torne-se <span className="text-yellow-600">Engenheiro de IA JR</span><br />em 3 Meses
          </h1>

          <p className="text-lg md:text-xl text-black mb-8">
            Mentoria 1-on-1 com PhD em IA<br />
            150+ projetos • 100+ artigos publicados
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-12 mb-12 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-yellow-600">100+</p>
              <p className="text-sm text-black mt-2">Artigos</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-yellow-600">150+</p>
              <p className="text-sm text-black mt-2">Projetos</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-yellow-600">40K+</p>
              <p className="text-sm text-black mt-2">Leitores</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 mb-12">
            <Button
              size="lg"
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-black text-base md:text-lg h-14 md:h-16 font-bold rounded-none"
              onClick={() => window.location.href = 'https://wa.me/5551989889898?text=Quero%20saber%20mais%20sobre%20a%20mentoria%20em%20IA'}
            >
              INSCREVA-SE AGORA
            </Button>
            <Button
              size="lg"
              className="w-full bg-black hover:bg-black text-yellow-600 text-base md:text-lg h-14 md:h-16 font-bold rounded-none border border-yellow-600"
              onClick={() => scrollToSection('mentoring-authority')}
            >
              VER CREDENCIAIS
            </Button>
          </div>

          {/* Trust */}
          <div className="text-center text-sm text-black">
            <p>✓ 8+ Mentees Formados por mês</p>
            <p className="mt-2">✓ 3 Meses de Programa</p>
            <p className="mt-2">✓ Garantia ou Devolução</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentoringHero;
