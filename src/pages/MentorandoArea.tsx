import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Circle,
  Code2,
  Download,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Laptop2,
  LibraryBig,
  LogOut,
  MessageCircle,
  PlayCircle,
  Printer,
  Rocket,
  Sparkles,
  Target,
  Wrench,
} from 'lucide-react';
import Footer from '@/components/Footer';
import { buildMentoringWhatsAppLink } from '@/components/mentoring/mentoringConfig';
import { logoutMentorando, toMentorandoUser } from '@/lib/mentorandoAuth';
import { useMentorandoSession } from '@/hooks/useMentorandoSession';
import { getProgress, toggleProgress, type ProgressMap } from '@/lib/mentorandoProgress';

type SectionId = 'dashboard' | 'trilha' | 'videos' | 'ferramentas' | 'recursos';

const getYouTubeId = (url: string): string | null => {
  const match = url.match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|v\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  return match ? match[1] : null;
};

const getYouTubeThumbnail = (url: string): string | null => {
  const id = getYouTubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
};

const sidebarItems: Array<{
  id: SectionId;
  title: string;
  shortTitle: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
}> = [
  {
    id: 'dashboard',
    title: 'Visão geral',
    shortTitle: 'Visão',
    subtitle: 'O plano de ataque dos 90 dias',
    icon: Target,
  },
  {
    id: 'trilha',
    title: 'Trilha de conteúdo',
    shortTitle: 'Trilha',
    subtitle: 'Roadmap + PDFs e ebooks',
    icon: LibraryBig,
  },
  {
    id: 'videos',
    title: 'Vídeos de apoio',
    shortTitle: 'Vídeos',
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
  {
    id: 'recursos',
    title: 'Recursos e comprovante',
    shortTitle: 'Recursos',
    subtitle: 'Templates + comprovante de participação',
    icon: Download,
  },
];

const templates = [
  {
    title: 'Reactive Resume — gerador open source de currículo',
    format: 'Web app',
    description: 'Editor gratuito e open source para montar currículo profissional, exportar em PDF e versionar em vários idiomas. Ideal para a vaga Eng IA Júnior.',
    href: 'https://rxresu.me/',
    cta: 'Abrir Reactive Resume',
    icon: FileText,
  },
  {
    title: 'Overleaf — template LaTeX Deedy CV',
    format: 'LaTeX',
    description: 'Template clássico usado por engenheiros que querem currículo de uma página, denso e elegante. Edite no Overleaf direto pelo navegador.',
    href: 'https://www.overleaf.com/latex/templates/deedy-cv/bjryvfsjdyxz',
    cta: 'Abrir no Overleaf',
    icon: Sparkles,
  },
  {
    title: 'LinkedIn — guia oficial de otimização de perfil',
    format: 'Guia',
    description: 'Conteúdo oficial do LinkedIn com headline, sobre, destaques e como publicar aprendizados que atraem recrutador. Vá direto para os campos que mais convertem.',
    href: 'https://www.linkedin.com/business/talent/blog/product-tips/tips-to-improve-your-linkedin-profile',
    cta: 'Abrir guia',
    icon: BriefcaseBusiness,
  },
  {
    title: 'readme.so — gerador visual de README',
    format: 'Web app',
    description: 'Monte um README estruturado (problema, stack, arquitetura, métricas, badges) clicando nas seções. Gera Markdown pronto para colar no GitHub.',
    href: 'https://readme.so/',
    cta: 'Abrir readme.so',
    icon: BookOpen,
  },
  {
    title: 'Best-README-Template — referência no GitHub',
    format: 'GitHub',
    description: 'Um dos READMEs mais clonados do GitHub (25k+ stars). Use como base e adapte para o seu projeto de IA.',
    href: 'https://github.com/othneildrew/Best-README-Template',
    cta: 'Abrir no GitHub',
    icon: Github,
  },
];

const checklistItems = [
  { key: 'github-publicado', text: 'Já publico projetos no GitHub com README.' },
  { key: 'explicar-stack', text: 'Sei explicar meu stack em entrevistas.' },
  { key: 'testar-apis', text: 'Consigo testar APIs e integrar LLM em um projeto.' },
  { key: 'rotina-semanal', text: 'Tenho uma rotina semanal com metas pequenas e visíveis.' },
];

const roadmap = [
  {
    phase: 'Fase 1',
    title: 'Base técnica e rotina',
    duration: 'Semanas 1 a 3',
    focus: 'Python, Git, GitHub, terminal e leitura de API.',
    outcome: 'Conseguir clonar, editar, commitar e publicar um projeto simples.',
  },
  {
    phase: 'Fase 2',
    title: 'IA aplicada com projetos pequenos',
    duration: 'Semanas 4 a 6',
    focus: 'OpenAI API, Colab, notebooks, prompting e integração com documentos.',
    outcome: 'Entregar 2 mini projetos com README e vídeo-demo.',
  },
  {
    phase: 'Fase 3',
    title: 'Portfólio e narrativa técnica',
    duration: 'Semanas 7 a 9',
    focus: 'Documentação, portfólio no GitHub, página de projeto e estudo de caso.',
    outcome: 'Montar portfólio que explique problema, stack, arquitetura e resultado.',
  },
  {
    phase: 'Fase 4',
    title: 'Empregabilidade júnior',
    duration: 'Semanas 10 a 12',
    focus: 'Currículo, LinkedIn, pitch, simulação de entrevista e rotina de aplicação.',
    outcome: 'Chegar pronto para disputar vaga júnior com material organizado.',
  },
];

type DocPhase = 'core' | 1 | 2 | 3 | 4;

const PHASE_LABELS: Record<DocPhase, { title: string; subtitle: string }> = {
  core: { title: 'Material central', subtitle: 'Comece por aqui — o mapa dos 90 dias' },
  1: { title: 'Fase 1 — Base técnica e rotina', subtitle: 'Semanas 1 a 3 • Python, Git, terminal' },
  2: { title: 'Fase 2 — IA aplicada', subtitle: 'Semanas 4 a 6 • OpenAI API, prompting, RAG' },
  3: { title: 'Fase 3 — Portfólio e produção', subtitle: 'Semanas 7 a 9 • Deep learning, MLOps, deploy' },
  4: { title: 'Fase 4 — Empregabilidade', subtitle: 'Semanas 10 a 12 • Revisão, repertório, entrevistas' },
};

const PHASE_ORDER: DocPhase[] = ['core', 1, 2, 3, 4];

const documents: Array<{
  title: string;
  type: string;
  level: string;
  description: string;
  href: string;
  cta: string;
  phase: DocPhase;
}> = [
  {
    title: 'Trilha de Engenharia de IA em 90 dias',
    type: 'PDF',
    level: 'Início guiado',
    description: 'Material central da área do mentorando para organizar a jornada, as semanas e as entregas.',
    href: '/trilha-engenharia-ia-90-dias.pdf',
    cta: 'Abrir PDF',
    phase: 'core',
  },
  {
    title: 'Python for Everybody (Dr. Chuck)',
    type: 'Livro PDF',
    level: 'Python do zero',
    description: 'Livro gratuito completo de Python, do básico a web scraping e bancos de dados. Um dos melhores materiais iniciais do mundo.',
    href: 'https://do1.dr-chuck.com/pythonlearn/EN_us/pythonlearn.pdf',
    cta: 'Abrir livro',
    phase: 1,
  },
  {
    title: 'Think Python 2e (Allen B. Downey)',
    type: 'Livro PDF',
    level: 'Pensamento computacional',
    description: 'Clássico em PDF gratuito para construir raciocínio algorítmico. Ideal depois do Python for Everybody.',
    href: 'https://greenteapress.com/thinkpython2/thinkpython2.pdf',
    cta: 'Abrir PDF',
    phase: 1,
  },
  {
    title: 'Pro Git (livro oficial de Git/GitHub)',
    type: 'Livro PDF',
    level: 'Versionamento',
    description: 'O livro oficial do Git, em português. Do commit inicial a branches, merges, rebase e fluxo GitHub.',
    href: 'https://git-scm.com/book/pt-br/v2',
    cta: 'Ler online',
    phase: 1,
  },
  {
    title: 'Introdução à análise de dados em saúde com Python',
    type: 'Livro PDF',
    level: 'Python aplicado',
    description: 'Livro aberto da UFMG (CIIA-Saúde) com fundamentos de Python, Pandas e análise de dados aplicada à saúde.',
    href: 'https://docs.bvsalud.org/biblioref/2023/06/1437637/introducao-a-analise-de-dados-em-saude-com-python-ciia-saude.pdf',
    cta: 'Abrir PDF',
    phase: 1,
  },
  {
    title: 'Prompt Engineering Guide (DAIR.AI)',
    type: 'Guia online',
    level: 'LLMs aplicados',
    description: 'Guia aberto e atualizado sobre prompting, few-shot, CoT, RAG e agentes. Base para construir produtos com LLM.',
    href: 'https://www.promptingguide.ai/pt',
    cta: 'Abrir guia',
    phase: 2,
  },
  {
    title: 'OpenAI Cookbook (oficial)',
    type: 'Repositório',
    level: 'LLMs na prática',
    description: 'Centenas de receitas oficiais da OpenAI em Python para embeddings, function calling, RAG, fine-tuning e agentes.',
    href: 'https://github.com/openai/openai-cookbook',
    cta: 'Abrir cookbook',
    phase: 2,
  },
  {
    title: 'LangChain docs (RAG e agentes)',
    type: 'Documentação',
    level: 'Arquitetura LLM',
    description: 'Documentação oficial para construir aplicações com LLMs, retrievers, memória, tools e agentes.',
    href: 'https://python.langchain.com/docs/introduction/',
    cta: 'Ler docs',
    phase: 2,
  },
  {
    title: 'Neural Networks and Deep Learning (Nielsen)',
    type: 'Livro online',
    level: 'Fundamentos ML',
    description: 'Livro gratuito que explica backpropagation e redes neurais com intuição matemática clara. Leitura obrigatória.',
    href: 'http://neuralnetworksanddeeplearning.com/',
    cta: 'Ler online',
    phase: 2,
  },
  {
    title: 'Dive into Deep Learning (d2l.ai)',
    type: 'Livro interativo',
    level: 'Deep learning',
    description: 'Livro gratuito e interativo de deep learning com notebooks, código PyTorch e exemplos executáveis. Referência acadêmica.',
    href: 'https://d2l.ai/',
    cta: 'Abrir livro',
    phase: 3,
  },
  {
    title: 'Designing Machine Learning Systems (notas abertas)',
    type: 'Artigo',
    level: 'MLOps',
    description: 'Notas abertas de Chip Huyen sobre ciclo de vida de sistemas de ML em produção: dados, treinamento, deploy e monitoramento.',
    href: 'https://huyenchip.com/ml-interviews-book/',
    cta: 'Abrir guia',
    phase: 3,
  },
  {
    title: 'Made With ML (MLOps end-to-end)',
    type: 'Curso aberto',
    level: 'Produção',
    description: 'Curso gratuito e open-source de Goku Mohandas: do notebook ao sistema de ML em produção, com CI/CD e testes.',
    href: 'https://madewithml.com/',
    cta: 'Abrir curso',
    phase: 3,
  },
  {
    title: 'The Hundred-Page Machine Learning Book (cap. gratuitos)',
    type: 'PDF',
    level: 'ML resumo',
    description: 'Capítulos gratuitos de Andriy Burkov. Resume o essencial de ML em linguagem direta, ótimo para revisar antes de entrevista.',
    href: 'https://themlbook.com/wiki/doku.php',
    cta: 'Baixar capítulos',
    phase: 4,
  },
  {
    title: 'IA na saúde: potencialidades, riscos e perspectivas',
    type: 'Ebook PDF',
    level: 'Casos de uso',
    description: 'Material em português para entender como IA entra em setores regulados e como pensar impacto real.',
    href: 'https://cetic.br/pt/publicacao/inteligencia-artificial-na-saude-potencialidades-riscos-e-perspectivas-para-o-brasil/',
    cta: 'Ver PDF',
    phase: 4,
  },
  {
    title: 'IA na educação: usos, oportunidades e riscos',
    type: 'Ebook PDF',
    level: 'Contexto de mercado',
    description: 'Leitura em português para ampliar repertório sobre aplicações reais e discussão crítica de IA no Brasil.',
    href: 'https://cetic.br/pt/publicacao/inteligencia-artificial-na-educacao-usos-oportunidades-e-riscos-no-cenario-brasileiro/',
    cta: 'Abrir publicação',
    phase: 4,
  },
];

const documentsByPhase = PHASE_ORDER.map((phase) => ({
  phase,
  label: PHASE_LABELS[phase],
  items: documents.filter((doc) => doc.phase === phase),
})).filter((group) => group.items.length > 0);

const curatedVideos = [
  {
    order: 1,
    title: 'Curso Python para Iniciantes',
    creator: 'Hashtag Programação',
    duration: '4h+',
    why: 'Porta de entrada em PT-BR para sair do zero e dominar variáveis, listas, funções, arquivos e bibliotecas.',
    href: 'https://www.youtube.com/watch?v=BxMtSb2w9Sk',
    stage: 'Base técnica',
  },
  {
    order: 2,
    title: 'Harvard CS50 Python — Full University Course',
    creator: 'Harvard / freeCodeCamp',
    duration: '15h (curso inteiro)',
    why: 'Curso completo de Python de Harvard em um único vídeo. Vá em capítulos: variáveis, OO, testes e bibliotecas.',
    href: 'https://www.youtube.com/watch?v=nLRL_NcnK-4',
    stage: 'Base técnica',
  },
  {
    order: 3,
    title: 'Git e GitHub para Iniciantes — Passo a Passo Completo',
    creator: 'Mario Mac Sete | IA',
    duration: '2h+',
    why: 'Fluxo real de versionamento e publicação no GitHub, que pesa muito na avaliação de portfólio júnior.',
    href: 'https://www.youtube.com/watch?v=_BGPayFgzQ4',
    stage: 'Portfólio e colaboração',
  },
  {
    order: 4,
    title: 'But what is a neural network? (Capítulo 1)',
    creator: '3Blue1Brown',
    duration: '19 min',
    why: 'A explicação mais clara e visual sobre como uma rede neural aprende. Veja a série completa (caps. 1 a 4) no próprio canal.',
    href: 'https://www.youtube.com/watch?v=aircAruvnKk',
    stage: 'Fundamentos ML',
  },
  {
    order: 5,
    title: 'Intro to Large Language Models',
    creator: 'Andrej Karpathy',
    duration: '1h',
    why: 'Visão geral densa e clara sobre como LLMs funcionam, treinamento, fine-tuning, RLHF e agentes. Referência obrigatória.',
    href: 'https://www.youtube.com/watch?v=zjkBMFhNj_g',
    stage: 'LLMs em profundidade',
  },
  {
    order: 6,
    title: 'MIT 6.S191 — Introduction to Deep Learning (2024 L1)',
    creator: 'MIT / Alexander Amini',
    duration: '1h',
    why: 'Aula 1 oficial do MIT 6.S191 (2024), atualizada anualmente. Do neurônio artificial aos transformers, com linguagem didática.',
    href: 'https://www.youtube.com/watch?v=ErnWZxJovaM',
    stage: 'Deep learning',
  },
  {
    order: 7,
    title: 'Practical Deep Learning for Coders — Lição 1',
    creator: 'Jeremy Howard / fast.ai',
    duration: '1h30',
    why: 'Lição 1 do curso fast.ai. Abordagem top-down: treina modelos reais de cara, ideal para quem vem de código e quer resultado rápido.',
    href: 'https://www.youtube.com/watch?v=8SF_h3xF3cE',
    stage: 'Deep learning prático',
  },
  {
    order: 8,
    title: "Let's build GPT: from scratch, in code, spelled out",
    creator: 'Andrej Karpathy',
    duration: '2h',
    why: 'Constrói um transformer do zero em PyTorch. Depois desse, você entende o que acontece por baixo dos LLMs.',
    href: 'https://www.youtube.com/watch?v=kCc8FmEb1nY',
    stage: 'Deep learning avançado',
  },
  {
    order: 9,
    title: 'FastAPI em produção — deploy e boas práticas',
    creator: 'Tiangolo (criador do FastAPI)',
    duration: '1h+',
    why: 'Framework que mais aparece em vagas de Eng IA júnior para expor modelos como API. Entenda async, typing e deploy.',
    href: 'https://www.youtube.com/watch?v=7t2alSnE2-I',
    stage: 'Servindo modelos',
  },
];

const tools = [
  {
    name: 'VS Code',
    icon: Laptop2,
    category: 'Editor open source',
    description: 'Editor principal da indústria, gratuito e extensível. Debug, terminal integrado, extensões de Python, Jupyter e GitHub Copilot.',
    href: 'https://code.visualstudio.com/',
    tutorialHref: 'https://code.visualstudio.com/docs/getstarted/getting-started',
    firstSteps: 'Instale as extensões Python, Pylance, Jupyter, GitLens e Docker. Aprenda o atalho Ctrl+Shift+P.',
  },
  {
    name: 'Python + venv',
    icon: Code2,
    category: 'Runtime open source',
    description: 'Linguagem base da engenharia de IA. Use venv ou pyenv para isolar dependências por projeto e evitar conflito.',
    href: 'https://www.python.org/downloads/',
    tutorialHref: 'https://docs.python.org/pt-br/3/tutorial/venv.html',
    firstSteps: 'Instale Python 3.11+, crie um venv em cada projeto e use pip com requirements.txt.',
  },
  {
    name: 'Git + GitHub',
    icon: Github,
    category: 'Versionamento open source',
    description: 'Onde seu portfólio vive. Git é open source e gratuito; GitHub é de graça para projetos públicos e privados.',
    href: 'https://github.com/',
    tutorialHref: 'https://docs.github.com/pt/get-started',
    firstSteps: 'Crie conta, configure SSH, publique um projeto com README e faça commits em português claro.',
  },
  {
    name: 'JupyterLab / Jupyter Notebook',
    icon: Code2,
    category: 'Notebook open source',
    description: 'Ambiente de notebook open source da comunidade científica. Perfeito para explorar dados e documentar experimentos.',
    href: 'https://jupyter.org/',
    tutorialHref: 'https://jupyter.org/try',
    firstSteps: 'Instale com pip install jupyterlab e rode jupyter lab. Ou use via extensão do VS Code.',
  },
  {
    name: 'Hugging Face',
    icon: Sparkles,
    category: 'Modelos open source',
    description: 'O GitHub dos modelos de IA. Milhares de LLMs, datasets e demos gratuitos. Transformers e Diffusers são a base da indústria.',
    href: 'https://huggingface.co/',
    tutorialHref: 'https://huggingface.co/learn',
    firstSteps: 'Crie conta, explore modelos abertos como Llama e Mistral e rode um Space de demo.',
  },
  {
    name: 'Ollama',
    icon: Sparkles,
    category: 'LLM local',
    description: 'Rode LLMs abertos (Llama, Mistral, Gemma, Qwen) na sua máquina com um comando. Zero custo de API para protótipos.',
    href: 'https://ollama.com/',
    tutorialHref: 'https://github.com/ollama/ollama',
    firstSteps: 'Instale, rode ollama run llama3.2 e teste prompts sem gastar com API.',
  },
  {
    name: 'LangChain',
    icon: Sparkles,
    category: 'Framework LLM open source',
    description: 'Framework open source para construir aplicações com LLMs: RAG, agentes, tools e memória. O padrão de facto da indústria.',
    href: 'https://github.com/langchain-ai/langchain',
    tutorialHref: 'https://python.langchain.com/docs/introduction/',
    firstSteps: 'Instale langchain + langchain-openai, construa um RAG simples sobre um PDF seu.',
  },
  {
    name: 'LlamaIndex',
    icon: LibraryBig,
    category: 'RAG open source',
    description: 'Framework open source focado em RAG (retrieval-augmented generation). Excelente para conectar LLM a bases de conhecimento.',
    href: 'https://www.llamaindex.ai/',
    tutorialHref: 'https://docs.llamaindex.ai/en/stable/',
    firstSteps: 'Indexe uma pasta de PDFs e faça o LLM responder perguntas sobre ela.',
  },
  {
    name: 'scikit-learn',
    icon: GraduationCap,
    category: 'ML clássico open source',
    description: 'Biblioteca de referência para ML clássico: classificação, regressão, clustering, métricas e pipelines. Base obrigatória.',
    href: 'https://scikit-learn.org/',
    tutorialHref: 'https://scikit-learn.org/stable/tutorial/basic/tutorial.html',
    firstSteps: 'Treine um RandomForest em um CSV próprio e meça precision, recall e ROC AUC.',
  },
  {
    name: 'PyTorch',
    icon: GraduationCap,
    category: 'Deep learning open source',
    description: 'Framework open source dominante em pesquisa e produção de deep learning. Base do PyTorch Lightning, HF Transformers e mais.',
    href: 'https://pytorch.org/',
    tutorialHref: 'https://pytorch.org/tutorials/beginner/basics/intro.html',
    firstSteps: 'Rode o tutorial Quickstart e treine um classificador em MNIST localmente.',
  },
  {
    name: 'Streamlit',
    icon: Laptop2,
    category: 'UI open source',
    description: 'Transforma script Python em web app em minutos. Ideal para demo de projeto de IA no portfólio com 1 arquivo.',
    href: 'https://streamlit.io/',
    tutorialHref: 'https://docs.streamlit.io/get-started',
    firstSteps: 'Construa um app de classificação ou RAG e publique no Streamlit Community Cloud (grátis).',
  },
  {
    name: 'Gradio',
    icon: Sparkles,
    category: 'UI open source',
    description: 'Alternativa open source ao Streamlit, mantida pela Hugging Face. Integra direto com modelos e cria demos públicos.',
    href: 'https://www.gradio.app/',
    tutorialHref: 'https://www.gradio.app/guides/quickstart',
    firstSteps: 'Crie uma interface com 5 linhas de Python e publique como Space no HuggingFace.',
  },
  {
    name: 'FastAPI',
    icon: Wrench,
    category: 'Backend open source',
    description: 'Framework Python mais moderno para expor modelos como API REST. Async, typing, docs automáticas. Aparece em vagas Eng IA.',
    href: 'https://fastapi.tiangolo.com/',
    tutorialHref: 'https://fastapi.tiangolo.com/tutorial/',
    firstSteps: 'Crie um endpoint que recebe texto, chama seu modelo e devolve JSON. Publique no Render grátis.',
  },
  {
    name: 'Docker',
    icon: Wrench,
    category: 'Containers open source',
    description: 'Padrão para empacotar qualquer projeto de IA e garantir que ele roda igual em qualquer lugar. Imprescindível para deploy.',
    href: 'https://www.docker.com/products/docker-desktop/',
    tutorialHref: 'https://docs.docker.com/get-started/',
    firstSteps: 'Dockerize um app FastAPI com um modelo local e rode num container isolado.',
  },
  {
    name: 'Pandas + NumPy',
    icon: Code2,
    category: 'Dados open source',
    description: 'Duas bibliotecas mais usadas em Python para manipular dados tabulares e arrays numéricos. Base para tudo em IA.',
    href: 'https://pandas.pydata.org/',
    tutorialHref: 'https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html',
    firstSteps: 'Carregue um CSV, limpe nulos, crie features e exporte para outro CSV.',
  },
  {
    name: 'DVC (Data Version Control)',
    icon: LibraryBig,
    category: 'MLOps open source',
    description: 'Git para datasets e modelos. Versiona arquivos grandes com storage remoto (S3, GDrive) sem inchar o repo.',
    href: 'https://dvc.org/',
    tutorialHref: 'https://dvc.org/doc/start',
    firstSteps: 'Versione um dataset CSV com dvc add e dvc push para storage remoto grátis.',
  },
  {
    name: 'MLflow',
    icon: BriefcaseBusiness,
    category: 'MLOps open source',
    description: 'Plataforma open source para tracking de experimentos, registry de modelos e deploy. Padrão de facto de MLOps.',
    href: 'https://mlflow.org/',
    tutorialHref: 'https://mlflow.org/docs/latest/getting-started/intro-quickstart/index.html',
    firstSteps: 'Rastreie um experimento de sklearn: parâmetros, métricas e artefato do modelo em 20 linhas.',
  },
  {
    name: 'Weights & Biases',
    icon: Target,
    category: 'Experiment tracking',
    description: 'Tracking de experimentos com dashboard bonito. Plano pessoal grátis, amplamente usado em pesquisa e produção de IA.',
    href: 'https://wandb.ai/',
    tutorialHref: 'https://docs.wandb.ai/quickstart',
    firstSteps: 'Adicione wandb.log em um treino PyTorch e visualize curvas de loss em tempo real.',
  },
  {
    name: 'LangSmith / LangFuse',
    icon: Target,
    category: 'LLM observability',
    description: 'Observabilidade para aplicações com LLM. LangFuse é open source e self-hosted. Mostra traces, custos e latência.',
    href: 'https://langfuse.com/',
    tutorialHref: 'https://langfuse.com/docs',
    firstSteps: 'Instrumente um RAG LangChain e visualize cada chamada ao LLM, token a token.',
  },
  {
    name: 'GitHub Pages + Render',
    icon: BriefcaseBusiness,
    category: 'Deploy gratuito',
    description: 'Combo gratuito para publicar portfólio estático (Pages) + API backend (Render). Tudo que um júnior precisa.',
    href: 'https://pages.github.com/',
    tutorialHref: 'https://render.com/docs/deploy-fastapi',
    firstSteps: 'Publique portfólio no Pages e suba um serviço FastAPI no Render free tier.',
  },
];

const MentorandoArea = () => {
  const navigate = useNavigate();
  const { user: sessionUser } = useMentorandoSession();
  const currentUser = toMentorandoUser(sessionUser);
  const [activeSection, setActiveSection] = useState<SectionId>('dashboard');
  const [progress, setProgressState] = useState<ProgressMap>({});

  const userId = currentUser?.id;
  useEffect(() => {
    if (userId) {
      setProgressState(getProgress(userId));
    }
  }, [userId]);

  const handleToggle = (key: string) => {
    if (!currentUser) return;
    const updated = toggleProgress(currentUser.id, key);
    setProgressState(updated);
  };

  const completedCount = useMemo(
    () => checklistItems.filter((item) => progress[item.key]).length,
    [progress]
  );
  const progressPct = Math.round((completedCount / checklistItems.length) * 100);

  const handleLogout = async () => {
    await logoutMentorando();
    navigate('/area-mentorando/login', { replace: true });
  };

  const stats = useMemo(
    () => [
      { label: 'Fases da trilha', value: `${roadmap.length}` },
      { label: 'PDFs e ebooks', value: `${documents.length}` },
      { label: 'Vídeos curados', value: `${curatedVideos.length}` },
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
              Um painel único para estudar, construir portfólio e entrar em Engenharia de IA Júnior com mais clareza.
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 md:mt-5 md:text-base md:leading-8">
              Aqui o mentorando não fica perdido. As abas organizam o que estudar primeiro, quais materiais em português abrir, quais vídeos valem o tempo e quais ferramentas precisa dominar.
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
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300 md:text-sm">Check de evolução</p>
                  <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-bold text-emerald-300 md:text-xs">
                    {completedCount}/{checklistItems.length}
                  </span>
                </div>

                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 transition-all duration-500"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>

                <div className="mt-4 space-y-3 md:mt-5">
                  {checklistItems.map((item) => {
                    const done = !!progress[item.key];
                    return (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => handleToggle(item.key)}
                        aria-pressed={done}
                        className={`flex w-full items-start gap-3 rounded-2xl border p-3 text-left transition md:p-4 ${
                          done
                            ? 'border-emerald-400/40 bg-emerald-400/10'
                            : 'border-white/10 bg-black/20 hover:border-white/20 hover:bg-white/5'
                        }`}
                      >
                        {done ? (
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        ) : (
                          <Circle className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                        )}
                        <p className={`text-sm transition ${done ? 'text-white' : 'text-slate-200'}`}>{item.text}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-3xl md:rounded-[28px] border border-amber-400/20 bg-amber-400/10 p-5 md:p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-200 md:text-sm">Atalho rápido</p>
                <p className="mt-3 text-sm leading-relaxed text-amber-50/90 md:leading-7">
                  Se o foco desta semana for montar base, comece por Trilha. Se travou em execução, vá para Ferramentas. Se precisa de repertório visual, abra Vídeos.
                </p>
                <a
                  href={buildMentoringWhatsAppLink('Quero ajuda para montar minha próxima semana de estudos dentro da área do mentorando.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-100 md:mt-5 md:w-auto"
                >
                  <MessageCircle className="h-4 w-4" />
                  Pedir orientação ao mentor
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
                  Trilha de conteúdo
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-300 md:leading-7">
                  Roadmap prático + biblioteca de PDFs e ebooks agrupados por fase para apoiar a formação do mentorando.
                </p>
              </div>
            </div>
          </section>

          {documentsByPhase.map((group) => (
            <section
              key={String(group.phase)}
              className="rounded-3xl md:rounded-[28px] border border-white/10 bg-white/5 p-5 md:p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-white md:text-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {group.label.title}
                </h3>
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-amber-300 md:text-xs">
                  {group.label.subtitle}
                </span>
              </div>

              <div className="mt-4 grid gap-4 md:mt-5 xl:grid-cols-2">
                {group.items.map((doc) => (
                  <article key={doc.title} className="rounded-2xl md:rounded-[24px] border border-white/10 bg-black/20 p-4 md:p-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-[11px] font-semibold text-amber-300 md:text-xs">
                        {doc.type}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-slate-300 md:text-xs">
                        {doc.level}
                      </span>
                    </div>
                    <h4 className="mt-3 text-lg text-white md:mt-4 md:text-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {doc.title}
                    </h4>
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
          ))}

          <section className="rounded-3xl md:rounded-[28px] border border-white/10 bg-white/5 p-5 md:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300 md:text-sm">Como estudar nesta seção</p>
            <div className="mt-4 grid gap-3 md:mt-5 md:grid-cols-3 md:gap-4">
              {[
                'Comece abrindo o PDF da trilha para saber qual fase você está atravessando.',
                'Use os ebooks em PT-BR para ampliar repertório e vocabulário técnico.',
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
      const orderedVideos = [...curatedVideos].sort((a, b) => a.order - b.order);
      return (
        <div className="space-y-6 md:space-y-8">
          <section className="rounded-3xl md:rounded-[28px] border border-white/10 bg-white/5 p-5 md:p-6">
            <div className="flex items-start gap-3">
              <PlayCircle className="mt-1 h-5 w-5 shrink-0 text-rose-300" />
              <div>
                <h2 className="text-xl text-white md:text-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Vídeos de apoio com curadoria
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-300 md:leading-7">
                  Selecionei vídeos do YouTube na ordem em que rendem mais: Python → Git/GitHub → fundamentos de ML → LLMs → deploy.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:mt-6 xl:grid-cols-3">
              {orderedVideos.map((video) => {
                const thumbnail = getYouTubeThumbnail(video.href);
                return (
                  <article key={video.title} className="group overflow-hidden rounded-2xl md:rounded-[24px] border border-white/10 bg-[#0B1020] transition hover:border-white/20">
                    <a
                      href={video.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block aspect-video w-full overflow-hidden bg-[#0B1020]"
                      aria-label={`Assistir no YouTube: ${video.title}`}
                    >
                      {thumbnail ? (
                        <img
                          src={thumbnail}
                          alt={`Thumbnail do vídeo ${video.title}`}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(251,191,36,0.18),rgba(59,130,246,0.22),rgba(15,23,42,0.92))]" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30" />

                      {/* Order badge top-left */}
                      <span className="absolute left-2 top-2 inline-flex items-center justify-center rounded-md bg-amber-400 px-2 py-1 text-[11px] font-bold text-black shadow-md">
                        Aula {video.order}
                      </span>

                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/60 ring-2 ring-white/40 backdrop-blur-sm transition group-hover:bg-red-600/90 group-hover:ring-white/80 md:h-16 md:w-16">
                          <PlayCircle className="h-7 w-7 text-white md:h-8 md:w-8" />
                        </span>
                      </div>

                      {/* Duration badge */}
                      <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-md bg-black/75 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur md:text-xs">
                        {video.duration}
                      </span>

                      {/* Stage label */}
                      <span className="absolute bottom-2 left-2 inline-flex items-center rounded-full bg-rose-500/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                        {video.stage}
                      </span>
                    </a>

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
                );
              })}
            </div>
          </section>

          <section className="rounded-3xl md:rounded-[28px] border border-white/10 bg-white/5 p-5 md:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-300 md:text-sm">Regra para consumir vídeo</p>
            <div className="mt-4 grid gap-3 md:mt-5 md:grid-cols-3 md:gap-4">
              {[
                'Não tente zerar tudo. Assista com objetivo claro e reproduza no mesmo dia.',
                'Cada vídeo precisa gerar nota técnica, código, diagrama ou projeto pequeno.',
                'Volte para a trilha depois do vídeo; o vídeo apoia a execução, não substitui prática.',
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

    if (activeSection === 'ferramentas') {
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
                  Stack mínima para um Eng IA Júnior construir, publicar e explicar trabalho com autonomia.
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
    }

    const allDone = completedCount === checklistItems.length;

    return (
      <div className="space-y-6 md:space-y-8">
        <section className="rounded-3xl md:rounded-[32px] border border-amber-400/30 bg-[linear-gradient(135deg,rgba(251,191,36,0.15),rgba(15,23,42,0.92),rgba(59,130,246,0.1))] p-5 md:p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-300 md:px-4 md:py-2 md:text-xs">
            <Award className="h-3.5 w-3.5 md:h-4 md:w-4" />
            Comprovante de participação
          </div>

          <h2 className="mt-4 text-2xl font-bold leading-tight text-white md:mt-5 md:text-4xl" style={{ fontFamily: "'Inter', sans-serif" }}>
            Ao concluir o check de evolução, libere o seu comprovante em PDF.
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 md:mt-4 md:text-base md:leading-8">
            O comprovante traz seu nome, código de verificação e data de emissão. Use para anexar no LinkedIn, currículo ou portfólio. <strong className="text-amber-200">Não substitui certificação acreditada</strong> — é um registro de participação no programa.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3 md:mt-6">
            {allDone ? (
              <Link
                to="/area-mentorando/certificado"
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-amber-300"
              >
                <Printer className="h-4 w-4" />
                Abrir comprovante
              </Link>
            ) : (
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="inline-flex items-center gap-2 rounded-full bg-slate-700/60 px-5 py-3 text-sm font-bold text-slate-400 cursor-not-allowed"
              >
                <Printer className="h-4 w-4" />
                Comprovante bloqueado
              </button>
            )}
            <span className="text-xs text-amber-200/80">
              {allDone
                ? 'Check completo. Comprovante liberado.'
                : `Marque os ${checklistItems.length} itens do check de evolução (${completedCount}/${checklistItems.length}) para liberar.`}
            </span>
          </div>
        </section>

        <section className="rounded-3xl md:rounded-[28px] border border-white/10 bg-white/5 p-5 md:p-6">
          <div className="flex items-start gap-3">
            <Download className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />
            <div>
              <h2 className="text-xl text-white md:text-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                Templates de currículo e LinkedIn
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300 md:leading-7">
                Modelos prontos para você adaptar no seu material de aplicação. Se o link pedir download do PDF e ele não abrir, me chame no WhatsApp para enviar a versão atualizada.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:mt-6 xl:grid-cols-2">
            {templates.map((tpl) => (
              <article key={tpl.title} className="rounded-2xl md:rounded-[24px] border border-white/10 bg-black/20 p-4 md:p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/15">
                    <tpl.icon className="h-5 w-5 text-emerald-300" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-2.5 py-0.5 text-[10px] font-semibold text-amber-300 md:text-xs">
                        {tpl.format}
                      </span>
                    </div>
                    <h3 className="mt-2 text-lg text-white md:text-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {tpl.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-300 md:leading-7">{tpl.description}</p>
                <a
                  href={tpl.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-300 transition hover:border-emerald-300/40 hover:bg-emerald-400/15 md:text-sm"
                >
                  {tpl.cta}
                  <ExternalLink className="h-3.5 w-3.5 md:h-4 md:w-4" />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl md:rounded-[28px] border border-sky-400/20 bg-sky-400/5 p-5 md:p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-300 md:text-sm">Como usar os templates</p>
          <div className="mt-4 grid gap-3 md:mt-5 md:grid-cols-3 md:gap-4">
            {[
              'Adapte o currículo para cada vaga: espelhe palavras-chave da descrição.',
              'No LinkedIn, headline e sobre são os campos que mais geram retorno do recrutador.',
              'No README, venda o problema resolvido e as métricas antes do stack técnico.',
            ].map((tip) => (
              <div key={tip} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-relaxed text-slate-200 md:leading-7">
                {tip}
              </div>
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
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-300 md:text-xs">Área do Mentorando</p>
            <p className="truncate text-xs text-slate-400 md:text-sm">
              {currentUser ? `Bem-vindo, ${currentUser.name}.` : 'Portal de estudo'}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={buildMentoringWhatsAppLink('Quero ajuda para usar melhor a área do mentorando e priorizar meus estudos em IA.')}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-black transition hover:bg-amber-300 md:inline-flex"
            >
              Tirar dúvidas
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
              aria-label="Sair da área de membros"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-3 py-2 text-xs text-slate-200 transition hover:border-white/30 hover:bg-white/5 md:px-4 md:text-sm"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Sair</span>
            </button>
          </div>
        </div>

        {/* Mobile tab bar — horizontal scroll */}
        <nav
          aria-label="Seções da área do mentorando"
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
                Escolha uma área na sidebar e foque em uma entrega por vez.
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
                Escolha um PDF, um vídeo e uma ferramenta. Termine a semana com uma entrega publicada.
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
              Escolha um PDF, um vídeo e uma ferramenta. Termine a semana com uma entrega publicada.
            </p>
            <a
              href={buildMentoringWhatsAppLink('Quero ajuda para usar melhor a área do mentorando.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-xs font-semibold text-black transition hover:bg-amber-300"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Tirar dúvidas no WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MentorandoArea;
