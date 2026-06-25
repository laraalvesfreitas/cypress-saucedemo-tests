describe('Swag Labs - Testes End-to-End', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com', {
      failOnStatusCode: false,
      timeout: 120000,
      pageLoadTimeout: 120000
    })
  })

  it('Busca Titulo da Aplicação', () => {
    cy.title().should('eq', 'Swag Labs')
  })
  it('Realiza login sem usuário e senha', () => {
    cy.get('[data-test="login-button"]').click()
    cy.get('.error-message-container').should('be.visible')
  })

  it('Realiza Login com usuário standard_user', () => {
    cy.get('[data-test="username"]')
      .type('standard_user')

    cy.get('[data-test="password"]')
      .type('secret_sauce')

    cy.get('[data-test="login-button"]')
      .click()
      .url().should('include', '/inventory.html')
  })

  it('Realiza Login com usuário bloqueado (locked_out_user)', () => {
    cy.get('[data-test="username"]')
      .type('locked_out_user')

    cy.get('[data-test="password"]')
      .type('secret_sauce')

    cy.get('[data-test="login-button"]')
      .click()

    cy.get('[data-test="error"]').should('be.visible')
  })

  it('Adiciona o produto Sauce Labs Bolt T-Shirt ao carrinho', () => {
    cy.LoginUsingStandard_userUsername()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').should('be.visible')
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')
  })

  it('Remove o produto Sauce Labs Bolt T-Shirt do carrinho', () => {
    cy.LoginUsingStandard_userUsername()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').should('be.visible')
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')
    cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').should('be.visible')
    cy.get('[data-test="shopping-cart-badge"]').should('not.exist')
  })

  it('Visita página de detalhes do produto Sauce Labs Backpack', () => {
    cy.LoginUsingStandard_userUsername()

    cy.get('[data-test="item-4-title-link"]')
      .click()

    cy.url()
      .should('include', 'inventory-item.html')
  })

  it('Adiciona produto ao carrinho pela página de detalhes do produto (Sauce Labs Backpack)', () => {
    cy.LoginUsingStandard_userUsername()

    cy.get('[data-test="item-4-title-link"]')
      .click()
    cy.get('[data-test="add-to-cart"]')
      .click()
    cy.get('[data-test="remove"]').should('be.visible')
  })

  it('Remove produto do carrinho pela página de detalhes do produto (Sauce Labs Backpack)', () => {
    cy.LoginUsingStandard_userUsername()

    cy.get('[data-test="item-4-title-link"]')
      .click()

    cy.get('[data-test="add-to-cart"]')
      .click()

    cy.get('[data-test="remove"]')
      .should('be.visible')

    cy.get('[data-test="remove"]')
      .click()

    cy.get('[data-test="add-to-cart"]')
      .should('be.visible')
  })

  it('Valida badge do carrinho com quantidade correta', () => {
    cy.LoginUsingStandard_userUsername()

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click()

    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')
      .click()

    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]')
      .click()

    cy.get('[data-test="shopping-cart-badge"]')
      .should('have.text', '3')
  })

  it('Finaliza compra com dados corretos', () => {
    cy.LoginUsingStandard_userUsername()

    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
      .click()

    cy.get('[data-test="shopping-cart-link"]')
      .click()

    cy.url()
      .should('include', 'cart.html')

    cy.get('[data-test="inventory-item-name"]')
      .should('have.text', 'Sauce Labs Bike Light')


    cy.get('[data-test="checkout"]')
      .click()

    cy.get('[data-test="firstName"]')
      .type('Maria')

    cy.get('[data-test="lastName"]')
      .type('Worode')

    cy.get('[data-test="postalCode"]')
      .type('96853420')

    cy.get('[data-test="continue"]')
      .click()

    cy.url()
      .should('include', 'checkout-step-two.html')

    cy.get('[data-test="finish"]')
      .click()

    cy.url()
      .should('include', 'checkout-complete.html')

    cy.get('[data-test="complete-header"]')
      .should('be.visible')
  })

  it('Permite finalizar compra sem produto no carrinho', () => {
    cy.LoginUsingStandard_userUsername()

    cy.get('[data-test="shopping-cart-badge"]')
      .should('not.exist')

    cy.get('[data-test="shopping-cart-link"]')
      .click()

    cy.url()
      .should('include', 'cart.html')


    cy.get('[data-test="checkout"]')
      .click()

    cy.get('[data-test="firstName"]')
      .type('Maria')

    cy.get('[data-test="lastName"]')
      .type('Worode')

    cy.get('[data-test="postalCode"]')
      .type('96853420')

    cy.get('[data-test="continue"]')
      .click()

    cy.url()
      .should('include', 'checkout-step-two.html')

    cy.get('[data-test="finish"]')
      .click()

    cy.url()
      .should('include', 'checkout-complete.html')

    cy.get('[data-test="complete-header"]')
      .should('have.text', 'Thank you for your order!')   
  })

  it('Realiza logout',() =>{
    cy.LoginUsingStandard_userUsername()
    cy.get('#react-burger-menu-btn').click()

    cy.get('[data-test="logout-sidebar-link"]').click()

    cy.get('[data-test="username"]')
      .should('be.visible')

    cy.get('[data-test="password"]')
      .should('be.visible')
  
  })

  it('Válida botão About',()=>{
    cy.LoginUsingStandard_userUsername()

    cy.get('#react-burger-menu-btn')
      .click()

    cy.get('[data-test="about-sidebar-link"]')
      .should('have.attr', 'href')
      .and('eq','https://saucelabs.com/')
   })

})