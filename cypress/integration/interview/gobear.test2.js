/// <reference types="cypress" />



Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
  // BE CAREFUL of adding unnecessary wait times.
  // https://on.cypress.io/best-practices#Unnecessary-Waiting

  // https://on.cypress.io/wait
  it('cy.wait() - wait for a specific amount of time', () => {
    cy.visit('http://dev.gobear.com')
    cy.wait(1000)
    cy.get('#button-sg').click()
    cy.get('[name=travel-form-trip-type]').select('annual')
    cy.get('[name=travel-form-trip-type]').select('single')
    cy.get('[name=travel-form-trip-type]').select('annual')
    cy.wait(5000)
    //cy.wait(['@route1'],{responseTimeout:15000})
    //cy.get('[name=product-form-submit]', { timeout: 10000 }).should('be.exist').click();
    //cy.get('[name=product-form-submit]').click()






    // cy.get('.wait-input1').type('Wait 1000ms after typing')
    // cy.wait(1000)
    // cy.get('.wait-input2').type('Wait 1000ms after typing')
    // cy.wait(1000)
    // cy.get('.wait-input3').type('Wait 1000ms after typing')
    // cy.wait(1000)
  })

  // it('cy.wait() - wait for a specific route', () => {
  //   cy.server()

  //   // Listen to GET to comments/1
  //   cy.route('GET', 'comments/*').as('getComment')

  //   // we have code that gets a comment when
  //   // the button is clicked in scripts.js
  //   cy.get('.network-btn').click()

  //   // wait for GET comments/1
  //   cy.wait('@getComment').its('status').should('eq', 200)
  // })
