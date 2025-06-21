
import React from 'react';

const InsightsSection = () => {
  const insights = [
    {
      title: "O Futuro da IA Generativa em Aplicações Enterprise",
      excerpt: "Análise das tendências emergentes em IA generativa e seu impacto transformador no ambiente corporativo.",
      date: "15 de Junho, 2024",
      readTime: "8 min",
      category: "Tendências IA"
    },
    {
      title: "Ética e Responsabilidade em Sistemas de IA Avançados",
      excerpt: "Discussão sobre os desafios éticos na implementação de sistemas de IA e frameworks para desenvolvimento responsável.",
      date: "28 de Maio, 2024",
      readTime: "12 min",
      category: "Ética IA"
    },
    {
      title: "Otimização de Modelos de Machine Learning para Produção",
      excerpt: "Estratégias práticas para melhorar performance e reduzir custos de modelos ML em ambiente produtivo.",
      date: "10 de Maio, 2024",
      readTime: "15 min",
      category: "MLOps"
    },
    {
      title: "Implementação de IA em Organizações Tradicionais",
      excerpt: "Roadmap estratégico para transformação digital através da implementação gradual de soluções de IA.",
      date: "22 de Abril, 2024",
      readTime: "10 min",
      category: "Estratégia"
    }
  ];

  return (
    <section id="insights" className="py-20 bg-white">
      <div className="container-width section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-6">
              Insights & Conhecimento
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compartilhamos conhecimento sobre as últimas tendências em IA, desafios de implementação 
              e estratégias para maximizar o valor da inteligência artificial em organizações.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {insights.map((insight, index) => (
              <article 
                key={index}
                className="animate-fade-in-up hover-scale bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-medium text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">
                    {insight.category}
                  </span>
                  <span className="text-sm text-gray-400">
                    {insight.readTime} de leitura
                  </span>
                </div>
                
                <h3 className="font-playfair text-xl font-bold text-black mb-4 hover:text-gray-700 transition-colors">
                  {insight.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {insight.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {insight.date}
                  </span>
                  <span className="text-black font-medium hover:text-gray-700 transition-colors">
                    Ler mais →
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 bg-black text-white p-8 rounded-lg animate-fade-in">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="font-playfair text-3xl font-bold mb-4">
                Newsletter Especializada
              </h3>
              <p className="text-lg text-gray-300 mb-8">
                Receba insights exclusivos sobre IA avançada, tendências do mercado e 
                análises técnicas diretamente em sua caixa de entrada.
              </p>
              
              <div className="max-w-md mx-auto flex gap-4">
                <input 
                  type="email" 
                  placeholder="Seu e-mail profissional"
                  className="flex-1 px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
                <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Inscrever
                </button>
              </div>
              
              <p className="text-sm text-gray-400 mt-4">
                Conteúdo exclusivo • Sem spam • Cancele a qualquer momento
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
