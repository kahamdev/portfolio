# Application Security Engineer Portfolio

A production-minded Next.js, TypeScript and Tailwind CSS portfolio template. Content without supplied real-world evidence is explicitly marked as example or demonstration content.

## Architecture

- `app/`: Next.js App Router, metadata and global styling
- `components/`: reusable navigation and validated contact UI
- `data/portfolio.ts`: structured security domains, projects and skill matrix
- `.github/workflows/security.yml`: CI quality and security gates

## Local development

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
```

Copy `.env.example` to `.env.local` only when adding approved server-side integrations. Do not expose secrets using `NEXT_PUBLIC_` variables.

## Security controls

Strict TypeScript, CSP, HSTS, clickjacking protection, MIME sniffing protection, referrer and permissions policies are configured in `next.config.ts`. The contact form performs client-side validation and deliberately sends no data. The CI pipeline runs linting, type checks, tests, Semgrep, Snyk, Trivy, secret scanning, build and a post-deployment ZAP baseline scan when a staging URL is configured.

## Deployment

Deploy to a TLS-enabled Next.js host. Set `STAGING_URL` as a GitHub Actions repository variable to enable the ZAP job; configure deployment separately for the chosen host. Review headers on the deployed domain because CDN/proxy configuration can override application headers.

## AppSec representation

The security-practice section covers SAST, SCA, DAST, IAST, ASPM, DevSecOps, IaC, container and Kubernetes security. Each card explains purpose, lifecycle placement, detected risks, CI/CD integration and workflow.
