describe("Login Positif", () => {
  it("passes", () => {
    cy.visit(Cypress.env("baseUrl")).wait(1000);

    //   melakukan login positif
    cy.get("#user-name").type(Cypress.env("loginBenar").usernameTrue);
    cy.get("#password").type(Cypress.env("loginBenar").passwordTrue);
    cy.get("#login-button").click();
    //   kalo berhasil harusnya pindah ke page inventory
    cy.location("pathname").should("equal", "/v1/inventory.html");
  });
});
