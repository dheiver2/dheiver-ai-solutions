import React from 'react';

const MentoringBenefits = () => {
  const benefits = [
    'Curriculum com 5+ projetos reais',
    'Mentoria 1-on-1 semanal',
    'Acesso a código em produção',
    'Network profissional',
    'Preparação para entrevistas',
    'Certificado de conclusão'
  ];

  const curriculum = [
    {
      month: 'Mês 1',
      title: 'Fundamentos',
      items: ['ML Fundamentals', 'Deep Learning', 'Projeto: Classificador']
    },
    {
      month: 'Mês 2',
      title: 'GenAI & LLMs',
      items: ['LLMs Avançado', 'Fine-tuning', 'Projeto: Chatbot RAG']
    },
    {
      month: 'Mês 3',
      title: 'Produção',
      items: ['MLOps', 'Cloud Deploy', 'Projeto Final']
    }
  ];

  return (
    <div className="w-full py-20 md:py-40 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-light text-black mb-20 md:mb-32 text-center tracking-tight">
          O que você vai receber
        </h2>

        {/* Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20 md:mb-32">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className="text-amber-700 font-light mt-0.5">✓</span>
              <span className="text-sm font-light text-stone-700">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Divisor */}
        <div className="h-px bg-stone-200 mb-20 md:mb-32"></div>

        {/* Curriculum */}
        <div className="mb-20 md:mb-32">
          <h3 className="text-lg font-light text-black mb-12 md:mb-16 text-center tracking-tight">
            Estrutura do Programa
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {curriculum.map((phase, idx) => (
              <div key={idx} className="bg-stone-950 p-6 md:p-8 transition-colors duration-300 hover:bg-stone-900">
                <p className="text-amber-700 font-light text-xs mb-3 tracking-wide uppercase">{phase.month}</p>
                <h4 className="text-lg font-light text-white mb-6">{phase.title}</h4>
                <ul className="space-y-2">
                  {phase.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-sm font-light text-stone-300 flex items-start gap-2">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-amber-700 font-light text-xs mb-6 tracking-wide uppercase">Formato</p>
            <ul className="space-y-3 text-sm font-light text-stone-700">
              <li>1 encontro por semana</li>
              <li>3 meses total</li>
              <li>Online ao vivo + gravado</li>
              <li>Máximo 5 pessoas</li>
            </ul>
          </div>
          <div>
            <p className="text-amber-700 font-light text-xs mb-6 tracking-wide uppercase">Investimento</p>
            <p className="text-3xl font-light text-black mb-2">R$ 578<span className="text-lg text-stone-600">/mês</span></p>
            <ul className="space-y-3 text-sm font-light text-stone-700">
              <li>Total: R$ 1.734</li>
              <li>Parcelas até 3x</li>
              <li>Garantia 14 dias</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentoringBenefits;
