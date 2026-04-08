import React, { useState } from 'react';

const MentoringFaq = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqs = [
    {
      id: '1',
      question: 'Qual é o nível de experiência necessário?',
      answer: 'Conhecimentos básicos de Python. Não precisa de experiência anterior em IA.'
    },
    {
      id: '2',
      question: 'Quanto tempo preciso dedicar?',
      answer: '8-10 horas/semana: 2-3h aula + 5-7h projetos. Você organiza seu próprio tempo.'
    },
    {
      id: '3',
      question: 'Posso assistir as aulas gravadas?',
      answer: 'Sim! Todas as sessões são gravadas. Acesso lifetime ao material.'
    },
    {
      id: '4',
      question: 'E se eu quiser parar?',
      answer: 'Garantia de 14 dias com reembolso integral. Após, reembolso proporcional.'
    },
    {
      id: '5',
      question: 'Os projetos são reais?',
      answer: 'Sim! Datasets verdadeiros e desafios reais. Portfólio pronto para recrutadores.'
    },
    {
      id: '6',
      question: 'Tem auxílio para conseguir emprego?',
      answer: 'Sim! Prep. entrevistas, revisão CV, conexões com empresas do network.'
    }
  ];

  return (
    <div className="w-full py-12 md:py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-black mb-10 md:mb-14 text-center tracking-tight">
          Dúvidas Frequentes
        </h2>

        <div className="space-y-2">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b border-stone-200">
              <button
                className="w-full py-4 flex items-center justify-between font-light text-left text-black hover:text-stone-700 transition-colors duration-300"
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              >
                <span className="text-sm md:text-base">{faq.question}</span>
                <span className={`text-amber-700 transition-transform duration-300 text-lg ${openId === faq.id ? 'rotate-180' : ''}`}>
                  ↓
                </span>
              </button>
              {openId === faq.id && (
                <div className="pb-4 text-xs md:text-sm font-light text-stone-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-10 md:mt-12 pt-8 md:pt-10 border-t border-stone-200">
          <p className="text-center text-amber-700 font-light text-xs mb-2 tracking-wide uppercase">Dúvidas?</p>
          <p className="text-center text-stone-600 font-light text-xs mb-4">Respondo em até 2h</p>
          <div className="flex justify-center">
            <a
              href="https://wa.me/5551989889898"
              className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 font-light text-xs transition-colors duration-300 uppercase tracking-wide"
            >
              WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentoringFaq;
