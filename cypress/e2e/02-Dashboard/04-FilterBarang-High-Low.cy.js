describe("Filter barang berdasarkan price dari high ke low", () => {
  beforeEach(() => {
    cy.login();
    cy.visit(Cypress.env("dashboardUrl"));
  });

  it("Berhasil menampilkan barang dari harga terbesar ke terendah", () => {
    cy.get(".product_sort_container")
      .select("hilo")
      .should("have.value", "hilo");
    cy.get(".inventory_item_price").then((elements) => {
      const itemPrices = [...elements].map((el) =>
        parseFloat(el.textContent.replace("$", "").trim()),
      );
      const sortedPrices = [...itemPrices].sort((a, b) => b - a);
      expect(itemPrices).to.deep.equal(sortedPrices);
    });
  });
});
