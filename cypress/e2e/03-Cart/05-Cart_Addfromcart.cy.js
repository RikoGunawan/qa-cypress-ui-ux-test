describe("Menambah 1 barang dari menu all item, kemudian masuk icon keranjang kemudian menambahkan 1 barang lagi", () => {
  it("Berhasil", () => {
    cy.visit(Cypress.env("baseUrl")).wait(2000);
    cy.get("#user-name").type(Cypress.env("usernameTrue"));
    cy.get("#password").type(Cypress.env("passwordTrue"));
    cy.get("#login-button").contains("LOGIN").click();
    cy.wait(5000);

    cy.url().should("include", "/inventory.html");
    cy.get(".inventory_item").eq(0).find("button").click();
    cy.get(".shopping_cart_badge").should("contain", "1");

    cy.get(".shopping_cart_link").click();
    cy.url().should("include", "/cart.html");
    cy.get(".cart_footer").find(".btn_secondary").click();

    cy.url().should("include", "/inventory.html");
    cy.get(".inventory_item").eq(1).find("button").click();
    cy.get(".shopping_cart_badge").should("contain", "2");
  });
});
