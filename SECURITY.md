# Security Policy

## Supported Versions

We release patches for security vulnerabilities for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please send an email to security@dheiver.com.

**Please do not create public GitHub issues for security vulnerabilities.**

We will respond to your report within 48 hours and will keep you updated on the progress towards a fix and full announcement.

## Security Measures

This application implements the following security measures:

### 1. **Content Security Policy (CSP)**
- Strict CSP headers to prevent XSS attacks
- Controlled resource loading

### 2. **Rate Limiting**
- Client-side rate limiting for API calls
- Protection against spam and abuse

### 3. **Input Validation**
- All form inputs validated with Zod schemas
- Sanitization of user inputs

### 4. **HTTPS Only**
- Enforced HTTPS in production
- Secure cookie policies

### 5. **Dependency Management**
- Regular security audits with npm audit
- Automated dependency updates via Dependabot

### 6. **Error Handling**
- Comprehensive error boundaries
- Secure error logging without exposing sensitive data

### 7. **Authentication & Authorization**
- Secure token storage
- Protected routes

## Best Practices

1. Keep dependencies updated
2. Use environment variables for sensitive data
3. Never commit secrets to the repository
4. Regular security audits
5. Follow OWASP Top 10 guidelines

## Compliance

- **LGPD** (Lei Geral de Proteção de Dados) compliant
- **GDPR** ready for European users
- Secure data handling practices
