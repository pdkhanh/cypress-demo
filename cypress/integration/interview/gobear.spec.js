/// <reference types="cypress" />

const { GobearPage } = require("../../page-objects/todo-page")

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

it('should open gobear website',()=>{
    console.log(Cypress.env())
    const gobearPage = new GobearPage()
    gobearPage.navigate()
    gobearPage.selectSGCountry()
    gobearPage.clickShowMyResult()
    gobearPage.checkOnRadio("annual")

})