describe("Hapus 1 barang dari keranjang", () => {
  beforeEach(() => {
    cy.login();
    cy.visit(Cypress.env("dashboardUrl"));
    cy.get(".btn_primary.btn_inventory").first().click();
    cy.get(".shopping_cart_link").click();
  });

  it("Berhasil menghapus 1 barang dari keranjang", () => {
    cy.get(".cart_item .btn_secondary").first().click();
    cy.get(".shopping_cart_badge").should("not.exist");
  });
});
