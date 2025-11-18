# Contributing to Dr. Dheiver Santos AI Solutions

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## Code of Conduct

Please be respectful and professional in all interactions.

## Development Setup

### Prerequisites
- Node.js 18.x or higher
- npm or yarn
- Git

### Getting Started

1. **Fork the repository**
   ```bash
   git clone https://github.com/dheiver2/dheiver-ai-solutions.git
   cd dheiver-ai-solutions
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.template .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## Development Workflow

### Branch Naming Convention

- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Test additions or changes
- `chore/` - Maintenance tasks

Example: `feature/add-blog-section`

### Commit Message Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting, missing semicolons, etc.
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Maintenance

**Example:**
```
feat(analytics): add Google Analytics integration

- Implemented GA4 tracking
- Added custom event tracking
- Updated documentation

Closes #123
```

### Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/my-new-feature
   ```

2. **Make your changes**
   - Write clean, readable code
   - Follow existing code style
   - Add comments for complex logic
   - Update documentation if needed

3. **Test your changes**
   ```bash
   npm run lint
   npm run build
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/my-new-feature
   ```

6. **Create a Pull Request**
   - Provide a clear description
   - Reference any related issues
   - Include screenshots for UI changes
   - Ensure all CI checks pass

## Code Style Guidelines

### TypeScript/React
- Use TypeScript for all new code
- Prefer functional components over class components
- Use hooks appropriately
- Follow React best practices

### File Organization
```
src/
├── components/     # Reusable UI components
├── pages/          # Page components
├── services/       # Business logic and API calls
├── utils/          # Utility functions
├── hooks/          # Custom React hooks
├── config/         # Configuration files
└── types/          # TypeScript type definitions
```

### Naming Conventions
- **Components**: PascalCase (`MyComponent.tsx`)
- **Utilities**: camelCase (`formatDate.ts`)
- **Constants**: UPPER_SNAKE_CASE (`API_BASE_URL`)
- **Hooks**: camelCase with 'use' prefix (`useAuth.ts`)

### Component Structure
```tsx
import React from 'react';
import { ComponentProps } from './types';

// Type definitions
interface Props extends ComponentProps {
  // ...
}

// Component
export const MyComponent: React.FC<Props> = ({ prop1, prop2 }) => {
  // Hooks
  const [state, setState] = useState();

  // Effects
  useEffect(() => {
    // ...
  }, []);

  // Handlers
  const handleClick = () => {
    // ...
  };

  // Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
};

export default MyComponent;
```

## Testing

### Writing Tests
- Place tests next to the code they test
- Use descriptive test names
- Test edge cases
- Aim for high coverage on critical paths

### Running Tests
```bash
npm run test              # Run all tests
npm run test:watch        # Run in watch mode
npm run test:coverage     # Generate coverage report
```

## Documentation

### Code Documentation
- Document complex functions with JSDoc comments
- Keep comments up to date
- Explain "why" not "what"

### README Updates
- Update README.md for new features
- Keep installation instructions current
- Document configuration options

## Performance Guidelines

1. **Code Splitting**
   - Use React.lazy() for route-based splitting
   - Lazy load heavy components

2. **Optimization**
   - Memoize expensive computations
   - Use React.memo for expensive renders
   - Optimize images and assets

3. **Bundle Size**
   - Monitor bundle size in PRs
   - Remove unused dependencies
   - Use tree-shaking friendly imports

## Accessibility

- Use semantic HTML
- Include ARIA labels where needed
- Ensure keyboard navigation works
- Test with screen readers
- Maintain color contrast ratios

## Questions?

Feel free to:
- Open an issue for bugs
- Start a discussion for questions
- Email: dev@dheiver.com

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing! 🚀
