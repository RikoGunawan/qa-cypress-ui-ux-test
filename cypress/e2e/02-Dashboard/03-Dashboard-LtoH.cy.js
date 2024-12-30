describe("Filter Harga Barang Low-High Success", () => {
  it("passes", () => {
    cy.login();
    cy.get(".product_sort_container").select("lohi");
  });
});
