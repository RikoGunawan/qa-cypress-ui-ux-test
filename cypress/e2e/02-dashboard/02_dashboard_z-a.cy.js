describe("Dashboard Z-A, Melakukan filter barang berdasarkan abjad dari Z ke A", () => {
  it("passess", () => {
    cy.visit(Cypress.env("baseUrl")).wait(2000);
    cy.get("#user-name").type(Cypress.env("usernameTrue"));
    cy.get("#password").type(Cypress.env("passwordTrue"));
    cy.get("#login-button").contains("LOGIN").click();
    cy.wait(5000);
    cy.get(".product_sort_container").select("za");
    cy.wait(1000);
  });
});
