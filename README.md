# Dr. Dheiver Santos - Consultoria Avançada em Inteligência Artificial

## Sobre o Projeto

Site profissional para consultoria especializada em soluções de Inteligência Artificial avançada e projetos de alta complexidade. Desenvolvido com foco em performance, SEO e conversão para Google Ads.

## Características Principais

- **Design Responsivo**: Interface otimizada para todos os dispositivos
- **SEO Avançado**: Implementação completa de meta tags, schema markup e otimizações técnicas
- **Performance**: Carregamento rápido e otimizado para Core Web Vitals
- **Acessibilidade**: Seguindo as diretrizes WCAG 2.1
- **Google Ads Ready**: Estrutura otimizada para campanhas de marketing digital

## Tecnologias Utilizadas

- **Frontend**: React 18 com TypeScript
- **Estilização**: Tailwind CSS + shadcn/ui
- **Roteamento**: React Router DOM
- **Build Tool**: Vite
- **Gerenciamento de Estado**: React Query
- **Fontes**: Inter + Playfair Display

## Instalação e Configuração

### Pré-requisitos

- Node.js versão 18 ou superior
- npm ou yarn

### Passos para instalação

```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO]

# Navegue até o diretório do projeto
cd dheiver-ai-solutions

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Build para desenvolvimento
npm run build:dev

# Lint do código
npm run lint

# Preview da build
npm run preview
```

## Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes da biblioteca shadcn/ui
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── Navigation.tsx
│   └── ...
├── pages/              # Páginas da aplicação
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Home.tsx
│   ├── Services.tsx
│   └── ...
├── hooks/              # Custom hooks
├── lib/                # Utilitários
└── styles/             # Estilos globais
```

## Otimizações Implementadas

### SEO
- Meta tags completas e dinâmicas
- Schema markup para rich snippets
- Sitemap XML automatizado
- Open Graph e Twitter Cards
- Canonical URLs
- Otimização de imagens

### Performance
- Lazy loading de componentes
- Compressão de imagens
- Minificação de CSS/JS
- Cache otimizado
- Critical CSS inline

### Acessibilidade
- Navegação por teclado
- Screen reader friendly
- Contraste adequado
- Alt text em imagens
- Landmarks semânticos

## Configuração para Produção

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_SITE_URL=https://seudominio.com
VITE_CONTACT_EMAIL=contato@seudominio.com
VITE_GOOGLE_ANALYTICS_ID=GA_TRACKING_ID
```

### Deploy

O projeto está configurado para deploy em:
- Vercel
- Netlify
- GitHub Pages
- Qualquer servidor estático

## Suporte e Manutenção

Para suporte técnico ou dúvidas sobre o projeto:
- Email: suporte@dheiver.com
- Documentação: Consulte os comentários no código

## Licença

Este projeto é proprietário e confidencial. Todos os direitos reservados.

---

**Desenvolvido com foco em excelência técnica e resultados de negócio**
