import { defineConfig } from "cypress";
import { createHero, deleteHero } from './cypress/support/data';
import allureWriter from '@shelex/cypress-allure-plugin/writer';

export default defineConfig({
  projectId: 'nd8nd1',
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      on('task', {
        createHero,
        deleteHero,
      });

      allureWriter(on, config);
      return config;
    },
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});