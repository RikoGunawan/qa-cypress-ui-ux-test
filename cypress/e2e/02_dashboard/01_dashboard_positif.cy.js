describe("Melakukan filter barang berdasarkan abjad dari A ke Z", () => {
    it("passess", () => {
        cy.visit(Cypress.env('baseUrl')).wait(2000);
        cy.get('#user-name').type(Cypress.env('username'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#login-button').contains("LOGIN").click();
        cy.wait(3000);

        cy.get(".product_sort_container").select("Name (A to Z)");
    });
});
