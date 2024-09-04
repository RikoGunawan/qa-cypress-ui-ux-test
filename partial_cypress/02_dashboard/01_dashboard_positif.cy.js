describe("Melakukan filter barang berdasarkan abjad dari A ke Z", () => {
    it("passess", () => {
        cy.visit(Cypress.env('baseUrlDashboard')).wait(2000);
        cy.get('#.product_sort_container').contains("TEKAN").click();
        cy.get('#"Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)"').contains("TEKAN").click();
        cy.wait(5000);
    })
})
