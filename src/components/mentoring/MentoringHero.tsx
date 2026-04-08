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
    <div className="w-full bg-white pt-8 md:pt-12 pb-12 md:pb-16">
      <div className="max-w-2xl mx-auto px-6 md:px-8">
        {/* Foto */}
        <div className="flex justify-center mb-8 md:mb-10">
          <div className="w-48 h-60 md:w-56 md:h-72 overflow-hidden">
            <img
              src="/dheiver-photo.png"
              alt="Dr. Dheiver Santos"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-8 md:mb-10">
          <h1 className="text-4xl md:text-5xl font-light text-black mb-1 leading-tight tracking-tight">
            Torne-se
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight tracking-tight">
            Engenheiro de <span className="text-amber-700">IA JR</span>
          </h1>
          <h2 className="text-lg md:text-xl font-light text-stone-700 mb-6">
            em 3 meses
          </h2>

          {/* Subheadline */}
          <p className="text-sm md:text-base text-stone-600 font-light leading-relaxed mb-8 max-w-xl mx-auto">
            Mentoria 1-on-1 com PhD em IA<br className="hidden md:inline" />
            <span className="block md:inline md:mx-1">150+ projetos • 100+ artigos</span>
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-10 md:gap-16 mb-8 md:mb-10">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-light text-amber-700 mb-1">100<span className="text-xl md:text-2xl">+</span></p>
              <p className="text-xs text-stone-600 font-light tracking-wide uppercase">Artigos</p>
            </div>
            <div className="w-px bg-stone-300"></div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-light text-amber-700 mb-1">150<span className="text-xl md:text-2xl">+</span></p>
              <p className="text-xs text-stone-600 font-light tracking-wide uppercase">Projetos</p>
            </div>
            <div className="w-px bg-stone-300"></div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-light text-amber-700 mb-1">40K<span className="text-xl md:text-2xl">+</span></p>
              <p className="text-xs text-stone-600 font-light tracking-wide uppercase">Leitores</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-2 mb-6 md:mb-8">
            <Button
              size="lg"
              className="w-full bg-amber-700 hover:bg-amber-800 text-white text-sm h-11 md:h-12 font-light rounded-none transition-colors duration-300"
              onClick={() => window.location.href = 'https://wa.me/5551989889898?text=Quero%20saber%20mais%20sobre%20a%20mentoria%20em%20IA'}
            >
              INSCREVA-SE
            </Button>
            <Button
              size="lg"
              className="w-full bg-transparent hover:bg-stone-50 text-black text-sm h-11 md:h-12 font-light rounded-none border border-stone-300 transition-colors duration-300"
              onClick={() => scrollToSection('mentoring-authority')}
            >
              VER CREDENCIAIS
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-6 text-xs text-stone-600 font-light">
            <span className="flex items-center justify-center gap-1.5">
              <span className="text-amber-700">✓</span> 8+ Mentees/mês
            </span>
            <span className="hidden md:inline text-stone-300">|</span>
            <span className="flex items-center justify-center gap-1.5">
              <span className="text-amber-700">✓</span> 3 Meses
            </span>
            <span className="hidden md:inline text-stone-300">|</span>
            <span className="flex items-center justify-center gap-1.5">
              <span className="text-amber-700">✓</span> Garantia
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentoringHero;
