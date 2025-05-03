const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5500',
    env: {
      apiKey: process.env.REQRES_API_KEY
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
