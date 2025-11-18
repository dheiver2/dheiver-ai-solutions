# Project Architecture

## Overview

This document describes the architecture and design patterns used in the Dr. Dheiver Santos AI Solutions platform.

## Tech Stack

### Core
- **Framework**: React 18.3+ with TypeScript
- **Build Tool**: Vite 5.4+
- **Routing**: React Router DOM v6
- **State Management**: React Query (TanStack Query)

### UI & Styling
- **Component Library**: Radix UI primitives
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Form Management
- **Forms**: React Hook Form
- **Validation**: Zod schemas
- **Type Safety**: @hookform/resolvers

### Monitoring & Analytics
- **Error Tracking**: Sentry
- **Analytics**: Google Analytics 4
- **Performance**: Web Vitals
- **Logging**: Custom logger service

## Project Structure

```
dheiver-ai-solutions/
├── .github/
│   └── workflows/          # CI/CD pipelines
├── public/                 # Static assets
│   ├── manifest.json       # PWA manifest
│   ├── robots.txt          # SEO robots
│   └── sitemap.xml         # SEO sitemap
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components (Radix/shadcn)
│   │   ├── ErrorBoundary.tsx
│   │   ├── LoadingSpinner.tsx
│   │   └── ...            # Feature components
│   ├── config/            # Configuration
│   │   └── env.ts         # Environment config
│   ├── hooks/             # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   ├── use-seo.ts
│   │   └── use-toast.ts
│   ├── lib/               # Utility libraries
│   │   ├── analytics.ts
│   │   ├── database.ts
│   │   ├── seo.ts
│   │   └── utils.ts
│   ├── pages/             # Page components (routes)
│   │   ├── Index.tsx      # Home page
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   ├── services/          # Business logic services
│   │   ├── analytics.ts   # Analytics tracking
│   │   ├── logger.ts      # Logging service
│   │   └── sentry.ts      # Error tracking
│   ├── utils/             # Utility functions
│   │   ├── performance.ts # Performance monitoring
│   │   └── rateLimiter.ts # Rate limiting
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── .env.template          # Environment variables template
├── CONTRIBUTING.md        # Contribution guidelines
├── SECURITY.md            # Security policy
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.ts
```

## Design Patterns

### 1. Component Architecture

#### Atomic Design
Components are organized following atomic design principles:
- **Atoms**: Basic UI components (Button, Input, etc.)
- **Molecules**: Simple component groups (FormField, Card)
- **Organisms**: Complex components (Navigation, Footer)
- **Templates**: Page layouts
- **Pages**: Complete views

#### Component Pattern
```tsx
// Type-safe props
interface ComponentProps {
  prop1: string;
  prop2?: number;
}

// Functional component with TypeScript
export const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // 1. Hooks
  const [state, setState] = useState();
  
  // 2. Derived state / Computed values
  const computedValue = useMemo(() => {}, [dependencies]);
  
  // 3. Effects
  useEffect(() => {}, []);
  
  // 4. Event handlers
  const handleEvent = () => {};
  
  // 5. Render
  return <div>{/* JSX */}</div>;
};
```

### 2. State Management

#### React Query for Server State
```tsx
const { data, isLoading, error } = useQuery({
  queryKey: ['key'],
  queryFn: fetchData,
  staleTime: 5 * 60 * 1000,
});
```

#### Local State with Hooks
- `useState` for simple component state
- `useReducer` for complex state logic
- `useContext` for shared state (minimal use)

### 3. Error Handling

#### Layered Error Strategy
1. **Component Level**: Try-catch in async operations
2. **Error Boundaries**: Catch React render errors
3. **Global Handler**: Window error events
4. **Service Level**: Sentry integration

```tsx
<ErrorBoundary>
  <App />
</ErrorBoundary>
```

### 4. Performance Optimization

#### Code Splitting
```tsx
const Component = lazy(() => import('./Component'));

<Suspense fallback={<Loading />}>
  <Component />
</Suspense>
```

