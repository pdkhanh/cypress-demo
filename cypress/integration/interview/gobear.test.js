import { GobearPage } from '../../page-objects/todo-page'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})


const gobearPage = new GobearPage

describe('Travel Insurance Test', function () {
    before(function () {
        let t = () => {
            this
        }
        cy.fixture('GoBear').then(function (data) {
            console.log(data)
            this.data = data;
        })
    })
    

    it('See over 3 travel insurance cards on result page 1', () => {
        
        gobearPage.navigate()
        gobearPage.selectSGCountry()
        gobearPage.clickShowMyResult()
        gobearPage.checkOnRadio(this.data.tripType)
        gobearPage.ensureNumberOfCardAbove(3)
    })
})
