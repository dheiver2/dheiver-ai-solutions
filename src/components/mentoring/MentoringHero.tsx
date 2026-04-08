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
    <div className="w-full bg-white pt-10 md:pt-14 pb-10 md:pb-12">
      <div className="max-w-2xl mx-auto px-6 md:px-8">
        {/* Foto */}
        <div className="flex justify-center mb-10 md:mb-12">
          <div className="w-48 h-60 md:w-56 md:h-72 overflow-hidden">
            <img
              src="/dheiver-photo.png"
              alt="Dr. Dheiver Santos"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Headline */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-light text-black mb-1 leading-tight tracking-tight">
            Torne-se
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight tracking-tight">
            Engenheiro de <span className="text-amber-700">IA JR</span>
          </h1>
          <h2 className="text-lg md:text-xl font-light text-black mb-8">
            em 3 meses
          </h2>

          {/* Subheadline */}
          <p className="text-sm md:text-base text-black font-normal leading-relaxed mb-8 max-w-xl mx-auto">
            Mentoria 1-on-1 com PhD em IA<br className="hidden md:inline" />
            <span className="block md:inline md:mx-1">150+ projetos • 100+ artigos</span>
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-10 md:gap-16 mb-10 md:mb-12">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-amber-700 mb-2">100<span className="text-xl md:text-2xl">+</span></p>
              <p className="text-xs md:text-sm text-black font-medium tracking-wide uppercase">Artigos</p>
            </div>
            <div className="w-px bg-stone-300"></div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-amber-700 mb-2">150<span className="text-xl md:text-2xl">+</span></p>
              <p className="text-xs md:text-sm text-black font-medium tracking-wide uppercase">Projetos</p>
            </div>
            <div className="w-px bg-stone-300"></div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-amber-700 mb-2">40K<span className="text-xl md:text-2xl">+</span></p>
              <p className="text-xs md:text-sm text-black font-medium tracking-wide uppercase">Leitores</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-2 mb-8">
            <Button
              size="lg"
              className="w-full bg-amber-700 hover:bg-amber-800 text-white text-sm font-semibold h-11 md:h-12 rounded-none transition-colors duration-300"
              onClick={() => window.location.href = 'https://wa.me/5551989889898?text=Quero%20saber%20mais%20sobre%20a%20mentoria%20em%20IA'}
            >
              INSCREVA-SE AGORA
            </Button>
            <Button
              size="lg"
              className="w-full bg-transparent hover:bg-stone-50 text-black text-sm font-semibold h-11 md:h-12 rounded-none border border-stone-400 transition-colors duration-300"
              onClick={() => scrollToSection('mentoring-authority')}
            >
              VER CREDENCIAIS
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-6 text-xs md:text-sm text-black font-medium">
            <span className="flex items-center justify-center gap-1.5">
              <span className="text-amber-700">✓</span> 8+ Mentees/mês
            </span>
            <span className="hidden md:inline text-stone-400">|</span>
            <span className="flex items-center justify-center gap-1.5">
              <span className="text-amber-700">✓</span> 3 Meses
            </span>
            <span className="hidden md:inline text-stone-400">|</span>
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
