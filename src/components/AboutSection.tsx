
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container-width section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-8">
                Sobre Dr. Dheiver Santos
              </h2>
              
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Com mais de uma década de experiência em inteligência artificial e pesquisa acadêmica, 
                  Dr. Dheiver Santos é reconhecido como um dos principais especialistas em IA avançada 
                  no Brasil. Sua trajetória combina rigor científico com aplicação prática, 
                  resultando em soluções inovadoras para os desafios mais complexos da atualidade.
                </p>
                
                <p>
                  Formado em Ciência da Computação com Ph.D. em Inteligência Artificial, 
                  Dr. Dheiver possui especialização em machine learning, deep learning, 
                  visão computacional e processamento de linguagem natural. Sua abordagem 
                  única integra conhecimento teórico profundo com experiência prática em 
                  projetos de grande escala.
                </p>
                
                <p>
                  Como consultor, ele trabalha exclusivamente com organizações que enfrentam 
                  desafios de alta complexidade, oferecendo soluções personalizadas que 
                  transformam dados em vantagem competitiva sustentável.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">10+</div>
                  <div className="text-sm text-gray-600">Anos de<br />Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">50+</div>
                  <div className="text-sm text-gray-600">Projetos<br />Complexos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">20+</div>
                  <div className="text-sm text-gray-600">Publicações<br />Científicas</div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="font-playfair text-2xl font-bold text-black mb-6">
                  Filosofia de Trabalho
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Excelência Técnica</h4>
                      <p className="text-gray-600">
                        Cada projeto é abordado com o mais alto padrão de rigor científico 
                        e precisão técnica.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Inovação Responsável</h4>
                      <p className="text-gray-600">
                        Desenvolvimento de soluções que consideram impactos éticos e sociais 
                        da inteligência artificial.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Resultados Mensuráveis</h4>
                      <p className="text-gray-600">
                        Foco em entregar soluções que geram impacto real e valor 
                        quantificável para os clientes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
