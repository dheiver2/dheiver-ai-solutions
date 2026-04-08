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
    <div className="w-full py-10 md:py-14 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-10 md:mb-12 text-center">
          Credenciais & Experiência
        </h2>

        {/* Credenciais principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-10 md:mb-12">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-amber-700 mb-2">PhD</p>
            <p className="text-sm font-semibold text-black mb-1">Engenharia Química</p>
            <p className="text-xs text-black font-normal">UFBA / UFRJ • IA em Processos</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-amber-700 mb-2">15+</p>
            <p className="text-sm font-semibold text-black mb-1">Anos Experiência</p>
            <p className="text-xs text-black font-normal">Ex Santander • Grupo Fleury • Engie • Petrobras</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-amber-700 mb-2">100+</p>
            <p className="text-sm font-semibold text-black mb-1">Artigos Publicados</p>
            <p className="text-xs text-black font-normal">Web of Science • Scopus</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-amber-700 mb-2">150+</p>
            <p className="text-sm font-semibold text-black mb-1">Projetos Entregues</p>
            <p className="text-xs text-black font-normal">Saúde • Indústria • Finanças</p>
          </div>
        </div>

        {/* Divisor */}
        <div className="h-px bg-stone-300 mb-10 md:mb-12"></div>

        {/* Tecnologias */}
        <div className="mb-10 md:mb-12">
          <h3 className="text-base font-bold text-black mb-5">Tecnologias</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-2 bg-stone-950 text-amber-700 font-semibold text-xs transition-colors duration-300 hover:bg-stone-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Certificações */}
        <div className="mb-10 md:mb-12">
          <h3 className="text-base font-bold text-black mb-5">Certificações</h3>
          <ul className="space-y-2">
            {certifications.map((cert, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-amber-700 font-bold mt-0.5">→</span>
                <span className="text-sm font-normal text-black">{cert}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Impacto */}
        <div className="bg-stone-950 p-6 md:p-8">
          <h3 className="text-base font-bold text-amber-700 mb-6">IMPACTO</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold text-amber-700 mb-1 text-sm">Santander</p>
              <p className="text-sm font-normal text-white">Squad 8 eng • -60% custos • +3x velocidade</p>
            </div>
            <div>
              <p className="font-bold text-amber-700 mb-1 text-sm">Grupo Fleury</p>
              <p className="text-sm font-normal text-white">GenAI e Computer Vision para diagnósticos</p>
            </div>
            <div>
              <p className="font-bold text-amber-700 mb-1 text-sm">Engie Energia</p>
              <p className="text-sm font-normal text-white">Otimização de energia e previsão de demanda</p>
            </div>
            <div>
              <p className="font-bold text-amber-700 mb-1 text-sm">Petrobras</p>
              <p className="text-sm font-normal text-white">ML pipelines para análise operacional</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentoringAuthority;
