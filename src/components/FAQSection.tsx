import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { getFAQSchema } from '../lib/seo';

const faqData = [
  {
    question: "O que é consultoria em Inteligência Artificial?",
    answer: "A consultoria em IA envolve análise, desenvolvimento e implementação de soluções baseadas em inteligência artificial para resolver problemas complexos de negócio, incluindo machine learning, deep learning, visão computacional e processamento de linguagem natural."
  },
  {
    question: "Quais são os principais serviços oferecidos?",
    answer: "Oferecemos consultoria estratégica em IA, desenvolvimento de modelos de machine learning, implementação de sistemas de visão computacional, criação de chatbots e assistentes virtuais, automação inteligente de processos e análise preditiva de dados."
  },
  {
    question: "Como funciona o processo de consultoria?",
    answer: "O processo inicia com uma consulta gratuita para entender suas necessidades, seguido de análise técnica detalhada, proposta customizada, desenvolvimento da solução e acompanhamento pós-implementação para garantir os melhores resultados."
  },
  {
    question: "Qual o tempo médio para implementar uma solução de IA?",
    answer: "O tempo varia conforme a complexidade do projeto, podendo ir de 2-4 semanas para soluções simples até 3-6 meses para projetos complexos de machine learning ou visão computacional."
  },
  {
    question: "Quais tipos de empresas podem se beneficiar?",
    answer: "Desde startups até grandes corporações podem se beneficiar. Empresas de e-commerce, saúde, finanças, manufatura, varejo e serviços encontram oportunidades significativas com automação inteligente e análise preditiva."
  },
  {
    question: "Como medir o ROI de projetos de IA?",
    answer: "Medimos ROI através de KPIs específicos como redução de custos operacionais, aumento de eficiência, melhoria na precisão de previsões, automatização de tarefas manuais e aumento na satisfação do cliente."
  },
  {
    question: "É necessário ter conhecimento técnico em IA?",
    answer: "Não é necessário. Nossa consultoria inclui treinamento da equipe e documentação completa. Fornecemos todo o suporte técnico necessário e capacitamos sua equipe para utilizar as soluções implementadas."
  },
  {
    question: "Quais tecnologias de IA são utilizadas?",
    answer: "Utilizamos Python, TensorFlow, PyTorch, scikit-learn, OpenCV, NLTK, spaCy, cloud computing (AWS, Azure, Google Cloud), APIs de machine learning e ferramentas de MLOps para deploy e monitoramento."
  }
];

export default function FAQSection() {
  return (
    <section className="py-16 bg-muted/50">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(getFAQSchema())}
        </script>
      </Helmet>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Perguntas Frequentes sobre Consultoria em IA
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Esclarecemos as principais dúvidas sobre nossos serviços de consultoria 
            em Inteligência Artificial e Machine Learning
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                FAQ - Consultoria em Inteligência Artificial
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <h3 className="font-semibold text-lg">{faq.question}</h3>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      <p className="leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Ainda tem dúvidas? Entre em contato para uma consulta gratuita!
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 font-medium transition-colors"
          >
            Agendar Consulta Gratuita
          </a>
        </div>
      </div>
    </section>
  );
}