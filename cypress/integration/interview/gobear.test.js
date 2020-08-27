import { GobearPage } from '../../page-objects/todo-page'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})


const gobearPage = new GobearPage

describe('Travel Insurance Test', function () {
    
    before(() => {
       cy.fixture('GoBear').as('data')
    })

    it('See over 3 travel insurance cards on result page', function(){
        debugger
        gobearPage.navigate()
        gobearPage.selectSGCountry()
        gobearPage.clickShowMyResult()
        gobearPage.checkOnRadio(this.data.tripType)
        gobearPage.ensureNumberOfCardAbove(3)
    })
})