#### Memoization
```tsx
const MemoizedComponent = React.memo(Component);
const memoizedValue = useMemo(() => compute(), [dep]);
const memoizedCallback = useCallback(() => {}, [dep]);
```

#### Bundle Optimization
- Manual chunk splitting in Vite config
- Tree-shaking friendly imports
- Dynamic imports for heavy libraries

### 5. Type Safety

#### Strict TypeScript
```json
{
  "strict": true,
  "noImplicitAny": true,
  "strictNullChecks": true
}
```

#### Zod for Runtime Validation
```tsx
const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

type FormData = z.infer<typeof schema>;
```

## Data Flow

### 1. User Interaction Flow
```
User Action → Event Handler → Service/API → State Update → UI Re-render
```

### 2. API Integration Pattern
```tsx
// Service layer
export const api = {
  async getData() {
    const response = await fetch('/api/data');
    return response.json();
  }
};

// Component usage with React Query
const { data } = useQuery({
  queryKey: ['data'],
  queryFn: api.getData,
});
```

### 3. Form Submission Flow
```
Form Input → Validation (Zod) → Rate Limit Check → API Call → 
Success/Error Handling → User Feedback (Toast) → Analytics Tracking
```

## Security Architecture

### 1. Input Validation
- Client-side: Zod schemas
- Server-side: API validation (future)

### 2. Rate Limiting
- Client-side rate limiter
- Per-endpoint configuration
- Prevents abuse and spam

### 3. CSP Headers
- Strict Content Security Policy
- Controlled resource loading
- XSS prevention

### 4. Environment Variables
- Sensitive data in .env
- Never committed to repository
- Type-safe access via config

## Monitoring & Observability

### 1. Error Tracking (Sentry)
- Automatic error capture
- Source map support
- Performance monitoring
- Session replay

### 2. Analytics (Google Analytics)
- Page view tracking
- Event tracking
- Conversion tracking
- Custom dimensions

### 3. Performance Monitoring
- Core Web Vitals
- Custom performance marks
- Resource timing
- Page load metrics

### 4. Logging
- Structured logging
- Multiple log levels
- Server transmission
- Local development output

## Deployment Architecture

### CI/CD Pipeline
```
Git Push → GitHub Actions →
  1. Code Quality (ESLint, TypeScript)
  2. Security Audit (npm audit, Snyk)
  3. Build (Vite)
  4. Deploy (Vercel/Netlify)
  5. Notification (Slack)
```

### Environments
- **Development**: Local development
- **Staging**: Testing environment (develop branch)
- **Production**: Live site (main branch)

### Build Process
1. Dependency installation
2. Type checking
3. Linting
4. Build optimization
5. Source map generation
6. Asset compression
7. Deployment

## Best Practices

### 1. Code Organization
- Feature-based folder structure
- Co-locate related files
- Clear naming conventions
- Separation of concerns

### 2. Performance
- Lazy load routes
- Optimize images
- Minimize bundle size
- Use CDN for assets

### 3. Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support

### 4. SEO
- Meta tags
- Structured data
- Sitemap
- Robots.txt
- Performance optimization

### 5. Testing (Future)
- Unit tests for utilities
- Integration tests for components
- E2E tests for critical flows
- Visual regression tests

## Scalability Considerations

### 1. Code Splitting
- Route-based splitting
- Component-based splitting
- Library splitting

### 2. Caching Strategy
- Service Worker (future)
- React Query cache
- Browser cache headers

### 3. CDN Integration
- Static assets on CDN
- Edge caching
- Geographic distribution

### 4. API Architecture (Future)
- RESTful API design
- GraphQL consideration
- Rate limiting
- Caching layer

## Future Enhancements

1. **Testing Suite**: Vitest + React Testing Library
2. **PWA**: Service Worker + offline support
3. **i18n**: Multi-language support
4. **CMS Integration**: Content management
5. **API Backend**: Custom backend services
6. **Database**: Persistent data storage
7. **Authentication**: User management
8. **Real-time Features**: WebSocket integration

---

**Last Updated**: November 2025
**Version**: 1.0.0
