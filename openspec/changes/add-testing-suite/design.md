## Context
Downkit is a scaffold template. It needs a testing setup that is:
- Familiar to most React/Next teams
- Simple to run locally and in CI
- Demonstrative (shows how to test client/server components and critical UI flows)

## Goals / Non-Goals

- Goals:
  - Provide a clean unit/component testing baseline using **Vitest + React Testing Library**
  - Provide an e2e baseline using **WebdriverIO**
  - Include one demo test each for client component, server component, and home page e2e
- Non-Goals:
  - Full coverage enforcement
  - Snapshot-heavy testing
  - Complex e2e environment orchestration (no docker-compose)

## Decisions

- Decision: Use `jsdom` for unit/component tests
  - Rationale: RTL requires a DOM-like environment for rendering and user interaction
- Decision: Mock `next-intl/server` for Server Component unit tests
  - Rationale: Server Components depend on runtime request context; mocking keeps the example small and stable
- Decision: Use WebdriverIO + DevTools protocol for e2e
  - Rationale: Minimizes extra driver management; works well with headless Chrome in CI

## Risks / Trade-offs

- WDIO in CI requires a browser; GitHub-hosted runners include Chrome, but self-hosted runners may need setup.
- Server Component tests can become “too mocked”; keep examples small and prefer pure logic tests where possible.

## Migration Plan

1. Add dependencies and scripts
2. Add config files (Vitest setup + WDIO config)
3. Add demo tests
4. Update CI
5. Document usage


