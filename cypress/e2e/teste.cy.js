describe('Teste simples', () => {
  it('Abre SauceDemo', () => {
    cy.visit('https://www.saucedemo.com')
    cy.contains('Swag Labs').should('be.visible')
  })
})


// describe('Swag Labs - Testes End-to-End', () => {

//   beforeEach(() => {
//     // cy.visit('https://www.saucedemo.com')
//    cy.visit('https://www.saucedemo.com', {
//   failOnStatusCode: false
// })
//   })
//   it('Busca Titulo da Aplicação', () => {
//     cy.title().should('eq', 'Swag Labs')
//   })
//   it('Realiza login sem usuário e senha', () => {
//     cy.get('[data-test="login-button"]').click()
//     cy.get('.error-message-container').should('be.visible')
//   })

//   it('Realiza Login com usuário standard_user', () => {
//     cy.get('[data-test="username"]')
//       .type('standard_user')

//     cy.get('[data-test="password"]')
//       .type('secret_sauce')

//     cy.get('[data-test="login-button"]')
//       .click()
//       .url().should('include', '/inventory.html')
//   })

//   it('Realiza Login com usuário bloqueado (locked_out_user)', () => {
//     cy.get('[data-test="username"]')
//       .type('locked_out_user')

//     cy.get('[data-test="password"]')
//       .type('secret_sauce')

//     cy.get('[data-test="login-button"]')
//       .click()

//     cy.get('[data-test="error"]').should('be.visible')
//   })

//   it('Adiciona o produto Sauce Labs Bolt T-Shirt ao carrinho', () => {
//     cy.LoginUsingStandard_userUsername()
//     cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
//     cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').should('be.visible')
//     cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')
//   })

//   it.only('Remove o produto Sauce Labs Bolt T-Shirt do carrinho', () => {
//     cy.LoginUsingStandard_userUsername()
//     cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
//     cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').should('be.visible')
//     cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')
//     cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
//     cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').should('be.visible')
//     cy.get('[data-test="shopping-cart-badge"]').should('not.exist')
//   })

//   it('Visita página de detalhes do produto Sauce Labs Backpack', () => {
//   cy.LoginUsingStandard_userUsername()

//   cy.get('[data-test="item-4-title-link"]')
//     .click()

//   cy.url()
//     .should('include', 'inventory-item.html')
// })

// })