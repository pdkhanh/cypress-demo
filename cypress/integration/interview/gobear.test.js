
import 'cypress-wait-until'

context('Waiting', () => {
    beforeEach(() => {
      cy.visit('http://dev.gobear.com')
    })

it('should open gobear website',()=>{
    //cy.visit("http://dev.gobear.com");
    cy.server()
    cy.route('PUT','/api/label/*').as('route1')
    cy.get('#button-sg').click()
    cy.wait(1000)
    //cy.wait(['@route1'],{responseTimeout:15000})
    //cy.get('[name=product-form-submit]', { timeout: 10000 }).should('be.exist').click();
    cy.get('[name=product-form-submit]').contains('SHOW').click()
    //cy.get('[name=product-form-submit]').click()
    //cy.waitUntil(() => cy.get('[name="product-form-submit"]').then($el => $el.is(':visible')))
  // ... then, check that it's valid string asserting about it




    // cy.get('[name="product-form-submit"]').as('show').then($button=>{
    //     if($button.is(':visible')){cy.get('@show').click({force:true})
    // }
        
    // })
    cy.get('.loading-container').as('loading')
    cy.wait('@loading')
})
})