import { DataHelper } from "../support/data.helper"

export class BasePage {
    baseUrl = "https://www.gobear.com/"
    dataHelper = new DataHelper

    navigate(path){
        path = (path == undefined) ? '' : path
        cy
        .visit(this.baseUrl + this.dataHelper.getCountry() + '/' + path)
    }

    getPageTitle() {
        return cy.title()
    }
}