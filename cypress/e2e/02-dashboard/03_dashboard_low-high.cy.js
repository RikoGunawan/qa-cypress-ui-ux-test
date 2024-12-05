describe("Dashboard Low-High, Melakukan filter barang berdasarkan harga dari low ke high", () => {
  it("passess", () => {
    cy.visit(Cypress.env("baseUrl")).wait(2000);
    cy.get("#user-name").type(Cypress.env("usernameTrue"));
    cy.get("#password").type(Cypress.env("passwordTrue"));
    cy.get("#login-button").contains("LOGIN").click();
    cy.wait(5000);
    cy.get(".product_sort_container").select("lohi");
    cy.wait(1000);
  });
});
