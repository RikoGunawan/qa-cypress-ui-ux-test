describe("User Salah Pass Benar", () => {
  it("Username and password do not match any user in this service", () => {
    const data = Cypress.env("UserSalahPassBenar");
    cy.visit(Cypress.env("baseUrl")).wait(2000);
    cy.get("#user-name").type(data.username);
    cy.get("#password").type(data.password);
    cy.get("#login-button").contains("LOGIN").click();
  });
});
