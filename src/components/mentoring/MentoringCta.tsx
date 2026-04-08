import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const MentoringCta = () => {
  return (
    <div className="w-full py-12 md:py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        {/* Testimoniäls simulados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-white/95 border-none">
            <CardContent className="pt-6">
              <div className="flex gap-2 mb-3">
                {'⭐⭐⭐⭐⭐'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "Saí de 0 em IA para conseguir uma posição como Junior ML Engineer em 7 meses. O programa foi transformador!"
              </p>
              <p className="font-bold text-gray-900">João Silva</p>
              <p className="text-sm text-gray-600">Empresa de Fintech, São Paulo</p>
            </CardContent>
          </Card>

          <Card className="bg-white/95 border-none">
            <CardContent className="pt-6">
              <div className="flex gap-2 mb-3">
                {'⭐⭐⭐⭐⭐'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "Depois da mentoria consegui rodar um projeto de Computer Vision que triplica a produtividade da nossa startup."
              </p>
              <p className="font-bold text-gray-900">Marina Costa</p>
              <p className="text-sm text-gray-600">Startup de AgriTech, Minas Gerais</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Principal */}
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar sua carreira em 3 meses?
          </h2>
          <p className="text-lg md:text-xl mb-4 opacity-90">
            Inscrições abertas para turmas iniciando <strong>toda primeira segunda-feira do mês</strong>
          </p>
          <p className="text-base md:text-lg mb-8 opacity-80">
            R$ 1.578/mês • Apenas 5 vagas por turma • Garantia de 14 dias de devolução
          </p>

          <div className="flex flex-col gap-3 md:flex-row md:justify-center">
            <Button
              size="lg"
              className="w-full md:w-auto bg-white text-blue-600 hover:bg-gray-100 text-base md:text-lg h-14 md:h-16 font-bold"
              onClick={() => window.location.href = 'https://wa.me/5551989889898?text=Quero%20me%20inscrever%20na%20mentoria%20em%20IA!'}
            >
              🚀 Me Inscrever Agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full md:w-auto text-white border-white hover:bg-white/10 text-base md:text-lg h-14 md:h-16"
              onClick={() => window.location.href = 'https://wa.me/5551989889898?text=Quero%20agendar%20uma%20conversa%20sobre%20a%20mentoria'}
            >
              📞 Agendar Conversa
            </Button>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-6 md:p-8 text-white">
          <h3 className="text-xl font-bold mb-4">Próximos Passos:</h3>
          <ol className="space-y-3 text-lg">
            <li className="flex gap-3">
              <span className="font-bold bg-white/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</span>
              <span>Envie mensagem no WhatsApp</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold bg-white/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</span>
              <span>Tenha uma conversa com Dr. Dheiver</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold bg-white/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</span>
              <span>Confirme sua inscrição</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold bg-white/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</span>
              <span>Comece a transformar sua carreira em IA</span>
            </li>
          </ol>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-12 text-white">
          <p className="text-sm opacity-80 mb-6">
            Dúvidas? Respondo em até 2 horas!
          </p>
          <a
            href="https://wa.me/5551989889898"
            className="inline-block text-green-400 font-bold text-lg hover:text-green-300 transition"
          >
            💬 (51) 98988-9898
          </a>
        </div>
      </div>
    </div>
  );
};

export default MentoringCta;
