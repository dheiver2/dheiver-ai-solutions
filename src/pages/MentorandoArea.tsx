import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Download,
  FileText,
  Github,
  Laptop2,
  MessageCircle,
  PlayCircle,
  Rocket,
  Search,
  Sparkles,
  Target,
  Wrench,
} from 'lucide-react';
import Footer from '@/components/Footer';
import { buildMentoringWhatsAppLink } from '@/components/mentoring/mentoringConfig';
import { getCurrentMentorando, logoutMentorando } from '@/lib/mentorandoAuth';

const journeySteps = [
  {
    phase: 'Fase 1',
    title: 'Fundamentos e rotina',
    duration: 'Semanas 1 a 3',
    description: 'Organize sua base técnica, defina rotina de estudo e aprenda o fluxo mínimo para começar a produzir em IA.',
    topics: ['Python para automação', 'Git e GitHub', 'APIs e LLMs', 'Prompting com método'],
  },
  {
    phase: 'Fase 2',
    title: 'Projetos guiados',
    duration: 'Semanas 4 a 6',
    description: 'Saia do tutorial infinito com projetos pequenos e progressivos para ganhar repertório prático.',
    topics: ['Chat com documentos', 'Classificação de texto', 'Pipeline com embeddings', 'Deploy simples'],
  },
  {
    phase: 'Fase 3',
    title: 'Portfólio e consistência',
    duration: 'Semanas 7 a 9',
    description: 'Transforme entregas técnicas em provas de competência com README, narrativa e demonstração.',
    topics: ['Case study', 'README forte', 'Métricas de projeto', 'Comunicação técnica'],
  },
  {
    phase: 'Fase 4',
    title: 'Mercado e entrevistas',
    duration: 'Semanas 10 a 12',
    description: 'Prepare currículo, posicionamento e repertório de entrevista para disputar vagas júnior com clareza.',
    topics: ['Currículo orientado a resultado', 'LinkedIn', 'Pitch pessoal', 'Simulação de entrevista'],
  },
];

const videoLibrary = [
  {
    title: 'Mapa da Engenharia de IA Júnior',
    duration: '12 min',
    category: 'Visão de carreira',
    description: 'Entenda o que estudar primeiro, o que pode esperar e o que realmente pesa para a primeira vaga.',
  },
  {
    title: 'Python e automações que importam',
    duration: '18 min',
    category: 'Base técnica',
    description: 'Os comandos, bibliotecas e padrões que já colocam você para construir sem se perder em teoria.',
  },
  {
    title: 'Primeiro projeto com LLM + API',
    duration: '24 min',
    category: 'Projeto guiado',
    description: 'Monte um app simples com entrada, processamento e saída útil para começar o portfólio.',
  },
  {
    title: 'Embeddings, RAG e busca sem drama',
    duration: '20 min',
    category: 'Arquitetura aplicada',
    description: 'Aprenda onde essas peças entram e como explicar isso de forma júnior, mas sólida.',
  },
  {
    title: 'Como documentar um projeto para recrutador',
    duration: '10 min',
    category: 'Portfólio',
    description: 'Estruture README, problema, solução e próximos passos de um jeito que faça sentido para quem avalia.',
  },
  {
    title: 'Simulado de entrevista para Eng IA Jr',
    duration: '16 min',
    category: 'Empregabilidade',
    description: 'Treine respostas para perguntas comuns sobre projetos, stack, estudos e tomada de decisão.',
  },
];

const tools = [
  {
    name: 'VS Code',
    icon: Laptop2,
    description: 'Seu ambiente principal para codar, testar e navegar por projetos com produtividade.',
  },
  {
    name: 'GitHub',
    icon: Github,
    description: 'Onde seu portfólio vive e onde você prova consistência, versionamento e colaboração.',
  },
  {
    name: 'Postman',
    icon: Wrench,
    description: 'Útil para entender e testar APIs antes de integrar tudo no código.',
  },
  {
    name: 'OpenAI API',
    icon: Sparkles,
    description: 'Para prototipar fluxos com LLM, classificação, extração e copilotos.',
  },
  {
    name: 'Langflow / Dify',
    icon: Brain,
    description: 'Ferramentas visuais para acelerar aprendizado de pipelines e agentes sem travar no começo.',
  },
  {
    name: 'Notion',
    icon: FileText,
    description: 'Centralize estudos, backlog semanal, ideias de projeto e checkpoints.',
  },
  {
    name: 'LinkedIn',
    icon: BriefcaseBusiness,
    description: 'Canal para posicionamento profissional, networking e descoberta das primeiras vagas.',
  },
  {
    name: 'Google Colab',
    icon: Code2,
    description: 'Atalho para testar notebooks e experimentos sem depender da máquina local.',
  },
];

const milestones = [
  'Dia 1 a 30: base em Python, Git, APIs e primeiro mini projeto funcional.',
  'Dia 31 a 60: dois projetos aplicados com documentação e repertório técnico melhor.',
  'Dia 61 a 90: portfólio organizado, currículo revisado e simulações de entrevista.',
];

