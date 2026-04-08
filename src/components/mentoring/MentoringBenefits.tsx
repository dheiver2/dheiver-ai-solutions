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
    <div className="w-full py-10 md:py-14 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-10 md:mb-12 text-center">
          O que você recebe
        </h2>

        {/* Benefícios */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="text-amber-700 font-bold text-sm mt-0.5">✓</span>
              <span className="text-xs md:text-sm font-normal text-black">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Divisor */}
        <div className="h-px bg-stone-300 mb-10 md:mb-12"></div>

        {/* Curriculum */}
        <div className="mb-10 md:mb-12">
          <h3 className="text-base font-bold text-black mb-6 text-center">
            Programa
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {curriculum.map((phase, idx) => (
              <div key={idx} className="bg-stone-950 p-5 md:p-6 transition-colors duration-300 hover:bg-stone-900">
                <p className="text-amber-700 font-bold text-xs mb-3">
                  {phase.month}
                </p>
                <h4 className="text-base font-bold text-white mb-4">{phase.title}</h4>
                <ul className="space-y-2">
                  {phase.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-xs font-normal text-white flex items-start gap-2">
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
            <p className="text-amber-700 font-bold text-xs mb-4">FORMATO</p>
            <ul className="space-y-2 text-xs font-normal text-black">
              <li>1 encontro/semana</li>
              <li>3 meses total</li>
              <li>Online ao vivo + gravado</li>
              <li>Máximo 5 pessoas</li>
            </ul>
          </div>
          <div>
            <p className="text-amber-700 font-bold text-xs mb-4">INVESTIMENTO</p>
            <p className="text-2xl font-bold text-black mb-2">R$ 578<span className="text-sm text-stone-700 font-normal">/mês</span></p>
            <ul className="space-y-2 text-xs font-normal text-black">
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
