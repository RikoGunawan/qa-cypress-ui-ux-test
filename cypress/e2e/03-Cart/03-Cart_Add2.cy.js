describe("Menambahkan 2 barang ke keranjang", () => {
  it("Berhasil", () => {
    cy.visit(Cypress.env("baseUrl")).wait(2000);
    cy.get("#user-name").type(Cypress.env("usernameTrue"));
    cy.get("#password").type(Cypress.env("passwordTrue"));
    cy.get("#login-button").contains("LOGIN").click();
    cy.wait(5000);

    cy.get(".inventory_item").eq(0).find("button").click();
    cy.get(".inventory_item").eq(1).find("button").click();
    cy.get(".shopping_cart_badge").should("contain", "2");
  });
});