const MentorandoArea = () => {
  const navigate = useNavigate();
  const currentUser = getCurrentMentorando();

  const handleLogout = () => {
    logoutMentorando();
    navigate('/area-mentorando/login', { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.18),transparent_28%),radial-gradient(circle_at_right,rgba(59,130,246,0.12),transparent_22%),linear-gradient(180deg,#050816_0%,#0B1020_45%,#050816_100%)]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">Area do Mentorando</p>
            <p className="text-sm text-slate-400">
              {currentUser ? `Bem-vindo, ${currentUser.name}.` : 'Trilha de conteudo para Engenharia de IA Junior'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-white/30 hover:bg-white/5"
            >
              Sair
            </button>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-white/30 hover:bg-white/5"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Link>
            <a
              href={buildMentoringWhatsAppLink('Quero saber como usar a area do mentorando para acelerar minha entrada em Engenharia de IA Junior.')}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-black transition hover:bg-amber-300 md:inline-flex"
            >
              Tirar duvidas
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-12 pt-12 md:grid-cols-[1.2fr_0.8fr] md:px-8 md:pt-20">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              <Rocket className="h-4 w-4" />
              Jornada de 90 dias
            </div>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl" style={{ fontFamily: "'Inter', sans-serif" }}>
              A trilha para sair do estudo solto e se preparar para a sua primeira vaga como Eng IA Junior.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Esta area organiza o que estudar, que projetos construir, que videos assistir e quais ferramentas dominar para evoluir com clareza.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/trilha-engenharia-ia-90-dias.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-400 px-6 py-4 text-sm font-bold text-black transition hover:brightness-105"
              >
                <Download className="h-4 w-4" />
                Abrir trilha em PDF
              </a>

              <a
                href="#videos"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 py-4 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
              >
                <PlayCircle className="h-4 w-4" />
                Ver biblioteca de videos
              </a>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-white">Painel de progresso</p>
                <p className="text-sm text-slate-400">O que um mentorando junior precisa fechar</p>
              </div>
              <Target className="h-5 w-5 text-amber-300" />
            </div>

            <div className="mt-6 space-y-4">
              {[
                'Entender o stack minimo da area',
                'Construir 3 a 5 projetos guiados',
                'Publicar portfolio no GitHub',
                'Treinar discurso tecnico para entrevistas',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/20 px-4 py-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <p className="text-sm text-slate-200">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4">
              <p className="text-sm font-semibold text-amber-200">Resultado esperado</p>
              <p className="mt-2 text-sm leading-7 text-amber-50/90">
                Ao final da trilha, voce deve conseguir demonstrar fundamentos, portfolio e maturidade de execucao para vagas de entrada em IA aplicada.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Trilha de conteudo</p>
              <h2 className="mt-2 text-3xl text-white md:text-4xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                Quatro etapas para construir base, projetos e empregabilidade
              </h2>
            </div>
            <BookOpen className="hidden h-6 w-6 text-sky-300 md:block" />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {journeySteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-amber-300/40"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">{step.phase}</p>
                    <h3 className="mt-2 text-2xl text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {step.title}
                    </h3>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white">
                    0{index + 1}
                  </div>
                </div>

                <p className="mt-3 text-sm font-medium text-sky-200">{step.duration}</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">{step.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {step.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-medium text-slate-200"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="videos" className="mx-auto max-w-7xl px-5 py-10 md:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-300">Videos de apoio</p>
            <h2 className="mt-2 text-3xl text-white md:text-4xl" style={{ fontFamily: "'Inter', sans-serif" }}>
              Biblioteca organizada para estudar sem cair no excesso de conteudo
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
              Cada video abaixo representa um bloco de aprendizado que acelera a trilha. Eles funcionam como checkpoints da jornada.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {videoLibrary.map((video) => (
              <article
                key={video.title}
                className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0B1020] shadow-xl shadow-black/20"
              >
                <div className="relative flex h-44 items-end bg-[linear-gradient(135deg,rgba(251,191,36,0.18),rgba(59,130,246,0.22),rgba(15,23,42,0.95))] p-5">
                  <div className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-white">
                    <PlayCircle className="h-3.5 w-3.5" />
                    {video.duration}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-slate-100">
                    {video.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {video.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{video.description}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-300">
                    Assistir neste modulo
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 md:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Ferramentas essenciais</p>
            <h2 className="mt-2 text-3xl text-white md:text-4xl" style={{ fontFamily: "'Inter', sans-serif" }}>
              O stack minimo para um junior conseguir construir e mostrar trabalho
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {tools.map((tool) => (
                <article key={tool.name} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <tool.icon className="h-5 w-5 text-emerald-300" />
                  <h3 className="mt-4 text-lg text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {tool.name}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{tool.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Plano 30-60-90</p>
            <h2 className="mt-2 text-3xl text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
              O que precisa acontecer em cada janela
            </h2>

            <div className="mt-8 space-y-4">
              {milestones.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex gap-3">
                    <Search className="mt-1 h-4 w-4 shrink-0 text-amber-300" />
                    <p className="text-sm leading-7 text-slate-200">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-sky-400/20 bg-sky-400/10 p-5">
              <p className="text-sm font-semibold text-sky-200">Regra da area</p>
              <p className="mt-2 text-sm leading-7 text-sky-50/90">
                Menos consumo passivo, mais projeto publicado. O objetivo nao e assistir tudo. E terminar cada etapa com uma entrega visivel.
              </p>
            </div>

            <a
              href={buildMentoringWhatsAppLink('Quero apoio para seguir a trilha da area do mentorando e virar Engenheiro de IA Junior.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-slate-100"
            >
              <MessageCircle className="h-4 w-4" />
              Falar com o mentor
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MentorandoArea;
