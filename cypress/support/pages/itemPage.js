const elements = require('./itemElements').ELEMENTS
const columns = require('./listPage').columns

class ItemPage {
  validateItemNumbers () {
    cy.get('@' + columns[2]).then(value => {
      cy.get(elements.spanColor).should('have.length', value)
    })
    cy.get('@' + columns[3]).then(value => {
      // + 1 because the first column is for the colors names
      cy.get(elements.spanFabric).should('have.length', Number(value) + 1)
    })
    cy.get('@' + columns[4]).then(value => {
      cy.get(elements.imgs).should('have.length', value)
    })
  }
}

export default new ItemPage()