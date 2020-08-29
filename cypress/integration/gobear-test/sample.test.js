/// <reference types="cypress" />

import { ResultPage } from "../../page-objects/result.page"
import { DataHelper } from "../../support/data.helper"

const resultPage = new ResultPage

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

  it('test', () => {
    resultPage.navigate()
  })