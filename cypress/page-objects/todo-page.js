export class GobearPage {
    navigate() {
        // cy.visit("http://gobear.com")
        cy.visit(Cypress.config('api_server'))
    }

    selectSGCountry() {
        cy.get('#button-sg').click()
    }

    clickShowMyResult() {
        cy.get('[name=product-form-submit]').click()
    }

    checkOnRadio(radioText) {
        cy.scrollTo('top')
        cy.get("[data-gb-trip-types=" + radioText + "] > label").click({ force: true })
    }

    ensureNumberOfCardAbove(number) {
        cy.get('.card-full').should('have.length.above', number)
    }
}