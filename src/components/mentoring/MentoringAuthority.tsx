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
    <div className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
          Credenciais & Experiência
        </h2>

        {/* Credenciais principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="text-black">
            <p className="text-2xl font-bold text-yellow-600 mb-2">PhD</p>
            <p className="font-bold mb-1">Engenharia Química</p>
            <p className="text-sm">UFBA / UFRJ • IA em Processos</p>
          </div>
          <div className="text-black">
            <p className="text-2xl font-bold text-yellow-600 mb-2">15+ Anos</p>
            <p className="font-bold mb-1">Experiência ML & IA</p>
            <p className="text-sm">Ex Santander • Grupo Fleury • Engie Energia • Petrobras</p>
          </div>
          <div className="text-black">
            <p className="text-2xl font-bold text-yellow-600 mb-2">100+</p>
            <p className="font-bold mb-1">Artigos Publicados</p>
            <p className="text-sm">Web of Science • Scopus • 40K+ leitores</p>
          </div>
          <div className="text-black">
            <p className="text-2xl font-bold text-yellow-600 mb-2">150+</p>
            <p className="font-bold mb-1">Projetos Entregues</p>
            <p className="text-sm">Saúde • Indústria • Finanças</p>
          </div>
        </div>

        {/* Tecnologias */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-black mb-6">Tecnologias</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-black text-yellow-600 font-bold text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Certificações */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-black mb-6">Certificações Internacionais</h3>
          <ul className="space-y-2">
            {certifications.map((cert, idx) => (
              <li key={idx} className="flex items-center gap-3 text-black">
                <span className="text-yellow-600 font-bold">✓</span>
                <span className="font-bold">{cert}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Impacto */}
        <div className="bg-black p-8 md:p-12">
          <h3 className="text-xl font-bold text-yellow-600 mb-8">Impacto nos Clientes</h3>
          <div className="space-y-6 text-white">
            <div>
              <p className="font-bold text-yellow-600 mb-1">Santander</p>
              <p className="text-sm">Squad de 8 engenheiros • -60% custos • +3x velocidade</p>
            </div>
            <div>
              <p className="font-bold text-yellow-600 mb-1">Grupo Fleury</p>
              <p className="text-sm">GenAI e Computer Vision para diagnósticos médicos</p>
            </div>
            <div>
              <p className="font-bold text-yellow-600 mb-1">Engie Energia</p>
              <p className="text-sm">Otimização de energia e previsão de demanda</p>
            </div>
            <div>
              <p className="font-bold text-yellow-600 mb-1">Petrobras</p>
              <p className="text-sm">ML pipelines para análise operacional em larga escala</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentoringAuthority;
