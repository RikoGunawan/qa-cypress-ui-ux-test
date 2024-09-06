const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: [
      "cypress/e2e/01_login/*cy.js",
      "cypress/e2e/02_dashboard/*cy.js",
      "cypress/e2e/03_cart/*cy.js",
    ],

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
