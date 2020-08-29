import { BasePage } from "./base.page"
var util = require('util')

export class GobearPage extends BasePage{
    productFormSubmit = '[name=product-form-submit]'
    tripType = '[data-gb-trip-types="%s"] > label'
    carFull = '.card-full'

    clickShowMyResult() {
        cy.get(this.productFormSubmit).click()
    }

    checkOnRadio(radioText) {
        cy.scrollTo('top')
        cy.get(util.format(this.tripType, radioText)).click({ force: true })
    }

    ensureNumberOfCardAbove(number) {
        cy.get(this.carFull).should('have.length.above', number)
    }
}