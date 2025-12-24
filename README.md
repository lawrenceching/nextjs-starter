## Downkit — Next.js Scaffold (Production-Ready Spec)

This repository is a **Next.js App Router scaffold** intended to be a strong starting point for a **production-ready web app**: modern UI foundations, strict TypeScript, sensible linting defaults, and a clear path to add testing/CI/observability.

### What’s included (current repo)

- **Framework**: Next.js (App Router) + React
- **Language**: TypeScript (`strict: true`, path alias `@/*`)
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/postcss`)
- **UI kit**: shadcn/ui (Radix primitives + Lucide icons)
- **Linting**: ESLint with Next.js “Core Web Vitals” + TypeScript config
- **Runtime**: Bun is supported (repo includes `bun.lock`)

### Goals

- **Fast local dev** with modern React/Next patterns
- **Consistency** via conventions (structure, aliases, lint rules)
- **Production readiness** with explicit quality gates and deployment guidance

### Non-goals

- This scaffold does **not** prescribe a backend; it’s frontend-first (add API routes or external services as needed).
- This scaffold does **not** currently ship with testing, CI, i18n, auth, or monitoring pre-wired (see “Production-ready checklist”).

## Requirements

- **Bun** (recommended) or Node.js (if you prefer npm/pnpm/yarn)
- A POSIX shell (Linux/macOS/WSL works well)

## Quickstart

Install dependencies:

```bash
bun install
```

Start dev server:

```bash
bun dev
```

Build & run production:

```bash
bun run build
bun start
```

## i18n

- Locales: `zh-CN` (default), `zh-TW`, `en`
- Routing: locale prefix is always present (`/zh-CN/...`, `/en/...`)
- Root redirect: `/` redirects to the best match based on `Accept-Language` and persists selection in a cookie (`NEXT_LOCALE`)

## Themes

- Dark/light: powered by `next-themes` (class-based `.dark`)
- Additional theme: `theme-green` (independent of dark/light) toggles a green primary palette via CSS variables

## CI (GitHub Actions)

Workflow: `[.github/workflows/ci.yml](/home/lawrence/workspace/downkit/.github/workflows/ci.yml)` runs:

- `bun install --frozen-lockfile`
- `bun run typecheck`
- `bun run lint`
- `bun run test`
- `bun run build`

## Deployment

### Vercel

- Import the repo in Vercel and deploy.
- Set environment variables in the Vercel UI (if/when your app needs them).
- The app is compatible with standard Next.js builds; no special adapter required.

### Self-host (Linux process with Bun + systemd)

1. Build on the server:

```bash
bun install --frozen-lockfile
bun run build
```

2. Run with systemd using the example unit:

- Copy `[deploy/systemd/downkit.service](/home/lawrence/workspace/downkit/deploy/systemd/downkit.service)` to `/etc/systemd/system/downkit.service`
- Update `WorkingDirectory=/opt/downkit` and any `Environment=` lines

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now downkit
sudo systemctl status downkit
```

### Docker (Bun-based)

Build and run:

```bash
docker build -t downkit:local .
docker run --rm -p 3000:3000 downkit:local
```

### Kubernetes

Manifests are under `k8s/`:

- `k8s/deployment.yaml`
- `k8s/service.yaml`
- `k8s/ingress.yaml`

Update at minimum:

- `spec.rules[0].host` in `k8s/ingress.yaml`
- `image:` in `k8s/deployment.yaml`

## Testing

### Unit / component tests (Vitest + React Testing Library)

Run unit tests:

```bash
bun run test:unit
```

Watch mode (optional):

```bash
bunx vitest
```

### E2E tests (WebdriverIO)

1. Start the app (in a separate terminal):

```bash
bun dev
```

2. Run e2e tests:

```bash
bun run test:e2e
```

If your app is running on a different URL, set:

```bash
E2E_BASE_URL=http://localhost:3000 bun run test:e2e
```

## Project structure

- **`app/`**: Next.js App Router routes, layouts, and global styles
  - `app/layout.tsx`: root layout + fonts
  - `app/page.tsx`: home page
  - `app/globals.css`: Tailwind v4 imports + design tokens (CSS variables)
- **`components/`**: reusable components
  - `components/ui/`: shadcn/ui generated components
- **`lib/`**: shared utilities (e.g. `lib/utils.ts`)
- **`public/`**: static assets

## Conventions

- **Path aliases**: import app code via `@/...` (configured in `tsconfig.json`)
- **Server vs Client Components**:
  - Prefer Server Components by default in `app/`
  - Add `"use client"` only when needed (state, effects, browser-only APIs)
