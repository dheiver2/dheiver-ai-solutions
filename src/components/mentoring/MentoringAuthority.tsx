import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, BookOpen, Briefcase, Award } from 'lucide-react';

const MentoringAuthority = () => {
  const credentials = [
    {
      icon: Award,
      title: 'PhD em Engenharia Química',
      detail: 'UFBA / UFRJ',
      subtitle: 'Especializado em IA em Processos'
    },
    {
      icon: BookOpen,
      title: '100+ Artigos Publicados',
      detail: 'Web of Science & Scopus',
      subtitle: 'Influência: 40K+ leitores'
    },
    {
      icon: Briefcase,
      title: '15+ Anos de Experiência',
      detail: 'ML Engineer | GenAI Lead',
      subtitle: 'Santander, A3Data, Engie Brasil'
    },
    {
      icon: Trophy,
      title: '150+ Projetos Entregues',
      detail: 'Saúde, Indústria, Finanças',
      subtitle: 'Impacto econômico 4x ROI'
    }
  ];

  const skills = [
    'LLMs & GenAI',
    'RAG Systems',
    'Computer Vision',
    'Transformers',
    'MLOps & Cloud',
    'Deep Learning',
    'Fine-tuning LLMs',
    'Vector Databases'
  ];

  const certifications = [
    'Google Cloud ML Engineer',
    'AWS ML Specialty',
    'TensorFlow Developer',
    'Deep Learning Specialist',
    'Databricks ML Associate',
    'CKA (Kubernetes)'
  ];

  return (
    <div className="w-full py-12 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que aprender com Dr. Dheiver?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experiência validada por credenciais internacionais e histórico comprovado
          </p>
        </div>

        {/* Credenciais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
          {credentials.map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <Card key={idx} className="border-2 border-gray-100 hover:border-blue-300 transition">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-8 h-8 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{cred.title}</h3>
                      <p className="text-sm text-blue-600 font-semibold mb-1">{cred.detail}</p>
                      <p className="text-xs text-gray-500">{cred.subtitle}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Skills */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Tecnologias & Especializações
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-yellow-50 text-yellow-900 rounded-full font-medium text-sm border border-yellow-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-8 rounded-xl border border-yellow-300">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Certificações Internacionais
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Impacto */}
        <div className="mt-12 p-6 md:p-8 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Impacto nos Clientes:</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✓</span>
              <span className="text-gray-700"><strong>Santander:</strong> Liderou squad de 8 engenheiros, reduziu custos em 60%, acelerou entregas 3x</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✓</span>
              <span className="text-gray-700"><strong>A3Data:</strong> Implementou soluções GenAI e RAG para setor de saúde com ROI 4x</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✓</span>
              <span className="text-gray-700"><strong>Engie Brasil:</strong> Criou sistemas de recomendação neural e modelos de previsão de demanda</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MentoringAuthority;
