describe("Tambah 1 barang ke keranjang", () => {
  beforeEach(() => {
    cy.login();
    cy.visit(Cypress.env("dashboardUrl"));
  });

  it("Berhasil menambahkan 1 barang ke keranjang", () => {
    cy.get(".btn_primary.btn_inventory").first().click();
    cy.get(".shopping_cart_badge").should("contain", "1");

    cy.get(".shopping_cart_link").click();
  });
});
