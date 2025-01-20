describe("Tambah 2 barang ke keranjang", () => {
  beforeEach(() => {
    cy.login();
    cy.visit(Cypress.env("dashboardUrl"));
  });

  it("Berhasil menambahkan 2 barang ke keranjang", () => {
    cy.get(".btn_primary.btn_inventory").first().click();
    cy.get(".btn_primary.btn_inventory").eq(1).click();
    cy.get(".shopping_cart_badge").should("contain", "2");

    cy.get(".shopping_cart_link").click();
  });
});
