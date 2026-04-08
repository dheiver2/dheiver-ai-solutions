import React, { useState } from 'react';

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
    <div className="w-full py-20 md:py-40 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-light text-black mb-20 md:mb-32 text-center tracking-tight">
          Perguntas Frequentes
        </h2>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b border-stone-200">
              <button
                className="w-full py-6 flex items-center justify-between font-light text-left text-black hover:text-stone-700 transition-colors duration-300"
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              >
                <span className="text-base md:text-lg">{faq.question}</span>
                <span className={`text-amber-700 transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''}`}>
                  ↓
                </span>
              </button>
              {openId === faq.id && (
                <div className="pb-6 text-sm font-light text-stone-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-20 md:mt-32 pt-12 md:pt-16 border-t border-stone-200">
          <p className="text-center text-amber-700 font-light text-sm mb-3 tracking-wide uppercase">Dúvidas?</p>
          <p className="text-center text-stone-600 font-light text-sm mb-6">Respondo em até 2 horas</p>
          <div className="flex justify-center">
            <a
              href="https://wa.me/5551989889898"
              className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 font-light text-sm transition-colors duration-300"
            >
              CHAMAR NO WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentoringFaq;
