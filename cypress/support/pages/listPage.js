const elements = require('./listElements').ELEMENTS
const baseUrl = Cypress.config('baseUrl')

export const columns = ["id", "name", "color", "fabric", "image", "button"]

class ListPage {
  visitList () {
    cy.visit(baseUrl)
  }

  accessItem (row) {
    cy.get(elements.buttonEdit(row)).click()
  }

  getNumbers (row) {
    cy.get(elements.tableRow).each(($el, index) => {
      if (index === row) {
        cy.wrap($el).find(elements.spanTable).each(($el, index) => {
          cy.wrap($el).invoke('text').then(text => {
            cy.wrap(text).as(columns[index + 1])
          })
        })
      }
    })
  }
}

export default new ListPage()