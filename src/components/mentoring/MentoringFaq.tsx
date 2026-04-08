import React, { useState } from 'react';

const MentoringFaq = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqs = [
    {
      id: '1',
      question: 'Qual nível de experiência necessário?',
      answer: 'Conhecimentos básicos de Python. Não precisa de experiência anterior em IA.'
    },
    {
      id: '2',
      question: 'Quanto tempo dedicar por semana?',
      answer: '8-10 horas: 2-3h aula + 5-7h projetos. Você organiza seu próprio tempo.'
    },
    {
      id: '3',
      question: 'Posso assistir as aulas gravadas?',
      answer: 'Sim! Todas gravadas com acesso lifetime. Recomendamos participar ao vivo.'
    },
    {
      id: '4',
      question: 'E se eu quiser parar?',
      answer: 'Garantia de 14 dias com reembolso integral. Após, reembolso proporcional.'
    },
    {
      id: '5',
      question: 'Os projetos são reais?',
      answer: 'Sim! Datasets verdadeiros. Portfólio pronto para recrutadores.'
    },
    {
      id: '6',
      question: 'Tem auxílio para emprego?',
      answer: 'Sim! Prep. entrevistas, revisão CV, conexões com empresas.'
    }
  ];

  return (
    <div className="w-full py-8 bg-white">
      <div className="max-w-3xl mx-auto px-5">
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-8 text-center">
          Dúvidas Frequentes
        </h2>

        <div>
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b border-stone-400">
              <button
                className="w-full py-3 flex items-center justify-between font-bold text-left text-black text-sm hover:text-stone-700 transition-colors duration-200"
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              >
                <span>{faq.question}</span>
                <span className={`text-amber-700 font-bold text-base ml-4 transition-transform duration-200 ${openId === faq.id ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              {openId === faq.id && (
                <div className="pb-3 text-sm text-stone-800 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-8 text-center">
          <p className="text-amber-700 font-bold text-xs mb-1">DÚVIDAS?</p>
          <p className="text-black text-sm mb-3">Respondo em até 2h</p>
          <a
            href="https://wa.me/5551989889898"
            className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-6 py-2.5 font-bold text-xs transition-colors duration-200"
          >
            WHATSAPP
          </a>
        </div>
      </div>
    </div>
  );
};

export default MentoringFaq;
