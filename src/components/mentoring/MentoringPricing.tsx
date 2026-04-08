import React from 'react';
import { Button } from '@/components/ui/button';

const MentoringPricing = () => {
  return (
    <div className="w-full py-8 bg-stone-950 text-white">
      <div className="max-w-xl mx-auto px-5">
        <div className="text-center mb-6">
          <p className="text-amber-600 font-bold text-xs mb-3">INVESTIMENTO</p>
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            Quanto custa <span className="text-amber-600">mudar de vida</span>?
          </h2>
        </div>

        {/* Ancoragem */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center justify-between bg-stone-900 p-3">
            <p className="text-xs text-stone-300">Bootcamp presencial</p>
            <p className="text-sm text-stone-300 line-through">R$ 15.000+</p>
          </div>
          <div className="flex items-center justify-between bg-stone-900 p-3">
            <p className="text-xs text-stone-300">Pós-graduação em IA</p>
            <p className="text-sm text-stone-300 line-through">R$ 24.000+</p>
          </div>
          <div className="flex items-center justify-between bg-stone-900 p-3">
            <p className="text-xs text-stone-300">Mentoria individual no mercado</p>
            <p className="text-sm text-stone-300 line-through">R$ 3.000/mês</p>
          </div>
        </div>

        {/* Preço real */}
        <div className="border-2 border-amber-700 p-5 text-center mb-5">
          <p className="text-xs text-stone-300 mb-1">Mentoria Eng. de IA JR — 3 meses</p>
          <p className="text-xs text-stone-300 line-through mb-1">de R$ 3.525</p>
          <p className="text-4xl font-bold text-amber-600 mb-1">R$ 578<span className="text-lg">/mês</span></p>
          <p className="text-xs text-stone-300">Total: R$ 1.734 — ou 12x de R$ 156,90</p>
        </div>

        {/* O que está incluso */}
        <div className="mb-5">
          <p className="text-xs font-bold text-amber-600 mb-3">TUDO INCLUSO:</p>
          <div className="grid grid-cols-2 gap-2 text-xs text-stone-300">
            <p>✓ 12 sessões individuais</p>
            <p>✓ 5+ projetos portfólio</p>
            <p>✓ CV template para IA</p>
            <p>✓ Comunidade exclusiva</p>
            <p>✓ 3 mock interviews</p>
            <p>✓ Suporte via WhatsApp</p>
            <p>✓ Certificado de conclusão</p>
            <p>✓ Garantia de 14 dias</p>
          </div>
        </div>

        <Button
          size="lg"
          className="w-full bg-amber-700 hover:bg-amber-800 text-white text-sm font-bold h-12 rounded-none transition-colors duration-200"
          onClick={() => window.location.href = 'https://wa.me/5551989889898?text=Quero%20me%20inscrever%20na%20mentoria%20em%20IA!'}
        >
          GARANTIR MINHA VAGA →
        </Button>
        <p className="text-xs text-stone-300 text-center mt-2">Apenas 5 vagas por turma</p>
      </div>
    </div>
  );
};

export default MentoringPricing;
