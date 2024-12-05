describe("Login Negatif, Melakukan login menggunakan username benar dan password salah", () => {
  it("passess", () => {
    cy.visit(Cypress.env("baseUrl")).wait(2000);
    cy.get("#user-name").type(Cypress.env("usernameTrue"));
    cy.get("#password").type(Cypress.env("passwordFalse"));
    cy.get("#login-button").contains("LOGIN").click();
    cy.wait(5000);
  });
});
