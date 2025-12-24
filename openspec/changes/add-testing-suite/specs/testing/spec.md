## ADDED Requirements

### Requirement: Unit and component testing
The system SHALL provide a unit/component testing setup using **Vitest** and **React Testing Library**.

#### Scenario: Run unit tests locally
- **WHEN** a developer runs `bun run test:unit`
- **THEN** Vitest SHALL execute unit/component tests and return a non-zero exit code on failures

#### Scenario: Client Component interaction test
- **WHEN** a developer runs unit tests
- **THEN** at least one Client Component test SHALL render a client component and assert user interaction (e.g. click increments a counter)

#### Scenario: Server Component render test
- **WHEN** a developer runs unit tests
- **THEN** at least one Server Component test SHALL validate a server component’s rendered output (with appropriate mocking for request context)

### Requirement: End-to-end testing
The system SHALL provide an end-to-end testing setup using **WebdriverIO**.

#### Scenario: Run e2e tests locally
- **WHEN** a developer runs `bun run test:e2e`
- **THEN** WebdriverIO SHALL execute e2e tests against a running instance of the app and return a non-zero exit code on failures

#### Scenario: Home page e2e test
- **WHEN** e2e tests are executed
- **THEN** at least one test SHALL navigate to the home page and assert key demo UI is present (locale section, toggles, and example components)


