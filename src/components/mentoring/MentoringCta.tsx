import React from 'react';
import { Button } from '@/components/ui/button';

const MentoringCta = () => {
  return (
    <div className="w-full py-8 bg-stone-950 text-white">
      <div className="max-w-3xl mx-auto px-5 text-center">
        {/* Depoimentos */}
        <div className="mb-8">
          <div className="mb-6">
            <p className="text-amber-700 font-bold text-xs mb-1">⭐⭐⭐⭐⭐</p>
            <p className="text-sm text-white mb-2">
              "De zero a Junior ML Engineer em 7 meses."
            </p>
            <p className="text-xs text-stone-400 font-bold">João Silva • Fintech, SP</p>
          </div>
          <div>
            <p className="text-amber-700 font-bold text-xs mb-1">⭐⭐⭐⭐⭐</p>
            <p className="text-sm text-white mb-2">
              "Projeto que triplica produtividade da empresa."
            </p>
            <p className="text-xs text-stone-400 font-bold">Marina Costa • AgriTech, MG</p>
          </div>
        </div>

        {/* Divisor */}
        <div className="h-px bg-stone-700 mb-8"></div>

        {/* Main CTA */}
        <h2 className="text-2xl md:text-4xl font-bold mb-3 leading-tight text-white">
          Pronto para transformar<br />
          <span className="text-amber-600">sua carreira</span>?
        </h2>

        <p className="text-sm text-white mb-1">Inscrições abertas</p>
        <p className="text-sm text-amber-700 font-bold mb-4">
          toda primeira segunda do mês
        </p>

        <p className="text-xs text-stone-400 font-bold mb-6">
          R$ 578/mês • 5 vagas • Garantia 14 dias
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-2 mb-6">
          <Button
            size="lg"
            className="w-full bg-amber-700 hover:bg-amber-800 text-white text-sm font-bold h-12 rounded-none transition-colors duration-200"
            onClick={() => window.location.href = 'https://wa.me/5551989889898?text=Quero%20me%20inscrever%20na%20mentoria%20em%20IA!'}
          >
            ME INSCREVER
          </Button>
          <Button
            size="lg"
            className="w-full bg-transparent hover:bg-stone-900 text-amber-700 border-2 border-amber-700 text-sm font-bold h-12 rounded-none transition-colors duration-200"
            onClick={() => window.location.href = 'https://wa.me/5551989889898?text=Quero%20agendar%20uma%20conversa%20sobre%20a%20mentoria'}
          >
            AGENDAR
          </Button>
        </div>

        {/* Steps - horizontal */}
        <div className="flex justify-center gap-6 text-xs text-stone-400 font-bold mb-6">
          <div className="flex items-center gap-1.5">
            <span className="bg-amber-700 text-stone-950 w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold">1</span>
            <span>WhatsApp</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="bg-amber-700 text-stone-950 w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold">2</span>
            <span>Conversa</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="bg-amber-700 text-stone-950 w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold">3</span>
            <span>Inscrição</span>
          </div>
        </div>

        {/* Contact Footer */}
        <div className="pt-5 border-t border-stone-700">
          <a
            href="https://wa.me/5551989889898"
            className="text-amber-700 font-bold text-sm hover:text-amber-600 transition-colors duration-200"
          >
            💬 (51) 98988-9898
          </a>
        </div>
      </div>
    </div>
  );
};

export default MentoringCta;
