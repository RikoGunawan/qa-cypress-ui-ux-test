describe("Login positif", () => {
  it("passes", () => {
    cy.visit(Cypress.env("baseUrl")).wait(2000);
    cy.get("#user-name").type(Cypress.env("username"));
    cy.get("#password").type(Cypress.env("password"));
    cy.get("#login-button").click();
    cy.wait(3000);
  });
});
