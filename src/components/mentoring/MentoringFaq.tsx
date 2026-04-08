import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const MentoringFaq = () => {
  const faqs = [
    {
      id: '1',
      question: 'Qual é o nível de experiência necessário?',
      answer: 'O programa é designed para pessoas com conhecimentos básicos de Python. Se você nunca programou, podemos fazer um onboarding rápido nos primeiros dias. Não é necessário ter experiência anterior em IA ou Machine Learning.'
    },
    {
      id: '2',
      question: 'Quanto tempo preciso dedicar por semana?',
      answer: 'Recomendamos 8-10 horas por semana: 2-3 horas na sessão ao vivo semanal e 5-7 horas em projetos práticos. Você tem flexibilidade para organizar seu próprio tempo, desde que mantenha o ritmo.'
    },
    {
      id: '3',
      question: 'Posso assistir as aulas gravadas se faltar?',
      answer: 'Sim! Todas as sessões são gravadas e você tem acesso lifetime ao material. Recomendamos assistir ao vivo para fazer perguntas, mas entendemos que nem sempre é possível.'
    },
    {
      id: '4',
      question: 'E se eu quiser parar no meio do programa?',
      answer: 'Oferecemos garantia de 14 dias com reembolso integral. Após esse período, você pode sair a qualquer tempo com reembolso proporcional dos meses não utilizados.'
    },
    {
      id: '5',
      question: 'Os projetos são reais ou apenas estudos de caso?',
      answer: 'São projetos reais! Você vai trabalhar com datasets verdadeiros e enfrentar desafios que aparecem em empresas. Ao final, você terá um portfólio que impressiona recrutadores.'
    },
    {
      id: '6',
      question: 'Tem auxílio para conseguir emprego depois?',
      answer: 'Sim! Oferecemos preparação para entrevistas técnicas, revisão de CV, e conexões com empresas do nosso network. Vários ex-alunos conseguiram posições em startups e empresas de tech.'
    },
    {
      id: '7',
      question: 'Preciso de um computador potente?',
      answer: 'Recomendamos mínimo 16GB RAM e GPU (pode ser cloud). Fornecemos acesso a ambientes na cloud (Google Colab, Kaggle) durante o programa se necessário.'
    },
    {
      id: '8',
      question: 'Como começa uma turma nova?',
      answer: 'Iniciamos turmas toda primeira segunda-feira de cada mês. Você pode se inscrever até 1 semana antes. Turmas têm máximo 5 pessoas para garantir mentoria de qualidade e atenção individualizada.'
    }
  ];

  return (
    <div className="w-full py-12 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600">
            Tire todas as suas dúvidas sobre o programa de mentoria
          </p>
        </div>

        <div className="bg-white rounded-lg border-2 border-yellow-300">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="px-6 py-4 hover:bg-yellow-50 transition">
                  <span className="text-lg font-semibold text-gray-900 text-left">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50 text-gray-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 p-8 bg-yellow-50 rounded-xl border-2 border-yellow-300">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Ainda tem dúvidas?</h3>
          <p className="text-gray-700 mb-6">
            Entre em contato direto comigo! Respondo todas as dúvidas em até 2 horas.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="https://wa.me/5551989889898?text=Quero%20tirar%20dúvidas%20sobre%20a%20mentoria%20em%20IA"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition"
            >
              💬 WhatsApp
            </a>
            <a
              href="mailto:dheiver.santos@gmail.com?subject=Dúvidas%20sobre%20Mentoria%20em%20IA"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
            >
              ✉️ Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentoringFaq;
