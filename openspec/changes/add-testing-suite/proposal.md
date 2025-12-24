# Change: Add unit + e2e testing suite (Vitest/RTL + WebdriverIO)

## Why
Downkit currently has only a minimal unit test example. A production-ready scaffold should demonstrate a consistent, repeatable approach for **component/unit testing** and **end-to-end testing**.

## What Changes
- Add **unit/component testing** stack:
  - Vitest (already present)
  - React Testing Library (`@testing-library/react`)
  - DOM assertions (`@testing-library/jest-dom`)
  - `jsdom` test environment for component tests
- Add **demo unit tests**:
  - Client Component test (interaction)
  - Server Component test (render output, with `next-intl/server` mocked)
- Add **e2e testing** stack:
  - WebdriverIO + Mocha runner
  - Headless Chrome via DevTools protocol
- Add **demo e2e test** for the home page
- Add scripts that cleanly separate unit vs e2e runs
- Update CI to run unit tests (and optionally e2e as a separate job)

## Impact
- Affected specs:
  - New capability: `testing`
- Affected code:
  - `vitest.config.ts` (move to jsdom + setup file)
  - `package.json` (new scripts, new dev dependencies)
  - Add unit tests under `components/**` and/or `__tests__/`
  - Add WebdriverIO config and `e2e/` tests
  - Update `.github/workflows/ci.yml` to run `test:unit` (and optionally `test:e2e`)


