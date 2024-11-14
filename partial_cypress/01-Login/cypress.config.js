const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: ["cypress/e2e/01-Login/*.cy.js"],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