- **UI components**:
  - Keep app-specific components in `components/`
  - Keep shadcn/ui primitives in `components/ui/`

## Git commit guideline (Conventional Commits)

We follow the **Conventional Commits** specification:

- Format:

```text
<type>[optional scope]: <description>
```

- Common types:
  - `feat`: new feature
  - `fix`: bug fix
  - `docs`: documentation-only change
  - `test`: add/update tests
  - `ci`: CI workflow changes
  - `chore`: maintenance (deps, tooling, non-user-facing work)

- Scopes (optional): use short scopes like `i18n`, `theme`, `e2e`, `ci`, `docker`, `k8s`.
- Breaking changes: add `!` after type/scope (e.g. `feat(i18n)!:`) or add a `BREAKING CHANGE:` footer.

Examples:

```text
feat(i18n): add locale switcher for zh-CN/zh-TW/en
fix(theme): persist green theme toggle across reloads
test(unit): add RTL test for ClientExample
test(e2e): add WDIO smoke test for home page
ci: run e2e job on pull requests
docs: document how to run tests locally
```

Reference: [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/).

## Scripts

- **`dev`**: start Next.js dev server
- **`build`**: production build
- **`start`**: run built app
- **`lint`**: run ESLint

See `package.json` for the authoritative list.

## Configuration surface area

- **Next.js**: `next.config.ts` (currently minimal)
- **ESLint**: `eslint.config.mjs` (Next Core Web Vitals + TypeScript)
- **TypeScript**: `tsconfig.json` (strict, bundler module resolution)
- **shadcn/ui**: `components.json` (aliases + Tailwind CSS entry)
- **PostCSS**: `postcss.config.mjs` (Tailwind v4 plugin)

## Styling & theming

- Tailwind v4 is imported directly in `app/globals.css` (`@import "tailwindcss";`)
- Design tokens are expressed as **CSS variables** (OKLCH palette) and mapped via `@theme inline`
- Dark mode uses the `dark` class variant (`@custom-variant dark (&:is(.dark *));`)

## Production-ready checklist (target spec)

Use this section as the **spec** for what “done” looks like when turning the scaffold into a production app.

### Quality gates (required)

- **Typecheck**: `tsc --noEmit`
- **Lint**: ESLint passes in CI
- **Build**: `next build` succeeds in CI
- **Formatting**: Prettier (or equivalent) enforced via CI + pre-commit

### Testing strategy (required)

- **Unit tests**: Vitest/Jest for utilities and components
- **Component tests** (optional but recommended): React Testing Library
- **E2E tests** (recommended): Playwright (critical flows)
- **Test coverage**: agree a threshold and enforce in CI (or enforce “changed files must have tests”)

### Environment & configuration (required)

- **`.env.local`** for local development (never committed)
- **`.env.example`** committed with documented variables
- **Runtime validation** for env vars (e.g. Zod-based validation)
- **Secrets management** in deployment platform (never store secrets in repo)

### Security (required)

- **Security headers** policy (CSP, HSTS, X-Content-Type-Options, etc.) as appropriate
- **Dependency hygiene**: automated update tooling + vulnerability scanning
- **Safe logging**: never log secrets/PII; apply redaction helpers
- **Input validation** for all API boundaries (if/when API routes are added)

### Performance (required)

- **Core Web Vitals** monitored
- **Bundle discipline**: avoid accidental heavy client bundles; keep Client Components small
- **Caching**: define caching strategy (Next fetch caching, revalidation, CDN rules)
- **Images**: use `next/image` where applicable

### SEO & accessibility (recommended)

- **Metadata**: per-route `metadata` and sensible defaults in `app/layout.tsx`
- **A11y**: keyboard navigation, focus states, semantic HTML, aria where required
- **Localization** (optional): add i18n if needed (this repo does not include it yet)

### Observability (recommended)

- **Error tracking** (e.g. Sentry) with source maps and release tags
- **Analytics** (optional): privacy-aware measurement
- **Logging**: structured logs with request correlation (if server/API exists)

### CI/CD (required)

- CI pipeline runs at least:
  - install → typecheck → lint → tests → build
- **Preview deployments** on PRs
- **Production deployment** from protected branches/tags

### Release & maintenance (recommended)

- **SemVer** (or documented alternative) + changelog
- **Code ownership** and PR review rules
- **Docs**: architecture notes + decision log for major changes

## Adding shadcn/ui components

This repo is configured for shadcn/ui via `components.json`. To add components, use the shadcn CLI (depending on how you manage tooling in your environment) and keep generated primitives in `components/ui/`.


