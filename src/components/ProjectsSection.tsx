import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Sistema de Diagnóstico Médico por IA",
      category: "Saúde & Medicina",
      description: "Desenvolvimento de sistema de apoio ao diagnóstico médico utilizando deep learning para análise de imagens radiológicas, aumentando a precisão diagnóstica em 40%.",
      technologies: ["Deep Learning", "Visão Computacional", "TensorFlow", "Python"],
      impact: "40% de melhoria na precisão diagnóstica",
      challenge: "Alta complexidade na interpretação de imagens médicas com precisão clínica"
    },
    {
      title: "Otimização de Cadeia de Suprimentos",
      category: "Logística & Supply Chain",
      description: "Sistema preditivo para otimização de inventário e logística, reduzindo custos operacionais em 25% através de algoritmos de machine learning avançados.",
      technologies: ["Machine Learning", "Otimização", "Python", "SQL"],
      impact: "25% de redução em custos operacionais",
      challenge: "Modelagem complexa de múltiplas variáveis em tempo real"
    },
    {
      title: "Análise de Sentimentos em Redes Sociais",
      category: "Marketing & Comunicação",
      description: "Plataforma de monitoramento e análise de sentimentos para marca global, processando milhões de posts diários com precisão superior a 95%.",
      technologies: ["NLP", "Deep Learning", "BERT", "AWS"],
      impact: "95% de precisão na análise de sentimentos",
      challenge: "Processamento de linguagem natural em múltiplos idiomas e contextos"
    },
    {
      title: "Sistema de Detecção de Fraudes Financeiras",
      category: "Fintech & Seguros",
      description: "Desenvolvimento de sistema de detecção de fraudes em tempo real para instituição financeira, reduzindo perdas por fraude em 60%.",
      technologies: ["Machine Learning", "Real-time Processing", "Apache Kafka", "Python"],
      impact: "60% de redução em perdas por fraude",
      challenge: "Detecção de padrões complexos em transações financeiras em tempo real"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container-width section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-6">
              Casos de Sucesso
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exemplos de projetos complexos que demonstram nossa capacidade de transformar 
              desafios em soluções inovadoras com impacto mensurável.
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="animate-fade-in-up bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="font-playfair text-2xl font-bold text-black mb-4">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-black mb-3">Desafio Principal:</h4>
                      <p className="text-gray-600 italic">"{project.challenge}"</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <div className="bg-gray-50 p-6 rounded-lg h-full flex flex-col justify-center">
                      <h4 className="font-playfair text-xl font-bold text-black mb-4 text-center">
                        Resultado
                      </h4>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-2">
                          {project.impact.split(' ')[0]}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {project.impact.split(' ').slice(1).join(' ')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center animate-fade-in">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="font-playfair text-2xl font-bold text-black mb-4">
                Seus Desafios, Nossas Soluções
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Cada projeto apresenta desafios únicos que exigem soluções personalizadas. 
                Nossa abordagem combina expertise técnica profunda com compreensão estratégica 
                do seu negócio.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-2">100%</div>
                  <div className="text-sm text-gray-600">Projetos Entregues<br />no Prazo</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-2">95%</div>
                  <div className="text-sm text-gray-600">Taxa de Sucesso<br />dos Projetos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-2">30%</div>
                  <div className="text-sm text-gray-600">Melhoria Média<br />em KPIs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
