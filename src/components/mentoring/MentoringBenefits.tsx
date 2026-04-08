import React from 'react';

const MentoringBenefits = () => {
  const benefits = [
    '5+ projetos reais',
    'Mentoria 1-on-1 semanal',
    'Código em produção',
    'Network profissional',
    'Prep. entrevistas',
    'Certificado'
  ];

  const curriculum = [
    {
      month: 'Mês 1',
      title: 'Fundamentos',
      items: ['ML Fundamentals', 'Deep Learning', 'Classificador']
    },
    {
      month: 'Mês 2',
      title: 'GenAI & LLMs',
      items: ['LLMs Avançado', 'Fine-tuning', 'Chatbot RAG']
    },
    {
      month: 'Mês 3',
      title: 'Produção',
      items: ['MLOps', 'Cloud Deploy', 'Projeto Final']
    }
  ];

  return (
    <div className="w-full py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-black mb-10 md:mb-14 text-center tracking-tight">
          O que você recebe
        </h2>

        {/* Benefícios */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-14">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="text-amber-700 font-light text-sm mt-0.5">✓</span>
              <span className="text-xs md:text-sm font-light text-stone-700">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Divisor */}
        <div className="h-px bg-stone-200 mb-10 md:mb-14"></div>

        {/* Curriculum */}
        <div className="mb-10 md:mb-14">
          <h3 className="text-base font-light text-black mb-6 text-center tracking-tight">
            Programa
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {curriculum.map((phase, idx) => (
              <div key={idx} className="bg-stone-950 p-5 md:p-6 transition-colors duration-300 hover:bg-stone-900">
                <p className="text-amber-700 font-light text-xs mb-2 tracking-wide uppercase">{phase.month}</p>
                <h4 className="text-base font-light text-white mb-4">{phase.title}</h4>
                <ul className="space-y-1.5">
                  {phase.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-xs font-light text-stone-300 flex items-start gap-2">
                      <span className="text-amber-700 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <div>
            <p className="text-amber-700 font-light text-xs mb-4 tracking-wide uppercase">Formato</p>
            <ul className="space-y-2 text-xs font-light text-stone-700">
              <li>1 encontro/semana</li>
              <li>3 meses total</li>
              <li>Online ao vivo + gravado</li>
              <li>Máximo 5 pessoas</li>
            </ul>
          </div>
          <div>
            <p className="text-amber-700 font-light text-xs mb-4 tracking-wide uppercase">Investimento</p>
            <p className="text-2xl font-light text-black mb-2">R$ 578<span className="text-sm text-stone-600">/mês</span></p>
            <ul className="space-y-2 text-xs font-light text-stone-700">
              <li>Total: R$ 1.734</li>
              <li>Até 3x sem juros</li>
              <li>Garantia 14 dias</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentoringBenefits;
