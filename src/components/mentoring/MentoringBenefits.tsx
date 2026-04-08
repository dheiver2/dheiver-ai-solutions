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
    <div className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
          O que você vai receber
        </h2>

        {/* Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="text-black flex items-start gap-3">
              <span className="text-yellow-600 font-bold text-xl mt-1">✓</span>
              <span className="font-bold">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Curriculum */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-black mb-8 text-center">Estrutura do Programa</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {curriculum.map((phase, idx) => (
              <div key={idx} className="bg-black p-6 text-white">
                <p className="text-yellow-600 font-bold mb-2">{phase.month}</p>
                <h4 className="text-lg font-bold mb-4">{phase.title}</h4>
                <ul className="space-y-2 text-sm">
                  {phase.items.map((item, itemIdx) => (
                    <li key={itemIdx}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black">
          <div>
            <p className="font-bold text-yellow-600 mb-3">FORMATO</p>
            <p className="text-sm mb-2">• 1 encontro por semana</p>
            <p className="text-sm mb-2">• 3 meses total</p>
            <p className="text-sm mb-2">• Online ao vivo + gravado</p>
            <p className="text-sm">• Máximo 5 pessoas</p>
          </div>
          <div>
            <p className="font-bold text-yellow-600 mb-3">INVESTIMENTO</p>
            <p className="text-sm mb-2 font-bold">R$ 578/mês</p>
            <p className="text-sm mb-2">Total: R$ 1.734</p>
            <p className="text-sm mb-2">• Parcelas até 3x</p>
            <p className="text-sm">• Garantia 14 dias</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentoringBenefits;
