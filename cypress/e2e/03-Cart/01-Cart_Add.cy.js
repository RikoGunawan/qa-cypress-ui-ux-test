describe("Menambahkan 1 barang ke keranjang", () => {
  it("Berhasil", () => {
    cy.visit(Cypress.env("baseUrl")).wait(2000);
    cy.get("#user-name").type(Cypress.env("usernameTrue"));
    cy.get("#password").type(Cypress.env("passwordTrue"));
    cy.get("#login-button").contains("LOGIN").click();
    cy.wait(5000);
    cy.get(".btn_primary", { timeout: 10000 }).contains("ADD TO CART").click();
  });
});
