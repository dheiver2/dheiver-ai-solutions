import React from 'react';

const IntelligentAgentsSection = () => {
  const agents = [
    {
      title: "Agente de Atendimento ao Cliente",
      description: "Responde a perguntas frequentes, resolve problemas comuns e encaminha casos complexos para atendentes humanos, melhorando a satisfação do cliente e reduzindo custos operacionais.",
      benefits: ["Disponibilidade 24/7", "Redução de custos", "Respostas instantâneas"],
      icon: "👥"
    },
    {
      title: "Agente de Análise de Dados",
      description: "Coleta, processa e analisa grandes volumes de dados para identificar tendências, prever resultados e fornecer insights acionáveis para a tomada de decisões estratégicas.",
      benefits: ["Decisões baseadas em dados", "Identificação de oportunidades", "Otimização de processos"],
      icon: "📈"
    },
    {
      title: "Agente de Automação de Processos (RPA)",
      description: "Automatiza tarefas repetitivas e baseadas em regras, como entrada de dados, geração de relatórios e processamento de faturas, liberando funcionários para atividades de maior valor.",
      benefits: ["Aumento da eficiência", "Redução de erros", "Maior produtividade"],
      icon: "🤖"
    },
    {
      title: "Agente de Recrutamento e Seleção",
      description: "Auxilia no processo de recrutamento, desde a triagem de currículos e agendamento de entrevistas até a comunicação inicial com candidatos, otimizando o tempo do RH.",
      benefits: ["Processo mais ágil", "Melhoria na qualidade da contratação", "Redução do tempo de preenchimento da vaga"],
      icon: "🧑‍💼"
    }
  ];

  return (
    <section id="intelligent-agents" className="py-20 bg-white">
      <div className="container-width section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-6">
              Agentes Inteligentes Prontos para Uso
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Potencialize sua empresa com agentes de IA especializados, projetados para otimizar operações,
              melhorar a tomada de decisões e impulsionar o crescimento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {agents.map((agent, index) => (
              <div
                key={index}
                className="animate-fade-in-up hover-scale bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{agent.icon}</span>
                  <h3 className="font-playfair text-2xl font-bold text-black">
                    {agent.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {agent.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-black mb-2">Principais Benefícios:</h4>
                  {agent.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-black text-white p-10 rounded-lg animate-fade-in">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="font-playfair text-3xl font-bold mb-6">
                Como Agentes Inteligentes Transformam Empresas?
              </h3>
              <p className="text-lg text-gray-300 mb-4">
                Agentes inteligentes são sistemas de software que utilizam inteligência artificial para realizar tarefas específicas de forma autônoma ou semi-autônoma. Eles aprendem com dados, interagem com usuários e sistemas, e tomam decisões para alcançar objetivos definidos.
              </p>
              <p className="text-lg text-gray-300">
                Ao integrar agentes inteligentes em seus processos, sua empresa pode alcançar novos níveis de eficiência, personalização no atendimento, e obter insights valiosos para uma vantagem competitiva no mercado.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntelligentAgentsSection;
