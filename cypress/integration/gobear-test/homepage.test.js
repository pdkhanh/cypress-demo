import { GobearPage } from '../../page-objects/gobear.page'
import { DataHelper } from '../../support/data.helper'
var util = require('util')

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})


const gobearPage = new GobearPage
const dataHelper = new DataHelper

describe('Travel Insurance Test', function () {
    
    before(() => {
       cy.fixture('GoBear').then(function (data) {
           console.log(data)
           this.data = data
       })
    })

    it('See over 3 travel insurance cards on result page', function(){
        gobearPage.navigate()
        gobearPage.clickShowMyResult()
        gobearPage.checkOnRadio(this.data.tripType)
        gobearPage.ensureNumberOfCardAbove(3)
    })

    it('Verify page title is correct', function(){
        gobearPage.navigate()
        gobearPage.getPageTitle().should('eq', util.format('Compare insurance, credit card or loan in %s | GoBear', dataHelper.getCountryName()))
    })
})
