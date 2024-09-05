describe("login negatif (username benar ,password salah)", () => {
    it("passess", () => {
        cy.visit(Cypress.env('baseUrl')).wait(2000);
        cy.get('#user-name').type(Cypress.env('username'));
        cy.get('#password').type(Cypress.env('passwordfalse'));
        cy.get('#login-button').contains("LOGIN").click();
    })
})
