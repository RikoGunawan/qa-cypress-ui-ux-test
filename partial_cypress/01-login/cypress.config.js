const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      specPattern: [
      "cypress/e2e/01_login/**",
      "cypress/e2e/02_dashboard/**",
      "cypress/e2e/03_cart/**",
      ],

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
