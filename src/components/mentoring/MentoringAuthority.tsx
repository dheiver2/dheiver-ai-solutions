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
    <div className="w-full py-20 md:py-40 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-light text-black mb-20 md:mb-32 text-center tracking-tight">
          Credenciais & Experiência
        </h2>

        {/* Credenciais principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20 md:mb-32">
          <div>
            <p className="text-3xl md:text-4xl font-light text-amber-700 mb-3">PhD</p>
            <p className="text-sm font-light text-black mb-2">Engenharia Química</p>
            <p className="text-xs text-stone-600 font-light tracking-wide">UFBA / UFRJ • IA em Processos</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-light text-amber-700 mb-3">15+</p>
            <p className="text-sm font-light text-black mb-2">Anos Experiência</p>
            <p className="text-xs text-stone-600 font-light tracking-wide">Ex Santander • Grupo Fleury • Engie • Petrobras</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-light text-amber-700 mb-3">100+</p>
            <p className="text-sm font-light text-black mb-2">Artigos Publicados</p>
            <p className="text-xs text-stone-600 font-light tracking-wide">Web of Science • Scopus</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-light text-amber-700 mb-3">150+</p>
            <p className="text-sm font-light text-black mb-2">Projetos Entregues</p>
            <p className="text-xs text-stone-600 font-light tracking-wide">Saúde • Indústria • Finanças</p>
          </div>
        </div>

        {/* Divisor */}
        <div className="h-px bg-stone-200 mb-20 md:mb-32"></div>

        {/* Tecnologias */}
        <div className="mb-20 md:mb-32">
          <h3 className="text-lg font-light text-black mb-8 tracking-tight">Tecnologias</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2.5 bg-stone-950 text-amber-700 font-light text-xs tracking-wide uppercase transition-colors duration-300 hover:bg-stone-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Certificações */}
        <div className="mb-20 md:mb-32">
          <h3 className="text-lg font-light text-black mb-8 tracking-tight">Certificações</h3>
          <ul className="space-y-3">
            {certifications.map((cert, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-amber-700 font-light mt-1">→</span>
                <span className="text-sm font-light text-stone-700">{cert}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Impacto */}
        <div className="bg-stone-950 p-8 md:p-12">
          <h3 className="text-lg font-light text-amber-700 mb-8 tracking-tight uppercase">Impacto nos Clientes</h3>
          <div className="space-y-6 text-white">
            <div>
              <p className="font-light text-amber-700 mb-1 text-sm">Santander</p>
              <p className="text-sm font-light text-stone-300">Squad de 8 engenheiros • -60% custos • +3x velocidade</p>
            </div>
            <div>
              <p className="font-light text-amber-700 mb-1 text-sm">Grupo Fleury</p>
              <p className="text-sm font-light text-stone-300">GenAI e Computer Vision para diagnósticos médicos</p>
            </div>
            <div>
              <p className="font-light text-amber-700 mb-1 text-sm">Engie Energia</p>
              <p className="text-sm font-light text-stone-300">Otimização de energia e previsão de demanda</p>
            </div>
            <div>
              <p className="font-light text-amber-700 mb-1 text-sm">Petrobras</p>
              <p className="text-sm font-light text-stone-300">ML pipelines para análise operacional em larga escala</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentoringAuthority;
