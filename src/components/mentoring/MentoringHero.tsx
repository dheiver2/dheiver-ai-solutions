import React from 'react';
import { Button } from '@/components/ui/button';

const MentoringHero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-white pt-8 pb-6">
      <div className="max-w-xl mx-auto px-5">
        {/* Foto */}
        <div className="flex justify-center mb-6">
          <div className="w-44 h-56 md:w-52 md:h-64 overflow-hidden">
            <img
              src="/dheiver-photo.png"
              alt="Dr. Dheiver Santos"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Headline */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-normal text-black mb-1 leading-tight">
            Torne-se
          </h1>
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-3 leading-tight">
            Engenheiro de <span className="text-amber-700">IA JR</span>
          </h1>
          <p className="text-base md:text-lg font-normal text-stone-800 mb-6">
            em 3 meses
          </p>

          <p className="text-sm text-stone-800 font-normal leading-relaxed mb-6">
            Mentoria 1-on-1 com PhD em IA • 150+ projetos • 100+ artigos
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6 text-center">
            <div>
              <p className="text-2xl md:text-4xl font-bold text-amber-700">100+</p>
              <p className="text-xs text-stone-800 font-semibold mt-1">ARTIGOS</p>
            </div>
            <div className="border-x border-stone-300">
              <p className="text-2xl md:text-4xl font-bold text-amber-700">150+</p>
              <p className="text-xs text-stone-800 font-semibold mt-1">PROJETOS</p>
            </div>
            <div>
              <p className="text-2xl md:text-4xl font-bold text-amber-700">40K+</p>
              <p className="text-xs text-stone-800 font-semibold mt-1">LEITORES</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-2 mb-5">
            <Button
              size="lg"
              className="w-full bg-amber-700 hover:bg-amber-800 text-white text-sm font-bold h-12 rounded-none transition-colors duration-200"
              onClick={() => window.location.href = 'https://wa.me/5551989889898?text=Quero%20saber%20mais%20sobre%20a%20mentoria%20em%20IA'}
            >
              INSCREVA-SE AGORA
            </Button>
            <Button
              size="lg"
              className="w-full bg-transparent hover:bg-stone-100 text-black text-sm font-bold h-12 rounded-none border-2 border-stone-400 transition-colors duration-200"
              onClick={() => scrollToSection('mentoring-authority')}
            >
              VER CREDENCIAIS
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex justify-center gap-4 text-xs text-stone-800 font-semibold">
            <span><span className="text-amber-700">✓</span> 8+ Mentees/mês</span>
            <span className="text-stone-400">|</span>
            <span><span className="text-amber-700">✓</span> 3 Meses</span>
            <span className="text-stone-400">|</span>
            <span><span className="text-amber-700">✓</span> Garantia</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentoringHero;
