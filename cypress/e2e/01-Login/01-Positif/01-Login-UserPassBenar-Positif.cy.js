describe("Login Positif", () => {
  it("successfully log in", () => {
    const data = Cypress.env("LoginPositif"); // Ambil data dari env
    cy.visit(Cypress.env("baseUrl")).wait(2000);
    cy.get("#user-name").type(data.username);
    cy.get("#password").type(data.password);
    cy.get("#login-button").contains("LOGIN").click();
    cy.wait(5000);
  });
});

// describe("Login Positif", () => {
//     it("successfully log in", () => {
//         cy.visit(Cypress.env('baseUrl')).wait(2000);
//         cy.get('#user-name').type(Cypress.env('username'));
//         cy.get('#password').type(Cypress.env('password'));
//         cy.get('#login-button').contains("LOGIN").click();
//         cy.wait(5000);
//     })
// })
