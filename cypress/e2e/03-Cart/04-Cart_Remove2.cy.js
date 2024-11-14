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

    cy.get(".shopping_cart_link").click();
    cy.url().should("include", "/cart.html");
    cy.get(".cart_item").each(($el) => {
      cy.wrap($el).find("button").contains("REMOVE").click();
    });
    cy.get(".shopping_cart_badge").should("not.exist");
  });
});
