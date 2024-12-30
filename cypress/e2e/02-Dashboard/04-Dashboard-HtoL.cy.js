describe("Filter Harga Barang High-Low Success", () => {
  it("passes", () => {
    cy.login();
    cy.get(".product_sort_container").select("hilo");
  });
});
