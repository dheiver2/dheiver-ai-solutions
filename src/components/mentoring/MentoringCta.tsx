import React from 'react';
import { Button } from '@/components/ui/button';

const MentoringCta = () => {
  return (
    <div className="w-full py-10 md:py-14 bg-stone-950 text-white">
      <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
        {/* Depoimentos */}
        <div className="mb-10 md:mb-12">
          <div className="mb-6 md:mb-8">
            <p className="text-amber-700 font-bold text-xs mb-2">⭐⭐⭐⭐⭐</p>
            <p className="font-normal text-sm md:text-base text-white mb-3">
              "De zero a Junior ML Engineer em 7 meses."
            </p>
            <p className="font-normal text-xs text-white">João Silva • Fintech, SP</p>
          </div>
          <div>
            <p className="text-amber-700 font-bold text-xs mb-2">⭐⭐⭐⭐⭐</p>
            <p className="font-normal text-sm md:text-base text-white mb-3">
              "Projeto que triplica produtividade da empresa."
            </p>
            <p className="font-normal text-xs text-white">Marina Costa • AgriTech, MG</p>
          </div>
        </div>

        {/* Divisor */}
        <div className="h-px bg-stone-700 mb-8 md:mb-10"></div>

        {/* Main CTA */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Pronto para transformar<br />
          <span className="text-amber-700">sua carreira</span>?
        </h2>

        <p className="text-xs md:text-sm text-white font-normal mb-2">
          Inscrições abertas
        </p>
        <p className="text-sm md:text-base text-amber-700 font-bold mb-6 md:mb-8">
          toda primeira segunda do mês
        </p>

        <p className="text-xs text-white font-normal mb-6 md:mb-8">
          R$ 578/mês • 5 vagas • Garantia 14 dias
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-2 mb-8 md:mb-10">
          <Button
            size="lg"
            className="w-full bg-amber-700 hover:bg-amber-800 text-white text-xs md:text-sm font-semibold h-11 md:h-12 rounded-none transition-colors duration-300"
            onClick={() => window.location.href = 'https://wa.me/5551989889898?text=Quero%20me%20inscrever%20na%20mentoria%20em%20IA!'}
          >
            ME INSCREVER
          </Button>
          <Button
            size="lg"
            className="w-full bg-transparent hover:bg-stone-900 text-amber-700 border-2 border-amber-700 text-xs md:text-sm font-semibold h-11 md:h-12 rounded-none transition-colors duration-300"
            onClick={() => window.location.href = 'https://wa.me/5551989889898?text=Quero%20agendar%20uma%20conversa%20sobre%20a%20mentoria'}
          >
            AGENDAR
          </Button>
        </div>

        {/* Steps */}
        <div className="space-y-2.5 text-xs font-normal text-white mb-8 md:mb-10">
          <div className="flex items-center justify-center gap-2">
            <span className="bg-amber-700 text-stone-950 w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold">1</span>
            <span>WhatsApp</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="bg-amber-700 text-stone-950 w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold">2</span>
            <span>Conversa</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="bg-amber-700 text-stone-950 w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold">3</span>
            <span>Inscrição</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="bg-amber-700 text-stone-950 w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold">4</span>
            <span>Transforme</span>
          </div>
        </div>

        {/* Contact Footer */}
        <div className="pt-6 md:pt-8 border-t border-stone-700">
          <a
            href="https://wa.me/5551989889898"
            className="text-amber-700 font-bold text-sm hover:text-amber-600 transition-colors duration-300"
          >
            💬 (51) 98988-9898
          </a>
        </div>
      </div>
    </div>
  );
};

export default MentoringCta;
