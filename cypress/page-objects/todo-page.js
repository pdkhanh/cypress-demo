export class GobearPage{
    navigate(){
        cy.visit("http://gobear.com")
    }

    selectSGCountry(){
        cy.get('#button-sg').click()
    }

    clickShowMyResult(){
        cy.get('[name=product-form-submit]', { timeout: 10000 }).should('be.exist').click()
    }

    checkOnRadio(radioText){
        cy.scrollTo('top')
        cy.get(`[data-gb-trip-types=${radioText}] > label`).click({force:true})
    }
}