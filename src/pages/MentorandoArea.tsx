import React, { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Code2,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Laptop2,
  LibraryBig,
  LogOut,
  MessageCircle,
  PlayCircle,
  Rocket,
  Sparkles,
  Target,
  Wrench,
} from 'lucide-react';
import Footer from '@/components/Footer';
import { buildMentoringWhatsAppLink } from '@/components/mentoring/mentoringConfig';
import { getCurrentMentorando, logoutMentorando } from '@/lib/mentorandoAuth';

type SectionId = 'dashboard' | 'trilha' | 'videos' | 'ferramentas';

const sidebarItems: Array<{
  id: SectionId;
  title: string;
  shortTitle: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
}> = [
  {
    id: 'dashboard',
    title: 'Visao geral',
    shortTitle: 'Visao',
    subtitle: 'O plano de ataque dos 90 dias',
    icon: Target,
  },
  {
    id: 'trilha',
    title: 'Trilha de conteudo',
    shortTitle: 'Trilha',
    subtitle: 'Roadmap + PDFs e ebooks',
    icon: LibraryBig,
  },
  {
    id: 'videos',
    title: 'Videos de apoio',
    shortTitle: 'Videos',
    subtitle: 'Curadoria no YouTube',
    icon: PlayCircle,
  },
  {
    id: 'ferramentas',
    title: 'Ferramentas essenciais',
    shortTitle: 'Ferramentas',
    subtitle: 'Links e tutoriais oficiais',
    icon: Wrench,
  },
];

const roadmap = [
  {
    phase: 'Fase 1',
    title: 'Base tecnica e rotina',
    duration: 'Semanas 1 a 3',
    focus: 'Python, Git, GitHub, terminal e leitura de API.',
    outcome: 'Conseguir clonar, editar, commitar e publicar um projeto simples.',
  },
  {
    phase: 'Fase 2',
    title: 'IA aplicada com projetos pequenos',
    duration: 'Semanas 4 a 6',
    focus: 'OpenAI API, Colab, notebooks, prompting e integracao com documentos.',
    outcome: 'Entregar 2 mini projetos com README e video-demo.',
  },
  {
    phase: 'Fase 3',
    title: 'Portifolio e narrativa tecnica',
    duration: 'Semanas 7 a 9',
    focus: 'Documentacao, portfolio no GitHub, pagina de projeto e estudo de caso.',
    outcome: 'Montar portfolio que explique problema, stack, arquitetura e resultado.',
  },
  {
    phase: 'Fase 4',
    title: 'Empregabilidade junior',
    duration: 'Semanas 10 a 12',
    focus: 'Curriculo, LinkedIn, pitch, simulacao de entrevista e rotina de aplicacao.',
    outcome: 'Chegar pronto para disputar vaga junior com material organizado.',
  },
];

const documents = [
  {
    title: 'Trilha de Engenharia de IA em 90 dias',
    type: 'PDF',
    level: 'Inicio guiado',
    description: 'Material central da area do mentorando para organizar a jornada, as semanas e as entregas.',
    href: '/trilha-engenharia-ia-90-dias.pdf',
    cta: 'Abrir PDF',
  },
  {
    title: 'Introducao a analise de dados com Python',
    type: 'Livro PDF',
    level: 'Python aplicado',
    description: 'Livro aberto da UFMG para ganhar base em Python, dados e boas praticas de analise.',
    href: 'https://www.bu.ufmg.br/imagem/00002c/00002cd9.pdf',
    cta: 'Ler ebook',
  },
  {
    title: 'IA na educacao: usos, oportunidades e riscos',
    type: 'Ebook PDF',
    level: 'Contexto de mercado',
    description: 'Leitura em portugues para ampliar repertorio sobre aplicacoes reais e discussao critica de IA no Brasil.',
    href: 'https://cetic.br/pt/publicacao/inteligencia-artificial-na-educacao-usos-oportunidades-e-riscos-no-cenario-brasileiro/',
    cta: 'Abrir publicacao',
  },
  {
    title: 'IA na saude: potencialidades, riscos e perspectivas',
    type: 'Ebook PDF',
    level: 'Casos de uso',
    description: 'Material em portugues para entender como IA entra em setores regulados e como pensar impacto real.',
    href: 'https://cetic.br/pt/publicacao/inteligencia-artificial-na-saude-potencialidades-riscos-e-perspectivas-para-o-brasil/',
    cta: 'Ver PDF',
  },
];

