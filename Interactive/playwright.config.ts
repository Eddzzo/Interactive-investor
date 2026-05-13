import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  retries: 2,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: "https://automationexercise.com",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure"
  }
});
