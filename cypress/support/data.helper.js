export class DataHelper{
    getCountry(){
        return Cypress.env('country')
    }

    getCountryName(country){
        country = (country == undefined) ? Cypress.env('country') : country
        return countryName[country]
    }
}
const countryName = {
    vn: 'VietNam',
    sg: 'Singapore'
  }