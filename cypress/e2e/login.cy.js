/// <reference types="cypress" />
describe("Login", () => {

    it("Login com sucesso", () => {
        // 1. Acessar a tela https://www.saucedemo.com/
        cy.visit('https://www.saucedemo.com/')
        // 2. Digitar email válido
        cy.get('[data-test="username"]').type("standard_user");
        // 2. Digitar senha válido
        cy.get('[data-test="password"]').type("secret_sauce");
        // 3. Clicar no botão Login
        cy.get('[data-test="login-button"]').click();
        // 4 Validar o sucesso e redirecionamento
        cy.get('.app_logo').should("have.text", "Swag Labs");


    });

    it("Email incorreto no Login", () => {
        
    });

    it("Senha incorreta no Login", () => {
        
    });

})