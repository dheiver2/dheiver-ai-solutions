import React from 'react';

const MentoringBonus = () => {
  const bonuses = [
    {
      number: '01',
      title: 'Template de CV para IA',
      description: 'Modelo usado por engenheiros contratados em Big Techs brasileiras. Formatação ATS-friendly.',
      value: 'R$ 297',
    },
    {
      number: '02',
      title: 'Acesso à Comunidade Privada',
      description: 'Grupo exclusivo com mentorados, vagas em primeira mão e networking direto com profissionais de IA.',
      value: 'R$ 497',
    },
    {
      number: '03',
      title: '3 Entrevistas Simuladas',
      description: 'Mock interviews reais com feedback detalhado. O mesmo processo usado por Santander e Petrobras.',
      value: 'R$ 997',
    },
  ];

  return (
    <div className="w-full py-8 bg-white">
      <div className="max-w-xl mx-auto px-5">
        <div className="text-center mb-6">
          <p className="text-amber-800 font-bold text-xs mb-3">BÔNUS EXCLUSIVOS</p>
          <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight">
            Além da mentoria, você leva<br />
            <span className="text-amber-800">R$ 1.791 em bônus</span>
          </h2>
        </div>

        <div className="space-y-3">
          {bonuses.map((bonus) => (
            <div key={bonus.number} className="border-2 border-stone-200 p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="bg-amber-700 text-white text-xs font-bold w-6 h-6 flex items-center justify-center">
                    {bonus.number}
                  </span>
                  <p className="text-sm font-bold text-black">{bonus.title}</p>
                </div>
                <p className="text-xs text-stone-600 line-through">{bonus.value}</p>
              </div>
              <p className="text-xs text-stone-700 leading-relaxed">{bonus.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <p className="text-xs text-stone-600">Todos os bônus estão <span className="text-amber-800 font-bold">inclusos gratuitamente</span> na mentoria.</p>
        </div>
      </div>
    </div>
  );
};

export default MentoringBonus;
