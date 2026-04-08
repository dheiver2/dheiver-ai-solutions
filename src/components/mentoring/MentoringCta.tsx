import React from 'react';
import { Button } from '@/components/ui/button';

const MentoringCta = () => {
  return (
    <div className="w-full py-20 md:py-40 bg-stone-950 text-white">
      <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
        {/* Depoimentos */}
        <div className="mb-16 md:mb-24">
          <div className="mb-12 md:mb-16">
            <p className="text-amber-700 font-light text-xs mb-3 tracking-wide uppercase">⭐⭐⭐⭐⭐</p>
            <p className="font-light text-base md:text-lg text-stone-300 mb-4">
              "De zero a Junior ML Engineer em 7 meses. Transformador!"
            </p>
            <p className="font-light text-sm text-stone-500">João Silva • Fintech, São Paulo</p>
          </div>
          <div>
            <p className="text-amber-700 font-light text-xs mb-3 tracking-wide uppercase">⭐⭐⭐⭐⭐</p>
            <p className="font-light text-base md:text-lg text-stone-300 mb-4">
              "Consegui rodar um projeto de Computer Vision que triplica produtividade."
            </p>
            <p className="font-light text-sm text-stone-500">Marina Costa • AgriTech, MG</p>
          </div>
        </div>

        {/* Divisor */}
        <div className="h-px bg-stone-800 mb-16 md:mb-24"></div>

        {/* Main CTA */}
        <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight tracking-tight">
          Pronto para<br />
          <span className="text-amber-700">transformar sua carreira</span>?
        </h2>

        <p className="text-sm md:text-base text-stone-400 font-light mb-4">
          Inscrições abertas para turmas iniciando
        </p>
        <p className="text-base md:text-lg text-amber-700 font-light mb-12 md:mb-16">
          toda primeira segunda-feira do mês
        </p>

        <p className="text-xs text-stone-500 font-light tracking-wide uppercase mb-12 md:mb-16">
          R$ 578/mês • Máximo 5 vagas • Garantia 14 dias
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3 mb-16 md:mb-20">
          <Button
            size="lg"
            className="w-full bg-amber-700 hover:bg-amber-800 text-white text-sm md:text-base h-12 md:h-14 font-light rounded-none transition-colors duration-300"
            onClick={() => window.location.href = 'https://wa.me/5551989889898?text=Quero%20me%20inscrever%20na%20mentoria%20em%20IA!'}
          >
            ME INSCREVER AGORA
          </Button>
          <Button
            size="lg"
            className="w-full bg-transparent hover:bg-stone-900 text-amber-700 border border-stone-700 text-sm md:text-base h-12 md:h-14 font-light rounded-none transition-colors duration-300"
            onClick={() => window.location.href = 'https://wa.me/5551989889898?text=Quero%20agendar%20uma%20conversa%20sobre%20a%20mentoria'}
          >
            AGENDAR CONVERSA
          </Button>
        </div>

        {/* Steps */}
        <div className="space-y-4 text-sm font-light text-stone-400">
          <div className="flex items-center justify-center gap-3">
            <span className="bg-amber-700 text-stone-950 w-6 h-6 flex items-center justify-center rounded-full text-xs font-medium">1</span>
            <span>Envie mensagem no WhatsApp</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="bg-amber-700 text-stone-950 w-6 h-6 flex items-center justify-center rounded-full text-xs font-medium">2</span>
            <span>Tenha uma conversa comigo</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="bg-amber-700 text-stone-950 w-6 h-6 flex items-center justify-center rounded-full text-xs font-medium">3</span>
            <span>Confirme sua inscrição</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="bg-amber-700 text-stone-950 w-6 h-6 flex items-center justify-center rounded-full text-xs font-medium">4</span>
            <span>Transforme sua carreira</span>
          </div>
        </div>

        {/* Contact Footer */}
        <div className="mt-16 md:mt-20 pt-12 md:pt-16 border-t border-stone-800">
          <p className="text-xs text-stone-500 mb-3 font-light tracking-wide uppercase">Dúvidas?</p>
          <a
            href="https://wa.me/5551989889898"
            className="text-amber-700 font-light text-base hover:text-amber-600 transition-colors duration-300"
          >
            💬 (51) 98988-9898
          </a>
        </div>
      </div>
    </div>
  );
};

export default MentoringCta;
