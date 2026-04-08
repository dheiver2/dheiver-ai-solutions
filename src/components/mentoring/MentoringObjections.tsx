import React from 'react';

const MentoringObjections = () => {
  const objections = [
    {
      objection: '"Não tenho experiência com IA"',
      answer: 'Perfeito. A mentoria começa do zero. 70% dos mentorados nunca tinham tocado em Machine Learning antes.',
    },
    {
      objection: '"R$ 578/mês é caro"',
      answer: 'Um engenheiro de IA JR ganha R$ 8.000-15.000/mês. Você recupera o investimento total no primeiro salário.',
    },
    {
      objection: '"Não tenho tempo"',
      answer: 'São 1h por semana de sessão + 3-4h de prática. Menos que assistir uma série na Netflix.',
    },
    {
      objection: '"Existem cursos gratuitos"',
      answer: 'Cursos ensinam teoria. Mentoria entrega portfólio, networking e preparação para entrevistas reais.',
    },
    {
      objection: '"E se não funcionar?"',
      answer: 'Garantia incondicional de 14 dias. Se não gostar, devolvemos 100% do valor sem perguntas.',
    },
  ];

  return (
    <div className="w-full py-8 bg-white">
      <div className="max-w-xl mx-auto px-5">
        <div className="text-center mb-6">
          <p className="text-amber-700 font-bold text-xs mb-3">AINDA TEM DÚVIDAS?</p>
          <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight">
            Vou ser <span className="text-amber-700">brutalmente honesto</span>
          </h2>
        </div>

        <div className="space-y-3">
          {objections.map((item, i) => (
            <div key={i} className="border-l-2 border-amber-700 pl-4 py-2">
              <p className="text-sm font-bold text-black mb-1">{item.objection}</p>
              <p className="text-xs text-stone-700 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentoringObjections;
