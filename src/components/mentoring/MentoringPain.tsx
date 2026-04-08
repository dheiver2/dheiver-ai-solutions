import React from 'react';

const MentoringPain = () => {
  return (
    <div className="w-full py-8 bg-stone-950 text-white">
      <div className="max-w-xl mx-auto px-5 text-center">
        <p className="text-amber-600 font-bold text-xs mb-4">A VERDADE QUE NINGUÉM TE CONTA</p>

        <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
          Enquanto você pensa,<br />
          <span className="text-amber-600">alguém está tomando sua vaga.</span>
        </h2>

        <div className="space-y-4 text-sm text-left mb-6">
          <div className="flex items-start gap-3">
            <span className="text-red-500 font-bold text-lg">✗</span>
            <p>Você assiste tutoriais no YouTube há meses e <strong>continua no mesmo lugar</strong></p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-500 font-bold text-lg">✗</span>
            <p>Vê vagas de IA pagando <strong>R$ 8.000 a R$ 25.000</strong> e não consegue aplicar</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-500 font-bold text-lg">✗</span>
            <p>Não tem portfólio, não tem experiência, <strong>não sabe por onde começar</strong></p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-500 font-bold text-lg">✗</span>
            <p>Bootcamps cobram <strong>R$ 15.000+</strong> e não te dão mentoria individual</p>
          </div>
        </div>

        <div className="bg-amber-700 p-4 mb-4">
          <p className="text-sm font-bold text-white">
            O mercado de IA no Brasil cresce 35% ao ano.<br />
            Cada mês que passa, mais gente entra antes de você.
          </p>
        </div>

        <p className="text-xs text-stone-400">
          Se você não agir agora, daqui 3 meses vai estar exatamente igual.
        </p>
      </div>
    </div>
  );
};

export default MentoringPain;
