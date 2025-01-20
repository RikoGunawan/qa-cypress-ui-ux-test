describe("Filter barang berdasarkan price dari low ke high", () => {
  beforeEach(() => {
    cy.login();
    cy.visit(Cypress.env("dashboardUrl"));
  });

  it("Berhasil menampilkan urutan barang dari harga rendah ke tinggi", () => {
    cy.get(".product_sort_container")
      .select("lohi")
      .should("have.value", "lohi");
    cy.get(".inventory_item_price").then((elements) => {
      const itemPrices = [...elements].map((el) =>
        parseFloat(el.textContent.replace("$", "").trim()),
      );
      const sortedPrices = [...itemPrices].sort((a, b) => a - b);
      expect(itemPrices).to.deep.equal(sortedPrices);
    });
  });
});
