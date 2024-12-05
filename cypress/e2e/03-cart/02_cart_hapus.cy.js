describe("Cart Hapus, Berhasil menghapus 1 barang dari keranjang", () => {
  it("passess", () => {
    cy.visit(Cypress.env("baseUrl")).wait(2000);
    cy.get("#user-name").type(Cypress.env("usernameTrue"));
    cy.get("#password").type(Cypress.env("passwordTrue"));
    cy.get("#login-button").contains("LOGIN").click();
    cy.wait(5000);
    cy.get(
      "body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)",
    ).click();
    cy.get("#shopping_cart_container").click();
    cy.wait(1000);
    cy.get(".btn_secondary.cart_button").click();
  });
});
