describe("Login Negatif", () => {
  it("passes", () => {
    cy.visit(Cypress.env("baseUrl")).wait(1000);

    //   melakukan login positif
    cy.get("#user-name").type(Cypress.env("loginBenar").usernameTrue);
    cy.get("#password").type(Cypress.env("loginSalah").passwordFalse);
    cy.get("#login-button").click();
    // muncul pesan error
    cy.contains(/Username and password do not match any user in this service/i);
  });
});
