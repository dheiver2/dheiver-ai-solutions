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
    <div className="w-full py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-black mb-10 md:mb-14 text-center tracking-tight">
          Credenciais & Experiência
        </h2>

        {/* Credenciais principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-10 md:mb-14">
          <div>
            <p className="text-2xl md:text-3xl font-light text-amber-700 mb-2">PhD</p>
            <p className="text-sm font-light text-black mb-1">Engenharia Química</p>
            <p className="text-xs text-stone-600 font-light tracking-wide">UFBA / UFRJ • IA em Processos</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-light text-amber-700 mb-2">15+</p>
            <p className="text-sm font-light text-black mb-1">Anos Experiência</p>
            <p className="text-xs text-stone-600 font-light tracking-wide">Ex Santander • Grupo Fleury • Engie • Petrobras</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-light text-amber-700 mb-2">100+</p>
            <p className="text-sm font-light text-black mb-1">Artigos Publicados</p>
            <p className="text-xs text-stone-600 font-light tracking-wide">Web of Science • Scopus</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-light text-amber-700 mb-2">150+</p>
            <p className="text-sm font-light text-black mb-1">Projetos Entregues</p>
            <p className="text-xs text-stone-600 font-light tracking-wide">Saúde • Indústria • Finanças</p>
          </div>
        </div>

        {/* Divisor */}
        <div className="h-px bg-stone-200 mb-10 md:mb-14"></div>

        {/* Tecnologias */}
        <div className="mb-10 md:mb-14">
          <h3 className="text-base font-light text-black mb-5 tracking-tight">Tecnologias</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-2 bg-stone-950 text-amber-700 font-light text-xs tracking-wide uppercase transition-colors duration-300 hover:bg-stone-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Certificações */}
        <div className="mb-10 md:mb-14">
          <h3 className="text-base font-light text-black mb-5 tracking-tight">Certificações</h3>
          <ul className="space-y-2">
            {certifications.map((cert, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-amber-700 font-light mt-0.5 text-sm">→</span>
                <span className="text-xs font-light text-stone-700">{cert}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Impacto */}
        <div className="bg-stone-950 p-6 md:p-8">
          <h3 className="text-base font-light text-amber-700 mb-6 tracking-tight uppercase">Impacto</h3>
          <div className="space-y-4 text-white">
            <div>
              <p className="font-light text-amber-700 mb-0.5 text-xs">Santander</p>
              <p className="text-xs font-light text-stone-300">Squad 8 eng • -60% custos • +3x velocidade</p>
            </div>
            <div>
              <p className="font-light text-amber-700 mb-0.5 text-xs">Grupo Fleury</p>
              <p className="text-xs font-light text-stone-300">GenAI e Computer Vision para diagnósticos</p>
            </div>
            <div>
              <p className="font-light text-amber-700 mb-0.5 text-xs">Engie Energia</p>
              <p className="text-xs font-light text-stone-300">Otimização de energia e previsão de demanda</p>
            </div>
            <div>
              <p className="font-light text-amber-700 mb-0.5 text-xs">Petrobras</p>
              <p className="text-xs font-light text-stone-300">ML pipelines para análise operacional</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentoringAuthority;