const curatedVideos = [
  {
    title: 'Curso Python para Iniciantes',
    creator: 'Hashtag Programacao',
    duration: '4h+',
    why: 'Boa porta de entrada para sair do zero e chegar em variaveis, listas, funcoes e arquivos.',
    href: 'https://www.youtube.com/watch?v=BxMtSb2w9Sk',
    stage: 'Base tecnica',
  },
  {
    title: 'Git e GitHub para Iniciantes - Passo a Passo Completo',
    creator: 'Mario Mac Sete | Inteligencia Artificial',
    duration: '2h+',
    why: 'Explica fluxo real de versionamento e publicacao no GitHub, que pesa muito no portfolio junior.',
    href: 'https://www.youtube.com/watch?v=_BGPayFgzQ4',
    stage: 'Portfolio e colaboracao',
  },
  {
    title: "Machine Learning Crash Course: Intro & What's New",
    creator: 'Google for Developers',
    duration: 'Video de entrada',
    why: 'Curadoria boa para entender o mapa de ML e seguir depois para os modulos do curso da Google.',
    href: 'https://www.youtube.com/watch?v=SAUeGtyLsrk&vl=en',
    stage: 'Fundamentos de ML',
  },
];

const tools = [
  {
    name: 'VS Code',
    icon: Laptop2,
    category: 'Editor',
    description: 'Seu ambiente principal para programar, depurar, abrir terminal e organizar projetos.',
    href: 'https://code.visualstudio.com/',
    tutorialHref: 'https://code.visualstudio.com/docs/getstarted/getting-started',
    firstSteps: 'Instale, abra um projeto local, use terminal integrado e extensoes de Python/GitHub.',
  },
  {
    name: 'GitHub',
    icon: Github,
    category: 'Portifolio',
    description: 'Onde seu portfolio vive. Repositorios, README, historico de commits e colaboracao.',
    href: 'https://github.com/',
    tutorialHref: 'https://docs.github.com/pt/get-started',
    firstSteps: 'Crie conta, publique um projeto simples e complete o tutorial Hello World.',
  },
  {
    name: 'Google Colab',
    icon: Code2,
    category: 'Notebook',
    description: 'Atalho rapido para experimentar Python, notebooks, dados e prototipos sem configurar ambiente.',
    href: 'https://colab.google/',
    tutorialHref: 'https://colab.google/articles/welcome?hl=pt-BR',
    firstSteps: 'Abra um notebook, rode celulas em Python e salve no Drive ou no GitHub.',
  },
  {
    name: 'OpenAI API',
    icon: Sparkles,
    category: 'LLM',
    description: 'Base para prototipos com chat, extracao, classificacao, analise de arquivos e copilotos.',
    href: 'https://platform.openai.com/docs',
    tutorialHref: 'https://platform.openai.com/docs/quickstart?lang=python',
    firstSteps: 'Crie chave de API, rode o quickstart e monte seu primeiro script com prompts.',
  },
  {
    name: 'Machine Learning Crash Course',
    icon: GraduationCap,
    category: 'Fundamentos',
    description: 'Curso da Google para consolidar conceitos de ML que ajudam a diferenciar dev de Eng IA junior.',
    href: 'https://developers.google.com/machine-learning/crash-course',
    tutorialHref: 'https://developers.google.com/machine-learning/crash-course/prereqs-and-prework',
    firstSteps: 'Veja prerequisitos, complete os modulos iniciais e conecte o aprendizado aos seus projetos.',
  },
  {
    name: 'GitHub Pages',
    icon: BriefcaseBusiness,
    category: 'Exibicao',
    description: 'Forma simples de publicar portfolio, landing de projeto ou documentacao de estudo.',
    href: 'https://pages.github.com/',
    tutorialHref: 'https://docs.github.com/pt/pages/quickstart',
    firstSteps: 'Publique uma pagina com links dos seus projetos e uma breve bio tecnica.',
  },
  {
    name: 'Postman',
    icon: Wrench,
    category: 'APIs',
    description: 'Ajuda a testar endpoints e entender requests e responses antes de codar integracoes.',
    href: 'https://www.postman.com/',
    tutorialHref: 'https://learning.postman.com/docs/getting-started/first-steps/get-postman/',
    firstSteps: 'Teste uma API publica, monte uma collection e documente exemplos no README.',
  },
  {
    name: 'LinkedIn',
    icon: FileText,
    category: 'Empregabilidade',
    description: 'Canal para networking, posicionamento profissional e distribuicao do portfolio.',
    href: 'https://www.linkedin.com/',
    tutorialHref: 'https://www.linkedin.com/help/linkedin/answer/a554351',
    firstSteps: 'Atualize headline, destaque projetos e publique aprendizados tecnicos com frequencia.',
  },
];

