import { GobearPage } from '../../page-objects/todo-page'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})


const gobearPage = new GobearPage

describe('Travel Insurance Test', function () {
    let that;
    before(function () {
        cy.fixture('GoBear').then(function (data) {
            console.log(data)
            this.data = data;
            that = this;
        })
    })

    it('See over 3 travel insurance cards on result page', () => {
        gobearPage.navigate()
        gobearPage.selectSGCountry()
        gobearPage.clickShowMyResult()
        gobearPage.checkOnRadio(that.data.tripType)
        gobearPage.ensureNumberOfCardAbove(3)
    })
})