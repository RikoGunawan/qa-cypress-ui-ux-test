describe("Filter Barang Success", () => {
  it("passes", () => {
    cy.login();
    cy.get(".product_sort_container").select("za");
  });
});
