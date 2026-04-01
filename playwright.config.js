require("dotenv").config();

const { defineConfig, devices } = require("@playwright/test");

const baseURL = process.env.BASE_URL || "http://localhost:3000";

module.exports = defineConfig({
  testDir: "./tests/playwright",
  timeout: 30 * 1000,
  expect: {
    timeout: 5 * 1000,
  },
  reporter: "list",
  workers: 1,
  use: {
    baseURL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    viewport: { width: 1440, height: 1200 },
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1440, height: 1200 },
      },
    },
  ],
});
