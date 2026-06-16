beforeEach(() => {
  cy.visit('https://www.saucedemo.com', {
  })
})
  it('Busca Titulo da Aplicação',()=>{
    cy.title().should('eq','Swag Labs')
  })
  
  it('Realiza Login com usuário standard_user', () => {
    cy.get('[data-test="username"]')
      .type('standard_user')

    cy.get('[data-test="password"]')
      .type('secret_sauce')

    cy.get('[data-test="login-button"]')
      .click()

    cy.url().should('include', '/inventory.html')

  })

