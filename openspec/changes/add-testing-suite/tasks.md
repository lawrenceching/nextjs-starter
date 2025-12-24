## 1. Implementation

- [ ] 1.1 Add unit testing dependencies: `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`
- [ ] 1.2 Update `vitest.config.ts` to use `jsdom` and add a `tests/setup.ts` that imports `@testing-library/jest-dom`
- [ ] 1.3 Add demo unit test for Client Component: `components/examples/ClientExample.test.tsx`
- [ ] 1.4 Add demo unit test for Server Component: `components/examples/ServerExample.test.tsx` (mock `next-intl/server`, freeze time)
- [ ] 1.5 Add e2e dependencies: `webdriverio`, `@wdio/cli`, `@wdio/local-runner`, `@wdio/mocha-framework`, `@wdio/spec-reporter`, `@wdio/devtools-service`
- [ ] 1.6 Add `wdio.conf.ts` and `e2e/home.e2e.ts` (navigate to `/zh-CN` and assert key UI)
- [ ] 1.7 Add scripts:
  - `test:unit` → Vitest
  - `test:e2e` → WDIO
  - `test` → run unit tests by default
- [ ] 1.8 Update `.github/workflows/ci.yml` to run `test:unit` (and optionally `test:e2e` in a dedicated job)
- [ ] 1.9 Document test usage in `README.md` (how to run unit and e2e locally)


