# Project Context

## Purpose
Downkit is a scaffold/template Next.js project used as a starting point for new applications. It provides a pre-configured foundation with:
- Modern Next.js 16 App Router setup
- TypeScript with strict mode
- Tailwind CSS 4 styling system
- Component library patterns (Radix UI + CVA)
- Internationalization (Chinese/English)
- Dark/light theming with custom theme support
- Vitest testing setup
- Docker + Kubernetes deployment configuration

## Tech Stack
- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4, clsx, tailwind-merge
- **UI Components**: Radix UI primitives, class-variance-authority (CVA)
- **Icons**: Lucide React
- **Testing**: Vitest
- **Package Manager**: Bun
- **Internationalization**: next-intl
- **Theming**: next-themes
- **Deployment**: Docker (standalone output), Kubernetes

## Project Conventions

### Code Style
- **Formatting**: ESLint + Prettier (via eslint-config-next)
- **Strict TypeScript**: `strict: true` in tsconfig.json
- **Path Aliases**: Use `@/` for root imports (e.g., `@/components/ui/button`)
- **Component Pattern**: Compound components with CVA variants where appropriate
- **Naming**: PascalCase for components, camelCase for utilities, kebab-case for filenames

### Architecture Patterns
- **Server Components**: Default for pages and data fetching
- **Client Components**: Marked with `"use client"` for interactivity
- **Server Actions**: Preferred for mutations (with `useTransition` for pending states)
- **Directory Structure**:
  - `app/` - Next.js App Router pages and layouts
  - `components/ui/` - Reusable UI primitives
  - `components/` - Feature-specific components
  - `lib/` - Utility functions and shared logic

### Testing Strategy
- **Unit Tests**: Vitest for utility functions (`lib/**/*.test.ts`)
- **Component Tests**: React Testing Library (implied pattern)
- **Test Environment**: `node` (Vitest config)

### Git Workflow
- **Branch Strategy**: GitHub Flow (main branch + feature branches)
- **Merge Style**: Squash merge for feature branches
- **Commits**: Conventional commits recommended but not enforced
- **CI/CD**: GitHub Actions configured (`.github/workflows/ci.yml`)

## Domain Context
This is a scaffold project meant to be cloned/copied for new Next.js applications. Key features configured:
- Chinese (zh-CN) as default locale
- Custom green theme toggle alongside system/dark/light modes
- Example server and client components demonstrating patterns

## Important Constraints
- Bun for package management (not npm/yarn/pnpm)
- Next.js standalone output for Docker deployment
- Node.js 20+ required for development

## External Dependencies
- **Deployment**: Kubernetes cluster (k8s manifests provided)
- **Systemd**: Service file for Linux deployment
- **CDN/Fonts**: Google Fonts (Geist Sans/Mono)
