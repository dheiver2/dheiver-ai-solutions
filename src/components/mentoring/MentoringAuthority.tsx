import React from 'react';

const MentoringAuthority = () => {
  const skills = [
    'LLMs & GenAI',
    'RAG Systems',
    'Computer Vision',
    'MLOps',
    'Deep Learning',
    'Transformers',
    'Fine-tuning',
    'Kubernetes'
  ];

  const certifications = [
    'Google Cloud ML Engineer',
    'AWS ML Specialty',
    'TensorFlow Developer',
    'Databricks ML Associate',
  ];

  return (
    <div className="w-full py-8 bg-white">
      <div className="max-w-3xl mx-auto px-5">
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-8 text-center">
          Credenciais & Experiência
        </h2>

        {/* Credenciais - 2 colunas sempre */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-amber-700">PhD</p>
            <p className="text-sm font-bold text-black mt-1">Eng. Química</p>
            <p className="text-xs text-stone-700 mt-0.5">UFBA / UFRJ</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-amber-700">15+</p>
            <p className="text-sm font-bold text-black mt-1">Anos Exp.</p>
            <p className="text-xs text-stone-700 mt-0.5">Santander • Fleury • Engie • Petrobras</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-amber-700">100+</p>
            <p className="text-sm font-bold text-black mt-1">Artigos</p>
            <p className="text-xs text-stone-700 mt-0.5">Web of Science • Scopus</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-amber-700">150+</p>
            <p className="text-sm font-bold text-black mt-1">Projetos</p>
            <p className="text-xs text-stone-700 mt-0.5">Saúde • Indústria • Finanças</p>
          </div>
        </div>

        {/* Divisor */}
        <div className="h-px bg-stone-400 mb-8"></div>

        {/* Tecnologias */}
        <div className="mb-8">
          <h3 className="text-base font-bold text-black mb-4">Tecnologias</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-stone-950 text-amber-600 font-bold text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Certificações */}
        <div className="mb-8">
          <h3 className="text-base font-bold text-black mb-4">Certificações</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-amber-700 font-bold">→</span>
                <span className="text-sm font-normal text-black">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Impacto */}
        <div className="bg-stone-950 p-5 md:p-8">
          <h3 className="text-sm font-bold text-amber-700 mb-5">IMPACTO</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-bold text-amber-700 text-sm">Santander</p>
              <p className="text-sm text-white mt-0.5">Squad 8 eng • -60% custos • +3x velocidade</p>
            </div>
            <div>
              <p className="font-bold text-amber-700 text-sm">Grupo Fleury</p>
              <p className="text-sm text-white mt-0.5">GenAI e Computer Vision para diagnósticos</p>
            </div>
            <div>
              <p className="font-bold text-amber-700 text-sm">Engie Energia</p>
              <p className="text-sm text-white mt-0.5">Otimização de energia e previsão de demanda</p>
            </div>
            <div>
              <p className="font-bold text-amber-700 text-sm">Petrobras</p>
              <p className="text-sm text-white mt-0.5">ML pipelines para análise operacional</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentoringAuthority;
