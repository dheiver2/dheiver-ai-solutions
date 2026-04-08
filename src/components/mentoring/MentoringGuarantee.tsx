import React from 'react';

const MentoringGuarantee = () => {
  return (
    <div className="w-full py-8 bg-stone-950 text-white">
      <div className="max-w-xl mx-auto px-5 text-center">
        <div className="border-2 border-amber-700 p-6">
          <p className="text-4xl mb-3">🛡️</p>
          <p className="text-amber-600 font-bold text-xs mb-3">GARANTIA INCONDICIONAL</p>
          <h2 className="text-2xl font-bold mb-3">
            14 dias ou seu<br />dinheiro de volta.
          </h2>
          <p className="text-sm text-stone-300 leading-relaxed mb-4">
            Participe das primeiras 2 sessões. Se sentir que não é para você,
            devolvemos <strong className="text-white">100% do valor</strong> sem
            burocracia, sem perguntas.
          </p>
          <p className="text-xs text-stone-300">
            Simples assim. O risco é <span className="text-amber-600 font-bold">zero</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MentoringGuarantee;
