export const config = {
  runner: "local",
  specs: ["./e2e/**/*.e2e.ts"],
  maxInstances: 1,
  logLevel: "info",
  bail: 0,
  baseUrl: process.env.E2E_BASE_URL ?? "http://localhost:3000",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 2,
  framework: "mocha",
  reporters: ["spec"],
  services: ["devtools"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: [
          "--headless=new",
          "--disable-gpu",
          "--no-sandbox",
          "--disable-dev-shm-usage",
        ],
      },
    },
  ],
} as const;


