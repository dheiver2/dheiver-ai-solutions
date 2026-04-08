import React from 'react';

const MentoringFuture = () => {
  return (
    <div className="w-full py-8 bg-white">
      <div className="max-w-xl mx-auto px-5">
        {/* Projeção de Futuro - Erico */}
        <div className="text-center mb-8">
          <p className="text-amber-800 font-bold text-xs mb-4">DAQUI 90 DIAS...</p>
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 leading-tight">
            Imagine abrir o LinkedIn e ver<br />
            <span className="text-amber-800">"ML Engineer JR"</span><br />
            no seu perfil.
          </h2>
          <p className="text-sm text-stone-800 leading-relaxed">
            Recrutadores te chamando. Salário 2-3x maior.<br />
            Trabalhando com o que mais cresce no mundo.
          </p>
        </div>

        {/* ANTES / DEPOIS - Visual */}
        <div className="grid grid-cols-2 gap-3">
          {/* ANTES */}
          <div className="bg-stone-100 p-4">
            <p className="text-xs font-bold text-red-600 mb-3">❌ ANTES</p>
            <ul className="space-y-2 text-xs text-stone-800">
              <li>Sem direção na carreira</li>
              <li>Salário estagnado</li>
              <li>Sem portfólio em IA</li>
              <li>Perdido em tutoriais</li>
              <li>Inseguro em entrevistas</li>
              <li>Sem network na área</li>
            </ul>
          </div>

          {/* DEPOIS */}
          <div className="bg-stone-950 p-4">
            <p className="text-xs font-bold text-amber-600 mb-3">✅ DEPOIS</p>
            <ul className="space-y-2 text-xs text-white">
              <li>Eng. de IA JR contratado</li>
              <li>Salário R$ 8K-15K</li>
              <li>5+ projetos no portfólio</li>
              <li>Domina LLMs e MLOps</li>
              <li>Confiante e preparado</li>
              <li>Network com profissionais</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-5">
          <p className="text-sm font-bold text-black">
            A diferença entre os dois? <span className="text-amber-800">3 meses de mentoria.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MentoringFuture;
