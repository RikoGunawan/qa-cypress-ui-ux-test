describe("Login Negatif", () => {
  it("passes", () => {
    cy.visit(Cypress.env("baseUrl")).wait(1000);

    //   melakukan login positif
    cy.get("#user-name").type(Cypress.env("loginSalah").usernameLocked);
    cy.get("#password").type(Cypress.env("loginBenar").passwordTrue);
    cy.get("#login-button").click();
    // muncul pesan error
    cy.contains(/Sorry, this user has been locked out./i);
  });
});
