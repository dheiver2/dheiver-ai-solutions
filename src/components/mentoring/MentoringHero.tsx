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
    <div className="w-full bg-white pt-16 md:pt-32 pb-20 md:pb-40">
      <div className="max-w-2xl mx-auto px-6 md:px-8">
        {/* Foto - Elegância Minimalista */}
        <div className="flex justify-center mb-16 md:mb-24">
          <div className="w-56 h-72 md:w-72 md:h-96 overflow-hidden">
            <img
              src="/dheiver-photo.png"
              alt="Dr. Dheiver Santos"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Headline - Tipografia Premium */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-5xl md:text-6xl font-light text-black mb-2 leading-tight tracking-tight">
            Torne-se
          </h1>
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-8 leading-tight tracking-tight">
            Engenheiro de <span className="text-amber-700">IA JR</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-stone-700 mb-12">
            em 3 meses
          </h2>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-stone-600 font-light leading-relaxed mb-16 max-w-xl mx-auto">
            Mentoria 1-on-1 com PhD em IA<br className="hidden md:inline" />
            <span className="block md:inline md:mx-1">150+ projetos • 100+ artigos</span>
          </p>

          {/* Stats - Refinado */}
          <div className="flex justify-center gap-16 md:gap-24 mb-16 md:mb-20">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-light text-amber-700 mb-2">100<span className="text-2xl md:text-3xl">+</span></p>
              <p className="text-xs md:text-sm text-stone-600 font-light tracking-wide uppercase">Artigos</p>
            </div>
            <div className="w-px bg-stone-300"></div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-light text-amber-700 mb-2">150<span className="text-2xl md:text-3xl">+</span></p>
              <p className="text-xs md:text-sm text-stone-600 font-light tracking-wide uppercase">Projetos</p>
            </div>
            <div className="w-px bg-stone-300"></div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-light text-amber-700 mb-2">40K<span className="text-2xl md:text-3xl">+</span></p>
              <p className="text-xs md:text-sm text-stone-600 font-light tracking-wide uppercase">Leitores</p>
            </div>
          </div>

          {/* CTA Buttons - Minimalista Luxo */}
          <div className="flex flex-col gap-3 mb-12 md:mb-16">
            <Button
              size="lg"
              className="w-full bg-amber-700 hover:bg-amber-800 text-white text-sm md:text-base h-12 md:h-14 font-light rounded-none transition-colors duration-300"
              onClick={() => window.location.href = 'https://wa.me/5551989889898?text=Quero%20saber%20mais%20sobre%20a%20mentoria%20em%20IA'}
            >
              INSCREVA-SE
            </Button>
            <Button
              size="lg"
              className="w-full bg-transparent hover:bg-stone-50 text-black text-sm md:text-base h-12 md:h-14 font-light rounded-none border border-stone-300 transition-colors duration-300"
              onClick={() => scrollToSection('mentoring-authority')}
            >
              VER CREDENCIAIS
            </Button>
          </div>

          {/* Trust Badges - Elegância */}
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-xs md:text-sm text-stone-600 font-light">
            <span className="flex items-center justify-center gap-2">
              <span className="text-amber-700">✓</span> 8+ Mentees/mês
            </span>
            <span className="hidden md:inline text-stone-300">|</span>
            <span className="flex items-center justify-center gap-2">
              <span className="text-amber-700">✓</span> 3 Meses
            </span>
            <span className="hidden md:inline text-stone-300">|</span>
            <span className="flex items-center justify-center gap-2">
              <span className="text-amber-700">✓</span> Garantia
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentoringHero;
