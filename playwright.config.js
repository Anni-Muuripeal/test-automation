const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 15000,
  expect: {
    timeout: 5000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 
  [['html',],
  ['dot']],
  use: {
    baseURL: 'https://travel.agileway.net',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
});