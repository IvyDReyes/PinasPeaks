// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'console';

const config = ({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 40 * 1000
  },
  use: {
    browserName: 'chromium',
    headless: false,
    screenshot:"on",
    video:"on",
    trace:"on"
  },
  reporter: 'html',

});

module.exports = config;

