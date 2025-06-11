/// <reference types="cypress" />
describe("Login", () => {

    it("Login com sucesso", () => {
        // 1. Acessar a tela https://www.saucedemo.com/
        cy.visit('https://www.saucedemo.com/')
        // 2. Digitar username válido
        cy.get('[data-test="username"]').type("standard_user");
        // 3. Digitar senha válido
        cy.get('[data-test="password"]').type("secret_sauce");
        // 4. Clicar no botão Login
        cy.get('[data-test="login-button"]').click();
        // 5. Validar o sucesso e redirecionamento
        cy.get('.app_logo').should("have.text", "Swag Labs");
    });

    it("Username incorreto no Login", () => {
        // 1. Acessar a tela https://www.saucedemo.com/
        cy.visit('https://www.saucedemo.com/')
        // 2. Digitar um username inválido
        cy.get('[data-test="username"]').type("xuxa");
        // 3. Digitar uma senha válida
        cy.get('[data-test="password"]').type("secret_sauce");
        // 4. Clicar no botão Login
        cy.get('[data-test="login-button"]').click();
        // 5. Validar msg de erro
        cy.get('[data-test="error"]').should("have.text", "Epic sadface: Username and password do not match any user in this service");
    });

    it("Senha incorreta no Login", () => {
        // 1. Acessar a tela https://www.saucedemo.com/
        cy.visit('https://www.saucedemo.com/')
        // 2. Digitar um username válido
        cy.get('[data-test="username"]').type("visual_user");
        // 3. Digitar uma senha inválida
        cy.get('[data-test="password"]').type("error");
        // 4. Clicar no botão Login
        cy.get('[data-test="login-button"]').click();
        // 5. Validar msg de erro
        cy.get('[data-test="error"]').should("have.text", "Epic sadface: Username and password do not match any user in this service");
    });

    it("Username vazio no Login", () => {
        // 1. Acessar a tela https://www.saucedemo.com/
        cy.visit('https://www.saucedemo.com/')
        // 2. Deixar campo Username vazio
        // 3. Digitar uma senha válida
        cy.get('[data-test="password"]').type("secret_sauce");
        // 4. Clicar no botão Login
        cy.get('[data-test="login-button"]').click();
        // 5 Validar msg de erro
        cy.get('.error-message-container').should("have.text", "Epic sadface: Username is required");
    });

    it("Senha vazia no Login", () => {
        // 1. Acessar a tela https://www.saucedemo.com/
        cy.visit('https://www.saucedemo.com/')
        // 2. Digitar um username válido
        cy.get('[data-test="username"]').type("performance_glitch_user");
        // Deixar campo senha vazio
        // 3. Clicar no botão Login
        cy.get('[data-test="login-button"]').click();
        // 4 Validar msg de erro
        cy.get('[data-test="error"]').should("have.text", "Epic sadface: Password is required");
    });



})