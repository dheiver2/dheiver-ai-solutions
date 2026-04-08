import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const MentoringBenefits = () => {
  const benefits = [
    {
      title: 'Curriculum Prático',
      description: 'Construa um portfólio com 5+ projetos reais de IA (GenAI, Computer Vision, RAG)',
      icon: '📚'
    },
    {
      title: 'Mentoria 1-on-1',
      description: 'Sessões semanais personalizadas com revisão de código e feedback direto',
      icon: '👨‍🏫'
    },
    {
      title: 'Acesso a Código Real',
      description: 'Templates e padrões usados em empresas como Santander e A3Data',
      icon: '💾'
    },
    {
      title: 'Network Profissional',
      description: 'Conexões com outras empresas de IA e oportunidades de carreira',
      icon: '🤝'
    },
    {
      title: 'Preparação para Entrevistas',
      description: 'Coaching para entrevistas técnicas em empresas de tech',
      icon: '🎯'
    },
    {
      title: 'Certificado de Conclusão',
      description: 'Certificado reconhecido que valida sua expertise em IA',
      icon: '🏆'
    }
  ];

  const curriculum = [
    {
      month: 'Mês 1',
      title: 'Fundamentos Sólidos',
      topics: [
        'Machine Learning Fundamentals',
        'Deep Learning com PyTorch',
        'Estruturas de Dados em IA',
        'Projeto 1: Classificador de Imagens'
      ]
    },
    {
      month: 'Mês 2',
      title: 'GenAI & LLMs',
      topics: [
        'LLMs: GPT, Claude, Llama',
        'Fine-tuning de Modelos',
        'Prompt Engineering Avançado',
        'Projeto 2: Chatbot RAG'
      ]
    },
    {
      month: 'Mês 3',
      title: 'Produção & Deployment',
      topics: [
        'MLOps e Deployment',
        'GCP e AWS para IA',
        'Escalabilidade e Performance',
        'Projeto Final: Sistema em Produção'
      ]
    }
  ];

  return (
    <div className="w-full py-12 md:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que você vai receber
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            6 meses intensivos para dominar IA e se tornar um engenheiro procurado pelo mercado
          </p>
        </div>

        {/* Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {benefits.map((benefit, idx) => (
            <Card key={idx} className="border-yellow-200 hover:shadow-lg hover:border-yellow-400 transition">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{benefit.icon}</span>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Curriculum */}
        <div className="bg-white p-8 rounded-xl border-2 border-yellow-300 shadow-sm mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Estrutura do Programa
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {curriculum.map((phase, idx) => (
              <div key={idx}>
                <div className="text-sm font-bold text-blue-600 mb-2">{phase.month}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">{phase.title}</h4>
                <ul className="space-y-2">
                  {phase.topics.map((topic, topicIdx) => (
                    <li key={topicIdx} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Formato */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-2 border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">📅</span> Formato
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700"><strong>Frequência:</strong> 1 encontro por semana</p>
              <p className="text-gray-700"><strong>Duração:</strong> 3 meses (12 semanas)</p>
              <p className="text-gray-700"><strong>Modalidade:</strong> Online ao vivo + Gravado</p>
              <p className="text-gray-700"><strong>Grupo:</strong> Máximo 5 pessoas por turma</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">💰</span> Investimento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700"><strong>Investimento:</strong> R$ 578/mês</p>
              <p className="text-gray-700"><strong>Duração:</strong> 3 meses (R$ 1.734 total)</p>
              <p className="text-gray-700"><strong>Parcelas:</strong> até 3x sem juros</p>
              <p className="text-gray-700"><strong>Garantia:</strong> 14 dias ou devolve</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MentoringBenefits;
