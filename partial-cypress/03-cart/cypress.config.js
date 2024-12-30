const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/v1/index.html",
    specPattern: ["cypress/e2e/03-Cart/**"],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
