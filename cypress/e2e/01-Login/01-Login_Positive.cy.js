describe("Login Positif", () => {
  it("passess", () => {
    cy.visit(Cypress.env("baseUrl")).wait(2000);
    cy.get("#user-name").type(Cypress.env("usernameTrue"));
    cy.get("#password").type(Cypress.env("passwordTrue"));
    cy.get("#login-button").contains("LOGIN").click();
    // cy.get('.btn_action').should(be'visible').click();
    // cy.contains('button', 'Login').should('be.visible').click();
    cy.wait(8000);
  });
});
