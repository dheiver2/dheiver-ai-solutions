import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const MentoringFaq = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqs = [
    {
      id: '1',
      question: 'Qual é o nível de experiência necessário?',
      answer: 'Conhecimentos básicos de Python. Se nunca programou, fazemos onboarding rápido. Não precisa de experiência anterior em IA.'
    },
    {
      id: '2',
      question: 'Quanto tempo preciso dedicar por semana?',
      answer: '8-10 horas: 2-3 horas na sessão semanal + 5-7 horas em projetos práticos. Você organiza seu próprio tempo.'
    },
    {
      id: '3',
      question: 'Posso assistir as aulas gravadas?',
      answer: 'Sim! Todas as sessões são gravadas. Você tem acesso lifetime ao material. Recomendamos participar ao vivo.'
    },
    {
      id: '4',
      question: 'E se eu quiser parar?',
      answer: 'Garantia de 14 dias com reembolso integral. Após isso, você pode sair a qualquer tempo com reembolso proporcional.'
    },
    {
      id: '5',
      question: 'Os projetos são reais?',
      answer: 'Sim! Trabalha com datasets verdadeiros e desafios reais. Ao final, você terá portfólio que impressiona recrutadores.'
    },
    {
      id: '6',
      question: 'Tem auxílio para conseguir emprego?',
      answer: 'Sim! Preparação para entrevistas técnicas, revisão de CV, conexões com empresas do nosso network.'
    }
  ];

  return (
    <div className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
          Perguntas Frequentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-black text-white">
              <button
                className="w-full px-6 py-4 flex items-center justify-between font-bold text-left hover:bg-gray-900 transition"
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-yellow-600 transition ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openId === faq.id && (
                <div className="px-6 py-4 bg-gray-900 text-sm border-t border-yellow-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-12 bg-black p-8 text-white text-center">
          <p className="font-bold text-yellow-600 mb-3">Dúvidas?</p>
          <p className="mb-4 text-sm">Respondo em até 2 horas</p>
          <a
            href="https://wa.me/5551989889898"
            className="inline-block bg-yellow-600 text-black px-8 py-3 font-bold hover:bg-yellow-700"
          >
            CHAMAR NO WHATSAPP
          </a>
        </div>
      </div>
    </div>
  );
};

export default MentoringFaq;