const MentorandoArea = () => {
  const navigate = useNavigate();
  const currentUser = getCurrentMentorando();
  const [activeSection, setActiveSection] = useState<SectionId>('dashboard');

  const handleLogout = () => {
    logoutMentorando();
    navigate('/area-mentorando/login', { replace: true });
  };

  const stats = useMemo(
    () => [
      { label: 'Fases da trilha', value: `${roadmap.length}` },
      { label: 'PDFs e ebooks', value: `${documents.length}` },
      { label: 'Videos curados', value: `${curatedVideos.length}` },
      { label: 'Ferramentas base', value: `${tools.length}` },
    ],
    []
  );

  const activeItem = sidebarItems.find((item) => item.id === activeSection) ?? sidebarItems[0];

  const renderContent = () => {
    if (activeSection === 'dashboard') {
      return (
        <div className="space-y-6 md:space-y-8">
          <section className="rounded-3xl md:rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(251,191,36,0.12),rgba(15,23,42,0.92),rgba(59,130,246,0.1))] p-5 md:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-300 md:px-4 md:py-2 md:text-xs">
              <Rocket className="h-3.5 w-3.5 md:h-4 md:w-4" />
              Portal do mentorando
            </div>

            <h1 className="mt-4 text-2xl font-bold leading-tight text-white md:mt-5 md:text-5xl" style={{ fontFamily: "'Inter', sans-serif" }}>
              Um painel unico para estudar, construir portfolio e entrar em Engenharia de IA Junior com mais clareza.
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 md:mt-5 md:text-base md:leading-8">
              Aqui o mentorando nao fica perdido. As abas organizam o que estudar primeiro, quais materiais em portugues abrir, quais videos valem o tempo e quais ferramentas precisa dominar.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 md:mt-8 md:grid-cols-4 md:gap-4">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-black/20 p-3 md:p-4">
                  <p className="text-xl font-bold text-white md:text-2xl">{item.value}</p>
                  <p className="mt-1 text-xs text-slate-400 md:text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-5 md:gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl md:rounded-[28px] border border-white/10 bg-white/5 p-5 md:p-6">
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-sky-300" />
                <h2 className="text-xl text-white md:text-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Roadmap de 90 dias
                </h2>
              </div>

              <div className="mt-5 space-y-4 md:mt-6">
                {roadmap.map((step) => (
                  <article key={step.title} className="rounded-2xl border border-white/10 bg-black/20 p-4 md:p-5">
                    <div className="flex flex-wrap items-center gap-2 md:gap-3">
                      <span className="rounded-full bg-amber-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-300 md:px-3 md:text-xs">
                        {step.phase}
                      </span>
                      <span className="text-[11px] font-medium text-sky-200 md:text-xs">{step.duration}</span>
                    </div>
                    <h3 className="mt-3 text-lg text-white md:text-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300 md:leading-7">{step.focus}</p>
                    <p className="mt-3 text-sm font-medium text-emerald-300">Entrega esperada: {step.outcome}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="space-y-5 md:space-y-6">
              <div className="rounded-3xl md:rounded-[28px] border border-white/10 bg-white/5 p-5 md:p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300 md:text-sm">Check de evolucao</p>
                <div className="mt-4 space-y-3 md:mt-5">
                  {[
                    'Ja publico projetos no GitHub com README.',
                    'Sei explicar meu stack em entrevistas.',
                    'Consigo testar APIs e integrar LLM em um projeto.',
                    'Tenho uma rotina semanal com metas pequenas e visiveis.',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-3 md:p-4">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <p className="text-sm text-slate-200">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl md:rounded-[28px] border border-amber-400/20 bg-amber-400/10 p-5 md:p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-200 md:text-sm">Atalho rapido</p>
                <p className="mt-3 text-sm leading-relaxed text-amber-50/90 md:leading-7">
                  Se o foco desta semana for montar base, comece por Trilha. Se travou em execucao, va para Ferramentas. Se precisa de repertorio visual, abra Videos.
                </p>
                <a
                  href={buildMentoringWhatsAppLink('Quero ajuda para montar minha proxima semana de estudos dentro da area do mentorando.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-100 md:mt-5 md:w-auto"
                >
                  <MessageCircle className="h-4 w-4" />
                  Pedir orientacao ao mentor
                </a>
              </div>
            </div>
          </section>
        </div>
      );
    }

    if (activeSection === 'trilha') {
      return (
        <div className="space-y-6 md:space-y-8">
          <section className="rounded-3xl md:rounded-[28px] border border-white/10 bg-white/5 p-5 md:p-6">
            <div className="flex items-start gap-3">
              <LibraryBig className="mt-1 h-5 w-5 shrink-0 text-sky-300" />
              <div>
                <h2 className="text-xl text-white md:text-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Trilha de conteudo
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-300 md:leading-7">
                  Roadmap pratico + biblioteca de PDFs e ebooks em portugues para apoiar a formacao do mentorando.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:mt-6 xl:grid-cols-2">
              {documents.map((doc) => (
                <article key={doc.title} className="rounded-2xl md:rounded-[24px] border border-white/10 bg-black/20 p-4 md:p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-[11px] font-semibold text-amber-300 md:text-xs">
                      {doc.type}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-slate-300 md:text-xs">
                      {doc.level}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg text-white md:mt-4 md:text-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {doc.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300 md:leading-7">{doc.description}</p>
                  <a
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition hover:text-amber-200 md:mt-5"
                  >
                    {doc.cta}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-3xl md:rounded-[28px] border border-white/10 bg-white/5 p-5 md:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300 md:text-sm">Como estudar nesta secao</p>
            <div className="mt-4 grid gap-3 md:mt-5 md:grid-cols-3 md:gap-4">
              {[
                'Comece abrindo o PDF da trilha para saber qual fase voce esta atravessando.',
                'Use os ebooks em PT-BR para ampliar repertorio e vocabulario tecnico.',
                'Converta cada leitura em uma entrega: resumo, README, notebook ou projeto.',
              ].map((tip) => (
                <div key={tip} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-relaxed text-slate-200 md:leading-7">
                  {tip}
                </div>
              ))}
            </div>
          </section>
        </div>
      );
    }

    if (activeSection === 'videos') {
      return (
        <div className="space-y-6 md:space-y-8">
          <section className="rounded-3xl md:rounded-[28px] border border-white/10 bg-white/5 p-5 md:p-6">
            <div className="flex items-start gap-3">
              <PlayCircle className="mt-1 h-5 w-5 shrink-0 text-rose-300" />
              <div>
                <h2 className="text-xl text-white md:text-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Videos de apoio com curadoria
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-300 md:leading-7">
                  Selecionei videos do YouTube que ajudam mais no momento de entrada: Python, Git/GitHub e fundamentos de ML.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:mt-6 xl:grid-cols-3">
              {curatedVideos.map((video) => (
                <article key={video.title} className="overflow-hidden rounded-2xl md:rounded-[24px] border border-white/10 bg-[#0B1020]">
                  <div className="h-28 bg-[linear-gradient(135deg,rgba(251,191,36,0.18),rgba(59,130,246,0.22),rgba(15,23,42,0.92))] p-4 md:h-36 md:p-5">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] text-white md:text-xs">
                      <PlayCircle className="h-3.5 w-3.5" />
                      {video.duration}
                    </div>
                    <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-rose-200 md:mt-4 md:text-xs">{video.stage}</p>
                  </div>
                  <div className="p-4 md:p-5">
                    <h3 className="text-lg text-white md:text-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {video.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-sky-200">{video.creator}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300 md:leading-7">{video.why}</p>
                    <a
                      href={video.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition hover:text-amber-200 md:mt-5"
                    >
                      Assistir no YouTube
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-3xl md:rounded-[28px] border border-white/10 bg-white/5 p-5 md:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-300 md:text-sm">Regra para consumir video</p>
            <div className="mt-4 grid gap-3 md:mt-5 md:grid-cols-3 md:gap-4">
              {[
                'Nao tente zerar tudo. Assista com objetivo claro e reproduza no mesmo dia.',
                'Cada video precisa gerar nota tecnica, codigo, diagrama ou projeto pequeno.',
                'Volte para a trilha depois do video; o video apoia a execucao, nao substitui pratica.',
              ].map((rule) => (
                <div key={rule} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-relaxed text-slate-200 md:leading-7">
                  {rule}
                </div>
              ))}
            </div>
          </section>
        </div>
      );
    }

    return (
      <div className="space-y-6 md:space-y-8">
        <section className="rounded-3xl md:rounded-[28px] border border-white/10 bg-white/5 p-5 md:p-6">
          <div className="flex items-start gap-3">
            <Wrench className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />
            <div>
              <h2 className="text-xl text-white md:text-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                Ferramentas essenciais
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300 md:leading-7">
                Stack minima para um Eng IA Junior construir, publicar e explicar trabalho com autonomia.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:mt-6 xl:grid-cols-2">
            {tools.map((tool) => (
              <article key={tool.name} className="rounded-2xl md:rounded-[24px] border border-white/10 bg-black/20 p-4 md:p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                    <tool.icon className="h-5 w-5 text-emerald-300" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg text-white md:text-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {tool.name}
                    </h3>
                    <p className="text-sm text-slate-400">{tool.category}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-300 md:leading-7">{tool.description}</p>
                <p className="mt-3 text-sm font-medium text-sky-200">Primeiros passos: {tool.firstSteps}</p>

                <div className="mt-4 flex flex-wrap gap-2 md:mt-5 md:gap-3">
                  <a
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white transition hover:bg-white/10 md:px-4 md:text-sm"
                  >
                    Abrir ferramenta
                    <ExternalLink className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  </a>
                  <a
                    href={tool.tutorialHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-semibold text-emerald-300 transition hover:border-emerald-300/40 hover:bg-emerald-400/15 md:px-4 md:text-sm"
                  >
                    Ver tutorial
                    <ChevronRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.18),transparent_28%),radial-gradient(circle_at_right,rgba(59,130,246,0.12),transparent_22%),linear-gradient(180deg,#050816_0%,#0B1020_45%,#050816_100%)]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050816]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:gap-4 md:px-8 md:py-4">
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-300 md:text-xs">Area do Mentorando</p>
            <p className="truncate text-xs text-slate-400 md:text-sm">
              {currentUser ? `Bem-vindo, ${currentUser.name}.` : 'Portal de estudo'}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={buildMentoringWhatsAppLink('Quero ajuda para usar melhor a area do mentorando e priorizar meus estudos em IA.')}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-black transition hover:bg-amber-300 md:inline-flex"
            >
              Tirar duvidas
            </a>
            <Link
              to="/"
              aria-label="Voltar para a landing"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-3 py-2 text-xs text-slate-200 transition hover:border-white/30 hover:bg-white/5 md:px-4 md:text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Voltar</span>
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              aria-label="Sair da area de membros"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-3 py-2 text-xs text-slate-200 transition hover:border-white/30 hover:bg-white/5 md:px-4 md:text-sm"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Sair</span>
            </button>
          </div>
        </div>

        {/* Mobile tab bar — horizontal scroll */}
        <nav
          aria-label="Secoes da area do mentorando"
          className="border-t border-white/5 bg-[#050816]/80 lg:hidden"
        >
          <div className="no-scrollbar mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-2">
            {sidebarItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveSection(item.id)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold transition ${
                    isActive
                      ? 'border-amber-300/50 bg-amber-400/15 text-amber-200'
                      : 'border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20 hover:bg-white/5'
                  }`}
                >
                  <item.icon className="h-3.5 w-3.5" />
                  {item.shortTitle}
                </button>
              );
            })}
          </div>
        </nav>
      </header>

      <main className="mx-auto grid max-w-7xl gap-6 px-4 py-6 md:px-8 md:py-8 lg:grid-cols-[280px_minmax(0,1fr)]">
        {/* Desktop sidebar — hidden below lg */}
        <aside className="hidden lg:sticky lg:top-28 lg:block lg:h-[calc(100vh-8rem)]">
          <div className="rounded-[30px] border border-white/10 bg-white/5 p-4">
            <div className="rounded-[24px] border border-amber-400/20 bg-amber-400/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Acesso ativo</p>
              <p className="mt-2 text-lg font-semibold text-white">{currentUser?.name || 'Mentorando'}</p>
              <p className="mt-1 text-sm text-slate-300">
                Escolha uma area na sidebar e foque em uma entrega por vez.
              </p>
            </div>

            <div className="mt-4 space-y-2">
              {sidebarItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full rounded-[22px] border px-4 py-4 text-left transition ${
                      isActive
                        ? 'border-amber-300/40 bg-amber-400/10'
                        : 'border-white/10 bg-black/20 hover:border-white/20 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl ${isActive ? 'bg-amber-400 text-black' : 'bg-white/10 text-slate-200'}`}>
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <p className="mt-1 text-xs leading-6 text-slate-400">{item.subtitle}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 rounded-[24px] border border-white/10 bg-black/20 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Meta da semana</p>
              <p className="mt-2 text-sm leading-7 text-slate-200">
                Escolha um PDF, um video e uma ferramenta. Termine a semana com uma entrega publicada.
              </p>
            </div>
          </div>
        </aside>

        <section className="min-w-0 space-y-6">
          {/* Active section title (mobile only) — makes clear which tab is showing */}
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 lg:hidden">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-400/15 text-amber-300">
              <activeItem.icon className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white">{activeItem.title}</p>
              <p className="truncate text-[11px] text-slate-400">{activeItem.subtitle}</p>
            </div>
          </div>

          {renderContent()}

          {/* Meta da semana — shown at end on mobile */}
          <div className="rounded-2xl border border-white/10 bg-black/20 p-4 lg:hidden">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">Meta da semana</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-200">
              Escolha um PDF, um video e uma ferramenta. Termine a semana com uma entrega publicada.
            </p>
            <a
              href={buildMentoringWhatsAppLink('Quero ajuda para usar melhor a area do mentorando.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-xs font-semibold text-black transition hover:bg-amber-300"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Tirar duvidas no WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MentorandoArea;
