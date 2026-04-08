import React from 'react';
import { Button } from '@/components/ui/button';

const MentoringCta = () => {
  return (
    <div className="w-full py-16 md:py-24 bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
        {/* Depoimentos */}
        <div className="mb-16">
          <div className="mb-8">
            <p className="text-sm text-yellow-600 font-bold mb-2">⭐⭐⭐⭐⭐</p>
            <p className="italic text-sm mb-3">
              "De zero a Junior ML Engineer em 7 meses. Transformador!"
            </p>
            <p className="font-bold text-sm">João Silva • Fintech, São Paulo</p>
          </div>
          <div>
            <p className="text-sm text-yellow-600 font-bold mb-2">⭐⭐⭐⭐⭐</p>
            <p className="italic text-sm mb-3">
              "Consegui rodar um projeto de Computer Vision que triplica produtividade."
            </p>
            <p className="font-bold text-sm">Marina Costa • AgriTech, MG</p>
          </div>
        </div>

        {/* Main CTA */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto para <span className="text-yellow-600">transformar sua carreira</span>?
        </h2>

        <p className="text-lg mb-2">
          Inscrições abertas para turmas iniciando<br />
          <span className="font-bold text-yellow-600">toda primeira segunda-feira do mês</span>
        </p>

        <p className="text-sm mb-8 text-gray-300">
          R$ 578/mês • Máximo 5 vagas • Garantia 14 dias
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3 mb-12">
          <Button
            size="lg"
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-black text-base md:text-lg h-14 md:h-16 font-bold rounded-none"
            onClick={() => window.location.href = 'https://wa.me/5551989889898?text=Quero%20me%20inscrever%20na%20mentoria%20em%20IA!'}
          >
            ME INSCREVER AGORA
          </Button>
          <Button
            size="lg"
            className="w-full bg-transparent text-yellow-600 border border-yellow-600 hover:bg-yellow-600/10 text-base md:text-lg h-14 md:h-16 font-bold rounded-none"
            onClick={() => window.location.href = 'https://wa.me/5551989889898?text=Quero%20agendar%20uma%20conversa%20sobre%20a%20mentoria'}
          >
            AGENDAR CONVERSA
          </Button>
        </div>

        {/* Steps */}
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-center gap-2">
            <span className="bg-yellow-600 text-black font-bold w-6 h-6 flex items-center justify-center">1</span>
            <span>Envie mensagem no WhatsApp</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="bg-yellow-600 text-black font-bold w-6 h-6 flex items-center justify-center">2</span>
            <span>Tenha uma conversa comigo</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="bg-yellow-600 text-black font-bold w-6 h-6 flex items-center justify-center">3</span>
            <span>Confirme sua inscrição</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="bg-yellow-600 text-black font-bold w-6 h-6 flex items-center justify-center">4</span>
            <span>Transforme sua carreira</span>
          </div>
        </div>

        {/* Contact Footer */}
        <div className="mt-12 pt-8">
          <p className="text-sm text-gray-400 mb-3">Dúvidas? Respondo em até 2 horas</p>
          <a
            href="https://wa.me/5551989889898"
            className="text-yellow-600 font-bold text-lg hover:text-yellow-500"
          >
            💬 (51) 98988-9898
          </a>
        </div>
      </div>
    </div>
  );
};

export default MentoringCta;
