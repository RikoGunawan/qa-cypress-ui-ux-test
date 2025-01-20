describe("Tambah barang dari menu keranjang", () => {
  beforeEach(() => {
    cy.login();
    cy.visit(Cypress.env("dashboardUrl"));
  });

  it("Berhasil menambahkan barang dari menu all items dan menambahkan barang lagi ke keranjang", () => {
    cy.get(".btn_primary.btn_inventory").first().click();
    cy.get(".shopping_cart_badge").should("contain", "1");
    cy.get(".shopping_cart_link").click();

    cy.get(".btn_secondary").contains("Continue Shopping").click();

    cy.get(".btn_primary.btn_inventory").eq(1).click();
    cy.get(".shopping_cart_badge").should("contain", "2");
    cy.get(".shopping_cart_link").click();
  });
});
