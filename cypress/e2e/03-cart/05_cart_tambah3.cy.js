describe("Cart Tambah 3, user melakukan tambah 1 barang dari menu all item, kemudian masuk ke icon keranjang kemudian menambahkan 1 barang lagi", () => {
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
    cy.get("a[class='btn_secondary']").click();
    cy.get(
      "body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > button:nth-child(2)",
    ).click();
  });
});
